import { useQuery } from "@tanstack/react-query";
import useUser from "../../Hooks/User500/useUser";

const useClasses = () => {
  const userData = useUser();
  const {refetch, data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await userData.get("/classes");
      return res.data;
    },
  });
  return [classes,refetch];
};

export default useClasses;
