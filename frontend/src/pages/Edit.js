
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { UseForm } from "../hooks/UseForm"; // Importa el hook correctamente
import{useApi}from"../context/ApiContext"
export const Edit = () => {
    const { data, setData } = useApi();
  
  const { id } = useParams(); // Extraer id fuera del handleSubmit
  const user = data.data.projects.find(u => u._id == id);
  
  const { formValues, handleInputChange, reset } = UseForm({
    title: user.title,
    description: user.description,
    completed: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const { title, description, completed } = formValues;

      const responseAxios = await axios.put(
        `http://localhost:8000/api/projects/${id}`,
        { title, description, completed }
      );

      console.log(responseAxios);
    } catch (error) {
      console.error("Error al enviar la tarea:", error);
    }

    reset();
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <Link to="/proyectos">Ir a proyectos</Link>
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
      <button type="submit">Enviar</button>
    </form>
   < a href="/proyectos">ir a proyectos</a>
    </>
  );
};