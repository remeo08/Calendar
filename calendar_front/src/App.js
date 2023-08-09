import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';

import Layout from './screens/Layout';
<<<<<<< HEAD
// import SignUp from './screens/SignUp';
=======
import SignUp from './screens/Signup';
>>>>>>> 005a45751e198a04c18003755f30504f6f81419d
import Welcome from './screens/Welcome';
import Login from './screens/Login';

import { useState } from 'react';
import { Reset } from 'styled-reset';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <Reset />
      <Routes>
        <Route
          path={routes.layout}
          element={isLogin ? <Layout /> : <Login />}
        />
        {/* <Route path={routes.signup} element={<SignUp />} /> */}
        <Route path={routes.welcome} element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
