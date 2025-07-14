"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, Users, Heart } from 'lucide-react';

const stats = [
  {
    title: 'Total Posts',
    value: '247',
    change: '+12%',
    icon: BarChart3,
    color: 'text-blue-400'
  },
  {
    title: 'Engagement Rate',
    value: '8.4%',
    change: '+2.1%',
    icon: Heart,
    color: 'text-pink-400'
  },
  {
    title: 'Reach',
    value: '45.2K',
    change: '+18%',
    icon: Users,
    color: 'text-green-400'
  },
  {
    title: 'Growth',
    value: '+1.2K',
    change: '+24%',
    icon: TrendingUp,
    color: 'text-purple-400'
  }
];

export function AnalyticsDashboard() {
  return (
    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
          Analytics Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.title} className="text-center">
              <div className={`${stat.color} mb-1`}>
                <stat.icon className="w-5 h-5 mx-auto" />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.title}</div>
              <div className="text-xs text-green-400">{stat.change}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}