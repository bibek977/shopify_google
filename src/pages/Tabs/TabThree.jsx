import {  Layout, Page,Text  } from '@shopify/polaris'
import React from 'react'
import CardContainer from '../../containers/CardContainer'
import FormContainer from '../../containers/FormContainer'

const TabThree = () => {
  const preview = (text)=>{
    return(
      <Text>
        <p className='fw-medium'>{text}</p>
      </Text>
    )
  }
  return (
    <>
       <Page
      fullWidth
    >
      <Layout>
        <Layout.Section>
          <div className="bg-img mb-5">
            <Page
             title={preview('Preview')}
             fullWidth
             >
              <CardContainer></CardContainer>
            </Page>
          </div>
        </Layout.Section>
        <Layout.Section>
          <FormContainer></FormContainer>
        </Layout.Section>
      </Layout>
    </Page>
    </>
  )
}

export default TabThree