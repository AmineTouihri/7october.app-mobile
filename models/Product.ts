export  interface Product {
  _id: string;
  title: string;
  image: string;
  categories: string[];
  source: string;
  impact: "HIGH IMPACT" | "LOW IMPACT";
  description: string;
  alternative?: {
    _id: string;
    title: string;
    image: string;
  };
  published: boolean;
}