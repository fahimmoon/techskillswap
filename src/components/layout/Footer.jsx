export default function Footer() {
  const footerLinks = {
    'Platform': ['Find Mentors', 'Become a Mentor', 'How it Works'],
    'Resources': ['Blog', 'Guides', 'FAQ'],
    'Company': ['About', 'Careers', 'Contact']
  };

  return (
    <footer className="bg-tech-dark-900 border-t border-tech-dark-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h1 className="text-xl font-heading font-bold text-tech-red-500 mb-4">
              TechSkillSwap
            </h1>
            <p className="text-tech-gray-100/70 text-sm">
              Peer-to-peer learning platform for developers
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-tech-gray-100/70 hover:text-tech-red-500 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-2">
            <h3 className="font-heading font-semibold mb-4">Stay Updated</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-tech-dark-800 px-4 py-2 rounded-lg flex-grow"
              />
              <button className="bg-tech-red-500 px-4 py-2 rounded-lg hover:shadow-glow transition-shadow">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-8 border-t border-tech-dark-800">
          <p className="text-tech-gray-100/60 text-sm">
            © {new Date().getFullYear()} TechSkillSwap. All rights reserved.
          </p>
          <div className="flex gap-4">
            {['github', 'linkedin', 'twitter'].map((social) => (
              <a
                key={social}
                href={`#${social}`}
                className="text-tech-gray-100/60 hover:text-tech-red-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Add social icon paths here */}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
