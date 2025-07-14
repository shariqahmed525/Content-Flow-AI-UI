"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Plus, CheckCircle, AlertCircle } from 'lucide-react';

const platforms = [
  { name: 'Instagram', status: 'connected', followers: '12.5K', color: 'bg-pink-500' },
  { name: 'Twitter', status: 'connected', followers: '8.2K', color: 'bg-blue-500' },
  { name: 'Facebook', status: 'error', followers: '15.8K', color: 'bg-blue-600' },
  { name: 'LinkedIn', status: 'disconnected', followers: '5.4K', color: 'bg-blue-700' },
  { name: 'TikTok', status: 'disconnected', followers: '0', color: 'bg-black' },
  { name: 'YouTube', status: 'disconnected', followers: '0', color: 'bg-red-600' }
];

export function PlatformConnections() {
  return (
    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white flex items-center">
          <Globe className="w-5 h-5 mr-2 text-green-400" />
          Platforms
        </CardTitle>
        <Button size="sm" className="bg-slate-700 hover:bg-slate-600">
          <Plus className="w-4 h-4 mr-1" />
          Add
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {platforms.slice(0, 4).map((platform) => (
          <div key={platform.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${platform.color}`} />
              <div>
                <div className="text-white text-sm font-medium">{platform.name}</div>
                <div className="text-slate-400 text-xs">{platform.followers} followers</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {platform.status === 'connected' && (
                <CheckCircle className="w-4 h-4 text-green-400" />
              )}
              {platform.status === 'error' && (
                <AlertCircle className="w-4 h-4 text-red-400" />
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
                {platform.status === 'connected' ? 'Active' : 
                 platform.status === 'error' ? 'Error' : 'Connect'}
              </Badge>
            </div>
          </div>
        ))}
        <Button variant="ghost" className="w-full text-slate-400 hover:text-white mt-4">
          View All Platforms
        </Button>
      </CardContent>
    </Card>
  );
}