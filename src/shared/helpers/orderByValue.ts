
export const orderObjectListByKey = <T>( list: T[], key: keyof T ): T[] => {
  return list.sort((a: T, b: T) => parseInt(String(b[key])) - parseInt(String(a[key])) );
}