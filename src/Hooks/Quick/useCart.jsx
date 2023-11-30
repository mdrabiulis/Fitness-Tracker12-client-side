import { useQuery } from "@tanstack/react-query";
// import useAdmin from "../Admin/useAdmin";


const useCart = () => {
    // const admindata = useAdmin()
    const {data: cart=[]}=useQuery({
        queryKey:['cart'],
        queryFn: async ()=>{
            // const res = await admindata.get('/')
            

        }
    })
    return (
        <div>
            
        </div>
    );
};

export default useCart;