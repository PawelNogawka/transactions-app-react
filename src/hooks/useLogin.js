import React, { useState ,useEffect} from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [loginIsLoading, setLoginIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {dispatch} = useAuthContext()

  const login = async (email, password) => {
    setLoginError(null);
    setLoginIsLoading(true);
    try {
      const response = await projectAuth.signInWithEmailAndPassword(
        email,
        password
      );


     dispatch({type:'LOGIN', payload:response.user})

     if (!isCancelled) {
      setLoginIsLoading(false);
      setLoginError(null);
    }
    } catch (error) {
      if (!isCancelled) {
        setLoginError(error.message);
        setLoginIsLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);


  return { loginIsLoading , loginError, login };
};
