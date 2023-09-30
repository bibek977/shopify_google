import Swiper4Container from './Swiper4Container'
import { Card } from '@shopify/polaris'
import CoverCard3 from '../components/CoverCard3'
import { useApiData } from '../components/ContextData'

const Card4Container = (props) => {
  const {settings,setSettings} = props
  const {apiData,officeData} = useApiData()
  return (
    <>

    <Card>
        <div className='row'>
            <Card background='bg-subdued'>
          <div className='d-flex justify-content-start align-items-center col-12'>

        <CoverCard3 data={officeData}></CoverCard3>
          </div>
            </Card>
          <div className='col-12 p-5'>

        <Swiper4Container data={apiData} settings={settings} setSettings={setSettings}></Swiper4Container>
          </div>
        </div>
    </Card>
    </>
  )
}

export default Card4Container