import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/body/header-component/header-component.tsx'
import FooterComponent from './components/body/footer-component/footer-component.tsx'
import BodyComponent from './components/body/body-component/body-component.tsx'


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
