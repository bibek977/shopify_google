import React, { createContext, useState } from 'react'

export const ButtonSelectContext = createContext()

export const ButtonSelectProvider = ({children}) => {

  const initialCheckboxes = {
    previewId:5,
    HideReviewsWithoutComments: true,
    HideRatingText: false,
    ShowReviewersPhoto: true,
    ShowReviewersName: true,
    ShowViewAllReviewsLink: false,
    ShowWriteReviewButton: false,
    AutoPlay: false,
    EnableHyperLink: false,
    minratings: '5',
    dateformat: "my",
    align: "left",
    theme: "dark",
  };
  
  const [settings,setSettings] = useState(initialCheckboxes)

  const defaultCheckboxes = {
    previewId:1,
    HideReviewsWithoutComments: true,
    HideRatingText: false,
    ShowReviewersPhoto: true,
    ShowReviewersName: true,
    ShowViewAllReviewsLink: false,
    ShowWriteReviewButton: false,
    AutoPlay: true,
    EnableHyperLink: false,
    minratings: '5',
    dateformat: "my",
    align: "left",
    theme: "light",
  };
  
  const [defaultSettings,setDefaultSettings] = useState(defaultCheckboxes)

  return (
    <>
      <ButtonSelectContext.Provider value={{settings,setSettings,defaultSettings,setDefaultSettings}}>
        {children}
      </ButtonSelectContext.Provider>
    </>
  )
}
