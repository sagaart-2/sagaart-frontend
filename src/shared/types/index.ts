export interface IArtist {
  id: number;
  name: string;
  lastname: string;
}

export interface ICategory {
  id: number;
  name_category: string;
}

export interface IStyle {
  id: number;
  name_style: string;
}

export interface IGenre {
  id: number;
  name_genre: string;
}

export interface IProductCard {
  id: number;
  foto: string;
  artist: IArtist;
  title: string;
  category: ICategory;
  style: IStyle;
  genre: IGenre;
  description: string;
  year_create: string;
  width: number;
  height: number;
  material_work: string;
  material_tablet: string;
  unique: boolean;
  investment_attractiveness: boolean;
  price: string;
}

export type ISubscriptionOption = {
  id: number;
  period: string;
  description_1: string;
  description_2: string;
  price: string;
};
