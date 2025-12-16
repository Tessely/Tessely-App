import { Button } from '../ui/button';
import { Calendar, Filter, TrendingUp, TrendingDown, AlertCircle, CheckCircle, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export function Dashboard() {
  const processData = [
    { name: 'Order Entry', efficiency: 85, delay: 2 },
    { name: 'Validation', efficiency: 92, delay: 1 },
    { name: 'Processing', efficiency: 65, delay: 8 },
    { name: 'Quality Check', efficiency: 88, delay: 3 },
    { name: 'Shipping', efficiency: 78, delay: 4 },
    { name: 'Delivery', efficiency: 90, delay: 2 },
  ];

  const kpis = [
    {
      label: 'Efficiency Score',
      value: '82%',
      change: '+5.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      label: 'Avg. Process Time',
      value: '4.2 days',
      change: '-12%',
      trend: 'up',
      icon: TrendingDown,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      label: 'Cost Savings',
      value: '$42,500',
      change: '+18%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      label: 'Active Processes',
      value: '1,247',
      change: '+3.1%',
      trend: 'up',
      icon: Zap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  const insights = [
    {
      type: 'critical',
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      title: 'Bottleneck Detected',
      description: 'Processing stage is 35% slower than target. Recommend increasing capacity.',
      impact: 'High',
    },
    {
      type: 'success',
      icon: CheckCircle,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      title: 'Efficiency Improvement',
      description: 'Validation process improved by 12% this week after automation.',
      impact: 'Medium',
    },
    {
      type: 'warning',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      title: 'Optimization Opportunity',
      description: 'Order Entry could benefit from parallel processing for large orders.',
      impact: 'Medium',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-gray-900 mb-2">Process Intelligence Dashboard</h1>
              <p className="text-gray-600 text-sm">
                See Your Entire Operation at a Glance
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-gray-300">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" className="border-gray-300">
                <Calendar className="w-4 h-4 mr-2" />
                Last 30 Days
              </Button>
              <Button className="bg-[#0047AB] hover:bg-[#003380] text-white">
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${kpi.bgColor} flex items-center justify-center`}>
                  <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                </div>
                <span className={`text-sm flex items-center gap-1 ${kpi.color}`}>
                  {kpi.change}
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{kpi.label}</p>
              <p className="text-2xl text-gray-900">{kpi.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Process Heatmap */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-gray-900">Process Efficiency Heatmap</h2>
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-2">
                <option>All Departments</option>
                <option>Sales</option>
                <option>Operations</option>
                <option>Support</option>
              </select>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={processData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="efficiency" radius={[8, 8, 0, 0]}>
                  {processData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.efficiency > 80 ? '#00D9B5' : entry.efficiency > 70 ? '#FFA500' : '#FF6B6B'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {/* Process Flow Visualization */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-600 mb-4">Process Flow</p>
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {processData.map((step, index) => (
                  <div key={step.name} className="flex items-center gap-2 flex-shrink-0">
                    <div
                      className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                        step.efficiency > 80
                          ? 'bg-emerald-50 text-emerald-700'
                          : step.efficiency > 70
                          ? 'bg-orange-50 text-orange-700'
                          : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {step.name}
                      <span className="ml-2 text-xs opacity-75">{step.efficiency}%</span>
                    </div>
                    {index < processData.length - 1 && (
                      <div className="w-6 h-0.5 bg-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Insights Sidebar */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0047AB] to-[#00D9B5] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-gray-900">AI Insights</h2>
            </div>

            <div className="space-y-4">
              {insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-xl ${insight.bgColor} border border-gray-100`}
                >
                  <div className="flex items-start gap-3">
                    <insight.icon className={`w-5 h-5 ${insight.color} flex-shrink-0 mt-0.5`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-sm text-gray-900">{insight.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                          insight.impact === 'High' ? 'bg-red-100 text-red-700' :
                          insight.impact === 'Medium' ? 'bg-orange-100 text-orange-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {insight.impact}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">{insight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button className="w-full mt-6 bg-gradient-to-r from-[#0047AB] to-[#00D9B5] text-white hover:opacity-90">
              View All Insights
            </Button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-gray-900 mb-4">Top Bottlenecks</h3>
            <div className="space-y-3">
              {processData
                .sort((a, b) => b.delay - a.delay)
                .slice(0, 3)
                .map((step) => (
                  <div key={step.name} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{step.name}</span>
                    <span className="text-sm text-red-600">{step.delay}h delay</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-gray-900 mb-4">Best Performers</h3>
            <div className="space-y-3">
              {processData
                .sort((a, b) => b.efficiency - a.efficiency)
                .slice(0, 3)
                .map((step) => (
                  <div key={step.name} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{step.name}</span>
                    <span className="text-sm text-emerald-600">{step.efficiency}%</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0047AB] to-[#00D9B5] rounded-xl p-6 text-white">
            <h3 className="mb-4">Ready to Dive Deeper?</h3>
            <p className="text-sm text-white/90 mb-4">
              This is a preview of what Tessely can do for your business
            </p>
            <Button className="w-full bg-white text-[#0047AB] hover:bg-gray-100">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
