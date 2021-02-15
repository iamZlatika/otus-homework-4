export const fetchField = async (height: number, width: number): Promise<boolean[][]> => {
  const response = await fetch(
    `http://my-json-server.typicode.com/iamZlatika/otus-homework-4/images/${height}X${width}`
  );
  if (response.ok) {
    return (await response.json()).field;
  }
  return emptyField(height, width);
};

export const emptyField = (height: number, width: number): boolean[][] => {
  return Array.from({ length: height }, () => new Array(width).fill(false));
};
