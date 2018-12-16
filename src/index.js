import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import * as serviceWorker from './serviceWorker';

import Home from './pages/home';

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faMobileAlt,
    faChartBar,
    faCalendarAlt,
    faLandmark ,
    faHandshake,
    faUserTie,
    faCocktail,
    faCompass,
    faSmile,
    faPiggyBank,
    faDollarSign
} from '@fortawesome/free-solid-svg-icons'



library.add(faChartBar, faMobileAlt, faCalendarAlt, faLandmark, faHandshake, faUserTie, faCocktail, faCompass, faSmile, faPiggyBank, faDollarSign)

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
