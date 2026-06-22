import { profileData } from "../data/profile";

export default function Hero() {
  const { hero } = profileData;

  return (
    <section className="relative min-h-screen border-b-2 border-black swiss-grid-pattern overflow-hidden">
      {/* Geometric Bauhaus Composition */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none hidden lg:block">
        <div className="absolute top-24 right-16 w-48 h-48 border-4 border-black bg-white" />
        <div className="absolute top-32 right-40 w-32 h-32 bg-swiss-red rounded-full opacity-90" />
        <div className="absolute top-16 right-80 w-16 h-16 bg-black" />
        <div className="absolute bottom-32 right-24 w-80 h-1 bg-black" />
        <div className="absolute top-64 right-48 w-1 h-48 bg-black" />
        <div className="absolute bottom-24 right-80 w-24 h-24 border-4 border-swiss-red rotate-45" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-16 md:py-24">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-16 md:mb-24 border-b-2 border-black pb-6">
          <div className="swiss-section-num">01. PROFILE</div>
          <div className="hidden md:flex items-center gap-8">
            <span className="text-xs font-bold tracking-widest uppercase">PM Portfolio</span>
            <span className="text-xs font-medium text-gray-500">2026</span>
          </div>
        </div>

        {/* Name & Title */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none uppercase mb-6">
            {hero.name}
          </h1>
          <div className="flex flex-wrap gap-3 mb-6">
            {hero.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-block border-2 border-black px-3 py-1 text-xs font-bold tracking-widest uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight max-w-3xl">
            {hero.title} · {hero.subtitle}
          </p>
        </div>

        {/* Slogan */}
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="swiss-rule mb-8" />
          <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            "{hero.slogan}"
          </blockquote>
        </div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          <div className="border-2 border-black p-8 bg-swiss-muted swiss-dots">
            <div className="swiss-section-num mb-4">VALUE</div>
            <p className="text-lg md:text-xl font-medium tracking-tight">
              我能为团队带来什么
            </p>
          </div>
          <div className="border-2 border-black p-8">
            <div className="flex flex-wrap gap-4 items-center">
              {hero.value.split(" · ").map((item, i) => (
                <span key={i} className="text-base md:text-lg font-bold tracking-tight">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">SCROLL</span>
          <div className="w-px h-12 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-swiss-red animate-[slide_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
