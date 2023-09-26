import { Button, LegacyCard, LegacyStack, Text, Thumbnail,Card } from '@shopify/polaris'
import React from 'react'
import '../components/Connect.css'

export const Connect = () => {
  return (
    <Card background='bg-subdued'>
        <LegacyStack alignment='center'>
            <LegacyStack.Item fill>
                <LegacyStack>

                <LegacyStack.Item >

                <Thumbnail 
                source={"https://lh5.googleusercontent.com/p/AF1QipMfZMRCV3ipOD54PJKJ0lY8E1QQJB4jFnxj3vLR=w410-h240-k-no"}
                size='medium'
                ></Thumbnail>
                </LegacyStack.Item>
                <LegacyStack.Item>
                    <Text><b>Nerd Platoon Pvt. Ltd</b></Text>
                    <Text><small>SallaGhari, Bhaktapur 44800, Nepal</small></Text>
                </LegacyStack.Item>
                </LegacyStack>
            </LegacyStack.Item>
            <LegacyStack.Item>
                <Button destructive>Disconnect</Button>
            </LegacyStack.Item>
        </LegacyStack>
    </Card>
  )
}
