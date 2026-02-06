import { api } from "./apiClient";
import { getCookie } from "./auth";

export interface Review {
    id: number;
    writer: number | string;
    review: string;
    star: number;
    role: string;
}

export const getReviews = async (activityName?: string): Promise<Review[]> => {
    try {
        const url = activityName ? `/api/review?activityName=${activityName}` : `/api/review/all`;
        const response = await api.get<Review[]>(url);
        return response;
    } catch (error) {
        console.error("Failed to fetch reviews:", error);
        throw error;
    }
};

export const postReview = async (reviewData: {
    writer?: number | string;
    review: string;
    star: number;
    role: string;
    name?: string; // name is currently used in the form for activity name
}) => {
    try {
        // 쿠키 또는 세션스토리지에서 엑세스 토큰 직접 추출
        const token = getCookie("accessToken") || (typeof window !== 'undefined' ? sessionStorage.getItem('accessToken') : null);

        const response = await api.post("/api/review", reviewData, {
            headers: token ? { "Authorization": `Bearer ${token}` } : {}
        });
        return response;
    } catch (error) {
        console.error("Failed to post review:", error);
        throw error;
    }
};
