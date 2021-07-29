import React from 'react';
import { VscTrash } from 'react-icons/vsc';
import { BiEdit } from 'react-icons/bi';


const Table = ({ state, deleteData, getDataById }) => {
   return (

      <table className="table table-hover table-sm table-borderless">
         <thead>
            <tr>
               <th scope="col">Fecha</th>
               <th scope="col">Concepto</th>
               <th scope="col">Importe</th>
               <th scope="col"></th>
            </tr>
         </thead>
         <tbody>

            {
               state.map(item => (
                  <tr key={item.id} className={(item.tipo === "entrad") ? "text-success" : "text-danger"}>
                     <td >{item.fecha}</td>
                     <td>{item.concepto}</td>
                     <td >{item.monto}</td>
                     <td>
                        <span className="text-warning m-2"><BiEdit onClick={() => getDataById(item.id)} /></span>
                        <span className="text-danger m-2"><VscTrash onClick={() => deleteData(item.id)} /></span>
                     </td>
                  </tr>
               ))
            }

         </tbody>
      </table >




   )
}

export default Table
