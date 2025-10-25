import React from 'react';
import { CheckCircle } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    features: [
      'Connect 1 Reddit account',
      '3 scheduled posts/week',
      'Best‑time suggestions',
      'Basic subreddit insights'
    ],
    cta: 'Start free'
  },
  {
    name: 'Creator',
    price: '$19',
    period: '/mo',
    featured: true,
    features: [
      'Connect 3 accounts',
      'Unlimited scheduling',
      'Topic prompts + tone checker',
      'Post performance breakdown',
      'Priority support'
    ],
    cta: 'Upgrade'
  },
  {
    name: 'Team',
    price: '$49',
    period: '/mo',
    features: [
      'Up to 10 accounts',
      'Shared calendar & approvals',
      'Workspace analytics',
      'Role permissions',
      'Compliance audit logs'
    ],
    cta: 'Contact sales'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute right-[-10%] top-[-10%] w-[40rem] h-[40rem] rounded-full bg-yellow-400/10 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free, upgrade when you need more power. No contracts. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-6 flex flex-col ${tier.featured ? 'border-yellow-400/40 bg-gradient-to-b from-yellow-400/10 to-white/5' : 'border-white/10 bg-white/5'}`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold">{tier.price}</span>
                  <span className="text-white/60">{tier.period}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-white/80">
                      <CheckCircle className="h-4 w-4 text-yellow-400 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`mt-8 w-full px-4 py-3 rounded-md font-medium transition ${tier.featured ? 'bg-yellow-400 text-black hover:brightness-95' : 'bg-white/10 text-white hover:bg-white/15'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/60">Karmic supports ethical Reddit use only. We do not provide fake engagement or violate Reddit policies.</p>
      </div>
    </section>
  );
}
