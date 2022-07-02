import "./app.css";
import { useState } from "react";


export default function App () {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');
  

  function calcularImc(){


    if (peso === '' || altura=== '' ) {
      alert("Informe seu peso e altura!");
      return;
    }

    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMensagem("Você está abaixo do seu peso! Seu IMC: " + imc.toFixed(2));  
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Peso ideal! Seu IMC: "+ imc.toFixed(2));  
    } else if (imc >= 24.9 && imc < 29.9) {
      setMensagem("Você está com sobrepeso! Seu IMC: "+ imc.toFixed(2));  
    } else if (imc >= 30.0 && imc < 35) {
      setMensagem("Cuidado Obesidade grau 1! Seu IMC: "+ imc.toFixed(2));        
    } else if (imc >= 35.1 && imc < 40.0) {
      setMensagem("Cuidado Obesidade grau 2! Seu IMC: "+ imc.toFixed(2));      
    } else if (imc >= 40) {
      setMensagem("Cuidado Obesidade grau 3 ou Mórbida! Seu IMC: "+ imc.toFixed(2));      
   }

    

  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC:</span>
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
        <button onClick={calcularImc}>Calcular</button>

      </div>
      <h2>{mensagem}</h2>
    </div>
  )
}