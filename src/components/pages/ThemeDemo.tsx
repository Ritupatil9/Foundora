import React from 'react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeDemo() {
  const { theme, effectiveTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-border">
          <div>
            <h1 className="text-3xl font-bold">Theme Toggle Demo</h1>
            <p className="text-muted-foreground mt-1">
              Current: {theme} mode ({effectiveTheme} effective)
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* Content Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Sample Card 1 */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Features</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Light theme support
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Dark theme support
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Auto theme (system preference)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Persistent storage
              </li>
            </ul>
          </div>

          {/* Sample Card 2 */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Interactive Elements</h2>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Primary Button
              </button>
              <button className="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
                Secondary Button
              </button>
              <input 
                type="text" 
                placeholder="Sample input field" 
                className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          {/* Theme Info Card */}
          <div className="bg-muted/50 border border-border rounded-lg p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-3">Theme Information</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl mb-2">☀️</div>
                <div className="font-medium">Light Mode</div>
                <div className="text-sm text-muted-foreground">Clean & bright</div>
              </div>
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl mb-2">🌙</div>
                <div className="font-medium">Dark Mode</div>
                <div className="text-sm text-muted-foreground">Easy on eyes</div>
              </div>
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl mb-2">🔄</div>
                <div className="font-medium">Auto Mode</div>
                <div className="text-sm text-muted-foreground">Follows system</div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="mt-8 bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">How to Use</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <ul className="space-y-1">
              <li>• Click the theme button to cycle through modes</li>
              <li>• Use the dropdown to select a specific theme</li>
              <li>• Your preference is automatically saved</li>
              <li>• Auto mode follows your system preference</li>
              <li>• Press Ctrl+T to cycle themes (if implemented)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}