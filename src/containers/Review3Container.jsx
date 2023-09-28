import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import Card3Container from './Card3Container'
import {PreviewCardContext} from '../components/PreviewCard'

const Review3Container = () => {
  const {setPreviewId,previewId} = useContext(PreviewCardContext)
  return (
    <>
        <Page
        fullWidth
        title='3. Review with Badge-III'
        primaryAction={
          <Button onClick={()=>setPreviewId(3)} disabled={previewId===3?true:false} primarySuccess={previewId===3?false:true}>{previewId===3?"Active":"Select"}</Button>
        }
        >
            <Card3Container></Card3Container>

        </Page>
    </>
  )
}

export default Review3Container