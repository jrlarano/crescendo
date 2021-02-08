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
import EventCard from './eventcard';

export default function UpcomingEvents({ isMobile }) {

  const eventsData = [
    {
      date: "JAN 28",
      title: "Insight Exchange Network",
      desc: "Join us for this conference showcasing innovation",
      location: "Chicago, IL"
    },
    {
      date: "FEB 12",
      title: "Citywide Buyer's Retreat",
      desc: "Find out how banks are responding to the changing future of internet...",
      location: "The Wagner, New York"
    },
    {
      date: "MAY 6",
      title: "Research Exchange",
      desc: "Find the best online resources to help with your new investments...",
      location: "London, England"
    },
  ]
  

  return (
    <Box marginBottom="20px" className="mainWidth">
      <Box width="100%" style={{textAlign:"left"}} pad="small">
        <Heading level="3" style={{marginBottom:0}}>
          Upcoming Events
        </Heading>
          <Text size="small">This needs a great tagline, but I’ll fill it in later</Text>
      </Box>
      {isMobile && (
        <Carousel fill>
          {eventsData.map((data, index) => (
            <EventCard
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
        {eventsData.map((data, index) => (
          <EventCard
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
