import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await axios.get("http://localhost:8000/api/projects");
       
        setData(response);
        console.log(response)
        console.log(data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [data<=0]);

  return (
    <ApiContext.Provider value={{ data, loading, error,setData }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);