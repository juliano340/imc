import "./app.css";
import { useState } from "react";


export default function App () {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>
      <div className="area-input">
        
        <input 
        type="text" 
        placeholder="Peso em (kg) Ex: 80" 
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        />
        <input type="text" 
        placeholder="Altura em (cm) Ex: 180" 
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        />
        <button>Calcular</button>

      </div>
      <h2>Seu IMC foi 25, você está abaixo do peso!</h2>
    </div>
  )
}