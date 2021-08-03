import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { APP_ROUTES } from '../utils/enums';
import { getItem } from '../utils/utils';

const PublicRoute = props => {
  const { component: Component, ...rest } = props;
  const authObject = getItem('your_auth_object');
  const isLoggedIn = authObject ? JSON.parse(authObject)?.token : null;

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Redirect
            to={{
              pathname: APP_ROUTES.HOME,
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
