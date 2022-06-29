import { ParishAPIResponse, ParishBands } from './CouncilTaxAlphabeticalDirectory.types';

export const exampleBands: ParishBands = {
  a: '1319.87',
  b: '1539.83',
  c: '1759.82',
  d: '1979.79',
  e: '2419.75',
  f: '2859.68',
  g: '3299.66',
  h: '3959.58',
};

export const exampleParishes: ParishAPIResponse[] = [
  {
    banding_parish: 'Abthorpe',
    bands: exampleBands,
    official_parish: 'Abthorpe CP',
    code: 'E04006798',
    unitary: 'West',
  },
  {
    banding_parish: 'Adstone',
    bands: exampleBands,
    official_parish: 'Adstone CP',
    code: 'E04006799',
    unitary: 'West',
  },
  {
    banding_parish: 'Brixworth',
    bands: exampleBands,
    official_parish: 'Brixworth CP',
    code: 'E04006799',
    unitary: 'West',
  },
  {
    banding_parish: 'Canons Ashby',
    bands: exampleBands,
    official_parish: 'Canons Ashby CP',
    code: 'E04006799',
    unitary: 'West',
  },
];
