
export const orderObjectListByKey = <T>( list: T[], key: keyof T ): T[] | null => {
  if( ! list || list.length === 0 ) return null;
  return list.sort((a: T, b: T) => parseInt(String(b[key])) - parseInt(String(a[key])) );
}