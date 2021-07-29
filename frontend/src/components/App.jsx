import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Form from './Form.jsx';
import EditForm from './EditForm.jsx';
import Table from './Table.jsx';

function App() {
   const [state, setState] = useState([])
   const [state2, setState2] = useState([])
   const [state3, setState3] = useState(false)
   const [state4, setState4] = useState([])
   const [state5, setState5] = useState()
   const [state6, setState6] = useState()

   useEffect(() => {
      getData()
      //eslint-disable-next-line
   }, []);

   const getData = async () => {
      const data = await axios.get('http://localhost:8080/api/datos')
      setState(data.data)
      setState3(false)
      getBalance()
   };

   const createData = async (data) => {
      await axios.post('http://localhost:8080/api/datos', {
         concepto: data.concepto,
         monto: data.monto,
         fecha: data.fecha,
         tipo: data.tipo
      })
      getData()
   };

   const getDataById = async (id) => {
      const data = await axios.get(`http://localhost:8080/api/datos/${id}`)
      setState(data.data)
      setState2(data.data)
      setState3(true)
   };

   const getBalance = async () => {
      const data = await axios.post('http://localhost:8080/api/datos/balance')
      console.log(data.data)
      let totalin = 0
      let totalout = 0
      data.data.forEach(item => {
         if (item.tipo === "entrad") {
            totalin = totalin + item.monto
         } else {
            totalout = totalout + item.monto
         }
      })
      console.log(totalin)
      console.log(totalout)
      setState4(totalin - totalout)
      setState5(totalin)
      setState6(totalout)
   };

   const deleteData = async (id) => {
      await axios.delete(`http://localhost:8080/api/datos/${id}`)
      getData()
   };


   return (
      <>
         <div className="row pt-3">
            <div className="col-3">
               <h3>ALKEMY !!!!  </h3>
            </div>
         </div>
         <hr />
         <div className="row">
            <div className="col-8">
               <Table state={state} deleteData={deleteData} getDataById={getDataById} />
            </div>
            <div className="col-4">
               {
                  state3 ? <EditForm state2={state2} getData={getData} />
                     : <Form createData={createData} state2={state2} />
               }

            </div>
         </div>
         <hr></hr>
         <div className="row mt-2">
            <div className="col-3">
            </div>
            <div className="col-2">
               <h4 className="text-success">$ {state5}</h4>
            </div>
            <div className="col-4 text-start">
               <h4 className="text-danger">$ {state6}</h4>
            </div>
            <div className="col-3 ">
               <h4>TOTAL:   $ {state4}</h4>
            </div>
         </div>
      </>

   );
};

export default App;
