import React from 'react'
import profilePhoto from '../../assets/MeraPhoto.jpeg'
import { FaUser, FaDollarSign, FaChartLine, FaComments } from "react-icons/fa"
import LineChart from './LineChart'
import BarChart from './BarChart'

const stats = [
    {
        title: "USERS",
        value: "1,000",
        trend: "↑ 2.15%",
        trendText: "Since last month",
        trendColor: "text-green-400",
        icon: <FaUser className="text-white" size={20} />,
        iconBg: "bg-blue-500"
    },
    {
        title: "REVENUE",
        value: "$25K",
        trend: "↑ 4.72%",
        trendText: "Since last month",
        trendColor: "text-green-400",
        icon: <FaDollarSign className="text-white" size={20} />,
        iconBg: "bg-green-500"
    },
    {
        title: "GROWTH",
        value: "+12%",
        trend: "↑ 1.89%",
        trendText: "Since last month",
        trendColor: "text-green-400",
        icon: <FaChartLine className="text-white" size={20} />,
        iconBg: "bg-yellow-500"
    },
    {
        title: "FEEDBACK",
        value: "320",
        trend: "↑ 3.48%",
        trendText: "Since last month",
        trendColor: "text-green-400",
        icon: <FaComments className="text-white" size={20} />,
        iconBg: "bg-cyan-500"
    }
]

const Dashboard = () => {
    return (
        <div className=" ">
            <div className="main bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 w-full min-h-screen text-white px-5 py-10 flex flex-col gap-10">

                {/* Header */}
                <div className="title-profilename flex flex-col md:flex-row justify-between items-center px-6 gap-4">
                    <div className="title text-3xl font-extrabold tracking-wide">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="profilename flex gap-4 items-center">
                        <div className="photo w-12 h-12 rounded-full overflow-hidden">
                            <img src={profilePhoto} alt="Profile" className="object-cover h-12 w-12" />
                        </div>
                        <div className="name font-extrabold text-2xl">Sanchit Pathak</div>
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gray-700 text-white rounded-xl p-6 shadow-md hover:shadow-lg transition-transform duration-300 relative"
                        >
                            {/* Icon Badge */}
                            <div className={`absolute top-4 right-4 ${stat.iconBg} rounded-full p-2`}>
                                {stat.icon}
                            </div>

                            {/* Title */}
                            <div className="text-sm font-semibold text-gray-400 mb-2 tracking-wide">
                                {stat.title}
                            </div>

                            {/* Value */}
                            <div className="text-3xl font-bold">{stat.value}</div>

                            {/* Trend */}
                            <div className={`text-sm mt-1 font-medium ${stat.trendColor}`}>
                                {stat.trend} <span className="text-gray-400">{stat.trendText}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="chart flex flex-wrap gap-5  items-center justify-center">
                    <div className="w-full md:w-[48%] lg:w-[45%]">
                        <LineChart />
                    </div>
                    <div className="w-full md:w-[48%] lg:w-[45%]">
                        <BarChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard