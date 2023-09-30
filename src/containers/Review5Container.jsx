import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import Card5Container from './Card5Container'
import {PreviewCardContext} from '../components/PreviewCard'
import { ButtonSelectContext } from '../components/ButtonSelect'

const Review5Container = () => {
  const {previewId,setPreviewId} = useContext(PreviewCardContext)
  const {defaultSettings,setDefaultSettings} = useContext(ButtonSelectContext)
  return (
    <>
        <Page
        fullWidth
        title='Review with Floating'
        primaryAction={
          <Button onClick={()=>setPreviewId(5)} disabled={previewId===5?true:false} primarySuccess={previewId===5?false:true}>{previewId===5?"Active":"Select"}</Button>
        }
        >
            <Card5Container settings={defaultSettings} setSettings={setDefaultSettings}></Card5Container>

        </Page>
    </>
  )
}

export default Review5Container