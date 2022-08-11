import './App.scss';
import BackgroundHero from './components/BackgroundHero/BackgroundHero';
import Differents from './components/Differents/Differents';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Reviews from './components/Reviews/Reviews';

interface ILink {
  name: string;
  url: string;
}

export const links: Array<ILink> = [
  { name: 'Pricing', url: '/' },
  { name: 'Product', url: '/' },
  { name: 'About us', url: '/' },
  { name: 'Careers', url: '/' },
  { name: 'Community', url: '/' },
];

function App() {
  return (
    <div className="App">
      <BackgroundHero>
        <Header />
        <main>
          <Hero />
          <Differents />
          <Reviews />
        </main>
      </BackgroundHero>
      <Footer />
    </div>
  );
}

export default App;
