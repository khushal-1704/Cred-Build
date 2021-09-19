import React, { useState } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import Brand from './components/Brand';
import Footer from './components/Footer';

function App() {
  const [show, handleShow] = useState(false)
  const transitionNavBar = () => {
    if (window.scrollY > -200) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  return (
    <div className="app">
      {show && <Header />}
      {/* <Header /> */}
      <PageOne />
      <PageTwo />
      <PageThree header={'feel special  more often.'} sndHeader={'exclusive rewards for paying your bills'} detail={'every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.'} btn={'Explore reward'} backgroundImg={'deserve-more-bg.jpg'} />
      <Brand />
      <PageThree header={'we take your money matters seriously.'} sndHeader={'so that you don’t have to.'} detail={'never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.'} btn={'Experience the upgrade'} backgroundImg={'money-matters-bg.jpg'} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
