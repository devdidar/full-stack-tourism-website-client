import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Home/Login/Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const handleSignInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider).finally(setIsLoading(false));
  };
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  const handleLogOut = () => {
    setIsLoading(true);
    signOut(auth, googleProvider)
      .then((res) => {
        setUser({});
      })
      .finally(setIsLoading(false));
  };
  return {
    user,
    handleSignInUsingGoogle,
    handleLogOut,
    isLoading,
  };
};

export default useFirebase;
