import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ButtonSelectContext = createContext()

export const ButtonSelectProvider = ({children}) => {

 

  const initialCheckboxes = {
    id:1,
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
    theme: "custom",
    cardbody:"blue",
    text:'red',
    cardbg:'green'
  };
  
  const [settings,setSettings] = useState([])

  const defaultCheckboxes = {
    id:1,
    previewId:1,
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
    theme: "light",
  };
  const [defaultSettings,setDefaultSettings] = useState(defaultCheckboxes)
  const [previewSettings,setPreviewSettings] = useState(defaultCheckboxes)
  
  useEffect(()=>{

    const getSettings = (e)=>{
      axios
        .get("http://127.0.0.1:8000/settings_api/")
        .then((r)=>{
          console.log('settings data fetched')
          const {data} = r
          console.log(data[0])
          setSettings(data[0])
          setPreviewSettings(data[0])
          // console.log(settings)
        })
        .catch((e)=>{
          console.log(e)
        })
    }
    getSettings()
  },[])


  return (
    <>
      <ButtonSelectContext.Provider value={{settings,setSettings,defaultSettings,setDefaultSettings,previewSettings,setPreviewSettings}}>
        {children}
      </ButtonSelectContext.Provider>
    </>
  )
}
