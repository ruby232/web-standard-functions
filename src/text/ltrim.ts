const regExp = /^ +/g;

export const ltrim = (s: string): string => {
  return s.replace(regExp, "");
};
