import axios from "axios";

const userData = axios.create({
  baseURL: "https://assignment12-server-side-em9z42ifs.vercel.app",
});
const useUser = () => {
  return userData;
};

export default useUser;
