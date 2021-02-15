import logo from './logo.svg';

import './App.css';
import {Trans, useTranslation} from 'react-i18next';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Layout from './layouts/Layout';




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
                    <Route exact path={["/","/sign-in","/sign-up","/sign-out"]} render={(props) => <AuthLayout {...props} />}/>
                    <Route exact path="/*" render={(props) => <Layout {...props} />}/>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
