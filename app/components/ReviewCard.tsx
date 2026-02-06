export interface ReviewCardProps {
    author: string;
    part: string;
    date: string;
    rating: number;
    content: string;
    tags: string[];
    isVerified?: boolean;
}

export default function ReviewCard({
    author,
    part,
    date,
    rating,
    content,
    tags,
    isVerified = false,
}: ReviewCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                        {/* In a real app, use next/image */}
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pravatar.cc/150?u=' + author + ')' }}></div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900">{author}</span>
                            {isVerified && (
                                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                                    33기 수료생 인증
                                </span>
                            )}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                            {part} <span className="mx-1">|</span> {date}
                        </div>
                    </div>
                </div>

                {/* Initial Stars (visual only, can map rating later) */}
                <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Content */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 break-keep">
                "{content}"
            </p>

            {/* Tags */}
            <div className="flex gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="inline-block bg-indigo-50 text-indigo-600 text-[11px] font-bold px-2 py-1 rounded">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
