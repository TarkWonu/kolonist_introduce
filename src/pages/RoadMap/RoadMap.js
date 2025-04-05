import './RoadMap.css'
import logo from './logo.png'
function RoadMap(){
    return(

        <>
    <title>Kolonist</title>
        

           
    <section className="activity-overview-section">
        <div className="terms">
        <h2 className='title'>동아리 활동 개요</h2>
        <div className="activity-terms">
            <div className="term-card">
            <h3>Term 1</h3>
            <p>개발 환경 구축, 팀 프로젝트 아이디어 구체화, 기초 스터디 진행</p>
            </div>
            <div className="term-card">
            <h3>Term 2</h3>
            <p>중간 점검, 심화 스터디, 프로젝트 구현 및 테스트</p>
            </div>
            <div className="term-card">
            <h3>Term 3</h3>
            <p>프로젝트 최종 발표, 성과 공유, 차기 기획 논의</p>
            </div>
        </div>
        </div>
    </section>

    
  <section className="timeline-section">
    <div className="timeline-container">
      <h2>활동계획 타임라인</h2>
      
      <div className="timeline">
        
        <div className="timeline-item">
          <div className="timeline-date">2025-03-29</div>
          <div className="timeline-content">
            <h3>발대식</h3>
            <p>동아리 발대식 진행 및 팀원 소개</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2025-04-15</div>
          <div className="timeline-content">
            <h3>첫 워크숍</h3>
            <p>팀 프로젝트 아이디어 브레인스토밍</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2025-05-01</div>
          <div className="timeline-content">
            <h3>중간 점검</h3>
            <p>프로젝트 진행 상황 공유 및 피드백</p>
          </div>
        </div>
        
      </div>
    </div>
    <h3 className='continue'>To Be Continued....</h3>
  </section>
        </>
    );
}

export default RoadMap;