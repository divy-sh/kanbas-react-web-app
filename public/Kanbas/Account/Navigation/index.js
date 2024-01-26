function AccountNavigation() {
  const links = [
    {
      name: "Notifications",
      url: "#",
    },
    {
      name: "Profile",
      url: "/Kanbas/Account/Profile/screen.html",
    },
    {
      name: "Files",
      url: "#",
    },
    {
      name: "Settings",
      url: "#",
    },
    {
      name: "ePortfolios",
      url: "#",
    },
    {
      name: "Shared Content",
      url: "#",
    },
    {
      name: "The Hub",
      url: "#",
    },
    {
      name: "Qwickly Course Tools",
      url: "#",
    },
    {
      name: "Global Announcements",
      url: "#",
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
