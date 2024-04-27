import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const {
    isLoading,
    data: userData,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const user = userData?.data?.user;
  const token = userData?.data?.token;

  return {
    isLoading,
    user,
    token,
    isError,
  };
}
