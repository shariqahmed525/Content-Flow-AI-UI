"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScheduleModal } from '@/components/modals/schedule-modal';
import { Calendar, Clock, MoreHorizontal, Edit, Trash2, Copy } from 'lucide-react';

const scheduledPosts = [
  {
    id: 1,
    content: "🚀 Exciting news! We're launching our new AI-powered feature that will revolutionize how you create content. Stay tuned for the big reveal! #AI #Innovation #ContentCreation",
    platforms: ['Instagram', 'Twitter'],
    scheduledFor: "2025-01-12 10:00 AM",
    status: 'scheduled'
  },
  {
    id: 2,
    content: "Check out these amazing productivity tips for remote work that have helped thousands of professionals boost their efficiency and work-life balance.",
    platforms: ['LinkedIn', 'Facebook'],
    scheduledFor: "2025-01-12 02:00 PM",
    status: 'scheduled'
  },
  {
    id: 3,
    content: "Behind the scenes: How we built our latest feature using cutting-edge AI technology and machine learning algorithms. The development process was incredible!",
    platforms: ['Twitter', 'LinkedIn'],
    scheduledFor: "2025-01-12 06:00 PM",
    status: 'pending'
  },
  {
    id: 4,
    content: "Weekend motivation: Sometimes the best ideas come when you least expect them. What's your favorite way to spark creativity? Share in the comments! 💡",
    platforms: ['Instagram'],
    scheduledFor: "2025-01-13 09:00 AM",
    status: 'draft'
  },
  {
    id: 5,
    content: "New blog post is live! 📝 'The Future of AI in Content Marketing' - exploring how artificial intelligence is transforming the way we create and distribute content.",
    platforms: ['LinkedIn', 'Twitter', 'Facebook'],
    scheduledFor: "2025-01-13 11:30 AM",
    status: 'scheduled'
  },
  {
    id: 6,
    content: "Thank you to our amazing community for reaching 50K followers! 🎉 Your support means everything to us. Here's to the next milestone together! #Grateful #Community",
    platforms: ['Instagram', 'Facebook'],
    scheduledFor: "2025-01-13 03:00 PM",
    status: 'scheduled'
  }
];

const statusColors = {
  scheduled: 'bg-blue-600',
  pending: 'bg-yellow-600',
  draft: 'bg-gray-600'
};

export function ScheduleManager() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const handleEditPost = (post: any) => {
    setSelectedPost(post);
    setScheduleModalOpen(true);
  };

  const handleDuplicatePost = (post: any) => {
    // Logic to duplicate post
    console.log('Duplicating post:', post.id);
  };

  const handleDeletePost = (postId: number) => {
    // Logic to delete post
    console.log('Deleting post:', postId);
  };

  return (
    <>
      <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-blue-400" />
            Scheduled Content
          </CardTitle>
          <Button 
            size="sm" 
            onClick={() => setScheduleModalOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600"
          >
            Schedule New
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduledPosts.map((post) => (
              <div key={post.id} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600 hover:border-slate-500 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-slate-300 text-sm mb-2 line-clamp-2">
                      {post.content}
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-slate-400 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.scheduledFor}
                      </div>
                      <Badge 
                        className={`${statusColors[post.status as keyof typeof statusColors]} text-white text-xs`}
                      >
                        {post.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleEditPost(post)}
                      className="text-slate-400 hover:text-white p-1"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleDuplicatePost(post)}
                      className="text-slate-400 hover:text-white p-1"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleDeletePost(post.id)}
                      className="text-slate-400 hover:text-red-400 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {post.platforms.map((platform) => (
                    <Badge key={platform} variant="outline" className="border-slate-600 text-slate-400 text-xs">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="ghost" className="text-slate-400 hover:text-white">
              Load More Posts
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Schedule Modal */}
      <ScheduleModal 
        isOpen={scheduleModalOpen} 
        onClose={() => {
          setScheduleModalOpen(false);
          setSelectedPost(null);
        }} 
      />
    </>
  );
}