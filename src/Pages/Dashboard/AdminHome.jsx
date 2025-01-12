import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
import { useAuth } from "../../Hooks/useAuth";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";

export const AdminHome = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  // bar chart function
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((item) => {
    return { name: item._id, value: item.revenue };
  });
  return (
    <div className="pl-10">
      <h2 className="text-3xl">
        Hi {user?.displayName ? user?.displayName : ""}, Welcome Back
      </h2>
      {/* stats */}
      <div className="stats shadow w-9/12 mx-auto mt-10">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaWallet className="text-4xl" />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{stats?.revenue} $</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-4xl" />
          </div>
          <div className="stat-title">Customers</div>
          <div className="stat-value">{stats?.user}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <LuChefHat className="text-4xl" />
          </div>
          <div className="stat-title">Products</div>
          <div className="stat-value">{stats?.product}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaTruck className="text-4xl" />
          </div>
          <div className="stat-title">Order</div>
          <div className="stat-value">{stats?.order}</div>
        </div>
      </div>
      {/* chart */}
      <div className="flex w-full mt-10 bg-white p-6">
        {/*  */}
        <div className="w-1/2">
          <BarChart
            width={500}
            height={500}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={600} height={600}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend></Legend>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
