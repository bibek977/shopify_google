import {  Layout, Page,Text  } from '@shopify/polaris'
import React from 'react'
import FormContainer from '../../containers/FormContainer'
import Preview from '../../components/Preview'

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
              <Preview></Preview>
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