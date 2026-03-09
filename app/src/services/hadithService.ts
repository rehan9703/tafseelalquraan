import { api, type ApiResponse } from './api';
import { hadiths } from '@/data/hadithComplete';

export interface Hadith {
    id: string;
    collection: string;
    number: number;
    arabicText: string;
    translationEN: string;
    narrator: string;
    source: string;
    topic: string;
    benefits?: string;
    explanation?: string;
}

export const hadithService = {
    async getAllHadith(collection: string = 'bukhari', search?: string, page: number = 1, limit: number = 30): Promise<ApiResponse<any>> {
        try {
            const params: any = { collection, page, limit };
            if (search && search.length > 2) params.search = search;

            const response = await api.get<ApiResponse<any>>('/hadith', { params });
            if (response.data.success) return response.data;
            throw new Error('API unsuccessful');
        } catch (error) {
            // Fallback to local complete 42-hadith data
            console.warn('Hadith API failed, using local hadithComplete data');
            let result = hadiths as any[];
            if (search) {
                result = result.filter(h =>
                    h.translationEN?.toLowerCase().includes(search.toLowerCase()) ||
                    h.category?.toLowerCase().includes(search.toLowerCase())
                );
            }
            return {
                success: true,
                data: {
                    hadiths: result.slice((page - 1) * limit, page * limit),
                    pagination: {
                        page,
                        limit,
                        total: result.length,
                        pages: Math.ceil(result.length / limit)
                    }
                }
            };
        }
    },

    async getHadithById(id: string): Promise<ApiResponse<any>> {
        try {
            const response = await api.get<ApiResponse<any>>(`/hadith/${id}`);
            if (response.data.success) return response.data;
            throw new Error('API unsuccessful');
        } catch (error) {
            const hadith = hadiths.find(h => String(h.id) === id);
            if (!hadith) return { success: false, error: 'Hadith not found' };
            return { success: true, data: hadith };
        }
    },

    async getDailyHadith(): Promise<ApiResponse<any>> {
        try {
            const response = await api.get<ApiResponse<any>>('/hadith/daily');
            if (response.data.success) return response.data;
            throw new Error('API unsuccessful');
        } catch (error) {
            const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
            return { success: true, data: hadiths[dayOfYear % hadiths.length] };
        }
    }
};
