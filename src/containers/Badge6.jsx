import React from 'react'
import CoverCard from '../components/CoverCard'
import { Card,LegacyStack,Button,Text, VerticalStack} from '@shopify/polaris'

const Badge6 = () => {
  return (
    <>
         <Card background='bg-subdued'>
      <VerticalStack gap='5'>

    <LegacyStack>
      <LegacyStack.Item fill>
        <Text>
          <h4>Review with Static</h4>
        </Text>
      </LegacyStack.Item>
      <LegacyStack.Item>
        <Button primary>Select</Button>
      </LegacyStack.Item>
    </LegacyStack>


      <Card >

          <div className='row'>

            <div className='d-flex justify-content-center align-items-center col-3'>
            <Card background='bg-subdued'>
              <CoverCard></CoverCard>
            </Card>
            </div>
              <Text><p className='px-3'>Click on badge to see the list of reviews.</p></Text>

    </div>

      </Card>
      
      </VerticalStack>
    </Card>
    </>

  )
}


export default Badge6