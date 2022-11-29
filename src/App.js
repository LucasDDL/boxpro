import {useState} from "react"
import "./app.css";
export default function App(){
    
    const[peso,setPeso] = useState("");
    const[altura,setAltura] = useState("");
    const[mensagem,setMensagem] = useState("");

         function calcularIMC() {
             const  alt= altura / 100;
             const  imc= peso / (alt * alt);

             if(imc < 18.6 ){
              setMensagem("Você está abaixo do peso! Seu IMC " + imc.toFixed(1))
             } else if(imc >= 18.6 && imc < 24.9){
              setMensagem("Você está abaixo do peso! Seu IMC " + imc.toFixed(1))
             }else if(imc >= 24.9 && imc < 34.9){
              setMensagem("Você levemente acima do peso! Seu IMC " + imc.toFixed(1))
             }else if(imc > 34.9){
              setMensagem("Cuidado obesidade! Seu IMC " + imc.toFixed(1))
             }
         }
    
    return(
      <div className="app">
        <h1>Calculadora IMC</h1>
        <spam>vamos caucular seu IMC</spam>
          
          <div className="area-imput">
                              <input 
                              type="text" 
                              placeholder="peso da pessoa em (KG) é 80"
                              value={peso}
                              onChange={(e)=>setPeso(e.target.value)}
                              />
                              <input 
                              type="text" 
                              placeholder="A altura da pessoa,em (CM) é 1.8"
                              value={altura}
                              onChange={(e)=>setAltura(e.target.value)}
                              />

                <button onClick={calcularIMC}>
                calcular
                </button>
          </div>
          <h2>{mensagem}</h2>
        </div>
       )
  
      }
