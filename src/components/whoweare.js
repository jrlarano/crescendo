import React from 'react'
import { Box, Text, Heading, Button } from 'grommet'

export default function WhoWeAre() {


  const data = {
    title: "Our Commitment to Professionals",
    content: "We help our partners deliver industry leading results with a commitment to excellence, thought-provoking insights and experienced distribution. We are laser focused on our shared goal – helping clients achieve their objectives."
  }

  return (
    <Box align="center" width="100%">
        <Box fill>
          {/* <Image fit="cover" src={`${process.env.PUBLIC_URL}/images/banner1.jpg`} /> */}
          <Box
            height="400px"
            background={`url(${process.env.PUBLIC_URL}/images/whoweare_bg.jpg)`}
            style={{boxShadow: "inner 0 0 5px #888"}}
          >
            <Box className="mainWidth" align="center" pad="medium">
              <Heading
                level="3"
                margin={{ vertical: 'medium' }}
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "34px",
                  lineHeight: "34px"
                }}
              >
                {data.title}
              </Heading>
              <Text color="#fff">{data.content}</Text>

              <Box pad="large">
                <Button 
                  label="Contact Us"
                  style={{
                    color:"white",
                    borderRadius:"0",
                    border:"1px solid #fff"
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}
