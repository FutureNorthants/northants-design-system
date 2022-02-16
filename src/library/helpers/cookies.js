export const cookieName = 'fn-cookie';

export const getCookie = (name) => {
  if (typeof document === 'undefined') return '';

  let dc = document.cookie;
  let prefix = name + '=';

  let begin = dc.indexOf(prefix);
  if (begin == -1) return null;
  var end = dc.indexOf(';', begin);
  if (end == -1) end = dc.length;

  return decodeURI(dc.substring(begin + prefix.length, end));
};

/**
 * Were cookies accepted by the user, or overridden by the passed param?
 * 
 * @param cookiesAcceptedOverride boolean | null | undefined
 * @returns boolean
 */
export const wereCookiesAccepted = (cookiesAcceptedOverride) => {
  if (typeof cookiesAcceptedOverride === 'boolean') {
    return cookiesAcceptedOverride;
  }

  const myCookie = getCookie(cookieName);
  if (myCookie !== null) {
    return myCookie.includes('"cookiesAccepted":true');
  }

  return false;
};
