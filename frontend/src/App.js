
import './App.css';
import { Route, Routes, BrowserRouter, useRoutes } from "react-router-dom";
import { CrearTarea } from "./pages/CrearTarea";
import { ApiProvider } from "./context/ApiContext";
import { Proyectos } from "./pages/Proyectos";
import { Eliminartarea } from "./pages/Eliminartarea";
import {Detalle}from"./pages/Detalle"
import {Edit}from"./pages/Edit"
function App() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CrearTarea />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/eliminar/:id" element={<Eliminartarea />} />
          <Route path="/proyectos/detalle/:id" element={<Detalle />} />
          <Route path="/proyectos/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>

  );
}

export default App;
