import './scss/styles.scss';

import Header from './components/Header';
import Premieres from './components/Premieres';
import SearchCart from './components/SearchCart';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <SearchCart />
        </div>
        <Premieres />
      </div>
    </>
  );
}

export default App;
