import React from 'react';

export default function LandingPage() {
  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();
    throw new Error('Function not implemented.');
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-brand-bg font-sans antialiased">

      {/* HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-card/40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xl font-bold tracking-tight">
              CANDLES<span className="text-brand-accent">BEFORE</span>CUBICLES
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#ecosystem" className="hover:text-brand-accent transition-colors">Ecosystem</a>
            <a href="#philosophy" className="hover:text-brand-accent transition-colors">Philosophy</a>
            <a href="#journey" className="hover:text-brand-accent transition-colors">The Shift</a>
            <a href="https://youtube.com/@CandlesBeforeCubicles" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">YouTube</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            DITCHING THE CUBICLE <br />
            FOR THE <span className="text-brand-accent">CANDLESTICKS.</span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-text/80 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            A data-driven, transparent execution log of an engineer transitioning from writing backend microservices to managing market risk. No hindsight bias, just systems and statistics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://tradereye.candlesbeforecubicles.com"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-accent text-brand-bg font-semibold rounded-md shadow-lg shadow-brand-accent/10 hover:bg-brand-accent/90 transition-all text-center"
            >
              Launch TraderEye
            </a>
            <a
              href="https://trade-assistant.candlesbeforecubicles.com"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-card text-brand-text font-semibold rounded-md border border-brand-card/80 hover:bg-brand-card/50 transition-all text-center"
            >
              Open Trade Assistant
            </a>
          </div>
        </div>

        {/* Subtle decorative background grid to anchor the technical feeling */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#16222f_1px,transparent_1px),linear-gradient(to_bottom,#16222f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" /> */}

        {/* Subtle, masked YouTube channel banner acting as an environmental background texture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none select-none"
          style={{
            backgroundImage: "url('/yt_channel_banner.png')",
            maskImage: "radial-gradient(ellipse 60% 55% at 50% 0%, #000 30%, transparent 105%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 55% at 50% 0%, #000 30%, transparent 100%)"
          }}
        />
      </section>

      {/* THE CORE ECOSYSTEM HUB */}
      <section id="ecosystem" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">The Infrastructure</h2>
          <p className="text-brand-text/60 max-w-md mx-auto text-sm">Custom production environments engineered to manage intra-day risk execution.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* TRADER EYE CARD */}
          <div className="p-8 bg-brand-card border border-brand-card/40 rounded-lg flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-brand-accent tracking-widest uppercase">Subdomain 01</span>
                <span className="w-2 h-2 rounded-full bg-data-green animate-pulse" />
              </div>
              <h3 className="text-xl font-bold mb-3">TraderEye Logs</h3>
              <p className="text-sm text-brand-text/70 leading-relaxed mb-6">
                Radical transparency in action. A live performance dashboard displaying unedited trade metrics, execution targets, and systematic performance data straight from the terminal.
              </p>
            </div>
            <a
              href="https://tradereye.candlesbeforecubicles.com"
              className="group flex items-center justify-between w-full py-3 px-4 rounded bg-brand-bg text-sm font-semibold border border-brand-card hover:border-brand-accent/50 transition-all"
            >
              <span>Explore Trade Ledger</span>
              <span className="text-brand-accent group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* TRADE ASSISTANT CARD */}
          <div className="p-8 bg-brand-card border border-brand-card/40 rounded-lg flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-brand-accent tracking-widest uppercase">Subdomain 02</span>
                <span className="w-2 h-2 rounded-full bg-data-green animate-pulse" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trade Assistant Engine</h3>
              <p className="text-sm text-brand-text/70 leading-relaxed mb-6">
                Removing cognitive load during active execution. A high-speed math block interface designed to calculate optimal risk variables instantly and process one-click scaling entries seamlessly.
              </p>
            </div>
            <a
              href="https://trade-assistant.candlesbeforecubicles.com"
              className="group flex items-center justify-between w-full py-3 px-4 rounded bg-brand-bg text-sm font-semibold border border-brand-card hover:border-brand-accent/50 transition-all"
            >
              <span>Launch Execution Tool</span>
              <span className="text-brand-accent group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* TRADING PHILOSOPHY MATRICES */}
      <section id="philosophy" className="py-16 bg-brand-card/30 border-y border-brand-card/40 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">System Architecture</h2>
            <p className="text-brand-text/60 max-w-md mx-auto text-sm">Rules that dictate execution strategy over retail market sentiment.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-brand-bg/50 border border-brand-card/20 rounded">
              <div className="text-brand-accent font-mono text-lg mb-2">01</div>
              <h4 className="font-bold mb-1 text-sm uppercase tracking-wider">Risk First</h4>
              <p className="text-xs text-brand-text/60 leading-relaxed">Position sizes are calculated precisely against clear invalidation points before any capital enters the market.</p>
            </div>
            <div className="p-6 bg-brand-bg/50 border border-brand-card/20 rounded">
              <div className="text-brand-accent font-mono text-lg mb-2">02</div>
              <h4 className="font-bold mb-1 text-sm uppercase tracking-wider">10m Structural Priority</h4>
              <p className="text-xs text-brand-text/60 leading-relaxed">Bypassing the high-frequency micro-noise of standard intraday charts to build alpha on higher probability structural intervals.</p>
            </div>
            <div className="p-6 bg-brand-bg/50 border border-brand-card/20 rounded">
              <div className="text-brand-accent font-mono text-lg mb-2">03</div>
              <h4 className="font-bold mb-1 text-sm uppercase tracking-wider">ATR Position Stops</h4>
              <p className="text-xs text-brand-text/60 leading-relaxed">Letting mathematical volatility anchor structural boundaries instead of arbitrary percentage drop points or emotional panic.</p>
            </div>
            <div className="p-6 bg-brand-bg/50 border border-brand-card/20 rounded">
              <div className="text-brand-accent font-mono text-lg mb-2">04</div>
              <h4 className="font-bold mb-1 text-sm uppercase tracking-wider">Systemic Sells</h4>
              <p className="text-xs text-brand-text/60 leading-relaxed">Specializing strictly in catching over-extended allocations and optimizing short distributions over traditional long-only biases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE SHIFT / CALL TO CONTENT HUB */}
      <section id="journey" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <span className="font-mono text-xs text-brand-accent tracking-widest uppercase block mb-3">The Origin Story</span>
            <h2 className="text-3xl font-bold tracking-tight mb-6">From Code base to Capital allocation.</h2>
            <p className="text-brand-text/80 text-sm leading-relaxed mb-4">
              As a backend developer, I spent my career architecture-testing systems to guarantee predictive scale. When I stepped into live markets, I quickly realized most standard educational spaces treat trading like a lottery instead of a structured probability challenge.
            </p>
            <p className="text-brand-text/80 text-sm leading-relaxed mb-6">
              <strong>Candles Before Cubicles</strong> documents that exact structural pivot. I treat the market terminal as a raw computation environment—using technical precision, algorithmic parameters, and rule-based entries to transition cleanly out of the corporate 9-to-5 loop.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://youtube.com/@CandlesBeforeCubicles" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-data-red text-brand-text font-semibold rounded text-xs tracking-wider uppercase hover:bg-data-red/90 transition-colors">
                Watch on YouTube
              </a>
              <a href="https://instagram.com/CandlesBeforeCubicles" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-brand-card border border-brand-card text-brand-text font-semibold rounded text-xs tracking-wider uppercase hover:border-brand-accent/40 transition-colors">
                Follow Instagram Diary
              </a>
            </div>
          </div>
          <div className="md:col-span-5 bg-brand-card/40 border border-brand-card/30 rounded-lg p-6 font-mono text-xs text-brand-text/50 shadow-inner">
            <div className="flex items-center justify-between border-b border-brand-card/60 pb-3 mb-4">
              <span className="text-data-green">● execution_policy.json</span>
              <span>v1.2.0</span>
            </div>
            <p className="text-brand-accent mb-2">{"{"}</p>
            <p className="pl-4">&quot;strategy&quot;: &quot;Intraday Trend Shorting&quot;,</p>
            <p className="pl-4">&quot;base_interval&quot;: &quot;10_Minute_Chart&quot;,</p>
            <p className="pl-4">&quot;risk_per_trade_pct&quot;: 1.0,</p>
            <p className="pl-4">&quot;stop_mechanism&quot;: &quot;ATR_Volatility_Derived&quot;,</p>
            <p className="pl-4">&quot;execution_friction&quot;: &quot;Eliminated_Via_TradeAssistant&quot;,</p>
            <p className="pl-4">&quot;transparency_ledger&quot;: &quot;Live_TraderEye_Sync&quot;</p>
            <p className="text-brand-accent mt-2">{"}"}</p>
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE LEAD CAPTURE */}
      <section className="bg-brand-card/20 border-t border-brand-card/40 py-16 px-6">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-xl font-bold mb-2">Track the Code Shift</h3>
          <p className="text-sm text-brand-text/60 mb-6">Get a direct digest detailing strategic asset updates, weekly trade metrics, and system optimizations.</p>
          <form className="flex flex-col sm:flex-row items-stretch gap-2">
            <input
              type="email"
              placeholder="developer@firm.com"
              className="flex-1 px-4 py-2.5 bg-brand-bg rounded border border-brand-card/80 text-sm font-mono text-brand-text focus:outline-none focus:border-brand-accent placeholder:text-brand-text/30"
              required
            />
            <button type="submit" className="px-6 py-2.5 bg-brand-accent text-brand-bg text-sm font-semibold rounded hover:bg-brand-accent/90 transition-all whitespace-nowrap">
              Join Ledger
            </button>
          </form>
        </div>
      </section>

      {/* INSTITUTIONAL DISCLAIMER & FOOTER */}
      <footer className="bg-brand-bg border-t border-brand-card/40 px-6 py-10 text-xs text-brand-text/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="max-w-xl">
            <p className="font-mono font-bold text-brand-text/60 mb-3 tracking-wider">RISK MITIGATION & PERFORMANCE DISCLAIMER</p>
            <p className="leading-relaxed">
              Intraday trading and short-selling operations on equity instruments contain substantial financial vulnerability. All calculations, metrics, and automated scripts rendered via TraderEye and Trade Assistant are architectural system records built strictly for operational execution tracing and subjective analysis. No information within this framework serves as formal investment logic, tactical security recommendations, or certified asset brokerage advice. Historical performance records do not model absolute guarantees of future operational system probability.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2 font-mono whitespace-nowrap text-brand-text/50">
            <span>© {new Date().getFullYear()} CANDLES BEFORE CUBICLES.</span>
            <span>All Infrastructure Registered.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}