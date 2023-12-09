import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { BuyerReviews, SellerReviews } from './components/Reviews'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Projects />
      <Tabs
        defaultActiveKey='profile'
        id='uncontrolled-tab-example'
        className='mb-3'
      >
        <Tab eventKey='home' title='Seller Reviews'>
          <SellerReviews />
        </Tab>
        <Tab eventKey='profile' title='Buyer Reviews'>
          <BuyerReviews />
        </Tab>
      </Tabs>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
