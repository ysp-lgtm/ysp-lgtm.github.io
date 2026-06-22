import { profileData } from "../data/profile";
import { TrendingUp, Award, BookOpen } from "lucide-react";

export default function Metrics() {
  const { metrics } = profileData;

  return (
    <section className="relative border-b-2 border-black">
      {/* Section Header */}
      <div className="border-b-2 border-black bg-swiss-muted swiss-grid-pattern">
        <div className="px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="swiss-section-num">04. ACHIEVEMENTS</span>
            <div className="w-px h-6 bg-black" />
            <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">
              关键成果速览
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <TrendingUp size={20} className="text-swiss-red" />
            <span className="text-xs font-bold tracking-widest uppercase">DATA DASHBOARD</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 divide-y-2 lg:divide-y-0 divide-black">
        {metrics.stats.map((stat, i) => (
          <div
            key={i}
            className="relative group p-8 md:p-12 bg-white hover:bg-swiss-red hover:text-white transition-colors duration-150"
          >
            {/* Number */}
            <div className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4">
              {stat.value}
            </div>
            {/* Label */}
            <div className="text-lg md:text-xl font-black tracking-tight uppercase mb-1">
              {stat.label}
            </div>
            {/* Description */}
            <div className="text-xs font-medium opacity-60 tracking-wide uppercase">
              {stat.desc}
            </div>
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-current opacity-30 group-hover:opacity-0" />
          </div>
        ))}
      </div>

      {/* Awards &沉淀 Grid */}
      <div className="grid md:grid-cols-2 border-t-2 border-black">
        {/* Awards */}
        <div className="border-b-2 md:border-b-0 border-r-0 md:border-r-2 border-black bg-swiss-muted p-8 md:p-12 swiss-dots">
          <div className="flex items-center gap-3 mb-8">
            <Award size={20} className="text-swiss-red" />
            <span className="swiss-section-num">AWARDS</span>
          </div>
          <div className="space-y-4">
            {metrics.awards.map((award, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-150 group"
              >
                <div className="w-12 h-12 border-2 border-current flex items-center justify-center group-hover:bg-swiss-red group-hover:border-swiss-red">
                  <Award size={20} />
                </div>
                <div>
                  <div className="font-black tracking-tight uppercase">{award.title}</div>
                  <div className="text-xs font-medium opacity-60">{award.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*沉淀 */}
        <div className="p-8 md:p-12 bg-white">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={20} className="text-swiss-red" />
            <span className="swiss-section-num">METHODOLOGY</span>
          </div>
          <div className="space-y-4">
            {metrics.沉淀.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 border-2 border-black hover:bg-swiss-muted transition-colors duration-150 group"
              >
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-150">
                  <span className="text-xs font-black">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1">
                  <div className="font-black tracking-tight">{item.title}</div>
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                    {item.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
