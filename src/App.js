import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import Brand from './components/Brand';
import Footer from './components/Footer';
import Aos from 'aos'
import 'aos/dist/aos.css';

function App() {
  const [show, handleShow] = useState(0)
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 500,
    })
  }, [])
  const transitionNavBar = () => {
    if (window.scrollY > 300) {
      handleShow(1)
    } else {
      handleShow(0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => window.removeEventListener('scroll',
      transitionNavBar)
  }, [])

  return (
    <div className="app">
      <Header opacity={show} />
      {/* <Header /> */}
      <PageOne />
      <PageTwo />
      <PageThree header={'feel special  more often.'} sndHeader={'exclusive rewards for paying your bills'} detail={'every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.'} btn={'Explore reward'} backgroundImg={'/images/chair.jpg'} />
      <Brand />
      <PageThree header={'we take your money matters seriously.'} sndHeader={'so that you don’t have to.'} detail={'never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.'} btn={'Experience the upgrade'} backgroundImg={'/images/sky.jpg'} />
      <PageThree header={'security first.     and second.'} sndHeader={'what’s yours remains only yours.'} detail={'CRED ensures that all your personal data and transactions are encrypted, '} btn={'Experience the upgrade'} backgroundImg={'/images/dog.jpg'} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
