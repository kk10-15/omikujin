export const getToday = (): string => {
  return new Date().toISOString().split('T')[0];
};
