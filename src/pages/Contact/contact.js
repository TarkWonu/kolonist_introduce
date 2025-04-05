import './contact.css';
import React, { useState } from 'react';

function Contact(){
    const [formData, setFormData] = useState({ name: '', message: '' });
    const [entries, setEntries] = useState([]);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.name || !formData.message) return;
  
      setEntries([formData, ...entries]) // guestbook에 추가
      setFormData({ name: '', message: '' }); // 폼 초기화
    };
  
    return(
        <>
            <section className='contact-section'>
                <div className='contact'>
                    <h2>방명록</h2>
                          {/* 입력 폼 */}
                    <form onSubmit={handleSubmit} className='contact-form'>
                        <input
                        type="text"
                        name="name"
                        placeholder="이름"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        />
                        <textarea
                        name="message"
                        placeholder="메시지를 입력하세요"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        />
                        <button type="submit" className="btn">보내기</button>
                    </form>
                </div>

                {/* 방명록 게시판 */}
                <div className="guestbook">
                    <h3>방명록 게시판</h3>
                    {entries.map((entry, index) => (
                    <div key={index} className="guestbook-card">
                        <h4>{entry.name}</h4>
                        <p>{entry.message}</p>
                    </div>
                    ))}
                </div>
            </section>

        </>
    );
}
export default Contact;