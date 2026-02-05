import client from "./client";

export interface ShippingAddress {
    firstName: string;
    lastName: string;
    phone: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    postalCode: string;
    country?: string;
}

export interface CreateOrderPayload {
    guestEmail?: string;
    shippingAddress: ShippingAddress;
    paymentMethod: "paystack" | "flutterwave" | "manual";
    sessionId: string;
    notes?: string;
}

export interface Order {
    id: string;
    orderNumber: string;
    total: number;
    status: string;
    createdAt: string;
    // Add other fields as needed
}

export const ordersApi = {
    create: async (payload: Omit<CreateOrderPayload, "sessionId">) => {
        // We get session ID from localStorage directly ensuring consistency with the header
        const sessionId = localStorage.getItem("dorasilk_session_id");
        if (!sessionId) throw new Error("No session ID found");

        const response = await client.post<Order>("/orders", {
            ...payload,
            sessionId
        });
        return response.data;
    },

    getGuestOrder: async (orderNumber: string, email: string) => {
        const response = await client.get<Order>(`/orders/guest/lookup?orderNumber=${orderNumber}&email=${email}`);
        return response.data;
    }
};
