import { Button, LegacyCard, LegacyStack, Text } from '@shopify/polaris'
import React from 'react'

export const Update = () => {
  return (
    <LegacyCard sectioned>
        <LegacyStack>
            <LegacyStack.Item fill>
                <Text>
                You can update reviews once in every 24 hour (Last Updated: Not updated yet)
                </Text>
            </LegacyStack.Item>
            <LegacyStack.Item>
                <Button >Update Now</Button>
            </LegacyStack.Item>
        </LegacyStack>
    </LegacyCard>
  )
}
