export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-5xl font-bold mb-10 text-center text-blue-600">About Us</h1>

      <div className="mb-10 text-lg leading-relaxed">
        <p className="mb-4">
          Welcome to <span className="font-semibold text-black">World Blog</span> — where code meets creativity, and ideas find a voice.
        </p>
        <p className="mb-4">
          We’re not just a blog. We’re a community of developers, writers, and curious minds building a space for meaningful conversations, deep learning, and creative problem-solving.
        </p>
        <p className="mb-4">
          Whether you're just starting out or already shipping products, our content is crafted to inspire, teach, and grow with you. From hands-on tutorials and real-life coding stories to career tips and tech insights — we’re here to fuel your passion.
        </p>
        <p>
          Every article is written with love, experience, and a deep respect for our readers. We believe in sharing what we know, learning out loud, and lifting others as we grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <img
          src="https://source.unsplash.com/featured/?team,tech"
          alt="Team working"
          className="rounded-xl shadow-md object-cover h-64 w-full"
        />
        <img
          src="https://source.unsplash.com/featured/?coding,developer"
          alt="Coding session"
          className="rounded-xl shadow-md object-cover h-64 w-full"
        />
        <img
          src="https://source.unsplash.com/featured/?workspace,laptop"
          alt="Workspace"
          className="rounded-xl shadow-md object-cover h-64 w-full"
        />
      </div>

      <p className="text-lg leading-relaxed text-center">
        Thanks for being here. Let’s build something amazing — together.
      </p>
    </div>
  );
}
