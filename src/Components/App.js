import './App.css';
import logotyp from '../Images/logotyp.png'

function App() {
  return (
    <div className="App">
       <img src={logotyp} ali="logo" className="logo"></img>
       <p className="link-p">Strona w budowie. Zapraszam do owiedzenia <a href="https://alkszo.github.io/kasi-ikony/">starej wersji</a></p>
       <p className="link-p">Website under construction. I invite you to visit the <a href="https://alkszo.github.io/kasi-ikony/">old verion</a></p>
       <p className="link-p">Site en construction. Je vous invite à visiter <a href="https://alkszo.github.io/kasi-ikony/">l'ancienne version</a></p>
    </div>
  );
}

export default App;
