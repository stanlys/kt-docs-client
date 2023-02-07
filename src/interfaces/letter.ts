import { Dayjs } from "dayjs";
import { string } from "prop-types";

export interface ILetter {
  _id: string;
  date: number;
  outNumber: string;
  sender: string;
  receiver: string;
  letterType: string;
  inNumber: string;
  dateOrder: Dayjs;
  executor: string;
  letterTitle: string;
  ResponseToIncoming: string;
  appendFile?: string;
  file: Blob;
}

export type ICreatedLetter = Omit<ILetter, "_id">;

export interface ILoadLetter {
  isLoading: boolean;
  error: string | null;
  letters: Array<ILetter>;
}
