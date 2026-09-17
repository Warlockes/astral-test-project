export const getCurrentAge = (date: string) =>
  Math.floor((Date.now() - new Date(date).getTime()) / 31557600000);
