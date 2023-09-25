import React from 'react'
import '../components/CardItem.css'
import {google_logo} from '../components/LogoGoogle'
import { Avatar, Box, HorizontalStack,Text, VerticalStack,Card } from '@shopify/polaris'

const CardItem = () => {
  return (
    <Box maxWidth='400px' padding='5'>
      <Card background='bg-subdued'>
        <VerticalStack gap="5">

          <HorizontalStack gap="5" >
              <div>
            <Avatar source={"https://lh3.googleusercontent.com/a-/ALV-UjWH0I7fmtse-e5F9b9OrOzlXXnwZDZ2ONSEfGVmCceL8uA=w36-h36-p-rp-mo-ba3-br100"}></Avatar>
              </div>

            <VerticalStack>
              <Text variant='headingMd'>Narayan adhikari</Text>
              <Text variant='headingSm'><p>11 months ago</p></Text>
            </VerticalStack>
            <div>
                <Avatar source={google_logo}></Avatar>
            </div>
          </HorizontalStack>
          <HorizontalStack align='start' gap="0">
          <i class="fa-solid fa-star" style={{color: 'rgb(247, 187, 4)'}}></i>
          <i class="fa-solid fa-star" style={{color: 'rgb(247, 187, 4)'}}></i>
          <i class="fa-solid fa-star" style={{color: 'rgb(247, 187, 4)'}}></i>
          <i class="fa-solid fa-star" style={{color: 'rgb(247, 187, 4)'}}></i>
          <i class="fa-solid fa-star" style={{color: 'rgb(247, 187, 4)'}}></i>
          </HorizontalStack>
          <HorizontalStack>
            <Text>
              <p>I feel fortunate to have had the opportunity to work with such a remarkable team. Their dedication, unity, and commitment to excellence...</p>
            </Text>
          </HorizontalStack>
        </VerticalStack>
      </Card>
    </Box>
  )
}

export default CardItem