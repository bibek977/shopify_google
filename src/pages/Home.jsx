import React, { useState, useCallback } from 'react'
import { Page,LegacyTabs,Text, LegacyCard, LegacyStack } from '@shopify/polaris';
import { Icon } from '@shopify/polaris';
import {
  QuestionMarkMajor, ChevronRightMinor
} from '@shopify/polaris-icons';
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';
import  Tab3  from './Tab3';
import  Tab4  from './Tab4';

const Home = () => {

  const [selected,setSelected] = useState(0)
  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  )
  
  const PageTitle=(title) =>{
    return(
      <LegacyStack distribution='fill'><Icon
      source={ChevronRightMinor}
      color="base"
    /><Text><h5>{title}</h5></Text>
</LegacyStack>
    )
  } 
  const tabs = [
    {
      'id' : "connect",
      'content' : "Connect Google Platform"
    },
    {
      'id' : "template",
      'content' : PageTitle("Layout Template")
    },
    {
      'id' : "setting",
      'content' : PageTitle("Layout Setting")
    },
    {
      'id' : "installation",
      'content' : PageTitle("Installation")
    }
  ]
  return (
    <Page 
      className="App" 
      title="Google reviews: the digital mirror for businesses to reflect their service"
      fullWidth
      primaryAction={<Icon
        source={QuestionMarkMajor}
        color="base"
      />}
    >
        <LegacyCard>

          <LegacyTabs 
            tabs={tabs} 
            fitted
            selected={selected}
            onSelect={handleTabChange}
            >
              {
                selected === 0 && <Tab1></Tab1>
              }
              {
                selected === 1 && <Tab2></Tab2>
              }
              {
                selected === 2 && <Tab3></Tab3>
              }
              {
                selected === 3 && <Tab4></Tab4>
              }
          </LegacyTabs>
        </LegacyCard>
    </Page>
  )
}

export default Home