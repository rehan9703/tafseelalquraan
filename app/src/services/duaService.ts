import { api, ApiResponse, handleApiError } from './api';

export interface Dua {
    id: string;
    titleEN: string;
    arabicText: string;
    transliteration: string;
    translationEN: string;
    translationUR?: string;
    situation: string;
    source: string;
    virtues?: string;
    audioUrl?: string;
}

export const duaService = {
    async getAllDuas(situation?: string): Promise<ApiResponse<Dua[]>> {
        try {
            const response = await api.get<ApiResponse<Dua[]>>('/duas', {
                params: situation ? { situation } : undefined,
            });
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async getDuaById(id: string): Promise<ApiResponse<Dua>> {
        try {
            const response = await api.get<ApiResponse<Dua>>(`/duas/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },
};
