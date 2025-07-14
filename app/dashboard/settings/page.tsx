"use client";

import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Palette, 
  Globe,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
    security: true
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Settings</h1>
            <p className="text-slate-400">Manage your account preferences and configurations</p>
          </div>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800">
            <TabsTrigger value="profile" className="text-slate-300 data-[state=active]:text-white">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="text-slate-300 data-[state=active]:text-white">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="text-slate-300 data-[state=active]:text-white">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="billing" className="text-slate-300 data-[state=active]:text-white">
              <CreditCard className="w-4 h-4 mr-2" />
              Billing
            </TabsTrigger>
            <TabsTrigger value="preferences" className="text-slate-300 data-[state=active]:text-white">
              <Palette className="w-4 h-4 mr-2" />
              Preferences
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      Change Avatar
                    </Button>
                    <p className="text-slate-400 text-sm">JPG, PNG or GIF. Max size 2MB.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">First Name</label>
                    <Input
                      defaultValue="John"
                      className="bg-slate-700 border-slate-600 text-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Last Name</label>
                    <Input
                      defaultValue="Doe"
                      className="bg-slate-700 border-slate-600 text-slate-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <Input
                    type="email"
                    defaultValue="john@example.com"
                    className="bg-slate-700 border-slate-600 text-slate-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Bio</label>
                  <Textarea
                    placeholder="Tell us about yourself..."
                    className="bg-slate-700 border-slate-600 text-slate-300 placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Website</label>
                  <Input
                    placeholder="https://yourwebsite.com"
                    className="bg-slate-700 border-slate-600 text-slate-300 placeholder:text-slate-500"
                  />
                </div>

                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">Email Notifications</h3>
                      <p className="text-slate-400 text-sm">Receive notifications via email</p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                    />
                  </div>
                  
                  <Separator className="bg-slate-600" />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">Push Notifications</h3>
                      <p className="text-slate-400 text-sm">Receive push notifications in browser</p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                    />
                  </div>
                  
                  <Separator className="bg-slate-600" />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">Marketing Emails</h3>
                      <p className="text-slate-400 text-sm">Receive updates about new features and tips</p>
                    </div>
                    <Switch
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, marketing: checked }))}
                    />
                  </div>
                  
                  <Separator className="bg-slate-600" />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">Security Alerts</h3>
                      <p className="text-slate-400 text-sm">Important security and account notifications</p>
                    </div>
                    <Switch
                      checked={notifications.security}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, security: checked }))}
                    />
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-white font-medium">Change Password</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Current Password</label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          className="bg-slate-700 border-slate-600 text-slate-300 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-slate-400 hover:text-slate-300"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">New Password</label>
                      <Input
                        type="password"
                        className="bg-slate-700 border-slate-600 text-slate-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Confirm New Password</label>
                      <Input
                        type="password"
                        className="bg-slate-700 border-slate-600 text-slate-300"
                      />
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Update Password
                  </Button>
                </div>

                <Separator className="bg-slate-600" />

                <div className="space-y-4">
                  <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                  <p className="text-slate-400 text-sm">Add an extra layer of security to your account</p>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    Enable 2FA
                  </Button>
                </div>

                <Separator className="bg-slate-600" />

                <div className="space-y-4">
                  <h3 className="text-white font-medium">Active Sessions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div>
                        <p className="text-white text-sm">Current Session</p>
                        <p className="text-slate-400 text-xs">Chrome on macOS • New York, US</p>
                      </div>
                      <span className="text-green-400 text-xs">Active</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Billing & Subscription</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg">Free Plan</h3>
                      <p className="text-slate-400">100 AI generations per month</p>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      Upgrade to Pro
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">47</div>
                      <div className="text-slate-400 text-sm">Generations Used</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">53</div>
                      <div className="text-slate-400 text-sm">Remaining</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">12</div>
                      <div className="text-slate-400 text-sm">Days Left</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-medium">Payment Method</h3>
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                        <CreditCard className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white text-sm">No payment method</p>
                        <p className="text-slate-400 text-xs">Add a payment method to upgrade</p>
                      </div>
                    </div>
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      Add Card
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-medium">Billing History</h3>
                  <div className="text-center py-8">
                    <p className="text-slate-400">No billing history available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">App Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">Dark Mode</h3>
                      <p className="text-slate-400 text-sm">Use dark theme across the application</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <Separator className="bg-slate-600" />
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Language</label>
                    <select className="w-full bg-slate-700 border-slate-600 text-slate-300 rounded-md p-2">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Timezone</label>
                    <select className="w-full bg-slate-700 border-slate-600 text-slate-300 rounded-md p-2">
                      <option>UTC-5 (Eastern Time)</option>
                      <option>UTC-8 (Pacific Time)</option>
                      <option>UTC+0 (GMT)</option>
                      <option>UTC+1 (Central European Time)</option>
                    </select>
                  </div>
                  
                  <Separator className="bg-slate-600" />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">Auto-save Drafts</h3>
                      <p className="text-slate-400 text-sm">Automatically save content as you type</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">Show Tips</h3>
                      <p className="text-slate-400 text-sm">Display helpful tips and tutorials</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}