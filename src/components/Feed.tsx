import React, { useEffect, useState } from 'react'
import { Channel, Source } from "../interfaces";
import { useQuery } from "react-query";
import { getLatest } from "../services/fetchFeed";

type FeedProps = {
  source: Source;
  isActive?: boolean;
}

const Feed: React.FC<FeedProps> = ({ source, isActive }) => {
  const {
    isLoading,
    isIdle,
    isSuccess,
    data: feed,
    isError,
    error
  }: { isLoading: boolean, isIdle: boolean, isSuccess: boolean, data: (Record<'channel', Channel> | null | undefined), isError: boolean, error: (object | null | undefined) } =
    useQuery([source.ref], () => getLatest('rss'), {enabled: !!isActive});


  useEffect(() => {
    if (!isIdle && !isLoading) {
      if (isError && !!error) {
        throw new Error(`An error occurred in source, but still you can have a good day. Please try again later.`)
      }
    }
  }, [isLoading]);

  return (
    <>
      {!!feed?.channel && feed.channel.item.map((item, idx) => {
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
