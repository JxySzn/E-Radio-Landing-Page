import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const plans = [
  {
    name: 'Free',
    price: '$0',
    frequency: '/forever',
    featuresLg: ['10,000+ stations', 'Standard quality', 'Sleep timer', '5 favorites'],
    featuresMd: ['10,000+ stations', 'Standard quality', 'Sleep timer'],
    featuresSm: ['10,000+ stations', 'Standard quality', 'Sleep timer'],
    buttonText: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$4.99',
    frequency: '/month',
    featuresLg: ['50,000+ stations', 'HD & Ultra quality', 'Unlimited favorites', 'No ads', 'Priority support'],
    featuresMd: ['50,000+ stations', 'HD Audio', 'No ads', 'Unlimited favorites'],
    featuresSm: ['50,000+ stations', 'HD Audio', 'No ads', 'Unlimited favorites'],
    buttonText: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Family',
    price: '$9.99',
    frequency: '/month',
    featuresLg: ['Everything in Pro', 'Up to 6 accounts', 'Family listening stats', 'Parental controls'],
    featuresMd: ['Everything in Pro', 'Up to 6 accounts', 'Parental controls'],
    featuresSm: ['Everything in Pro', 'Up to 6 accounts', 'Parental controls'],
    buttonText: 'Get Family Plan',
    popular: false,
  }
]

export default function Pricing() {
  return (
    <section className="py-24 md:py-32 bg-navy-deep">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[12px] font-bold text-crimson uppercase tracking-[0.3em] mb-4">
            <span className="hidden lg:inline">Simple Pricing</span>
            <span className="inline lg:hidden">Pricing</span>
          </p>
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-white tracking-tight mb-4 md:mb-6">
            <span className="hidden sm:inline">Start Free. Upgrade Anytime.</span>
            <span className="inline sm:hidden">Start Free</span>
          </h2>
          <p className="text-[14px] md:text-[18px] text-white/50 font-medium">
            <span className="hidden sm:inline">No hidden fees. Cancel whenever you want.</span>
            <span className="inline sm:hidden">Upgrade anytime. Cancel anytime.</span>
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <Card 
              key={i} 
              className={`relative bg-surface border-white/5 rounded-[28px] flex flex-col transition-all hover:bg-surface/90 hover:border-white/10 shadow-2xl ${plan.popular ? 'ring-1 ring-crimson/40 border-crimson/30' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-crimson px-5 py-1 rounded-full shadow-[0_4px_20px_rgba(233,69,96,0.3)] border border-white/10">
                    <span className="text-[11px] font-bold text-white uppercase tracking-[0.05em] whitespace-nowrap">
                      Popular
                    </span>
                  </div>
                </div>
              )}
              
              <CardHeader className="pt-10 px-8 pb-0 flex flex-col items-start bg-transparent border-0 ring-0 shadow-none">
                <span className="text-[14px] font-bold text-white/40 mb-3 uppercase tracking-wide">
                  {plan.name}
                  {plan.popular && <span className="inline-block ml-3 sm:hidden text-crimson">— Popular</span>}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-[36px] md:text-[40px] lg:text-[44px] font-extrabold text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-[14px] font-medium text-white/30 lowercase">
                    {plan.frequency}
                  </span>
                </div>
                <div className="h-px bg-white/5 w-full mt-8" />
              </CardHeader>

              <CardContent className="px-8 py-8 grow bg-transparent border-0 ring-0 shadow-none">
                {/* Desktop/Medium Features */}
                <ul className="hidden md:block space-y-4">
                  {(i === 1 ? plan.featuresMd : (i === 0 ? plan.featuresMd : plan.featuresMd)).map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 group/item">
                      <div className="shrink-0 h-4 w-4 rounded-md border border-crimson/20 flex items-center justify-center bg-crimson/5">
                        <Check className="h-2.5 w-2.5 text-crimson" strokeWidth={4} />
                      </div>
                      <span className="text-[14px] lg:text-[15px] text-white/60 font-medium group-hover/item:text-white transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Small Features */}
                <ul className="block md:hidden space-y-4">
                  {plan.featuresSm.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 group/item">
                      <div className="shrink-0 h-4 w-4 rounded-md border border-crimson/20 flex items-center justify-center bg-crimson/5">
                        <Check className="h-2.5 w-2.5 text-crimson" strokeWidth={4} />
                      </div>
                      <span className="text-[14px] text-white/60 font-medium group-hover/item:text-white transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="px-8 pb-10 pt-0 bg-transparent border-0 ring-0 shadow-none">
                <Button 
                  className={`w-full h-12 md:h-13 rounded-2xl text-[14px] md:text-[15px] font-bold transition-all ${plan.popular ? 'bg-crimson text-white hover:bg-crimson/90 shadow-xl shadow-crimson/20' : 'bg-[#1a1a2e] text-white hover:bg-[#252545] border-0'}`}
                  variant={plan.popular ? "default" : "secondary"}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
