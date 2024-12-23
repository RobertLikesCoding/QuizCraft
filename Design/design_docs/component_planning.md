[ &#127968; Return To Design Info](../design_info.md)

# React Component Planning

## Folder Structure

### `components` folder

This folder houses reusable UI components. Think of these as the building blocks of the application's user interface.   

Examples: Buttons, Input fields, Modals, Navigation bars, etc.  

They are often designed to be independent and composable, combine them to create more complex UI structures.

### `assets` folder

This is a general-purpose folder for static assets like images, fonts, icons, and stylesheets.

### `containers` folder

This folder is for "smart" components that are connected to the application's logic (e.g., fetching data, handling user input, updating state). They often utilize components from the components folder, interact with contexts, and utilize other containers.   

Examples: A user profile page that fetches and displays user data, a product listing page that interacts with a shopping cart context.

They don't typically have much (if any) DOM markup of their own, often acting as invisible wrappers.

### `contexts` folder

This is where you'd put the logic for React's Context API. Contexts allow you to manage and share global state across the application without manually passing props down through multiple levels of components.   

Examples: User authentication status, theme preferences, shopping cart data.

### `hooks` folder

This folder stores custom React hooks. Hooks are functions that let you "hook into" React state and lifecycle features from functional components. They promote code reusability and help you extract component logic.   

Examples: useFetch for data fetching, useLocalStorage for managing local storage.

### `pages` folder

This folder is specifically for organizing components that represent different pages or routes in your application, especially if you're using a routing library (like React Router).

Examples: Setup page, Game page, Results page.

<!-- I see the App divided in two parts: The setup and the game. In my head I feel like these could be two routes. The Setup is like a form that gets submitted. Once submitted a request is send to Gemini. So after the setup we change to the game page, which is going to have different components. Here is how I see it: -->

```
- App
  - SetupPage
    - Welcome Page (callBack -> setUserName())
      - Header (Welcome)
      - Sub Header (What is your name)
      - Input field (Name Input)
      - Input field description (Enter your name)
    - Topic Page (callBack -> setTopic())
      - Header (Nice to meet you, name)
      - Sub Header (What topic do you want to learn about?)
      - Input field (Topic Input)
      - Input field description (Enter a topic)
    - Difficulty Page (callBack -> setDifficulty())
      - Header (**topic**, nice choice!)
      - Sub Header (What difficulty do you want?)
      - Button (make it fun) 
      - Button (serious)
    - Question Amount Page (callBack -> setQuestionAmount())
      - Header (One more thing:)
      - Sub Header (How many questions should I create?)
      - Button (5)
      - Button (10)
      - Button (15)
      - Button (Craft my quiz) (callBack -> fetchQuiz())
  - GamePage
    - Question Page (Loop)
      - Progress Bar (Question number progress)
      - Sub Header (Question number)
      - Header (Question)
      - Answer Card
        - Button (Answer 1)
        - Button (Answer 2)
        - Button (Answer 3)
        - Button (Answer 4)
    ...
    - Results page
      - Header (You've answered **correct** out of **total** questions correctly. Bravo!)
      - Button (Start a new round)
```
 
The __SetupPage__ Component could have a state object that stores each user input/selection like name, topic, type and amount. When the user clicks "Craft my quiz", the setup object gets passed to our Gemini prompt for fetching. For the questions I imagine that we create a question file, which holds an array of questions. This should allow us to go through the questions one by one and allow going back as well. I'm not sure how to change the corresponding input field yet.

Question:
How do we make the questions/inputs change? With an active/hidden state? 
```
GamePage
  -ProgressBar
  -OptionsMenu
    -(not sure if we need to put each option into its own component)
    -Imprint
  -Question
  -AnswerList
    -AnswerCard
  -NextButton
  -Countdown
 ```

The __GamePage__ seems like a good place to hold the progress as state. That way it can pass it to the ProgressBar and the Question component. 
The __AnswersList__ can hold the state for highlighting selected and correct answer.
The __Options__ also need to communicate with the GamePage state.

## Components

### App
This is the main component that holds the application. Any global state should be stored here, e.g. any state that must be shared between the `SetupPage` and the `GamePage`. These states could be:

- `quiz`: The quiz object that is returned from the Gemini API.

Once the user has submitted the setup form, the `App` component should make a request to the Gemini API to fetch the quiz data. Once the quiz data is fetched, the `App` component should render the `GamePage` component.

### Setup Page
This component is responsible for collecting the user's input for the quiz. It should have the following state:

- `name`: The user's name.
- `topic`: The topic of the quiz.
- `difficulty`: The difficulty level of the quiz.
- `questionAmount`: The number of questions in the quiz.

Once the user has submitted the form, the `SetupPage` component should utilize a callback to the App component to generate the quiz.

### Game Page
This component is responsible for displaying the quiz to the user. It should have the following state:

- `currentQuestionIndex`: The index of the current question being displayed.
- `selectedAnswerIndex`: The index of the answer that the user has selected.
- `correctAnswerIndex`: The index of the correct answer for the current question.
- `userScore`: The user's score on the quiz.

The `GamePage` component should render the `QuestionPage` component and the `ResultsPage` component based on the current state. It does so by comparing the current question index to the total number of questions in the quiz. Once the user has answered all the questions, the `GamePage` component should render the `ResultsPage` component.

### ProgressBar
This component is a container component that displays the progress of the quiz. It will receive data about the questions and render `ProgressBarSymbol`s based on the relevant data.

This component will need to have access to the quiz data `context` to get the data about the questions. It will then use a function to convert the quiz data from the context into an array of relevant data objects for the `ProgressBarSymbol` component.

**State**

- `questionsData`: An array of objects that contain information about all questions in the quiz. Each object will have the following: 
  - `isCurrent` (*`boolean`*): `true` if it is the current question. Will only be `true` if the question is the current question.
  - `isCompleted` (*`boolean`*): `true` if the question has been completed.
  - `isCorrect` (*`boolean`*): `true` if the question has been answered correctly and `false` if not.

### ProgressBarSymbol
This component is a presentational component that represents a single question in the quiz. It will receive data about the question and render a symbol based on the relevant data from the `ProgressBar` component.

**Props**

  - `isCurrent` (*`boolean`*): `true` if it is the current question. Will only be `true` if the question is the current question.
  - `isCompleted` (*`boolean`*): `true` if the question has been answered.
  - `isCorrect` (*`boolean`*): `true` if the question has been answered correctly and `false` if not.
