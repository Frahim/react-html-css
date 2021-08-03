import React from 'react';

import Ref from 'components/core/Ref';

const FitnessOptions = props => {
  const { handleCloseFitnessOptions } = props;

  return (
    <div>
      <h1> This is the Fitness Options page !!! </h1>
      <Ref
        class="skip-link"
        onClick={handleCloseFitnessOptions}
        text="Skip this Section"
      />
    </div>
  );
};

export default FitnessOptions;
