import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">

    <PersonCard 
    firstName= {"Khrista"} 
    lastName= {"Woman"} 
    age = { 100 } 
    hair= { "black" } />

    <PersonCard 
    firstName= {"Alex"} 
    lastName= {"Sir"} 
    age = { 75 } 
    hair= { "Red" } />

    <PersonCard 
    firstName= {"Jared"} 
    lastName= {"Man"} 
    age = { 33 } 
    hair= { "Brown" } />

    <PersonCard 
    firstName= {"Fredy"} 
    lastName= {"Guy"} 
    age = { 55 } 
    hair= { "Black" } />
      
    
    </div>
  );
}

export default App;
