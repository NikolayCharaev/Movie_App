import './scss/styles.scss';

import Header from './components/Header';
import Premieres from './components/Premieres';
import SearchCart from './components/SearchCart';
import RandomFact from './components/RandomFact';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <SearchCart />
        </div>
        <div className="sliders__wrapper">
        <Premieres />
        <div className="sliders__wrapper-bottom">
        <div className="container__big">
        {/* <RandomFact/> */}
        </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
