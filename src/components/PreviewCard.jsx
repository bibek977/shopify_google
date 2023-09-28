import React, { createContext, useState } from 'react'

export const PreviewCardContext = createContext()
export const PreviewCardProvider = ({children}) => {
  const [previewId, setPreviewId] = useState(1)
  return (
    <>
        <PreviewCardContext.Provider value={{previewId,setPreviewId}}>
          {children}
        </PreviewCardContext.Provider>
    </>
  )
}
