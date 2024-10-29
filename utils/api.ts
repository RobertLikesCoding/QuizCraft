import { GoogleGenerativeAI } from "@google/generative-ai";

// run the dotenv config to get the .env vars

// declare the quiz result object interface
interface QuizResult {
    quizTitle: string;
    questions: {
        questionText: string;
        options: string[];
        correctAnswerIndex: number;
    }[];
}

// get the api key from .env
const api_token: string | undefined = import.meta.env.VITE_GEMINI_API_KEY;

// if the api key is not present, throw error
if (!api_token) {
    throw new Error(
        "API token is not defined. Please set GEMINI_API_TOKEN in your environment variables."
    );
}

/**
 * Function to generate a quiz based off provided parameters
 * @param numberOfQuestions - the number of question that should be generated
 * @param quizSubject - The subject of the quiz
 * @returns QuizResult object
 */
const generateQuiz = async (numberOfQuestions: number, quizSubject: string) => {
    try {
        // register the api token with the method
        const genAI = new GoogleGenerativeAI(api_token);

        // set the model to use
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // create the prompt
        const prompt = `Create a ${quizSubject} quiz with ${numberOfQuestions} multiple-choice questions.
            Return only the quiz and no additional code as a JSON object in the following format :
            {
            "quizTitle": "Quiz Name",
            "questions": [
            {
            "questionText": "Question 1 text",
            "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
            ],
            "correctAnswerIndex": 2
            },
            // ... more questions
            ]
            }
        `;
        // generate the response
        const result = await model.generateContent(prompt);

        // sanitize the string removing the markdown code signifier.
        const objectText = result.response
            .text()
            .replace(/^```json\s+/g, "")
            .replace(/\s+```$/g, "");

        // parse the json string into a js object
        const resultObject: QuizResult = JSON.parse(objectText);

        return resultObject;
    } catch (error) {
        console.error(error);
    }
};

/**
 * A function to test the functionality of the API call
 */
const testQuizOutput = async (questionAmount: number, quizSubject: string) => {
    // generate a test quiz
    const testObject: QuizResult | undefined = await generateQuiz(
        questionAmount,
        quizSubject
    );

    if (!testObject) {
        console.error("The test object is undefined");
    } else {
        // format the quiz for readability in the console
        console.log(testObject.quizTitle);
        console.log("-----------------");
        testObject.questions.forEach((question) => {
            console.log(question.questionText);
            question.options.forEach((option, index) => {
                console.log(`${index + 1}.) ${option}`);
            });
            console.log(
                `The correct answer is: ${question.correctAnswerIndex + 1}.) ${
                    question.options[question.correctAnswerIndex]
                }`
            );
            console.log("***********");
        });
    }
};

export { generateQuiz, testQuizOutput };
