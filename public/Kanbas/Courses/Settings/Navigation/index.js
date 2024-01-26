function SettingsNavigation() {
  const links = [
    {
      name: "Course Details",
      url: "/Kanbas/Courses/Settings/CourseDetails/screen.html",
    },
    {
      name: "Sections",
      url: "#",
    },
    {
      name: "Course Navigation",
      url: "/Kanbas/Courses/Settings/CourseNavigation/screen.html",
    },
    {
      name: "Apps",
      url: "#",
    },
    {
      name: "Feature Options",
      url: "#",
    },
    {
      name: "Integrations",
      url: "#",
    },
  ];
  return `
        <td>
        ${links
          .map((link) => {
            return `
              <a href="${link.url}">${link.name}</a>
            `;
          })
          .join("")}
      </td>
        `;
}
