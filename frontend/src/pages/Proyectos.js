import React from "react";
import{useApi}from"../context/ApiContext"
import { Link } from "react-router-dom";
export const Proyectos = () => {
  const { data, loading, error } = useApi();
  console.log(data)
  return (<>{data.data ? <p>{data.data.projects.map((nombre, index) => (
    <li key={index}>{nombre.title} <Link to={`http://localhost:3000/proyectos/detalle/${nombre._id}`}>ir</Link><Link to={`http://localhost:3000/proyectos/eliminar/${nombre._id}`}>eliminaar</Link><Link to={`http://localhost:3000/proyectos/edit/${nombre._id}`}>editar</Link></li>
  ))}<a href="/">volver a agregar</a></p> : <p>Por favor, inicia sesión</p>}</>
    
  );

  // Se ejecuta solo una vez al montar el componente
};
