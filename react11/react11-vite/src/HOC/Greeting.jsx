const Greeting=({translate, changeLanguage})=>(
    <div>
        <p>{translate("greeting")}</p>
        <button onClick={()=>changeLanguage("en")}>English</button>
        <button onClick={()=>changeLanguage("fr")}>French</button>
        <button onClick={()=>changeLanguage("es")}>Spanish</button>
    </div>
)

export default Greeting