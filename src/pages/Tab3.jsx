import { Page, Button, Divider, LegacyStack } from '@shopify/polaris'
import React from 'react'
// import FormInput from '../components/FormInput'
// import FormCheckBox from '../components/FormCheckBox'

const Tab3 = () => {
  return (
    <Page
    fullWidth
    title='Widgets Settings'
    primaryAction={{content:"Update"}}
    secondaryActions={<Button>Reset to default</Button>}
    >
      <Divider borderColor='border-inverse'></Divider>

      <LegacyStack >
        <LegacyStack.Item fill >
          {/* <FormInput></FormInput> */}
        </LegacyStack.Item>
        <LegacyStack.Item>
          {/* <FormCheckBox></FormCheckBox> */}
        </LegacyStack.Item>
      </LegacyStack>

    </Page>
  )
}

export default Tab3