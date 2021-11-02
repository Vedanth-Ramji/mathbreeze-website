import './styles/GlobalStyles.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import NumberFactsPage from './pages/NumberFactsPage';
import PracticePage from './pages/PracticePage';
import PageNotFoundPage from './pages/PageNotFoundPage';

export default function App() {
    return (
        <div className='app'>
            <Router>
                <Navbar />

                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/number-facts' component={NumberFactsPage} />
                    <Route exact path='/practice' component={PracticePage} />
                    <Route component={PageNotFoundPage} />
                </Switch>
            </Router>
        </div>
    );
}
