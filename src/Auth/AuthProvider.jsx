import PropTypes from "prop-types";
import {  createUserWithEmailAndPassword } from "firebase/auth";

import { createContext, useState } from "react";
import { auth } from "../Firebase/FirebaseConfig";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);



  const createUserWithEmail = (email, password) =>{
   return createUserWithEmailAndPassword(auth, email, password)
  }





  const userInformation = {
    user,
    setUser,
    createUserWithEmail,

  };

  return (
    <AuthContext.Provider value={userInformation}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
