import React from 'react'

const Totales = ({ state4, state5, state6 }) => {
   return (
      <>
         {/* <hr></hr> */}
         <div className="row mt-4 bg-secondary bg-gradient">
            <div className="col-3">
            </div>
            <div className="col-2">
               <h4 >IN:  <span className="text-white">{state5}</span></h4>
            </div>
            <div className="col-4 text-start">
               <h4 >OUT:  <span className="text-white">{state6}</span></h4>
            </div>
            <div className="col-3 ">
               <h4 >TOTAL: <span className="text-white">{state4}</span></h4>
            </div>
         </div>
      </>
   )
}

export default Totales



