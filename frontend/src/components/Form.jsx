import React, { useState } from 'react'

const Form = ({ createData }) => {

   const [state, setState] = useState({
      fecha: "",
      concepto: "",
      monto: "",
      tipo: "gastos"
   })


   const submit = (e) => {
      e.preventDefault()
      createData(state)
      e.target.reset()
      setState({ ...state, tipo: "gastos" })
   }

   const handleCheckBox = (e) => {

      if (state.tipo === "gastos") {
         setState({ ...state, tipo: "entrado" })
      } else {
         setState({ ...state, tipo: "gastos" })
      }

   }



   return (
      <div className="container text-center mt-3">
         <form onSubmit={submit} >
            <input
               type="date"
               className="form-control form-control-sm mb-2 "
               onChange={(e) => setState({ ...state, fecha: e.target.value })}
               required

            />
            <input
               type="text"
               placeholder="Ingrese Concepto"
               className="form-control form-control-sm mb-2"
               onChange={(e) => setState({ ...state, concepto: e.target.value })}
               required


            />
            <input
               type="number"
               placeholder="Ingrese Importe"
               className="form-control form-control-sm mb-2"
               onChange={(e) => setState({ ...state, monto: e.target.value })}
               required

            />


            <div className="row">
               <div className="col-6 ">
                  <div className="form-check mt-2">
                     <label className="form-check-label">
                        <input
                           type="checkbox"
                           className="form-check-input"
                           value={setState.tipo}
                           onChange={handleCheckBox}
                        />
                        Ingresado
                     </label>
                  </div>
               </div>
               <div className="col-6">
                  <button className="btn btn-primary btn-sm mt-1" type="submit">Agregar</button>
               </div>
            </div>




         </form>
      </div >

   )
}

export default Form
