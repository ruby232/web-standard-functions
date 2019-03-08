const regExp = / +$/g;

export const rtrim = (s: string): string => {
  return s.replace(regExp, "");
};
