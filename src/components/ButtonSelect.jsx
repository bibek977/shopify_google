import React, { createContext, useState } from 'react'

export const ButtonSelectContext = createContext()

export const ButtonSelectProvider = ({children}) => {

  const initialCheckboxes = {
    HideReviewsWithoutComments: true,
    HideRatingText: false,
    ShowReviewersPhoto: true,
    ShowReviewersName: false,
    ShowViewAllReviewsLink: false,
    ShowWriteReviewButton: false,
    AutoPlay: false,
    EnableLink: false,
    minratings: "1",
    dateformat: "my",
    align: "left",
    theme: "dark",
  };
  
  const [settings,setSettings] = useState(initialCheckboxes)

  return (
    <>
      <ButtonSelectContext.Provider value={{settings,setSettings}}>
        {children}
      </ButtonSelectContext.Provider>
    </>
  )
}
