import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6 md:px-20 bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-blue-500 blur-3xl opacity-20 rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500 blur-3xl opacity-20 rounded-full bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center"
      >
        <h2 className="text-4xl font-bold text-blue-400">
          Let’s Connect 🤝
        </h2>

        <p className="mt-4 text-gray-400">
          Ready to work together? Feel free to reach out anytime.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 hover:shadow-blue-500 transition duration-300">
            <FaEnvelope className="text-3xl text-blue-400 mx-auto"/>
            <p className="mt-3">logurtl21129606@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 hover:shadow-blue-500 transition duration-300">
            <FaPhone className="text-3xl text-green-400 mx-auto"/>
            <p className="mt-3">+91 6369393110</p>
          </div>

          {/* LinkedIn */}
          <a href="#" target="_blank"
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 hover:bg-blue-600 transition duration-300">
            <FaLinkedin className="text-3xl mx-auto"/>
            <p className="mt-3">LinkedIn Profile</p>
          </a>

          {/* GitHub */}
          <a href="https://github.com/logumani2112" target="_blank"
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 hover:bg-gray-800 transition duration-300">
            <FaGithub className="text-3xl mx-auto"/>
            <p className="mt-3">GitHub Repositories</p>
          </a>

        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a href="mailto:logurtl21129606@gmail.com"
            className="px-8 py-3 bg-blue-500 rounded-xl shadow-lg hover:scale-105 hover:bg-blue-600 transition">
            Send Email 🚀
          </a>
        </div>

      </motion.div>

    </section>
  );
}