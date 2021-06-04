import React, {Suspense} from 'react';
import './App.css';
import './css/athenea.css';
import Routes from "./routes/Routes";
import {withTranslation} from "react-i18next";
import * as Constant from './helpers/constants/index';

function AtheneaME() {

  return(<Routes/>);
}

function App() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
          <AtheneaME />
      </Suspense>
  );
}

export default withTranslation(Constant.TRANSLATION_PARAM)(App);
