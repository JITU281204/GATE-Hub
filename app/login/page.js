'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './login.css';
import { getAllUsers, saveUser, updateLastSeen, deleteUserFromDB } from '../../lib/sync';

export default function LoginPage() {
  const [view, setView] = useState('select'); // 'select', 'user-register', 'user-login', 'admin-login', 'admin-panel', 'forgot-pass', 'forgot-success'
  const [userData, setUserData] = useState({ name: '', mobile: '', email: '', password: '' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [forgotData, setForgotData] = useState({ name: '', email: '' });
  const [adminCreds, setAdminCreds] = useState({ username: '', password: '' });
  const [allUsers, setAllUsers] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showConfirm, setShowConfirm] = useState(null); // stores index of user to delete
  const [selectedUserForHistory, setSelectedUserForHistory] = useState(null);
  const [selectedHistoryItemAdmin, setSelectedHistoryItemAdmin] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeToast, setActiveToast] = useState(0);
  const [toastVisible, setToastVisible] = useState(false);
  const router = useRouter();

  const iitList = [
     { name: "IIT Bombay", img: "/A.jpg", msg: "The Ultimate Goal" },
     { name: "IIT Delhi", img: "/B.jpg", msg: "Top Engineering Hub" },
     { name: "IIT Madras", img: "/C.jpg", msg: "Dream Campus" },
     { name: "IIT Kanpur", img: "/D.jpg", msg: "Innovation Center" },
     { name: "IIT Kharagpur", img: "/E.jpg", msg: "Pioneer in Tech" },
     { name: "IIT Roorkee", img: "/F.jpg", msg: "Engineering Excellence" },
     { name: "IIT Guwahati", img: "/G.jpg", msg: "Tech & Nature" },
     { name: "IIT Hyderabad", img: "/K.jpg", msg: "Modern Tech Hub" },
  ];

  useEffect(() => {
    // Load existing users from Global Sync with safety
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers();
        if (users && Array.isArray(users)) {
          setAllUsers(users);
        }
      } catch (err) {
        console.warn("Global sync paused, using local data.");
      }
    };
    
    fetchUsers();
    const interval = setInterval(fetchUsers, 15000); // Sync every 15s

    // Countdown Timer Logic
    const targetDate = new Date('February 7, 2027 00:00:00').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const daysTotal = Math.floor(distance / (1000 * 60 * 60 * 24));
      const months = Math.floor(daysTotal / 30);
      const days = daysTotal % 30;
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ months, days, hours, minutes, seconds });
    };

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);

    // Super Advanced Neural Network Particle Canvas Logic
    const canvas = document.getElementById('particle-canvas');
    let animationFrameId;
    let mouse = { x: null, y: null, radius: 150 };
    
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const handleMouseMove = (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      };
      const handleMouseOut = () => {
        mouse.x = null;
        mouse.y = null;
      };
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseout', handleMouseOut);

      let particlesArray = [];
      const colors = ['#00f2fe', '#4facfe', '#ff007a', '#7928ca'];

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2 + 1;
          this.baseX = this.x;
          this.baseY = this.y;
          this.density = (Math.random() * 30) + 1;
          this.speedX = Math.random() * 1 - 0.5;
          this.speedY = Math.random() * 1 - 0.5;
          this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          // Bounce off edges
          if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
          if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;

          // Mouse interaction (Push particles away)
          if (mouse.x != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;

            if (distance < mouse.radius) {
              this.x -= directionX;
              this.y -= directionY;
            }
          }
        }
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 15;
          ctx.shadowColor = this.color;
          ctx.fill();
        }
      }
      
      const init = () => {
        particlesArray = [];
        let numberOfParticles = (canvas.width * canvas.height) / 9000;
        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(new Particle());
        }
      }
      init();

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw();
          
          // Connect particles with lines
          for (let j = i; j < particlesArray.length; j++) {
            let dx = particlesArray[i].x - particlesArray[j].x;
            let dy = particlesArray[i].y - particlesArray[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
              ctx.beginPath();
              ctx.strokeStyle = particlesArray[i].color;
              ctx.globalAlpha = 1 - (distance / 120);
              ctx.lineWidth = 0.5;
              ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
              ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
              ctx.stroke();
              ctx.globalAlpha = 1.0;
            }
          }
        }
        animationFrameId = requestAnimationFrame(animate);
      }
      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      };
      window.addEventListener('resize', handleResize);

      // Toast Logic
      const toastInterval = setInterval(() => {
        setToastVisible(false);
        setTimeout(() => {
          setActiveToast(prev => (prev + 1) % 8); // 8 IITs
          setToastVisible(true);
        }, 800); // 800ms slide out
      }, 12000); // 12s total cycle
      
      setTimeout(() => setToastVisible(true), 2000);
      
      return () => {
        clearInterval(interval);
        clearInterval(timerInterval);
        clearInterval(toastInterval);
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseout', handleMouseOut);
      };
    }

    return () => {
      clearInterval(interval);
      clearInterval(timerInterval);
    };
  }, []);

  const handleUserRegister = (e) => {
    e.preventDefault();
    const phoneRegex = /^[6-9]\d{9}$/;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!userData.name || userData.name.trim().length === 0) {
      alert('Please enter your full name');
      return;
    }

    if (!phoneRegex.test(userData.mobile)) {
      alert('Please put a valid 10-digit mobile number');
      return;
    }

    if (!gmailRegex.test(userData.email)) {
      alert('Please use a valid @gmail.com address');
      return;
    }

    if (userData.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    // Check if user already exists
    if (allUsers.some(u => u.email === userData.email)) {
      alert('User with this email already exists! Please Login.');
      setView('user-login');
      return;
    }

    const newUser = { 
      ...userData, 
      id: Date.now(), 
      lastSeen: new Date().toLocaleTimeString(), 
      history: [],
      adminMasterHistory: []
    };
    
    // Save locally first
    const updatedLocal = [...allUsers, newUser];
    setAllUsers(updatedLocal);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    // Sync to Global DB in background
    saveUser(newUser).catch(err => console.error("Sync failed:", err));
    
    alert('Registration Successful! Redirecting to Dashboard...');
    router.push('/');
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();
    const user = allUsers.find(u => u.email === loginData.email && u.password === loginData.password);
    
    if (user) {
      // Update last seen in Global DB
      await updateLastSeen(user.email);
      
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      router.push('/');
    } else {
      alert('Invalid Email or Password! Please check your credentials.');
    }
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    const user = allUsers.find(u => u.email === forgotData.email && u.name.toLowerCase() === forgotData.name.toLowerCase());
    
    if (user) {
      // Automatic Email Trigger Logic (Triggers local mail client with pre-filled details)
      const subject = "Forget Pass Request";
      const body = `Urgent Recovery Request:%0D%0A------------------------%0D%0AStudent Name: ${forgotData.name}%0D%0ARegistered Email: ${forgotData.email}%0D%0AMessage: I forgot my testseries Password/ID. Please send it back.%0D%0A------------------------%0D%0ASent via AmiGATE Recovery Hub.`;
      
      window.location.href = `mailto:jituraj19cse@gmail.com?subject=${subject}&body=${body}`;
      
      setView('forgot-success');
    } else {
      alert('Details not found! Make sure your name and email match your registration.');
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminCreds.username === 'jitu_ami_admin_koyi_dikkat?' && adminCreds.password === 'luluamituina@*&123450987') {
      setView('admin-panel');
    } else {
      alert('Invalid Admin Credentials!');
    }
  };

  const deleteUser = async () => {
    if (showConfirm === null) return;
    const visibleUsers = [...allUsers].reverse();
    const userToDelete = visibleUsers[showConfirm];
    
    if (userToDelete && userToDelete.firebaseId) {
      await deleteUserFromDB(userToDelete.firebaseId);
      const finalUsers = allUsers.filter(u => u.id !== userToDelete.id);
      setAllUsers(finalUsers);
    }
    setShowConfirm(null);
  };

  return (
    <div className="login-wrapper">
      <canvas id="particle-canvas" className="particle-canvas"></canvas>
      <div className="top-glow-bar"></div>
      
      <div className="page-center-container">
        
        {/* TOP: Motivation & Countdown */}
        <div className="center-showcase animate-in">
           <h1 className="dream-text">Your Dream Come True, <br/><span>Just Few Time...</span></h1>
           <p className="motivational-sub">Work hard in silence, let your success make the noise. The GATE 2027 CSE battlefield awaits.</p>
           
           <div className="countdown-container">
              <div className="time-blocks">
                 <div className="time-box">
                    <span className="t-val">{timeLeft.months}</span>
                    <span className="t-label">Months</span>
                 </div>
                 <div className="time-box">
                    <span className="t-val">{timeLeft.days}</span>
                    <span className="t-label">Days</span>
                 </div>
                 <div className="time-box">
                    <span className="t-val">{timeLeft.hours}</span>
                    <span className="t-label">Hours</span>
                 </div>
                 <div className="time-box">
                    <span className="t-val">{timeLeft.minutes}</span>
                    <span className="t-label">Mins</span>
                 </div>
                 <div className="time-box">
                    <span className="t-val">{timeLeft.seconds}</span>
                    <span className="t-label">Secs</span>
                 </div>
              </div>
           </div>
        </div>

        {/* MIDDLE: LOGIN CARD */}
        <div className="main-login-area">
          <div className={`login-card main-card ${view === 'admin-panel' ? 'admin-width' : ''}`}>
        
        {/* VIEW: SELECTION */}
        {view === 'select' && (
          <div className="selection-view animate-in">
            <div className="logo-container">
              <svg viewBox="0 0 100 100" className="main-logo-svg">
                <defs>
                  <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff8c00" />
                    <stop offset="100%" stopColor="#ff4500" />
                  </linearGradient>
                  <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                <path d="M20 85 L50 15 L80 85" fill="none" stroke="url(#logo-grad)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" filter="url(#logo-glow)" />
                <path d="M35 65 L65 65" fill="none" stroke="url(#logo-grad)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" filter="url(#logo-glow)" />
                <path d="M50 15 L50 35" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
            <div className="series-badge-container">
              <div className="series-badge animate-pulse-glow">
                <span className="badge-pulse"></span>
                FREE CSE / DA GATE ultimate Test Series
              </div>
            </div>
            <h1 className="brand-h1">Welcome to <span>AmiGATE</span></h1>
            <p className="sub-text">Build your future with best-in-class GATE analytics</p>
            <div className="btn-stack main-btns">
              <button className="glowing-btn reg-btn" onClick={() => setView('user-register')}>
                <span className="btn-icon">✨</span>
                <span className="btn-text">New Student Register</span>
                <div className="btn-glow"></div>
              </button>
              <button className="glowing-btn user-btn" onClick={() => setView('user-login')}>
                <span className="btn-icon">🔐</span>
                <span className="btn-text">Registered Student Login</span>
                <div className="btn-glow"></div>
              </button>
              <button className="glowing-btn admin-btn" onClick={() => setView('admin-login')}>
                <span className="btn-icon">🛡️</span>
                <span className="btn-text">Admin Console</span>
              </button>
            </div>
          </div>
        )}

        {/* VIEW: USER REGISTRATION FORM */}
        {view === 'user-register' && (
          <div className="form-view animate-in">
            <div className="view-header">
              <h2>New Student Registry</h2>
              <p>Create your account for personalized tracking</p>
            </div>
            <form onSubmit={handleUserRegister}>
              <div className="input-grid">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" value={userData.name} onChange={e => setUserData({...userData, name: e.target.value})} required />
                </div>
                <div className="input-group">
                  <label>Mobile Number</label>
                  <input type="tel" placeholder="10 Digit Number" maxLength={10} value={userData.mobile} onChange={e => setUserData({...userData, mobile: e.target.value.replace(/\D/g,'')})} required />
                </div>
              </div>
              <div className="input-group">
                <label>Email ID (Gmail Only)</label>
                <input type="email" placeholder="example@gmail.com" value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} required />
              </div>
              <div className="input-group">
                <label>Set Password</label>
                <input type="password" placeholder="Min 6 characters" value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})} required />
              </div>
              <button type="submit" className="submit-btn neon-glow">Complete Registration</button>
              <button type="button" className="text-link" onClick={() => setView('select')}>Back to Selection</button>
            </form>
          </div>
        )}

        {/* VIEW: USER LOGIN FORM */}
        {view === 'user-login' && (
          <div className="form-view animate-in">
            <div className="view-header">
              <h2>Student Login</h2>
              <p>Welcome back! Enter credentials to continue</p>
            </div>
            <form onSubmit={handleUserLogin}>
              <div className="input-group">
                <label>Registered Email</label>
                <input type="email" placeholder="Enter your email" value={loginData.email} onChange={e => setLoginData({...loginData, email: e.target.value})} required />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter password" value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})} required />
              </div>
              <button type="submit" className="submit-btn user-btn">Access Dashboard</button>
              <div style={{textAlign: 'center', marginTop: '15px'}}>
                <button type="button" className="forgot-link" onClick={() => {
                  setForgotData({ name: '', email: '' }); // Reset fields for privacy
                  setView('forgot-pass');
                }}>Forgot Password?</button>
              </div>
              <button type="button" className="text-link" onClick={() => setView('select')}>Back to Selection</button>
            </form>
          </div>
        )}

        {/* VIEW: FORGOT PASSWORD FORM */}
        {view === 'forgot-pass' && (
          <div className="form-view animate-in">
            <div className="view-header">
              <h2>Account Recovery</h2>
              <p>Verify your details to recover access</p>
            </div>
            <form onSubmit={handleForgotSubmit} autoComplete="off">
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" name="recovery-name" placeholder="Enter your registered name" value={forgotData.name} onChange={e => setForgotData({...forgotData, name: e.target.value})} required autoComplete="off" />
              </div>
              <div className="input-group">
                <label>Registered Email</label>
                <input type="email" name="recovery-email" placeholder="example@gmail.com" value={forgotData.email} onChange={e => setForgotData({...forgotData, email: e.target.value})} required autoComplete="off" />
              </div>
              <button type="submit" className="glow-send-btn">Send Recovery Request</button>
              <button type="button" className="text-link" onClick={() => setView('user-login')}>Back to Login</button>
            </form>
          </div>
        )}

        {/* VIEW: FORGOT SUCCESS */}
        {view === 'forgot-success' && (
          <div className="success-view animate-in">
            <div className="success-icon">📬</div>
            <h2>Request Transferred!</h2>
            <div className="motivation-card">
              <p>Wait some time our team send your password in your email until <strong>stay motivated and learn new thing</strong>.</p>
            </div>
            <div className="loader-strip"></div>
            <button className="back-home-btn" onClick={() => setView('select')}>Back to Home</button>
          </div>
        )}

        {/* VIEW: ADMIN LOGIN */}
        {view === 'admin-login' && (
          <div className="form-view animate-in">
            <h2>Admin Secure Access</h2>
            <form onSubmit={handleAdminLogin}>
              <div className="input-group">
                <label>Admin Username</label>
                <input type="text" placeholder="Enter admin username" value={adminCreds.username} onChange={e => setAdminCreds({...adminCreds, username: e.target.value})} required />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter password" value={adminCreds.password} onChange={e => setAdminCreds({...adminCreds, password: e.target.value})} required />
              </div>
              <button type="submit" className="submit-btn admin-btn">Login as Admin</button>
              <button type="button" className="text-link" onClick={() => setView('select')}>Back</button>
            </form>
          </div>
        )}

        {/* VIEW: ADMIN PANEL */}
        {view === 'admin-panel' && (
          <div className={`admin-panel animate-in ${isRefreshing ? 'refresh-blink' : ''}`}>
            <div className="panel-header-new">
              <div className="title-slot">
                <div className="pulse-indicator"></div>
                <h2>AmiGATE<span> Command Hub</span></h2>
              </div>
              <div className="header-actions">
                 <button className={`refresh-btn ${isRefreshing ? 'spinning' : ''}`} onClick={async () => {
                   setIsRefreshing(true);
                   const u = await getAllUsers();
                   setAllUsers(u);
                   setIsRefreshing(false);
                 }}>↻ {isRefreshing ? 'Syncing...' : 'Refresh Data'}</button>
                 <button onClick={() => setView('select')} className="logout-neon">Exit Admin</button>
              </div>
            </div>
            
            <div className="metrics-grid">
              <div className="metric-card glass">
                 <div className="m-icon">👥</div>
                 <div className="m-info">
                   <div className="m-label">Total Enrollment</div>
                   <div className="m-value">{allUsers.length}</div>
                 </div>
              </div>
              <div className="metric-card glass">
                 <div className="m-icon">📝</div>
                 <div className="m-info">
                   <div className="m-label">Cumulative Tests</div>
                   <div className="m-value">{allUsers.reduce((sum, u) => sum + (u.adminMasterHistory?.length || u.history?.length || 0), 0)}</div>
                 </div>
              </div>
              <div className="metric-card glass">
                 <div className="m-icon">⚡</div>
                 <div className="m-info">
                   <div className="m-label">Avg. Accuracy</div>
                   <div className="m-value">
                     {(() => {
                        const allTests = allUsers.flatMap(u => u.adminMasterHistory || u.history || []);
                        if(allTests.length === 0) return '0%';
                        let totalAcc = 0;
                        allTests.forEach(t => {
                          if (t.detailedHistory && t.detailedHistory.length > 0) {
                             totalAcc += (t.detailedHistory.filter(h => h.isCorrect).length / t.detailedHistory.length) * 100;
                          }
                        });
                        return `${(totalAcc / allTests.length).toFixed(1)}%`;
                     })()}
                   </div>
                 </div>
              </div>
            </div>

            <div className="admin-body-scroll">
              <div className="student-grid">
                {allUsers.length === 0 ? (
                  <div className="empty-state glass">Waiting for new student registrations...</div>
                ) : (
                  allUsers.slice().reverse().map((user, i) => (
                    <div key={user.id} className="student-card glass animate-in" style={{animationDelay: `${i * 0.05}s`}}>
                      <div className="card-top-info">
                         <div className="avatar-shield">
                            <div className="main-avatar">{user.name[0]}</div>
                            <div className={`status-dot ${user.lastSeen ? 'active' : 'idle'}`}></div>
                         </div>
                         <div className="identity-block">
                            <div className="name-row">
                               <h4>{user.name}</h4>
                               <span className="badge-uid">ID: {String(user.id).slice(-6)}</span>
                            </div>
                            <div className="pass-key">🔑 Pass: <span>{user.password}</span></div>
                         </div>
                      </div>

                      <div className="contact-strip">
                         <div className="c-node"><span className="icon">📧</span> {user.email}</div>
                         <div className="c-node"><span className="icon">📱</span> {user.mobile}</div>
                      </div>

                      <div className="performance-box">
                         <div className="p-stat">
                            <div className="p-label">Tests</div>
                            <div className="p-value">{user.adminMasterHistory?.length || user.history?.length || 0}</div>
                         </div>
                         <div className="p-stat">
                            <div className="p-label">Active</div>
                            <div className="p-value" style={{fontSize: '0.7rem'}}>{user.lastSeen?.split(',')[0] || 'Pending'}</div>
                         </div>
                      </div>

                      <div className="card-actions">
                         <button className="neon-action trace" onClick={() => setSelectedUserForHistory(user)}>Trace</button>
                         <button className="neon-action reset-student" onClick={async () => {
                           if(confirm(`Are you sure you want to reset all test data for ${user.name}? This will clear their history but keep the account.`)) {
                             const updatedUser = { ...user, history: [], adminMasterHistory: [] };
                             await saveUser(updatedUser);
                             const u = await getAllUsers();
                             setAllUsers(u);
                             alert('Student data has been reset successfully.');
                           }
                         }}>Reset</button>
                         <button className="neon-action drop" onClick={() => setShowConfirm(i)}>Drop</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
          </div>
        </div>
      </div>

      {/* BOTTOM: IIT MARQUEE */}
      <div className="bottom-iit-marquee">
        <h3 className="marquee-title">🏛️ Your Future Destinations</h3>
        <div className="marquee-wrapper">
           <div className="marquee-content">
              {iitList.map((iit, idx) => (
                <div key={idx} className="iit-card">
                   <div className="img-placeholder" style={{backgroundImage: `url('${iit.img}')`}}></div>
                   <div className="iit-name">{iit.name}</div>
                </div>
              ))}
              {/* Duplicate for infinite loop */}
              {iitList.map((iit, idx) => (
                <div key={`dup-${idx}`} className="iit-card">
                   <div className="img-placeholder" style={{backgroundImage: `url('${iit.img}')`}}></div>
                   <div className="iit-name">{iit.name}</div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* FLOATING TOAST NOTIFICATION */}
      <div className={`floating-toast ${toastVisible ? 'toast-show' : 'toast-hide'}`}>
         <div className="toast-img" style={{backgroundImage: `url('${iitList[activeToast].img}')`}}></div>
         <div className="toast-info">
            <h4>{iitList[activeToast].name}</h4>
            <p>{iitList[activeToast].msg}</p>
            <span className="toast-time">Target 2027</span>
         </div>
      </div>

      {/* DELETE CONFIRMATION POPUP */}
      {showConfirm !== null && (
        <div className="popup-overlay" style={{zIndex: 9999999}}>
          <div className="popup-card">
            <div style={{fontSize: '3rem', marginBottom: '15px'}}>⚠️</div>
            <h3 style={{fontSize: '1.5rem', marginBottom: '10px', color: '#ff3d71'}}>Terminate Access?</h3>
            <p style={{color: '#94a3b8', marginBottom: '30px', fontSize: '0.9rem', lineHeight: 1.5}}>Are you sure to delete user data? This action is irreversible and all test records will be lost from the student profile.</p>
            <div className="popup-btns">
              <button className="p-btn yes" onClick={deleteUser}>Yes, Drop Student</button>
              <button className="p-btn no" onClick={() => setShowConfirm(null)}>No, Keep Data</button>
            </div>
          </div>
        </div>
      )}

      {/* ADMIN VIEW: USER HISTORY MODAL */}
      {selectedUserForHistory && (
        <div className="popup-overlay" onClick={() => setSelectedUserForHistory(null)}>
          <div className="history-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-top">
              <h3>Performance Intelligence: {selectedUserForHistory.name}</h3>
              <button onClick={() => setSelectedUserForHistory(null)} className="close-x">×</button>
            </div>

            <div className="history-scrollable">
              {(!(selectedUserForHistory.adminMasterHistory || selectedUserForHistory.history) || (selectedUserForHistory.adminMasterHistory?.length === 0 && selectedUserForHistory.history?.length === 0)) ? (
                <div className="empty-history-state">
                   <div className="empty-glow"></div>
                   <div className="empty-icon">📂</div>
                   <p>No test data available for this student.</p>
                </div>
              ) : (
                !selectedHistoryItemAdmin ? (
                  <div className="admin-items-stack">
                    {(selectedUserForHistory.adminMasterHistory || selectedUserForHistory.history || []).slice().reverse().map((item, idx) => (
                      <div key={idx} className="admin-test-row" onClick={() => setSelectedHistoryItemAdmin(item)}>
                        <div className="r-left">
                          <div className="r-name">{item.testName}</div>
                          <div className="r-date">{item.date}</div>
                        </div>
                        <div className="r-mid">
                          <div className="r-val-label">SCORE</div>
                          <div className="r-val">{item.score}</div>
                        </div>
                        <div className="r-mid hide-mobile">
                          <div className="r-val-label">TIME</div>
                          <div className="r-val">{item.avgTime}s</div>
                        </div>
                        <div className="r-right">
                          <button className="row-details-btn">Details →</button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="admin-detail-view animate-in">
                    <div className="detail-top-bar">
                       <button className="back-btn-admin" onClick={() => setSelectedHistoryItemAdmin(null)}>← Activity List</button>
                       <h4>Deep Insights</h4>
                    </div>

                    <div className="item-summary-card">
                       <div className="summary-title">{selectedHistoryItemAdmin.testName}</div>
                       <div className="summary-date">Attempt ID: {Date.now()} | {selectedHistoryItemAdmin.date}</div>
                    </div>

                    <div className="stats-grid-clone">
                       <div className="stat-node blue">
                          <div className="sn-label">TOTAL SCORE</div>
                          <div className="sn-val">{selectedHistoryItemAdmin.score}</div>
                       </div>
                       <div className="stat-node green">
                          <div className="sn-label">VALID ANSWERS</div>
                          <div className="sn-val">{selectedHistoryItemAdmin.detailedHistory.filter(h => h.isCorrect).length}</div>
                       </div>
                       <div className="stat-node red">
                          <div className="sn-label">SPEED (AVG)</div>
                          <div className="sn-val">{selectedHistoryItemAdmin.avgTime}s</div>
                       </div>
                       <div className="stat-node purple">
                          <div className="sn-label">ACCURACY</div>
                          <div className="sn-val">{((selectedHistoryItemAdmin.detailedHistory.filter(h => h.isCorrect).length / selectedHistoryItemAdmin.detailedHistory.length) * 100).toFixed(0)}%</div>
                       </div>
                    </div>

                    <div className="breakdown-section">
                       <h5 className="section-title">Question-wise Analysis (s)</h5>
                       <div className="q-log-grid">
                          {selectedHistoryItemAdmin.detailedHistory.map((q, i) => (
                             <div key={i} className={`q-node-clone ${q.isCorrect ? 'c-p' : 'c-f'}`}>
                                <div className="qn-id">Q{i+1}</div>
                                <div className="qn-time">{q.timeSpent}s</div>
                             </div>
                          ))}
                       </div>
                    </div>

                    <div className="topics-dual-column">
                       <div className="topic-card-cl s">
                          <h6 className="tc-header s">✅ Strong Areas</h6>
                          <div className="tc-tags">
                             {selectedHistoryItemAdmin.strongTopics.map(t => <span key={t} className="tc-tag s">{t}</span>)}
                          </div>
                       </div>
                       <div className="topic-card-cl w">
                          <h6 className="tc-header w">⚠️ Weak Areas</h6>
                          <div className="tc-tags">
                             {selectedHistoryItemAdmin.weakTopics.map(t => <span key={t} className="tc-tag w">{t}</span>)}
                          </div>
                       </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .history-modal {
          background: #0f172a;
          width: 95%;
          max-width: 1000px;
          border-radius: 32px;
          border: 1px solid rgba(0, 242, 255, 0.15);
          padding: 35px;
          height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 0 100px rgba(0,0,0,0.8);
          position: relative;
          overflow: hidden;
        }
        .modal-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-shrink: 0; }
        .modal-top h3 { font-size: 1.5rem; margin: 0; color: #fff; }
        .close-x { background: rgba(255, 61, 113, 0.1); border: none; font-size: 1.5rem; color: #ff3d71; cursor: pointer; width: 40px; height: 40px; border-radius: 12px; transition: 0.3s; flex-shrink: 0; }
        .close-x:hover { background: #ff3d71; color: white; }

        .analytics-graph-container { background: rgba(255,255,255,0.02); border-radius: 24px; padding: 20px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05); flex-shrink: 0; }
        .graph-label { font-size: 0.7rem; font-weight: 800; text-transform: uppercase; color: #64748b; margin-bottom: 15px; letter-spacing: 1px; }
        .graph-canvas { height: 120px; width: 100%; position: relative; }
        .trend-svg { width: 100%; height: 100%; overflow: visible; }
        .graph-placeholder { height: 100%; display: flex; align-items: center; justify-content: center; color: #334155; font-size: 0.9rem; font-weight: 600; border: 1px dashed rgba(255,255,255,0.05); border-radius: 12px; }
        
        .history-scrollable { flex-grow: 1; overflow-y: auto; padding-right: 5px; margin-top: 10px; }
        
        .admin-items-stack { display: flex; flex-direction: column; gap: 15px; }
        .admin-test-row { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; display: grid; grid-template-columns: 1fr 100px 100px 120px; align-items: center; transition: 0.3s; cursor: pointer; }
        .admin-test-row:hover { transform: translateY(-4px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); border-color: #00f2ff; }
        .r-name { font-weight: 700; color: #1e293b; font-size: 1.1rem; }
        .r-date { color: #64748b; font-size: 0.8rem; margin-top: 4px; }
        .r-mid { text-align: center; }
        .r-val-label { font-size: 0.65rem; color: #94a3b8; font-weight: 800; }
        .r-val { font-weight: 800; color: #00f2ff; font-size: 1.1rem; }
        .row-details-btn { background: #00f2ff; color: #fff; border: none; padding: 8px 15px; border-radius: 8px; font-weight: 800; font-size: 0.75rem; cursor: pointer; }
        
        .admin-detail-view { background: #fff; border-radius: 20px; padding: 30px; }
        .detail-top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
        .back-btn-admin { background: #f1f5f9; border: none; padding: 8px 15px; border-radius: 10px; font-weight: 700; cursor: pointer; }
        .detail-top-bar h4 { margin: 0; color: #1e293b; }
        
        .item-summary-card { background: #f8fafc; padding: 20px; border-radius: 16px; border: 1px solid #e2e8f0; margin-bottom: 25px; }
        .summary-title { font-weight: 800; font-size: 1.3rem; color: #1e293b; }
        .summary-date { color: #64748b; font-size: 0.85rem; margin-top: 5px; }
        
        .stats-grid-clone { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 30px; }
        .stat-node { padding: 20px; border-radius: 12px; text-align: center; }
        .stat-node.blue { background: #f0f9ff; color: #0369a1; }
        .stat-node.green { background: #f0fdf4; color: #15803d; }
        .stat-node.red { background: #fff1f2; color: #b91c1c; }
        .stat-node.purple { background: #faf5ff; color: #7e22ce; }
        .sn-label { font-size: 0.65rem; font-weight: 800; margin-bottom: 5px; }
        .sn-val { font-size: 1.5rem; font-weight: 900; }
        
        .section-title { font-size: 1rem; color: #1e293b; margin-bottom: 15px; }
        .q-log-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap: 10px; margin-bottom: 30px; }
        .q-node-clone { padding: 12px; border-radius: 10px; text-align: center; transition: 0.3s; }
        .q-node-clone.c-p { background: #dcfce7; border: 1px solid #bbfcce; color: #15803d; }
        .q-node-clone.c-f { background: #fee2e2; border: 1px solid #fecaca; color: #b91c1c; }
        .qn-id { font-size: 0.7rem; font-weight: 800; }
        .qn-time { font-size: 1.1rem; font-weight: 900; }
        
        .topics-dual-column { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .topic-card-cl { padding: 20px; border-radius: 20px; }
        .topic-card-cl.s { background: #f0fdf4; border: 1px solid #dcfce7; }
        .topic-card-cl.w { background: #fff1f2; border: 1px solid #fee2e2; }
        .tc-header { font-size: 1rem; margin-bottom: 15px; display: flex; align-items: center; gap: 8px; }
        .tc-header.s { color: #15803d; }
        .tc-header.w { color: #b91c1c; }
        .tc-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .tc-tag { padding: 6px 14px; background: #fff; border-radius: 20px; font-size: 0.8rem; font-weight: 700; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .tc-tag.s { color: #166534; }
        .tc-tag.w { color: #991b1c; }

        .analytics-graph-container { background: rgba(255,255,255,0.02); border-radius: 24px; padding: 20px; margin-bottom: 25px; border: 1px solid rgba(255,255,255,0.05); flex-shrink: 0; }
        .graph-label { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: #64748b; margin-bottom: 15px; letter-spacing: 1px; }
        .graph-canvas { height: 160px; width: 100%; position: relative; }
        .trend-svg { width: 100%; height: 100%; overflow: visible; }
        .draw-path { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw 2s forwards ease-in-out; }
        @keyframes draw { to { stroke-dashoffset: 0; } }
        .graph-dot { stroke: #00f2ff; stroke-width: 2; cursor: pointer; transition: 0.3s; }
        .graph-dot:hover { r: 10; fill: #00f2ff; }
        .graph-placeholder { height: 100%; display: flex; align-items: center; justify-content: center; color: #475569; font-size: 0.9rem; font-style: italic; border: 1px dashed rgba(255,255,255,0.1); border-radius: 12px; }

        /* NEW ADMIN STYLES */
        .panel-header-new { display: flex; justify-content: space-between; align-items: center; margin-bottom: 35px; }
        .title-slot { display: flex; align-items: center; gap: 15px; }
        .pulse-indicator { width: 12px; height: 12px; background: #2ecc71; border-radius: 50%; box-shadow: 0 0 10px #2ecc71; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; transform: scale(1.2); } 100% { opacity: 0.5; } }
        .title-slot h2 { font-size: 1.8rem; font-weight: 800; }
        .title-slot h2 span { color: #00f2ff; font-weight: 400; }
        
        .header-actions { display: flex; gap: 15px; }
        .logout-neon { background: none; border: 2px solid #ff3d71; color: #ff3d71; padding: 10px 25px; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.3s; }
        .logout-neon:hover { background: #ff3d71; color: white; box-shadow: 0 0 20px rgba(255, 61, 113, 0.4); }
        .refresh-btn { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; padding: 10px 20px; border-radius: 12px; cursor: pointer; transition: 0.3s; }
        .refresh-btn:hover { background: rgba(0,242,255,0.1); color: #00f2ff; border-color: #00f2ff; }
        .refresh-btn.spinning { color: #00f2ff; box-shadow: 0 0 15px rgba(0,242,255,0.2); }

        .refresh-blink { animation: blinkEffect 0.4s ease; }
        @keyframes blinkEffect {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.99); }
          100% { opacity: 1; transform: scale(1); }
        }

        .metrics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin-bottom: 35px; }
        .metric-card { display: flex; align-items: center; gap: 20px; padding: 25px; border-radius: 24px; position: relative; overflow: hidden; }
        .glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.05); }
        .m-icon { font-size: 2.2rem; opacity: 0.5; }
        .m-label { color: #94a3b8; font-size: 0.9rem; font-weight: 600; }
        .m-value { font-size: 2rem; font-weight: 800; color: #fff; }

        .student-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
          gap: 20px; 
          margin-top: 20px; 
          width: 100%;
        }
        .admin-body-scroll { width: 100%; overflow: visible; }
        .admin-panel { width: 100%; display: block !important; }
        .student-card { padding: 25px; border-radius: 28px; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1); position: relative; }
        .student-card:hover { transform: translateY(-10px); background: rgba(255,255,255,0.06); border-color: rgba(0, 242, 255, 0.4); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
        
        .card-top-info { display: flex; gap: 15px; margin-bottom: 20px; }
        .avatar-shield { position: relative; width: 60px; height: 60px; }
        .main-avatar { width: 100%; height: 100%; border-radius: 18px; background: linear-gradient(135deg, #00f2ff, #7000ff); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 900; color: white; }
        .status-dot { position: absolute; bottom: -2px; right: -2px; width: 15px; height: 15px; border-radius: 50%; border: 3px solid #0B0F19; }
        .status-dot.active { background: #00f2ff; box-shadow: 0 0 10px #00f2ff; }
        .status-dot.idle { background: #64748b; }

        .identity-block { flex: 1; overflow: hidden; }
        .name-row { display: flex; justify-content: space-between; align-items: flex-start; }
        .identity-block h4 { margin: 0; font-size: 1.2rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .badge-uid { font-size: 0.65rem; background: rgba(0,242,255,0.1); color: #00f2ff; padding: 2px 8px; border-radius: 6px; font-weight: 800; }
        .pass-key { font-size: 0.75rem; color: #64748b; margin-top: 5px; }
        .pass-key span { color: #ff3d71; font-weight: 800; }

        .contact-strip { margin-bottom: 20px; display: flex; flex-direction: column; gap: 5px; }
        .c-node { font-size: 0.8rem; color: #94a3b8; display: flex; align-items: center; gap: 8px; }
        .c-node .icon { opacity: 0.7; }

        .performance-box { display: grid; grid-template-columns: 1fr 1fr; background: rgba(0,0,0,0.2); border-radius: 15px; padding: 15px; margin-bottom: 20px; }
        .p-stat { text-align: center; }
        .p-stat:first-child { border-right: 1px solid rgba(255,255,255,0.05); }
        .p-label { font-size: 0.65rem; color: #64748b; text-transform: uppercase; margin-bottom: 5px; font-weight: 800; }
        .p-value { font-size: 1.1rem; font-weight: 900; color: #fff; }

        .card-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .neon-action { padding: 12px; border-radius: 12px; border: 1px solid transparent; font-weight: 800; font-size: 0.75rem; cursor: pointer; transition: 0.3s; }
        .neon-action.trace { background: rgba(0,242,255,0.1); color: #00f2ff; border-color: rgba(0,242,255,0.2); }
        .neon-action.trace:hover { background: #00f2ff; color: #000; box-shadow: 0 0 20px rgba(0,242,255,0.4); }
        .neon-action.drop { background: rgba(255,61,113,0.05); color: #ff3d71; border-color: rgba(255,61,113,0.1); }
        .neon-action.drop:hover { background: #ff3d71; color: #fff; box-shadow: 0 0 20px rgba(255,61,113,0.4); }

        .empty-state { padding: 100px; text-align: center; color: #475569; font-size: 1.2rem; grid-column: 1 / -1; }

        .forgot-link { background: none; border: none; color: #00f2ff; font-weight: 700; cursor: pointer; font-size: 0.9rem; text-decoration: underline; }
        
        .glow-send-btn {
          width: 100%;
          padding: 18px;
          border-radius: 15px;
          border: none;
          font-size: 1.2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #00f2ff, #7000ff);
          color: white;
          cursor: pointer;
          margin-top: 20px;
          box-shadow: 0 0 30px rgba(0, 242, 255, 0.5);
          transition: 0.3s;
        }
        .glow-send-btn:hover { box-shadow: 0 0 50px rgba(112, 0, 255, 0.6); transform: scale(1.02); }

        .success-view { text-align: center; padding: 40px 20px; }
        .success-icon { font-size: 5rem; margin-bottom: 20px; animation: bounce 2s infinite; }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        .success-view h2 { font-size: 2.2rem; margin-bottom: 20px; color: #00f2ff; }
        .motivation-card { background: rgba(255,255,255,0.05); padding: 30px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 30px; }
        .motivation-card p { font-size: 1.1rem; line-height: 1.6; color: #94a3b8; }
        .motivation-card strong { color: #fff; text-shadow: 0 0 10px rgba(255,255,255,0.5); }
        
        .loader-strip { width: 100%; height: 4px; background: rgba(255,255,255,0.1); border-radius: 10px; margin-bottom: 40px; position: relative; overflow: hidden; }
        .loader-strip::after { content: ''; position: absolute; left: -100%; top: 0; width: 50%; height: 100%; background: #00f2ff; animation: loading 2s infinite; }
        @keyframes loading { from { left: -50%; } to { left: 100%; } }

        .back-home-btn { background: #fff; color: #000; border: none; padding: 15px 40px; border-radius: 12px; font-weight: 800; cursor: pointer; transition: 0.3s; }
        .back-home-btn:hover { background: #00f2ff; box-shadow: 0 0 20px rgba(0,242,255,0.5); }

        .login-wrapper {
          min-height: 100vh;
          background: radial-gradient(circle at 50% 50%, #2a0800 0%, #050100 100%);
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .top-glow-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #ff4500, #ff8c00, #ffd700, #ff4500);
          background-size: 300% 100%;
          animation: moveGlow 3s linear infinite;
          z-index: 999;
          box-shadow: 0 0 20px rgba(255, 69, 0, 0.8);
        }
        @keyframes moveGlow {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        .page-center-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          padding: 60px 20px 20px 20px;
          position: relative;
          z-index: 1;
          flex: 1;
        }

        .center-showcase {
          text-align: center;
          margin-bottom: 40px;
        }

        .dream-text {
          font-family: 'Outfit', sans-serif;
          font-size: 3.5rem;
          font-weight: 900;
          line-height: 1.2;
          color: white;
          margin-bottom: 15px;
          text-shadow: 0 10px 30px rgba(0,0,0,0.8);
        }
        .dream-text span {
          background: linear-gradient(135deg, #ff8c00, #ffeb3b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: none;
        }
        .motivational-sub {
          font-size: 1.1rem;
          color: #d1d5db;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .countdown-container {
          margin-top: 25px;
          display: inline-block;
        }
        .time-blocks {
          display: flex;
          gap: 15px;
          justify-content: center;
        }
        .time-box {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 140, 0, 0.3);
          border-radius: 16px;
          padding: 15px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 5px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
        }
        .t-val {
          font-size: 2rem;
          font-weight: 900;
          color: #ffd700;
          font-family: 'Outfit', sans-serif;
          text-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
        }
        .t-label {
          color: #ff8c00;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .main-login-area {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 50px;
        }

        .main-card {
          background: rgba(10, 5, 0, 0.75);
          backdrop-filter: blur(40px);
          padding: 50px;
          border-radius: 32px;
          border: 1px solid rgba(255, 140, 0, 0.2);
          width: 100%;
          max-width: 550px;
          color: white;
          box-shadow: 0 30px 80px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,140,0,0.1);
          transition: max-width 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s;
        }
        .admin-width {
          max-width: 1400px !important;
          padding: 50px !important;
        }

        .logo-container {
          width: 85px;
          height: 85px;
          margin: 0 auto 25px;
          background: rgba(10, 5, 0, 0.4);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,140,0,0.3);
          box-shadow: 0 10px 40px rgba(0,0,0,0.6), inset 0 0 20px rgba(255,140,0,0.1);
          animation: floatLogo 4s infinite ease-in-out;
          padding: 15px;
        }
        .main-logo-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 8px rgba(255,140,0,0.5));
        }
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }

        .series-badge-container {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 15px;
        }
        .series-badge {
          background: linear-gradient(135deg, #ff8c00, #ff4500);
          color: white;
          padding: 6px 14px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 20px rgba(255, 140, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s infinite ease-in-out;
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); box-shadow: 0 4px 20px rgba(255, 140, 0, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 4px 30px rgba(255, 140, 0, 0.6); }
        }

        .reg-btn {
          background: linear-gradient(135deg, #00f2fe, #4facfe) !important;
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.4) !important;
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
        }
        .user-btn {
          background: linear-gradient(135deg, #f093fb, #f5576c) !important;
          box-shadow: 0 0 20px rgba(240, 147, 251, 0.4) !important;
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
        }
        .admin-btn {
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: rgba(255, 255, 255, 0.7) !important;
        }
        
        .glowing-btn {
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        }

        .glowing-btn:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4) !important;
        }

        .brand-h1 { font-family: 'Outfit', sans-serif; font-size: 3.5rem; text-align: center; margin-bottom: 10px; font-weight: 900; letter-spacing: -2px; line-height: 1.1; }
        .brand-h1 span { 
          background: linear-gradient(to right, #ff8c00, #ffeb3b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 10px rgba(255,140,0,0.3));
        }
        .sub-text { text-align: center; color: #d1d5db; margin-bottom: 40px; font-weight: 500; font-size: 1rem; }
        
        .btn-stack { display: flex; flex-direction: column; gap: 15px; }
        .main-btns button { padding: 20px !important; font-size: 1.1rem !important; }
        .glowing-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px;
          font-size: 1.2rem;
          font-weight: 800;
          border: none;
          border-radius: 18px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        .btn-icon { font-size: 1.3rem; }
        .btn-text { position: relative; z-index: 2; }
        .btn-glow {
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          transition: 0.5s;
          z-index: 1;
        }
        .glowing-btn:hover .btn-glow { left: 150%; }

        .reg-btn {
           background: linear-gradient(135deg, #ff8c00, #ff4500);
           color: #fff;
           box-shadow: 0 10px 30px rgba(255,140,0,0.3);
        }
        .user-btn {
          background: linear-gradient(135deg, #ff4500, #ff0055);
          color: white;
          box-shadow: 0 10px 30px rgba(255,69,0,0.3);
        }
        .admin-btn {
          background: rgba(255,255,255,0.05);
          color: white;
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
        }
        .admin-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,140,0,0.4);
        }
        .glowing-btn:hover { transform: translateY(-5px) scale(1.02); }

        .view-header { margin-bottom: 30px; }
        .input-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

        .form-view h2 { font-size: 2rem; margin-bottom: 10px; }
        .form-view p { color: #94a3b8; margin-bottom: 30px; }
        
        .input-group { margin-bottom: 20px; }
        .input-group label { display: block; font-size: 0.9rem; font-weight: 700; color: #94a3b8; margin-bottom: 8px; }
        .input-group input {
          width: 100%;
          padding: 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          font-size: 1rem;
          outline: none;
        }
        .input-group input:focus { border-color: #00f2ff; background: rgba(255,255,255,0.08); }

        .submit-btn {
          width: 100%;
          padding: 18px;
          border-radius: 15px;
          border: none;
          font-size: 1.2rem;
          font-weight: 800;
          background: #00f2ff;
          color: #000;
          cursor: pointer;
          margin-top: 10px;
        }
        .neon-glow { box-shadow: 0 0 20px rgba(0,242,255,0.4); }
        .text-link { background: none; border: none; color: #94a3b8; width: 100%; margin-top: 20px; cursor: pointer; }

        .admin-panel table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        .admin-panel th { text-align: left; color: #00f2ff; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .admin-panel td { padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #fff; }
        .del-btn { background: rgba(255, 61, 113, 0.15); color: #ff3d71; border: 1px solid rgba(255, 61, 113, 0.3); padding: 8px 15px; border-radius: 8px; cursor: pointer; }
        .logout-mini { background: #f43f5e; color: white; border: none; padding: 5px 15px; border-radius: 6px; cursor: pointer; }
        .panel-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; }

        .popup-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 9999999; }
        .popup-card { background: #0f172a; padding: 40px; border-radius: 32px; text-align: center; border: 1px solid rgba(255, 61, 113, 0.3); box-shadow: 0 0 50px rgba(0,0,0,1); max-width: 400px; width: 90%; }
        .popup-btns { display: flex; gap: 15px; margin-top: 30px; justify-content: center; }
        .p-btn { padding: 12px 25px; border-radius: 12px; border: none; font-weight: 800; cursor: pointer; transition: 0.3s; }
        .p-btn:hover { transform: scale(1.05); }
        .yes { background: #ff3d71; color: white; box-shadow: 0 5px 15px rgba(255, 61, 113, 0.3); }
        .no { background: rgba(255,255,255,0.05); color: #94a3b8; border: 1px solid rgba(255,255,255,0.1); }

        .animate-in { animation: fadeInUp 0.5s ease-out; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }


        .particle-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .bottom-iit-marquee {
          width: 100%;
          padding: 40px 0;
          background: rgba(0,0,0,0.5);
          border-top: 1px solid rgba(255,140,0,0.1);
          z-index: 1;
          position: relative;
        }
        .marquee-title {
          text-align: center;
          color: #ff8c00;
          margin-bottom: 20px;
          font-size: 1.5rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
          position: relative;
          padding: 10px 0;
        }
        .marquee-wrapper::before, .marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 150px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #0a0500, transparent);
        }
        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #0a0500, transparent);
        }
        .marquee-content {
          display: inline-flex;
          gap: 30px;
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-content:hover {
          animation-play-state: paused;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(calc(-50% - 15px)); }
          100% { transform: translateX(0); }
        }
        .iit-card {
          display: inline-block;
          width: 220px;
          background: rgba(255, 140, 0, 0.05);
          border: 1px solid rgba(255, 140, 0, 0.2);
          border-radius: 20px;
          overflow: hidden;
          transition: 0.4s;
          cursor: pointer;
        }
        .iit-card:hover {
          transform: translateY(-8px);
          border-color: #ff8c00;
          box-shadow: 0 15px 30px rgba(255, 140, 0, 0.2);
        }
        .img-placeholder {
          width: calc(100% - 24px);
          margin: 12px auto 0;
          height: 110px;
          background: rgba(0, 0, 0, 0.8);
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .iit-name {
          padding: 15px;
          text-align: center;
          font-size: 1rem;
          font-weight: 800;
          color: #ffeb3b;
          background: rgba(0,0,0,0.6);
          border-top: 1px solid rgba(255,140,0,0.1);
        }
      `}</style>
    </div>
  );
}
