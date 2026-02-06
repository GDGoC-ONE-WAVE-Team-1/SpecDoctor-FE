import React from 'react';

interface ReviewCardProps {
    name: string;
    maskedName?: boolean; // For "김*준" style
    role: string;
    date: string;
    rating: number; // 0 to 5
    content: string;
    tags: string[];
    isCertified?: boolean; // For "33기 수료생 인증" badge
    certificationText?: string;
    avatarImage?: string; // Optional image URL
}

export default function ReviewCard({
    name,
    role,
    date,
    rating,
    content,
    tags,
    isCertified = false,
    certificationText = "수료생 인증",
    avatarImage,
}: ReviewCardProps) {
    // Generate stars array
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0; // Simplified for now, just full stars usually

    return (
        <div className="bg-white rounded-[32px] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] flex flex-col h-full border border-gray-100 min-h-[320px]">
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    {/* Avatar Placeholder or Image */}
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                        {avatarImage ? (
                            <img src={avatarImage} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                        )}
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900 text-lg">{name}</span>
                            {isCertified && (
                                <span className="text-[10px] sm:text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                                    {certificationText}
                                </span>
                            )}
                        </div>
                        <div className="text-gray-400 text-sm">
                            {role} <span className="mx-1">|</span> {date}
                        </div>
                    </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={`w-5 h-5 ${i < fullStars ? 'text-yellow-400' : 'text-gray-200'}`}
                        >
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    ))}
                </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-[15px] sm:text-base font-medium line-clamp-4">
                "{content}"
            </p>

            {/* Tags - Push to bottom */}
            <div className="mt-auto flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-lg"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
