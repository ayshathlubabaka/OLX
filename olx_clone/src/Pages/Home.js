import React, {useState} from 'react';

import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';

import Posts from '../components/Posts/Posts';
import Footer from '../components/Footer/Footer';


function Home(props) {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="homeParentDiv">
      <Header setSearchQuery={setSearchQuery} />
      <Banner />
      <Posts searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default Home;
 