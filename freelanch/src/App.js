
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import user from './image/user1.png';
import user103 from './image/user103.png';
import user112 from './image/user112.png';

function App() {
  return (
     <Router>
    <div className="App">
      <header className="App-header">       
        <Container fluid>
          <Row>
            <Col xs={12} md={{ span: 5, offset: 1 }}>
              <Row>
                <Col xs={12} md={12} className="logoSec"> <Link to={`/`} className="homeLink"><img src={logo} className="logo" alt="logo" /></Link></Col>
                <Col xs={12} md={12} className="banerText">
                  <h2 className="banerTtext">Knowledge & Solutions <br/>for your body</h2>
                  <h3 className="bannerMtext">From experienced doctors of <br/>physical therapy</h3>
                  <p className="banerBtext">Learn about the body, Find solutions to relieve pain, Improve mobility,<br/> Understand proper movement, Optimize your health, Find community</p>
                </Col>
                <Col xs={12} md={12} className="banerbtn">
                    <Link to={`/`} className="baner-link">Let’s get started</Link>
                    <p className="loginLink">Already a member?<Link to={`/`} className="baner-login"> Login now</Link></p>
                  
                </Col>
              </Row>              
              </Col>
              
              <Col xs={12} md={6} className="rightSec">
                <row>
                  <Col xs={12} md={8} className="firstSms">
                    <img src={user} className="user" alt="user" />
                    <div className="firstBlock">
                      <p>My back pain has subsided & sleeping without waking up! I’m so motivated to learn more and breathe</p>
                      <p className="userName">Virgie Hatley</p>
                    </div>
                  </Col>
                </row>
                <row className="justify-content-end">
                  <Col xs={12} md={{ span: 8, offset: 3 }} className="scondSms">
                    <img src={user103} className="userRight" alt="user" />
                    <div className="scondBlock">
                      <p>I have to say that lower extremity flow, unlocked more than just my hips! Transformational!</p>
                      <p className="userName">Lynlee Copenhaver</p>
                    </div>
                  </Col>
                </row>
                <row>
                  <Col xs={12} md={8} className="thirdSms">
                    <img src={user112} className="userBottom" alt="user" />
                    <div className="thirdBlock">
                      <p>My run times, distance, and recovery are definitely better since starting the program. Jen has improved my life so much.</p>
                      <p className="userName">Joe Sanchez</p>
                    </div>
                  </Col>
                </row>
            </Col>
          </Row>
        </Container>
      </header>
      </div>
      </Router>
  );
}

export default App;
