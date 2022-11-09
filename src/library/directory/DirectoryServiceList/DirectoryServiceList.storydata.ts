import { DirectoryCategory } from './DirectoryServiceList.types';

export const LocalOfferTaxonomy: DirectoryCategory = {
  label: 'Select a category',
  vocabulary: 'localOffer',
  singleSelection: true,
  options: [
    {
      id: 'localOffer:1',
      name: 'Adulthood',
      vocabulary: 'localOffer',
      checked: false,
    },
    {
      id: 'localOffer:2',
      name: 'Early years',
      vocabulary: 'localOffer',
      checked: false,
    },
    {
      id: 'localOffer:3',
      name: 'Education',
      vocabulary: 'localOffer',
      checked: false,
    },
    {
      id: 'localOffer:4',
      name: 'Finance and funding',
      vocabulary: 'localOffer',
      checked: false,
    },
  ],
};

export const SpecialNeedTaxonomy: DirectoryCategory = {
  label: 'For people with/who are',
  vocabulary: 'specialNeeds',
  singleSelection: false,
  options: [
    {
      id: 'specialNeeds:1',
      name: 'ASD (Autistic Spectrum Disorder)',
      vocabulary: 'specialNeeds',
      checked: false,
    },
    {
      id: 'specialNeeds:2',
      name: 'Communication and interaction difficulties',
      vocabulary: 'specialNeeds',
      checked: false,
    },
    {
      id: 'specialNeeds:3',
      name: 'Dyscalculia',
      vocabulary: 'specialNeeds',
      checked: false,
    },
    {
      id: 'specialNeeds:4',
      name: 'Dyslexia',
      vocabulary: 'specialNeeds',
      checked: false,
    },
  ],
};

export const ExampleDirectoryCategories: DirectoryCategory[] = [LocalOfferTaxonomy, SpecialNeedTaxonomy];
