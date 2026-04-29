export const QUIZ_1_QUESTIONS = [
  {
    id: 1, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'Sufficient & Necessary Conditions',
    question: "Let <em>P, S, R</em> be three statements(propositions). Let <em>S</em> be a sufficient condition for <em>P</em>. Let <em>R</em> is a necessary condition for <em>P</em> then which of the following is/are true?",
    options: [
      "<em>S</em> is a sufficient condition for <em>R</em>.",
      "<em>S</em> is a necessary condition for <em>R</em>.",
      "<em>S</em> is neither sufficient, nor a necessary condition for <em>R</em>.",
      "<em>S</em> is a sufficient and necessary condition for <em>R</em>."
    ],
    correctAnswer: [0]
  },
  {
    id: 2, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'Truth Value Evaluation',
    question: "If <strong>p</strong> is true, <strong>q</strong> is true, and <strong>r</strong> is true, find the truth value of the statement.<br/><br/><div style='text-align:center'><em>(p ∧ q) ↔ (q ∨ ~ r)</em></div><br/>Choose the correct answer below.",
    options: [
      "True because <em>(p ∧ q)</em> is true and <em>(q ∨ ~ r)</em> is true.",
      "False because <em>(p ∧ q)</em> is false and <em>(q ∨ ~ r)</em> is false.",
      "True because <em>(p ∧ q)</em> is false and <em>(q ∨ ~ r)</em> is false.",
      "False because <em>(p ∧ q)</em> is true and <em>(q ∨ ~ r)</em> is true."
    ],
    correctAnswer: [0]
  },
  {
    id: 3, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'Knights & Knaves Puzzles',
    question: "A very special island, \"Smullyan's island\", is inhabited only by knights and knaves. Knights always tell the truth, and knaves always lie. You encounter two people, A and B. A says \"The two of us are both knights\" and B says \"A is a knave\".<br/>Determine what A and B are, respectively, if they address you in the above way described:",
    options: [
      "Knight, Knight",
      "Knight, Knave",
      "Knave, Knight",
      "Knave, Knave"
    ],
    correctAnswer: [2]
  },
  {
    id: 4, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'Liar Puzzles',
    question: "Consider the following popular puzzle.<br/><br/>A boy and a girl are talking. One of them has black hair, another has white hair.<br/>\"I am a boy\" said the child with black hair.<br/>\"I am a girl\" said the child with white hair.<br/>At least one of them is lying.<br/><br/>Which of them is lying?",
    options: ["The boy only", "The girl only", "Both of them", "Information is not sufficient to find out the liar"],
    correctAnswer: [2]
  },
  {
    id: 5, type: 'MSQ', marks: { positive: 1, negative: 0 },
    category: 'English to Logic Translation',
    question: "Let <em>p</em> be the statement \"Maria learns discrete mathematics\" and <em>q</em> the statement \"Maria will find a good job.\" Which of the following English Statement expresses the statement <em>p → q</em>?",
    options: [
      "\"If Maria learns discrete mathematics, then she will find a good job.\"",
      "\"Maria will find a good job provided that she learns discrete mathematics.\"",
      "\"Maria will learn discrete mathematics provided that she finds a good job.\"",
      "\"For Maria to get a good job, it is sufficient for her to learn discrete mathematics.\""
    ],
    correctAnswer: [0, 1, 3]
  },
  {
    id: 6, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'Truth Count Analysis',
    question: "The number of combinations of truth values for <em>p, q</em> and <em>r</em> for which the statement<br/><em>~p ↔ (q ∧ ~(p → r))</em> is true ________",
    correctAnswer: 2
  },
  {
    id: 7, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    question: "If <em>p, q, r</em> are simple statement with truth values <em>T, F, T</em> respectively then the truth value of <em>((~ p ∨ q) ∧ r) → p</em> is :",
    options: ["True", "False", "True if <em>r</em> is false", "True if <em>q</em> is true"],
    correctAnswer: [0]
  },
  {
    id: 8, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    question: "Consider the following popular puzzle.<br/><br/>When asked for the ages of her three children, Mrs. Baker says that \"Alice is her youngest child if Bill is not her youngest child, and that Alice is not her youngest child if Carl is not her youngest child.\" Note that only one of the three children can be her youngest child.<br/><br/>Which is correct?",
    options: ["Alice is her youngest child.", "Bill is her youngest child.", "Carl is her youngest child.", "Information is not sufficient to find out the youngest child."],
    correctAnswer: [0]
  },
  {
    id: 9, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    question: "If <em>(p ∧ ~q) ∧ (p ∧ r) → ~p ∨ q</em> is false, then the truth values of <em>p, q</em> and <em>r</em> are, respectively :",
    options: ["<em>F, T, F</em>", "<em>T, F, T</em>", "<em>T, T, T</em>", "<em>F, F, F</em>"],
    correctAnswer: [1]
  },
  {
    id: 10, type: 'NAT', marks: { positive: 1, negative: 0 },
    question: "Suppose that the statement <em>p → ~q</em> is false. What is the number of all possible combinations of truth values of <em>r</em> and <em>s</em> for which <em>(~q → r) ∧ (~p ∨ s)</em> is true?",
    correctAnswer: 4
  },
  {
    id: 11, type: 'MSQ', marks: { positive: 2, negative: 0 },
    question: "Suppose that during the most recent fiscal year, the annual revenue of Acme Computer was <strong>138</strong> billion dollars and its net profit was <strong>8</strong> billion dollars, the annual revenue of Nadir Software was <strong>87</strong> billion dollars and its net profit was <strong>5</strong> billion dollars, and the annual revenue of Quixote Media was <strong>111</strong> billion dollars and its net profit was <strong>13</strong> billion dollars.<br/>Determine the truth value of each of these propositions for the most recent fiscal year. Which is/are True?",
    options: [
      "Nadir Software had the smallest net profit if and only if Acme Computer had the largest annual revenue.",
      "Nadir Software had the lowest net profit and Acme Computer had the largest annual revenue.",
      "Acme Computer had the largest net profit or Quixote Media had the largest net profit.",
      "If Quixote Media had the smallest net profit, then Acme Computer had the largest annual revenue."
    ],
    correctAnswer: [0, 1, 2, 3]
  },
  {
    id: 12, type: 'MSQ', marks: { positive: 1, negative: 0 },
    question: "A sufficient condition for a triangle <em>T</em> be a right triangle is that <em>a² + b² = c²</em>. An equivalent statement is",
    options: [
      "If <em>T</em> is a right triangle then <em>a² + b² = c²</em>.",
      "If <em>a² + b² = c²</em> then <em>T</em> is a right triangle.",
      "If <em>a² + b² ≠ c²</em> then <em>T</em> is not a right triangle.",
      "<em>T</em> is a right triangle only if <em>a² + b² = c²</em>."
    ],
    correctAnswer: [1, 2, 3]
  },
  {
    id: 13, type: 'NAT', marks: { positive: 2, negative: 0 },
    question: "Let <em>P</em> be a compound proposition over 4 propositional variables: <em>a, b, c, d</em>. We know that for a compound proposition over <em>n</em> propositional variables, we have <em>2^n</em> rows in the truth table. Every row of truth table of <em>P</em> is called an Interpretation of <em>P</em>. A row in truth table of <em>P</em> is called \"model\" iff <em>P</em> is true for that row. Let <em>P</em> be '<em>a → b</em>'. How many models are there for <em>P</em>?",
    correctAnswer: 12
  },
  {
    id: 14, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    question: "If <em>p</em> is true and <em>q</em> is false then the truth values of <em>(p → q) ↔ (~ q → ~ p)</em> and <em>(~ p ∨ ~ q) ∧ (~ q ∨ p)</em> are respectively",
    options: ["True, True", "True, False", "False, False", "False, True"],
    correctAnswer: [0]
  },
  {
    id: 15, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    question: "Given the truth table of a Binary Operation $ as follows:<br/><br/><table border='1' style='margin:auto;border-collapse:collapse;text-align:center;'><tr><th>X</th><th>Y</th><th>X$Y</th></tr><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td></tr></table><br/>Identify the matching Boolean Expression.",
    options: ["<em>X $ → Y</em>", "<em>~ X $ Y</em>", "<em>~ X $ → Y</em>", "none of the options"],
    correctAnswer: [1]
  }
];

export const QUIZ_2_QUESTIONS = [
  {
    id: 1, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'Function Counts',
    question: "Two compound propositions are logically equivalent if they have the same truth table. For example, the following two compound propositions are logically equivalent: <strong>p → q</strong> and <strong>q ∨ ~p</strong>.<br/>Using exactly <strong>k = 4</strong> propositional variables, how many compound propositions are there that are Not logically equivalent to each other?",
    correctAnswer: 65536
  },
  {
    id: 2, type: 'MSQ', marks: { positive: 1, negative: 0 },
    category: 'Contraposition & Contradiction',
    question: "If <em>F<sub>1</sub>, F<sub>2</sub></em> and <em>F<sub>3</sub></em> are propositional formulae/expressions, over same set of propositional variables, such that <em>F<sub>1</sub> ∧ F<sub>2</sub> → F<sub>3</sub></em> is a contradiction, then which of the following is/are necessarily true?",
    options: [
      "Both <em>F<sub>1</sub></em> and <em>F<sub>2</sub></em> are tautologies",
      "The conjunction <em>F<sub>1</sub> ∧ F<sub>2</sub></em> is a tautology",
      "<em>F<sub>3</sub></em> is a contradiction",
      "<em>F<sub>1</sub>, F<sub>2</sub></em> and <em>F<sub>3</sub></em> all are contradictions."
    ],
    correctAnswer: [0, 1, 2]
  },
  {
    id: 3, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'Logical Inference',
    question: "<ul><li>If the bank receipt is forged, then Mr. M is liable.</li><li>If Mr. M is liable, he will go bankrupt.</li><li>If the bank will loan him money, he will not go bankrupt.</li><li>The bank will loan him money.</li></ul>Which of the following can be concluded from the above statements?",
    options: [
      "Mr. M is liable",
      "The receipt is not forged",
      "Mr. M will go bankrupt",
      "The bank will go bankrupt"
    ],
    correctAnswer: [1]
  },
  {
    id: 4, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'Validity & Satisfiability',
    question: "Recall the definitions of valid, satisfiable, and unsatisfiable in the propositional logic.<br/><br/>What is the relationship between the above concepts?",
    options: [
      "If a formula <em>φ</em> is valid then <em>φ</em> is satisfiable; and if <em>φ</em> is invalid then <em>φ</em> is not satisfiable.",
      "If a formula <em>φ</em> is valid then <em>~φ</em> is not satisfiable; and if <em>φ</em> is invalid then <em>~φ</em> is satisfiable.",
      "If a formula <em>~φ</em> is not satisfiable, then <em>φ</em> is valid; and if <em>~φ</em> is satisfiable then <em>φ</em> is invalid.",
      "If a formula <em>φ</em> is not satisfiable, then <em>φ</em> is invalid; and if <em>~φ</em> is satisfiable then <em>φ</em> is valid."
    ],
    correctAnswer: [1, 2]
  },
  {
    id: 5, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'Craig Interpolant',
    question: "Let <em>φ</em> be a propositional formula on a set of variables <em>A</em> and <em>ψ</em> be a propositional formula on a set of variables <em>B</em>, such that <em>φ ⇒ ψ</em>. A <strong>Craig interpolant</strong> of <em>φ</em> and <em>ψ</em> is a propositional formula <em>µ</em> on variables <em>A ∩ B</em> such that <em>φ ⇒ µ</em> and <em>µ ⇒ ψ</em>.<br/>Given propositional formula <em>φ = q ∨ (r ∧ s)</em> on the set of variables <em>A = {q, r, s}</em> and propositional formula <em>ψ = ~q → (s ∨ t)</em> on the set of variables <em>B = {q, s, t}</em>, which of the following is a Craig interpolant for <em>φ</em> and <em>ψ</em>?",
    options: [
      "<em>φ</em> itself",
      "<em>q ∨ s</em>",
      "<em>q ∨ r</em>",
      "<em>~q ∧ s</em>"
    ],
    correctAnswer: [1]
  },
  {
    id: 6, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    question: "Which of the following statements is true?",
    options: [
      "The sentence <em>S</em> is a logical consequence of <em>S<sub>1</sub>, ..., S<sub>n</sub></em> if and only if <em>S<sub>1</sub> ∧ S<sub>2</sub> ∧ ... ∧ S<sub>n</sub> → S</em> is satisfiable.",
      "The sentence <em>S</em> is a logical consequence of <em>S<sub>1</sub>, ..., S<sub>n</sub></em> if and only if <em>S<sub>1</sub> ∧ S<sub>2</sub> ∧ ... ∧ S<sub>n</sub> → S</em> is valid.",
      "The sentence <em>S</em> is a logical consequence of <em>S<sub>1</sub>, ..., S<sub>n</sub></em> if and only if <em>S<sub>1</sub> ∧ S<sub>2</sub> ∧ ... ∧ S<sub>n</sub> ∧ S</em> is consistent.",
      "The sentence <em>S</em> is a logical consequence of <em>S<sub>1</sub>, ..., S<sub>n</sub></em> if and only if <em>S<sub>1</sub> ∧ S<sub>2</sub> ∧ ... ∧ S<sub>n</sub> ∧ S</em> is inconsistent."
    ]
  },
  {
    id: 7, type: 'MSQ', marks: { positive: 2, negative: 0 },
    question: "In propositional logic if <em>(P → Q) ∧ (R → S)</em> and <em>(P ∨ R)</em> are two premises such that<br/><br/><div style='text-align:center;'><em>(P → Q) ∧ (R → S)</em><br/><em>P ∨ R</em><br/><hr style='width:200px;margin:auto;'/><em>Y</em><hr style='width:200px;margin:auto;'/></div><br/><em>Y</em> is the premise :",
    options: [
      "<em>P ∨ R</em>",
      "<em>P ∨ S</em>",
      "<em>Q ∨ R</em>",
      "<em>Q ∨ S</em>"
    ]
  },
  {
    id: 8, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    question: "Consider a proposition given as:<br/><em>x ≥ 6</em>, if <em>x² ≥ 25</em> and and its proof as:<br/><br/>If <em>x ≥ 6</em>, then <em>x² = x . x ≥ 6 . 6 = 36 ≥ 25</em><br/><br/>Which of the following is correct with respect to the given proposition and its proof?<br/><br/><ul style='list-style-type:lower-alpha'><li>The proof shows the converse</li><li>The proof starts by assuming what is to be shown</li><li>The proof is correct and there is nothing wrong</li></ul>",
    options: [
      "<em>a</em> only",
      "<em>c</em> only",
      "<em>a</em> and <em>b</em>",
      "<em>b</em> only"
    ]
  },
  {
    id: 9, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    question: "Which of the following expressions is false?",
    options: [
      "<em>p → q ≡ q → p</em>",
      "<em>~(p ∨ q) ≡ ~p ∧ ~q</em>",
      "<em>p → q ≡ ~q → ~p</em>",
      "none of the above"
    ]
  },
  {
    id: 10, type: 'MSQ', marks: { positive: 1, negative: 0 },
    question: "In propositional logic, given <em>P</em> and <em>P → Q</em>, we can infer ________",
    options: [
      "<em>~Q</em>",
      "<em>Q</em>",
      "<em>P ∧ Q</em>",
      "<em>~P ∧ Q</em>"
    ]
  },
  {
    id: 11, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    question: "What is logically equivalent to \"If Kareena and Parineeti go to the shopping mall then it is raining\":",
    options: [
      "If Kareena and Parineeti do not go to the shopping mall then it is not raining.",
      "If Kareena and Parineeti do not go to the shopping mall then it is raining.",
      "If it is raining then Kareena and Parineeti go to the shopping mall.",
      "If it is not raining then Kareena and Parineeti do not go to the shopping mall."
    ]
  },
  {
    id: 12, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    question: "A set of propositions is called a system specification.<br/><br/>System specification is consistent if they do not contain conflicting requirements that could be used to derive a contradiction.<br/>When specifications are not consistent, there would be no way to develop a system that satisfies all specifications.<br/>Consider the following System Specifications:<br/><ol><li>\"Whenever the system software is being upgraded, users cannot access the file system. If users can access the file system, then they can save new files. If users cannot save new files, then the system software is not being upgraded.\"</li><li>\"The diagnostic message is stored in the buffer or it is retransmitted. The diagnostic message is not stored in the buffer. If the diagnostic message is stored in the buffer, then it is retransmitted.\"</li></ol><br/>Which of the above system specifications are consistent?",
    options: [
      "Only <strong>1</strong>",
      "Only <strong>2</strong>",
      "Both",
      "None"
    ]
  },
  {
    id: 13, type: 'MSQ', marks: { positive: 1, negative: 0 },
    question: "Select the proposition that is a tautology.",
    options: [
      "<em>(p ∧ q) → ~p</em>",
      "<em>(p ∨ q) → p</em>",
      "<em>(p ∧ q) ↔ p</em>",
      "<em>(p ∧ q) → p</em>"
    ]
  },
  {
    id: 14, type: 'MSQ', marks: { positive: 2, negative: 0 },
    question: "Let <em>p, q, r</em> be three propositional variables.<br/><br/>Which of the following statements is/are false?",
    options: [
      "<em>p → (q ∨ r)) ≡ ((p ∧ ~q) → r)</em>",
      "<em>(p ∧ q) ∨ r ≡ p ∧ (q ∨ r)</em>",
      "If <em>(p → q)</em> is FALSE then <em>(q → p)</em> is TRUE.",
      "If <em>(p → q)</em> is TRUE then <em>(q → p)</em> is FALSE."
    ]
  },
  {
    id: 15, type: 'MSQ', marks: { positive: 1, negative: 0 },
    question: "Select the proposition that is a contradiction.",
    options: [
      "<em>~(p ∨ q) ∧ p</em>",
      "<em>(p ∨ q) ∧ p</em>",
      "<em>(~p ∧ q) ↔ p</em>",
      "<em>(~p ∧ q) → p</em>"
    ]
  },
  {
    id: 16, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'Contradiction Analysis',
    question: "If <strong>F1, F2</strong> and <strong>F3</strong> are propositional formulae/expressions, over some set of propositional variables, such that <strong>F1 ∨ F2 → F3</strong> is a contradiction, then which of the following is/are necessarily true:",
    options: [
      "Both <strong>F1, F2</strong> are tautologies.",
      "At least one of <strong>F1, F2</strong> is a tautology.",
      "<strong>F3</strong> is a contradiction.",
      "<strong>F1 ∨ F2</strong> is a tautology."
    ],
    correctAnswer: [2, 3]
  }
];

export const QUIZ_3_QUESTIONS = [
  {
    id: 1, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'Logical Arguments',
    question: "Consider the following arguments.<br/><br/><ul><li><strong>Argument 1:</strong> Kerry errs or Myrna fails to show. If Kerry errs, then he does not break the record. Myrna fails to show. Therefore, Kerry does break the record.</li><li><strong>Argument 2:</strong> If Tasha leaves, then Carol moves in. If Carol moves in, then Sam is not happy. If Sam is not happy, then Josh laughs. Sam is happy. Hence, Tasha does not leave.</li></ul><br/>Which of the following is true?",
    options: [
      "Only Argument <strong>1</strong> is valid.",
      "Only Argument <strong>2</strong> is valid.",
      "Both Arguments are valid.",
      "No Argument is valid."
    ],
    correctAnswer: [1]
  },
  {
    id: 2, type: 'MSQ', marks: { positive: 1, negative: 0 },
    category: 'Formula Satisfaction',
    question: "Let's consider the interpretation <em>v</em> where <em>v(p) = F, v(q) = T, v(r) = T</em>. Which of the following propositional formulas are satisfied by <em>v</em>?",
    options: [
      "<em>(p → ~q) ∨ ~(r ∧ q)</em>",
      "<em>(~p ∨ ~q) → (p ∨ ~r)</em>",
      "<em>~(~p → ~q) ∧ r</em>",
      "<em>~(~p → q ∧ ~r)</em>"
    ],
    correctAnswer: [0, 3]
  },
  {
    id: 3, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'Tautology Verification',
    question: "Let <em>F</em> and <em>G</em> be two propositional formula.<br/><br/>Which of the following is/are True?",
    options: [
      "<em>F ∨ G</em> is a tautology iff at least one of them is a tautology",
      "If <em>F → G</em> is a tautology and <em>F</em> is a tautology, then <em>G</em> is a tautology.",
      "<em>(F → G) ∨ (F → ~G)</em> is a tautology.",
      "<em>(F → G) ∧ (F → ~G)</em> is a tautology iff <em>F</em> is a contradiction."
    ],
    correctAnswer: [1, 2, 3]
  },
  {
    id: 4, type: 'MSQ', marks: { positive: 2, negative: 0 },
    question: "Which of the following logical arguments is/are valid?",
    options: [
      "<div style='text-align:left;display:inline-block'><em>P → (Q → R)</em><br/><em>~R</em><br/>-----<br/><em>∴ ~P</em></div>",
      "<div style='text-align:left;display:inline-block'><em>(P ∧ Q) → ~R</em><br/><em>R → P</em><br/>-----<br/><em>∴ ~(Q ∧ R)</em></div>",
      "<div style='text-align:left;display:inline-block'><em>(Q → P) ∨ R</em><br/><em>~(R ∧ Q)</em><br/>-----<br/><em>∴ ~~Q → P</em></div>",
      "<div style='text-align:left;display:inline-block'><em>P → (Q ∨ R)</em><br/><em>~R</em><br/><em>Q → ~(P ∧ R)</em><br/>-----<br/><em>∴ Q</em></div>"
    ]
  },
  {
    id: 5, type: 'MSQ', marks: { positive: 1, negative: 0 },
    question: "Consider the following atomic propositions:<br/><ul><li><strong>R:</strong> It is Raining</li><li><strong>S:</strong> Sonu is Sick</li></ul><br/>Which of the following is/are correct English Translation of the following logical expression:<br/><br/><div style='text-align:center;'><strong>(R ∨ ~S) ∧ (~R ∨ S)</strong> ?</div>",
    options: [
      "It is raining if and only if sonu is not sick",
      "If sonu is sick then it is raining, and vice versa",
      "It is raining is equivalent to sonu is sick",
      "It is raining or sonu is sick but not both"
    ]
  },
  {
    id: 6, type: 'MSQ', marks: { positive: 1, negative: 0 },
    question: "Which of the following compound propositions is/are a tautology?",
    options: [
      "<em>[p ∧ (p → q)] → q</em>",
      "<em>[q ∧ (p → q)] → p</em>",
      "<em>[(p ∨ q) ∧ (r → p) ∧ (r → q)] → r</em>",
      "<em>[(p ∨ q) ∧ (p → r) ∧ (q → r)] → r</em>"
    ]
  },
  {
    id: 7, type: 'MSQ', marks: { positive: 1, negative: 0 },
    question: "Let <em>p, q</em> be two atomic propositional assertions. Then which of the following is/are false?",
    options: [
      "<em>(p → q) ∨ (p → ~q)</em> is a tautology.",
      "<em>(p → q) ∨ (q → p)</em> is a tautology.",
      "<em>(p → q) ∨ (q → ~p)</em> is a tautology.",
      "<em>(p → q) ∨ (~q → ~p)</em> is a tautology."
    ]
  },
  {
    id: 8, type: 'MSQ', marks: { positive: 2, negative: 0 },
    question: "Which of the following statements is/are true?",
    options: [
      "The argument form with premises <em>p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>n</sub></em> and conclusion <em>q → r</em> is valid iff the argument form with premises <em>p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>n</sub>, r</em>, and conclusion <em>q</em> is valid.",
      "The argument form with premises <em>p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>n</sub></em> and conclusion <em>q → r</em> is valid iff the argument form with premises <em>p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>n</sub>, q</em>, and conclusion <em>r</em> is valid.",
      "The argument form with premises <em>p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>n</sub></em> and conclusion <em>q → r</em> is valid iff the argument form with premises <em>p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>n</sub>, q</em>, and conclusion <em>~r</em> is valid.",
      "The argument form with premises <em>p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>n</sub></em> and conclusion <em>q → r</em> is valid iff the argument form with premises <em>p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>n</sub>, ~r</em>, and conclusion <em>~q</em> is valid."
    ]
  },
  {
    id: 9, type: 'MSQ', marks: { positive: 2, negative: 0 },
    question: "The \"implies\" connective \"→\" is one of the stranger connectives in propositional logic. Below are a series of statements regarding implications.<br/><br/>Which of the following statements is/are TRUE?",
    options: [
      "For any propositions <em>P</em> and <em>Q</em>, the following is always true: <em>(P → Q) ∨ (Q → P)</em>.",
      "For any propositions <em>P, Q</em> and <em>R</em>, the following statement is always true:<br/><em>(P → Q) ∨ (Q → R)</em>.",
      "For any propositions <em>P, Q</em> and <em>R</em>, the following statement is always true:<br/><em>(P → Q) ∨ (~P → R)</em>.",
      "For any propositions <em>P, Q</em> and <em>R</em>, the following statement is always true:<br/><em>(P → Q) ∨ (R → Q)</em>."
    ]
  },
  {
    id: 10, type: 'MSQ', marks: { positive: 2, negative: 0 },
    question: "The Logic Problem, taken from \"<strong>WFF'N PROOF, The Game of Logic</strong>\" has these two assumptions:<br/><br/><ol><li>\"Logic is difficult or not many students like logic.\"</li><li>\"If mathematics is easy, then logic is not difficult.\"</li></ol><br/>By translating these assumptions into statements involving propositional variables and logical connectives, Find out which of the following are valid conclusions of these assumptions:",
    options: [
      "\"Mathematics is not easy, if many students like logic.\"",
      "\"Not many students like logic, if mathematics is not easy.\"",
      "\"Mathematics is not easy or logic is difficult.\"",
      "\"Logic is not difficult or mathematics is not easy.\""
    ]
  }
];

export const GO_1_QUESTIONS = [
  {
    id: 1, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'Cache Memory - Tag Size',
    question: "Consider a cache of size 256 KB, 4-way set associative, with a block size of 64 bytes. If the byte addressable main memory size is 4 GB, what is the tag memory size for the cache in bytes?",
    correctAnswer: 71680
  },
  {
    id: 2, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'Cache Performance Analysis',
    question: "Consider a direct mapped cache of size 16 KB and block size 64 bytes and using LRU replacement. Initially the cache is empty. The following sequence of access to memory blocks :<br/><br/><div style='text-align:center;'>0, 64, 0, 288, 320, 16, 34, 257, 274, 19, 12, 32, 1</div><br/>is repeated 100 times. If the number of conflict misses and compulsory misses are <em>A</em> and <em>B</em> respectively, <em>2A + B =</em> ________",
    correctAnswer: 13
  },
  {
    id: 3, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'Instruction Sets - Expanding Opcode',
    question: "A computer using expanding opcode technique has 32 — bit instructions and 13 — bit addresses. If there are 60 two-address instructions, and 128 zero-address instructions, approximately how many one-address instructions can it support?",
    options: ["32 K", "20 K", "64 K", "16 K"],
    correctAnswer: [0]
  },
  {
    id: 4, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'Architecture Comparison',
    question: "Which of the following is/are correct?<br/><br/><ol type='a'><li>In RISC, control circuit is simpler than CISC kind of architectures</li><li>In vertical microprogramming, control signals cannot be directly generated after fetching of microinstructions</li><li>Horizontal microprogrammed control unit requires longer control word compared to vertical microprogramming</li><li>Horizontal microprogrammed control unit is more flexible than vertical microprogrammed.</li></ol>",
    options: ["(a)(b)(c)(d)", "(a)(b)(c)", "(a)(b)", "(b)"],
    correctAnswer: [1]
  },
  {
    id: 5, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'Cache Miss Calculation',
    question: "In a C program, an array is declared as <strong>double arr[8192]</strong>. The starting address of the array is 0x00000000. This program is run on a computer that has a 4-way set associative cache of size 32 Kbytes, with block size of 64 Bytes. If the program accesses the elements of the array one by one in order from first element to last and then one more time in reverse order from the last element to the first element, total number of cache misses will be ________",
    options: ["2048", "1536", "256", "1024"],
    correctAnswer: [3]
  },
  {
    id: 6, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'Pipeline Throughput',
    question: "The Fetch, Decode, Execute, Memory and Write Back stages of a processor have the latencies 300ps, 300ps, 350ps, 500ps and 110ps respectively. What is the ratio of the throughputs of a pipelined implementation with an extra overhead of 20ps for the register between the pipeline stages and a non-pipelined implementation (correct to one decimal place)?",
    correctAnswer: 3.0
  },
  {
    id: 7, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'Instruction Cycles',
    question: "The correct sequence of steps involved in the execution of the instruction LOAD R1, X(R2) are<br/><br/><ol type='a'><li>Fetch instruction and increment PC.</li><li>Compute sum [R1] + [R2]</li><li>Decode instruction to determine operation.</li><li>Keep quiet (No memory access)</li><li>Add immediate value to the content of R2.</li><li>Use sum X+[R2] as an effective address of source operand and read content.</li><li>Load the data received from the memory into destination register R1</li><li>Load register's result into destination register R1</li></ol>",
    options: ["a, c, e, f, g", "a, b, c, d, e", "a, b, e, f, h", "a, e, f, g, h"],
    correctAnswer: [0]
  },
  {
    id: 8, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'Cache Organization',
    question: "A computer system has a 8 K word cache organized in block-set-associative manner with 8 blocks per set and 32 words per block. The number of bits in the SET and WORD fields of the main memory address format is:",
    options: ["6, 4", "4, 5", "5, 5", "8, 5"],
    correctAnswer: [2]
  },
  {
    id: 9, type: 'MSQ', marks: { positive: 1, negative: 0 },
    category: 'Cache Performance Misconceptions',
    question: "Which one of the following is/are INCORRECT? (Mark all the appropriate choices)",
    options: [
      "Compulsory misses can be reduced by increasing the total cache size.",
      "Capacity misses can be reduced by increasing the block size.",
      "Conflict misses may be increased by increasing the value of associativity.",
      "Compulsory misses can be reduced by increasing the cache block size."
    ],
    correctAnswer: [0, 1, 2]
  },
  {
    id: 10, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'DMA & Speedup',
    question: "On a non-pipelined sequential processor, a program segment, which is the part of the interrupt service routine, is given to transfer 400 bytes from an I/O device to memory.<br/><br/><div style='border:1px solid #ddd; padding:10px; font-family:monospace;'>Initialize the address register<br/>Initialize the count to 400<br/>LOOP: Load a byte from device<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Store in memory at address given by address register<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Increment the address register<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Decrement the count<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If count!=0 go to LOOP</div><br/>Assume that each statement in this program is equivalent to a machine instruction which takes one clock cycle to execute if it is a non-load/store instruction. The load/store instruction take 3 clock cycles to execute. The designer of the system also has an alternate approach of using the DMA controller to implement the same transfer which requires 30 clock cycles of initialization and other overheads. Each DMA transfer cycle takes two clock cycles to transfer one byte of data from the device to the memory. What is the approximate speedup when the DMA controller based design is used in a place of interrupt driven program based input-output? (round off to 2 decimal places)",
    correctAnswer: 4.81
  },
  {
    id: 11, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'Cache - C Code Analysis',
    question: "For the C code below, determine the number of data cache misses assuming an 8 KB direct-mapped data cache with 64-byte blocks, and a write-back cache that does write allocate. The elements of a and b are 4 bytes. Let's also assume they are not in the cache at the start of the program and starting addresses of a and b are at cache line boundaries.<br/><br/><div style='border:1px solid #ddd; padding:10px; font-family:monospace;'>int a[4][96], b[97][4];<br/>....<br/>for (i = 0; i < 4; i++)<br/>&nbsp;&nbsp;for (j = 0; j < 96; j++)<br/>&nbsp;&nbsp;&nbsp;&nbsp;a[i][j] = b[j][0] * b[j+1][0];</div>",
    correctAnswer: 44
  },
  {
    id: 12, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'Memory Mapping Hierarchy',
    question: "The main memory of a computer has <em>N</em> blocks while the cache has <em>N/m</em> blocks. If the cache uses set associative mapping scheme with 4 blocks per set, then block <em>k</em> of the main memory maps to the set:",
    options: [
      "(k mod (N/m)) of the cache",
      "(k mod (N/4m)) of the cache",
      "(4k mod 4m) of the cache",
      "(k mod 4m) of the cache"
    ],
    correctAnswer: [1]
  },
  {
    id: 13, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'Effective CPI Calculation',
    question: "Consider a CPU with an average CPI of 1.4 when all memory accesses hit on the cache. Assume an instruction mix:<br/><br/><table border='1' style='margin:auto;border-collapse:collapse;text-align:center;'><tr><th>ALU</th><td>45%</td></tr><tr><th>LOAD</th><td>20%</td></tr><tr><th>STORE</th><td>20%</td></tr><tr><th>BRANCH</th><td>15%</td></tr></table><br/>If the cache miss rate is 1.6% and miss penalty is 60 cycles, calculate the effective CPI for a unified L1 cache using write back and write allocate policy with the probability of a cache block being dirty being 0.15 (round off to 2 decimal places).",
    correctAnswer: 2.76
  },
  {
    id: 14, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'Register Windows Analysis',
    question: "Two computers use register windows with the following characteristics. Determine which computer is using more number of the total number of registers and find their absolute difference.<br/><br/><table border='1' style='margin:auto;border-collapse:collapse;text-align:center;'><tr><th></th><th>Computer A</th><th>Computer B</th></tr><tr><th>Global registers</th><td>10</td><td>9</td></tr><tr><th>Local registers</th><td>9</td><td>8</td></tr><tr><th>Common registers</th><td>6</td><td>7</td></tr><tr><th>Number of windows</th><td>8</td><td>4</td></tr></table>",
    options: ["B, 130", "A, 69", "A, 61", "B, 61"],
    correctAnswer: [1]
  },
  {
    id: 15, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'Pipeline Speedup Analysis',
    question: "A non-pipeline processor <em>X</em> has a clock frequency of 2.5 GHz and an average CPI of 3. Processor <em>Y</em> an improved version of <em>X</em>, is designed with 5 stage linear instruction pipeline. However, due to latch delay and clock skew the clock rate of <em>Y</em> is only 2 GHz. If a program consists of one million instructions are executed on both the processors the speedup of processor <em>Y</em> as compared to <em>X</em> is ________ (rounded to 1 decimal points)",
    correctAnswer: 2.4
  },
  {
    id: 16, type: 'NAT', marks: { positive: 1, negative: 0 },
    category: 'Pipeline Latency Analysis',
    question: "The Fetch, Decode, Execute, Memory and Write Back stages of a pipelined processor have the latencies 200ps, 140ps, 160ps, 190ps and 100ps respectively. Assume that when pipelining, each pipeline stage costs 10ps extra for the registers between pipeline stages. If you could split one of the pipeline stages into 2 equal halves, what is the new latency (in ps) for an instruction? (rounded to one decimal point)",
    correctAnswer: 180.0
  },
  {
    id: 17, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'Functional Unit Throughput',
    question: "Suppose the functions <em>A</em> and <em>B</em> can be computed in 6 and 4 nanoseconds by functional units <em>U<sub>A</sub></em> and <em>U<sub>B</sub></em>, respectively. Given two instances of <em>U<sub>A</sub></em> and three instances of <em>U<sub>B</sub></em>, it is required to implement the computation <em>A(B(X<sub>i</sub>))</em> for <em>1 &le; i &le; 100</em>. Ignoring all other delays, the minimum time required to complete this computation (in nanoseconds) is ________",
    correctAnswer: 310
  },
  {
    id: 18, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'Memory Bandwidth & Misses',
    question: "Assume a main memory access time of 64 <em>ns</em> and a memory system capable of a sustained transfer rate of 16 GBps. If the block size is 64 bytes, what is the maximum number of outstanding misses we need to support assuming that we can maintain the peak bandwidth given the request stream and that accesses never conflict. For simplicity, ignore the time between misses.",
    correctAnswer: 16
  },
  {
    id: 19, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'ALU Flags & 2\'s Complement',
    question: "A processor that has carry, overflow and sign flag bits as part of its program status word (PSW) performs addition of the following two 2's complement numbers <strong>01101100</strong> and <strong>11000011</strong>. After the execution of this addition operation, the status of the carry, overflow and sign flags, respectively will be:",
    options: ["0, 1, 1", "1, 0, 1", "0, 1, 0", "1, 0, 0"],
    correctAnswer: [3]
  },
  {
    id: 20, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'Interrupt Mechanisms',
    question: "Which one of the following is correct?",
    options: [
      "If Interrupt enable bit is 1 in CPU, then processor is interrupt safe.",
      "Daisy chain is less efficient than software polling which provides in effect a hardware poll and for interrupts all I/O modules share a common interrupt request line.",
      "In software polling when the processor detects an interrupt, it branches to an ISR whose job is to poll each module to determine which module caused the interrupt",
      "All options are correct."
    ],
    correctAnswer: [2]
  },
  {
    id: 21, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'Pipeline Hazards Analysis',
    question: "Consider a 5-stage pipeline - IF (Instruction Fetch), ID (Instruction Decode and register read), EX (Execute), MEM (Memory) and WB (Write Back). All register reads take place in the second phase of a clock cycle and all register writes occur in the first phase. Consider the execution of the following instruction sequence:<br/><br/>&bull; <em>I<sub>1</sub> : R<sub>1</sub> &larr; R<sub>2</sub> + R<sub>3</sub></em><br/>&bull; <em>I<sub>2</sub> : R<sub>3</sub> &larr; R<sub>1</sub> - R<sub>2</sub></em><br/>&bull; <em>I<sub>3</sub> : M[R<sub>1</sub> + 1000] &larr; R<sub>1</sub></em><br/>&bull; <em>I<sub>4</sub> : R<sub>2</sub> &larr; R<sub>3</sub> * R<sub>1</sub></em><br/><br/>If the number of RAW (Read after write) hazards is denoted by <em>A</em>, WAR (Write after read) hazards by <em>B</em> and WAW (Write after write) hazards by <em>C</em>, then <em>A + B + C = ________</em>",
    correctAnswer: 4
  },
  {
    id: 22, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'Pipeline Branch Timing',
    question: "Consider an instruction pipeline with five stages without any branch prediction: Fetch Instruction(FI), Decode Instruction(DI), Fetch Operand(FO), Execute instruction(EI) and Write Operand(WO). The stage delays for FI, DI, FO, EI and WO are 4ns, 5ns, 12ns, 7ns and 6ns respectively. There are intermediate storage buffers after each stage and the delay of each buffer is 1ns. A program consisting of 12 instructions <em>I<sub>1</sub>, I<sub>2</sub>, ... I<sub>12</sub></em> is executed in this pipelined processor. Instruction <em>I<sub>4</sub></em> is the only branch instruction and its branch target is <em>I<sub>10</sub></em>. If the branch is taken during the execution of this program, the time(in ns) needed to complete the program is ________",
    correctAnswer: 156
  },
  {
    id: 23, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'Microprogrammed Control Unit',
    question: "Consider a CPU where all the instructions require 8 clock cycles to complete execution. There are 150 instructions in the instruction set. It is found that 132 control signals are needed to be generated by the control unit. While designing the horizontal microprogrammed control unit, single address field format is used for branch control logic. What is the minimum size of the control word and control address register (in bits)?",
    options: ["134, 10", "143, 10", "143, 11", "134, 11"],
    correctAnswer: [2]
  },
  {
    id: 24, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'Subroutine / Stack Execution',
    question: "The content of the top of memory stack is 5230. The content of the stack pointer SP is 2560. A two word call subroutine instruction is located in memory at address 1020 followed by the address field of 6720 at location 1021. If PC value before the call instruction is fetched from memory is <em>A</em>, PC value immediately after the call instruction is executed is <em>B</em> and PC value immediately after the return from subroutine is <em>C</em> then value of tuple <em>&lang;A, B, C&rang;</em> is",
    options: [
      "&lang;1021, 5230, 1021&rang;",
      "&lang;1021, 6720, 1022&rang;",
      "&lang;1020, 5230, 1022&rang;",
      "None of the above"
    ],
    correctAnswer: [1]
  },
  {
    id: 25, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'DMA Cycle Stealing',
    question: "A Disk drive with 8 surfaces, 256 tracks/surface, 256 sectors/track, 512 bytes/sector and rotation speed of 3600 rpm is operated in cycle stealing mode whereby whenever one 2 Byte word is ready, it is sent to memory. Similarly for writing, the disk interface reads a 2 Byte word from memory in each DMA cycle. The memory cycle time is 20 nanoseconds. Find the maximum percentage of time that a CPU gets blocked during DMA operations (rounded to 1 decimal point).",
    correctAnswer: 7.9
  },
  {
    id: 26, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'DMA Controller Sequencing',
    question: "Which option is the correct order for transfer of a block of data?<br/><br/>a. The peripheral device (such as disk controller) will request the service of DMA by pulling DREQ high<br/>b. CPU will finish the present bus cycle (not necessary the present instruction) and respond to the DMA by putting high on its HLDA.<br/>c. DMA will put high on its HRQ, signalling the CPU through its HOLD pin that it needs to use the buses.<br/>d. DMA will activate DACK which tells peripheral device that it will start to transfer the data.<br/>e. DMA starts transferring from memory to peripheral by putting the address of first byte of block on the address bus and activating MEMR.<br/>f. DMA decrements the counter and increment the address points and repeats until count zero.<br/>g. When finished deactivate HRQ now it can regain control over its buses.",
    options: ["(a)(c)(b)(d)(e)(f)(g)", "(a)(b)(d)(e)(f)(c)(g)", "(a)(b)(c)(d)(e)(f)(g)", "(c)(b)(a)(d)(e)(f)(g)"],
    correctAnswer: [0]
  },
  {
    id: 27, type: 'NAT', marks: { positive: 1, negative: 0 },
    category: 'Assembly Memory Access',
    question: "Consider the following Assembly code fragment<br/><br/><div style='border:1px solid #ddd; padding:10px; font-family:monospace;'>ldr r0, adr_var1<br/>&nbsp;&nbsp;@ load the memory address of var1 via<br/>&nbsp;&nbsp;@ label adr_var1 into r0<br/>ldr r1, adr_var2<br/>&nbsp;&nbsp;@ load the memory address of var2 via<br/>&nbsp;&nbsp;@ label adr_var2 into r1<br/>ldr r2, [r1]<br/>&nbsp;&nbsp;@ load the value at memory address<br/>&nbsp;&nbsp;@ found in r1 to register r2<br/>str r2, [r1]<br/>&nbsp;&nbsp;@ store the value found in r2<br/>&nbsp;&nbsp;@ to the memory address found in r1</div><br/><br/>The total number of memory accesses (excluding register accesses) during the execution stage when the above sequence of instructions is executed is _________",
    correctAnswer: 4
  },
  {
    id: 28, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'Processor Time Consumption',
    question: "A Hard disk is connected to a 2 GHz processor through a DMA controller. Assume that the initial setup time for a DMA transfer takes 1000 clock cycles for the processor and also assume that the handling of the interrupt on DMA completion requires 500 clock cycles for the processor. The hard disk has a transfer rate of 2000 MBps and average block size transferred is 4 KB. What amount of the processor time is consumed by the disk, assuming that the data are transferred only during the idle cycles of the CPU?",
    options: ["2.060 milliseconds", "30 microseconds", "1.020 microseconds", "None of the above"],
    correctAnswer: [2]
  },
  {
    id: 29, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'One-address Instructions',
    question: "Consider the following one address instruction for a hypothetical processor implementing a function:<br/><br/><div style='border:1px solid #ddd; padding:10px; font-family:monospace;'>MOVE x<br/>MUL x<br/>STORE z<br/>MOVE x<br/>MUL A<br/>ADD z<br/>ADD B<br/>STORE y</div><br/><br/>Which of the following values represents the value of the function if <em>A = 7, B = 6</em> and input value <em>x = 10<sub>16</sub></em> (Hexadecimal)?",
    options: ["347<sub>10</sub>", "176<sub>10</sub>", "167<sub>10</sub>", "374<sub>10</sub>"],
    correctAnswer: [3]
  },
  {
    id: 30, type: 'NAT', marks: { positive: 2, negative: 0 },
    category: 'Pipeline Stage Cycles',
    question: "An instruction pipeline consists of 5 stages - Fetch (F), Decode (D), Execute (E), Memory (M) and Write (W). The four instruction in an instruction sequence need these stages for different number of clock cycles as shown below:<br/><br/><table border='1' style='margin:auto;border-collapse:collapse;text-align:center;'><tr><th>Instruction</th><th>F</th><th>D</th><th>E</th><th>M</th><th>W</th></tr><tr><td>1</td><td>1</td><td>2</td><td>1</td><td>2</td><td>1</td></tr><tr><td>2</td><td>2</td><td>2</td><td>2</td><td>1</td><td>1</td></tr><tr><td>3</td><td>1</td><td>1</td><td>3</td><td>2</td><td>2</td></tr><tr><td>4</td><td>1</td><td>3</td><td>2</td><td>1</td><td>1</td></tr></table><br/>The number of clock cycles needed to perform these four instructions is ________",
    correctAnswer: 13
  }
];

export const GO_2026_2_QUESTIONS = [
  {
    id: 1, type: 'MSQ', marks: { positive: 1, negative: 0 },
    category: 'First Order Logic - Predicates',
    question: "Consider the following predicates.<br/><ul><li><em>Rabbit(x)</em> = <em>x</em> is a rabbit.</li><li><em>Cute(x)</em> = <em>x</em> is cute.</li></ul><br/>Consider the following statement <strong>E</strong>, where the domain of every variable is set of all animals in a jungle <strong>J</strong>.<br/><div style='text-align:center;'><strong>E = ∀x(Rabbit(x) ∧ Cute(x))</strong></div><br/>If statement <strong>E</strong> is true, then which of the following is true?",
    options: [
      "There is no animal other than rabbits in the jungle <strong>J</strong>.",
      "Every rabbit is cute in jungle <strong>J</strong>.",
      "It is possible that there is some animal in <strong>J</strong> who is not a rabbit but is cute.",
      "There is some rabbit who is cute in jungle <strong>J</strong>."
    ],
    correctAnswer: [0, 1, 3]
  },
  {
    id: 2, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'FOL - Formalization',
    question: "Consider the following predicates:<br/><ul><li><em>Real(x)</em> : <em>x</em> is a real number.</li><li><em>Integer(x)</em> : <em>x</em> is an integer.</li></ul><br/>Which of the following formulas is a formalization of the sentence, if the domain is set of all integers. \"Some integers are not real numbers.\"",
    options: [
      "∃x ¬ Real(x)",
      "¬ ∀x Real(x)",
      "∃x(Integer(x) ∧ ¬ Real(x))",
      "∃x(Integer(x) → ¬ Real(x))"
    ],
    correctAnswer: [0, 1, 2]
  },
  {
    id: 3, type: 'NAT', marks: { positive: 1, negative: 0 },
    category: 'FOL - Open Statements',
    question: "Let <em>p(x), q(x)</em> denote the following open statements.<br/><div style='text-align:center;'><em>p(x) : x ≤ 3</em> &nbsp;&nbsp;&nbsp; <em>q(x) : x + 1 is odd</em></div><br/>Let <em>r(x)</em> be the open statement \"<em>x > 0</em>.\" The universe comprises all integers. Determine the number of values of <em>x</em> for which <strong>[p(x) ∧ q(x)] ∧ r(x)</strong> results in a true statement.",
    correctAnswer: 1
  },
  {
    id: 4, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'FOL - Logical Truth',
    question: "Let <em>p(x), q(x),</em> and <em>r(x)</em> denote the following open statements.<br/><div style='text-align:center;'><em>p(x) : x² - 8x + 15 = 0</em><br/><em>q(x) : x is odd</em><br/><em>r(x) : x > 0</em></div><br/>For the universe of all integers, which of the following statements is/are true?",
    options: [
      "∃x [r(x) → p(x)]",
      "∀x [¬ q(x) → ¬ p(x)]",
      "∃x [p(x) → (q(x) ∧ r(x))]",
      "∀x [(p(x) ∨ q(x)) → r(x)]"
    ],
    correctAnswer: [0, 1, 2]
  },
  {
    id: 5, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'FOL - Formalization (XOR)',
    question: "Consider the following predicates:<br/><ul><li><em>sqroot(x)</em> : <em>x</em> has a square root.</li><li><em>negative(x)</em> : <em>x</em> is negative.</li></ul><br/>Which of the following formulas is a formalization of the sentence, if the domain is set of all numbers: \"Every number is either negative or has a square root but not both\"",
    options: [
      "∀x ¬ (negative(x) ↔ sqroot(x))",
      "¬ ∃x ((negative(x) ↔ sqroot(x)))",
      "∀x ((negative(x) ∧ ¬ sqroot(x)) ∨ (¬ negative(x) ∧ sqroot(x)))",
      "∀x (negative(x) ∨ sqroot(x))"
    ],
    correctAnswer: [0, 1, 2]
  },
  {
    id: 6, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'FOL - Formalization',
    question: "Which of the following formulas is a formalization of the sentence: \"No dogs are intelligent\"",
    options: [
      "∀x(dog(x) ∧ ¬Intelligent(x))",
      "∀x(Intelligent(x) → ¬ dog(x) )",
      "∀x(dog(x) → ¬Intelligent(x))",
      "¬∃x(dog(x) ∧ Intelligent(x))"
    ],
    correctAnswer: [1, 2, 3]
  },
  {
    id: 7, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'Logical Operators',
    question: "A binary operator is defined as follows<br/><div style='text-align:center; font-size: 1.2rem; margin: 15px 0;'><em>P ⇕ Q = ¬ P ∧ Q</em></div>Which of the following statement is equivalent to <em>P → Q</em>",
    options: [
      "¬ P ⇕ Q",
      "¬ (P ⇕ Q)",
      "¬ (¬ P ⇕ Q)",
      "¬ (¬ P ⇕ ¬ Q)"
    ],
    correctAnswer: [3]
  },
  {
    id: 8, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'FOL - Formalization',
    question: "Which of the following formulas is a formalization of the sentence : \"All babies are illogical\"",
    options: [
      "∀x(baby(x) ∧ illogical(x))",
      "∀x(baby(x) → illogical(x))",
      "¬∃x(baby(x) ∧ ¬illogical(x))",
      "∃x(baby(x) ∧ ¬illogical(x))"
    ],
    correctAnswer: [1, 2]
  },
  {
    id: 9, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'FOL - Formalization',
    question: "Which of the following formulas is a formalization of the sentence :<br/><br/>\"Not all that glitters is gold\"",
    options: [
      "∀x [glitter(x) → gold(x)]",
      "¬∃x [glitter(x) ∧ gold(x)]",
      "¬∀x(glitter(x) → gold(x))",
      "∃x(glitter(x) ∧ ¬gold(x))"
    ],
    correctAnswer: [2, 3]
  },
  {
    id: 10, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'FOL - Meaning vs Syntax',
    question: "Consider the following English sentence:<br/><br/>\"Agra and Gwalior are both in India\".<br/><br/>A student has written a logical sentence for the above English sentence in First-Order Logic using predicate <strong>IN(x, y)</strong>, which means <strong>x</strong> is in <strong>y</strong>, as follows.<br/><br/><div style='text-align:center;'>In(Agra, India) ∨ In(Gwalior, India)</div><br/>Which one of the following is correct with respect to the above logical sentence?",
    options: [
      "It is syntactically valid but does not express the meaning of the English sentence",
      "It is syntactically valid and expresses the meaning of the English sentence also",
      "It is syntactically invalid but expresses the meaning of the English sentence",
      "It is syntactically invalid and does not express the meaning of the English sentence"
    ],
    correctAnswer: [0]
  },
  {
    id: 11, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'FOL - Predicate Evaluation',
    question: "Let <em>P(x), Q(x), R(x)</em> and <em>S(x)</em> denote the following predicates with domain ℤ :<br/><br/><div style='text-align:center; line-height: 1.8;'><em>P(x) : x ≤ 0</em><br/><em>Q(x) : x² = 1</em><br/><em>R(x) : x is odd</em><br/><em>S(x) : x = x + 1</em></div><br/>Which of the following statements is/are true?",
    options: [
      "∀x ∈ ℤ, R(x) → S(x)",
      "∀x ∈ ℤ, S(x) → R(x)",
      "∃x ∈ ℤ such that Q(x) ∧ ~R(x)",
      "∃x ∈ ℤ such that P(x) → S(x)"
    ],
    correctAnswer: [1, 3]
  },
  {
    id: 12, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'FOL - Open Statements',
    question: "Let <em>p(x), q(x)</em>, and <em>r(x)</em> denote the following open statements.<br/><br/><div style='text-align:center; line-height: 1.8;'><em>p(x) : x² - 8x + 15 = 0</em><br/><em>q(x) : x is odd</em><br/><em>r(x) : x > 0</em></div><br/>For the universe of all integers, which of the following statements is/are <strong>false</strong>?",
    options: [
      "∀x [p(x) → q(x)]",
      "∀x [q(x) → p(x)]",
      "∃x [p(x) → q(x)]",
      "∃x [q(x) → p(x)]"
    ],
    correctAnswer: [1]
  },
  {
    id: 13, type: 'MSQ', marks: { positive: 1, negative: 0 },
    category: 'FOL - Formalization',
    question: "Consider the following predicates:<br/><ul><li><em>bird(x)</em> : <em>x</em> is a bird.</li><li><em>penguin(x)</em> : <em>x</em> is a penguin.</li><li><em>fly(x)</em> : <em>x</em> can fly.</li></ul>Consider the following sentence:<br/><br/><strong>All birds except penguins fly. (Note that Penguins may or may not fly)</strong><br/><br/>Which of the following is/are a formula in first-order logic expressing the given fact?",
    options: [
      "∀x. [(bird(x) ∧ ¬ penguin(x)) → fly(x)]",
      "∀x. [¬ bird(x) ∨ ¬ penguin(x) ∨ fly(x)]",
      "∀x. [¬ bird(x) ∨ penguin(x) ∨ fly(x)]",
      "∀x. [bird(x) ∨ penguin(x) ∨ fly(x)]"
    ],
    correctAnswer: [0, 2]
  },
  {
    id: 14, type: 'NAT', marks: { positive: 1, negative: 0 },
    category: 'Ternary Logic',
    question: "One approach to handling fuzzy logic data might be to design a computer using ternary (base-3) logic so that data could be stored as \"true,\" \"false,\" and \"unknown.\" If each ternary logic element is called a flit, minimum how many flits are required to represent at least 256 different values?",
    correctAnswer: 6
  },
  {
    id: 15, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'FOL - Quantifier Negation',
    question: "For a given predicate <em>P(x)</em>, you might believe that the statements <em>∀xP(x)</em> or <em>∃xP(x)</em> are either true or false.<br/><strong>∃x(¬P(x)) is false</strong> if and only if",
    options: [
      "∃x(P(x)) is true.",
      "∀x(P(x)) is true.",
      "∀x(¬P(x)) is true.",
      "∀x(¬P(x)) is false."
    ],
    correctAnswer: [1]
  }
];

export const GO_2026_3_QUESTIONS = [
  {
    id: 1, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'Set Operations',
    question: "If <em>A = {x, y, z}</em> and <em>B = {u, v, w, x}</em>, and the universe is <em>{s, t, u, v, w, x, y, z}</em>. Then <em>(A ∪ B̅) ∩ (A ∩ B)</em> is equal to",
    options: [
      "{u, v, w, x}",
      "{x}",
      "{u, v, w, x, y, z}",
      "{u, v, w}"
    ],
    correctAnswer: [1]
  },
  {
    id: 2, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'Power Sets',
    question: "What is the Cardinality of the Power set of the set <em>{0, 1, 2}</em>?",
    options: ["8", "6", "7", "9"],
    correctAnswer: [0]
  },
  {
    id: 3, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'Power Sets',
    question: "Power set of empty set has exactly _______ subsets.",
    options: ["One", "Two", "Zero", "Three"],
    correctAnswer: [1]
  },
  {
    id: 4, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'Power Sets',
    question: "Which of the following is/are true?",
    options: [
      "If <em>S</em> is a set and <em>|S| = 103</em>, then <em>S</em> is not the power set of any set (that is, there is no set <em>T</em> where <em>S = P(T)</em>).",
      "If <em>S</em> is a set and <em>|S| = 103</em>, then <em>S</em> is a power set of some set (that is, there is some set <em>T</em> where <em>S = P(T)</em>).",
      "If <em>S</em> is a set and <em>|S| = 8</em>, then <em>S</em> is a power set of some set (that is, there is some set <em>T</em> where <em>S = P(T)</em>).",
      "If <em>S</em> is a set and <em>|S| = 8</em>, then <em>S</em> is not the power set of any set (that is, there is no set <em>T</em> where <em>S = P(T)</em>)."
    ],
    correctAnswer: [0, 2]
  },
  {
    id: 5, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'Set Identities',
    question: "Let <em>A, B</em> be two sets. Let <em>A̅</em> denote the complement of set <em>A</em> (with respect to some fixed universe), and <em>(A - B)</em> denote the set of elements in <em>A</em> which are not in <em>B</em>. Set <em>(A - (A - B))</em> is equal to:",
    options: ["<em>B</em>", "<em>A ∩ B̅</em>", "<em>A - B</em>", "<em>A ∩ B</em>"],
    correctAnswer: [3]
  },
  {
    id: 6, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'Finite and Infinite Sets',
    question: "Let <em>S</em> be an infinite set and <em>S<sub>1</sub>, ..., S<sub>n</sub></em> be sets such that <em>S<sub>1</sub> ∪ S<sub>2</sub> ∪ ... ∪ S<sub>n</sub> = S</em>. Then",
    options: [
      "at least one of the sets <em>S<sub>i</sub></em> is a finite set",
      "not more than one of the sets <em>S<sub>i</sub></em> can be finite",
      "at least one of the sets <em>S<sub>i</sub></em> is an infinite",
      "None of the above"
    ],
    correctAnswer: [2]
  },
  {
    id: 7, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'Set Theory Statements',
    question: "Which of the following statements is/are <strong>False</strong>?",
    options: [
      "<em>{2, 3, 4} ∈ A</em> and <em>{2, 3} ∈ B</em> implies that <em>{4} ⊆ A - B</em>.",
      "<em>A ∩ B ⊇ {2, 3, 4}</em> implies that <em>{2, 3, 4} ⊆ A</em> and <em>{2, 3, 4} ⊆ B</em>.",
      "<em>A - B ⊇ {3, 4}</em> and <em>{1, 2} ⊆ B</em> implies that <em>{1, 2, 3, 4} ⊆ A ∪ B</em>.",
      "<em>{2, 3} ⊆ A ∪ B</em> implies that if <em>{2, 3} ∩ A = ∅</em> then <em>{2, 3} ⊆ B</em>."
    ],
    correctAnswer: [0]
  },
  {
    id: 8, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'Symmetric Difference',
    question: "The symmetric difference of sets <em>A = {1, 2, 3, 4, 5, 6, 7, 8}</em> and <em>B = {1, 3, 5, 6, 7, 8, 9}</em> is:",
    options: [
      "{1, 3, 5, 6, 7, 8}",
      "{2, 4, 9}",
      "{2, 4}",
      "{1, 2, 3, 4, 5, 6, 7, 8, 9}"
    ],
    correctAnswer: [1]
  },
  {
    id: 9, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'Set Theory Statements',
    question: "Which of the following statements is/are <strong>TRUE</strong>?",
    options: [
      "<em>2 ∈ A ∪ B</em> implies that if <em>2 ∉ A</em> then <em>2 ∈ B</em>.",
      "<em>{2, 3} ⊆ A</em> implies that <em>2 ∈ A</em> and <em>3 ∈ A</em>.",
      "<em>A ∩ B ⊇ {2, 3}</em> implies that <em>{2, 3} ⊆ A</em> and <em>{2, 3} ⊆ B</em>.",
      "<em>A - B ⊇ {3}</em> and <em>{2} ⊆ B</em> implies that <em>{2, 3} ⊆ A ∪ B</em>."
    ],
    correctAnswer: [0, 1, 2, 3]
  },
  {
    id: 10, type: 'MCQ', marks: { positive: 1, negative: 0.33 },
    category: 'Power Sets',
    question: "The power set of the set <em>{∅}</em> is",
    options: [
      "{∅}",
      "{∅, {∅}}",
      "{0}",
      "{0, ∅, {∅}}"
    ],
    correctAnswer: [1]
  }
];

export const QUIZ_4_QUESTIONS = [
  {
    id: 1, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'Logic & Quantifiers',
    question: "For the following statements, the universe comprises all nonzero integers. Determine the truth value of each statement. Which of the following statements is/are false?",
    options: [
      "∀x∃y[xy = 1]",
      "∃x∃y[(3x - y = 7) ∧ (2x + 4y = 3)]",
      "∀y∃x[xy = 1]",
      "∃x∃y[(2x + y = 5) ∧ (x - 3y = -8)]"
    ],
    correctAnswer: [0, 1, 2]
  },
  {
    id: 2, type: 'MCQ', marks: { positive: 2, negative: 0.67 },
    category: 'First Order Logic',
    question: "What is the truth of the wff (∃x) (A(x) ∧ (∀y)[B(x, y) → C(y)]), where A(x) is \" x > 0 \", B(x, y) is \" x > y \", C(y) is \" y ≤ 0 \", and x is the domain of positive integers and y is the domain of all integers?",
    options: ["True", "False", "Not a proposition, because there is a free variable in the given wff.", "Not a proposition, because every variable is a bounded variable in the given wff."],
    correctAnswer: [0]
  },
  {
    id: 3, type: 'MSQ', marks: { positive: 1, negative: 0 },
    category: 'Logic Translation',
    question: "Predicates:<br/>• C(x) : x is a CSE 260 student<br/>• L(x) : x loves music<br/>The universe of discourse for the variable x is all students.<br/>Which Translation of the following statements into logical expressions using predicates, quantifiers, and logical connectives is correct?",
    options: [
      "Every student loves music ∀xL(x)",
      "No student loves music ∀x¬L(x)",
      "Some students love music ∃xL(x)",
      "Every CSE 260 student loves music. ∀x(C(x) → L(x))"
    ],
    correctAnswer: [0, 1, 2, 3]
  },
  {
    id: 4, type: 'MSQ', marks: { positive: 2, negative: 0 },
    category: 'Quantifier Identities',
    question: "Which of the following is/are true?",
    options: [
      "[∀x ∈ D, (P(x) ⇔ Q(x))] → [(∀x ∈ D, P(x)) ⇔ (∀x ∈ D, Q(x))]",
      "[∃x ∈ D, (P(x) ⇔ Q(x))] → [(∃x ∈ D, P(x)) ⇔ (∃x ∈ D, Q(x))]",
      "[∀x ∈ D, (P(x) ⇔ Q(x))] ← [(∀x ∈ D, P(x)) ⇔ (∀x ∈ D, Q(x))]",
      "[∃x ∈ D, (P(x) ⇔ Q(x))] ← [(∃x ∈ D, P(x)) ⇔ (∃x ∈ D, Q(x))]"
    ],
    correctAnswer: [0]
  },
  {
    id: 5, type: 'MSQ', marks: { positive: 1, negative: 0 },
    category: 'Logic Expressions',
    question: "Let p(x, y), q(x, y) denote the following open statements.<br/>p(x, y) : x² ≥ y, q(x, y) : x + 2 < y<br/>If the universe for each of x, y consists of all real numbers, Which of the following statements is/are false?",
    options: [
      "p(-3, 8) ∧ q(1, 3)",
      "p(1/2, 1/3) ∨ ¬q(-2, -3)",
      "p(2, 2) → q(1, 1)",
      "p(1, 2) ⇔ ¬q(1, 2)"
    ],
    correctAnswer: [0, 2, 3]
  }
];

export const QUIZZES = {
  "1": QUIZ_1_QUESTIONS,
  "2": QUIZ_2_QUESTIONS,
  "3": QUIZ_3_QUESTIONS,
  "4": QUIZ_4_QUESTIONS,
  "go-1": GO_1_QUESTIONS,
  "2026-2": GO_2026_2_QUESTIONS,
  "2026-3": GO_2026_3_QUESTIONS
};
