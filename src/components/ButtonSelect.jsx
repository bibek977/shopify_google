import React, { createContext, useState } from 'react'

export const ButtonSelectContext = createContext()

export const ButtonSelectProvider = ({children}) => {

  const initialCheckboxes = {
    HideReviewsWithoutComments: false,
    HideRatingText: false,
    ShowReviewersPhoto: false,
    ShowReviewersName: false,
    ShowViewAllReviewsLink: false,
    ShowWriteReviewButton: false,
    AutoPlay: false,
  };
  
  const [buttonStatus,setButtonStatus] = useState(initialCheckboxes)
  const [selectedOptions, setSelectedOptions] = useState({
    rating: '1',
    date: '1',
    align: '1',
    theme: '1',
  });
  return (
    <>
      <ButtonSelectContext.Provider value={{buttonStatus,setButtonStatus,initialCheckboxes,selectedOptions,setSelectedOptions}}>
        {children}
      </ButtonSelectContext.Provider>
    </>
  )
}
