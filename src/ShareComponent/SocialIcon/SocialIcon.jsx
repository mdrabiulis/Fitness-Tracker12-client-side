import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";




const SocialIcon = () => {
    return (
        <div className="flex justify-center gap-6 mb-5 text-[#FF5D28] ">
            <Link><FaFacebook className="w-8 h-8"></FaFacebook></Link>
            <Link><FaTwitter className="w-8 h-8"></FaTwitter></Link>
            <Link><FaInstagram  className="w-8 h-8"></FaInstagram></Link>
            
            
        </div>
    );
};

export default SocialIcon;