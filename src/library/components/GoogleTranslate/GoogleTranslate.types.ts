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
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Italian', value: 'it' },
  { label: 'Polish', value: 'pl' },
  { label: 'Spanish', value: 'es' },
];
