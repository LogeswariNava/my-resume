import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6"
    >

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <p className="text-blue-400 tracking-widest mb-2">
          Backend Developer
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-400">Logeswari</span>
        </h1>

        <p className="mt-4 text-gray-400 max-w-md">
          I build scalable backend systems using .NET Core, design RESTful APIs,
          and develop efficient database-driven applications.
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">

          <a
            href="#projects"
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
          href="/resume.pdf"
          download="Logeswari_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Download Resume
        </a>

        </div>

        {/* HIGHLIGHTS */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start text-sm text-gray-400">
          <span className="bg-gray-800 px-3 py-1 rounded-full">.NET Core</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">Web API</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">SQL Server</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">React</span>
        </div>

      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-2 rounded-full bg-blue-500 shadow-lg">
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-64 h-64 object-cover rounded-full border-4 border-white"
          />
        </div>
      </motion.div>

    </section>
  );
}