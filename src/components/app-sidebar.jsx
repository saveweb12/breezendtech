"use client";
import * as React from "react";
import NavMain from "./nav-main";
import { GrServices } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { ImArrowRight } from "react-icons/im";
import { RiQuestionnaireLine } from "react-icons/ri";
import { MdOutlineApps, MdMoveToInbox, MdDashboard } from "react-icons/md";
import {
  FaClipboardCheck,
  FaUsers,
  FaUserFriends,
  FaHashtag,
  FaCalendarDay,
  FaEnvelopeOpen
} from "react-icons/fa";
import { LuBraces } from "react-icons/lu";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Navigation",
      items: [
        { icon: MdDashboard, label: "Dashboard", link: "/dashboard/admin/home" },
        { icon: MdOutlineApps, label: "Sliders", link: "/dashboard/admin/slider" },
        {
          icon: GrServices,
          label: "Services",
          link: "#",
          additionalItem: [
            { label: "Service List", link: "/dashboard/admin/services" },
            { label: "Add Service", link: "/dashboard/admin/services/create" },
          ],
        },

        {
          icon: FaClipboardCheck,
          label: "Portfolio",
          link: "#",
          additionalItem: [
            { label: "Portfolio List", link: "/dashboard/admin/albums" },
            { label: "Add Portfolio", link: "/dashboard/admin/albums/create" },
          ],
        },
      ],
    },

    {
      title: "CMS",
      items: [
        {
          icon: FaClipboardCheck,
          label: "Pages",
          link: "#",
          additionalItem: [
            { label: "Pages List", link: "/dashboard/admin/pages/pagelist" },
            { label: "Add Page", link: "/dashboard/admin/pages/addpage" },
            { label: "Logs", link: "/dashboard/admin/pages/log" },
          ],
        },

        {
          icon: FaClipboardCheck,
          label: "Blogs",
          link: "#",
          additionalItem: [
            { label: "Category List", link: "/dashboard/admin/blogs/categoryList" },
            { label: "Listing", link: "#" },
            { label: "Add New", link: "#" },
          ],
        },

        { icon: FaUsers, label: "Testimonials", link: "#" },

        {
          icon: GrServices,
          label: "Forms",
          link: "#",
          additionalItem: [
            { label: "Form List", link: "#" },
            { label: "Add Form", link: "#" },
          ],
        },
      ],
    },
    {
      title: "SEO",
      items: [
        {
          icon: LuBraces,
          label: "Schema",
          link: "schema",
          additionalItem: [
            { label: "Schema List", link: "#" },
            { label: "Add Schema", link: "#" },
          ],
        },

        {
          icon: FaHashtag,
          label: "Seo Meta",
          link: "#",
          additionalItem: [
            { label: "SEO List", link: "#" },
            { label: "Add SEO Mata", link: "#" },
          ],
        },
        {
          icon: ImArrowRight,
          label: "URL Redirection",
          link: "#",
          additionalItem: [
            { label: "Redirection List", link: "#" },
            { label: "Add URL", link: "#" },
          ],
        },
        {
          icon: FaUserFriends,
          label: "User Management",
          link: "#",
          additionalItem: [
            { label: "Users", link: "#" },
            { label: "Groups", link: "#" },
          ],
        },
        { icon: IoMdSettings, label: "Settings", link: "#" },
        { icon: FaUserFriends, label: "Feedback", link: "/dashboard/admin/feedbacks" },
      ],
    },
    {
      title: "Careers/Recruitment",
      items: [
        {
          icon: FaUserFriends,
          label: "Jobs",
          link: "#",
          additionalItem: [
            { label: "Job List", link: "/dashboard/admin/career/jobs" },
            { label: "Add Jobs", link: "/dashboard/admin/career/jobs/create" },
            { label: "Skills", link: "/dashboard/admin/career/skill" },
            { label: "Department", link: "/dashboard/admin/career/departments" },
            { label: "Question", link: "/dashboard/admin/career/questions" }
          ]
        },
        {
          icon: FaUserFriends,
          label: "Job Applications",
          link: "/dashboard/admin/career/jobapplications"
        },
        {
          icon: FaCalendarDay,
          label: "Interview Schedules",
          link: "/dashboard/admin/career/interview-schedule"
        },
        {
          icon: FaUserFriends,
          label: "Candidate Database",
          link: "#"
        }
      ]
    },
    {
      title: "Additionals",
      items: [
        {
          icon: MdMoveToInbox,
          label: "Inbox",
          link: "#",
          additionalItem: [
            { label: "Contact", link: "#" },
            { label: "Subscribe", link: "#" },
          ],
        },
        {
          icon: FaEnvelopeOpen,
          label: "Form",
          link: "#",
          additionalItem: [
            { label: "Packages", link: "#" },
            { label: "Contact Us", link: "#" },
            { label: "Service Form", link: "#" },
            { label: "Deleted Form", link: "#" },
          ],
        },
        { icon: RiQuestionnaireLine, label: "Menu", link: "#" },
        { icon: MdOutlineApps, label: "FAQ", link: "/dashboard/admin/faqs" },
        { icon: GrServices, label: "Footer", link: "#" },
      ],
    },
  ]
}

const AppSidebar = ({ ...props }) => {
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <NavUser user={data.user} /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
};

export default AppSidebar;
