"use client";

import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, Users, Heart, Eye, MessageCircle, Share, Calendar } from 'lucide-react';

const analyticsData = [
  {
    title: 'Total Posts',
    value: '247',
    change: '+12%',
    changeType: 'positive',
    icon: BarChart3,
    color: 'text-blue-400'
  },
  {
    title: 'Total Reach',
    value: '45.2K',
    change: '+18%',
    changeType: 'positive',
    icon: Eye,
    color: 'text-green-400'
  },
  {
    title: 'Engagement Rate',
    value: '8.4%',
    change: '+2.1%',
    changeType: 'positive',
    icon: Heart,
    color: 'text-pink-400'
  },
  {
    title: 'New Followers',
    value: '+1.2K',
    change: '+24%',
    changeType: 'positive',
    icon: Users,
    color: 'text-purple-400'
  }
];

const platformStats = [
  { platform: 'Instagram', posts: 89, engagement: '12.3%', reach: '18.5K', color: 'bg-pink-500' },
  { platform: 'Twitter', posts: 156, engagement: '6.8%', reach: '15.2K', color: 'bg-blue-500' },
  { platform: 'Facebook', posts: 45, engagement: '4.2%', reach: '8.9K', color: 'bg-blue-600' },
  { platform: 'LinkedIn', posts: 23, engagement: '9.1%', reach: '5.4K', color: 'bg-blue-700' }
];

const recentPosts = [
  {
    id: 1,
    content: "🚀 Exciting news! We're launching our new AI-powered feature...",
    platform: 'Instagram',
    date: '2 hours ago',
    likes: 245,
    comments: 18,
    shares: 12,
    reach: '2.1K'
  },
  {
    id: 2,
    content: "Check out these amazing productivity tips for remote work...",
    platform: 'LinkedIn',
    date: '5 hours ago',
    likes: 89,
    comments: 7,
    shares: 23,
    reach: '1.8K'
  },
  {
    id: 3,
    content: "Behind the scenes: How we built our latest feature using AI...",
    platform: 'Twitter',
    date: '1 day ago',
    likes: 156,
    comments: 34,
    shares: 45,
    reach: '3.2K'
  }
];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Analytics</h1>
            <p className="text-slate-400">Track your content performance and engagement</p>
          </div>
          <div className="flex items-center space-x-2 text-slate-400">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Last 30 days</span>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyticsData.map((stat) => (
            <Card key={stat.title} className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                    <p className={`text-sm mt-1 ${stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Platform Performance */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                Platform Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {platformStats.map((platform) => (
                <div key={platform.platform} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                    <div>
                      <div className="text-white font-medium">{platform.platform}</div>
                      <div className="text-slate-400 text-sm">{platform.posts} posts</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">{platform.engagement}</div>
                    <div className="text-slate-400 text-sm">{platform.reach} reach</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Posts Performance */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                Recent Posts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="p-4 bg-slate-700/50 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <p className="text-slate-300 text-sm mb-1 line-clamp-2">{post.content}</p>
                      <div className="flex items-center space-x-4 text-xs text-slate-400">
                        <span>{post.platform}</span>
                        <span>{post.date}</span>
                        <span>{post.reach} reach</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share className="w-4 h-4" />
                      <span>{post.shares}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}