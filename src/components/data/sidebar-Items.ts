import {
  LayoutDashboard,
  BookOpen,
  Video,
  MessageCircle,
  Map,
  Trophy,
  Timer,
  Library,
  Zap,
  BarChart3,
  Medal,
  Calendar,
  PenLine,
  FileText,
  Mic2,
  User,
  Settings,
  Home,
  LucideIcon,
  HelpCircle,
} from "lucide-react";

export interface NavItem {
  title: string;
  path: string;
  icon: LucideIcon;
  isNew?: boolean;
}

export interface NavGroup {
  groupLabel: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    groupLabel: "MAIN",
    items: [
      { title: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      { title: "Subjects", path: "/dashboard/subjects", icon: BookOpen },
      {
        title: "Video Library",
        path: "/dashboard/video-learning",
        icon: Video,
        isNew: true,
      },
      { title: "AI Chat", path: "/dashboard/ai-chat", icon: MessageCircle },
      { title: "Roadmap", path: "/dashboard/roadmap", icon: Map },
      { title: "Quiz", path: "/dashboard/quiz", icon: Trophy },
      {
        title: "Focus Timer",
        path: "/dashboard/focus-timer",
        icon: Timer,
        isNew: true,
      },
      {
        title: "Flashcards",
        path: "/dashboard/flashcards",
        icon: Library,
        isNew: true,
      },
      { title: "Daily Challenge", path: "/dashboard/challenge", icon: Zap },
    ],
  },
  // {
  //   groupLabel: "AI TOOLS",
  //   items: [
  //     { title: "AI Chat", path: "/dashboard/ai-chat", icon: MessageCircle },
  //     { title: "Roadmap", path: "/dashboard/roadmap", icon: Map },
  //     { title: "Quiz", path: "/dashboard/quiz", icon: Trophy },
  //     {
  //       title: "Focus Timer",
  //       path: "/dashboard/focus-timer",
  //       icon: Timer,
  //       isNew: true,
  //     },
  //     {
  //       title: "Flashcards",
  //       path: "/dashboard/flashcards",
  //       icon: Library,
  //       isNew: true,
  //     },
  //     { title: "Daily Challenge", path: "/dashboard/challenge", icon: Zap },
  //   ],
  // },
  {
    groupLabel: "ANALYTICS",
    items: [
      { title: "Insights", path: "/dashboard/insights", icon: BarChart3 },
      { title: "Leaderboard", path: "/dashboard/leaderboard", icon: Medal },
      { title: "Study Planner", path: "/dashboard/planner", icon: Calendar },
      { title: "Notes", path: "/dashboard/notes", icon: PenLine },
      { title: "Course Detail", path: "/dashboard/course", icon: FileText },
      { title: "Interview Bot", path: "/dashboard/interview", icon: Mic2 },
    ],
  },
  {
    groupLabel: "ACCOUNT",
    items: [
      { title: "Profile", path: "/account/profile", icon: User },
      { title: "Settings", path: "/dashboard/settings", icon: Settings },
      { title: "Help", path: "/", icon: HelpCircle },
      { title: "Home", path: "/", icon: Home },
    ],
  },
];
