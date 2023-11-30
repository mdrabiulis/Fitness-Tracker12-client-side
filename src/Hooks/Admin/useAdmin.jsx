import axios from "axios";

const adminData = axios.create({
  baseURL: "http://localhost:5000",
});

const useAdmin = () => {
  return adminData;
};

export default useAdmin;
