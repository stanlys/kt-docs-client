export interface IPostLetter {
  id: string;
  date: number;
  trackNumber: string;
  letterType: string;
  postman: string;
  receiver: string;
  address: string;
  sender: string;
}

export type ICreatedPostLetter = Omit<IPostLetter, "id">;

export const INITIAL_POST_LETTER: Array<IPostLetter> = [
  {
    id: "",
    date: 0,
    trackNumber: "",
    letterType: "",
    postman: "",
    receiver: "",
    address: "",
    sender: "",
  },
];

export interface ILoadPostLetter {
  isLoading: boolean;
  error: string | null;
  postLetters: Array<IPostLetter>;
}
