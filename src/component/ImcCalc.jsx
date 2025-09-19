import "./ImcCalc.css";

const ImcCalc = () => {
  return (
    <div id="calc-container">
      <h2>Calculador de Imc</h2>
      <form id="imc-form"> 
         <div className="forminputs">
            <div className="form-control">
                <label htmlFor="height">Altura:</label>
                <input type="text" name="height" id="height"  placeholder="1,75"/>
            </div>
            <div className="form-control">
                <label htmlFor="weight">Peso:</label>
                <input type="text" name="weight" id="weight"  placeholder="70,5"/>
            </div>
         </div>
         <div className="action-control">
            <button>Calcular</button>
             <button>Limpar</button>
         </div>
      </form>
    </div>
  )
}

export default ImcCalc
