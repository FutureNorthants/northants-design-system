export interface GoogleTranslateProps {
  /**
   * An optional default language
   */
  pageLanguage?: string;

  /**
   * Optional label text
   */
  label?: string;

  /**
   * Optionally set the dark background. Defaults to false
   */
  hasDarkBackground?: boolean;
}

// Add additional languages as needed
export const GoogleTranslateLanguages = [
  { label: 'Bengali', value: 'bn' },
  { label: 'English', value: 'en' },
  { label: 'Gujarati', value: 'gu' },
  { label: 'Lithuanian', value: 'lt' },
  { label: 'Polish', value: 'pl' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Punjabi', value: 'pa' },
  { label: 'Romanian', value: 'ro' },
  { label: 'Russian', value: 'ru' },
  { label: 'Spanish', value: 'es' },
  { label: 'Urdu', value: 'ur' },
];
