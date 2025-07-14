"use client";

import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { ScheduleManager } from '@/components/dashboard/schedule-manager';
import { ScheduleModal } from '@/components/modals/schedule-modal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Plus, Filter } from 'lucide-react';

export default function SchedulePage() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Content Schedule</h1>
            <p className="text-slate-400">Manage and schedule your content across all platforms</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button 
              onClick={() => setScheduleModalOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Schedule New
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">Scheduled Today</p>
                  <p className="text-2xl font-bold text-white mt-1">8</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">This Week</p>
                  <p className="text-2xl font-bold text-white mt-1">24</p>
                </div>
                <Clock className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">Draft Posts</p>
                  <p className="text-2xl font-bold text-white mt-1">12</p>
                </div>
                <Plus className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <ScheduleManager />
      </div>

      {/* Schedule Modal */}
      <ScheduleModal 
        isOpen={scheduleModalOpen} 
        onClose={() => setScheduleModalOpen(false)} 
      />
    </DashboardLayout>
  );
}