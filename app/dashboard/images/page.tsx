"use client";

import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image, Sparkles, Download, Heart, Eye, Search, Filter, Plus } from 'lucide-react';

const generatedImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    prompt: 'Modern office workspace with laptop and coffee',
    style: 'Professional',
    size: '1024x1024',
    likes: 24,
    views: 156,
    createdAt: '2 hours ago'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    prompt: 'Abstract geometric patterns in blue and purple',
    style: 'Abstract',
    size: '1024x1024',
    likes: 18,
    views: 89,
    createdAt: '5 hours ago'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
    prompt: 'Minimalist product photography setup',
    style: 'Minimalist',
    size: '1024x1024',
    likes: 32,
    views: 203,
    createdAt: '1 day ago'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    prompt: 'Vibrant social media background design',
    style: 'Colorful',
    size: '1024x1024',
    likes: 45,
    views: 287,
    createdAt: '2 days ago'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    prompt: 'Tech startup team collaboration',
    style: 'Corporate',
    size: '1024x1024',
    likes: 28,
    views: 145,
    createdAt: '3 days ago'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
    prompt: 'Creative workspace with design tools',
    style: 'Creative',
    size: '1024x1024',
    likes: 37,
    views: 198,
    createdAt: '4 days ago'
  }
];

export default function ImagesPage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI image generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">AI Image Generator</h1>
            <p className="text-slate-400">Create stunning visuals with AI-powered image generation</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <Tabs defaultValue="generate" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800">
            <TabsTrigger value="generate" className="text-slate-300 data-[state=active]:text-white">Generate Images</TabsTrigger>
            <TabsTrigger value="gallery" className="text-slate-300 data-[state=active]:text-white">Image Gallery</TabsTrigger>
          </TabsList>
          
          <TabsContent value="generate" className="space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                  Create New Image
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">
                      Image Description
                    </label>
                    <Textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Describe the image you want to create... (e.g., 'A modern office workspace with a laptop, coffee cup, and plants in natural lighting')"
                      className="bg-slate-700 border-slate-600 text-slate-300 placeholder:text-slate-500 min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Style</label>
                      <select className="w-full bg-slate-700 border-slate-600 text-slate-300 rounded-md p-2">
                        <option>Realistic</option>
                        <option>Abstract</option>
                        <option>Minimalist</option>
                        <option>Professional</option>
                        <option>Creative</option>
                        <option>Colorful</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Size</label>
                      <select className="w-full bg-slate-700 border-slate-600 text-slate-300 rounded-md p-2">
                        <option>1024x1024 (Square)</option>
                        <option>1024x768 (Landscape)</option>
                        <option>768x1024 (Portrait)</option>
                        <option>1920x1080 (HD)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Quality</label>
                      <select className="w-full bg-slate-700 border-slate-600 text-slate-300 rounded-md p-2">
                        <option>Standard</option>
                        <option>High</option>
                        <option>Ultra</option>
                      </select>
                    </div>
                  </div>

                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating || !prompt.trim()}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Generating Image...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Image
                      </>
                    )}
                  </Button>
                </div>

                {isGenerating && (
                  <div className="bg-slate-700/50 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <h3 className="text-white font-medium mb-2">Creating your image...</h3>
                    <p className="text-slate-400 text-sm">This usually takes 10-30 seconds</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="gallery" className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search images..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-slate-700 border-slate-600 text-slate-300 placeholder:text-slate-500"
                />
              </div>
              <div className="text-slate-400 text-sm">
                {generatedImages.length} images generated
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedImages.map((image) => (
                <Card key={image.id} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden group hover:border-slate-600 transition-colors">
                  <div className="relative">
                    <img
                      src={image.url}
                      alt={image.prompt}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <p className="text-slate-300 text-sm line-clamp-2">{image.prompt}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-slate-600 text-slate-400">
                          {image.style}
                        </Badge>
                        <span className="text-slate-500 text-xs">{image.size}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400 text-xs">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-3 h-3" />
                            <span>{image.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{image.views}</span>
                          </div>
                        </div>
                        <span>{image.createdAt}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}