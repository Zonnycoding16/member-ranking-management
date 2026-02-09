import React from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { Users, Star, Calendar, UserCheck, TrendingUp } from 'lucide-react';

// Dữ liệu giả lập cho biểu đồ
const lineData = [
  { name: 'Jan', score: 50 }, { name: 'Feb', score: 85 },
  { name: 'Mar', score: 120 }, { name: 'Apr', score: 145 },
  { name: 'May', score: 170 }, { name: 'Jun', score: 230 },
];

const barData = [
  { name: 'Workshops', val: 75, val2: 45, val3: 55 },
  { name: 'Tech Talks', val: 70, val2: 28, val3: 65 },
  { name: 'Hackathons', val: 88, val2: 30, val3: 50 },
];

const pieData = [
  { name: 'Web', value: 400 }, { name: 'AI', value: 300 },
  { name: 'Mobile', value: 300 }, { name: 'Cloud', value: 200 },
];

const COLORS = ['#4285F4', '#EA4335', '#FBBC04', '#34A853']; // Màu chuẩn Google

// Component Thẻ chỉ số (Stat Card)
const StatCard = ({ title, value, growth, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 flex flex-col gap-2">
    <div className="flex justify-between items-start">
      <span className="text-gray-500 text-sm font-medium">{title}</span>
      <Icon size={20} className="text-gray-400" />
    </div>
    <div className="flex items-baseline gap-2">
      <h2 className="text-3xl font-bold text-gray-900">{value}</h2>
      {growth && <TrendingUp size={16} className="text-green-500" />}
    </div>
    <p className="text-green-500 text-xs font-semibold">Growth ats: {growth || value}</p>
  </div>
);

export default function AnalyticsDashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      {/* 1. Hàng chỉ số tổng quát */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Members" value="520" growth="520" icon={Users} />
        <StatCard title="Avg. Score" value="145" icon={Star} />
        <StatCard title="Event Attendance Rate" value="78%" icon={Calendar} />
        <StatCard title="Active Contributors" value="85" growth="85" icon={UserCheck} />
      </div>

      {/* 2. Hàng biểu đồ chính */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Biểu đồ đường tăng trưởng */}
        <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100">
          <h3 className="font-bold mb-6">Score Growth (Last 6 Months)</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={lineData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4285F4" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4285F4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="score" stroke="#4285F4" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Biểu đồ cột */}
        <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100">
          <h3 className="font-bold mb-6">Event Participation by Type</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="val" fill="#4285F4" radius={[4, 4, 0, 0]} barSize={12} />
                <Bar dataKey="val2" fill="#EA4335" radius={[4, 4, 0, 0]} barSize={12} />
                <Bar dataKey="val3" fill="#34A853" radius={[4, 4, 0, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 3. Hàng biểu đồ tròn và kỹ năng */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 flex flex-col items-center">
          <h3 className="font-bold w-full text-left mb-6">Member Skills Distribution</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-4 mt-4 justify-center">
            {pieData.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                <span className="text-xs text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}