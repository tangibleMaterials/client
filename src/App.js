import HeaderContainer from './Components/Header/HeaderContainer.js';
import HomeContainer from './Components/Home/HomeContainer.js';
import FooterContainer from './Components/Footer/FooterContainer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderContainer /> 
      <HomeContainer />
      <FooterContainer /> 
    </div>
  );
}

export default App;
