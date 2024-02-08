import { getRequest, getRequestParams } from "@/modules/auth/ApiCaller";
import { useQuery } from "@tanstack/react-query";
import { useHandleTableRemoteChange } from "../useTableParams";
import { ITablePaginationFunction } from "@/@types/tableInterface";
import { IBaseQueryPArams } from "@/@types/baseInterface";
import { ParseQueryParams, parseQueryParams } from "@/utils/parseQueryParam";
import { GetStarshipResponse, GetStarshipResponseData } from "@/api/responses/starship";

type useGetStarshipsProps = {
  params?: IBaseQueryPArams;
  setTableParams?: ITablePaginationFunction;
};
export const useGetStarships = ({ setTableParams, params }: useGetStarshipsProps) => {
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ["useGetStarship", { params }],
    queryFn: () =>
      getRequestParams<IBaseQueryPArams, GetStarshipResponse>({
        url: "starships",
        params: parseQueryParams(params as unknown as ParseQueryParams) as unknown as IBaseQueryPArams,
      }),
  });

  useHandleTableRemoteChange({
    setTableParams,
    isSuccess,
    meta: { count: data?.count || 0, next: data?.next || "", previous: data?.previous || null },
  });

  return {
    starshipsList: data?.results || [],
    fetchingStarship: isFetching,
  };
};

type useGetStarshipProps = {
  id: string;
};
export const useGetStarship = ({ id }: useGetStarshipProps) => {
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ["useGetStarship"],
    queryFn: () =>
      getRequest<GetStarshipResponseData>({
        url: `starships/${id}`,
      }),
    enabled: !!id,
  });

  return {
    starships: data,
    isSuccess,
    fetchingStarship: isFetching,
  };
};
