export default function About() {
  return (
    <section id="about" className="p-10 bg-gray-900 text-white">

      <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">

        <p className="text-gray-300 leading-7 mb-6">
          I am a Backend Developer with 3+ years of experience specializing in
          building scalable web applications using .NET Core and SQL Server.
          I have strong expertise in designing RESTful APIs, implementing
          secure authentication mechanisms, and following clean architecture
          principles in real-world applications.
        </p>

        <p className="text-gray-300 leading-7 mb-6">
          I have worked extensively with Three-Tier Architecture, API integration,
          and database optimization. I enjoy solving complex problems, writing
          efficient code, and continuously improving system performance.
        </p>

        <p className="text-gray-300 leading-7 mb-6">
          On the frontend side, I have hands-on experience with React.js,
          allowing me to collaborate effectively in full-stack development.
          I also have working knowledge of Git, GitHub, and Azure DevOps for
          version control and CI/CD workflows.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm text-gray-400">

          <div>
            <p><span className="text-blue-400">✔</span> Backend Development</p>
            <p><span className="text-blue-400">✔</span> API Design & Integration</p>
            <p><span className="text-blue-400">✔</span> Database Design</p>
          </div>

          <div>
            <p><span className="text-blue-400">✔</span> Authentication (JWT)</p>
            <p><span className="text-blue-400">✔</span> Clean Architecture</p>
            <p><span className="text-blue-400">✔</span> Team Collaboration</p>
          </div>

        </div>

      </div>

    </section>
  );
}