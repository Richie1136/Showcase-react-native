import Download from './components/download/Download'
import Features from './components/features/Features'
import SectionWrapper from './components/sectionwrapper/SectionWrapper'
import home from './assets/home_hero.png'
import homeCard from './assets/home_cards.png'
import feature from './assets/feature.png'
import mockup from './assets/mockup.png'



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
      <SectionWrapper title="Deployment"
        description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands."
        mockupImg={feature}
        reverse
      />
      <SectionWrapper title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={mockup}
        banner="banner02"
      />
      <Download />
    </>
  );
}

export default App;
