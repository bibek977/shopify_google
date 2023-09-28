import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import Card3Container from './Card3Container'
import {PreviewCardContext} from '../components/PreviewCard'

const Review3Container = () => {
  const {setPreviewId} = useContext(PreviewCardContext)
  return (
    <>
        <Page
        fullWidth
        title='3. Review with Badge-III'
        primaryAction={
            <Button primary onClick={()=>setPreviewId(3)}>Select</Button>
        }
        >
            <Card3Container></Card3Container>

        </Page>
    </>
  )
}

export default Review3Container