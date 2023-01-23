export const INIT_ADD_LETTER = {
  date: Date.now(),
  trackNumber: "",
  postman: "",
  receiver: "",
  address: "",
  sender: "",
};

export interface AddLetter {
  date: Date;
  trackNumber: string;
  postman: string;
  receiver: string;
  address: string;
  sender: string;
}
