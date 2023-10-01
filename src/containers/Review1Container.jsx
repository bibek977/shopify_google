import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import CardContainer from './CardContainer'
import { ButtonSelectContext } from '../components/ButtonSelect'
import { ApiDataContext } from '../components/ContextData'

const Review1Container = () => {
  const {defaultSettings,setDefaultSettings,settings,setSettings} = useContext(ButtonSelectContext)
  const {apiData}=useContext(ApiDataContext)

  const clickedButton = ()=>{
    setSettings((prev)=>({
      ...prev,
      previewId:1
    }))    
  }

  return (
    <>
        <Page
        fullWidth
        title='1. Review with Badge-I'
        primaryAction={
            <Button onClick={clickedButton} disabled={settings?.previewId===1?true:false} primarySuccess={settings?.previewId===1?false:true}>{settings?.previewId===1?"Active":"Select"}</Button>
        }
        >
            <CardContainer apiData={apiData} settings={defaultSettings} setSettings={setDefaultSettings}></CardContainer>

        </Page>
    </>
  )
}

export default Review1Container