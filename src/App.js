import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams
} from 'react-router-dom';

import { DetailsPage, ListPage } from './components';
import './App.css';

const App = () => (
    <Router>
        <Routes>
            <Route exact path='/' element={<ListPage />} />
            <Route path='/details/:detailId' element={<DetailsPage />} />
        </Routes>
    </Router>
);

export default App;
