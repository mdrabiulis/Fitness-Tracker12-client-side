import axios from "axios";


const userData = axios.create({
    baseURL: "http://localhost:5000",
  });
const useUser = () => {
    return userData
};

export default useUser;