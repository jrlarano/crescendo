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
import InsightCard from './insightcard';

export default function Insights({ isMobile }) {

  const insightsData = [
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/insight1.jpg`,
      text: 'Global Factor Investing Story',
      color: '#1450d2'
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/insight2.jpg`,
      text: '2019 Outlook',
      color: '#01a49c'
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/insight3.jpg`,
      text: 'Capital Market Assumptions',
      color: '#009bfa'
    }
  ]
  

  return (
    <Box marginBottom="20px" className="mainWidth">
      <Box width="100%" style={{textAlign:"left", color:isMobile?"#fff":"#000"}} pad="small">
        <Heading level="3" style={{marginBottom:0}}>
          {"ACME Insights"}
        </Heading>
          <Text size="small">How are factors being used around the world?</Text>
      </Box>
      {isMobile && (
        <Carousel fill>
          {insightsData.map((data, index) => (
            <InsightCard
              data={data}
              id={`insight-id-${index}`}
              key={`insight-id-${index}`}
              isMobile={isMobile}
            />
          ))}
      </Carousel>
      )}
      {!isMobile && (
        <Box direction="row">
        {insightsData.map((data, index) => (
          <InsightCard
            data={data}
            id={`insight-id-${index}`}
            key={`insight-id-${index}`}
            isMobile={isMobile}
          />
        ))}
      </Box>
      )}
    </Box>    
  )
}
