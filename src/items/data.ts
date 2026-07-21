import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ShieldAlert,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaTiktok, FaXTwitter } from "react-icons/fa6";
export const contactSections = [
  {
    title: "Phone",
    icon: Phone,
    contacts: [
      {
        label: "Support",
        value: "+254 704172680",
        href: "tel:+254704172680",
      },
      {
        label: "WhatsApp",
        value: "+254704172680",
        href: "https://wa.me/254704172680",
      },
    ],
  },

  {
    title: "Location",
    icon: MapPin,
    contacts: [
      {
        label: "Head Office",
        value: "Nairobi, Kenya",
        href: "https://maps.google.com/?q=Nairobi,Kenya",
      },
    ],
  },
  {
    title: "Emergency",
    icon: ShieldAlert,
    contacts: [
      {
        label: "Emergency Hotline",
        value: "+254 793749438",
        href: "tel:+254 793749438",
      },
    ],
  },
  {
    title: "Business Hours",
    icon: Clock,
    contacts: [
      {
        label: "Monday - Friday",
        value: "8:00 AM - 6:00 PM",
        href: "",
      },
      {
        label: "Saturday",
        value: "Closed",
        href: "",
      },
    ],
  },
  {
    title: "Email",
    icon: Mail,
    contacts: [
      {
        label: "General",
        value: "trailsandmemoirs@gmail.com",
        href: "mailto:trailsandmemoirs@gmail.com",
      },
    ],
  },
];

export const socialMediaLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/254712345678",
    iconColor: "text-[#25D366]",
    backgroundColor: "bg-[#25D366]/10",
    hoverColor: "hover:bg-[#25D366]/20",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/trails_and_memoirs",
    iconColor: "text-[#E4405F]",
    backgroundColor: "bg-[#E4405F]/10",
    hoverColor: "hover:bg-[#E4405F]/20",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    href: "https://tiktok.com/@trails_and_memoirs",
    iconColor: "text-[#111827]",
    backgroundColor: "bg-slate-900/10",
    hoverColor: "hover:bg-slate-900/20",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://facebook.com/trails_and_memoirs",
    iconColor: "text-[#1877F2]",
    backgroundColor: "bg-[#1877F2]/10",
    hoverColor: "hover:bg-[#1877F2]/20",
  },
  {
    name: "X",
    icon: FaXTwitter,
    href: "https://x.com/trails_and_memoirs",
    iconColor: "text-black dark:text-white",
    backgroundColor: "bg-black/10 dark:bg-white/10",
    hoverColor: "hover:bg-black/20 dark:hover:bg-white/20",
  },
];
