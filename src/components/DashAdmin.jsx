import React from 'react';
import { 
  RiArrowRightUpLine, 
  RiArrowLeftSLine, 
  RiArrowRightSLine 
} from '@remixicon/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const jobLeadsData = [
  { name: 'Jan', value: 15 }, { name: 'Feb', value: 25 }, { name: 'Mar', value: 18 },
  { name: 'Apr', value: 70 }, { name: 'May', value: 35 }, { name: 'Jun', value: 50 },
  { name: 'Jul', value: 45 }, { name: 'Aug', value: 40 }, { name: 'Sep', value: 95 },
  { name: 'Nov', value: 65 }, { name: 'Oct', value: 25 }, { name: 'Dec', value: 60 },
];

const contractorsData = [
  { name: 'Jan', value: 35 }, { name: 'Feb', value: 25 }, { name: 'Mar', value: 18 },
  { name: 'Apr', value: 45 }, { name: 'May', value: 75 }, { name: 'Jun', value: 30 },
  { name: 'Jul', value: 50 }, { name: 'Aug', value: 15 }, { name: 'Sep', value: 40 },
  { name: 'Oct', value: 75 }, { name: 'Nov', value: 30 }, { name: 'Dec', value: 35 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="da-custom-tooltip">
        <p className="da-tooltip-label">{`${label} 2024`}</p>
        <div className="da-tooltip-value">
          <span className="da-tooltip-dot"></span>
          <p>Job Leads : <strong>{payload[0].value}</strong></p>
        </div>
      </div>
    );
  }
  return null;
};

const CustomBarTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="da-custom-tooltip">
        <p className="da-tooltip-label">{`${label} 2024`}</p>
        <div className="da-tooltip-value">
          <span className="da-tooltip-dot da-dot-dark"></span>
          <p>Contractors : <strong>{payload[0].value * 4}</strong></p> 
        </div>
      </div>
    );
  }
  return null;
};

const DashAdmin = () => {
  const tableData = [
    { id: '#L1001', name: 'Michael Turner', mobile: '0412 345 678', suburbs: 'Parramatta, Blacktown', date: '20-04-2025', status: 'Pending' },
    { id: '#L1001', name: 'Sarah James', mobile: '0412 345 678', suburbs: 'Penrith, Castle Hill', date: '20-04-2025', status: 'Pending' },
    { id: '#L1001', name: 'Julie Martin', mobile: '0412 345 678', suburbs: 'Liverpool, Fairfield', date: '21-04-2025', status: 'Pending' },
    { id: '#L1001', name: 'Rahul Singh', mobile: '0412 345 678', suburbs: 'Bankstown, Strathfield', date: '21-04-2025', status: 'Pending' },
    { id: '#L1001', name: 'Sarah O’Connor', mobile: '0412 345 678', suburbs: 'Campbelltown, Camden', date: '21-04-2025', status: 'Pending' },
    { id: '#L1001', name: 'Michael Turner', mobile: '0412 345 678', suburbs: 'Hurstville, Rockdale', date: '22-04-2025', status: 'Pending' },
  ];

  return (
    <div className="da-main-content animate-fade">
      <h1 className="da-page-title">Admin Dashboard</h1>

      {/* --- Top Stats Cards --- */}
      <div className="da-stats-grid">
        <div className="da-stat-card">
          <div className="da-stat-icon-circle da-bg-orange">
            <img src='public/roofers.png' alt='img-1'></img>
          </div>
          <div className="da-stat-info">
            <label className="da-label-muted">Total Contractors</label>
            <h2 className="da-stat-number">120</h2>
          </div>
        </div>

        <div className="da-stat-card">
          <div className="da-stat-icon-circle da-bg-orange">
            <img src='public/homeowners.png' alt='img-1'></img>
          </div>
          <div className="da-stat-info">
            <label className="da-label-muted">Total Homeowners</label>
            <h2 className="da-stat-number">240</h2>
          </div>
        </div>

        <div className="da-stat-card">
          <div className="da-stat-icon-circle da-bg-orange">
            <img src='public/completeprojects.png' alt='img-1'></img>
          </div>
          <div className="da-stat-info">
            <label className="da-label-muted">Complete Projects</label>
            <h2 className="da-stat-number">20</h2>
          </div>
        </div>
      </div>

      {/* --- Charts Section --- */}
      <div className="da-charts-container">
        <div className="da-chart-box">
          <h3 className="da-section-subtitle">Job Leads</h3>
          <div className="da-chart-visual">
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={jobLeadsData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff5c28" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ff5c28" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#999', fontSize: 12}} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#999', fontSize: 12}}
                  tickFormatter={(value) => `$${value}k`}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#ff5c28', strokeWidth: 1 }} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#ff5c28" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2, fill: '#ff5c28' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="da-chart-box">
          <h3 className="da-section-subtitle">Contractors</h3>
          <div className="da-chart-visual">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={contractorsData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#999', fontSize: 12}} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#999', fontSize: 12}}
                  tickFormatter={(value) => `$${value}k`}
                />
                <Tooltip 
                  content={<CustomBarTooltip />} 
                  cursor={{ fill: '#f9f9f9' }} // Light highlight on hover
                />
                <Bar 
                  dataKey="value" 
                  fill="#122621" 
                  barSize={8} // Makes the bars thin like the image
                  radius={[10, 10, 0, 0]} // Rounded tops
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* --- Table Section --- */}
      <div className="da-table-section">
        <h3 className="da-section-subtitle">Contractor Onboarding Request</h3>
        <div className="da-table-card">
          <table className="da-admin-table">
            <thead>
              <tr>
                <th>Contractor ID</th>
                <th>Contractor Name</th>
                <th>Mobile Number</th>
                <th>Suburbs Covered</th>
                <th>Date Submitted</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="da-text-dim">{row.id}</td>
                  <td className="da-font-bold">{row.name}</td>
                  <td>{row.mobile}</td>
                  <td>{row.suburbs}</td>
                  <td>{row.date}</td>
                  <td><span className="da-pill-pending">{row.status}</span></td>
                  <td>
                    <button className="da-btn-view">
                      View Details <RiArrowRightUpLine size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="da-pagination">
            <button className="da-pagi-nav"><RiArrowLeftSLine size={20}/></button>
            <button className="da-pagi-nav">1</button>
            <button className="da-pagi-nav da-pagi-active">2</button>
            <button className="da-pagi-nav">3</button>
            <button className="da-pagi-nav"><RiArrowRightSLine size={20}/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashAdmin;