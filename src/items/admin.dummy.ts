import { BsCalendarCheckFill, BsCreditCard, BsStarFill } from "react-icons/bs";
import { FaClipboardList, FaUserShield } from "react-icons/fa";
import { FaMountain } from "react-icons/fa6";

export const dashboardStats = [
  {
    id: "total-bookings",
    title: "Total Bookings",
    value: 1248,
    icon: FaClipboardList,
    percentage: 12.4,
    trend: "up",
    description: "Compared to last month",
    color: "blue",
  },
  {
    id: "upcoming-expeditions",
    title: "Upcoming Expeditions",
    value: 18,
    icon: FaMountain,
    percentage: 8.1,
    trend: "up",
    description: "Scheduled this month",
    color: "green",
  },
  {
    id: "active-customers",
    title: "Active Customers",
    value: 856,
    icon: FaUserShield,
    percentage: 15.3,
    trend: "up",
    description: "Returning hikers",
    color: "purple",
  },
  {
    id: "monthly-revenue",
    title: "Monthly Revenue",
    value: "KES 1,245,600",
    icon: BsCreditCard,
    percentage: 17.8,
    trend: "up",
    description: "Compared to last month",
    color: "orange",
  },
  {
    id: "average-rating",
    title: "Average Rating",
    value: "4.9",
    icon: BsStarFill,
    percentage: 2.3,
    trend: "up",
    description: "From 624 reviews",
    color: "yellow",
  },
  {
    id: "departures-this-week",
    title: "Departures This Week",
    value: 7,
    icon: BsCalendarCheckFill,
    percentage: 4.5,
    trend: "down",
    description: "Compared to last week",
    color: "red",
  },
];

export const monthlyBookingsData = [
  { month: "Jan", bookings: 212 },
  { month: "Feb", bookings: 196 },
  { month: "Mar", bookings: 235 },
  { month: "Apr", bookings: 278 },
  { month: "May", bookings: 321 },
  { month: "Jun", bookings: 368 },
  { month: "Jul", bookings: 442 },
  { month: "Aug", bookings: 417 },
  { month: "Sep", bookings: 336 },
  { month: "Oct", bookings: 294 },
  { month: "Nov", bookings: 271 },
  { month: "Dec", bookings: 498 },
];
export const yearlyRevenueData = [
  {
    label: "2021",
    revenue: 9650000,
  },
  {
    label: "2022",
    revenue: 14200000,
  },
  {
    label: "2023",
    revenue: 18850000,
  },
  {
    label: "2024",
    revenue: 24300000,
  },
  {
    label: "2025",
    revenue: 29750000,
  },
  {
    label: "2026",
    revenue: 34800000,
  },
];

export const monthlyRevenueData = [
  {
    label: "Jan",
    revenue: 1245000,
  },
  {
    label: "Feb",
    revenue: 1187000,
  },
  {
    label: "Mar",
    revenue: 1418000,
  },
  {
    label: "Apr",
    revenue: 1624000,
  },
  {
    label: "May",
    revenue: 1879000,
  },
  {
    label: "Jun",
    revenue: 2045000,
  },
  {
    label: "Jul",
    revenue: 2380000,
  },
  {
    label: "Aug",
    revenue: 2245000,
  },
  {
    label: "Sep",
    revenue: 1836000,
  },
  {
    label: "Oct",
    revenue: 1698000,
  },
  {
    label: "Nov",
    revenue: 1575000,
  },
  {
    label: "Dec",
    revenue: 2710000,
  },
];

export const weeklyRevenueData = [
  {
    label: "Mon",
    revenue: 42000,
  },
  {
    label: "Tue",
    revenue: 38500,
  },
  {
    label: "Wed",
    revenue: 46500,
  },
  {
    label: "Thu",
    revenue: 51800,
  },
  {
    label: "Fri",
    revenue: 72400,
  },
  {
    label: "Sat",
    revenue: 168500,
  },
  {
    label: "Sun",
    revenue: 143200,
  },
];
