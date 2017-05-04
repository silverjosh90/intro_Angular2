export interface INasaImageImageAPIService {
  collection: INasaImageImageCollection;
}

export interface INasaImageImageCollection {
  version: string;
  items: INasaImage[];
}

export interface INasaImage {
  data: INasaImageData[];
  links: INasaImageLinks[];
  href: string;
}

export interface INasaImageData {
  nasa_id: string;
  title: string;
  date_created: string;
  photographer: string;
  description: string;
  location: string;
  center: string;
  media_type: string;
  keywords: string[];
}

export interface INasaImageLinks {
  rel: string;
  render: string;
  href: string;
}
