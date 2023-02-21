import React, { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      await response.user.updateProfile({ displayName: displayName });

      dispatch({ type: "SIGNUP", payload: response.user });

      if (!isCancelled) {
        setIsLoading(false);
        setError(null);
      }
    } catch (error) {
      if (!isCancelled) {
        setError(error.message);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { isLoading, error, signup };
};

export default useSignup;
