import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Athenea from './Athenea';
import reportWebVitals from './reportWebVitals';
import i18n from './utils/i18n/i18n';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { I18nextProvider } from 'react-i18next';

ReactDOM.render(
  <React.StrictMode>
      <I18nextProvider i18n={i18n}>
       <Suspense fallback={<div>Loading...</div>}>
          <Athenea />
       </Suspense>
      </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
