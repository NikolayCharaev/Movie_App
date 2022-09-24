import './scss/styles.scss';

import Header from './components/Header';
import Premieres from './components/Premieres';
import SearchCart from './components/SearchCart';
import RandomFact from './components/RandomFact';
import FilterSearchFilm from './components/FilterSearchFilm';



function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <div className="container">
          <SearchCart />
        </div>
        <div className="sliders__wrapper">
        <Premieres />
        <div className="container__big">
        <div className="sliders__wrapper-bottom">
        <RandomFact/>
        <FilterSearchFilm/>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
