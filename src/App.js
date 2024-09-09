import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Mainlayout } from './layout/mainlayout';
// import { LandingPage } from './views/landingpage';
// import { AboutusPage } from './views/aboutus';
import { HomePage } from './views/pages/Home/home';
import { RoadmapPage } from './views/pages/Roadmap/roadmap';
import { BlogPage } from './views/pages/blog';
import { BlogDetails } from './views/pages/blog/blogDetails';
import { TeamPage } from './views/pages/team';
import { LiveIntroduction } from './views/pages/liveIntroduction';
import { TokenLaunching } from './views/pages/tokenlaunching';
import { FAQPage } from './views/pages/faq';
import { DecentralisedFinancePage } from './views/pages/decentralisedFinance';
import { MainstreamUsePage } from './views/pages/mainstreamuse';
import { CustomerSupport } from './views/pages/customersupport';
import { ContactUsPage } from './views/pages/contactus';
import { VISAprocessApp } from './views/pages/visaprocessApp';
import { CarrerDevelopement } from './views/pages/carrerdevelopment';
import { DecentralisedTrade } from './views/pages/decentralizedTrade';
import CareerDevelopmentPage from './views/pages/CareerDevelopment';
import Buzzwords from './views/pages/Buzzwords';
import CryptoInvestor from './views/pages/CryptoInvestor';
import CryptoBeginners from './views/pages/CryptoBeginners';
import Revolutionizing from './views/pages/Revolutionizing';
import VisaProcess from './views/pages/VisaProcess';
import DiverseProjects from './views/pages/DiverseProjects';
import TechNexus from './views/pages/TechNexus';
import { TechNexusApp } from './views/pages/techNexuxApp';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainlayout />}>
          <Route index element={<HomePage />} />
          <Route path='/roadmap' element={<RoadmapPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog-details' element={<BlogDetails />} />
          <Route path='/contactus' element={<ContactUsPage />} />
          <Route path='/customer-support' element={<CustomerSupport />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/team' element={<TeamPage />} />

          <Route path='/live-introduction' element={<LiveIntroduction />} />

          <Route path='/token-launch' element={<TokenLaunching />} />
          <Route path='/decentralised-finance' element={<DecentralisedFinancePage />} />
          <Route path='/mainstream-use' element={<MainstreamUsePage />} />
          <Route path='/crypto-investor' element={<CryptoInvestor />} />
          <Route path='/crypto-beginners' element={<CryptoBeginners />} />
          <Route path='/career-development' element={<CareerDevelopmentPage />} />
          <Route path='/buzzwords' element={<Buzzwords />} />
          <Route path='/revolutionizing' element={<Revolutionizing />} />
          <Route path='/visa-process' element={<VisaProcess />} />
          <Route path='/diverse-projects' element={<DiverseProjects />} />
          <Route path='/tech-nexus' element={<TechNexus />} />

          <Route path='/visa-processing-app' element={<VISAprocessApp />} />
          <Route path='/career-development-app' element={<CarrerDevelopement />} />
          <Route path='/decentralised-trade' element={<DecentralisedTrade />} />
          <Route path='/tech-nexus-app' element={<TechNexusApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
