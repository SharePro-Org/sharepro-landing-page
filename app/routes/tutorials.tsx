import { Clock, Play, SearchIcon } from 'lucide-react';
import React from 'react';
import type { Route } from "./+types/home";
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ALL_WALKTHROUGH_VIDEOS } from '../apollo/queries';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Tutorials & Walkthroughs - SharePro" },
        {
            name: "description",
            content:
                "Learn how SharePro collects, uses, and protects your information. Your privacy is important to us.",
        },
    ];
}


const tutorials = () => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [selectedCategory, setSelectedCategory] = React.useState("All Tutorials");
    const [filteredVideos, setVideos] = React.useState<any[]>([]);
    const [videosLoading, setVideosLoading] = React.useState(true);
    const [videosError, setVideosError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchVideos = async () => {
            try {
                setVideosLoading(true);
                const client = new ApolloClient({
                    link: new HttpLink({ uri: "https://api.mysharepro.com/graphql/" }),
                    cache: new InMemoryCache(),
                });

                const { data } = await client.query({ query: ALL_WALKTHROUGH_VIDEOS });
                const videos = (data as any)?.walkthroughVideos || [];
                setVideos(videos);
                setVideosError(null);
            } catch (error) {
                console.error("Error fetching videos:", error);
                setVideosError("Failed to load videos. Please try again later.");
                setVideos([]);
            } finally {
                setVideosLoading(false);
            }
        };

        fetchVideos();
    }, []);


    const categories = [
        "All Tutorials",
        "Getting Started",
        "Campaign Setup",
        "Analytics",
        "Team & Settings",
    ];
    return (
        <main className="bg-[#F9FAFB] min-h-screen lg:px-0 px-2">
            <section id='hero' className="bg-white">
                <div className="text-center py-20 px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
                        Tutorials & Walkthroughs
                    </h1>
                    <p className="text-sm text-gray-600 mb-1">
                        Learn how to use SharePro step-by-step.
                    </p>
                    <div className="flex justify-center my-3 gap-3">
                        <div className="relative md:mt-0 mt-2">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-white md:w-80 w-full border border-[#E4E7EC] p-3 rounded-md pl-8 text-sm text-gray-700 placeholder-gray-400"
                                placeholder="Search By Keyword or topic"
                            />
                            <SearchIcon
                                size={16}
                                className="absolute top-4 left-3 text-gray-400"
                            />
                        </div>
                        <button className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-[#1a4bd9] transition">
                            Search
                        </button>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto rounded-2xl p-6 md:p-8 ">
                <div className="flex mb-3 text-sm gap-3 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`rounded-md p-3 border font-medium transition-colors ${selectedCategory === category
                                ? "bg-[#233E97] text-white border-[#233E97]"
                                : "border-[#E5E7EB] bg-transparent text-gray-700 hover:border-[#155DFC]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                {videosLoading ? (
                    <div className="py-8 text-center text-gray-500">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#155DFC] mx-auto mb-2"></div>
                        Loading walkthrough videos...
                    </div>
                ) : videosError ? (
                    <div className="py-8 text-center text-red-500">
                        Error loading walkthrough videos. Please try again later.
                    </div>
                ) : filteredVideos.length === 0 ? (
                    <div className="py-8 text-center text-gray-500">
                        No videos found for the selected category.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredVideos.map((video: any) => (
                            <div
                                key={video.id}
                                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                {/* Video Thumbnail */}
                                <div className="relative aspect-video bg-gray-100">
                                    {video.thumbnailUrl ? (
                                        <img
                                            src={`https://api.mysharepro.com/media/${video.thumbnailUrl}`}
                                            alt={video.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                            <Play className="w-12 h-12 text-gray-400" />
                                        </div>
                                    )}
                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 hover:opacity-100 transition-opacity">
                                        <button className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors">
                                            <Play className="w-6 h-6 text-gray-800 ml-1" />
                                        </button>
                                    </div>
                                    {/* Duration Badge */}
                                    {video.duration && (
                                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {Math.floor(video.duration / 60)}:
                                            {(video.duration % 60).toString().padStart(2, "0")}
                                        </div>
                                    )}
                                </div>

                                {/* Video Info */}
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                        {video.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                        {video.description}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-600">
                                        <span className="bg-gray-100 px-2 py-1 rounded text-gray-700">
                                            {video.category}
                                        </span>
                                        <span className="text-gray-500">{video.viewCount} views</span>
                                    </div>
                                    {video.isFeatured && (
                                        <div className="mt-2">
                                            <span className="inline-block bg-[#155DFC]/10 text-[#155DFC] text-xs px-2 py-1 rounded">
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default tutorials;