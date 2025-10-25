import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#0A0B0F]/60 to-[#0A0B0F] pointer-events-none" />

      <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-yellow-400/20 flex items-center justify-center ring-1 ring-yellow-400/40">
            <Rocket className="h-5 w-5 text-yellow-400" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Karmic</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-md text-sm text-white/80 hover:text-white transition">Sign in</button>
          <button className="px-4 py-2 rounded-md text-sm bg-yellow-400 text-black font-medium hover:brightness-95 transition">
            Start free trial
          </button>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-[calc(92vh-80px)] flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
            Live insights for ethical Reddit growth
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
            Grow real Reddit reputation with data‑driven posting
          </h1>
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl">
            Karmic helps you plan, analyze, and optimize your Reddit activity—so you earn authentic karma through better timing, smarter topics, and community‑first engagement.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-yellow-400 text-black font-medium hover:brightness-95 transition">
              Get started free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/10 bg-white/5 text-white hover:bg-white/10 transition">
              See how it works
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-white/70">
            <div>
              <div className="text-white font-semibold">+38%</div>
              <div>Avg. post engagement</div>
            </div>
            <div>
              <div className="text-white font-semibold">12,000+</div>
              <div>Communities analyzed</div>
            </div>
            <div>
              <div className="text-white font-semibold">Auto</div>
              <div>Best‑time scheduling</div>
            </div>
            <div>
              <div className="text-white font-semibold">Zero bots</div>
              <div>Guideline‑aligned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
