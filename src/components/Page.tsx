import React from 'react'
import Feed from "./Feed";
import FeedBox from "./FeedBox";


const Page = () => {
  const sources = [{ name: 'Telex friss', ref: 'latestTelex', path: 'rss' }]

  return (
    <>
      {sources.map((source, index) => {
        return (
          <FeedBox source={source}>
            <Feed key={index} source={source}/>
          </FeedBox>
        )
      })
      }
    </>
  )
}

export default Page;