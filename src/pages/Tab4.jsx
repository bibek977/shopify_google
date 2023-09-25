import React from 'react'
import { Box, Button, Card, LegacyStack, Page,Text } from '@shopify/polaris'

const Tab4 = () => {
  return (
    <Page
    // title='Setup your widget directly to your store'
    // primaryAction={{'content' : 'Setup'}}
    fullWidth
    >
      <Card>

      <LegacyStack>
        <LegacyStack.Item fill>
          <Text>
            <h4>Setup your widget directly to your store</h4>
          </Text>
        </LegacyStack.Item>
        <LegacyStack.Item>
          <Button primary>Setup</Button>
        </LegacyStack.Item>
      </LegacyStack>
      </Card>

      <Box >
        <div className="d-flex justify-content-center align-items-center m-5 p-5">

        <iframe src='https://www.youtube.com/embed/EtW4evOuEB8' title='app-description' height={400} width={600} style={{border:"2px",borderRadius:'10px'}}>
        </iframe>
        </div>
      </Box>
    </Page>
  )
}

export default Tab4