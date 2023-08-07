import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';

import Layout from './screens/Layout';
import SignUp from './screens/Signup';
import Welcome from './screens/Welcome';
import Login from './screens/Login';

import { useState } from 'react';
import { Reset } from 'styled-reset';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Router>
      <Reset />
      <Routes>
        <Route
          path={routes.layout}
          element={isLogin ? <Layout /> : <Login />}
        />
        <Route path={routes.signup} element={<SignUp />} />
        <Route path={routes.welcome} element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
