import './App.css';
import NavBar from './components/NavBar';
import CardComponent from "./components/CardComponent"
import BodyPart from './components/BodyPart';
import BodyCenter from './components/BodyCenter';
import LegalText from './components/LegalText';
import FooterBody from './components/FooterBody';

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app_body">
        <BodyPart />
        <BodyCenter />
        <LegalText />
        <FooterBody />
      </div>
      {/* <CardComponent /> */}
    </div>
  );
}

export default App;
