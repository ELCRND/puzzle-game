export const getRandomArr = () => {
  const arr = Array.from({ length: 16 }, (_, i) => i + 1);

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return [
    arr.slice(0, 4),
    arr.slice(4, 8),
    arr.slice(8, 12),
    arr.slice(12, 16),
  ];
};

export const getEmptyXY = (arr: Array<number[]>, number: number): number[] => {
  let emptyX = 1;
  let emptyY = 1;

  arr.forEach((line, y) => {
    line.forEach((item, x) => {
      if (item === number) {
        emptyX = x;
        emptyY = y;
      }
    });
  });
  return [emptyX, emptyY];
};

export const canMoveItem = (
  emptyX: number,
  emptyY: number,
  x: number,
  y: number
) => {
  if (emptyX === x && Math.abs(emptyY - y) === 1) return true;
  if (emptyY === y && Math.abs(emptyX - x) === 1) return true;
  return false;
};

export const correctArr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
