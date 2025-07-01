import type React from 'react';
import type { UsageStats } from '../types/usage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface SettingsPanelProps {
  preferences: {
    timezone?: string;
    resetHour?: number;
  };
  onUpdatePreferences: (preferences: Partial<SettingsPanelProps['preferences']>) => void;
  stats: UsageStats;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  preferences,
  onUpdatePreferences,
  stats,
}) => {
  const handlePreferenceChange = (key: string, value: boolean | number | string) => {
    onUpdatePreferences({ [key]: value });
  };

  return (
    <div className="space-y-6 stagger-children">
      {/* Header */}
      <Card className="bg-neutral-900/80 backdrop-blur-sm border-neutral-800">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Settings</CardTitle>
          <CardDescription className="text-white/70">
            Customize your CCSeva experience
          </CardDescription>
        </CardHeader>
      </Card>

      {/* General Settings */}
      <Card className="bg-neutral-900/80 backdrop-blur-sm border-neutral-800">
        <CardContent className="p-6 space-y-6">
          {/* Timezone Configuration */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🌍</span>
              <div>
                <div className="text-white font-medium">Timezone</div>
                <div className="text-white/60 text-sm">
                  Auto-detected from your system for accurate reset times
                </div>
              </div>
            </div>

            <div className="ml-11 space-y-3">
              <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <div className="text-white text-sm font-medium">
                  {preferences.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone}
                </div>
                <div className="text-white/50 text-xs mt-1">Auto-detected from system</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-white/70 text-sm mb-1">Reset Hour</div>
                  <Select
                    value={(preferences.resetHour || 0).toString()}
                    onValueChange={(value) =>
                      handlePreferenceChange('resetHour', Number.parseInt(value))
                    }
                  >
                    <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }, (_, i) => (
                        <SelectItem
                          key={`reset-hour-${i.toString().padStart(2, '0')}`}
                          value={i.toString()}
                        >
                          {i.toString().padStart(2, '0')}:00
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <div className="text-white/70 text-sm mb-1">Current Time</div>
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm">
                    {new Date().toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                      timeZone:
                        preferences.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
                    })}
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                <div className="text-blue-300 text-sm">
                  <span className="text-lg mr-2">ℹ️</span>
                  Next reset:{' '}
                  {stats.resetInfo
                    ? new Date(stats.resetInfo.nextResetTime).toLocaleString([], {
                        timeZone:
                          preferences.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : 'Not available'}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
