"use client";

export default function Contacts() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>Brief description about your company.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <form className="max-w-lg mx-auto">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
