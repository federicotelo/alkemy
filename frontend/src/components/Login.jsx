import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setState7, state8 }) => {


   const [email, setEmail] = useState("")
   const [pass, setPass] = useState("")
   const [msg, setMsg] = useState("")



   const login = async (e) => {
      e.preventDefault()
      const data = await axios.post(`http://localhost:8080/api/auth/login`, { email, pass })
      if (data.data.estado) {
         setMsg(<span className="text-success">{data.data.msg}</span>)      //LOGIN OK
         setTimeout(() => {
            setMsg("")
            setState7(data.data.estado)
         }, 2500);

      } else {
         console.log(data.data.msg) //LOGIN FAIL
         setMsg(<span className="text-danger">{data.data.msg}</span>) //data.data.msg
         setTimeout(() => {
            setMsg("")
         }, 2500);
      }
   }

   const register = async (e) => {
      e.preventDefault()
      const data = await axios.post(`http://localhost:8080/api/auth/register`, { email, pass })
      if (data.data.estado) {
         setMsg(<span className="text-success">{data.data.msg}</span>)      //USUARIO CREADO
         setTimeout(() => {
            setMsg("")
            setState7(data.data.estado)
         }, 2500);
      } else {
         setMsg(<span className="text-danger">{data.data.msg}</span>)      //USUARIO EXISTENTE
         setTimeout(() => {
            setMsg("")
         }, 2500);
      }
   }

   return (
      <>
         <div className="container text-center mt-5 form row ">
            <div className="d-flex justify-content-center col-12 ">
               <div className="col-4 bg-dark p-3 trans">
                  <form onSubmit={state8 ? register : login}>
                     <input
                        type="email"
                        placeholder="Email"
                        className="form-control form-control-sm mb-2"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                     />
                     <input
                        type="password"
                        placeholder="Contraseña"
                        className="form-control form-control-sm mb-2"
                        onChange={(e) => setPass(e.target.value)}
                        minLength="4"
                        required

                     />
                     <div className="d-flex justify-content-around">
                        {!state8 ? <button className="btn btn-primary  btn-login btn-sm mt-1" type="submit">Login</button>
                           : <button className="btn btn-success btn-login  btn-sm mt-1" type="submit">Register</button>}
                     </div>
                  </form>

               </div>
            </div>
            <div>{msg}</div>  {/* <span className="text-danger">{msg}</span> */}
         </div>

      </>


   );
}

export default Login;