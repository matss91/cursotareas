import { useState } from "react";

// Hook personalizado para manejar formularios
export const UseForm = (initialState = {}) => {
    const [formValues, setFormValues] = useState(initialState);

    const handleInputChange = (e) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    };

    const reset = () => {
        setFormValues(initialState);
    };

    return {
        formValues,
        handleInputChange,
        reset,
    };
};