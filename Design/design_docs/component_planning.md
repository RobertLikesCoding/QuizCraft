[ &#127968; Return To Design Info](../design_info.md)

# React Component Planning

I see the App divided in two parts: The setup and the game. In my head I feel like these could be two routes. The Setup is like a form that gets submitted. Once submitted a request is send to Gemini. So after the setup we change to the game page, which is going to have different components. Here is how I see it:

```
App
  -SetupPage
  -GamePage
SetupPage
  -Question
  -Input
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
