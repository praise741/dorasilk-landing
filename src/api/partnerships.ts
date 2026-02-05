import client from "./client";

export interface CreatePartnershipDto {
    fullName: string;
    businessName: string;
    businessType: string;
    location: string;
    email: string;
    phone?: string;
    website?: string;
    message: string;
}

export const partnershipsApi = {
    create: async (data: CreatePartnershipDto) => {
        const response = await client.post('/partnerships', data);
        return response.data;
    }
};
