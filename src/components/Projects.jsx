import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  const projects = [
    {
      title: "Motor Insurance System",
      desc: "Secure backend APIs with JWT authentication and policy management.",
      tech: ".NET Core • SQL • JWT",
      type: "Backend",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      link: "https://github.com/logumani2112",
      demo: "#"
    },
    {
      title: "Mech Place Service",
      desc: "Mechanic booking platform with API integration.",
      tech: "Node.js • API • SQL",
      type: "API",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      link: "https://github.com/logumani2112",
      demo: "#"
    },
    {
      title: "Manam Matrimony",
      desc: "User matching system with secure backend and profile management.",
      tech: ".NET Core • SQL • API",
      type: "Web",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
      link: "https://github.com/logumani2112",
      demo: "#"
    },
    {
      title: "Hospital Management System",
      desc: "Patient records, appointments, and hospital workflow management.",
      tech: "ASP.NET • SQL",
      type: "Backend",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
      link: "https://github.com/logumani2112",
      demo: "#"
    },
    {
      title: "Job Portal Application",
      desc: "Resume upload, job search and recruiter management system.",
      tech: ".NET • Email • JWT",
      type: "Web",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      link: "https://github.com/logumani2112",
      demo: "#"
    },
    {
      title: "DevOps CI/CD Pipeline",
      desc: "Automated deployment using CI/CD pipelines and cloud integration.",
      tech: "Azure DevOps • CI/CD",
      type: "Tools",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      link: "https://github.com/logumani2112",
      demo: "#"
    },
    {
      title: "Auto Worker Service",
      desc: "Automated background worker service for scheduling and task execution.",
      tech: ".NET Worker Service • Background Jobs • Cron",
      type: "Backend",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      link: "https://github.com/logumani2112",
      demo: "#"
    },
    {
      title: "AngaAutomation Backend System",
      desc: "Backend automation system for handling background jobs, scheduled tasks, and workflow automation using scalable architecture.",
      tech: ".NET Worker Service • Background Jobs • Cron • APIs",
      type: "Backend",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      link: "https://github.com/logumani2112",
      demo: "#"
    }
  ];

  // FILTER + SEARCH
  const filtered = projects
    .filter(p => filter === "All" || p.type === filter)
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

  const visibleProjects = filtered.slice(0, visibleCount);

  return (
    <section className="py-20 px-6 md:px-20 bg-black text-white">

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-blue-400 text-center">
        Featured Projects 🚀
      </h2>

      {/* SEARCH */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 text-white w-64 outline-none"
        />
      </div>

      {/* FILTER */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        {["All", "Backend", "API", "Web", "Tools"].map(btn => (
          <button
            key={btn}
            onClick={() => {
              setFilter(btn);
              setVisibleCount(4);
            }}
            className={`px-4 py-2 rounded ${
              filter === btn ? "bg-blue-500" : "bg-gray-700"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">

        {visibleProjects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer bg-gray-900 p-3 rounded-xl shadow-lg"
            onClick={() => setSelected(p)}
          >

            <img
              src={p.image}
              className="rounded-xl w-full h-48 object-cover"
            />

            <div className="mt-3 text-center">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-400">{p.type}</p>
            </div>

          </motion.div>
        ))}

      </div>

      {/* LOAD MORE */}
      {visibleCount < filtered.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount(prev => prev + 3)}
            className="bg-blue-500 px-6 py-2 rounded"
          >
            Load More
          </button>
        </div>
      )}

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <div className="bg-gray-900 p-6 rounded-xl max-w-md text-center">

            <img src={selected.image} className="rounded mb-4" />

            <h3 className="text-xl font-bold">{selected.title}</h3>

            <p className="text-gray-400 mt-2">{selected.desc}</p>

            <p className="text-blue-400 mt-2 text-sm">{selected.tech}</p>

            <div className="mt-4 flex justify-center gap-4">

              <a
                href={selected.link}
                target="_blank"
                className="bg-blue-500 px-4 py-2 rounded"
              >
                GitHub
              </a>

              <a
                href={selected.demo}
                target="_blank"
                className="bg-green-500 px-4 py-2 rounded"
              >
                Live Demo
              </a>

            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-4 text-red-400"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </section>
  );
}