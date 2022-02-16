import React from 'react';
import Button from './../../components/Button/Button';
import { cookieName } from './../../helpers/cookies';

interface CookieClearProps {}

const CookieBanner: React.FunctionComponent<CookieClearProps> = () => {
  const clearCookie = (e) => {
    document.cookie = cookieName + '=; Max-Age=-99999999;';
    window.location.reload();
  };

  return (
    <p>
      <br />
      <br />
      <br />
      <br />
      <Button text="DEBUGGING Clear cookie" primary={false} url="#" isDisabled={true} onClick={clearCookie} />
    </p>
  );
};
export default CookieBanner;
