import { config } from "dotenv";
import { Product } from "../type/productType";
config();

const apiUrl = process.env.PUBLIC_BASE_URL;
export default async function getAllProducts(): Promise<Product[]> {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Error while fetching all products");
  }
  const data = await response.json();
  return data.products;
}
