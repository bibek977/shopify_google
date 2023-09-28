import React, { createContext, useState } from 'react'

export const ButtonSelectContext = createContext()
export const ButtonSelectProvider = ({children}) => {
  const [buttonStatus,setButtonStatus] = useState(false)
  // const [buttonSelect,buttonActive] = useState(false)

  return (
    <>
      <ButtonSelectContext.Provider value={{buttonStatus,setButtonStatus}}>
        {children}
      </ButtonSelectContext.Provider>
    </>
  )
}
