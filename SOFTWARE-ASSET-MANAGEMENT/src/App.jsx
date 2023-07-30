import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import SearchBox from './components/content/SearchBox';
import CardCarousel from './components/content/CardCarousel';
import Portfolio from './components/content/Portfolio';

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="d-flex">
        <Sidebar />
        <div className="p-3 w-100">
          <SearchBox />
          <CardCarousel />
          <Portfolio />
        </div>
      </div>
    </>
  );
}

export default App;
