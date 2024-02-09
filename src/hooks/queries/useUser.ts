import { getRequestDetail } from "@/modules/auth/ApiCaller";
import { useQuery } from "@tanstack/react-query";

type useGetFilmDetailProps = {
  id: string;
};
export const useGetuserDetail = ({ id }: useGetFilmDetailProps) => {
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ["useGetFilmDetailProps"],
    queryFn: () =>
      getRequestDetail<UserDetail>({
        url: `teams/${id}`,
      }),
    enabled: !!id,
  });

  return {
    user: data,
    isSuccess,
    fetchingPeople: isFetching,
  };
};
