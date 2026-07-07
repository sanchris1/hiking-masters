import { User } from "@/types/types";
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

export const dummyUsers: User[] = [
  {
    id: "USR-001",
    fullName: "Brian Otieno",
    email: "brian.otieno@example.com",
    phone: "+254712345678",
    avatar: "/avatars/avatar1.png",
    role: "customer",
    status: "active",
    gender: "Male",
    joinedAt: "2026-01-12",
    totalBookings: 6,
  },
  {
    id: "USR-002",
    fullName: "Faith Wanjiru",
    email: "faith.wanjiru@example.com",
    phone: "+254723456789",
    avatar: "/avatars/avatar2.png",
    role: "customer",
    status: "active",
    gender: "Female",
    joinedAt: "2026-02-03",
    totalBookings: 3,
  },
  {
    id: "USR-003",
    fullName: "Kevin Kiptoo",
    email: "kevin.kiptoo@example.com",
    phone: "+254734567890",
    avatar: "/avatars/avatar3.png",
    role: "guide",
    status: "active",
    gender: "Male",
    joinedAt: "2025-11-15",
    totalBookings: 0,
  },
  {
    id: "USR-004",
    fullName: "Mercy Achieng",
    email: "mercy.achieng@example.com",
    phone: "+254745678901",
    avatar: "/avatars/avatar4.png",
    role: "customer",
    status: "inactive",
    gender: "Female",
    joinedAt: "2025-12-08",
    totalBookings: 1,
  },
  {
    id: "USR-005",
    fullName: "David Mwangi",
    email: "david.mwangi@example.com",
    phone: "+254756789012",
    avatar: "/avatars/avatar5.png",
    role: "customer",
    status: "active",
    gender: "Male",
    joinedAt: "2026-03-21",
    totalBookings: 8,
  },
  {
    id: "USR-006",
    fullName: "Grace Njeri",
    email: "grace.njeri@example.com",
    phone: "+254767890123",
    avatar: "/avatars/avatar6.png",
    role: "guide",
    status: "active",
    gender: "Female",
    joinedAt: "2025-10-10",
    totalBookings: 0,
  },
  {
    id: "USR-007",
    fullName: "John Kamau",
    email: "john.kamau@example.com",
    phone: "+254778901234",
    avatar: "/avatars/avatar7.png",
    role: "customer",
    status: "active",
    gender: "Male",
    joinedAt: "2026-04-01",
    totalBookings: 2,
  },
  {
    id: "USR-008",
    fullName: "Lilian Chebet",
    email: "lilian.chebet@example.com",
    phone: "+254789012345",
    avatar: "/avatars/avatar8.png",
    role: "customer",
    status: "inactive",
    gender: "Female",
    joinedAt: "2025-09-19",
    totalBookings: 4,
  },
  {
    id: "USR-009",
    fullName: "Samuel Mutiso",
    email: "samuel.mutiso@example.com",
    phone: "+254790123456",
    avatar: "/avatars/avatar9.png",
    role: "admin",
    status: "active",
    gender: "Male",
    joinedAt: "2025-07-01",
    totalBookings: 0,
  },
  {
    id: "USR-010",
    fullName: "Esther Nyambura",
    email: "esther.nyambura@example.com",
    phone: "+254701234567",
    avatar: "/avatars/avatar10.png",
    role: "customer",
    status: "active",
    gender: "Female",
    joinedAt: "2026-05-14",
    totalBookings: 5,
  },
];
