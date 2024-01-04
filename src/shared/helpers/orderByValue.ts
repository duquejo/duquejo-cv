
/**
 * The function `orderObjectListByKey` takes in a list of objects and a key, and returns the list
 * sorted in _descending_ order based on the values of the specified key.
 * @param {T[]} list - An array of objects that you want to order.
 * @param key - The `key` parameter is the property name of the objects in the `list` array that you
 * want to use for sorting. It should be a valid key of the objects in the array.
 * @returns The function `orderObjectListByKey` returns an array of objects (`T[]`) sorted in
 * descending order based on the value of a specified key (`keyof T`). The return type is either the
 * sorted array or `null` if the input list is empty or null.
 */
export const orderObjectListByKey = <T>( list: T[], key: keyof T ): T[] | null => {
  if( ! list || list.length === 0 ) return null;
  return list.sort((a: T, b: T) => parseInt(String(b[key])) - parseInt(String(a[key])) );
}