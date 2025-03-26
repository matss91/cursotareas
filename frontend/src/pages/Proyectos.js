import React from "react";
import{useApi}from"../context/ApiContext"
import { Link } from "react-router-dom";
import"../css/proyectos.css"
export const Proyectos = () => {
  const { data, loading, error } = useApi();
  console.log(data)
  return (<>{data.data ? <p>{data.data.projects.map((nombre, index) => (
    <li   key={index}><span className="titulo">titulo:{nombre.title}</span> <Link className="detalle" to={`http://localhost:3000/proyectos/detalle/${nombre._id}`}>detalle</Link><Link className="eliminar" to={`http://localhost:3000/proyectos/eliminar/${nombre._id}`}>eliminar</Link><Link className="editar" to={`http://localhost:3000/proyectos/edit/${nombre._id}`}>editar</Link></li>
  ))}<br/><br/><a className="agregar" href="/">volver a agregar</a></p> : <p>Por favor, inicia sesión</p>}</>
    
  );

  // Se ejecuta solo una vez al montar el componente
};
