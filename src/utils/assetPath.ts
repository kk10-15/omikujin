export const assetPath = (relativePath: string) => {
  return `${import.meta.env.BASE_URL}${relativePath}`;
};
