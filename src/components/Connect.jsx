import { Button, LegacyCard, LegacyStack, Text, Thumbnail } from '@shopify/polaris'
import React from 'react'
import '../components/Connect.css'

export const Connect = () => {
  return (
    <LegacyCard sectioned>
        <LegacyStack>
            <LegacyStack.Item fill>
                <LegacyStack>

                <LegacyStack.Item >

                <Thumbnail 
                source={"https://lh5.googleusercontent.com/p/AF1QipMfZMRCV3ipOD54PJKJ0lY8E1QQJB4jFnxj3vLR=w410-h240-k-no"}
                size='medium'
                ></Thumbnail>
                </LegacyStack.Item>
                <LegacyStack.Item>
                    <Text variant='headingLg'>Nerd Platoon Pvt. Ltd</Text>
                    <Text>SallaGhari, Bhaktapur 44800, Nepal</Text>
                </LegacyStack.Item>
                </LegacyStack>
            </LegacyStack.Item>
            <LegacyStack.Item>
                <Button destructive>Connect</Button>
            </LegacyStack.Item>
        </LegacyStack>
    </LegacyCard>
  )
}
