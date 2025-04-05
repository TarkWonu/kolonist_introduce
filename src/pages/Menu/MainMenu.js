import './Menu.css';
import TypingEffect from '../../type';

import React from 'react';
  

function MainMenu() {
 
  return (
    <>

  
    
    
    
    

    <section className="home-section">
      <div className='home-container'>
      <h1><TypingEffect text="Welcome To Kolonist!" speed={100}/></h1>
        <h2>We create websites and applications</h2>
      </div>
    </section>

    <section className='info'>
      <div className='info-text'>
        <h1>Q.콜로니스트는 어떤 동아리 인가요?</h1>
        <h2>A.콜로니스트는 2025년 창설되어</h2>
        <h2>경험을 쌓고 성장하는 것을 목표로 하는 동아리입니다.</h2>
        <h3>주로 웹 개발과 알고리즘 연구를 주력으로 하며,</h3>
        <h3>공모전 참여와 포트폴리오 제작 등을 목표로 하고 있습니다.</h3>
      </div>
      
      
    </section>
    
    </>
    
  );
}

export default MainMenu;