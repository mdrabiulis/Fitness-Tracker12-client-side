import { useQuery } from "@tanstack/react-query";
import useUser from "../User500/useUser";

const useTestimonials = () => {
  const userData = useUser();
  const {refetch, data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await userData("/reviews");
      return res.data;
    },
  });
  return [reviews, refetch];
};

export default useTestimonials;
