import { config } from "dotenv";
import { Product } from "../type/productType";
config();

const apiUrl = process.env.PUBLIC_BASE_URL;
export default async function getProductById(id: string): Promise<Product> {
  const response = await fetch(apiUrl + id);
  if (!response.ok) {
    throw new Error("Error while fetching products by id");
  }
  const data = await response.json();
  console.log(data);
  return data;
}
