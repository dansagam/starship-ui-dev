import { getRequest, getRequestParams } from "@/modules/auth/ApiCaller";
import { useQuery } from "@tanstack/react-query";
import { useHandleTableRemoteChange } from "../useTableParams";
import { ITablePaginationFunction } from "@/@types/tableInterface";
import { IBaseQueryPArams } from "@/@types/baseInterface";
import { ParseQueryParams, parseQueryParams } from "@/utils/parseQueryParam";
import { GetSpeciesResponse, GetSpeciesResponseData } from "@/api/responses/species";

type useGetSpeciesProps = {
  params?: IBaseQueryPArams;
  setTableParams?: ITablePaginationFunction;
};
export const useGetSpeciesList = ({ setTableParams, params }: useGetSpeciesProps) => {
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ["useGetSpecies", { params }],
    queryFn: () =>
      getRequestParams<IBaseQueryPArams, GetSpeciesResponse>({
        url: "species",
        params: parseQueryParams(params as unknown as ParseQueryParams) as unknown as IBaseQueryPArams,
      }),
  });

  useHandleTableRemoteChange({
    setTableParams,
    isSuccess,
    meta: { count: data?.count || 0, next: data?.next || "", previous: data?.previous || null },
  });

  return {
    speciesList: data?.results || [],
    fetchingSpecies: isFetching,
  };
};

type userGetSpeciesProps = {
  id: string;
};
export const useGetSpecies = ({ id }: userGetSpeciesProps) => {
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ["userGetSpecies"],
    queryFn: () =>
      getRequest<GetSpeciesResponseData>({
        url: `species/${id}`,
      }),
    enabled: !!id,
  });

  return {
    species: data,
    isSuccess,
    fetchingSpecies: isFetching,
  };
};
