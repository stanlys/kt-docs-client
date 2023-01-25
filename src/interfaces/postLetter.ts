export interface IPostLetter {
  id: string;
  date: number;
  trackNumber: string;
  letterType: string
  postman: string;
  receiver: string;
  address: string;
  sender: string;
}

export type ICreatedPostLetter = Omit<IPostLetter, "id">;
