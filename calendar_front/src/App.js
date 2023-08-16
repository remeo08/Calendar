import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';

import { GlobalStyle } from './screens/LoginStyles';
import Layout from './screens/Layout';
import SignUp from './screens/Signup';
import Welcome from './screens/Welcome';
import Login from './screens/Login';

import { useState } from 'react';
import { Reset } from 'styled-reset';
import Landing from './screens/Landing';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Router>
      <Reset />
      <GlobalStyle />
      <Routes>
        <Route
          path={routes.layout}
          element={isLogin ? <Layout /> : <Login />}
        />
        <Route path={routes.signup} element={<SignUp />} />
        <Route path={routes.welcome} element={<Welcome />} />
        <Route path={routes.landing} element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
