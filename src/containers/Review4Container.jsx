import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import Card4Container from './Card4Container'
import { ButtonSelectContext } from '../components/ButtonSelect'

const Review4Container = () => {
  const {defaultSettings,setDefaultSettings,settings,setSettings} = useContext(ButtonSelectContext)
  const clickedButton = ()=>{
    setSettings((prev)=>({
      ...prev,
      previewId:4
    }))    
  }
  return (
    <>
        <Page
        fullWidth
        title='4. Review with Grid'
        primaryAction={
          <Button onClick={clickedButton} disabled={settings?.previewId===4?true:false} primarySuccess={settings?.previewId===4?false:true}>{settings?.previewId===4?"Active":"Select"}</Button>
        }
        >
            <Card4Container settings={defaultSettings} setSettings={setDefaultSettings}></Card4Container>

        </Page>
    </>
  )
}

export default Review4Container