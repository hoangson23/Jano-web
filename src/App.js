
import './jano/assets/style.css';
import './App.css';
import Header from './jano/components/header.js';
import './jano/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import Fastgame from './jano/components/fastgame';
import Ticker from './jano/components/ticker';
import Service from './jano/components/service';
import Pay from './jano/components/pay';
import Footer from './jano/components/footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Fastgame/>
      <Ticker/>
      <Service/>
      <Pay/>
      <Footer/>
    </div>
  );
}

export default App;
