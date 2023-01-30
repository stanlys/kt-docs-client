const PORT = 3006;

export const API_ENDPOINTS = {
  BASE: `http://localhost:${PORT}`,
  LETTER: "letter",
  LETTER_BY_ID(id: string): string {
    return this.LETTER + `/${id}`;
  },
  INCOMING: "incoming",
  OUTGOING: "outgoing",
};
