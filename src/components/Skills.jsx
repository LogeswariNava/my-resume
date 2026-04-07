export default function Skills() {

  const skillsData = [
    {
      category: "Backend",
      items: [".NET Core", "ASP.NET Core Web API", "C#", "RESTful APIs"]
    },
    {
      category: "Database",
      items: ["SQL Server"]
    },
    {
      category: "Frontend",
      items: ["React.js", "HTML", "CSS"]
    },
    {
      category: "Architecture",
      items: ["Three Tier Architecture"]
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "GitHub", "Azure DevOps"]
    },
    {
      category: "Other",
      items: ["Node.js", "JWT Authentication"]
    }
  ];

  return (
    <section id="skills" className="p-10 bg-gray-900 text-white">

      <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
        My Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {skillsData.map((group, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition">

            <h3 className="text-xl font-semibold text-blue-300 mb-4 border-b border-gray-600 pb-2">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}