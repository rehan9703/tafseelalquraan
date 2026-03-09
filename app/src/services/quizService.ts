import { api, ApiResponse, handleApiError } from './api';

export interface QuizQuestion {
    id: string;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctOption: 'A' | 'B' | 'C' | 'D';
    explanation: string;
    category: string;
    difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
}

export interface QuizResult {
    id: string;
    userId: string;
    category: string;
    difficulty: string;
    totalQuestions: number;
    correctAnswers: number;
    scorePercent: number;
    timeTakenSeconds: number;
    createdAt: string;
}

export interface SubmitQuizData {
    category: string;
    difficulty: string;
    totalQuestions: number;
    correctAnswers: number;
    scorePercent: number;
    timeTakenSeconds: number;
}

export interface LeaderboardEntry {
    userName: string;
    scorePercent: number;
    category: string;
    createdAt: string;
}

export const quizService = {
    async getQuestions(params?: {
        category?: string;
        difficulty?: string;
        limit?: number;
    }): Promise<ApiResponse<QuizQuestion[]>> {
        try {
            const response = await api.get<ApiResponse<QuizQuestion[]>>('/quiz/questions', { params });
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async submitQuiz(data: SubmitQuizData): Promise<ApiResponse<QuizResult>> {
        try {
            const response = await api.post<ApiResponse<QuizResult>>('/quiz/submit', data);
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async getResults(): Promise<ApiResponse<QuizResult[]>> {
        try {
            const response = await api.get<ApiResponse<QuizResult[]>>('/quiz/results');
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },

    async getLeaderboard(): Promise<ApiResponse<LeaderboardEntry[]>> {
        try {
            const response = await api.get<ApiResponse<LeaderboardEntry[]>>('/quiz/leaderboard');
            return response.data;
        } catch (error) {
            throw new Error(handleApiError(error));
        }
    },
};
