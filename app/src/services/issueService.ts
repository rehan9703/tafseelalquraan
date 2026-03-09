import { api, type ApiResponse, handleApiError } from './api';

export interface IslamicIssue {
    id: string;
    title: string;
    description: string;
    consequences: string;
    reasonsToAvoid: string;
    howToFix: string;
    evidenceQuran: string;
    evidenceHadith: string;
    category: string;
    iconType: string;
    colorScheme: string;
}

export const issueService = {
    async getAll(): Promise<ApiResponse<IslamicIssue[]>> {
        try {
            const response = await api.get<ApiResponse<IslamicIssue[]>>('/issues');
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async getById(id: string): Promise<ApiResponse<IslamicIssue>> {
        try {
            const response = await api.get<ApiResponse<IslamicIssue>>(`/issues/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async getByCategory(category: string): Promise<ApiResponse<IslamicIssue[]>> {
        try {
            const response = await api.get<ApiResponse<IslamicIssue[]>>(`/issues/category/${category}`);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    // Admin endpoints
    async create(data: Omit<IslamicIssue, 'id'>): Promise<ApiResponse<IslamicIssue>> {
        try {
            const response = await api.post<ApiResponse<IslamicIssue>>('/issues', data);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async update(id: string, data: Partial<IslamicIssue>): Promise<ApiResponse<IslamicIssue>> {
        try {
            const response = await api.put<ApiResponse<IslamicIssue>>(`/issues/${id}`, data);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async delete(id: string): Promise<ApiResponse> {
        try {
            const response = await api.delete<ApiResponse>(`/issues/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    }
};
