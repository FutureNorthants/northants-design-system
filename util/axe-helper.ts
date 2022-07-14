import { configureAxe } from 'jest-axe';

const axe = configureAxe({
  resultTypes: ['inapplicable', 'passes', 'incomplete', 'violations'],
});

export default axe;
