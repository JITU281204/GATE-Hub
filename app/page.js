'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './dashboard.css';

const MAIN_TABS = [
  { id: 'Go 25 weekly quiz', badge: 'GO25' },
  { id: 'Go 26 Test', badge: 'GO26' },
  { id: 'Zeal 26 Test', badge: 'ZL26' },
  { id: 'ME 26 Test', badge: 'ME26' }
];

// Dummy data based on the user's screenshot
const GO_25_TESTS = [
  { id: '1', name: 'Weekly Quiz 1', topic: 'Propositional Logic', marks: 23, time: '45 min' },
  { id: '2', name: 'Weekly Quiz 2', topic: 'Propositional Logic', marks: 25, time: '45 min' },
  { id: '3', name: 'Weekly Quiz 3', topic: 'Propositional Logic', marks: 15, time: '35 min' },
  { id: '2026-2', name: 'Weekly Quiz (2026)', topic: 'First Order Logic', marks: 25, time: '45 min' },
  { id: '2026-3', name: 'Weekly Quiz (2026)', topic: 'Set Theory', marks: 25, time: '45 min' },
  { id: '4', name: 'Weekly Quiz 4', topic: '', marks: 15, time: '30 min' },
  { id: '5', name: 'Weekly Quiz 5', topic: 'Set Theory', marks: 15, time: '30 min' },
  { id: '6', name: 'Weekly Quiz 6', topic: 'Functions', marks: 25, time: '45 min' },
  { id: '7', name: 'Weekly Quiz 7', topic: 'Relations', marks: 15, time: '30 min' },
  { id: '13', name: 'Weekly Quiz 13', topic: 'Probability Distributions', marks: 15, time: '30 min' },
  { id: '15', name: 'Weekly Quiz 15', topic: 'Lattice & Poset', marks: 15, time: '30 min' },
  { id: '16', name: 'Weekly Quiz 16', topic: 'Boolean Algebra', marks: 15, time: '30 min' },
  { id: '17', name: 'Weekly Quiz 17', topic: 'Digital Logic', marks: 15, time: '30 min' },
  { id: '18', name: 'Weekly Quiz 18', topic: 'Boolean Algebra, Minimization, Number System', marks: 15, time: '30 min' },
  { id: '19', name: 'Weekly Quiz 19', topic: 'Multiplexer', marks: 15, time: '30 min' },
  { id: '20', name: 'Weekly Quiz 20', topic: 'Combinational Circuits, Number System', marks: 15, time: '30 min' },
  { id: '21', name: 'Weekly Quiz 21', topic: 'Calculus', marks: 15, time: '30 min' },
  { id: '22', name: 'Weekly Quiz 22', topic: 'C-Programming', marks: 15, time: '30 min' },
  { id: '23', name: 'Weekly Quiz 23', topic: 'Combinational Circuits', marks: 15, time: '30 min' },
  { id: '24', name: 'Weekly Quiz 24', topic: 'C-Programming', marks: 15, time: '30 min' },
  { id: '25', name: 'Weekly Quiz 25', topic: 'Relational Model (DBMS)', marks: 15, time: '30 min' },
  { id: '26', name: 'Weekly Quiz 26', topic: 'Functional Dependency (DBMS)', marks: 15, time: '30 min' },
  { id: '27', name: 'Weekly Quiz 27', topic: 'Normalization, Relational Model', marks: 15, time: '30 min' },
  { id: '28', name: 'Weekly Quiz 28', topic: 'Normal Forms (DBMS)', marks: 15, time: '30 min' },
  { id: '29', name: 'Weekly Quiz 29', topic: 'C-Programming', marks: 15, time: '30 min' },
  { id: '30', name: 'Weekly Quiz 30', topic: 'Normalization (DBMS)', marks: 15, time: '30 min' },
  { id: '31', name: 'Weekly Quiz 31', topic: 'C-Programming', marks: 15, time: '30 min' },
  { id: '32', name: 'Weekly Quiz 32', topic: 'SQL (DBMS)', marks: 15, time: '30 min' },
  { id: '33', name: 'Weekly Quiz 33', topic: 'SQL (DBMS)', marks: 15, time: '30 min' },
  { id: '34', name: 'Weekly Quiz 34', topic: 'SQL (DBMS)', marks: 15, time: '30 min' },
  { id: '35', name: 'Weekly Quiz 35', topic: 'Normalization (DBMS)', marks: 15, time: '30 min' },
  { id: '36', name: 'Weekly Quiz 36', topic: 'Relational Algebra (DBMS)', marks: 15, time: '30 min' },
  { id: '37', name: 'Weekly Quiz 37', topic: 'Relational Algebra (DBMS)', marks: 15, time: '30 min' },
  { id: '38', name: 'Weekly Quiz 38', topic: 'Finite Automata', marks: 25, time: '45 min' },
  { id: '39', name: 'Weekly Quiz 39', topic: 'Finite Automata and Regular Expression', marks: 25, time: '45 min' },
  { id: '40', name: 'Weekly Quiz 40', topic: 'Finite Automata and Regular Expression', marks: 25, time: '45 min' },
  { id: '41', name: 'Weekly Quiz 41', topic: 'Subnetting and Supernetting', marks: 15, time: '30 min' },
  { id: '42', name: 'Weekly Quiz 42', topic: 'Context Free Grammar', marks: 15, time: '30 min' },
  { id: '43', name: 'Weekly Quiz 43', topic: 'Process Synchronization', marks: 15, time: '30 min' },
  { id: '44', name: 'Weekly Quiz 44', topic: 'FA, CFL, DCFL', marks: 15, time: '30 min' },
  { id: '2026-4', name: 'Weekly Quiz (2026)', topic: 'Fundamental Course', marks: 15, time: '30 min' },
  { id: '2026-5', name: 'Weekly Quiz (2026)', topic: 'Proof Techniques', marks: 15, time: '30 min' },
  { id: '2026-6', name: 'Weekly Quiz (2026)', topic: 'Linear Algebra', marks: 15, time: '30 min' },
  { id: '2026-7', name: 'Weekly Quiz (2026)', topic: 'Linear Algebra', marks: 15, time: '30 min' },
  { id: '2026-8', name: 'Weekly Quiz (2026)', topic: 'Linear Algebra', marks: 15, time: '30 min' },
  { id: '2026-9', name: 'Weekly Quiz (2026)', topic: 'Linear Algebra', marks: 15, time: '30 min' },
  { id: 'm-1', name: 'Monthly Quiz (2026)', topic: 'Aptitude', marks: 50, time: '90 min' },
  { id: 'm-2', name: 'Monthly Quiz (2026)', topic: 'Aptitude', marks: 50, time: '90 min' },
  { id: 'm-3', name: 'Monthly Quiz (2026)', topic: 'Aptitude', marks: 50, time: '90 min' },
  { id: 'm-4', name: 'Monthly Quiz (2026)', topic: 'Aptitude', marks: 50, time: '90 min' },
];

const GO_26_TESTS = [
  // Discrete Mathematics
  { id: 'dm-tw-1', name: 'Discrete Mathematics Topic Wise Test 1', topic: 'Propositional Logic, First Order Logic', marks: 25, time: '45 min' },
  { id: 'dm-tw-2', name: 'Discrete Mathematics Topic Wise Test 2', topic: 'Set Theory, Functions, Relations, Lattices', marks: 25, time: '45 min' },
  { id: 'dm-tw-3', name: 'Discrete Mathematics Topic Wise Test 3', topic: 'Group Theory', marks: 25, time: '45 min' },
  { id: 'dm-tw-4', name: 'Discrete Mathematics Topic Wise Test 4', topic: 'Combinatorics', marks: 25, time: '45 min' },
  { id: 'dm-tw-5', name: 'Discrete Mathematics Topic Wise Test 5', topic: 'Graph Theory', marks: 25, time: '45 min' },
  { id: 'dm-sw-1', name: 'Discrete Mathematics Subject Wise Test 1', topic: 'Complete Discrete Math Syllabus', marks: 40, time: '90 min' },
  { id: 'dm-sw-2', name: 'Discrete Mathematics Subject Wise Test 2', topic: 'Complete Discrete Math Syllabus', marks: 40, time: '90 min' },
  { id: 'dm-sw-3', name: 'Discrete Mathematics Subject Wise Test 3', topic: 'Complete Discrete Math Syllabus', marks: 40, time: '90 min' },

  // Engineering Mathematics
  { id: 'em-tw-1', name: 'Engineering Mathematics Topic Wise Test 1', topic: 'Linear Algebra', marks: 25, time: '45 min' },
  { id: 'em-ex-1', name: 'Engineering Mathematics Extra Topic Test 1', topic: 'Linear Algebra', marks: 25, time: '45 min' },
  { id: 'em-tw-2', name: 'Engineering Mathematics Topic Wise Test 2', topic: 'Counting', marks: 25, time: '45 min' },
  { id: 'em-tw-3', name: 'Engineering Mathematics Topic Wise Test 3', topic: 'Bayes Theorem, Conditional Probability', marks: 25, time: '45 min' },
  { id: 'em-tw-4', name: 'Engineering Mathematics Topic Wise Test 4', topic: 'Complete Probability', marks: 25, time: '45 min' },
  { id: 'em-tw-5', name: 'Engineering Mathematics Topic Wise Test 5', topic: 'Complete Calculus', marks: 25, time: '45 min' },
  { id: 'em-sw-1', name: 'Engineering Mathematics Subject Wise Test 1', topic: 'Complete Engineering Math Syllabus', marks: 40, time: '90 min' },
  { id: 'em-sw-2', name: 'Engineering Mathematics Subject Wise Test 2', topic: 'Complete Engineering Math Syllabus', marks: 40, time: '90 min' },
  { id: 'em-sw-3', name: 'Engineering Mathematics Subject Wise Test 3', topic: 'Complete Engineering Math Syllabus', marks: 40, time: '90 min' },

  // Full Length 1
  { id: 'fl-1', name: 'DM & EM 65Q Full Length Test 1', topic: 'Discrete Math & Engineering Math', marks: 100, time: '180 min' },

  // Digital Logic
  { id: 'dl-tw-1', name: 'Digital Logic Topic Wise Test 1', topic: 'Boolean Algebra, Minimization, Number System', marks: 25, time: '45 min' },
  { id: 'dl-tw-2', name: 'Digital Logic Topic Wise Test 2', topic: 'Combinational Circuits', marks: 25, time: '45 min' },
  { id: 'dl-tw-3', name: 'Digital Logic Topic Wise Test 3', topic: 'Sequential Circuits', marks: 25, time: '45 min' },
  { id: 'dl-sw-1', name: 'Digital Logic Subject Wise Test 1', topic: 'Complete Digital Logic Syllabus', marks: 40, time: '90 min' },
  { id: 'dl-sw-2', name: 'Digital Logic Subject Wise Test 2', topic: 'Complete Digital Logic Syllabus', marks: 40, time: '90 min' },
  { id: 'dl-sw-3', name: 'Digital Logic Subject Wise Test 3', topic: 'Complete Digital Logic Syllabus', marks: 40, time: '90 min' },

  // Extra & DBMS
  { id: 'ex-comb-1', name: 'Extra Combinatorics Topic Wise Test 1', topic: 'Counting', marks: 25, time: '45 min' },
  { id: 'db-tw-1', name: 'DBMS Topic Wise Test 1', topic: 'Normalization', marks: 25, time: '45 min' },
  { id: 'db-tw-2', name: 'DBMS Topic Wise Test 2', topic: 'ER Model, Integrity Constraints', marks: 25, time: '45 min' },
  { id: 'db-tw-3', name: 'DBMS Topic Wise Test 3', topic: 'Queries, SQL, TRC, Relational Algebra', marks: 25, time: '45 min' },
  { id: 'db-tw-4', name: 'DBMS Topic Wise Test 4', topic: 'Indexing, B Tree, B+ Tree', marks: 25, time: '45 min' },
  { id: 'db-tw-5', name: 'DBMS Topic Wise Test 5', topic: 'Transaction Management', marks: 25, time: '45 min' },
  { id: 'db-sw-1', name: 'DBMS Subject Wise Test 1', topic: 'Complete DBMS Syllabus', marks: 40, time: '90 min' },
  { id: 'db-sw-2', name: 'DBMS Subject Wise Test 2', topic: 'Complete DBMS Syllabus', marks: 40, time: '90 min' },
  { id: 'db-sw-3', name: 'DBMS Subject Wise Test 3', topic: 'Complete DBMS Syllabus', marks: 40, time: '90 min' },

  // C Programming
  { id: 'c-tw-1', name: 'C Programming Topic Wise Test 1', topic: 'Number Rep, Control Statements (If/Loop)', marks: 25, time: '45 min' },
  { id: 'c-tw-2', name: 'C Programming Topic Wise Test 2', topic: 'Compilation, Functions, Recursion', marks: 25, time: '45 min' },
  { id: 'c-tw-3', name: 'C Programming Topic Wise Test 3', topic: 'Pointers, Arrays, Strings, Structures', marks: 25, time: '45 min' },
  { id: 'c-sw-1', name: 'C Programming Subject Wise Test 1', topic: 'Complete C Programming Syllabus', marks: 40, time: '90 min' },
  { id: 'c-sw-2', name: 'C Programming Subject Wise Test 2', topic: 'Complete C Programming Syllabus', marks: 40, time: '90 min' },
  { id: 'c-sw-3', name: 'C Programming Subject Wise Test 3', topic: 'Complete C Programming Syllabus', marks: 40, time: '90 min' },

  // TOC
  { id: 'toc-tw-1', name: 'TOC Topic Wise Test 1', topic: 'Finite Automata', marks: 25, time: '45 min' },
  { id: 'toc-tw-2', name: 'TOC Topic Wise Test 2', topic: 'Regular Expression', marks: 25, time: '45 min' },
  { id: 'toc-tw-3', name: 'TOC Topic Wise Test 3', topic: 'CFG, PDA', marks: 25, time: '45 min' },
  { id: 'toc-tw-4', name: 'TOC Topic Wise Test 4', topic: 'Closure Properties, Language Detection', marks: 25, time: '45 min' },
  { id: 'toc-tw-5', name: 'TOC Topic Wise Test 5', topic: 'Decidability, Undecidability', marks: 25, time: '45 min' },
  { id: 'toc-sw-1', name: 'TOC Subject Wise Test 1', topic: 'Complete TOC Syllabus', marks: 40, time: '90 min' },
  { id: 'toc-sw-2', name: 'TOC Subject Wise Test 2', topic: 'Complete TOC Syllabus', marks: 40, time: '90 min' },
  { id: 'toc-sw-3', name: 'TOC Subject Wise Test 3', topic: 'Complete TOC Syllabus', marks: 40, time: '90 min' },

  // Computer Networks
  { id: 'cn-tw-1', name: 'Computer Networks Topic Wise Test 1', topic: 'IP Addressing, Subnetting, Data Link Layer', marks: 25, time: '45 min' },
  { id: 'cn-tw-2', name: 'Computer Networks Topic Wise Test 2', topic: 'Network Layer', marks: 25, time: '45 min' },
  { id: 'cn-tw-3', name: 'Computer Networks Topic Wise Test 3', topic: 'Routing Algorithms, Transport Layer', marks: 25, time: '45 min' },
  { id: 'cn-tw-4', name: 'Computer Networks Topic Wise Test 4', topic: 'Transport Layer, Application Layer', marks: 25, time: '45 min' },
  { id: 'cn-sw-1', name: 'Computer Networks Subject Wise Test 1', topic: 'Complete Computer Networks Syllabus', marks: 40, time: '90 min' },
  { id: 'cn-sw-2', name: 'Computer Networks Subject Wise Test 2', topic: 'Complete Computer Networks Syllabus', marks: 40, time: '90 min' },
  { id: 'cn-sw-3', name: 'Computer Networks Subject Wise Test 3', topic: 'Complete Computer Networks Syllabus', marks: 40, time: '90 min' },

  // Compiler Design
  { id: 'cd-tw-1', name: 'Compiler Design Topic Wise Test 1', topic: 'Lexical, Syntax Analysis, Parsers', marks: 25, time: '45 min' },
  { id: 'cd-tw-2', name: 'Compiler Design Topic Wise Test 2', topic: 'Semantic Analysis, SDT, Parser', marks: 25, time: '45 min' },
  { id: 'cd-tw-3', name: 'Compiler Design Topic Wise Test 3', topic: 'Intermediate Code, Optimization', marks: 25, time: '45 min' },
  { id: 'cd-sw-1', name: 'Compiler Design Subject Wise Test 1', topic: 'Complete Compiler Design Syllabus', marks: 40, time: '90 min' },
  { id: 'cd-sw-2', name: 'Compiler Design Subject Wise Test 2', topic: 'Complete Compiler Design Syllabus', marks: 40, time: '90 min' },

  // Computer Organization
  { id: 'coa-tw-1', name: 'Computer Organization Topic Wise Test 1', topic: 'Addressing Modes, Control Unit', marks: 25, time: '45 min' },
  { id: 'coa-tw-2', name: 'Computer Organization Topic Wise Test 2', topic: 'Pipelining', marks: 25, time: '45 min' },
  { id: 'coa-tw-3', name: 'Computer Organization Topic Wise Test 3', topic: 'Cache Memory', marks: 25, time: '45 min' },
  { id: 'coa-tw-4', name: 'Computer Organization Topic Wise Test 4', topic: 'I/O Interfacing, Magnetic Disk', marks: 25, time: '45 min' },
  { id: 'coa-sw-1', name: 'Computer Organization Subject Wise Test 1', topic: 'Complete COA Syllabus', marks: 40, time: '90 min' },
  { id: 'coa-sw-2', name: 'Computer Organization Subject Wise Test 2', topic: 'Complete COA Syllabus', marks: 40, time: '90 min' },
  { id: 'coa-sw-3', name: 'Computer Organization Subject Wise Test 3', topic: 'Complete COA Syllabus', marks: 40, time: '90 min' },

  // Full Length 2
  { id: 'fl-2', name: 'CN, DBMS, TOC, CD 65Q Full Length Test 2', topic: 'CN, DBMS, TOC, Compiler Design', marks: 100, time: '180 min' },

  // Operating Systems
  { id: 'os-tw-1', name: 'Operating Systems Topic Wise Test 1', topic: 'CPU Scheduling', marks: 25, time: '45 min' },
  { id: 'os-tw-2', name: 'Operating Systems Topic Wise Test 2', topic: 'Synchronization, Deadlock', marks: 25, time: '45 min' },
  { id: 'os-tw-3', name: 'Operating Systems Topic Wise Test 3', topic: 'Memory Management', marks: 25, time: '45 min' },
  { id: 'os-tw-4', name: 'Operating Systems Topic Wise Test 4', topic: 'File System, Fork, System Calls', marks: 25, time: '45 min' },
  { id: 'os-sw-1', name: 'Operating Systems Subject Wise Test 1', topic: 'Complete OS Syllabus', marks: 40, time: '90 min' },
  { id: 'os-sw-2', name: 'Operating Systems Subject Wise Test 2', topic: 'Complete OS Syllabus', marks: 40, time: '90 min' },
  { id: 'os-sw-3', name: 'Operating Systems Subject Wise Test 3', topic: 'Complete OS Syllabus', marks: 40, time: '90 min' },

  // Full Length 3
  { id: 'fl-3', name: 'OS, COA, Digital 65Q Full Length Test 3', topic: 'OS, COA, Digital Logic', marks: 100, time: '180 min' },

  // Data Structures
  { id: 'ds-tw-1', name: 'Data Structures Topic Wise Test 1', topic: 'Linked List', marks: 25, time: '45 min' },
  { id: 'ds-tw-2', name: 'Data Structures Topic Wise Test 2', topic: 'Asymptotic Notations, Loops', marks: 25, time: '45 min' },
  { id: 'ds-tw-3', name: 'Data Structures Topic Wise Test 3', topic: 'Stack and Queue', marks: 25, time: '45 min' },
  { id: 'ds-tw-4', name: 'Data Structures Topic Wise Test 4', topic: 'Trees (Binary, BST, AVL, Heap)', marks: 25, time: '45 min' },
  { id: 'ds-tw-5', name: 'Data Structures Topic Wise Test 5', topic: 'Hashing with Probability', marks: 25, time: '45 min' },
  { id: 'ds-sw-1', name: 'Data Structures Subject Wise Test 1', topic: 'Complete Data Structures Syllabus', marks: 40, time: '90 min' },
  { id: 'ds-sw-2', name: 'Data Structures Subject Wise Test 2', topic: 'Complete Data Structures Syllabus', marks: 40, time: '90 min' },
  { id: 'ds-sw-3', name: 'Data Structures Subject Wise Test 3', topic: 'Complete Data Structures Syllabus', marks: 40, time: '90 min' },

  // Algorithms
  { id: 'algo-tw-1', name: 'Algorithms Topic Wise Test 1', topic: 'Divide and Conquer', marks: 25, time: '45 min' },
  { id: 'algo-tw-2', name: 'Algorithms Topic Wise Test 2', topic: 'Recurrence Relations', marks: 25, time: '45 min' },
  { id: 'algo-tw-3', name: 'Algorithms Topic Wise Test 3', topic: 'Greedy Algorithms', marks: 25, time: '45 min' },
  { id: 'algo-tw-4', name: 'Algorithms Topic Wise Test 4', topic: 'Dynamic Programming', marks: 25, time: '45 min' },
  { id: 'algo-sw-1', name: 'Algorithms Subject Wise Test 1', topic: 'Complete Algorithms Syllabus', marks: 40, time: '90 min' },
  { id: 'algo-sw-2', name: 'Algorithms Subject Wise Test 2', topic: 'Complete Algorithms Syllabus', marks: 40, time: '90 min' },
  { id: 'algo-sw-3', name: 'Algorithms Subject Wise Test 3', topic: 'Complete Algorithms Syllabus', marks: 40, time: '90 min' },

  // Full Length 4
  { id: 'fl-4', name: 'C, DS, Algo 65Q Full Length Test 4', topic: 'C-Prog, Data Structures, Algorithms', marks: 100, time: '180 min' },

  // Mock Tests
  { id: 'mt-1', name: 'Mock Test 1', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-2', name: 'Mock Test 2', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-3', name: 'Mock Test 3', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-4', name: 'Mock Test 4', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-5', name: 'Mock Test 5', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-6', name: 'Mock Test 6', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-7', name: 'Mock Test 7', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-8', name: 'Mock Test 8', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-9', name: 'Mock Test 9', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-10', name: 'Mock Test 10', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-11', name: 'Mock Test 11', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-12', name: 'Mock Test 12', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-13', name: 'Mock Test 13', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-14', name: 'Mock Test 14', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-15', name: 'Mock Test 15 (AIMT - 1)', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-16', name: 'Mock Test 16 (AIMT - 2)', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-17', name: 'Mock Test 17 (AIMT - 3)', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-18', name: 'Mock Test 18 (AIMT - 4)', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-19', name: 'Mock Test 19 (AIMT - 5 Set-1)', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-20', name: 'Mock Test 20 (AIMT - 5 Set-2)', topic: 'Full Syllabus', marks: 100, time: '180 min' },
  { id: 'mt-21', name: 'Mock Test 21 (AIMT - 6)', topic: 'Full Syllabus', marks: 100, time: '180 min' }
];

const ZEAL_26_TESTS = [
  { id: 'z-1', name: 'Discrete Mathematics Test 1', topic: 'Set Theory, Relations, Equivalence Relation', marks: 50, time: '60 min' },
  { id: 'z-2', name: 'Discrete Mathematics Test 2', topic: 'Partial Order Relation, Lattices, Functions', marks: 50, time: '60 min' },
  { id: 'z-3', name: 'Discrete Mathematics Test 3', topic: 'Algebraic System (Group Theory)', marks: 50, time: '60 min' },
  { id: 'z-4', name: 'Discrete Mathematics Test 4', topic: 'Graph Theory', marks: 50, time: '60 min' },
  { id: 'z-5', name: 'Discrete Mathematics Test 5', topic: 'Logic (Propositional & First Order)', marks: 50, time: '60 min' },
  { id: 'z-6', name: 'Discrete Mathematics Full Test', topic: 'Complete Discrete Math Syllabus', marks: 60, time: '120 min' },
  { id: 'z-7', name: 'C-Programming Test 1', topic: 'Basic C (Operators, Arrays, Strings, Functions)', marks: 50, time: '60 min' },
  { id: 'z-8', name: 'C-Programming Full Test', topic: 'Complete C (Pointers, Structures, Unions)', marks: 60, time: '120 min' },
  { id: 'z-9', name: 'DSA Test 1', topic: 'Sorting, Asymptotic Notations, Time Complexity', marks: 50, time: '60 min' },
  { id: 'z-10', name: 'DSA Test 2', topic: 'Recurrence, Complexity, Sorts, Searching', marks: 50, time: '60 min' },
  { id: 'z-11', name: 'DSA Test 3', topic: 'Stack, Queue, Linked List, Hashing, Binary Tree', marks: 50, time: '60 min' },
  { id: 'z-12', name: 'DSA Test 4', topic: 'AVL, Greedy & Dynamic, Graph Algos, MST', marks: 50, time: '60 min' },
  { id: 'z-13', name: 'DSA Full Test', topic: 'Complete DSA Syllabus', marks: 60, time: '120 min' },
  { id: 'z-14', name: 'Computer Network Test 1', topic: 'OSI, TCP/IP, Data Link Layer (Framing, Error)', marks: 50, time: '60 min' },
  { id: 'z-15', name: 'Computer Network Test 2', topic: 'MAC, Packet Switching, Devices, Bridging', marks: 50, time: '60 min' },
  { id: 'z-16', name: 'Computer Network Test 3', topic: 'Routing Algos, IPv4, Subnetting, NAT, ICMP', marks: 50, time: '60 min' },
  { id: 'z-17', name: 'Computer Network Test 4', topic: 'TCP/UDP, Sockets, Congestion, App Layer', marks: 50, time: '60 min' },
  { id: 'z-18', name: 'Computer Network Full Test', topic: 'Complete CN Syllabus', marks: 60, time: '120 min' },
  { id: 'z-19', name: 'Operating System Test 1', topic: 'Basics, Process/Thread Mgmt, CPU Scheduling', marks: 50, time: '60 min' },
  { id: 'z-20', name: 'Operating System Test 2', topic: 'IPC, Concurrency, Synchronization, Deadlock', marks: 50, time: '60 min' },
  { id: 'z-21', name: 'Operating System Test 3', topic: 'Memory Mgmt, Virtual Memory, File Systems', marks: 50, time: '60 min' },
  { id: 'z-22', name: 'Operating System Full Test', topic: 'Complete OS Syllabus', marks: 60, time: '120 min' },
  { id: 'z-23', name: 'Digital Logic Test 1', topic: 'Number System', marks: 50, time: '60 min' },
  { id: 'z-24', name: 'Digital Logic Test 2', topic: 'Boolean Algebra, Minimization, K-Map', marks: 50, time: '60 min' },
  { id: 'z-25', name: 'Digital Logic Test 3', topic: 'Combinational & Sequential Circuits', marks: 50, time: '60 min' },
  { id: 'z-26', name: 'Digital Logic Full Test', topic: 'Complete Digital Logic Syllabus', marks: 60, time: '120 min' },
  { id: 'z-27', name: 'COA Test 1', topic: 'Cache Memory', marks: 50, time: '60 min' },
  { id: 'z-28', name: 'COA Test 2', topic: 'ISA, Addressing Modes, Basic Pipeline', marks: 50, time: '60 min' },
  { id: 'z-29', name: 'COA Test 3', topic: 'Advanced Pipeline, I/O Interface, ALU, Control', marks: 50, time: '60 min' },
  { id: 'z-30', name: 'COA Full Test', topic: 'Complete COA Syllabus', marks: 60, time: '120 min' },
  { id: 'z-31', name: 'DBMS Test 1', topic: 'Relational Model, SQL Basics (Joins, Nested)', marks: 50, time: '60 min' },
  { id: 'z-32', name: 'DBMS Test 2', topic: 'SQL Full, Relational Algebra Basics', marks: 50, time: '60 min' },
  { id: 'z-33', name: 'DBMS Test 3', topic: 'Relational Algebra, Normalization', marks: 50, time: '60 min' },
  { id: 'z-34', name: 'DBMS Test 4', topic: 'Indexing, B-Tree, Transaction Control', marks: 50, time: '60 min' },
  { id: 'z-35', name: 'DBMS Full Test', topic: 'Complete DBMS Syllabus', marks: 60, time: '120 min' },
  { id: 'z-36', name: 'TOC Test 1', topic: 'Finite Automata, Regular Exp, DFA/NFA', marks: 50, time: '60 min' },
  { id: 'z-37', name: 'TOC Test 2', topic: 'CFL, PDA, Turing Machines, Undecidability', marks: 50, time: '60 min' },
  { id: 'z-38', name: 'TOC Full Test', topic: 'Complete TOC Syllabus', marks: 60, time: '120 min' },
  { id: 'z-39', name: 'Compiler Design Test 1', topic: 'Lexical Analysis, Syntax Analysis (Parsing)', marks: 50, time: '60 min' },
  { id: 'z-40', name: 'Compiler Design Full Test', topic: 'Complete CD (SDT, Runtime, Optimization)', marks: 60, time: '120 min' },
  { id: 'z-41', name: 'Mathematics Test 1', topic: 'Matrices', marks: 50, time: '60 min' },
  { id: 'z-42', name: 'Mathematics Test 2', topic: 'Calculus', marks: 50, time: '60 min' },
  { id: 'z-43', name: 'Mathematics Test 3', topic: 'Permutation & Combination', marks: 50, time: '60 min' },
  { id: 'z-44', name: 'Mathematics Test 4', topic: 'Probability', marks: 50, time: '60 min' },
  { id: 'z-45', name: 'Mathematics Full Test', topic: 'Complete Engineering Math Syllabus', marks: 60, time: '120 min' },
  { id: 'z-46', name: 'Aptitude Test 1', topic: 'Quantitative Aptitude', marks: 50, time: '60 min' },
  { id: 'z-47', name: 'Aptitude Test 2', topic: 'Analytical, Spatial, Verbal Aptitude', marks: 50, time: '60 min' },
  { id: 'z-48', name: 'Aptitude Full Test', topic: 'Complete General Aptitude Syllabus', marks: 60, time: '120 min' },
  { id: 'z-49', name: 'Round 1 Full Test', topic: 'Full Syllabus (Discrete Math)', marks: 60, time: '120 min' },
  { id: 'z-50', name: 'Round 1 Full Test', topic: 'Full Syllabus (Operating Systems)', marks: 60, time: '120 min' },
  { id: 'z-51', name: 'Round 1 Full Test', topic: 'Full Syllabus (DSA)', marks: 60, time: '120 min' },
  { id: 'z-52', name: 'Round 1 Full Test', topic: 'Full Syllabus (Computer Networks)', marks: 60, time: '120 min' },
  { id: 'z-53', name: 'Round 1 Full Test', topic: 'Full Syllabus (Digital Logic)', marks: 60, time: '120 min' },
  { id: 'z-54', name: 'Round 1 Full Test', topic: 'Full Syllabus (COA)', marks: 60, time: '120 min' },
  { id: 'z-55', name: 'Round 1 Full Test', topic: 'Full Syllabus (DBMS)', marks: 60, time: '120 min' },
  { id: 'z-56', name: 'Round 1 Full Test', topic: 'Full Syllabus (Engineering Math)', marks: 60, time: '120 min' },
  { id: 'z-57', name: 'Round 2 Mixed Test', topic: 'Mixed: DM + TOC + Compiler Design', marks: 100, time: '180 min' },
  { id: 'z-58', name: 'Round 2 Mixed Test', topic: 'Mixed: Digital Logic + COA', marks: 100, time: '180 min' },
  { id: 'z-59', name: 'Round 2 Mixed Test', topic: 'Mixed: DSA + Computer Networks', marks: 100, time: '180 min' },
  { id: 'z-60', name: 'Mock Test 1', topic: 'Full Syllabus (Mock Test 1)', marks: 100, time: '180 min' },
  { id: 'z-61', name: 'Mock Test 2', topic: 'Full Syllabus (Mock Test 2)', marks: 100, time: '180 min' },
  { id: 'z-62', name: 'Mock Test 3', topic: 'Full Syllabus (Mock Test 3)', marks: 100, time: '180 min' },
  { id: 'z-63', name: 'AIMT-1', topic: 'Full Syllabus (AIMT-1)', marks: 100, time: '180 min' },
  { id: 'z-64', name: 'Mock Test 4', topic: 'Full Syllabus (Mock Test 4)', marks: 100, time: '180 min' },
  { id: 'z-65', name: 'Mock Test 5', topic: 'Full Syllabus (Mock Test 5)', marks: 100, time: '180 min' },
  { id: 'z-66', name: 'Mock Test 6', topic: 'Full Syllabus (Mock Test 6)', marks: 100, time: '180 min' },
  { id: 'z-67', name: 'AIMT-2', topic: 'Full Syllabus (AIMT-2)', marks: 100, time: '180 min' },
  { id: 'z-68', name: 'Mock Test 7', topic: 'Full Syllabus (Mock Test 7)', marks: 100, time: '180 min' },
  { id: 'z-69', name: 'Mock Test 8', topic: 'Full Syllabus (Mock Test 8)', marks: 100, time: '180 min' },
  { id: 'z-70', name: 'Mock Test 9', topic: 'Full Syllabus (Mock Test 9)', marks: 100, time: '180 min' },
  { id: 'z-71', name: 'AIMT-3', topic: 'Full Syllabus (AIMT-3)', marks: 100, time: '180 min' },
  { id: 'z-72', name: 'Mock Test 10', topic: 'Full Syllabus (Mock Test 10)', marks: 100, time: '180 min' },
  { id: 'z-73', name: 'Mock Test 11', topic: 'Full Syllabus (Mock Test 11)', marks: 100, time: '180 min' },
  { id: 'z-74', name: 'Mock Test 12', topic: 'Full Syllabus (Mock Test 12)', marks: 100, time: '180 min' },
  { id: 'z-75', name: 'AIMT-4', topic: 'Full Syllabus (AIMT-4)', marks: 100, time: '180 min' },
];

const ME_26_TESTS = [
  { id: 'me-1', name: 'TOC Topic Test 1', topic: 'Reg Exp, Finite Automata, CFG, Push-Down Automata', marks: 25, time: '45 min' },
  { id: 'me-2', name: 'TOC Topic Test 2', topic: 'Reg/Context-Free Lang, Turing Machines, Undecidability', marks: 25, time: '45 min' },
  { id: 'me-3', name: 'TOC Subject Test', topic: 'Complete TOC Syllabus', marks: 50, time: '90 min' },
  { id: 'me-4', name: 'Algorithms Topic Test 1', topic: 'Sorting, Asymptotic Analysis, Divide & Conquer, Searching', marks: 25, time: '45 min' },
  { id: 'me-5', name: 'Algorithms Topic Test 2', topic: 'Heaps, Graphs, Greedy, MST, Shortest Paths, DP', marks: 25, time: '45 min' },
  { id: 'me-6', name: 'Algorithms Subject Test', topic: 'Complete Algorithms Syllabus', marks: 50, time: '90 min' },
  { id: 'me-7', name: 'COA Topic Test 1', topic: 'Pipelining, Instructions, Addressing Modes, Control Unit', marks: 25, time: '45 min' },
  { id: 'me-8', name: 'COA Topic Test 2', topic: 'ALU, Data-Path, Memory Hierarchy, I/O (Interrupt/DMA)', marks: 25, time: '45 min' },
  { id: 'me-9', name: 'COA Subject Test', topic: 'Complete COA Syllabus', marks: 50, time: '90 min' },
  { id: 'me-10', name: 'DBMS Topic Test 1', topic: 'ER-Model, Relational Model, Normalization, Indexing', marks: 25, time: '45 min' },
  { id: 'me-11', name: 'DBMS Topic Test 2', topic: 'Tuple Calculus, SQL, Integrity, Transactions', marks: 25, time: '45 min' },
  { id: 'me-12', name: 'DBMS Subject Test', topic: 'Complete Database Syllabus', marks: 50, time: '90 min' },
  { id: 'me-13', name: 'Maths Topic Test 1', topic: 'Matrices, Linear Algebra, Statistics, Distributions', marks: 25, time: '45 min' },
  { id: 'me-14', name: 'Maths Topic Test 2', topic: 'Calculus, Integration, LU Decomp, Bayes Theorem', marks: 25, time: '45 min' },
  { id: 'me-15', name: 'Maths Subject Test', topic: 'Complete Engineering Math Syllabus', marks: 50, time: '90 min' },
  { id: 'me-16', name: 'Aptitude Topic Test 1', topic: 'Numerical Ability, Data Interpretation, Estimation', marks: 25, time: '45 min' },
  { id: 'me-17', name: 'Aptitude Topic Test 2', topic: 'Verbal Ability, Critical Reasoning, Grammar', marks: 25, time: '45 min' },
  { id: 'me-18', name: 'Aptitude Subject Test', topic: 'Complete General Aptitude Syllabus', marks: 50, time: '90 min' },
  { id: 'me-19', name: 'OS Topic Test 1', topic: 'Memory Mgmt, Virtual Memory, Deadlock, File Systems', marks: 25, time: '45 min' },
  { id: 'me-20', name: 'OS Topic Test 2', topic: 'Processes, Threads, IPC, Synchronization, Scheduling', marks: 25, time: '45 min' },
  { id: 'me-21', name: 'OS Subject Test', topic: 'Complete Operating System Syllabus', marks: 50, time: '90 min' },
  { id: 'me-22', name: 'P&DS Topic Test 1', topic: 'C Programming, Arrays, Stacks, Queues, Recursion', marks: 25, time: '45 min' },
  { id: 'me-23', name: 'P&DS Topic Test 2', topic: 'Hashing, Linked Lists, Trees, Binary Search Trees', marks: 25, time: '45 min' },
  { id: 'me-24', name: 'P&DS Subject Test', topic: 'Complete P&DS Syllabus', marks: 50, time: '90 min' },
  { id: 'me-25', name: 'CN Topic Test 1', topic: 'Layering, LAN, MAC, Flow/Error Control, App Layer', marks: 25, time: '45 min' },
  { id: 'me-26', name: 'CN Topic Test 2', topic: 'IPv4, Routing, TCP/UDP, Congestion, ARP/ICMP', marks: 25, time: '45 min' },
  { id: 'me-27', name: 'CN Subject Test', topic: 'Complete Computer Networks Syllabus', marks: 50, time: '90 min' },
  { id: 'me-28', name: 'Digital Logic Topic Test 1', topic: 'Boolean Algebra, Combinational Circuits, Minimization', marks: 25, time: '45 min' },
  { id: 'me-29', name: 'Digital Logic Topic Test 2', topic: 'Sequential Circuits, Number Rep, Computer Arithmetic', marks: 25, time: '45 min' },
  { id: 'me-30', name: 'Digital Subject Test', topic: 'Complete Digital Logic Syllabus', marks: 50, time: '90 min' },
  { id: 'me-31', name: 'DM Topic Test 1', topic: 'Logic, Sets, Relations, Functions, Counting', marks: 25, time: '45 min' },
  { id: 'me-32', name: 'DM Topic Test 2', topic: 'Posets, Lattices, Groups, Graphs, Recurrence', marks: 25, time: '45 min' },
  { id: 'me-33', name: 'DM Subject Test', topic: 'Complete Discrete Math Syllabus', marks: 50, time: '90 min' },
  { id: 'me-34', name: 'CD Topic Test 1', topic: 'Lexical Analysis, Syntax-Directed Translation, Intermediate Code', marks: 25, time: '45 min' },
  { id: 'me-35', name: 'CD Topic Test 2', topic: 'Parsing, Runtime Env, Optimization, Data Flow', marks: 25, time: '45 min' },
  { id: 'me-36', name: 'CD Subject Test', topic: 'Complete Compiler Design Syllabus', marks: 50, time: '90 min' },
  { id: 'me-37', name: 'Full Syllabus Test 1', topic: 'Full Syllabus Test-1 (Basic Level)', marks: 100, time: '180 min' },
  { id: 'me-38', name: 'Full Syllabus Test 2', topic: 'Full Syllabus Test-2 (Basic Level)', marks: 100, time: '180 min' },
  { id: 'me-39', name: 'Full Syllabus Test 3', topic: 'Full Syllabus Test-3 (Basic Level)', marks: 100, time: '180 min' },
  { id: 'me-40', name: 'Full Syllabus Test 4', topic: 'Full Syllabus Test-4 (Basic Level)', marks: 100, time: '180 min' },
  { id: 'me-41', name: 'Full Syllabus Test 5', topic: 'Full Syllabus Test-5 (Advanced Level)', marks: 100, time: '180 min' },
  { id: 'me-42', name: 'Full Syllabus Test 6', topic: 'Full Syllabus Test-6 (Advanced Level)', marks: 100, time: '180 min' },
  { id: 'me-43', name: 'Full Syllabus Test 7', topic: 'Full Syllabus Test-7 (Advanced Level)', marks: 100, time: '180 min' },
  { id: 'me-44', name: 'Full Syllabus Test 8', topic: 'Full Syllabus Test-8 (Advanced Level)', marks: 100, time: '180 min' },
  { id: 'me-45', name: 'GATE Mock Test 1', topic: 'GATE Mock Test 1', marks: 100, time: '180 min' },
  { id: 'me-46', name: 'GATE Mock Test 2', topic: 'GATE Mock Test 2', marks: 100, time: '180 min' },
  { id: 'me-47', name: 'GATE Mock Test 3', topic: 'GATE Mock Test 3', marks: 100, time: '180 min' },
  { id: 'me-48', name: 'GATE Mock Test 4', topic: 'GATE Mock Test 4', marks: 100, time: '180 min' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Go 25 weekly quiz');
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState('User');
  const [currentUser, setCurrentUser] = useState({});
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [testHistory, setTestHistory] = useState([]);
  const [selectedHistoryItem, setSelectedHistoryItem] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (isLoggedIn !== 'true' || !user.name) {
      router.push('/login');
    } else {
      setUserName(user.name);
      setCurrentUser(user);
      setIsAuth(true);
      
      // Load individual history from the persistent user record
      const allUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const dbUser = allUsers.find(u => u.email === user.email);
      if (dbUser && dbUser.history) {
        setTestHistory(dbUser.history);
      } else {
        setTestHistory([]);
      }
    }
  }, [router]);

  if (!isAuth) return null;



  const getBadgeStyle = (marks, aTab) => {
    // 100 is always Red signal
    if (marks >= 100) return { bg: '#fee2e2', text: '#b91c1c' }; 

    if (aTab.includes('Go 25 weekly quiz')) {
       if (marks === 25) return { bg: '#dcfce7', text: '#15803d' }; // Green
       return { bg: '#fef3c7', text: '#b45309' }; // 15 is Yellow
    }
    
    if (aTab.includes('Go 26 Test')) {
       if (marks === 40) return { bg: '#dcfce7', text: '#15803d' }; // Green
       return { bg: '#fef3c7', text: '#b45309' }; // 25 is Yellow
    }

    if (aTab.includes('Zeal 26 Test')) {
       if (marks === 60) return { bg: '#dcfce7', text: '#15803d' }; // Green
       return { bg: '#fef3c7', text: '#b45309' }; // 50 is Yellow
    }

    if (aTab.includes('ME 26 Test')) {
       if (marks === 50) return { bg: '#dcfce7', text: '#15803d' }; // Green
       return { bg: '#fef3c7', text: '#b45309' }; // 25 is Yellow
    }

    return { bg: '#f1f5f9', text: '#64748b' }; // Default fallback
  };

  const getTestsForTab = (tab) => {
    switch(tab) {
      case 'Go 26 Test': return GO_26_TESTS;
      case 'Go 25 weekly quiz': return GO_25_TESTS;
      case 'Zeal 26 Test': return ZEAL_26_TESTS;
      case 'ME 26 Test': return ME_26_TESTS;
      default: return [];
    }
  };

  return (
    <>
      <header className="header" style={{ position: 'sticky', top: 0 }}>
        <div className="header-title" style={{ display: 'flex', alignItems: 'center', fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.5px' }}>
          <span style={{ color: '#000000' }}>GATE</span>
          <span style={{ 
            backgroundColor: '#FF9900', 
            color: '#000000', 
            padding: '2px 8px', 
            borderRadius: '6px', 
            marginLeft: '4px',
            fontSize: '1.4rem'
          }}>Hub</span>
        </div>
        <div className="header-right" style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
          <button 
            className="logout-btn" 
            onClick={() => {
              localStorage.removeItem('isLoggedIn');
              localStorage.removeItem('currentUser');
              router.push('/login');
            }}
          >
            Logout
          </button>
          <div className="profile-section" onClick={() => setShowProfileMenu(!showProfileMenu)}>
            <div style={{textAlign: 'right'}}>
              <div style={{fontWeight: 700, color: 'var(--text-dark)', fontSize: '0.95rem'}}>{userName}</div>
              <div style={{fontSize: '0.75rem', color: '#687b9e'}}>Standard Plan</div>
            </div>
            <div className="avatar">{userName.charAt(0).toUpperCase()}</div>
            
            {showProfileMenu && (
              <div className="profile-dropdown">
                <div className="dropdown-item" onClick={() => setShowDetailsModal(true)}>
                  <span>👤</span> Your Details
                </div>
                <div className="dropdown-item" onClick={() => setShowActivityModal(true)}>
                  <span>📊</span> Track Your Activity
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item" style={{color: '#ff3d71'}} onClick={() => {
                  localStorage.removeItem('isLoggedIn');
                  localStorage.removeItem('currentUser');
                  router.push('/login');
                }}>
                  <span>🚪</span> Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* DETAILS MODAL */}
      {showDetailsModal && (
        <div className="modal-overlay" onClick={() => setShowDetailsModal(false)}>
          <div className="details-modal animate-in" onClick={e => e.stopPropagation()}>
            <h2 style={{marginBottom: '25px', color: 'var(--primary)', fontFamily: 'Outfit'}}>User Profile Details</h2>
            <div className="details-row">
              <span className="details-label">FULL NAME</span>
              <span className="details-value">{currentUser.name}</span>
            </div>
            <div className="details-row">
              <span className="details-label">EMAIL ADDRESS</span>
              <span className="details-value">{currentUser.email}</span>
            </div>
            <div className="details-row">
              <span className="details-label">MOBILE NUMBER</span>
              <span className="details-value">+91 {currentUser.mobile}</span>
            </div>
            <button 
              className="action-btn" 
              style={{width: '100%', marginTop: '10px', padding: '12px'}}
              onClick={() => setShowDetailsModal(false)}
            >
              Close Profile
            </button>
          </div>
        </div>
      )}

      {/* ACTIVITY MODAL */}
      {showActivityModal && (
        <div className="modal-overlay" onClick={() => setShowActivityModal(false)}>
          <div className="details-modal animate-in" style={{maxWidth: '800px', width: '90%', maxHeight: '85vh', overflowY: 'auto'}} onClick={e => e.stopPropagation()}>
            
            {!selectedHistoryItem ? (
              <>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                    <h2 style={{color: 'var(--primary)', fontFamily: 'Outfit', margin: 0}}>Your Activity Tracker</h2>
                  </div>
                  <button onClick={() => setShowActivityModal(false)} style={{background: '#f1f5f9', border: 'none', cursor: 'pointer', fontSize: '1.2rem', width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>×</button>
                </div>
                
                {testHistory.length === 0 ? (
                  <div style={{padding: '50px', textAlign: 'center', background: '#f8fafc', borderRadius: '24px', color: '#64748b', border: '2px dashed #e2e8f0'}}>
                    <div style={{fontSize: '3rem', marginBottom: '15px'}}>📊</div>
                    <h3 style={{color: '#1e293b', marginBottom: '10px'}}>Ready to start?</h3>
                    <p>Your test history and activity analytics will appear here once you complete your first test!</p>
                  </div>
                ) : (
                  <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                    {testHistory.slice().reverse().map((item, idx) => (
                      <div key={idx} className="test-row" style={{gridTemplateColumns: '1fr 80px 80px 100px', padding: '20px', background: '#fff', border: '1px solid #e2e8f0', cursor: 'pointer'}} onClick={() => setSelectedHistoryItem(item)}>
                        <div>
                          <div style={{fontWeight: 700, fontSize: '1.05rem', color: '#1e293b'}}>{item.testName}</div>
                          <div style={{fontSize: '0.8rem', color: '#64748b', marginTop: '4px'}}>{item.date}</div>
                        </div>
                        <div style={{textAlign: 'center'}}>
                          <div style={{fontSize: '0.65rem', color: '#94a3b8', fontWeight: 800}}>SCORE</div>
                          <div style={{fontWeight: 800, color: 'var(--primary)', fontSize: '1.1rem'}}>{item.score}</div>
                        </div>
                        <div style={{textAlign: 'center'}}>
                          <div style={{fontSize: '0.65rem', color: '#94a3b8', fontWeight: 800}}>AVG TIME</div>
                          <div style={{fontWeight: 800, fontSize: '1.1rem'}}>{item.avgTime}s</div>
                        </div>
                        <div style={{textAlign: 'right'}}>
                          <button className="action-btn" style={{fontSize: '0.75rem', padding: '8px 12px'}}>Details →</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
                  <button onClick={() => setSelectedHistoryItem(null)} style={{background: '#f1f5f9', border: 'none', cursor: 'pointer', padding: '8px 15px', borderRadius: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px'}}>← Back</button>
                  <h3 style={{margin: 0, color: 'var(--primary)'}}>Performance Analysis</h3>
                  <div style={{width: '60px'}}></div>
                </div>

                <div style={{background: '#f8fafc', padding: '20px', borderRadius: '16px', marginBottom: '25px', border: '1px solid #e2e8f0'}}>
                  <div style={{fontWeight: 800, fontSize: '1.2rem', color: '#1e293b'}}>{selectedHistoryItem.testName}</div>
                  <div style={{color: '#64748b', fontSize: '0.9rem', marginTop: '5px'}}>Attempted on: {selectedHistoryItem.date}</div>
                </div>
                
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '30px'}}>
                  <div style={{padding: '15px', background: '#f0f9ff', borderRadius: '12px', textAlign: 'center'}}>
                     <div style={{fontSize: '0.65rem', color: '#0369a1', fontWeight: 800}}>SCORE</div>
                     <div style={{fontSize: '1.3rem', fontWeight: 800}}>{selectedHistoryItem.score}</div>
                  </div>
                  <div style={{padding: '15px', background: '#f0fdf4', borderRadius: '12px', textAlign: 'center'}}>
                     <div style={{fontSize: '0.65rem', color: '#15803d', fontWeight: 800}}>CORRECT</div>
                     <div style={{fontSize: '1.3rem', fontWeight: 800}}>{selectedHistoryItem.detailedHistory.filter(h => h.isCorrect).length}</div>
                  </div>
                  <div style={{padding: '15px', background: '#fff1f2', borderRadius: '12px', textAlign: 'center'}}>
                     <div style={{fontSize: '0.65rem', color: '#b91c1c', fontWeight: 800}}>AVG TIME</div>
                     <div style={{fontSize: '1.3rem', fontWeight: 800}}>{selectedHistoryItem.avgTime}s</div>
                  </div>
                  <div style={{padding: '15px', background: '#faf5ff', borderRadius: '12px', textAlign: 'center'}}>
                     <div style={{fontSize: '0.65rem', color: '#7e22ce', fontWeight: 800}}>ACCURACY</div>
                     <div style={{fontSize: '1.3rem', fontWeight: 800}}>{((selectedHistoryItem.detailedHistory.filter(h => h.isCorrect).length / selectedHistoryItem.detailedHistory.length) * 100).toFixed(0)}%</div>
                  </div>
                </div>

                <div style={{marginBottom: '30px'}}>
                  <h4 style={{marginBottom: '10px', fontFamily: 'Outfit'}}>Question-wise Time Log (seconds)</h4>
                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(65px, 1fr))', gap: '8px'}}>
                    {selectedHistoryItem.detailedHistory.map((q, i) => (
                      <div key={i} style={{padding: '10px 5px', background: q.isCorrect ? '#dcfce7' : '#fee2e2', borderRadius: '8px', textAlign: 'center', border: `1px solid ${q.isCorrect ? '#bbfcce' : '#fecaca'}`}}>
                        <div style={{fontSize: '0.65rem', fontWeight: 800, color: q.isCorrect ? '#15803d' : '#b91c1c'}}>Q{i+1}</div>
                        <div style={{fontSize: '1rem', fontWeight: 800}}>{q.timeSpent}s</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{marginBottom: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                  <div style={{background: '#f0fdf4', padding: '15px', borderRadius: '15px', border: '1px solid #dcfce7'}}>
                    <h4 style={{marginBottom: '10px', color: '#15803d', display: 'flex', alignItems: 'center', gap: '8px'}}>✅ Strong Areas</h4>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                      {selectedHistoryItem.strongTopics.length > 0 ? selectedHistoryItem.strongTopics.map(t => (
                        <span key={t} style={{padding: '5px 12px', background: 'white', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, color: '#166534', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>{t}</span>
                      )) : <p style={{fontSize: '0.8rem', color: '#64748b'}}>Calculating...</p>}
                    </div>
                  </div>
                  <div style={{background: '#fff1f2', padding: '15px', borderRadius: '15px', border: '1px solid #fee2e2'}}>
                    <h4 style={{marginBottom: '10px', color: '#b91c1c', display: 'flex', alignItems: 'center', gap: '8px'}}>⚠️ Weak Areas</h4>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                      {selectedHistoryItem.weakTopics.length > 0 ? selectedHistoryItem.weakTopics.map(t => (
                        <span key={t} style={{padding: '5px 12px', background: 'white', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, color: '#991b1b', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>{t}</span>
                      )) : <p style={{fontSize: '0.8rem', color: '#64748b'}}>Great Job! No weak areas yet.</p>}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <main className="dashboard-container">
        <div className="dashboard-content">
          <div className="horizontal-nav">
            {MAIN_TABS.map((tab) => (
              <div 
                key={tab.id} 
                className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="nav-item-content">
                  <span className="nav-badge">{tab.badge}</span>
                  <span className="nav-label">{tab.id}</span>
                  <span className="nav-arrow">▼</span>
                </div>
              </div>
            ))}
            <div className="nav-spacer"></div>

          </div>

          <h1 className="content-header">{activeTab} Series</h1>
          
          <div className="test-list">
          <div className="test-row-header" style={{ gridTemplateColumns: '40px 60px 2fr 2fr 100px 100px 100px' }}>
            <div style={{ color: '#94a3b8', fontWeight: 600 }}>#</div>
            <div className="t-status">STATUS</div>
            <div>TEST NAME</div>
            <div>TOPIC / SYLLABUS</div>
            <div>MARKS</div>
            <div>TIME</div>
            <div style={{textAlign: 'right'}}>ACTION</div>
          </div>

          {/* Render Active Tab's Tests */}
          {getTestsForTab(activeTab).length > 0 ? (
            getTestsForTab(activeTab).map((test, index) => {
              const badgeStyle = getBadgeStyle(test.marks, activeTab);
              return (
                <Link 
                  href="/test" 
                  key={test.id} 
                  style={{textDecoration: 'none', color: 'inherit'}}
                  onClick={() => {
                    localStorage.setItem('currentQuizId', test.id);
                    localStorage.setItem('currentQuizName', test.name);
                  }}
                >
                  <div className="test-row" style={{ gridTemplateColumns: '40px 60px 2fr 2fr 100px 100px 100px', cursor: 'pointer' }}>
                    <div style={{ color: '#64748b', fontWeight: 500, fontSize: '0.9rem' }}>
                      {index + 1}
                    </div>
                    <div className="t-status">
                      <div className="t-status-icon"></div>
                    </div>
                    <div className="t-title">{test.name}</div>
                    <div className="t-topic">{test.topic}</div>
                    <div>
                      <span className="t-badge" style={{ backgroundColor: badgeStyle.bg, color: badgeStyle.text }}>
                        {test.marks} <span style={{fontSize:'0.75rem', marginLeft:'4px'}}>▼</span>
                      </span>
                    </div>
                    <div>
                      <span className="t-meta-time" style={{ backgroundColor: badgeStyle.bg, color: badgeStyle.text }}>
                        {test.time} <span style={{fontSize:'0.75rem', marginLeft:'4px'}}>▼</span>
                      </span>
                    </div>
                    <button className="action-btn">
                      Start
                    </button>
                  </div>
                </Link>
              );
            })
          ) : (
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
              Tests for {activeTab} will be added soon.
            </div>
          )}
        </div>
      </div>
    </main>
  </>
);
}
