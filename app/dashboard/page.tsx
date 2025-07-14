"use client";

import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { ContentCreator } from '@/components/dashboard/content-creator';
import { AnalyticsDashboard } from '@/components/dashboard/analytics-dashboard';
import { ScheduleManager } from '@/components/dashboard/schedule-manager';
import { PlatformConnections } from '@/components/dashboard/platform-connections';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-slate-400">Welcome back! Let's create some amazing content.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ContentCreator />
          </div>
          <div className="space-y-6">
            <AnalyticsDashboard />
            <PlatformConnections />
          </div>
        </div>

        <ScheduleManager />
      </div>
    </DashboardLayout>
  );
}