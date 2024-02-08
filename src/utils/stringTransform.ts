/* eslint-disable func-names */
import { capitalize } from "lodash";

export const underscoreRemove = (str: string): string => {
  return str?.replace(/_/g, " ");
};

export const capitalizeFirstChar = (str: string): string => {
  if (str) {
    const arr = [...str];
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
  }
  return "";
};

export const capitalizeWord = (str: string): string => {
  const re = /(\b[a-z](?!\s))/g;
  if (str) {
    return str.toLowerCase().replace(re, (x) => capitalize(x));
  }
  return "";
};

export const isEmptyString = (str: string) => {
  // remove empty spaces in str
  const removeEmptySpaces = str.replace(/\s/g, "");
  return removeEmptySpaces.length === 0;
};

export const underSCoreCapitalizeWord = (str: string) => {
  if (str) {
    const removeWOrd = underscoreRemove(str);
    return capitalizeWord(removeWOrd);
  }
  return "";
};

export const truncateString = (string: string, maxLength = 15): string =>
  string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

export const camelCaseReplacement = (str: string) => {
  const transfromStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  return capitalizeWord(transfromStr);
};
