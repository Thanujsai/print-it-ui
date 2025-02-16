import React from 'react';
import Home from './Home';
import Services from './Services/Services';
import WhereToBuy from './WhereToBuy/WhereToBuy';
import AppBanner from './AppBanner/AppBanner';
import Footer from './Footer/Footer';
import Upload from './Upload/Upload';

function MainPage() {
  return (
    <div className='overflow-x-hidden'>
        <Home />
        <Services />
        <Upload />
        <WhereToBuy />
        <AppBanner />
        <Footer />
    </div>
  )
}

export default MainPage