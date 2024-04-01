function CourseNavigation(location) {
  const links = [
    {
      name: "Home",
      url: "/Kanbas/Courses/Home/screen.html",
    },
    {
      name: "Modules",
      url: "#",
    },
    {
      name: "Piazza",
      url: "#",
    },
    {
      name: "Zoom",
      url: "#",
    },
    {
      name: "Assignments",
      url: "/Kanbas/Courses/Assignments/screen.html",
    },
    {
      name: "Quizzes",
      url: "#",
    },
    {
      name: "Grades",
      url: "/Kanbas/Courses/Grades/screen.html",
    },
    {
      name: "People",
      url: "#",
    },
    {
      name: "Settings",
      url: "/Kanbas/Courses/Settings/CourseDetails/screen.html",
    },
  ];

  return `
    <ul class="wd-navigation">
        ${links
          .map((link) => {
            const isActive = link.name === location ? 'wd-active' : '';
            return `
                <li class="${isActive}"><a class="${isActive}" href="${link.url}">${link.name}</a></li>
                `;
          })
          .join("")}
    </ul>
    `;
}
