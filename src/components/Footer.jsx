import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#0A0B0F]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-lg font-semibold">Karmic</div>
            <p className="mt-2 text-sm text-white/60 max-w-md">Plan smarter posts, grow real reputation, and respect every community you join.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Karmic. All rights reserved.</div>
      </div>
    </footer>
  );
}
