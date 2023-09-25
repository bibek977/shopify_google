import React from 'react'
import { Connect } from '../components/Connect'
import { Card, LegacyCard, LegacyStack, Page } from '@shopify/polaris'
import { Update } from '../components/Update'
import Footer from '../components/Footer'
import CoverCard from '../components/CoverCard'
import SlideContainer from '../components/SlideContainer'

export const Tab1 = () => {
  return (
    <LegacyCard.Section>
      <Connect></Connect>
      <Update></Update>
      
      <Page fullWidth title='Preview'>
      <LegacyStack>
      <Card >

        <div className='row'>
          <div className='d-flex justify-content-center align-items-center col-3'>
            <CoverCard></CoverCard>
          </div>
          <div className='col-9'>
            <SlideContainer></SlideContainer>
          </div>
        </div>

      </Card>
      </LegacyStack>
      </Page>
     
      <Footer></Footer>
    </LegacyCard.Section>
  )
}
