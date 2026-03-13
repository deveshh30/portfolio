import { useState } from "react";

const Contact = () => {
    const[formData , setFormData] = useState({
        name : '',
        email : '',
        message : '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Later connect to backend API
    setSubmitted(true);
    
    // Reset form after 2 seconds (demo)
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);

}


return (
    <section id="contact" className="py-20 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-[#004643]">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-300">Get in touch</h3>
              <p className="text-gray-400">
                I'm currently open to frontend / full-stack internship opportunities 
                and interesting collaborations.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500">EMAIL</p>
                <a href="mailto:devesh30gupta@gmail.com" className="text-white hover:text-[#004643] transition-colors">
                  devesh30gupta@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">LOCATION</p>
                <p className="text-white">Delhi, India</p>
              </div>
            </div>

            {/* Social links (optional) */}
            <div>
              <p className="text-sm text-gray-500 mb-3">FIND ME ON</p>
              <div className="flex gap-4">
                <a href="https://github.com/deveshh30" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#004643] transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/devesh-gupta30/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#004643] transition-colors">LinkedIn</a>
                <a href="https://x.com/deveshhh_30" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#004643] transition-colors">X</a>
                <a href="https://leetcode.com/u/DEVESHHH_30/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#004643] transition-colors">LeetCode</a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 focus:outline-none focus:border-[#004643] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 focus:outline-none focus:border-[#004643] transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 focus:outline-none focus:border-[#004643] transition-colors resize-y"
                  placeholder="Hey Devesh, I have an internship opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#004643] hover:bg-[#005e5e] text-white font-medium py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
              >
                {submitted ? "Message Sent ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
