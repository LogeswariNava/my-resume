export default function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-5 bg-black sticky top-0 z-50">
      <h1 className="text-blue-400 font-bold">Logeswari</h1>

      <div className="flex gap-6">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}