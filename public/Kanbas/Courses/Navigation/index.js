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
      name: "Zoom Meetings",
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
      name: "Panoppto Video",
      url: "#",
    },
    {
      name: "Discussions",
      url: "#",
    },
    {
      name: "Announcements",
      url: "#",
    },
    {
      name: "Pages",
      url: "#",
    },
    {
      name: "Files",
      url: "#",
    },
    {
      name: "Rubrics",
      url: "#",
    },
    {
      name: "Outcomes",
      url: "#",
    },
    {
      name: "Collaboration",
      url: "#",
    },
    {
      name: "Syllabus",
      url: "#",
    },
    {
      name: "Settings",
      url: "/Kanbas/Courses/Settings/CourseDetails/screen.html",
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
