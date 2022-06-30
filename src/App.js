import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { DetailsPage, ListPage } from './components';
import { PATH } from './utils';

const App = () => (
    <Router>
        <Routes>
            <Route path={PATH.list} element={<ListPage />} />
            <Route path={`${PATH.details}/:id`} element={<DetailsPage />} />
        </Routes>
    </Router>
);

export default App;
