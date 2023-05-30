export interface ProductState {
  productName: string;
  category: string;
  unit?: string;
  description?: string;
  price: number;
  image?: string;
  discount?: number;
  initialStock?: number;
  sku?: string;
  [key:string]: any;
}

export const InitialProductState: ProductState = {
  productName: '',
  category: '',
  unit: '',
  description: '',
  price: 0,
  image: '',
  discount: 0,
}

export interface ProjectState {
  name: string;
  description: string;
  phoneNumber: string;
  category: string;
  currency: string;
  facebookURL: string;
  instagramURL: string;
  twitterURL: string;
  published: boolean;
  address: string;
  location: string;
  bannerUrl: string;
  template: {
    primaryColor: string;
    secondaryColor: string;
    bodyFontColor: string;
    nameFontFamily: string;
    bodyFontFamily: string;
    nameFontSize: string;
    bodyFontSize: string;
    otherFontSize: string;
    carouselInclude: boolean;
    [key:string]: any;
  };
  products: ProductState[];
  [key:string]: any;
}

import image from "../../assets/images/Templates/Ecommerce/heroBackground.png";

export const initialProjectState: ProjectState ={
  name: "Lorem Emporium",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
  phoneNumber: "024 12 345 6789",
  category: "Ecommerce",
  currency: "GHC",
  facebookURL: "",
  instagramURL: "",
  twitterURL: "",
  published: false,
  address: "Add your Address",
  location: "Add your location",
  bannerUrl: image,
  template: {
    primaryColor: "#15616B",
    secondaryColor: "#ffffff",
    bodyFontColor: "#222222",
    nameFontFamily: "Poppins, sans-serif",
    bodyFontFamily: "Roboto, sans-serif",
    nameFontSize: "96px",
    bodyFontSize: "24px",
    otherFontSize: "40px",
    carouselInclude: true,
  },
  products: [],
};