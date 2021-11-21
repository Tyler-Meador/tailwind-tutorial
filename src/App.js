import './App.css';
import Logo from './components/Logo';
import Header from './components/Header';
import Headline from './components/Headline';
import Button from './components/Button';
import SecondHeader from './components/SecondHeader';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
          <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
            <div className="xl:max-w-xl">
              <Logo />
              <Header />
              <Headline />
              <Button />
            </div>
          </div>
          <SecondHeader />
        </div>
      </div>
      <Cards />
    </div>

  );
}

export default App;
