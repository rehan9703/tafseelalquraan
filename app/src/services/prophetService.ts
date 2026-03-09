import { api, ApiResponse, handleApiError } from './api';
import { prophets } from '@/data/prophetsComplete';

export interface Prophet {
    id: string;
    nameArabic: string;
    nameEnglish: string;
    title: string;
    nation: string;
    orderNumber: number;
    story: string;
    lessonsLearned: string;
    keyMiracles: string;
    quranicReferences: string;
    periodEra: string;
}

export const prophetService = {
    async getAllProphets(): Promise<ApiResponse<any[]>> {
        try {
            const response = await api.get<ApiResponse<any[]>>('/prophets');
            if (response.data.success) return response.data;
            throw new Error('API unsuccessful');
        } catch (error) {
            // Fallback to local complete data
            console.warn('Prophet API failed, using local prophetsComplete data');
            return {
                success: true,
                data: prophets,
            };
        }
    },

    async getProphetById(id: string): Promise<ApiResponse<any>> {
        try {
            const response = await api.get<ApiResponse<any>>(`/prophets/${id}`);
            if (response.data.success) return response.data;
            throw new Error('API unsuccessful');
        } catch (error) {
            // Fallback to local complete data
            const prophet = prophets.find(p => String(p.id) === id);
            if (!prophet) return { success: false, error: 'Prophet not found' };
            return { success: true, data: prophet };
        }
    },
};
