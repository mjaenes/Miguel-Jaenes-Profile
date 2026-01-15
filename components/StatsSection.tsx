
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Activity, Users, DollarSign, TrendingUp } from 'lucide-react';
import { Language } from '../types.ts';
import { UI_TEXT } from '../constants.tsx';

const spendData = [
  { year: '2024', gasto: 3.81 },
  { year: '2025', gasto: 2.08 },
];

const growthData = [
  { year: '2022', ndps: 7905 },
  { year: '2023', ndps: 9500 },
  { year: '2024', ndps: 10200 },
  { year: '2025', ndps: 11533 },
];

interface StatsSectionProps {
  theme: string;
  language: Language;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ theme, language }) => {
  const isDark = theme === 'dark';
  const ui = UI_TEXT[language];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-ink-950 text-white dark:bg-white dark:text-ink-950 text-sm font-bold uppercase tracking-widest mb-4 transform -rotate-2">
            {ui.statsTitle}
          </div>
          <h3 className="text-5xl md:text-6xl font-serif font-black text-ink-950 dark:text-white mb-6">
            {ui.statsHeading[0]} <br/>
            <span className="text-electric-coral italic">{ui.statsHeading[1]}</span>
          </h3>
        </div>

        {/* Playful Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Card 1 - Violet */}
            <div className="bg-electric-violet/10 dark:bg-electric-violet/20 border-2 border-electric-violet rounded-3xl p-8 transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-electric-violet text-white rounded-lg">
                        <Activity size={24} />
                    </div>
                    <span className="font-black text-electric-violet/50 text-4xl">01</span>
                </div>
                <h4 className="text-6xl font-black text-ink-950 dark:text-white mb-2 tracking-tighter">-45%</h4>
                <p className="font-bold text-lg text-electric-violet mb-2">{ui.statsLabels.reduction}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">PPC UK: £3.8M → £2.08M</p>
            </div>

            {/* Card 2 - Lime */}
            <div className="bg-electric-lime/20 dark:bg-electric-lime/10 border-2 border-electric-lime rounded-3xl p-8 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-sm z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-electric-lime text-ink-950 rounded-lg">
                        <Users size={24} />
                    </div>
                    <span className="font-black text-electric-lime/50 text-4xl">02</span>
                </div>
                <h4 className="text-6xl font-black text-ink-950 dark:text-white mb-2 tracking-tighter">+130%</h4>
                <p className="font-bold text-lg text-ink-950 dark:text-white mb-2">{ui.statsLabels.growth}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Google App Campaigns (GAC)</p>
            </div>

            {/* Card 3 - Cyan */}
            <div className="bg-electric-cyan/10 dark:bg-electric-cyan/20 border-2 border-electric-cyan rounded-3xl p-8 transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-electric-cyan text-ink-950 rounded-lg">
                        <DollarSign size={24} />
                    </div>
                    <span className="font-black text-electric-cyan/50 text-4xl">03</span>
                </div>
                <h4 className="text-6xl font-black text-ink-950 dark:text-white mb-2 tracking-tighter">1.3y</h4>
                <p className="font-bold text-lg text-electric-cyan-700 dark:text-electric-cyan mb-2">{ui.statsLabels.payback}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Apple Search Ads (ASA) ROI.</p>
            </div>
        </div>

        {/* Charts Container - Fun Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-ink-900 border-2 border-ink-950 dark:border-white rounded-3xl p-8 shadow-pop relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <TrendingUp size={100} />
                </div>
                <h4 className="text-xl font-black text-ink-950 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-3 h-3 bg-electric-coral rounded-full"></span> {ui.charts.spend}
                </h4>
                <div className="h-64 w-full relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={spendData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? '#334155' : '#e2e8f0'} />
                            <XAxis dataKey="year" stroke={isDark ? '#94a3b8' : '#64748b'} tickLine={false} axisLine={false} />
                            <YAxis 
                                tickFormatter={(value) => `£${value}M`} 
                                stroke={isDark ? '#94a3b8' : '#64748b'} 
                                tickLine={false} 
                                axisLine={false} 
                            />
                            <Tooltip 
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                cursor={{fill: 'transparent'}}
                                formatter={(value: number) => [`£${value}M`, 'Gasto']}
                            />
                            <Bar dataKey="gasto" fill="#fb7185" radius={[8, 8, 8, 8]} barSize={50} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white dark:bg-ink-900 border-2 border-ink-950 dark:border-white rounded-3xl p-8 shadow-pop relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Users size={100} />
                </div>
                <h4 className="text-xl font-black text-ink-950 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-3 h-3 bg-electric-lime rounded-full"></span> {ui.charts.acquisition}
                </h4>
                <div className="h-64 w-full relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={growthData}>
                            <defs>
                                <linearGradient id="colorNdps" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#a3e635" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#a3e635" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? '#334155' : '#e2e8f0'} />
                            <XAxis dataKey="year" stroke={isDark ? '#94a3b8' : '#64748b'} tickLine={false} axisLine={false} />
                            <YAxis stroke={isDark ? '#94a3b8' : '#64748b'} tickLine={false} axisLine={false} />
                            <Tooltip 
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                            <Area type="monotone" dataKey="ndps" stroke="#a3e635" strokeWidth={4} fillOpacity={1} fill="url(#colorNdps)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
