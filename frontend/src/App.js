import { Outlet } from 'react-router-dom';
import './App.css';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <GlobalStyles>
      <Outlet/>
    </GlobalStyles>
  );
}

export default App;
