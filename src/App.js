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

import AdditionPage from './pages/operationsPages/additionPages/AdditionPage';
import SubtractionPage from './pages/operationsPages/subtractionPages/SubtractionPage';
import MultiplicationPage from './pages/operationsPages/multiplicationPages/MultiplicationPage';
import DivisionPage from './pages/operationsPages/divisionPages/DivisionPage';

export default function App() {
    return (
        <div className='app'>
            <Router>
                <Navbar />

                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/number-facts' component={NumberFactsPage} />
                    <Route exact path='/practice' component={PracticePage} />
                    <Route exact path='/practice/addition' component={AdditionPage} />
                    <Route exact path='/practice/subtraction' component={SubtractionPage} />
                    <Route exact path='/practice/multiplication' component={MultiplicationPage} />
                    <Route exact path='/practice/division' component={DivisionPage} />
                    <Route component={PageNotFoundPage} />
                </Switch>
            </Router>
        </div>
    );
}
