import Download from './components/download/Download'
import Features from './components/features/Features'
import SectionWrapper from './components/sectionwrapper/SectionWrapper'
import home from './assets/home_hero.png'
import homeCard from './assets/home_cards.png'



function App() {
  return (
    <>
      <SectionWrapper title="Your own store of NFTs. Start Selling and Growing"
        description="Buy, store, collect NFTs, exchange and earn Crypto. Join 25+ million people."
        showBtn
        mockupImg={home}
        banner="banner"
      />
      <SectionWrapper title="Smart User Interface Marketplace"
        description="Experience an awesome UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={homeCard}
        reverse
      />
      <Features />
    </>
  );
}

export default App;
