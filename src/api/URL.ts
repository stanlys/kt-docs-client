export const URL = {
  BASE: "http://localhost:3005",
  LETTER: "letter",
  LETTER_BY_ID(id: string): string {
    return this.LETTER + `/${id}`;
  },
  INCOMING: "incoming",
};
