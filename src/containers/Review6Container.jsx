import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import Card6Container from './Card6Container'
import {PreviewCardContext} from '../components/PreviewCard'
import { ButtonSelectContext } from '../components/ButtonSelect'

const Review6Container = () => {
  const {previewId,setPreviewId} = useContext(PreviewCardContext)
  const {defaultSettings,setDefaultSettings} = useContext(ButtonSelectContext)
  return (
    <>
        <Page
        fullWidth
        title='Review with Floating'
        primaryAction={
          <Button onClick={()=>setPreviewId(6)} disabled={previewId===6?true:false} primarySuccess={previewId===6?false:true}>{previewId===6?"Active":"Select"}</Button>
        }
        >
            <Card6Container settings={defaultSettings} setSettings={setDefaultSettings}></Card6Container>

        </Page>
    </>
  )
}

export default Review6Container