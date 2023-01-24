export interface IPostLetter {
  id: string;
  date: number;
  outNumber: string;
  postman: string;
  inNumber: string;
  dateOrder: string;
  letterType: string;
  receiver: string;
  sender: string;
  address: string;
  letterTitle: string;
}

export type ICreatedPostLetter = Omit<IPostLetter, "id">;
