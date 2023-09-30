import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import CardContainer from './CardContainer'
import {PreviewCardContext} from '../components/PreviewCard'
import { ButtonSelectContext } from '../components/ButtonSelect'

const Review1Container = () => {
  const {previewId,setPreviewId} = useContext(PreviewCardContext)
  const {defaultSettings,setDefaultSettings} = useContext(ButtonSelectContext)
  const clickedButton = ()=>{
    setPreviewId(1)
    
  }

  return (
    <>
        <Page
        fullWidth
        title='1. Review with Badge-I'
        primaryAction={
            <Button onClick={clickedButton} disabled={previewId===1?true:false} primarySuccess={previewId===1?false:true}>{previewId===1?"Active":"Select"}</Button>
        }
        >
            <CardContainer settings={defaultSettings} setSettings={setDefaultSettings}></CardContainer>

        </Page>
    </>
  )
}

export default Review1Container