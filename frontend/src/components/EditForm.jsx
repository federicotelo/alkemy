import React, { useState } from 'react'
import axios from 'axios';

const EditForm = ({ state2, getData }) => {

   const [state, setState] = useState(...state2)

   const submit = async (e) => {
      e.preventDefault()
      await axios.put(`http://localhost:8080/api/datos/${state.id}`, {
         concepto: state.concepto,
         monto: state.monto,
         fecha: state.fecha,
         tipo: state.tipo
      })
      getData()
   }


   return (
      <div className="container text-center mt-3">
         <form onSubmit={submit} >
            <input
               type="date"
               className="form-control form-control-sm mb-2 "
               onChange={(e) => setState({ ...state, fecha: e.target.value })}
               defaultValue={state2[0].fecha}
               required
            />
            <input
               type="text"
               placeholder="Ingrese Concepto"
               className="form-control form-control-sm mb-2"
               onChange={(e) => setState({ ...state, concepto: e.target.value })}
               defaultValue={state2[0].concepto}
               required
            />
            <input
               type="number"
               placeholder="Ingrese Importe"
               className="form-control form-control-sm mb-2"
               onChange={(e) => setState({ ...state, monto: e.target.value })}
               defaultValue={state2[0].monto}
               required
            />

            <div className=" d-flex justify-content-around">
               <button className="btn btn-warning btn-sm mt-1" onClick={getData}>Cancelar</button>
               <button className="btn btn-primary btn-sm mt-1" type="submit">Editar</button>
            </div>

         </form>
      </div>

   )
}

export default EditForm
