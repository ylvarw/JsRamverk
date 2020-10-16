import React, { useEffect, useState } from 'react';

const Me = () => {
  const [message, setMessage] = useState('');
  
//   var fetchres; 

  useEffect(() => {
    fetch('http://localhost:1337/')
      .then(res => res.json())
    //   .then(res => fetchres = res)
      .then(res => setMessage(res[0].meDescription));
        // .then(res => console.log(res))
  });

//   console.log('resultat från api: ', fetchres);
  // console.log('resultat i message: ', message);

  return (
    <main>
      <h1>Me</h1>
      <p>{message}</p>
    </main>
  );
};


export default Me;
