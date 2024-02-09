function KanbasNavigation(name) {
  const links = [
    {
      name: " ",
      url: "http://northeastern.edu",
      icon: "fa-solid fa-n",
    },
    {
      name: "Account",
      url: "/Kanbas/Account/Profile/screen.html",
      icon: "fa-regular fa-user",
    },
    {
      name: "Dashboard",
      url: "/Kanbas/Dashboard/screen.html",
      icon: "fa-solid fa-tachometer",
    },
    {
      name: "Courses",
      url: "/Kanbas/Courses/Home/screen.html",
      icon: "fa-solid fa-book",
    },
    {
      name: "Calendar",
      url: "#",
      icon: "fa-solid fa-calendar-days",
    },
    {
      name: "Inbox",
      url: "#",
      icon: "fa-solid fa-envelope-open-text",
    },
    {
      name: "History",
      url: "#",
      icon: "fa-regular fa-clock",
    },
    {
      name: "Studio",
      url: "#",
      icon: "fa-solid fa-computer",
    },
    {
      name: "Commons",
      url: "#",
      icon: "fa-brands fa-creative-commons-sa",
    },
    {
      name: "Help",
      url: "#",
      icon: "fa-regular fa-circle-question",
    },
  ];
  return `
        <ul class="wd-kanbas-navigation">
        ${links
          .map((link) => {
            const isActive = link.name === name ? 'wd-active' : '';
            return `
            <li class="${isActive}"><a href="${link.url}"><i class="${link.icon}"></i><br>${link.name}</a></li>
            `;
          })
          .join("")}
      </ul>
        `;
}
function KanbasNavigationMin(name) {
  const links = [
    {
      name: " ",
      url: "http://northeastern.edu",
      icon: "fa-solid fa-n",
    },
    {
      name: "Account",
      url: "/Kanbas/Account/Profile/screen.html",
      icon: "fa-regular fa-user",
    },
    {
      name: "Dashboard",
      url: "/Kanbas/Dashboard/screen.html",
      icon: "fa-solid fa-tachometer",
    },
    {
      name: "Courses",
      url: "/Kanbas/Courses/Home/screen.html",
      icon: "fa-solid fa-book",
    },
    {
      name: "Calendar",
      url: "#",
      icon: "fa-solid fa-calendar-days",
    },
    {
      name: "Inbox",
      url: "#",
      icon: "fa-solid fa-envelope-open-text",
    },
    {
      name: "History",
      url: "#",
      icon: "fa-regular fa-clock",
    },
    {
      name: "Studio",
      url: "#",
      icon: "fa-solid fa-computer",
    },
    {
      name: "Commons",
      url: "#",
      icon: "fa-brands fa-creative-commons-sa",
    },
    {
      name: "Help",
      url: "#",
      icon: "fa-regular fa-circle-question",
    },
  ];
  return `
        <ul class="wd-navigation">
        ${links
          .map((link) => {
            const isActive = link.name === name ? 'wd-active' : '';
            return `
            <li class="${isActive}"><a href="${link.url}"><i class="${link.icon}"></i> ${link.name}</a></li>
            `;
          })
          .join("")}
      </ul>
        `;
}
