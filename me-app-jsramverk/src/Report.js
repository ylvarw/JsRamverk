// my github:   https://github.com/ylvarw/JsRamverk

import React, { useEffect, useState } from 'react';
// import React from 'react';

// const Report = () => {
//     return (
//         <main>
//             <h1>Kmom01</h1>
//             {/*<QuestionsList />*/}
//             <p><i>Kolla gärna mitt repo på <a href="https://github.com/ylvarw/JsRamverk">GitHub</a> för Me-appen </i></p>

//             <p> 
//             <h2>Available Scripts</h2>
//                 In the project directory, you can run:

//                 <h3>npm start</h3>
//                 Runs yarn start and opens http://localhost:3000 in browser

//                 <h3>yarn start</h3>

//                 Runs the app in the development mode.
//                 Open http://localhost:3000 to view it in the browser.

//                 The page will reload if you make edits.
//                 You will also see any lint errors in the console.

//                 <h3>yarn test</h3>

//                 Launches the test runner in the interactive watch mode.
//                 See the section about running tests for more information.

//                 <h3>yarn build</h3>

//                 Builds the app for production to the build folder.
//                 It correctly bundles React in production mode and optimizes the build for the best performance.

//                 The build is minified and the filenames include the hashes.
//                 Your app is ready to be deployed!

//                 See the section about deployment for more information.

//                 <h3>yarn eject</h3>

//                 Note: this is a one-way operation. Once you eject, you can’t go back!

//                 If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

//                 Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

//                 You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
//             </p>

//         </main>
//     );
// };

// export default Report;

// const Me = () => {
//     const [message, setMessage] = useState('');
    
//   //   var fetchres; 
  
//     useEffect(() => {
//       fetch('http://localhost:1337/')
//         .then(res => res.json())
//       //   .then(res => fetchres = res)
//         .then(res => setMessage(res[0].meDescription));
//           // .then(res => console.log(res))
//     });
  
//   //   console.log('resultat från api: ', fetchres);
//     console.log('resultat i message: ', message);
  
//     return (
//       <main>
//         <h1>Me</h1>
//         <p>{message}</p>
//         {/* <p>{fetchres}</p> */}
//       </main>
//     );
//   };

const Report = ({ match }) => {
    const kmom = match.params.kmom;
    const [textcontent, setContent] = useState([]);

    useEffect(() => {
    fetch(`http://localhost:1337/reports/week/${kmom}`)
        .then(res => res.json())
        .then(res => setContent(res.data));
    });

    // console.log('content from api: ', textcontent);

    // const List = () =>
    //   textcontent.map((content, index) => (
    //     <div className="textcontent" key={index}>
    //       {/* <p>
    //         <strong>{textcontent.msg}</strong>
    //       </p> */}
    //       <p>{content.msg}</p>
    //     </div>
    //   ));

    return (
    <main>
        <h2>kmom: {textcontent.kmom}</h2>
        <p>{textcontent.content}</p>
        {/* <List /> */}
    </main>
    );

};

// const Report = ({ match }) => {
//     const kmom = match.params.kmom;
//     const [textcontent, setContent] = useState([]);
  
//     useEffect(() => {
//       fetch(`http://localhost:1337/reports/week/${kmom}`)
//         .then(res => res.json())
//         .then(res => setContent(res.data));
//     });
  
//     const List = () =>
//       textcontent.map((content, index) => (
//         <div className="textcontent" key={index}>
//           {/* <p>
//             <strong>{textcontent.msg}</strong>
//           </p> */}
//           <p>{content.msg}</p>
//         </div>
//       ));
  
//     return (
//       <main>
//         <h2>{kmom}</h2>
//         <List />
//       </main>
//     );
//   };
  
  export default Report;