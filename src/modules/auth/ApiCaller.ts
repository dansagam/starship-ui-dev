import Api from "@/api/Api";
import { TDateISO } from "@/base";

export type ApiObjType = Record<string, string | undefined | number | string[] | number[] | TDateISO | TDateISO[]>;
interface GetFuncProp<T extends ApiObjType> {
  url: string;
  params: T | undefined;
}

export const getRequestParams = async <T extends ApiObjType, R>({ url, params }: GetFuncProp<T>) => {
  const response = await Api.get<R>(url, { params });

  const { data: availData } = response;

  return availData;
};

export const getRequest = async <R>({ url }: { url: string }) => {
  const response = await Api.get<R>(url);

  const { data: availData } = response;

  return availData;
};
