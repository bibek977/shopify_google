import React from 'react'
import { LegacyCard,List, Page, Text,Card } from '@shopify/polaris'
import { footer_data } from './FooterData'

const Footer = () => {
  return (
    // <Page fullWidth>

    <Card background='bg-subdued'>
        <LegacyCard.Section title="Setup Instructions:">
                <List type='number'>
                    {footer_data.map((e,i)=>{
                        return(
                            <List.Item key={i}><Text><small>{e.foo}</small></Text></List.Item>
                            
                            )
                        })}
                </List>

        </LegacyCard.Section>
    </Card>

    // </Page>
  )
}

export default Footer