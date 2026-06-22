import { profileData } from "../data/profile";
import { Weight, RefreshCw, Kanban } from "lucide-react";

const iconMap = {
  weight: Weight,
  refresh: RefreshCw,
  kanban: Kanban,
} as const;

export default function Methodology() {
  const { methodology } = profileData;

  return (
    <section className="relative border-b-2 border-black">
      {/* Section Header */}
      <div className="border-b-2 border-black bg-swiss-muted swiss-grid-pattern">
        <div className="px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="swiss-section-num">05. METHODOLOGY</span>
            <div className="w-px h-6 bg-black" />
            <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">
              工作流与方法论
            </h2>
          </div>
          <div className="hidden md:block px-4 py-1 bg-swiss-red text-white text-xs font-black tracking-widest uppercase">
            DIFFERENTIATOR
          </div>
        </div>
      </div>

      {/* Methodology Grid */}
      <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x-2 divide-black">
        {methodology.map((item, idx) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];

          return (
            <div key={idx} className="relative group">
              {/* Header */}
              <div className="border-b-2 border-black p-6 md:p-8 bg-swiss-muted swiss-dots">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 border-4 border-black bg-white flex items-center justify-center group-hover:bg-swiss-red group-hover:border-swiss-red transition-colors duration-150">
                      <Icon size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="swiss-section-num">{String(idx + 1).padStart(2, "0")}</div>
                      <h3 className="text-lg md:text-xl font-black tracking-tight uppercase">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Points */}
              <div className="p-6 md:p-8 bg-white">
                <div className="space-y-3">
                  {item.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="w-5 h-5 border-2 border-black flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-black group-hover/item:text-white transition-colors duration-150">
                        <span className="text-[10px] font-black">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-sm md:text-base font-medium tracking-tight leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Accent */}
              {idx === 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-swiss-red hidden lg:block" />
              )}
            </div>
          );
        })}
      </div>

      {/* Data-Driven Loop Visualization */}
      <div className="border-t-2 border-black bg-black text-white px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1">
            <div className="swiss-section-num mb-4 text-swiss-red">DATA-DRIVEN</div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase mb-4">
              从"埋点设计"到"AB测试"的闭环习惯
            </h3>
            <p className="text-sm font-medium text-white/60 tracking-wide leading-relaxed">
              每个需求从设计之初就规划好数据埋点，通过AB测试验证假设，复盘结果迭代优化，形成完整的数据驱动闭环。
            </p>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            {["埋点设计", "指标体系", "AB测试", "复盘迭代"].map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-white flex items-center justify-center mb-2 text-xs font-black tracking-widest uppercase">
                    {step}
                  </div>
                </div>
                {i < 3 && <div className="w-8 h-0.5 bg-swiss-red hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
