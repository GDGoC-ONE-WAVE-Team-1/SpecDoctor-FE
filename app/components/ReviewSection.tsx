'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReviewCard, { ReviewCardProps } from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import { isLoggedIn } from "@/lib/auth";
import { getReviews } from "@/lib/reviewApi";

export default function ReviewSection({ disableWriteReview = false, activityData }: { disableWriteReview?: boolean, activityData?: any }) {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviews, setReviews] = useState<ReviewCardProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);

    const fetchReviews = async () => {
        try {
            const data = await getReviews(activityData?.name);
            const formattedReviews: ReviewCardProps[] = data.map((rev) => ({
                author: `${rev.writer}`,
                part: rev.role,
                date: "2025.02 작성",
                rating: rev.star,
                content: rev.review,
                tags: [],
                isVerified: true
            }));
            setReviews(formattedReviews);
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const handleReport = () => {
        const isAuth = isLoggedIn() || (typeof window !== 'undefined' && !!sessionStorage.getItem('accessToken'));

        if (!isAuth) {
            alert("로그인이 필요한 서비스입니다.");
            router.push("/login");
            return;
        }
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    if (isLoading) {
        return <div className="w-full py-12 text-center text-gray-500">로딩 중...</div>;
    }

    const averageRating = reviews.length > 0
        ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
        : 0;

    return (
        <div className="w-full pb-12">
            <div className="max-w-6xl mx-auto px-4 md:px-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div className="flex items-center flex-wrap gap-2">
                        <h2 className="text-2xl font-bold text-gray-900">실제 활동 멤버 후기</h2>
                        <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full">
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="font-bold text-gray-900">{averageRating.toFixed(1)}</span>
                            <span className="text-sm text-yellow-600 font-medium">({reviews.length}개 리뷰)</span>
                        </div>
                    </div>

                    {!disableWriteReview && (
                        <button
                            onClick={handleReport}
                            className="px-5 py-2.5 border border-indigo-100 rounded-lg text-sm font-bold text-indigo-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm hover:shadow-indigo-100"
                        >
                            후기 작성하기
                        </button>
                    )}
                </div>

                {/* Review Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {(isExpanded ? reviews : reviews.slice(0, 2)).map((review, index) => (
                        <ReviewCard key={review.author + index} {...review} />
                    ))}
                </div>

                {reviews.length === 0 && (
                    <div className="text-center">
                        <p className="text-gray-500">아직 후기가 없어요.<br />{activityData?.name}의 첫 후기를 등록해보세요!</p>
                    </div>
                )}

                {/* More Button */}
                {reviews.length > 2 && (
                    <div className="text-center">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center gap-1 text-gray-500 font-bold hover:text-gray-900 transition-colors"
                        >
                            {isExpanded ? (
                                <>
                                    접기
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                    </svg>
                                </>
                            ) : (
                                <>
                                    리뷰 {reviews.length - 2}개 더보기
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                )}

            </div>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
                    <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-hide">
                        <ReviewForm onClose={closeModal} activityData={activityData} onSuccess={fetchReviews} />
                    </div>
                </div>
            )}
        </div>
    );
}
