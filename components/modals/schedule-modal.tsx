"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, X, Image, Hash, AtSign } from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const platforms = [
  { id: 'instagram', name: 'Instagram', color: 'bg-pink-500' },
  { id: 'twitter', name: 'Twitter', color: 'bg-blue-500' },
  { id: 'facebook', name: 'Facebook', color: 'bg-blue-600' },
  { id: 'linkedin', name: 'LinkedIn', color: 'bg-blue-700' },
  { id: 'tiktok', name: 'TikTok', color: 'bg-black' },
  { id: 'reddit', name: 'Reddit', color: 'bg-orange-600' }
];

export function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['instagram']);
  const [content, setContent] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [mentions, setMentions] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const handleSchedule = async () => {
    setIsLoading(true);
    // Simulate scheduling
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      // Reset form
      setContent('');
      setScheduledDate('');
      setScheduledTime('');
      setHashtags('');
      setMentions('');
      setSelectedPlatforms(['instagram']);
    }, 2000);
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().slice(0, 5);
    return { date, time };
  };

  const { date: currentDate, time: currentTime } = getCurrentDateTime();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-slate-800 border-slate-700 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-blue-400" />
              Schedule New Post
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          {/* Content */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Content</label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind? Share your thoughts, ideas, or updates..."
              className="bg-slate-700 border-slate-600 text-slate-300 placeholder:text-slate-500 min-h-[120px]"
              maxLength={2200}
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>Tip: Use emojis and hashtags to increase engagement</span>
              <span>{content.length}/2200</span>
            </div>
          </div>

          {/* Platforms */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Select Platforms</label>
            <div className="flex flex-wrap gap-2">
              {platforms.map(platform => (
                <Badge
                  key={platform.id}
                  variant={selectedPlatforms.includes(platform.id) ? "default" : "outline"}
                  className={`cursor-pointer transition-all ${
                    selectedPlatforms.includes(platform.id) 
                      ? `${platform.color} text-white` 
                      : 'border-slate-600 text-slate-300 hover:bg-slate-700'
                  }`}
                  onClick={() => togglePlatform(platform.id)}
                >
                  {platform.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Schedule Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <Input
                  type="date"
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  min={currentDate}
                  className="pl-10 bg-slate-700 border-slate-600 text-slate-300"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Time</label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <Input
                  type="time"
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                  className="pl-10 bg-slate-700 border-slate-600 text-slate-300"
                />
              </div>
            </div>
          </div>

          {/* Hashtags & Mentions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Hashtags</label>
              <div className="relative">
                <Hash className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <Input
                  value={hashtags}
                  onChange={(e) => setHashtags(e.target.value)}
                  placeholder="contentcreator, socialmedia, ai"
                  className="pl-10 bg-slate-700 border-slate-600 text-slate-300 placeholder:text-slate-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Mentions</label>
              <div className="relative">
                <AtSign className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <Input
                  value={mentions}
                  onChange={(e) => setMentions(e.target.value)}
                  placeholder="username1, username2"
                  className="pl-10 bg-slate-700 border-slate-600 text-slate-300 placeholder:text-slate-500"
                />
              </div>
            </div>
          </div>

          {/* Media Upload */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Media (Optional)</label>
            <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-slate-500 transition-colors cursor-pointer">
              <Image className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">Click to upload images or videos</p>
              <p className="text-slate-500 text-xs mt-1">Supports JPG, PNG, GIF, MP4 (max 10MB)</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleSchedule}
              disabled={isLoading || !content.trim() || selectedPlatforms.length === 0}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Scheduling...
                </>
              ) : scheduledDate && scheduledTime ? (
                <>
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Post
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4 mr-2" />
                  Post Now
                </>
              )}
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Cancel
            </Button>
          </div>

          {/* Preview */}
          {content && (
            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
              <h4 className="text-sm font-medium text-slate-300 mb-2">Preview</h4>
              <div className="text-slate-300 text-sm whitespace-pre-wrap">
                {content}
                {hashtags && (
                  <div className="mt-2 text-blue-400">
                    {hashtags.split(',').map(tag => `#${tag.trim()}`).join(' ')}
                  </div>
                )}
                {mentions && (
                  <div className="mt-1 text-purple-400">
                    {mentions.split(',').map(mention => `@${mention.trim()}`).join(' ')}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}