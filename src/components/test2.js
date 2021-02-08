import React from 'react'
import {Link} from 'react-router-dom'
import {
  Anchor,
  Box,
  Grommet,
  Header,
  Nav,
  Menu,
  ResponsiveContext,
  Image,
  Main,
  Text,
  Footer
} from 'grommet'
import { grommet } from 'grommet/themes'
import Banner1 from './banner1'
import Insights from './insights'
import WhoWeAre from './whoweare'
import { useMediaQuery } from 'react-responsive'
import UpcomingEvents from './upcomingevents'

export default function Test2() {
  
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })
  const customTheme = {
    link: {
      color:"#000"
    },
    carousel: {
      animation: {
        duration: 400,
      },
      icons: {
        color: 'blue',
      },
      disabled: {
        icons: {
          color: 'grey',
        },
      },
    },
  };

  return (
    <Grommet theme={grommet}>
      <Header background="light-1" width="100%" style={{borderBottom:"16px solid #001254"}}>
        <Header background="light-1" className="mainWidth">
          <Box direction="row" align="center" gap="small">
            <Image
              height="120px"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
            />
          </Box>
          <ResponsiveContext.Consumer>
            {responsive =>
              responsive === 'small' ? (
                <Menu
                  label="Click me"
                  items={[
                    { label: 'This is', onClick: () => {} },
                    { label: 'The Menu', onClick: () => {} },
                    { label: 'Component', onClick: () => {} },
                  ]}
                />
              ) : (
                <Nav direction="row">
                  <Link to="/test2" style={{textDecoration:"none", color:"#000"}}>Home</Link>
                  <Link to="/test2" style={{textDecoration:"none", color:"#000"}}>About Us</Link>
                  <Link to="/test2" style={{textDecoration:"none", color:"#000"}}>Insights</Link>
                  <Link to="/test2" style={{textDecoration:"none", color:"#000"}}>Events</Link>
                  <Link to="/test2" style={{textDecoration:"none", color:"#000"}}>Contact Us</Link>
                </Nav>
              )
            }
          </ResponsiveContext.Consumer>
          </Header>
      </Header>
      <Banner1 />
      <Box
        style={{
          paddingBottom:"20px",
          background:isMobile? "#001a7b" : "#ebebeb"
        }}
      >
        <Insights isMobile={isMobile} />
      </Box>
      <WhoWeAre />
      <Box
        style={{
          paddingBottom: "20px",
          background: "#ebebeb"
        }}
      >
        <UpcomingEvents isMobile={isMobile} />
      </Box>

      <Footer background="#707070" pad="medium">
        <Text>Call us at 111-222-3333<br />for more information</Text>
        <Text>Social Share</Text>
      </Footer>
    </Grommet>
  );
}
