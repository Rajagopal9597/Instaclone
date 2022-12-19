
import React from 'react';
import LandingPage from './components/Landingpage'
import Postview from './components/Postview';
import Addpost from './components/Addpost';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={  <LandingPage />}>
          </Route>
          <Route path="/Postview" element={  <Postview />}>
          </Route>
          <Route path="/Addpost" element={<Addpost />}>
          </Route>
        </Routes>
      </BrowserRouter>         
    </div>
  );
}

export default App;
