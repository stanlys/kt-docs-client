export const API_ENDPOINTS = {
  BASE: "http://localhost:3006",
  LETTER: "letter",
  LETTER_BY_ID(id: string): string {
    return this.LETTER + `/${id}`;
  },
  INCOMING: "incoming",
  OUTGOING: "outgoing",
};
