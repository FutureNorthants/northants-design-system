import { DirectoryCategory } from './DirectoryServiceList.types';

export const LocalOfferTaxonomy: DirectoryCategory = {
  label: 'Select a category',
  vocabulary: 'localOffer',
  options: [
    {
      id: 'localOffer:1',
      name: 'Adulthood',
      vocabulary: 'localOffer',
    },
    {
      id: 'localOffer:2',
      name: 'Early years',
      vocabulary: 'localOffer',
    },
    {
      id: 'localOffer:3',
      name: 'Education',
      vocabulary: 'localOffer',
    },
    {
      id: 'localOffer:4',
      name: 'Finance and funding',
      vocabulary: 'localOffer',
    },
  ],
};

export const SpecialNeedTaxonomy: DirectoryCategory = {
  label: 'For people with/who are',
  vocabulary: 'specialNeeds',
  options: [
    {
      id: 'specialNeeds:1',
      name: 'ASD (Autistic Spectrum Disorder)',
      vocabulary: 'specialNeeds',
    },
    {
      id: 'specialNeeds:2',
      name: 'Communication and interaction difficulties',
      vocabulary: 'specialNeeds',
    },
    {
      id: 'specialNeeds:3',
      name: 'Dyscalculia',
      vocabulary: 'specialNeeds',
    },
    {
      id: 'specialNeeds:4',
      name: 'Dyslexia',
      vocabulary: 'specialNeeds',
    },
  ],
};

export const ExampleDirectoryCategories: DirectoryCategory[] = [LocalOfferTaxonomy, SpecialNeedTaxonomy];
