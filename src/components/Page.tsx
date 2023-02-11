import React, { useEffect } from 'react'
import Feed from "./Feed";
import { getLatest } from "../services/fetchFeed";
import { useQuery } from "react-query";
import { Channel } from "../interfaces";


const Page = () => {
  const {
    isFetching,
    data,
    isError,
    error
  }: { isFetching: boolean, data: (Record<'channel', Channel> | null | undefined), isError: boolean, error: (object | null | undefined) } =
    useQuery(["latestTelex"], () => getLatest('rss'));

// useEffect(() => {
//     console.log('data', data)
//   }, [data]);

  return (
    <>
      {!!data && <Feed feed={data.channel}/>}
    </>
  )
}

export default Page;