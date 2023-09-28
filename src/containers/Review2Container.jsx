import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import Card2Container from './Card2Container'
import {PreviewCardContext} from '../components/PreviewCard'

const Review2Container = () => {
  const {previewId,setPreviewId} = useContext(PreviewCardContext)
  return (
    <>
        <Page
        fullWidth
        title='2. Review with Badge-II'
        primaryAction={
          <Button onClick={()=>setPreviewId(2)} disabled={previewId===2?true:false} primarySuccess={previewId===2?false:true}>{previewId===2?"Active":"Select"}</Button>
        }
        >
            <Card2Container></Card2Container>

        </Page>
    </>
  )
}

export default Review2Container