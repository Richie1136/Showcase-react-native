import Button from './components/button/Button'
import Download from './components/download/Download'
import Features from './components/features/Features'
import SectionWrapper from './components/sectionwrapper/SectionWrapper'


function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">React Native NFT Showcase</h1>
      <Button />
      <Download />
      <Features />
      <SectionWrapper />
    </div>
  );
}

export default App;
