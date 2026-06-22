import { profileData } from "../data/profile";
import { Share2, Zap, Book } from "lucide-react";

const iconMap = {
  share: Share2,
  zap: Zap,
  book: Book,
} as const;

export default function Traits() {
  const { traits } = profileData;

  return (
    <section className="relative border-b-2 border-black">
      {/* Section Header */}
      <div className="border-b-2 border-black bg-swiss-muted swiss-grid-pattern">
        <div className="px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="swiss-section-num">06. PERSONALITY</span>
            <div className="w-px h-6 bg-black" />
            <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">
              个人特质与驱动力
            </h2>
          </div>
          <div className="hidden md:block w-24 h-1 bg-swiss-red" />
        </div>
      </div>

      {/* Traits Grid */}
      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-2 divide-black">
        {traits.map((trait, idx) => {
          const Icon = iconMap[trait.icon as keyof typeof iconMap];

          return (
            <div key={idx} className="relative group">
              {/* Visual Top */}
              <div className="relative h-40 bg-black overflow-hidden swiss-dots">
                <div className="absolute inset-0 bg-swiss-muted opacity-30" />
                {/* Geometric Elements */}
                <div className="absolute top-4 right-4 w-24 h-24 border-4 border-white opacity-20" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-swiss-red opacity-80" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 border-2 border-white flex items-center justify-center group-hover:bg-swiss-red group-hover:border-swiss-red transition-colors duration-150">
                    <Icon size={36} strokeWidth={2} />
                  </div>
                </div>
                {/* Number */}
                <div className="absolute top-4 left-4 text-white/20 text-7xl font-black tracking-tighter">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 bg-white group-hover:bg-swiss-muted transition-colors duration-150">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-swiss-red" />
                  <h3 className="text-lg md:text-xl font-black tracking-tight uppercase">
                    {trait.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base font-medium text-gray-600 leading-relaxed tracking-tight">
                  {trait.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quote Banner */}
      <div className="relative border-t-2 border-black bg-swiss-red text-white overflow-hidden">
        <div className="absolute inset-0 swiss-diagonal opacity-10" />
        <div className="relative px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 text-6xl md:text-8xl font-black opacity-20 leading-none">
            "
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-xl md:text-2xl font-black tracking-tight uppercase leading-snug">
              产品经理的成长 = 结构化思维 × 持续实践 × 深度复盘
            </p>
            <p className="text-sm font-medium text-white/60 mt-2 tracking-wide">
              — 个人方法论宣言
            </p>
          </div>
          <div className="flex-shrink-0 hidden md:flex flex-col items-center gap-2">
            <div className="w-px h-16 bg-white/30" />
            <span className="text-xs font-bold tracking-widest uppercase opacity-60">PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
