import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import MainForm from './components/MainForm';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  const [nama] = useState('Siapa Ya');
  const [page, setPage] = useState(0);
  const [avatar, setAvatar] = useState(1);
  const buttonClick = () => {
    setPage(1)
  }
  const backClick = () => {
    setPage(0)
  }
  const slideAvatar = () => {
    if(page < 5) {
      setAvatar(avatar + 1)
    }
  }
  return (
    <div className="App">
      <Header />
      {page === 0 && <MainForm buttonClick={buttonClick} slideAvatar={slideAvatar} input={nama} />}
      {page === 1 && <Home input={nama} backClick={backClick}/>}
    </div>
  );
}

export default App;
