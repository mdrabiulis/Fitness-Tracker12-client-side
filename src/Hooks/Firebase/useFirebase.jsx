import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";


const useFirebase = () => {
    const authContext = useContext(AuthContext)
     return authContext
};

export default useFirebase;