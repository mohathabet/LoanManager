import {
  IconLayoutDashboard,
  IconChartLine,
  IconDatabase,
  IconUsers,
  IconMapPin,
  IconFileExport,
  IconBrandPython,
  IconListDetails,
  IconClipboardList,
  IconClipboardCheck,
  IconClock,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Overview",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard",
  },
  {
    id: uniqueId(),
    title: "Key Metrics",
    icon: IconChartLine,
    href: "/overview/key-metrics",
  },
  {
    id: uniqueId(),
    title: "Visualizations",
    icon: IconChartLine,
    href: "/overview/visualizations",
  },

  {
    navlabel: true,
    subheader: "Predictive Analytics",
  },
  {
    id: uniqueId(),
    title: "Loan Default Prediction",
    icon: IconDatabase,
    href: "/predictive-analytics/loan-default",
  },
  {
    id: uniqueId(),
    title: "Client Risk Analysis",
    icon: IconUsers,
    href: "/predictive-analytics/client-risk",
  },

  {
    navlabel: true,
    subheader: "Loan Performance",
  },
  {
    id: uniqueId(),
    title: "Repayment Trends",
    icon: IconChartLine,
    href: "/performance/repayment-trends",
  },
  {
    id: uniqueId(),
    title: "Loan Insights",
    icon: IconMapPin,
    href: "/performance/loan-insights",
  },

  {
    navlabel: true,
    subheader: "Client Segmentation",
  },
  {
    id: uniqueId(),
    title: "Income & Loan Clusters",
    icon: IconListDetails,
    href: "/segmentation/income-loan-clusters",
  },

  {
    navlabel: true,
    subheader: "Loan Management",
  },
  {
    id: uniqueId(),
    title: "Loan Application List",
    icon: IconClipboardList,
    href: "/loan-management/application-list",
  },
  {
    id: uniqueId(),
    title: "Loan Approval Workflow",
    icon: IconClipboardCheck,
    href: "/loan-management/approval-workflow",
  },
  {
    id: uniqueId(),
    title: "Loan Repayment Tracker",
    icon: IconClock,
    href: "/loan-management/repayment-tracker",
  },

  {
    navlabel: true,
    subheader: "Data Visualizations",
  },
  {
    id: uniqueId(),
    title: "Application Funnel",
    icon: IconChartLine,
    href: "/visualizations/application-funnel",
  },
  {
    id: uniqueId(),
    title: "Payments Overview",
    icon: IconMapPin,
    href: "/visualizations/payments-overview",
  },

  {
    navlabel: true,
    subheader: "Insights",
  },
  {
    id: uniqueId(),
    title: "Model Performance",
    icon: IconBrandPython,
    href: "/insights/model-performance",
  },
  {
    id: uniqueId(),
    title: "Feature Importance",
    icon: IconDatabase,
    href: "/insights/feature-importance",
  },

  {
    navlabel: true,
    subheader: "Reports & Export",
  },
  {
    id: uniqueId(),
    title: "Generate Reports",
    icon: IconFileExport,
    href: "/reports/generate",
  },
  {
    id: uniqueId(),
    title: "Export Data",
    icon: IconFileExport,
    href: "/reports/export",
  },
];

export default Menuitems;