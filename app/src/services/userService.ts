import { api, type ApiResponse, handleApiError } from './api';

export interface Bookmark {
    id: string;
    userId: string;
    contentType: 'AYAH' | 'HADITH' | 'DUA' | 'ARTICLE';
    contentId: string;
    note?: string;
    createdAt: string;
}

export interface AddBookmarkData {
    contentType: 'AYAH' | 'HADITH' | 'DUA' | 'ARTICLE';
    contentId: string;
    note?: string;
}

export interface ReadingProgress {
    id: string;
    userId: string;
    surahId: number;
    lastAyahRead: number;
    isCompleted: boolean;
    updatedAt: string;
}

export interface UpdateProgressData {
    surahId: number;
    lastAyahRead: number;
    isCompleted?: boolean;
}

export interface UserStreak {
    id: string;
    userId: string;
    currentStreak: number;
    longestStreak: number;
    lastActiveDate: string | null;
}

export interface UpdateSettingsData {
    name?: string;
    language?: 'EN' | 'UR' | 'AR' | 'HINGLISH';
    avatarUrl?: string;
}

export const userService = {
    async getBookmarks(): Promise<ApiResponse<Bookmark[]>> {
        try {
            const response = await api.get<ApiResponse<Bookmark[]>>('/user/bookmarks');
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async addBookmark(data: AddBookmarkData): Promise<ApiResponse<Bookmark>> {
        try {
            const response = await api.post<ApiResponse<Bookmark>>('/user/bookmarks', data);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async removeBookmark(id: string): Promise<ApiResponse> {
        try {
            const response = await api.delete<ApiResponse>(`/user/bookmarks/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async getProgress(): Promise<ApiResponse<ReadingProgress[]>> {
        try {
            const response = await api.get<ApiResponse<ReadingProgress[]>>('/user/progress');
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async updateProgress(data: UpdateProgressData): Promise<ApiResponse<ReadingProgress>> {
        try {
            const response = await api.post<ApiResponse<ReadingProgress>>('/user/progress', data);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async getStreak(): Promise<ApiResponse<UserStreak>> {
        try {
            const response = await api.get<ApiResponse<UserStreak>>('/user/streak');
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async checkIn(): Promise<ApiResponse<UserStreak>> {
        try {
            const response = await api.post<ApiResponse<UserStreak>>('/user/streak/checkin');
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async updateSettings(data: UpdateSettingsData): Promise<ApiResponse> {
        try {
            const response = await api.patch<ApiResponse>('/user/settings', data);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    // Admin Methods
    async adminGetAllUsers(): Promise<ApiResponse<any[]>> {
        try {
            const response = await api.get<ApiResponse<any[]>>('/user/admin/users');
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async adminUpdateStreak(data: { userId: string; currentStreak?: number; longestStreak?: number }): Promise<ApiResponse> {
        try {
            const response = await api.post<ApiResponse>('/user/admin/streak', data);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },
};
