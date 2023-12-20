export const getId = (url: string): string => {
  const parts = url.split('/');
  const number = 2;

  return parts[parts.length - number];
};
