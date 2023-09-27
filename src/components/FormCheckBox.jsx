import { Checkbox } from '@shopify/polaris';
import React, { useCallback, useState } from 'react';

const FormCheckBox = () => {
  const initialCheckboxes = {
    hideComments: false,
    hideRatingText: false,
    showReviewersPhoto: false,
    showReviewersName: false,
    showViewAllReviewsLink: false,
    showWriteReviewButton: false,
  };

  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const handleChange = useCallback(
    (name) => {
      setCheckboxes((prevCheckboxes) => ({
        ...prevCheckboxes,
        [name]: !prevCheckboxes[name], // Toggle the checkbox state
      }));
    },
    []
  );

  return (
    <div className="w-100">
      {Object.keys(initialCheckboxes).map((checkboxName) => (
        <div className="w-100 mx-5 mb-2" key={checkboxName}>
          <Checkbox
            label={`Show ${checkboxName.replace(/([A-Z])/g, ' $1')}`}
            checked={checkboxes[checkboxName]}
            onChange={() => handleChange(checkboxName)}
          />
        </div>
      ))}
    </div>
  );
};

export default FormCheckBox;
