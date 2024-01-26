function KanbasNavigation() {
  const links = [
    {
      name: "Account",
      url: "/Kanbas/Account/Profile/screen.html",
    },
    {
      name: "Dashboard",
      url: "#",
    },
    {
      name: "Courses",
      url: "/Kanbas/Courses/Home/screen.html",
    },
    {
      name: "Calendar",
      url: "#",
    },
    {
      name: "Inbox",
      url: "#",
    },
    {
      name: "History",
      url: "#",
    },
    {
      name: "Studio",
      url: "#",
    },
    {
      name: "Commons",
      url: "#",
    },
    {
      name: "Help",
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
