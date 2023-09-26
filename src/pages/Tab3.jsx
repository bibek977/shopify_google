import { Page, Button, Divider, LegacyStack, Card } from '@shopify/polaris'
import React from 'react'
import CoverCard from '../components/CoverCard'
import SlideContainer from '../components/SlideContainer'
import { FormSettings } from '../components/FormSettings'
// import FormInput from '../components/FormInput'
// import FormCheckBox from '../components/FormCheckBox'

const Tab3 = () => {
  return (
    <>
    <Page
    fullWidth
    title='Preview'
    >


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
      <Card>

      <Page 
        fullWidth
        title='Widgets Settings'
        primaryAction={{content:"Update"}}
        secondaryActions={<Button>Reset to default</Button>}
      >

      <Divider borderColor='border-inverse'></Divider>

      <FormSettings></FormSettings>

      <Divider borderColor='border-inverse'></Divider>
    </Page>
    </Card>

    </>

  )
}

export default Tab3