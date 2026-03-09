import { api, ApiResponse } from './api';
import { namesOfAllah } from '@/data/namesComplete';

export interface NameOfAllah {
    id: string;
    number: number;
    nameArabic: string;
    transliteration: string;
    meaningEN: string;
    category: string;
    quranicReference?: string;
}

export const nameService = {
    async getAllNames(): Promise<ApiResponse<any[]>> {
        try {
            const response = await api.get<ApiResponse<any[]>>('/names');
            if (response.data.success) return response.data;
            throw new Error('API unsuccessful');
        } catch (error) {
            // Fallback to local 99-name complete data
            console.warn('Names API failed, using local namesComplete data');
            return { success: true, data: namesOfAllah as any[] };
        }
    },

    async getNameById(id: string): Promise<ApiResponse<any>> {
        try {
            const response = await api.get<ApiResponse<any>>(`/names/${id}`);
            if (response.data.success) return response.data;
            throw new Error('API unsuccessful');
        } catch (error) {
            const name = namesOfAllah.find(n => String(n.number) === id);
            if (!name) return { success: false, error: 'Name not found' };
            return { success: true, data: name };
        }
    },
};
