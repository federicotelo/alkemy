import React from 'react'

const Head = ({ setState7, setState8, state7, state8 }) => {
   return (
      <div>
         <div className="row pt-3 bg-secondary bg-gradiant text-white">
            <div className="col-10">
               <h3>ALKEMY !!!! {state8} </h3>
            </div>
            <div className="col-2">
               {!state7 && <span id="span" onClick={() => setState8(!state8)}>{state8 ? "Login" : "Register"}</span>}
               {state7 && <span id="span" onClick={() => setState7(false)}>Logout</span>}
            </div>
         </div>
         {/* <hr /> */}
      </div>
   )
}

export default Head
