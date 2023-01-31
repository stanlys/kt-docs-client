export interface ILetter {
  _id: string;
  date: number;
  outNumber: string;
  inNumber: string;
  dateOrder: string;
  letterType: string;
  receiver: string;
  sender: string;
  executor: string;
  letterTitle: string;
  ResponseToIncoming: string;
}

export type ICreatedLetter = Omit<ILetter, "_id">;

export interface ILoadLetter {
  isLoading: boolean;
  error: string | null;
  letters: Array<ILetter>;
}