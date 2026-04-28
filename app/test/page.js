'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './test.css';
import { QUIZZES } from './data';
import { saveUser, getAllUsers } from '../../lib/sync';

export default function TestInterface() {
  const [currentQuizId, setCurrentQuizId] = useState(null);
  const [quizName, setQuizName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      router.push('/login');
    }
  }, [router]);

  const [currIdx, setCurrIdx] = useState(0);
  const [answers, setAnswers] = useState({}); // { qId: { status: 'answered', value: [] } }
  const [visited, setVisited] = useState({ 1: true }); // By default visited first
  const [timeLeft, setTimeLeft] = useState(null);
  const [questionTimes, setQuestionTimes] = useState({}); // { qId: seconds }
  const [showCalc, setShowCalc] = useState(false);
  const [calcDisplay, setCalcDisplay] = useState('');
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [finalResult, setFinalResult] = useState(null);

  useEffect(() => {
    const qId = localStorage.getItem('currentQuizId') || '1';
    setCurrentQuizId(qId);
    const qName = localStorage.getItem('currentQuizName') || 'GO CLASSES CS 2025 | WEEKLY QUIZ';
    setQuizName(qName);
    
    // Set time based on quiz ID
    const duration = qId === "3" ? 35 : 45;
    setTimeLeft(duration * 60);
  }, []);

  const quizQuestions = QUIZZES[currentQuizId] || QUIZZES["1"];
  const quizNameText = quizName;
  const q = quizQuestions[currIdx];

  useEffect(() => {
    if (!currentQuizId || !quizQuestions) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
      
      // Track time for current question
      const currentQId = quizQuestions[currIdx]?.id;
      if (currentQId) {
        setQuestionTimes(prev => ({
          ...prev,
          [currentQId]: (prev[currentQId] || 0) + 1
        }));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQuizId, currIdx, quizQuestions]);

  if (!currentQuizId) return null;

  const formatTime = (secs) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    if (h > 0) return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (index) => {
    const currentStatus = answers[q.id]?.status || 'not-answered';
    let currentVals = answers[q.id]?.value || [];

    if (q.type === 'MCQ') {
      currentVals = [index];
    } else if (q.type === 'MSQ') {
      if (currentVals.includes(index)) {
        currentVals = currentVals.filter(v => v !== index);
      } else {
        currentVals = [...currentVals, index];
      }
    }
    
    // Auto status to answered if interacting and not already marked
    let newStatus = currentStatus;
    if (!currentStatus.includes('review') && currentVals.length > 0) {
       newStatus = 'answered';
    } else if (currentVals.length === 0 && !currentStatus.includes('review')) {
       newStatus = 'not-answered';
    }

    setAnswers({ ...answers, [q.id]: { status: newStatus, value: currentVals } });
  };

  const handleNatChange = (e) => {
    const val = e.target.value;
    const currentStatus = answers[q.id]?.status || 'not-answered';
    let newStatus = currentStatus;
    if (!currentStatus.includes('review') && val !== '') newStatus = 'answered';
    if (val === '' && !currentStatus.includes('review')) newStatus = 'not-answered';

    setAnswers({ ...answers, [q.id]: { status: newStatus, value: val } });
  };

  const goToNext = (statusUpdate) => {
    if (statusUpdate) {
      setAnswers({ ...answers, [q.id]: { ...answers[q.id], status: statusUpdate, value: answers[q.id]?.value || (q.type==='NAT'?'':[]) } });
    }
    const nxt = currIdx < quizQuestions.length - 1 ? currIdx + 1 : currIdx;
    setCurrIdx(nxt);
    setVisited({ ...visited, [quizQuestions[nxt].id]: true });
  };

  const clearResponse = () => {
    setAnswers({ ...answers, [q.id]: { status: 'not-answered', value: q.type==='NAT'?'':[] } });
  };

  const getStatusCounts = () => {
    let answered = 0, notAnswered = 0, review = 0, answeredReview = 0, notVisited = 0;
    quizQuestions.forEach(qu => {
      if (!visited[qu.id]) notVisited++;
      else {
        const s = answers[qu.id]?.status || 'not-answered';
        if (s === 'answered') answered++;
        if (s === 'not-answered') notAnswered++;
        if (s === 'review') review++;
        if (s === 'answered-review') answeredReview++;
      }
    });
    return { answered, notAnswered, review, answeredReview, notVisited };
  };
  const counts = getStatusCounts();

  // Calc Logic
  const calcKeyPress = (key) => {
    if (key === 'C') { setCalcDisplay(''); }
    else if (key === '=') {
      try {
        setCalcDisplay(eval(calcDisplay).toString());
      } catch(e) { setCalcDisplay('Error'); }
    } else {
      setCalcDisplay(prev => prev === 'Error' ? key : prev + key);
    }
  };

  const handleFinalSubmit = () => {
    let score = 0;
    const categoryStats = {}; // { category: { correct, total } }
    const detailedHistory = [];

    quizQuestions.forEach(qu => {
      const userAns = answers[qu.id]?.value;
      const correctAns = qu.correctAnswer;
      const category = qu.category || 'General';
      const timeSpent = questionTimes[qu.id] || 0;

      if (!categoryStats[category]) categoryStats[category] = { correct: 0, total: 0 };
      categoryStats[category].total++;

      let isCorrect = false;
      if (correctAns !== undefined && userAns !== undefined) {
        if (qu.type === 'NAT') {
          isCorrect = String(userAns) === String(correctAns);
        } else if (qu.type === 'MCQ') {
          isCorrect = Array.isArray(userAns) && Array.isArray(correctAns) && userAns[0] === correctAns[0];
        } else if (qu.type === 'MSQ') {
          isCorrect = Array.isArray(userAns) && Array.isArray(correctAns) && 
                      userAns.length === correctAns.length && 
                      userAns.every(v => correctAns.includes(v));
        }
      }

      if (isCorrect) {
        score += qu.marks.positive;
        categoryStats[category].correct++;
      } else if (userAns !== undefined && (Array.isArray(userAns) ? userAns.length > 0 : userAns !== '')) {
        score -= qu.marks.negative;
      }

      detailedHistory.push({
        id: qu.id,
        category,
        isCorrect,
        timeSpent,
        type: qu.type
      });
    });

    const totalQuestions = quizQuestions.length;
    const avgTime = totalQuestions > 0 ? Object.values(questionTimes).reduce((a, b) => a + b, 0) / totalQuestions : 0;
    
    // Analyze weak and strong topics
    const weakTopics = [];
    const strongTopics = [];
    Object.keys(categoryStats).forEach(cat => {
      const perc = (categoryStats[cat].correct / categoryStats[cat].total) * 100;
      if (perc < 50) weakTopics.push(cat);
      else strongTopics.push(cat);
    });

    const testSummary = {
      testId: currentQuizId,
      testName: quizNameText,
      score: score.toFixed(2),
      avgTime: avgTime.toFixed(1),
      date: new Date().toLocaleString(),
      detailedHistory,
      weakTopics,
      strongTopics
    };

    // Save to global history (for Admin & Persistence)
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (currentUser.email) {
      // Fetch latest users from DB to ensure we don't overwrite others' data
      getAllUsers().then(allUsers => {
        const userIndex = allUsers.findIndex(u => u.email === currentUser.email);
        if (userIndex !== -1) {
          const targetUser = allUsers[userIndex];
          
          // Master History (Permanent for Admin)
          if (!targetUser.adminMasterHistory) targetUser.adminMasterHistory = [];
          targetUser.adminMasterHistory.push(testSummary);
          
          // Active History (Visible to Student)
          if (!targetUser.history) targetUser.history = [];
          targetUser.history.push(testSummary);
          
          // Sync back to Global DB
          saveUser(targetUser).then(() => {
             // Also update local copy for the session
             localStorage.setItem('currentUser', JSON.stringify(targetUser));
          });
        }
      });
    }

    // Save to local device history (for user dashboard)
    const existingHistory = JSON.parse(localStorage.getItem('testHistory') || '[]');
    localStorage.setItem('testHistory', JSON.stringify([...existingHistory, testSummary]));
    
    setFinalResult(testSummary);
    setTestSubmitted(true);
  };

  if (testSubmitted && finalResult) {
    return (
      <div className="test-container" style={{background: '#f1f5f9', overflowY: 'auto', padding: '40px 0'}}>
         <div style={{background: 'white', padding: '40px', borderRadius: '24px', maxWidth: '800px', margin: '0 auto', boxShadow: '0 20px 50px rgba(0,0,0,0.1)'}}>
           <h1 style={{color: '#16a34a', fontSize: '2.5rem', marginBottom: '10px', textAlign: 'center'}}>Test Submitted! ✅</h1>
           <div style={{textAlign: 'center', marginBottom: '30px'}}>
             <span style={{fontSize: '4rem', fontWeight: 800, color: 'var(--primary)'}}>{finalResult.score}</span>
             <p style={{color: '#64748b', fontWeight: 600}}>YOUR TOTAL SCORE</p>
           </div>

           <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px'}}>
             <div style={{padding: '20px', background: '#f8fafc', borderRadius: '16px'}}>
               <p style={{color: '#94a3b8', fontSize: '0.8rem', fontWeight: 700}}>AVERAGE TIME / Q</p>
               <h3 style={{fontSize: '1.5rem'}}>{finalResult.avgTime}s</h3>
             </div>
             <div style={{padding: '20px', background: '#f8fafc', borderRadius: '16px'}}>
               <p style={{color: '#94a3b8', fontSize: '0.8rem', fontWeight: 700}}>ACCURACY</p>
               <h3 style={{fontSize: '1.5rem'}}>{((finalResult.detailedHistory.filter(h => h.isCorrect).length / quizQuestions.length) * 100).toFixed(0)}%</h3>
             </div>
           </div>

           <div style={{marginBottom: '30px'}}>
             <h4 style={{marginBottom: '15px', color: '#1e293b'}}>Topic Analysis</h4>
             <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
               {finalResult.strongTopics.map(t => <span key={t} style={{padding: '8px 15px', background: '#dcfce7', color: '#15803d', borderRadius: '30px', fontWeight: 600, fontSize: '0.85rem'}}>Strong: {t}</span>)}
               {finalResult.weakTopics.map(t => <span key={t} style={{padding: '8px 15px', background: '#fee2e2', color: '#b91c1c', borderRadius: '30px', fontWeight: 600, fontSize: '0.85rem'}}>Weak: {t}</span>)}
             </div>
           </div>

           <Link href="/" className="action-btn" style={{textDecoration: 'none', display: 'block', textAlign: 'center', padding: '18px', fontSize: '1.1rem', borderRadius: '16px'}}>Return to Dashboard</Link>
         </div>
      </div>
    );
  }

  const allAnswered = counts.answered + counts.answeredReview === quizQuestions.length;

  return (
    <div className="test-container">
      {/* HEADER */}
      <header className="test-header">
        <div className="test-title">
          <Link href="/" className="header-back">&#8592; Back</Link>
          <span>{quizNameText}</span>
        </div>
        <div className="test-time-calc">
          <button className="calc-btn" onClick={() => setShowCalc(!showCalc)}>
            <span style={{fontSize: '1.2rem', marginRight: '5px'}}>📱</span> Scientific Calculator
          </button>
          <div className="timer">Time Left: {timeLeft !== null ? formatTime(timeLeft) : "--:--"}</div>
        </div>
      </header>

      {/* CALCULATOR MODAL */}
      {showCalc && (
        <div className="calculator-modal">
          <div className="calc-header">
            <span>Calculator</span>
            <button className="close-calc" onClick={() => setShowCalc(false)}>X</button>
          </div>
          <div className="calc-display">{calcDisplay || '0'}</div>
          <div className="calc-body">
            <button className="cb func" onClick={()=>calcKeyPress('Math.sin(')}>sin</button>
            <button className="cb func" onClick={()=>calcKeyPress('Math.cos(')}>cos</button>
            <button className="cb func" onClick={()=>calcKeyPress('Math.tan(')}>tan</button>
            <button className="cb op" onClick={()=>calcKeyPress('C')}>C</button>
            
            <button className="cb func" onClick={()=>calcKeyPress('Math.log10(')}>log</button>
            <button className="cb func" onClick={()=>calcKeyPress('Math.log(')}>ln</button>
            <button className="cb func" onClick={()=>calcKeyPress('Math.sqrt(')}>√</button>
            <button className="cb op" onClick={()=>calcKeyPress('/')}>÷</button>
            
            <button className="cb" onClick={()=>calcKeyPress('7')}>7</button>
            <button className="cb" onClick={()=>calcKeyPress('8')}>8</button>
            <button className="cb" onClick={()=>calcKeyPress('9')}>9</button>
            <button className="cb op" onClick={()=>calcKeyPress('*')}>×</button>
            
            <button className="cb" onClick={()=>calcKeyPress('4')}>4</button>
            <button className="cb" onClick={()=>calcKeyPress('5')}>5</button>
            <button className="cb" onClick={()=>calcKeyPress('6')}>6</button>
            <button className="cb op" onClick={()=>calcKeyPress('-')}>-</button>
            
            <button className="cb" onClick={()=>calcKeyPress('1')}>1</button>
            <button className="cb" onClick={()=>calcKeyPress('2')}>2</button>
            <button className="cb" onClick={()=>calcKeyPress('3')}>3</button>
            <button className="cb op" onClick={()=>calcKeyPress('+')}>+</button>
            
            <button className="cb" onClick={()=>calcKeyPress('0')}>0</button>
            <button className="cb" onClick={()=>calcKeyPress('.')}>.</button>
            <button className="cb eq" onClick={()=>calcKeyPress('=')}>=</button>
          </div>
        </div>
      )}

      {/* MAIN BODY */}
      <div className="test-body">
        
        {/* LEFT AREA: QUESTION */}
        <div className="question-area">
          <div className="question-scroll-content">
            <div className="q-header">
              <div className="q-number">Q.{currIdx + 1}</div>
              <div className="q-marks">
                <span className="type-badge">{q.type}</span>
                <span className="pos-mark">+{q.marks.positive}</span>
                <span className="neg-mark">{q.marks.negative}</span>
              </div>
            </div>

            <div className="q-text" dangerouslySetInnerHTML={{ __html: q.question }}></div>

            {q.type !== 'NAT' ? (
              <div className="options-container">
                {q.options.map((opt, i) => {
                  const letters = ['A', 'B', 'C', 'D'];
                  const valArr = answers[q.id]?.value || [];
                  const isSelected = valArr.includes(i);
                  return (
                    <div 
                      key={i} 
                      className={`option-row ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelectOption(i)}
                    >
                      <div className="option-letter">{letters[i]}</div> 
                      <span dangerouslySetInnerHTML={{ __html: opt }}></span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <input 
                  type="number" 
                  className="nat-input" 
                  placeholder="Enter your answer"
                  value={answers[q.id]?.value || ''}
                  onChange={handleNatChange}
                />
              </div>
            )}
          </div>

          <div className="q-footer">
            <div className="left-btns">
              <button className="action-btn btn-clear" onClick={clearResponse}>Clear Response</button>
              <button className="action-btn btn-review" onClick={() => {
                 const currentVals = answers[q.id]?.value || (q.type==='NAT'?'':[]);
                 const hasAns = q.type==='NAT' ? currentVals !== '' : currentVals.length > 0;
                 goToNext(hasAns ? 'answered-review' : 'review');
              }}>Mark for Review & Next</button>
            </div>
            <div className="right-btns">
              <button className="action-btn btn-save" onClick={() => {
                const currentVals = answers[q.id]?.value || (q.type==='NAT'?'':[]);
                const hasAns = q.type==='NAT' ? currentVals !== '' : currentVals.length > 0;
                goToNext(hasAns ? 'answered' : 'not-answered');
              }}>Save & Next</button>
            </div>
          </div>
        </div>

        {/* RIGHT AREA: QUESTION PALETTE */}
        <div className="palette-area">
          <div className="profile-bar">
            <div className="avatar">A</div>
            <div>
              <div className="user-name">Ami</div>
              <div className="user-dept">CS & IT</div>
            </div>
          </div>
          
          <div className="legend">
            <div className="legend-item"><div className="box answered">{counts.answered}</div> Answered</div>
            <div className="legend-item"><div className="box not-answered">{counts.notAnswered}</div> Not Answered</div>
            <div className="legend-item"><div className="box not-visited">{counts.notVisited}</div> Not Visited</div>
            <div className="legend-item"><div className="box review">{counts.review}</div> Marked for Review</div>
            <div className="legend-item" style={{gridColumn: 'span 2'}}><div className="box answered-review">{counts.answeredReview}</div> Answered & Marked for Review</div>
          </div>

          <div style={{padding: '20px 20px 5px', fontWeight: 'bold', color: '#334155'}}>Section: TECHNICAL</div>

          <div className="q-grid">
            {quizQuestions.map((qu, index) => {
              const st = visited[qu.id] ? (answers[qu.id]?.status || 'not-answered') : 'not-visited';
              return (
                <button 
                  key={qu.id}
                  className={`box grid-btn ${st} ${currIdx === index ? 'active-q' : ''}`}
                  onClick={() => {
                    setCurrIdx(index);
                    setVisited({ ...visited, [qu.id]: true });
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          {allAnswered && (
            <div style={{padding: '20px', borderTop: '2px solid #e2e8f0', marginTop: 'auto'}}>
              <button 
                className="action-btn btn-save" 
                style={{width: '100%', padding: '15px', fontSize: '1.2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}} 
                onClick={handleFinalSubmit}
              >
                SAVE TEST (Submit)
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
