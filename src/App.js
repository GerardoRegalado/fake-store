import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/body/HeaderComponent/HeaderComponent.tsx'
import FooterComponent from './components/body/FooterComponent/FooterComponent.tsx'
import BodyComponent from './components/body/BodyComponent/BodyComponent.tsx'


function App() {
  return (
    <>
    <div className="app-wrapper">
      <HeaderComponent />
    </div>
    <div className="body-wrapper">
      <BodyComponent />
    </div>
      <FooterComponent />
    </>
  );
}

export default App;
