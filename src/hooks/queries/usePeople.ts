import { getRequest, getRequestParams } from "@/modules/auth/ApiCaller";
import { useQuery } from "@tanstack/react-query";
import { useHandleTableRemoteChange } from "../useTableParams";
import { ITablePaginationFunction } from "@/@types/tableInterface";
import { GetPeopleResponse, GetPeopleResponseData } from "@/api/responses/people";
import { IBaseQueryPArams } from "@/@types/baseInterface";
import { ParseQueryParams, parseQueryParams } from "@/utils/parseQueryParam";

type UseGetPeopleProps = {
  params?: IBaseQueryPArams;
  setTableParams?: ITablePaginationFunction;
};
export const useGetPeople = ({ setTableParams, params }: UseGetPeopleProps) => {
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ["useGetPeople", { params }],
    queryFn: async () =>
      getRequestParams<IBaseQueryPArams, GetPeopleResponse>({
        url: "people",
        params: parseQueryParams(params as unknown as ParseQueryParams) as unknown as IBaseQueryPArams,
      }),
  });

  useHandleTableRemoteChange({
    setTableParams,
    isSuccess,
    meta: { count: data?.count || 0, next: data?.next || "", previous: data?.previous || null },
  });

  return {
    peopleList: data?.results || [],
    fetchingPeople: isFetching,
  };
};

type useGetPersonProps = {
  id: string;
};
export const useGetPerson = ({ id }: useGetPersonProps) => {
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ["useGetPerson"],
    queryFn: () =>
      getRequest<GetPeopleResponseData>({
        url: `people/${id}`,
      }),
    enabled: !!id,
  });

  return {
    person: data,
    isSuccess,
    fetchingPeople: isFetching,
  };
};
