import React from 'react';
import { Rocket, ArrowRight, Shield, TrendingUp, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background: handcrafted grid + radial highlight */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.08]" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <radialGradient id="glow" cx="70%" cy="10%" r="80%">
                <stop offset="0%" stopColor="#FACC15" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#FACC15" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#glow)" />
          </svg>
        </div>
        <div className="pointer-events-none absolute -top-28 -right-24 h-[32rem] w-[32rem] rounded-full bg-yellow-400/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-10rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-yellow-400/10 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-yellow-400/15 flex items-center justify-center ring-1 ring-yellow-400/30">
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
          <a href="#pricing" className="px-4 py-2 rounded-md text-sm bg-yellow-400 text-black font-medium hover:brightness-95 transition">
            Start free trial
          </a>
        </div>
      </header>

      {/* Unique handcrafted hero */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: copy and CTAs */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              Ethical Reddit growth platform
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
              Grow Reddit reputation with craft, not tricks
            </h1>
            <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl">
              Karmic helps you post smarter: when to publish, what to write, and how to contribute—so karma follows naturally.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-yellow-400 text-black font-medium hover:brightness-95 transition">
                Get started free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/10 bg-white/5 text-white hover:bg-white/10 transition">
                Explore features
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 text-sm">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-yellow-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">+38% avg</div>
                  <div className="text-white/60">Post engagement</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-yellow-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Best‑time</div>
                  <div className="text-white/60">Auto scheduling</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-yellow-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Policy‑safe</div>
                  <div className="text-white/60">No fake votes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: bespoke UI mockup (no stock/AI assets) */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-yellow-400/10 to-transparent blur-xl" aria-hidden />
            <div className="relative rounded-3xl border border-white/10 bg-[#0D0F15]/80 backdrop-blur p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
              {/* Top bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70"></span>
                </div>
                <div className="text-xs text-white/60">/r/YourCommunity • Insights</div>
              </div>

              {/* Content grid */}
              <div className="mt-6 grid grid-cols-12 gap-4">
                {/* Left column: mini chart card */}
                <div className="col-span-12 md:col-span-7 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-white/70">7‑day engagement</div>
                    <div className="text-xs text-emerald-400">+14.2%</div>
                  </div>
                  {/* Bars */}
                  <div className="mt-4 flex items-end gap-2 h-28">
                    {[28, 42, 56, 33, 72, 60, 84].map((h, i) => (
                      <div key={i} className="flex-1 flex items-end">
                        <div
                          className="w-full rounded-t-md bg-gradient-to-t from-yellow-400/50 to-yellow-300/80"
                          style={{ height: h }}
                        />
                      </div>
                    ))}
                  </div>
                  {/* Line indicator */}
                  <div className="mt-3 h-1 w-full rounded bg-gradient-to-r from-yellow-400/60 via-yellow-300/80 to-yellow-400/40" />
                </div>

                {/* Right column: heatmap + checklist */}
                <div className="col-span-12 md:col-span-5 grid gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-white/70">Best time to post</div>
                    <div className="mt-3 grid grid-cols-7 gap-1">
                      {[...Array(7 * 4)].map((_, i) => {
                        const intensity = [0.15, 0.25, 0.4, 0.7][i % 4];
                        return (
                          <div
                            key={i}
                            className="h-4 rounded"
                            style={{ backgroundColor: `rgba(250, 204, 21, ${intensity})` }}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-white/70">Post quality checks</div>
                    <ul className="mt-3 space-y-2 text-xs text-white/80">
                      <li className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> Topic helpfulness
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> Tone & length
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" /> Link ratio
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bottom: queue preview */}
                <div className="col-span-12 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-white/70">Queue</div>
                    <div className="text-white/50">This week</div>
                  </div>
                  <div className="mt-3 grid grid-cols-7 gap-2 text-xs">
                    {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d, i) => (
                      <div key={d} className="rounded-lg border border-white/10 bg-black/30 p-2">
                        <div className="text-white/60">{d}</div>
                        <div className="mt-1 h-1.5 rounded bg-yellow-400/60" style={{ width: `${20 + i * 10}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
