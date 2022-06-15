import { cookieName, getCookie, wereCookiesAccepted } from '../src/library/helpers/cookies';

describe('cookie helper', () => {
  describe('cookieName', () => {
    it('gets the cookie name', () => {
      expect(cookieName).toEqual('fn-cookie');
    });
  });

  describe('getCookie', () => {
    it('gets the cookie', () => {
      const cookie = {
        cookiesAccepted: true,
      };
      document.cookie = `${cookieName}=${JSON.stringify(cookie)};path=/`;

      expect(getCookie(cookieName)).toEqual(`{"cookiesAccepted":true}`);
    });
  });

  describe('wereCookiesAccepted', () => {
    it('returns false if no cookie or override set for cookie check', () => {
      // Expire any previous cookie set
      document.cookie = cookieName + '=; Max-Age=0;';
      expect(wereCookiesAccepted(null)).toEqual(false);
    });

    it('checks if cookies were accepted', () => {
      const cookie = {
        cookiesAccepted: true,
      };
      document.cookie = `${cookieName}=${JSON.stringify(cookie)};path=/`;

      expect(wereCookiesAccepted(null)).toEqual(true);
    });

    it('returns the override when boolean for cookie check', () => {
      const cookie = {
        cookiesAccepted: true,
      };
      document.cookie = `${cookieName}=${JSON.stringify(cookie)};path=/`;

      expect(wereCookiesAccepted(false)).toEqual(false);
    });
  });
});
