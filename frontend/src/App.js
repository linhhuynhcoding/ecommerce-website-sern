import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes} from './routes';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <GlobalStyles>
      <Router>
        <div className='root'>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} ></Route>;
            })}
          </Routes>

        </div>
      </Router>
    </GlobalStyles>
  );
}

export default App;
