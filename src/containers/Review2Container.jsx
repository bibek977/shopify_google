import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import Card2Container from './Card2Container'
import { ButtonSelectContext } from '../components/ButtonSelect'

const Review2Container = () => {
  const {defaultSettings,setDefaultSettings,settings,setSettings} = useContext(ButtonSelectContext)
  const clickedButton = ()=>{
    setSettings((prev)=>({
      ...prev,
      previewId:2
    }))    
  }
  return (
    <>
        <Page
        fullWidth
        title='2. Review with Badge-II'
        primaryAction={
          <Button onClick={clickedButton} disabled={settings?.previewId===2?true:false} primarySuccess={settings?.previewId===2?false:true}>{settings?.previewId===2?"Active":"Select"}</Button>
        }
        >
            <Card2Container settings={defaultSettings} setSettings={setDefaultSettings}></Card2Container>

        </Page>
    </>
  )
}

export default Review2Container