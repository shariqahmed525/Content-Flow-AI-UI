"use client";

import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { ContentCreator } from '@/components/dashboard/content-creator';

export default function CreatePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Content Creator</h1>
            <p className="text-slate-400">Create amazing content with AI-powered tools</p>
          </div>
        </div>

        <ContentCreator />
      </div>
    </DashboardLayout>
  );
}