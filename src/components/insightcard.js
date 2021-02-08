import React from 'react'
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Carousel
} from 'grommet';

export default function InsightCard({id, data, isMobile}) {

  return (
    <Box pad="small" width={isMobile ? "100%" : "33.33%"} id={id}>
      <Card
        elevation="large"
        width="medium"
        style={{
          borderRadius:"0",
          borderBottom:`10px solid ${data.color}`,
          background:"#fff"
        }}
      >
        <CardBody height="medium">
          <Box pad="medium">
            <Box className="slicedImg">
              <Image
                fit="cover"
                src={data?.imgSrc ?? ""}
              />
            </Box>
          </Box>
        </CardBody>
        <Box
          pad={{ horizontal: 'medium' }}
          responsive={true}
          height={isMobile ? {min:"0"}: {min:"130px"}}
          style={{textAlign:"left", color:`${data.color}`}}
        >
          <Heading
            level="3"
            margin={{ vertical: 'medium' }}
            style={{
              fontWeight:"700",
              fontSize:"34px",
              lineHeight:"34px"
            }}
          >
            {data?.text?? ""}
          </Heading>
        </Box>
      </Card>
    </Box>
  )
}
