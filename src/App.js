import React from 'react';
import { Navigation } from './components/landing-page/navigation';
import { About } from './components/landing-page/About';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/landing-page/footer';
import Auth from './components/landing-page/LoginForm';

const App = () => {
  return (
    <>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<Auth />} />
        </Routes>
      </div>
    </>
  )
}

export default App;