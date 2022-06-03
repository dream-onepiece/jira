import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';

const JiraRouter = () => {

    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
        </Routes>
    </BrowserRouter>

}

export default JiraRouter;