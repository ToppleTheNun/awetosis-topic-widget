export const capitalize = (str: string): string => {
  if (str.length === 0) {
    return str;
  }
  return `${str.substring(0, 1).toUpperCase()}${str
    .substring(1)
    .toLowerCase()}`;
};
