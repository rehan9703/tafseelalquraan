import { api, ApiResponse, handleApiError } from './api';

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
}

export interface AuthResponseData {
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
        language: string;
        avatarUrl?: string;
    };
    accessToken: string;
}

export const authService = {
    async register(data: RegisterData): Promise<ApiResponse<AuthResponseData>> {
        try {
            const response = await api.post<ApiResponse<AuthResponseData>>('/auth/register', data);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async login(credentials: LoginCredentials): Promise<ApiResponse<AuthResponseData>> {
        try {
            const response = await api.post<ApiResponse<AuthResponseData>>('/auth/login', credentials);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async logout(): Promise<ApiResponse> {
        try {
            const response = await api.post<ApiResponse>('/auth/logout');
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async getMe(): Promise<ApiResponse> {
        try {
            const response = await api.get<ApiResponse>('/auth/me');
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async forgotPassword(email: string): Promise<ApiResponse> {
        try {
            const response = await api.post<ApiResponse>('/auth/forgot-password', { email });
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async resetPassword(token: string, password: string): Promise<ApiResponse> {
        try {
            const response = await api.post<ApiResponse>('/auth/reset-password', { token, password });
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async verifyEmail(token: string): Promise<ApiResponse> {
        try {
            const response = await api.get<ApiResponse>(`/auth/verify-email/${token}`);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },
};
