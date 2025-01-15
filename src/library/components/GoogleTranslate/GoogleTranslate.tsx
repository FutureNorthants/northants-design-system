import React, { useEffect } from 'react';
import { GoogleTranslateProps } from './GoogleTranslate.types';
import * as Styles from './GoogleTranslate.styles';

const GoogleTranslate: React.FunctionComponent<GoogleTranslateProps> = ({
  pageLanguage = 'auto',
  label,
  hasDarkBackground = false,
}) => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: pageLanguage,
        autoDisplay: false,
      },
      'google_translate_element'
    );
    const popupForm = document.getElementById('goog-gt-vt');
    if (popupForm) {
      popupForm.remove();
    }
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
