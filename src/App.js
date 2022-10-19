import './scss/styles.scss';

import Header from './components/Header';
import Premieres from './components/Premieres';
import SearchCart from './components/SearchCart';
import RandomFact from './components/RandomFact';
import FilterSearchFilm from './components/FilterSearchFilm';

function App() {
  return (
    <>
      {/* <Header /> */}
      <div className="main">
          {/* <SearchCart /> */}
        <div className="sliders__wrapper">
          {/* <Premieres /> */}
        </div>
        <div className="container__big">
          <div className="sliders__wrapper-bottom">
            {/* <RandomFact /> */}
            <FilterSearchFilm />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
