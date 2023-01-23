export const INIT_ADD_LETTER = {
  date: Date.now(),
  trackNumber: "",
  receiver: "",
  address: "",
  sender: "",
};

export interface AddLetter {
  date: Date;
  trackNumber: string;
  receiver: string;
  address: string;
  sender: string;
};