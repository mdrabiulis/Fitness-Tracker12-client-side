import axios from "axios";
import { useNavigate } from "react-router-dom";
import useFirebase from "../Firebase/useFirebase";

const adminData = axios.create({
  baseURL: "https://assignment12-server-side-em9z42ifs.vercel.app",
});

const useAdmin = () => {
  const { usersignOut } = useFirebase();
  const navigate = useNavigate();
  adminData.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await usersignOut();
        navigate("/");
      }
      return Promise.reject(error);
    }
  );
  return adminData;
};

export default useAdmin;
