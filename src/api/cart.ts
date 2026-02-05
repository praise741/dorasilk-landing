import client from "./client";

export interface CartItem {
    id: string;
    productId: string;
    variantId?: string;
    quantity: number;
    product?: any;
}

export interface Cart {
    id: string;
    items: CartItem[];
    subtotal: number;
    total: number;
}

export const cartApi = {
    get: async () => {
        const response = await client.get<Cart>("/cart");
        return response.data;
    },

    add: async (productId: string, quantity: number = 1, variantId?: string) => {
        const response = await client.post<Cart>("/cart", { productId, quantity, variantId });
        return response.data;
    },

    update: async (itemId: string, quantity: number) => {
        const response = await client.patch<Cart>(`/cart/${itemId}`, { quantity });
        return response.data;
    },

    remove: async (itemId: string) => {
        const response = await client.delete<Cart>(`/cart/${itemId}`);
        return response.data;
    },

    clear: async () => {
        // If backend supports clearing cart
        const response = await client.post("/cart/clear");
        return response.data;
    }
};
