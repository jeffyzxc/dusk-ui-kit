import Cookies from "js-cookie";

export const getCookie = (name) => {
  return Cookies.get(name);
};

export const setCookie = (cookieName, fields, cookieConfig) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + cookieConfig.expires);
  const options = Object.assign({}, cookieConfig, { expires });
  Cookies.set(cookieName, JSON.stringify(fields), options);
};

export const deleteCookie = (cookieName, cookieConfig) => {
  const { path } = cookieConfig;
  Cookies.remove(cookieName, Object.assign({}, path ? { path } : {}));
};

export function getCookieDomain(url = document.location.href) {
  if (url.indexOf("localhost") > -1) {
    return "localhost";
  }

  const re = /^(https?:\/\/)?([\w]+\.)*(([\w]+\.)([\w]+))/gi;

  const res = re.exec(url);
  const domain = res[3];

  console.log(domain);

  return domain;
}
