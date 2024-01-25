function CourseNavigation(location) {
  const links = [
    {
      name: "Home",
      url: "/Kanbas/Courses/Home/screen.html",
    },
    {
      name: "Modules",
      url: "/Kanbas/Courses/Modules/screen.html",
    },
    {
      name: "Piazza",
      url: "#",
    },
    {
      name: "Grades",
      url: "/Kanbas/Courses/Grades/screen.html",
    },
    {
      name: "Assignments",
      url: "/Kanbas/Courses/Assignments/screen.html",
    },
  ];

  return `
    <ul>
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
