import React from 'react';
import Home2 from './Home2';
import Services from './Services/Services';
import WhereToBuy from './WhereToBuy/WhereToBuy';
import AppBanner from './AppBanner/AppBanner';
import Footer from './Footer/Footer';

function MainPage() {
  return (
    <div className='overflow-x-hidden'>
        <Home2 />
        <Services />
        <WhereToBuy />
        <AppBanner />
        <Footer />
    </div>
  )
}

export default MainPage