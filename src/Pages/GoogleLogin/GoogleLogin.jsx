import Swal from "sweetalert2";
import useFirebase from "../../Hooks/Firebase/useFirebase";
import { FaGoogle } from "react-icons/fa";
import useUser from "../../Hooks/User500/useUser";

const GoogleLogin = () => {
  const userData = useUser();
  const { loginUserGooglrEmail } = useFirebase();

  const googleEmailLogIn = () => {
    loginUserGooglrEmail()
      .then((result) => {
        console.log(result.user);
        const role = "member";
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          role,
        };

        userData.post("/user", userInfo).then((res) => {
          res.data;
          // console.log(res.data);
        });

        Swal.fire({
          icon: "success",
          title: "Successful...",
          text: "",
        });
      })

      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div className="mx-4 px-4">
      <div className="divider">Or</div>
      <button
        onClick={googleEmailLogIn}
        className="btn hover:text-white bg-[#F9A31C]  hover:bg-[#FF5D28] w-full"
      >
        <FaGoogle className="w-8 h-8 text-white"></FaGoogle>
        Continue With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
