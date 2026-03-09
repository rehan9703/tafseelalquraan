import { api, ApiResponse } from './api';
import { islamicEvents } from '@/data/events';

export interface IslamicEvent {
    id: string;
    title: string;
    year: string;
    era: string;
    description: string;
    keyFigures: string;
    significance: string;
    category: string;
    iconType: string;
}

export const historyService = {
    async getAllEvents(params?: {
        era?: string;
        search?: string;
    }): Promise<ApiResponse<IslamicEvent[]>> {
        try {
            const response = await api.get<ApiResponse<IslamicEvent[]>>('/history', { params });
            if (response.data.success) return response.data;
            throw new Error('API unsuccessful');
        } catch (error) {
            // Fallback to local 48-event expanded data
            console.warn('History API failed, using local events data');
            let result = islamicEvents as IslamicEvent[];
            if (params?.era) {
                result = result.filter(e => e.era === params.era);
            }
            if (params?.search) {
                const q = params.search.toLowerCase();
                result = result.filter(e =>
                    e.title.toLowerCase().includes(q) ||
                    e.description.toLowerCase().includes(q) ||
                    e.keyFigures.toLowerCase().includes(q)
                );
            }
            return { success: true, data: result };
        }
    },

    async getEventById(id: string): Promise<ApiResponse<IslamicEvent>> {
        try {
            const response = await api.get<ApiResponse<IslamicEvent>>(`/history/${id}`);
            if (response.data.success) return response.data;
            throw new Error('API unsuccessful');
        } catch (error) {
            const event = islamicEvents.find(e => e.id === id);
            if (!event) return { success: false, error: 'Event not found' };
            return { success: true, data: event as IslamicEvent };
        }
    },
};
