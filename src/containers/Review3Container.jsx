import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import Card3Container from './Card3Container'
import { ButtonSelectContext } from '../components/ButtonSelect'

const Review3Container = () => {
  const {defaultSettings,setDefaultSettings,settings,setSettings} = useContext(ButtonSelectContext)
  const clickedButton = ()=>{
    setSettings((prev)=>({
      ...prev,
      previewId:3
    }))    
  }
  return (
    <>
        <Page
        fullWidth
        title='3. Review with Badge-III'
        primaryAction={
          <Button onClick={clickedButton} disabled={settings?.previewId===3?true:false} primarySuccess={settings?.previewId===3?false:true}>{settings?.previewId===3?"Active":"Select"}</Button>
        }
        >
            <Card3Container settings={defaultSettings} setSettings={setDefaultSettings}></Card3Container>

        </Page>
    </>
  )
}

export default Review3Container