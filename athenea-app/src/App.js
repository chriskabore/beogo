import logo from './logo.svg';

import './App.css';
import {Trans, useTranslation} from 'react-i18next';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginLayout from './layouts/LoginLayout';
import Layout from './layouts/Layout'
import NotFound from "./pages/error/NotFound";
import PublicRoute from "./components/routing/PublicRoute";



function App() {


    const{t, i18n}=useTranslation();
    const changeLanguage =(language) => {
        i18n.changeLanguage(language);
    }
  return (
    <div className="App">
        <Router>
            <div className="container">
                <Switch>
                    <PublicRoute  />
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
