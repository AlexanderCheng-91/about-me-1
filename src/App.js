import './App.css';
import NavigationBar from "./NavigationBar"
import AlexCard from "./AlexCard"

function App() {
  return (
        <div className="AppBackgroundSelector">      
          <NavigationBar/>  
          <AlexCard/>     
            <footer className ="footer"></footer>      
        </div>
    );
}

export default App;
