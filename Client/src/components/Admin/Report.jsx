import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { getReport } from "../../services/admin";
import "./Report.css";

function Report() {
  const [data, setData] = useState({
    totalNumberOfHr: 0,
    activeHr: 0,
    totalNumberOfJobs: 0,
    openJobs: 0,
  });

  const chartData = [
    { name: "Total HR", count: data.totalNumberOfHr },
    { name: "Active HR", count: data.activeHr },
    { name: "Total Jobs", count: data.totalNumberOfJobs },
    { name: "Open Jobs", count: data.openJobs },
  ];

  useEffect(() => {
    getReport()
      .then((res) => setData(res))
      .catch(() => console.error("Error fetching report"));
  }, []);

  return (
    <div className="reportv2-page">
      <div className="reportv2-header">
        <h2>Recruitment Analytics</h2>
        <p>Real-time overview of HR and Job activity</p>
      </div>

      <div className="reportv2-content">
        {/* LEFT KPI PANEL */}
        <div className="kpi-panel">
          <div className="kpi-card">
            <span>Total HR</span>
            <h3>{data.totalNumberOfHr}</h3>
          </div>

          <div className="kpi-card">
            <span>Active HR</span>
            <h3>{data.activeHr}</h3>
          </div>

          <div className="kpi-card">
            <span>Total Jobs</span>
            <h3>{data.totalNumberOfJobs}</h3>
          </div>

          <div className="kpi-card highlight">
            <span>Open Jobs</span>
            <h3>{data.openJobs}</h3>
          </div>
        </div>

        {/* RIGHT CHART PANEL */}
        <div className="chart-panel">
          <h4>Jobs & HR Distribution</h4>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="count"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Report;
