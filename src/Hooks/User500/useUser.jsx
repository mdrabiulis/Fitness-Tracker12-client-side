import axios from "axios";

const userData = axios.create({
  baseURL: "https://fitness-tracker12-server-side.vercel.app",
});
const useUser = () => {
  return userData;
};

export default useUser;
