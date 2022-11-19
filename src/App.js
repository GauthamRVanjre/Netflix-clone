
import './App.css';
import Content from './components/Content/Content';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '1f1df1ff1cce315177d3a3b81fa3afb4',
};


function App() {
  return (
    <div>
      <Nav/>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
