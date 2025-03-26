import React from "react";
import { UseForm } from "../hooks/UseForm";

import axios from"axios"

export const CrearTarea = () => {
  const { formValues, handleInputChange, reset } = UseForm({
    title: "",
    description: "",
    completed: true,
  });

  const handleSubmit=async(e)=>{
    e.preventDefault()

    try {
     const title=formValues.title
     const description=formValues.description
     const completed=formValues.completed

      const responseAxios= await axios.post("http://localhost:8000/api/projects",{title,description,completed})
      console.log(responseAxios)
     } catch (error) {
       console.log(error)
       //handleShowAlert(axios.isAxiosError(error)?error.message?.data.msg:error)
     }
     reset()
     
     }

  

  return (
    <form onSubmit={handleSubmit}>
      <a href="/proyectos">Ir a proyectos</a>
      <input
        type="text"
        name="title"
        value={formValues.title}
        onChange={handleInputChange}
        placeholder="Titulo"
      />
      <input
        type="text"
        name="description"
        value={formValues.description}
        onChange={handleInputChange}
        placeholder="Descripcion"
      />
      <button type="button" onClick={reset}>
        Reset
      </button>
      <button type="submit">enviar</button>
    </form>
  );
};

