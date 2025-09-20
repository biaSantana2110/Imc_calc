import { data } from "./data/data";
import { useState } from 'react';
import ImcCalc from './component/ImcCalc';
import ImcTable from "./component/ImcTable";
import './App.css'



function App() {
 const calcImc = (e, height, weight) => {
  e.preventDefault();

  if(!weight || !height) return;

  console.log("Executou");
 };

 const [imc, setImc] = useState("");
 const [info, setInfo] = useState("");
 const [infoClass, setInfoClass] = useState("");

  return (
  <div className='container'>
      {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable />}
    </div>
    );
     
  
}

export default App
