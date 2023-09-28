import { Button, LegacyStack, Text,Card } from '@shopify/polaris'
import React from 'react'

export const Update = () => {
  return (
    <Card>
        <LegacyStack alignment='center'>
            <LegacyStack.Item fill>
                <Text>
                  <small>
                You can update reviews once in every 24 hour (Last Updated: Not updated yet)
                  </small>
                </Text>
            </LegacyStack.Item>
            <LegacyStack.Item>
                <Button >Update Now</Button>
            </LegacyStack.Item>
        </LegacyStack>
    </Card>
  )
}
