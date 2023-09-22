import React from 'react'
import { Layout,LegacyCard,List, Text } from '@shopify/polaris'
import { footer_data } from './FooterData'

const Footer = () => {
  return (
    <LegacyCard sectioned>
        <LegacyCard.Section>
            <Layout>
                <List type='number'>
                    {footer_data.map((e,i)=>{
                        return(
                            <List.Item key={i}><Text>{e.foo}</Text></List.Item>
                            
                            )
                        })}
                </List>

            </Layout>
        </LegacyCard.Section>
    </LegacyCard>
  )
}

export default Footer