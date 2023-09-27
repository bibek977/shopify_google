import { Layout, Page,Text,Box,Button,LegacyStack,Card } from '@shopify/polaris'
import { Setup } from '../../components/Setup'

const TabFour = () => {
  return (
    <Page
    fullWidth
    >
      <Layout>
        <Layout.Section>
          <Setup></Setup>
        </Layout.Section>
      </Layout>
      <Layout.Section>
      <Box >
        <div className="d-flex justify-content-center align-items-center m-5 p-5">

        <iframe src='https://www.youtube.com/embed/EtW4evOuEB8' title='app-description' height={450} width={750} style={{border:"2px",borderRadius:'10px'}}>
        </iframe>
        </div>
      </Box>
      </Layout.Section>
    </Page>
  )
}

export default TabFour