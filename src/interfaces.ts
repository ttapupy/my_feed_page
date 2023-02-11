export interface Item {
  title: string;
  link?: string;
  pubDate?: string;
  guid?: string;
  category?: string;
  description: string;
}

export interface Channel {
  title: string;
  link?: string;
  description?: string;
  item: Item[];
}