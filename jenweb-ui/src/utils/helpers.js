import React from 'react';
// import moment from 'moment'

export const setInLocalStorage = (name, data) => {
  localStorage.setItem(name, data);
};

export const retrieveFromLocalStorage = name => {
  const retrievedData = localStorage.getItem(name);
  return retrievedData;
};

export const removeFromLocalStorage = name => {
  localStorage.removeItem(name);
};

export const sliceString = (string, index, length) => {
  if (string) {
    const finalString = string.slice(index, length);
    return finalString;
  }
  return string;
};

export const sortObjectArray = (a, b) => {
  const nameFirst = a.label ? a.label.toUpperCase() : a.text.toUpperCase();
  const nameSecond = b.label ? b.label.toUpperCase() : b.text.toUpperCase();

  let comparison = 0;
  if (nameFirst > nameSecond) {
    comparison = 1;
  } else if (nameFirst < nameSecond) {
    comparison = -1;
  }
  return comparison;
};

export const movePointerOnTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

export const checkImageFormateIsWebp = image => {
  let imageType = image;
  if (image && /\.(gif|jpe?g|tiff|png|bmp)$/i.test(image)) {
    imageType = image.replace(/\.(gif|jpe?g|tiff|png|bmp)$/i, '.webp');
  }
  return imageType;
};

export const openUrlOnNewTab = path => {
  var win = window.open(path, '_blank');
  win.focus();
};

export const getInitialsProfileImage = (firstName, lastName) => {
  let initials = '';
  if (firstName && lastName) {
    initials = `${firstName.charAt(0).toUpperCase()}${lastName
      .charAt(0)
      .toUpperCase()}`;
  } else if (firstName) {
    initials = `${firstName.charAt(0).toUpperCase()}`;
  }
  return <div className="user-initials">{initials}</div>;
};

export const getErrorMessage = (error, msg) => {
  let message = msg;
  if (error?.response?.data?.error) {
    message = error.response.data.error;
  }
  return message;
};

export const checkAnyTrueObjectValue = objData => {
  const isTrue = Object.values(objData).some(item => item);
  return isTrue;
};

// Get first true value from object
export const getTrueKey = obj => {
  for (const key in obj) {
    if (obj[key]) return key;
  }
  return undefined;
};

export const isEmpty = objectToCheck =>
  Object.entries(objectToCheck).length === 0;

export const getLodash = (value, path, defaultValue) =>
  String(path)
    .split('.')
    .reduce((acc, v) => {
      try {
        acc = acc[v] !== undefined && acc[v] !== null ? acc[v] : defaultValue;
      } catch (e) {
        return defaultValue;
      }
      return acc;
    }, value);

export const splitArrayAsUNiqueCombination = dataset => {
  const result = dataset.reduce((acc, item) => {
    if (!acc[item.codeIataCity]) {
      acc[item.codeIataCity] = [];
    }

    acc[item.codeIataCity].push(item);
    return acc;
  }, {});
  return result;
};

// export const convertDateFormat = (date) => {
//   const newDate = moment.unix(date/1000, 'YYYY-MM-DD')
//   return moment(newDate).format('YYYY-MM-DD')
// }
