import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, senha) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://sispet-app.adaptable.app/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, senha })
          });

          const json = await response.json()

          if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
          }
          if (response.ok) {
            // salva o usuário no local storage
            localStorage.setItem('user', JSON.stringify(json))

            // atualiza o auth context
            dispatch({type: 'LOGIN', payload: json})

            // atualiza o loading state
            setIsLoading(false)
          }
    };
    return { signup, isLoading, error }
};