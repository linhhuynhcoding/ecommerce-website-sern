import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import AdminRoute from './pages/Admin/AdminRoute';
import PrivateRoute from './components/PrivateRoutes';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { publicRoutes, adminRoutes, privateRoutes } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    {/* <React.StrictMode> */}
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={route.path} path={route.path} element={<Page />} ></Route>;
          })}

          <Route path="/" element={<PrivateRoute />}>
            {privateRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={route.path} path={route.path} element={<Page />} ></Route>;
            })}
          </Route>
        </Route>
        <Route path="/admin" element={<AdminRoute />}>
          {adminRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={route.path} path={route.path} element={<Page />} ></Route>;
          })}
        </Route>

      </Routes>
    </Router>
    {/* </React.StrictMode> */}
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
