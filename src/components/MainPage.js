import React from 'react';
import Home from './Home';
import Services from './Services/Services';
import WhereToBuy from './WhereToBuy/WhereToBuy';
import AppBanner from './AppBanner/AppBanner';
import Footer from './Footer/Footer';

function MainPage() {
  return (
    <div className='overflow-x-hidden'>
        <Home />
        <Services />
        <WhereToBuy />
        <AppBanner />
        <Footer />
    </div>
  )
}

export default MainPage