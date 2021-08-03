import React from 'react';
import Button from '../core/Button/Button';
import Ref from '../core/Ref';
import Avatar1 from '../../static/Avatar1.png';
import Avatar2 from '../../static/Avatar2.png';
import Avatar3 from '../../static/Avatar3.png';



// my import
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeText = props => {
  const { handleModalEvent } = props;

  return (

    <Col xs={{ span: 12, order: 'first' }} lg={6} className="rightSec">
      <row>
        <Col md={12} md={8} className="firstSms">
          <img src={Avatar1} className="user" alt="user" />
          <div className="firstBlock">
            <p>My back pain has subsided & sleeping without waking up! I’m so motivated to learn more and breathe</p>
            <p className="userName">Virgie Hatley</p>
          </div>
        </Col>
      </row>
      <row className="justify-content-end">
        <Col md={12} lg={{ span: 8, offset: 3 }} className="scondSms">
          <img src={Avatar2} className="userRight" alt="user" />
          <div className="scondBlock">
            <p>I have to say that lower extremity flow, unlocked more than just my hips! Transformational!</p>
            <p className="userName">Lynlee Copenhaver</p>
          </div>
        </Col>
      </row>
      <row className="d-none d-lg-block">
        <Col md={12} lg={8} className="thirdSms">
          <img src={Avatar3} className="userBottom" alt="user" />
          <div className="thirdBlock">
            <p>My run times, distance, and recovery are definitely better since starting the program. Jen has improved my life so much.</p>
            <p className="userName">Joe Sanchez</p>
          </div>
        </Col>
      </row>
    </Col>

  );
};

export default HomeText;
