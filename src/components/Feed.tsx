import React from 'react'
import { Channel } from "../interfaces";

type FeedProps = {
  feed: Channel;
}

const Feed: React.FC<FeedProps> = ({ feed }) => {

  return (
    <>
      <h4>{feed.title}</h4>
      {feed.item.map((item, idx) => {
        return (
          <section key={idx}>
            <h5>{item.title}</h5>
            <div>{item.description}</div>
          </section>
        )
      }) }
    </>
  )
}

export default Feed;
