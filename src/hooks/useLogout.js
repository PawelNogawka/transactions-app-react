import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT" });
      if (!isCancelled) {
        setError(null);
        setIsLoading(false);
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

  return { logout, isLoading, error };
};
