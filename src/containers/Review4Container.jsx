import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import Card4Container from './Card4Container'
import {PreviewCardContext} from '../components/PreviewCard'

const Review4Container = () => {
  const {setPreviewId} = useContext(PreviewCardContext)
  return (
    <>
        <Page
        fullWidth
        title='4. Review with Grid'
        primaryAction={
            <Button primary onClick={()=>setPreviewId(4)}>Select</Button>
        }
        >
            <Card4Container></Card4Container>

        </Page>
    </>
  )
}

export default Review4Container