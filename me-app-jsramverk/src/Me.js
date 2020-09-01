import React from 'react';

const Me = () => {
    // const [message, setMessage] = useState('');

/*    useEffect(() => {
        fetch('https://me-api.jsramverk.se')
            .then(res => res.json())
            .then(res => setMessage(res.description));
    });*/

    return (
        <main>
            <h1>Me</h1>
            <p>Välkommen till min me-sida, byggd för kursen JsRamverk <br/>
                Mitt namn är Ylva och jag läser kursen på BTH men bor i Malmö tillsammans med sambo och katter<br/>
                Lite om mig då. <br/>
                Jag tycker om att skriva JavaScript och css, tycker även att det är kul med bygge av appar i olika språk. <br/>
                Som hobbies har jag matlaging, bakning och orkideér.
            </p>
        </main>
    );
};

export default Me;
