import React, { useEffect } from 'react';
import { GoogleTranslateLanguages, GoogleTranslateProps } from './GoogleTranslate.types';
import * as Styles from './GoogleTranslate.styles';

const GoogleTranslate: React.FunctionComponent<GoogleTranslateProps> = ({
  pageLanguage = 'auto',
  label,
  hasDarkBackground = false,
}) => {
  const includedLanguages = GoogleTranslateLanguages.map((lang) => lang.value).join(',');

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: pageLanguage,
        autoDisplay: false,
        includedLanguages,
      },
      'google_translate_element'
    );
  };

  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <Styles.Container data-testid="GoogleTranslate" $hasDarkBackground={hasDarkBackground}>
      {label && <Styles.Label $hasDarkBackground={hasDarkBackground}>{label}</Styles.Label>}
      <div id="google_translate_element" />
    </Styles.Container>
  );
};

export default GoogleTranslate;
