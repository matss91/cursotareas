import React from 'react'
import { useParams } from 'react-router-dom';
import axios from"axios"
import{useApi}from"../context/ApiContext"



export const Eliminartarea = (req,res) => {
  const { id } = useParams();
  const { setData } = useApi();
    try {
     
      
        
        const response =  axios.delete(`http://localhost:8000/api/projects/${id}`);
        setData(response);
        
       

        


    

    } catch (error) {
        console.log(error)
    }
  return (
    <div>tarea eliminada ir a:<a href="/proyectos">Ir a proyectos</a></div>

  )
}
