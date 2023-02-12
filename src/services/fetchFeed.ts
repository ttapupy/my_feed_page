import { telexApi } from "../api";
import { XMLParser } from "fast-xml-parser";


export const getLatest = async (topic: string) => {
  const response = await telexApi.get(topic);
  const parser = new XMLParser();
  let result;
  try {
    result = parser.parse(response.data, true)
  } catch (err) {
    // console.log(err)
  }
  return result['rss']
}