import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useApi } from '../context/ApiContext';
import"../css/detalle.css"
export const Detalle = () => {
    const { data, setData } = useApi();
    const [state, setstate] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
   
    
   

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/projects`);
                setData(response)
                console.log(response.data.projects)
                const user = response.data.projects.find(u => u._id == id);
                setstate(user)
            } catch (err) {
               
            } finally {
               
            }
        };

        fetchProject();
    }, []);

   

    return (
        <div className='principal'>
            <h2>titulo</h2>
            <h4>{state.title}</h4>
            <h2>descripcion</h2>
            <h4>{state.description}</h4>
            <a href="/proyectos">Ir a proyectos</a>
        </div>
    );
};



