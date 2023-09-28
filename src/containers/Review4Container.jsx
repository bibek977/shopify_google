import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import Card4Container from './Card4Container'
import {PreviewCardContext} from '../components/PreviewCard'

const Review4Container = () => {
  const {previewId,setPreviewId} = useContext(PreviewCardContext)
  return (
    <>
        <Page
        fullWidth
        title='4. Review with Grid'
        primaryAction={
          <Button onClick={()=>setPreviewId(4)} disabled={previewId===4?true:false} primarySuccess={previewId===4?false:true}>{previewId===4?"Active":"Select"}</Button>
        }
        >
            <Card4Container></Card4Container>

        </Page>
    </>
  )
}

export default Review4Container