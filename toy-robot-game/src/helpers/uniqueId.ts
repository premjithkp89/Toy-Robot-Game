export const getKeyFromIndex = (rowNum: any, columnNum: any): string => {
  return `${6 - rowNum}-${6 - columnNum}`;
};
