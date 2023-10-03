import { Button, LegacyStack, Text,Card } from '@shopify/polaris'
import axios from 'axios'
import React from 'react'

export const Update = () => {
  const updataDataApi = ()=>{
    console.log("update")
    axios
      .post("http://127.0.0.1:8000/","update")
      .then(()=>{
        console.log("update signal sent to backend")
      })
      .catch((e)=>{
        console.log(e)
      })
  }
  return (
    <Card>
        <LegacyStack alignment='center'>
            <LegacyStack.Item fill>
                <Text>
                  <small>
                You can update reviews once in every 24 hour (Last Updated: Not updated yet)
                  </small>
                </Text>
            </LegacyStack.Item>
            <LegacyStack.Item>
                <Button onClick={updataDataApi}>Update Now</Button>
            </LegacyStack.Item>
        </LegacyStack>
    </Card>
  )
}
