// my github:   https://github.com/ylvarw/JsRamverk

import React, { useEffect, useState } from 'react';

/*const Report = ({ match }) => {
    const kmom = match.params.kmom;
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch(`https://me-api.jsramverk.se/reports/${kmom}`)
            .then(res => res.json())
            .then(res => setQuestions(res.data));
    });

    const QuestionsList = () =>
        questions.map((question, index) => (
            <div className="question" key={index}>
                <p>
                    <strong>{question.question}</strong>
                </p>
                <p>{question.answer}</p>
            </div>
        ));*/
const Report = () => {
    return (
        <main>
            <h1>Kmom01</h1>
            {/*<QuestionsList />*/}
            <p>Kolla gärna mitt repo på <a href="https://github.com/ylvarw/JsRamverk">GitHub</a> för Me-appen </p>

            <p>
            <h2>Available Scripts</h2>
                In the project directory, you can run:

                <h3>npm start</h3>
                Runs yarn start and opens http://localhost:3000 in browser

                <h3>yarn start</h3>

                Runs the app in the development mode.
                Open http://localhost:3000 to view it in the browser.

                The page will reload if you make edits.
                You will also see any lint errors in the console.

                <h3>yarn test</h3>

                Launches the test runner in the interactive watch mode.
                See the section about running tests for more information.

                <h3>yarn build</h3>

                Builds the app for production to the build folder.
                It correctly bundles React in production mode and optimizes the build for the best performance.

                The build is minified and the filenames include the hashes.
                Your app is ready to be deployed!

                See the section about deployment for more information.

                <h3>yarn eject</h3>

                Note: this is a one-way operation. Once you eject, you can’t go back!

                If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

                Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

                You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
            </p>

        </main>
    );
};

export default Report;