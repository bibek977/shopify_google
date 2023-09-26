import { Button, LegacyCard, LegacyStack, Text,Card } from '@shopify/polaris'
import React from 'react'

export const Setup = () => {
  return (
    <Card>
        <LegacyStack alignment='center'>
            <LegacyStack.Item fill>
                <Text>
                  <b className='fs-5'>
                  Setup your widget directly to your store
                  </b>
                </Text>
            </LegacyStack.Item>
            <LegacyStack.Item>
                <Button primary>Setup</Button>
            </LegacyStack.Item>
        </LegacyStack>
    </Card>
  )
}
