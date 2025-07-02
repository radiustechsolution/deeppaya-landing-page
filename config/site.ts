export type SiteConfig = typeof siteConfig;
export const siteConfig = {
  name: "DeepPaya",
  description: "Make Your Payment Faster And Easier",
  supportEmail: "support@deeppaya.com",
  baseUrl: "https://deeppaya.com",
  agentsEmail: "agents@deeppaya.com",
  officeAdress: "143 Aka Etinan Road, uyo, Uyo, Akwa Ibom, Nigeria",
  adminPhone: "+234 814 131 4105",
  developerApi: "https://documenter.getpostman.com/view/46373164/2sB34Zs5Le",
  navItems: [
    // {
    //   label: "Home",
    //   href: "/",
    // },
    // {
    //   label: "About",
    //   href: "/about",
    // },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
    {
      label: "Agent Banking",
      href: "/pos",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },

  siteColors: {
    primary: "#8059fa",
    dark: "#11172b",
  },

  appapiUrl: "https://appapi.deeppaya.com/v1",

  siteLinks: {
    privacy: "/privacy-policy",
    terms: "/terms-conditions",
  },
};
