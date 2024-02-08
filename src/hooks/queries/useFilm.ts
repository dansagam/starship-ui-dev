import { getRequest, getRequestParams } from "@/modules/auth/ApiCaller";
import { useQuery } from "@tanstack/react-query";
import { useHandleTableRemoteChange } from "../useTableParams";
import { ITablePaginationFunction } from "@/@types/tableInterface";
import { IBaseQueryPArams } from "@/@types/baseInterface";
import { ParseQueryParams, parseQueryParams } from "@/utils/parseQueryParam";
import { GetFilmReponseTypeResponse, GetFilmReponseTypeResponseData } from "@/api/responses/films";

type useGetFilmsProps = {
  params?: IBaseQueryPArams;
  setTableParams?: ITablePaginationFunction;
};
export const useGetFilms = ({ setTableParams, params }: useGetFilmsProps) => {
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ["useGetFilms", { params }],
    queryFn: () =>
      getRequestParams<IBaseQueryPArams, GetFilmReponseTypeResponse>({
        url: "films",
        params: parseQueryParams(params as unknown as ParseQueryParams) as unknown as IBaseQueryPArams,
      }),
    enabled: true,
  });

  useHandleTableRemoteChange({
    setTableParams,
    isSuccess,
    meta: { count: data?.count || 0, next: data?.next || "", previous: data?.previous || null },
  });

  return {
    filmList: data?.results || [],
    fetchingPeople: isFetching,
  };
};

type useGetFilmDetailProps = {
  id: string;
};
export const useGetFilmDetail = ({ id }: useGetFilmDetailProps) => {
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ["useGetFilmDetail"],
    queryFn: () =>
      getRequest<GetFilmReponseTypeResponseData>({
        url: `films/${id}`,
      }),
    enabled: !!id,
  });

  return {
    film: data,
    isSuccess,
    fetchingPeople: isFetching,
  };
};
