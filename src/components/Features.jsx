import React from 'react';
import { BarChart3, Clock, Shield, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Subreddit intelligence',
    desc: 'Topic suggestions and sentiment cues tailored to each community, powered by historical performance and live trends.'
  },
  {
    icon: Clock,
    title: 'Smart scheduling',
    desc: 'Automated best‑time suggestions for your target subreddits with queue management and conflict detection.'
  },
  {
    icon: CheckCircle,
    title: 'Quality guardrails',
    desc: 'Tone checker and link ratio monitor help you keep posts genuine, helpful, and aligned with community norms.'
  },
  {
    icon: Shield,
    title: 'Compliance first',
    desc: 'No fake votes, no bots. Karmic focuses on organic visibility and adheres to Reddit rules and community guidelines.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-[#0A0B0F] to-[#0B0C12]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-yellow-400/5 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Designed for ethical growth</h2>
          <p className="mt-3 text-white/70">Tools that help you contribute more effectively and earn reputation the right way.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="h-10 w-10 rounded-md bg-yellow-400/15 ring-1 ring-yellow-400/30 flex items-center justify-center">
                <Icon className="h-5 w-5 text-yellow-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.04] p-8">
            <h3 className="text-2xl font-semibold">How it works</h3>
            <ul className="mt-6 space-y-4 text-white/80 text-sm">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                Connect your Reddit account securely and choose your target communities.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                Get topic prompts and best‑time suggestions based on recent engagement trends.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                Schedule posts, track results, and iterate with actionable insights—no spam, no shortcuts.
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">What Karmic avoids</h3>
            <p className="mt-3 text-sm text-white/70">We do not automate voting or use fake engagement. Karmic focuses on organic strategies that respect platform policies.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/70">
              <div className="rounded-lg bg-black/30 px-3 py-2 border border-white/10">No vote rings</div>
              <div className="rounded-lg bg-black/30 px-3 py-2 border border-white/10">No bots</div>
              <div className="rounded-lg bg-black/30 px-3 py-2 border border-white/10">No spam</div>
              <div className="rounded-lg bg-black/30 px-3 py-2 border border-white/10">No gray-hat tricks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
