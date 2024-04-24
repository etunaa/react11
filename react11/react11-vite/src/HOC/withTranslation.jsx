import React, {useState} from "react";

const translations={
    en:{
        greeting: "Hello",
    },
    fr:{
        greeting:"Bonjour",
    },
    es:{
        greeting:"Hola",
    }
};

function withTranslation(WrappedComponent){
    return function(props){
        const [language, setLanguage]=useState("en");
        const translate=(key)=>translations[language][key]|| key;
        const changeLanguage=(lang)=>setLanguage(lang);

    return (
        <WrappedComponent
        {...props}
        translate={translate}
        changeLanguage={changeLanguage}/>
    ) ;  
    };
}

export default withTranslation;