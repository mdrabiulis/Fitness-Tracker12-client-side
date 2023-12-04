import { Link } from "react-router-dom";
import img from "../../assets/404/404.gif";
const ErrorPages = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <Link to={"/"}>
        <button className=" mt-20 bg-[#F9A31C] p-1 md:p-2 rounded-md text-white ">
          Go Home
        </button>
      </Link>
      <img src={img} alt="" />
    </div>
  );
};

export default ErrorPages;
