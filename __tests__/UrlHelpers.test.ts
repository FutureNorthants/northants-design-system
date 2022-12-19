import {
  handleParams,
  removeParams,
  removeValueFromParam,
  countParams,
  getParamValue,
  getDropDownValues,
  getCheckboxValues,
  deSlug,
} from '../src/library/helpers/url-helpers';

describe('Url Helpers', () => {
  beforeEach(() => {
    // Mock window.location
    delete global.window.location;
    global.window = Object.create(window);
    global.window.location = {
      ancestorOrigins: null,
      hash: '',
      host: 'dummy.com',
      port: '123',
      protocol: 'http:',
      hostname: 'dummy.com',
      href: 'http://dummy.com?page=1&name=testing',
      origin: 'http://dummy.com',
      pathname: '',
      search: '',
      assign: () => {},
      reload: () => {},
      replace: () => {},
      toString: () => {
        return global.window.location.href;
      },
    };
  });

  describe('handleParams', () => {
    it('adds a param to the url', () => {
      const newParams = [
        {
          key: 'services',
          value: 'business-services',
        },
      ];
      handleParams('test-path', newParams);

      expect(window.location.href).toEqual('http://dummy.com/test-path?page=1&name=testing&services=business-services');
    });

    it('adds multiple params to the url', () => {
      const newParams = [
        {
          key: 'services',
          value: 'business-services',
        },
        {
          key: 'type',
          value: 'article',
        },
      ];
      handleParams('test-path', newParams);

      expect(window.location.href).toEqual(
        'http://dummy.com/test-path?page=1&name=testing&services=business-services&type=article'
      );
    });

    it('removes a param from the url', () => {
      handleParams('test-path', [], ['page']);

      expect(window.location.href).toEqual('http://dummy.com/test-path?name=testing');
    });
  });

  describe('removeParams', () => {
    it('removes the page parameter', () => {
      removeParams(['page']);

      expect(window.location.href).toEqual('http://dummy.com/?name=testing');
    });

    it('removes the name parameter', () => {
      removeParams(['name']);

      expect(window.location.href).toEqual('http://dummy.com/?page=1');
    });
  });

  /**
   * Uses URL encoded ASCII code `%2C` instead of `,` to separate multiple params
   */
  describe('removeValueFromParam', () => {
    it('removes a specific value from a given param', () => {
      window.location.href = 'http://dummy.com/?page=1&name=testing%2Ctest%2Ctest2';

      removeValueFromParam('name', 'testing');

      expect(window.location.href).toEqual('http://dummy.com/?page=1&name=test%2Ctest2');
    });
  });

  describe('countParams', () => {
    it('counts the parameter', () => {
      expect(countParams(['page'])).toEqual(1);
    });

    it('counts the parameters', () => {
      expect(countParams(['page', 'name'])).toEqual(2);
    });

    it('only counts the matching parameters', () => {
      expect(countParams(['page', 'not-in-url'])).toEqual(1);
    });
  });

  describe('getParamValue', () => {
    it('gets a parameter value', () => {
      expect(getParamValue('name')).toEqual(['testing']);
    });

    it('returns empty for no match', () => {
      expect(getParamValue('not-in-url')).toEqual([]);
    });
  });

  describe('getDropDownValues', () => {
    it('gets the drop down values', () => {
      expect(getDropDownValues('name')).toEqual(['testing']);
    });

    it('gets multiple drop down values as csv', () => {
      window.location.href = 'http://dummy.com/?page=1&name=testing%2Ctest%2Ctest2';
      expect(getDropDownValues('name')).toEqual(['testing,test,test2']);
    });
  });

  describe('getCheckboxValues', () => {
    it('gets the checkbox values', () => {
      expect(getCheckboxValues('name')).toEqual(['testing']);
    });

    it('gets multiple checkbox values as array', () => {
      window.location.href = 'http://dummy.com/?page=1&name=testing%2Ctest%2Ctest2';
      expect(getCheckboxValues('name')).toEqual(['testing', 'test', 'test2']);
    });
  });

  describe('deSlug', () => {
    it('deslugs a string', () => {
      expect(deSlug('business-services-and-accounts')).toBe('Business Services And Accounts');
    });

    it('uppercases the first letter of each word', () => {
      expect(deSlug('this-will-be-title-formatted')).toBe('This Will Be Title Formatted');
    });
  });
});
