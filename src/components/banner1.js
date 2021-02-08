import React from 'react'
import { Box, Carousel, Image, Text, Heading } from 'grommet'

export default function Banner1() {

  return (
      <Box align="center" width="100%">
          <Carousel fill>
            {/* <Image fit="cover" src={`${process.env.PUBLIC_URL}/images/banner1.jpg`} /> */}
            <Box height="450px" background={`url(${process.env.PUBLIC_URL}/images/banner1.jpg)`}>
              <Box
                className="mainWidth"
                style={{
                  textAlign:"left",
                  color:"#fff"
                }}
              >
                <Heading level="1" color="#fff">ACME Wealth<br/>Management Platform</Heading>
                <Box style={{fontFamily:"Myriad Pro"}}>
                  <Text style={{fontSize:"28px", lineHeight:"28px"}}>Investment Excellence.</Text>
                  <Text style={{fontSize:"28px", lineHeight:"28px"}}>Diversity of thought.</Text>
                  <Text style={{fontSize:"28px", lineHeight:"28px"}}>Organizational strength.</Text>
                </Box>
              </Box>
            </Box>
          </Carousel>
      </Box>
  )
}
