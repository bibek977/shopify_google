import React from 'react'
import { LegacyCard,List, Text } from '@shopify/polaris'
import { footer_data } from './FooterData'

const Footer = () => {
  return (
    <LegacyCard sectioned>
        <LegacyCard.Section title="Setup Instructions:">
                <List type='number'>
                    {footer_data.map((e,i)=>{
                        return(
                            <List.Item key={i}><Text>{e.foo}</Text></List.Item>
                            
                            )
                        })}
                </List>

        </LegacyCard.Section>
    </LegacyCard>
  )
}

export default Footer