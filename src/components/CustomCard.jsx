import { Avatar, Box, HorizontalStack, Text } from '@shopify/polaris'
import { google_logo } from './LogoGoogle'

const CustomCard = (props) => {

  const {data,settings} = props
  const stars = Array.from({ length: data?.star }, (_, index) => (
    <i
      key={index}
      className="fa fa-star my-2 "
      style={{ color: "gold", fontSize: "14px", marginRight: "3px" }}
      aria-hidden="true"
    ></i>
  ));
  const truc = (desc,len)=>{
    return(
      
      desc.slice(0,len)+ (desc.length>len?"...":"")
    )
  }

  let cardbody 
  let text

  if (settings?.theme === 'dark') {
    cardbody = {backgroundColor:'#303030'};
    text = {color : '#fff'};
  }
  else if(settings?.theme==='light') {
    cardbody = {backgroundColor:'#efefef'};
    text = {color : '#000'};
  }
  else if(settings?.theme==='transparent'){
  
    cardbody={background:'#efefef'}
    text={color:'#000'}
 }
 else if(settings?.theme==='custom'){
    cardbody={backgroundColor:settings?.cardbody}
    text={color:settings?.text}
 }

  
  let align = settings?.align === 'center'?'text-center':settings?.align==='right'?'text-end':'text-start'

  return (
    <>
      <Box id="CardBody">
        <div className="p-3 mb-5 mt-2" style={{...cardbody,height:'250px'}} >
        <HorizontalStack align="space-between">
          <HorizontalStack>
          {settings?.ShowReviewersPhoto?
            <div >
              <Avatar size="medium" name={data.name} source={data.imageLink} />
            </div>
            : ""
          }
            <div className="mb-lg-2 mb-1 ms-1" style={text} >
            {settings?.ShowReviewersName?
              <Text as="p" variant="headingSm">
                {data.name}
              </Text>
              :
              ""
            }
             <div >
             <Text variant="bodySm" as="p">
                {data.date}
              </Text>
             </div>
            </div>
          </HorizontalStack>
          
          <div >
            <Avatar size='small' source={google_logo} name='G' />
          </div>
        </HorizontalStack>
        <div className={align}>
          <Text variant="bodyMd" as="h5">
            {stars}
          </Text>
        </div>
        {settings?.HideRatingText?
        ""
        : 
        settings?.HideReviewsWithoutComments?
        <div className={align}>

          <p style={{...text}}>
            {truc(data.description,70)}
          </p>
         </div>
            : 
            ""
        }

        </div>
      </Box>
    </>
  )
}

export default CustomCard