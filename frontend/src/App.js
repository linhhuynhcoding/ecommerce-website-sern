import { Outlet } from 'react-router-dom';
// import './App.css';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <GlobalStyles>
      <div className='app'>

      < Outlet/>
      </div>
    </GlobalStyles>
  );
}

export default App;
