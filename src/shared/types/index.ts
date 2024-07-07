export interface IShow {
  id: number;
  year: number;
  title: string;
  place: string;
  city: string;
  country: string;
}

export interface IWorks {
  id: number;
  photo: string;
  title: string;
  category: ICategory;
  style: IStyle;
  genre: string;
  width: number;
  height: number;
  material_work: string;
  material_tablet: string;
  price: string;
}

export interface IArtist {
  id: number;
  name: string;
  lastname: string;
  photo: string;
  bio: string;
  date_of_birth: string;
  city_of_birth: string;
  city_of_residence: string;
  country: string;
  education: string | null;
  art_education: string | null;
  teaching_experience: boolean;
  personal_style: boolean;
  collected_by_private_collectors: boolean;
  collected_by_major_institutions: boolean;
  industry_award: string;
  social: string;
  solo_shows: IShow[];
  group_shows: IShow[];
  works: IWorks[];
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IStyle {
  id: number;
  name: string;
}

export interface IProductCard {
  id: number;
  photo: string;
  artist: IArtist;
  title: string;
  category: ICategory;
  style: IStyle;
  genre: string;
  description: string;
  year_create: string;
  width: number;
  height: number;
  material_work: string;
  material_tablet: string;
  unique: boolean;
  investment_attractiveness: boolean;
  price: string;
  avg_cost_of_work: string;
}

export interface IBidRequest {
  photo: File | null;
  category: string;
  year_create: number;
  height: number;
  width: number;
  material_work: string;
  material_tablet: string;
  count_title: number;
  count_artist: number;
  country: string;
  gender: string;
  solo_shows: string;
  group_shows: string;
  age: number;
  is_alive: boolean;
  title: string;
  artist_name: string;
  artist_lastname: string;
}

export interface IBidResponse {
  id: number;
  photo: string;
  category: string;
  year_create: number;
  height: number;
  width: number;
  material_work: string;
  material_tablet: string;
  count_title: number;
  count_artist: number;
  country: string;
  gender: string;
  solo_shows: string;
  group_shows: string;
  age: number;
  is_alive: boolean;
  title: string;
  artist_name: string;
  artist_lastname: string;
  price: string;
}

export type ISubscriptionOption = {
  id: number;
  period: string;
  description_1: string;
  description_2: string;
  price: string;
};
