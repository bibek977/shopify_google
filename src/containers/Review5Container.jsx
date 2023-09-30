import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import Card5Container from './Card5Container'
import { ButtonSelectContext } from '../components/ButtonSelect'

const Review5Container = () => {
  const {defaultSettings,setDefaultSettings,settings,setSettings} = useContext(ButtonSelectContext)
  const clickedButton = ()=>{
    setSettings((prev)=>({
      ...prev,
      previewId:5
    }))    
  }
  return (
    <>
        <Page
        fullWidth
        title='Review with Floating'
        primaryAction={
          <Button onClick={clickedButton} disabled={settings?.previewId===5?true:false} primarySuccess={settings?.previewId===5?false:true}>{settings?.previewId===5?"Active":"Select"}</Button>
        }
        >
            <Card5Container settings={defaultSettings} setSettings={setDefaultSettings}></Card5Container>

        </Page>
    </>
  )
}

export default Review5Container