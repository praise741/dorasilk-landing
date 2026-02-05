import client from "./client";

export interface Product {
    id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    handle: string;
    images: string[];
    variants: any[];
}

export const productsApi = {
    getAll: async () => {
        const response = await client.get<Product[]>("/products");
        return response.data;
    },

    getBySlug: async (slug: string) => {
        const response = await client.get<Product>(`/products/${slug}`);
        return response.data;
    },

    getCollections: async () => {
        const response = await client.get("/products/collections");
        return response.data;
    }
};
