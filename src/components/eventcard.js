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

  const month = data.date.split(" ")[0]
  const day = data.date.split(" ")[1]

  return (
    <Box pad="small" width={isMobile ? "100%" : "33.33%"} id={id} style={{marginTop:"24px"}}>
      <Card
        elevation="large"
        width="medium"
        style={{
          borderRadius:"0",
          borderBottom:`10px solid ${data.color}`,
          background:isMobile? "#001a7b" : "#1450d2",
        }}
      >
        <CardBody height="medium">
          <Box
            pad="medium"
            background="#001254"
            style={{
              position:"absolute",
              width:"100px",
              marginTop:"-24px",
              marginLeft:"24px",
              paddingTop:"10px"
            }}
          >
            <Text style={{fontSize:"12px"}}>{month}</Text>
            <Text style={{fontSize:"44px", fontWeight:"600"}}>{day}</Text>
          </Box>
          <Box pad="medium" style={{color:"#fff", paddingTop:"80px", textAlign:"left"}}>
            <Text style={{fontSize:"24px", fontWeight:"600", lineHeight:"40px"}}>{data?.title?? ""}</Text>
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
