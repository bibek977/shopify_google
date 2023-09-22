import React from 'react'
import { Connect } from '../components/Connect'
import { LegacyCard } from '@shopify/polaris'
import { Update } from '../components/Update'
import Footer from '../components/Footer'

export const Tab1 = () => {
  return (
    <LegacyCard.Section>
      <Connect></Connect>
      <Update></Update>
      <Footer></Footer>
    </LegacyCard.Section>
  )
}
