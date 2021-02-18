import React, {Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function Athenea () {
  const { t, i18n } = useTranslation();
  const changeLanguage =(language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <p>{t('title')}</p>
      <button className="btn btn-primary m-2" onClick={() => changeLanguage('en')}>english</button>
      <button className="btn btn-primary m-2" onClick={() => changeLanguage('es')}>spanish</button>
      <button className="btn btn-primary m-2" onClick={() => changeLanguage('fr')}>french</button>
    </>
  );
};

export default function  App(){
  return(
      <Suspense fallback={<div>Loading...</div>}>
        <Athenea />
      </Suspense>
  );
};
