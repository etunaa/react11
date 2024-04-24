
import './App.css'
import PersonsFinder from "./components/PersonsFinder"
import Greeting from "./HOC/Greeting"
import withTranslation from "./HOC/withTranslation"

const TranslatedGreeting=withTranslation(Greeting)

function App() {
  return(
    <div className="App">
      <TranslatedGreeting/>
      <h1>Class Based Components</h1>
      <PersonsFinder/>
    </div>
  )
}

export default App
