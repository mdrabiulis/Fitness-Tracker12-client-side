import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../Hooks/Admin/useAdmin";
import useFirebase from "../../Hooks/Firebase/useFirebase";

const useAdminScc = () => {
  const { user } = useFirebase();
  const adminData = useAdmin();
  const { data: isAdmin=[] } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await adminData.get(`/users/admin/${user.email}`);
      console.log(res.data);
      return res.data.admin;
    },
  });
  return [isAdmin];
};

export default useAdminScc;
