import React from 'react'
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Carousel,
  Button
} from 'grommet';

export default function EventCard({id, data, isMobile}) {

  return (
    <Box pad="small" width={isMobile ? "100%" : "33.33%"} id={id}>
      <Card
        elevation="large"
        width="medium"
        style={{
          borderRadius:"0",
          borderBottom:`10px solid ${data.color}`,
          background:isMobile? "#001a7b" : "#1450d2"
        }}
      >
        <CardBody height="medium">
          <Box pad="medium" style={{color:"#fff"}}>
            <Text>{data?.title?? ""}</Text>
            <Text>{data?.desc?? ""}</Text>
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
        </CardBody>
      </Card>
    </Box>
  )
}
