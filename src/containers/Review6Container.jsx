import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import Card6Container from './Card6Container'
import { ButtonSelectContext } from '../components/ButtonSelect'
import { ApiDataContext } from '../components/ContextData'

const Review6Container = () => {
  const {defaultSettings,setDefaultSettings,settings,setSettings} = useContext(ButtonSelectContext)
  const {apiData}=useContext(ApiDataContext)

  const clickedButton = ()=>{
    setSettings((prev)=>({
      ...prev,
      previewId:6
    }))    
  }
  return (
    <>
        <Page
        fullWidth
        title='Review with Floating'
        primaryAction={
          <Button onClick={clickedButton} disabled={settings?.previewId===6?true:false} primarySuccess={settings?.previewId===6?false:true}>{settings?.previewId===6?"Active":"Select"}</Button>
        }
        >
            <Card6Container apiData={apiData} settings={defaultSettings} setSettings={setDefaultSettings}></Card6Container>

        </Page>
    </>
  )
}

export default Review6Container