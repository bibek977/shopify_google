import { Checkbox } from '@shopify/polaris';
import React, { useCallback, useContext, useState } from 'react';
import { ButtonSelectContext } from './ButtonSelect';

const FormCheckBox = () => {

  const {buttonStatus,setButtonStatus,initialCheckboxes} = useContext(ButtonSelectContext)

  // const initialCheckboxes = {
  //   HideReviewsWithoutComments: false,
  //   HideRatingText: false,
  //   ShowReviewersPhoto: false,
  //   ShowReviewersName: false,
  //   ShowViewAllReviewsLink: false,
  //   ShowWriteReviewButton: false,
  //   AutoPlay: false,
  // };

  // const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const handleChange = useCallback(
    (name) => {
      setButtonStatus((prevCheckboxes) => ({
        ...prevCheckboxes,
        [name]: !prevCheckboxes[name], // Toggle the checkbox state
      }));
    },
    []
    );
    // console.log(buttonStatus)

  return (
    <div className="w-100">
      {Object.keys(initialCheckboxes).map((checkboxName) => (
        <div className="w-100 mx-5 mb-2" key={checkboxName}>
          <Checkbox
            label={` ${checkboxName.replace(/([A-Z])/g, ' $1')}`}
            checked={buttonStatus[checkboxName]}
            onChange={() => handleChange(checkboxName)}
          />
        </div>
      ))}
    </div>
  );
};

export default FormCheckBox;
