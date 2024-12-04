[ &#127968; Return To Design Info](../design_info.md)

# React State Design Document

## Introduction
### **Purpose:** 

This document outlines the design and structure of React state management for the application. It details what data will be stored in component-level state, and what data will be elevated to React Context for global access.

It is intended for developers working on the application to understand how state is managed and shared across components.


### **Application Overview:** 

This is a React application with no backend that allows users to enter a prompt and a AI generated quiz will be generated based on the prompt. The application will have a simple UI with a form to enter the prompt and a quiz section to display the generated quiz.

### **Needed Data:**
 - `currentTopic`: The topic of the prompt.
 - `currentQuestionAmount`: The number of questions to generate.
 - `quiz`: An object containing the generated quiz data.
   - `topic`: The topic of the quiz.
   - `questionsAmount`: The number of questions in the quiz.
   - `questions`: An array of question objects.
      - `question`: The question text.
      - `answers`: An array of answer options.
      - `correctAnswer`: The index of the correct answer.
      - `userAnswer`: The user's selected answer for each question.
   - `userScore`: The user's score on the quiz.
- `userName`: The user's name.
- `theme`: The current theme of the application.
- `language`: The current language of the application.

## State Management Strategy
### **Component-Level State:** 
<!-- Describe the type of data that will be managed within individual components using `useState` or `useReducer`. Provide examples. -->
All state that is relevant to a single component (nested component) and does not need to be shared with other components will be managed using `props`.

Components that are made up of multiple smaller components (compound components) will manage the state of their nested components using `useState` or `useReducer`.

### **React Context:** 
<!-- Explain why React Context is being used and the benefits it provides in this application. -->
#### **Context Providers:** 
  <!-- List and describe the different Context Providers that will be used. -->

#### **Data Shared via Context:**  
  <!-- Detail the specific data points that will be stored within each Context. -->


## Performance Considerations
* **State Optimization:** 
  <!-- Discuss strategies for optimizing state management to ensure good performance. -->
    <!-- * Memoization techniques (e.g., `useMemo`, `React.memo`).
    * Selective re-renders.
    * Avoiding unnecessary state updates. -->