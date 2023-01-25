import axios, { AxiosResponse } from "axios";
import { ICreatedPostLetter, IPostLetter } from "../interfaces/postLetter";
import { URL } from "./URL";

const axiosInstance = axios.create({
  baseURL: URL.BASE,
  timeout: 1000,
});

export const getAllLetters = async (): Promise<Array<IPostLetter>> => {
  const data: AxiosResponse<
    Array<IPostLetter>,
    unknown
  > = await axiosInstance.get(URL.LETTER);
  return data.data;
};

export const getLetter = async (id: string): Promise<IPostLetter> => {
  const data: AxiosResponse<IPostLetter, unknown> = await axiosInstance.get(
    URL.LETTER + `/${id}`
  );
  return data.data;
};

export const createLetter = async (
  letter: ICreatedPostLetter
): Promise<string> => {
  const data: AxiosResponse<ICreatedPostLetter, unknown> =
    await axiosInstance.post(URL.LETTER, letter);
  return data.statusText;
};

export const deleteLetter = async (id: string): Promise<IPostLetter> => {
  const data: AxiosResponse<IPostLetter, unknown> = await axiosInstance.delete(
    URL.LETTER + `/${id}`
  );
  return data.data;
};
