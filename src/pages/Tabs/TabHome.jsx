import { Card, LegacyStack, LegacyTabs,Text } from '@shopify/polaris'
import React, { useState, useCallback } from 'react'
import TabOne from './TabOne'
import TabTwo from './TabTwo'
import TabThree from './TabThree'
import TabFour from './TabFour'

const TabHome = () => {

    const [selected,setSelected] = useState(0)

    const handleTabChange = useCallback(
      (selectedTabIndex) => setSelected(selectedTabIndex),
      [],
    )
    
    const PageTitle=(tabTitle)=>{
        return(

            <LegacyStack >
                <LegacyStack.Item>
                <i class="fa-solid fa-chevron-up fa-rotate-90" style={{color: '#a5afc0'}}></i>
                </LegacyStack.Item>
                <LegacyStack.Item fill>
                    <Text>
                        <strong style={{color:'black'}}>{tabTitle}</strong>
                    </Text>
                </LegacyStack.Item>
            </LegacyStack>
        )
    }

    const tabs = [
        {
            id : "connect",
            // content : PageTitle("Connect Google Platform"),
            content : <strong style={{color:'black'}}>Connect Google Platform</strong>,
            accessibilityLabel: 'Home Connect',
            panelID: 'connect-1',
        },
        {
            id : "template",
            content : PageTitle("Layout Template"),
            panelID: 'template-1',
        },
        {
            id : "setting",
            content : PageTitle("Layout Setting"),
            panelID: 'setting-1',
        },
        {
            id : "installation",
            content : PageTitle("Installation"),
            panelID: 'installation-1',
        }
      ]
  return (
    <>

        <Card padding='200' background='bg-subdued'>

          <LegacyTabs 
            tabs={tabs} 
            fitted
            selected={selected}
            onSelect={handleTabChange}
            >
              {
                  selected === 0 && <TabOne></TabOne>
                }
              {
                  selected === 1 && <TabTwo></TabTwo>
                }
              {
                  selected === 2 && <TabThree></TabThree>
                }
              {
                  selected === 3 && <TabFour></TabFour>
                }
          </LegacyTabs> 

                </Card>

    </>
  )
}

export default TabHome