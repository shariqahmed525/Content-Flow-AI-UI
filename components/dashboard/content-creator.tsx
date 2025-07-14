"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, Image, Calendar, Send } from 'lucide-react';

const platforms = [
  { id: 'instagram', name: 'Instagram', color: 'bg-pink-500' },
  { id: 'twitter', name: 'Twitter', color: 'bg-blue-500' },
  { id: 'facebook', name: 'Facebook', color: 'bg-blue-600' },
  { id: 'linkedin', name: 'LinkedIn', color: 'bg-blue-700' }
];

const contentTypes = [
  { id: 'post', name: 'Social Post' },
  { id: 'story', name: 'Story' },
  { id: 'reel', name: 'Reel/Video' },
  { id: 'carousel', name: 'Carousel' }
];

export function ContentCreator() {
  const [prompt, setPrompt] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [contentType, setContentType] = useState('post');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent(`🚀 Exciting news! We're thriving in the digital age with cutting-edge AI technology that's transforming how we create content.

✨ Key benefits:
• 10x faster content creation
• Consistent brand voice
• Data-driven optimization
• Multi-platform reach

What's your favorite AI tool for productivity? Drop it in the comments! 👇

#AI #ContentCreation #DigitalMarketing #Innovation #SocialMedia`);
      setIsGenerating(false);
    }, 2000);
  };

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  return (
    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
          AI Content Creator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-700">
            <TabsTrigger value="text" className="text-slate-300 data-[state=active]:text-white">Text Content</TabsTrigger>
            <TabsTrigger value="image" className="text-slate-300 data-[state=active]:text-white">AI Images</TabsTrigger>
            <TabsTrigger value="video" className="text-slate-300 data-[state=active]:text-white">Video Ideas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="text" className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-300 mb-2 block">
                Content Type
              </label>
              <Select value={contentType} onValueChange={setContentType}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-slate-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  {contentTypes.map(type => (
                    <SelectItem key={type.id} value={type.id} className="text-slate-300">
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-300 mb-2 block">
                Platforms
              </label>
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

            <div>
              <label className="text-sm font-medium text-slate-300 mb-2 block">
                Content Prompt
              </label>
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe what you want to create... (e.g., 'Create an engaging post about AI in marketing with trending hashtags')"
                className="bg-slate-700 border-slate-600 text-slate-300 placeholder:text-slate-500 min-h-[100px]"
              />
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              {isGenerating ? (
                <>
                  <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Content
                </>
              )}
            </Button>

            {generatedContent && (
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">Generated Content</h3>
                  <div className="text-slate-300 whitespace-pre-wrap text-sm">
                    {generatedContent}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Send className="w-4 h-4 mr-2" />
                    Post Now
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Image className="w-4 h-4 mr-2" />
                    Add Image
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="image" className="space-y-4">
            <div className="text-center py-12">
              <Image className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-white font-medium mb-2">AI Image Generation</h3>
              <p className="text-slate-400 text-sm">Generate stunning visuals with Stable Diffusion</p>
              <Button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                Coming Soon
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="video" className="space-y-4">
            <div className="text-center py-12">
              <Sparkles className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-white font-medium mb-2">Video Content Ideas</h3>
              <p className="text-slate-400 text-sm">AI-powered video concepts and scripts</p>
              <Button className="mt-4 bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700">
                Coming Soon
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}