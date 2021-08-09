import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Head from './Head'
import Form from './Form.jsx';
import EditForm from './EditForm.jsx';
import Table from './Table.jsx';
import Login from './Login';
import Totales from './Totales';

function App() {
   const [state, setState] = useState([])       //DATA
   const [state2, setState2] = useState([])     //DATA BY ID
   const [state3, setState3] = useState(false)  //FLAG SHOW FORM OR EDIT FORM
   const [state4, setState4] = useState([])     //TOTAL
   const [state5, setState5] = useState()       //TOTAL IN
   const [state6, setState6] = useState()       //TOTAL OUT
   const [state7, setState7] = useState(false)  //FLAG LOGIN
   const [state8, setState8] = useState(false)  //OTHER FLAG
   useEffect(() => {
      getData()
      //eslint-disable-next-line
   }, []);

   const getData = async () => {
      try {
         const data = await axios.get('http://localhost:8080/api/datos')
         setState(data.data)
         setState3(false)
         getBalance()
      } catch (error) {
         return console.log("ERROR: ", error)
      }

   };

   const createData = async (data) => {
      try {
         await axios.post('http://localhost:8080/api/datos', {
            concepto: data.concepto,
            monto: data.monto,
            fecha: data.fecha,
            tipo: data.tipo
         })
         getData()
      } catch (error) {
         return console.log("ERROR: ", error)
      }
   };

   const getDataById = async (id) => {
      try {
         const data = await axios.get(`http://localhost:8080/api/datos/${id}`)
         setState(data.data)
         setState2(data.data)
         setState3(true)
      } catch (error) {
         return console.log("ERROR: ", error)
      }
   };

   const getBalance = async () => {
      try {
         const data = await axios.post('http://localhost:8080/api/datos/balance')
         let totalin = 0
         let totalout = 0
         data.data.forEach(item => {
            if (item.tipo === "entrad") {
               totalin = totalin + item.monto
            } else {
               totalout = totalout + item.monto
            }
         })
         setState4(totalin - totalout)
         setState5(totalin)
         setState6(totalout)
      } catch (error) {
         return console.log("ERROR: ", error)
      }
   };

   const deleteData = async (id) => {
      try {
         await axios.delete(`http://localhost:8080/api/datos/${id}`)
         getData()
      } catch (error) {
         return console.log("ERROR: ", error)
      }
   };


   return (
      <>
         <Head setState7={setState7} setState8={setState8} state7={state7} state8={state8} />

         <div className="row">
            {
               !state7 && <Login setState7={setState7} state8={state8} />
            }
            <div className="col-8">
               {
                  state7 && <Table state={state} deleteData={deleteData} getDataById={getDataById} />
               }
            </div>
            <div className="col-4">
               {
                  state3 ? <EditForm state2={state2} getData={getData} />
                     : state7 && <Form createData={createData} state2={state2} />
               }
            </div>
         </div>

         {
            state7 && <Totales state4={state4} state5={state5} state6={state6} />
         }

      </>

   );
};

export default App;
