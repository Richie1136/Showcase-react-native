import Download from './components/download/Download'
import Features from './components/features/Features'
import SectionWrapper from './components/sectionwrapper/SectionWrapper'
import home from './assets/home_hero.png'



function App() {
  return (
    <>
      <SectionWrapper title="Your own store of NFTs. Start Selling and Growing"
        description="Buy, store, collect NFTs, exchange and earn Crypto. Join 25+ million people"
        showBtn
        mockupImg={home}
      />
    </>
  );
}

export default App;
