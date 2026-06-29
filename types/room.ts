export type RoomCollectionItem = {
  title: string;
  description: string;
  price: string;
  images: string[];
};

export type Room = {
  id: string;
  number: string;
  slug: string;
  title: string;
  description: string;
  long_description: string;
  price: string;
  guests: string;
  bed: string;
  view: string;
  image: string;
  featured_image: string;
  story_title: string;
  story_text: string;
  size: string;
  highlights: string[];
  collection: RoomCollectionItem[];
};
