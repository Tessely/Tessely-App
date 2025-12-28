import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import {
  Database,
  FileStack,
  LayoutGrid,
  Info,
  ChevronDown,
  User,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

export function MainDashboard() {
  const [selectedMetric, setSelectedMetric] = useState('Average Cycle Time');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0047AB] to-[#00D9B5] flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-[#0047AB] font-medium">
                <LayoutGrid className="w-4 h-4" />
                Dashboard
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <FileStack className="w-4 h-4" />
                Processes
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Database className="w-4 h-4" />
                Data Sources
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <User className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Main Dashboard (Process Groups)</h1>
            <p className="text-gray-600">Click into a segment to view detailed breakdown.</p>
          </div>
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-gray-200">
            <span className="text-sm text-gray-600">Time Period</span>
            <select className="text-sm font-medium text-gray-900 border-none outline-none bg-transparent">
              <option>Q4 2025 (October 1 - December 31)</option>
              <option>Q3 2025</option>
              <option>Q2 2025</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
        
        {/* KPI Cards */}
        <div className="flex gap-3 mb-6 overflow-x-auto">
          <Card className="bg-white p-4 border border-gray-200 flex-1 min-w-[200px]">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm text-gray-600 flex items-center gap-1">
                Average Cycle Time
                <Info className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">2.3</div>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <TrendingDown className="w-4 h-4" />
              <span>-0.1 QoQ</span>
            </div>
          </Card>

          <Card className="bg-white p-4 border border-gray-200 flex-1 min-w-[200px]">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm text-gray-600 flex items-center gap-1">
                Top 3 Bottlenecks
                <Info className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <div className="font-medium text-gray-900">1. Delivery</div>
              <div className="font-medium text-gray-900">2. Accounting</div>
              <div className="font-medium text-gray-900">3. Order Management</div>
            </div>
          </Card>

          <Card className="bg-white p-4 border border-gray-200 flex-1 min-w-[200px]">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm text-gray-600 flex items-center gap-1">
                Average STP Rate
                <Info className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">88.0%</div>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+3% QoQ</span>
            </div>
            <div className="w-full bg-green-500 h-1.5 rounded-full mt-2"></div>
          </Card>

          <Card className="bg-white p-4 border border-gray-200 flex-1 min-w-[200px]">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm text-gray-600 flex items-center gap-1">
                Total Cases Processed
                <Info className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">15,815</div>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+10 QoQ</span>
            </div>
          </Card>

          <Card className="bg-white p-4 border border-gray-200 flex-1 min-w-[200px]">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm text-gray-600 flex items-center gap-1">
                Deviation Rate
                <Info className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">2.0%</div>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>-0.2% QoQ</span>
            </div>
            <div className="w-full bg-green-500 h-1.5 rounded-full mt-2"></div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Process Overview */}
          <Card className="bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Process Overview</h2>
            <div className="relative">
              {/* Pie Chart Placeholder */}
              <div className="flex items-center justify-center h-80">
                <div className="relative w-64 h-64">
                  {/* This would be replaced with an actual chart library */}
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="#1e3a5f" strokeWidth="0" />
                    <circle cx="50" cy="50" r="40" fill="#2563eb" strokeWidth="0"
                      pathLength="100" strokeDasharray="42 100" strokeDashoffset="0" />
                    <circle cx="50" cy="50" r="40" fill="#3b82f6" strokeWidth="0"
                      pathLength="100" strokeDasharray="13 100" strokeDashoffset="-42" />
                    <circle cx="50" cy="50" r="40" fill="#60a5fa" strokeWidth="0"
                      pathLength="100" strokeDasharray="2 100" strokeDashoffset="-55" />
                    <circle cx="50" cy="50" r="40" fill="#93c5fd" strokeWidth="0"
                      pathLength="100" strokeDasharray="1 100" strokeDashoffset="-57" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-start justify-start text-xs space-y-2 transform rotate-90 translate-x-72">
                    <div className="flex items-center gap-2">
                      <div className="text-gray-700 font-medium">Order Management</div>
                      <div className="text-gray-600">42%, 400 Cases</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-gray-700 font-medium">Production</div>
                      <div className="text-gray-600">42%, 400 Cases</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-gray-700 font-medium">Delivery</div>
                      <div className="text-gray-600">13%, 150 Cases</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-gray-700 font-medium">Accounting</div>
                      <div className="text-gray-600">2%, 10 Cases</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-gray-700 font-medium">Labeling</div>
                      <div className="text-gray-600">1%, 5 Cases</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Performance Metrics */}
          <Card className="bg-white p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Performance Metrics</h2>
              <select
                className="text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none"
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
              >
                <option>Average Cycle Time</option>
                <option>STP Rate</option>
                <option>Throughput</option>
              </select>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Accounting', value: 95, color: 'from-blue-400 to-blue-500' },
                { name: 'Labeling', value: 80, color: 'from-blue-400 to-blue-500' },
                { name: 'Delivery', value: 70, color: 'from-blue-500 to-blue-600' },
                { name: 'Order Management', value: 50, color: 'from-blue-600 to-blue-700' },
                { name: 'Production', value: 50, color: 'from-blue-700 to-blue-800' },
              ].map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    <span className="text-sm font-bold text-gray-900">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-8">
                    <div
                      className={`bg-gradient-to-r ${item.color} h-8 rounded-full flex items-center justify-start px-3`}
                      style={{ width: `${item.value}%` }}
                    >
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Overview */}
          <Card className="bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Performance Overview (Insights Powered by AI)</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full border-8 border-amber-400 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-900">90/100</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-900">Overall Process Health</span>
                    <Info className="w-4 h-4 text-gray-500" />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The food business demonstrates strong operational efficiency across its key process groups, with high STP rates and consistent throughput in order management and inventory operations. Production and preparation processes show moderate cycle times, occasional yield losses, and some manual interventions, indicating opportunities for standardization and automation.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Alerts and Hotspots */}
          <Card className="bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Alerts and Hotspots</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Process Group</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Alert</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-2">
                      <a href="#" className="text-[#0047AB] hover:underline">Order Management</a>
                    </td>
                    <td className="py-4 px-2 text-sm text-gray-700">Spike in exception rate</td>
                    <td className="py-4 px-2 text-sm text-gray-700">Enhance automated validation</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-2">
                      <a href="#" className="text-[#0047AB] hover:underline">Production</a>
                    </td>
                    <td className="py-4 px-2 text-sm text-gray-700">High rework rate</td>
                    <td className="py-4 px-2 text-sm text-gray-700">Standardize recipes and procedures</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-end">
              <Button className="bg-[#0047AB] text-white hover:bg-[#003a8c] rounded-full px-6">
                Get Insights
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
