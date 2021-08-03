import React from 'react';
import { Redirect, Route } from 'react-router';
import { APP_ROUTES } from '../utils/enums';
import { getItem } from '../utils/utils';

const PrivateRoute = props => {
  const { component: Component, ...rest } = props;
  const authObject = getItem('your_auth_object');
  const isLoggedIn = authObject ? JSON.parse(authObject)?.token : null;

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: APP_ROUTES.ROOT,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
