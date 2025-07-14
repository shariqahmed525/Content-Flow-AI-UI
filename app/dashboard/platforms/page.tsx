"use client";

import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Plus, CheckCircle, AlertCircle, Settings, Users, TrendingUp } from 'lucide-react';

const platforms = [
  { 
    name: 'Instagram', 
    status: 'connected', 
    followers: '12.5K', 
    posts: 89,
    engagement: '12.3%',
    color: 'bg-pink-500',
    description: 'Share photos and stories with your audience'
  },
  { 
    name: 'Twitter', 
    status: 'connected', 
    followers: '8.2K', 
    posts: 156,
    engagement: '6.8%',
    color: 'bg-blue-500',
    description: 'Share quick updates and engage in conversations'
  },
  { 
    name: 'Facebook', 
    status: 'error', 
    followers: '15.8K', 
    posts: 45,
    engagement: '4.2%',
    color: 'bg-blue-600',
    description: 'Connect with friends and share longer content'
  },
  { 
    name: 'LinkedIn', 
    status: 'connected', 
    followers: '5.4K', 
    posts: 23,
    engagement: '9.1%',
    color: 'bg-blue-700',
    description: 'Professional networking and business content'
  },
  { 
    name: 'TikTok', 
    status: 'disconnected', 
    followers: '0', 
    posts: 0,
    engagement: '0%',
    color: 'bg-black',
    description: 'Short-form video content for younger audiences'
  },
  { 
    name: 'YouTube', 
    status: 'disconnected', 
    followers: '0', 
    posts: 0,
    engagement: '0%',
    color: 'bg-red-600',
    description: 'Long-form video content and tutorials'
  },
  { 
    name: 'Reddit', 
    status: 'disconnected', 
    followers: '0', 
    posts: 0,
    engagement: '0%',
    color: 'bg-orange-600',
    description: 'Community discussions and content sharing'
  },
  { 
    name: 'Telegram', 
    status: 'disconnected', 
    followers: '0', 
    posts: 0,
    engagement: '0%',
    color: 'bg-blue-400',
    description: 'Messaging and channel broadcasting'
  }
];

export default function PlatformsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Platform Connections</h1>
            <p className="text-slate-400">Connect and manage your social media accounts</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Platform
          </Button>
        </div>

        {/* Connected Platforms Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">Connected</p>
                  <p className="text-2xl font-bold text-white mt-1">
                    {platforms.filter(p => p.status === 'connected').length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">Total Followers</p>
                  <p className="text-2xl font-bold text-white mt-1">41.9K</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">Avg. Engagement</p>
                  <p className="text-2xl font-bold text-white mt-1">8.1%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <Card key={platform.name} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg ${platform.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">
                        {platform.name[0]}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{platform.name}</CardTitle>
                      <p className="text-slate-400 text-sm">{platform.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {platform.status === 'connected' && (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    )}
                    {platform.status === 'error' && (
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    )}
                    <Badge
                      variant={platform.status === 'connected' ? 'default' : 'outline'}
                      className={`text-xs ${
                        platform.status === 'connected' 
                          ? 'bg-green-600 text-white' 
                          : platform.status === 'error'
                          ? 'border-red-500 text-red-400'
                          : 'border-slate-600 text-slate-400'
                      }`}
                    >
                      {platform.status === 'connected' ? 'Connected' : 
                       platform.status === 'error' ? 'Error' : 'Disconnected'}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {platform.status === 'connected' && (
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">{platform.followers}</div>
                      <div className="text-xs text-slate-400">Followers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{platform.posts}</div>
                      <div className="text-xs text-slate-400">Posts</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{platform.engagement}</div>
                      <div className="text-xs text-slate-400">Engagement</div>
                    </div>
                  </div>
                )}
                
                <div className="flex space-x-2">
                  {platform.status === 'connected' ? (
                    <>
                      <Button variant="outline" size="sm" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700">
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </Button>
                      <Button variant="outline" size="sm" className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white">
                        Disconnect
                      </Button>
                    </>
                  ) : platform.status === 'error' ? (
                    <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                      Reconnect
                    </Button>
                  ) : (
                    <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      Connect
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}