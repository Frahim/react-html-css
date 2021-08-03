import React from 'react';
import { Button } from 'react-bootstrap';
import { APP_ROUTES } from '../../utils/enums';

const NoPageFound = ({ history }) => {
  return (
    <div className="App-header">
      <h2>Page Not Found</h2>
      <Button onClick={() => history.push(APP_ROUTES.HOME)}>Go to Home</Button>
    </div>
  );
};

export default NoPageFound;
