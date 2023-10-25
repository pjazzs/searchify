import logo from './logo.svg';
import './App.css';
// import SearchResult from './Components/SearchResults';
import ContextAwareSearch from './Components/contextAware';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App =()=> {
  return (
    <>
    <Header/>
    <ContextAwareSearch/>
    <Footer/>
    </>
  );
}

export default App;
