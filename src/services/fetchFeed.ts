import { telexApi } from "../api";
import { XMLParser } from "fast-xml-parser";


export const getLatest = async (topic: string) => {
  const response = await telexApi.get(topic);
  const parser = new XMLParser();
  return parser.parse(response.data)['rss']
}