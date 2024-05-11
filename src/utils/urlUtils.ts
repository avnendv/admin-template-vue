/**
 * Add the object as a parameter splicing to the URL
 * @param baseUrl the url that needs splicing
 * @param obj parameter object
 * @returns {string} spliced object
 * example:
 * let obj = {a: '3', b: '4'}
 * setObjToUrlParams('www.baidu.com', obj)
 * ==>www.baidu.com?a=3&b=4
 */

type ObjectType = {
  [key: string]: string | number
}

export function setObjToUrlParams(baseUrl: string, obj: ObjectType): string {
  let parameters = ''
  let url = ''
  for (const key in obj) {
    parameters += `${key}=${encodeURIComponent(obj[key])}&`
  }
  parameters = parameters.replace(/&$/, '')
  if (/\?$/.test(baseUrl)) {
    url = baseUrl + parameters
  } else {
    url = baseUrl.replace(/\/?$/, '?') + parameters
  }
  return url
}

/**
 * Replace repeated forward slashes in the path with a string separated by a single slash
 * @param path The path to process
 * @returns {string} the result after deduplication
 */
export const uniqueSlash = (path: string) => path.replace(/(https?:\/)|(\/)+/g, '$1$2')
// Safari does not support the following regex (reverse negative lookup) shit!
// export const uniqueSlash = (path: string) => path.replace(/(?<!:)\/{2,}/g, '/');
