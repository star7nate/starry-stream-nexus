
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/4f557a03-47e6-462c-88e1-b192c9d1fa57.png" 
                alt="STARNYX" 
                className="h-6 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Premium streaming experience with over 5,000 titles.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Content</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Movies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TV Shows</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentaries</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Originals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2025 STARNYX. All rights reserved. Streaming luxury redefined. ✨
        </div>
      </div>
    </footer>
  );
};

export default Footer;
