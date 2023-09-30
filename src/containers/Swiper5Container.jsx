import React from 'react'
import CustomCard from '../components/CustomCard'

const Swiper5Container = (props) => {
    const {data,settings,setSettings} = props
  return (
    <>


<div className='d-flex flex-column'>

        {
            data?.map((e,i)=>{
                return(
                <div>

                <CustomCard data={e} key={i} settings={settings} setSettings={setSettings}></CustomCard>
                </div>
            )
        })
    }
</div>

    </>
  )
}

export default Swiper5Container