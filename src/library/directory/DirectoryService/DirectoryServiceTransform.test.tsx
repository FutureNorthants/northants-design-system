import { transformAge } from './DirectoryServiceTransform';

describe('DirectoryServiceTransform', () => {
  describe('transformAge', () => {
    const ageDataSet = [
      { age: 25, ageInMonths: false, expected: '25 years' },
      { age: 35, ageInMonths: true, expected: '35 months' },
      { age: 36, ageInMonths: true, expected: '36 months' },
      { age: 37, ageInMonths: true, expected: '3 years and 1 month' },
      { age: 38, ageInMonths: true, expected: '3 years and 2 months' },
      { age: 0, ageInMonths: true, expected: '0' },
      { age: 47, ageInMonths: true, expected: '3 years and 11 months' },
      { age: 48, ageInMonths: true, expected: '4 years' },
    ];

    it.each(ageDataSet)(
      'should return the correctly formatted age ($age, $ageInMonths, $expected)',
      ({ age, ageInMonths, expected }) => {
        expect(transformAge(age, ageInMonths)).toBe(expected);
      }
    );
  });
});
