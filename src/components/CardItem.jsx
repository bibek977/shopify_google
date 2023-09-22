import { LegacyCard, LegacyStack, Text, Thumbnail } from '@shopify/polaris'
import React from 'react'
import '../components/CardItem.css'
import {google_logo} from '../components/LogoGoogle'

const CardItem = () => {
  return (
    <LegacyCard>
        <LegacyStack>
            <LegacyStack.Item>
                <div className="img-rounded" >
                    <Thumbnail alt='profile-pic' source={"https://lh3.googleusercontent.com/a-/ALV-UjWH0I7fmtse-e5F9b9OrOzlXXnwZDZ2ONSEfGVmCceL8uA=w36-h36-p-rp-mo-ba3-br100"} size='medium'></Thumbnail>
                </div>
            </LegacyStack.Item>
            <LegacyStack.Item>
                <Text variant='headingLg'>Narayan adhikari</Text>
                <Text >11 months ago</Text>
            </LegacyStack.Item>
            <LegacyStack.Item>
                <Thumbnail alt='google' source={google_logo} size='medium'></Thumbnail>
            </LegacyStack.Item>
        </LegacyStack>
    </LegacyCard>
  )
}

export default CardItem