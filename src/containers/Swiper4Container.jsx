import React from 'react'
import CustomCard from '../components/CustomCard'

const Swiper4Container = (props) => {
    const {data,settings,setSettings} = props
  return (
    <>
    <div className="custom-scrollbar border-0">
    <div className="scroll-content">


      {/* <Card > */}
        <div className='row' >
        {
          data?.map((e,i)=>{
            return(
            <div className='col-xl-4 col-lg-6 col-sm-12'>
                <CustomCard data={e} key={i} settings={settings} setSettings={setSettings}></CustomCard>
            </div>
            )
          })
        }
         
        </div>
      {/* </Card> */}

      
      </div>
    </div>
    </>
  )
}

export default Swiper4Container