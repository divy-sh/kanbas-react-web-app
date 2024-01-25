function AccountNavigation() {
  const links = [
    {
      name: "Notifications",
      url: "/Kanbas/Account/Notififactions/screen.html",
    },
    {
      name: "Profile",
      url: "/Kanbas/Account/Profile/screen.html",
    },
    {
      name: "Files",
      url: "/Kanbas/Account/Files/screen.html",
    },
    {
      name: "Settings",
      url: "/Kanbas/Account/Settings/screen.html",
    },
    {
      name: "ePortfolios",
      url: "/Kanbas/Account/ePortfolios/screen.html",
    },
    {
      name: "Shared Content",
      url: "/Kanbas/Account/SharedContent/screen.html",
    },
    {
      name: "The Hub",
      url: "/Kanbas/Account/TheHub/screen.html",
    },
    {
      name: "Qwickly Course Tools",
      url: "/Kanbas/Account/Qwickly/screen.html",
    },
    {
      name: "Global Announcements",
      url: "/Kanbas/Account/Announcements/screen.html",
    },
  ];
  return `
        <ul">
        ${links
          .map((link) => {
            return `
            <li><a href="${link.url}">${link.name}</a></li>
            `;
          })
          .join("")}
      </ul>
        `;
}
