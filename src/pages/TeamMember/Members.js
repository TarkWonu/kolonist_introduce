import './Members.css'
import logo from './logo.png'
import wonu from './tarkwonu.png';
import lee from './niclee.jpg'
import jisoo from './ji-soo.png';
import sim from './sim.png';
import chun from './chundong.png';

import { useState } from 'react';





function Members(){
  const [selectedMember, setSelectedMember] = useState(null);
  const openModal = (member) => {
    setSelectedMember(member);
  };
  const closeModal = () => {
    setSelectedMember(null);
  };
    const teamMembers = [
        {
          name: "탁원우",
          role: "프론트엔드/프로젝트 총괄",
          desc: "--",
          mbti: "ISTP",
          contact: "https://www.instagram.com/tark._.wonu/",
          collab: "Python,HTML,CSS,C#,JS",
          img: wonu,
        },
        {
          name: "이예니",
          role: "백엔드/프로젝트 부총괄",
          desc: "",
          mbti: "INTJ",
          contact: "https://www.instagram.com/staticnic_717/",
          collab: "Python,HTML,CSS,C,C#,JS",
          img: lee,
        },
        {
          name: "심재헌",
          role: "",
          desc: "--",
          mbti: "ISTP",
          contact: "https://www.instagram.com/inputdot/",
          collab: "Python,C#",
          img: sim,
        },
        {
          name: "천동현",
          role: "",
          desc: "--",
          mbti: "INTP",
          contact: "https://www.instagram.com/d_hyun.127/",
          collab: "Python,C,CSS,HTML,JS,R,SQL",
          img: chun,
        },
        {
          name: "윤지수",
          role: "",
          desc: "--",
          mbti: "ISFP",
          contact: "https://www.instagram.com/asdfj1203/",
          collab: "Python",
          img: jisoo,
        }
        
        
      ];

    return(
    <>
    <title>Kolonist</title>

        {selectedMember && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>X</button>
          <img src={selectedMember.img} alt={selectedMember.name} width="150px"/>
          <h2>{selectedMember.name}</h2>
          <h4>{selectedMember.role}</h4>
          <p>{selectedMember.desc}</p>
          <p>MBTI: {selectedMember.mbti}</p>
          
  
            <p>contact: <a href={selectedMember.contact} target="_blank" rel="noopener noreferrer">{selectedMember.contact}</a></p>

          <p>스택: {selectedMember.collab}</p>
        </div>
      </div>
    )}
    
    <div className='Members-bg'>
        <section className='Members-text'>
            
            <h1>콜로니스트의 부원들을 소개 합니다!</h1>
            <div className='Members-list'>
            {teamMembers.map((member) => (
                <div className='Member-info'onClick={()=>openModal(member)}>
                    <img src={member.img} alt={member.name} width={'125px'}/>
                    <h3>{member.name}</h3>
                    <h6>{member.role}</h6>
                    
                    
                </div>
                
             ))}
             
            </div>
            
        </section>
        
        
        
        
    </div>


    
    
        </>
    );
}

export default Members;