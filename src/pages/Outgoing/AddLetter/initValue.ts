import { ICreatedLetter } from "../../../interfaces/letter";

export const INIT_ADD_LETTER: ICreatedLetter = {
  date: Date.now(),
  outNumber: "",
  sender: "",
  receiver: "",
  letterType: "",
  inNumber: "",
  dateOrder: "",
  executor: "",
  letterTitle: "",
  ResponseToIncoming: "",
  appendFile: "",
  file: new Blob(),
};
