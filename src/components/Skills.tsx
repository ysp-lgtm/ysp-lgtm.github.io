import { profileData } from "../data/profile";
import { Ruler, Users, Building2 } from "lucide-react";

const skillCategories = [
  {
    id: "hard",
    label: "硬技能",
    icon: Ruler,
    color: "bg-black text-white",
  },
  {
    id: "soft",
    label: "软技能",
    icon: Users,
    color: "border-2 border-black",
  },
  {
    id: "industry",
    label: "行业纵深",
    icon: Building2,
    color: "border-2 border-black swiss-diagonal",
  },
] as const;

export default function Skills() {
  const { skills } = profileData;

  return (
    <section className="relative border-b-2 border-black">
      {/* Section Header */}
      <div className="border-b-2 border-black bg-swiss-muted swiss-grid-pattern">
        <div className="px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="swiss-section-num">02. CAPABILITIES</span>
            <div className="w-px h-6 bg-black" />
            <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">
              核心能力举证
            </h2>
          </div>
          <div className="hidden md:block w-32 h-1 bg-swiss-red" />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x-2 divide-black">
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          const items =
            cat.id === "industry" ? [skills.industry] : skills[cat.id];

          return (
            <div key={cat.id} className="flex flex-col">
              {/* Category Header */}
              <div className="border-b-2 border-black">
                <div className="flex items-center gap-4 p-6 md:p-8 bg-swiss-muted">
                  <div
                    className={`w-12 h-12 flex items-center justify-center ${cat.color}`}
                  >
                    <Icon size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="swiss-section-num">{cat.id.toUpperCase()}</div>
                    <h3 className="text-lg font-black tracking-tight uppercase">
                      {cat.label}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex-1 p-6 md:p-8 flex flex-col gap-4">
                {items.map((skill, i) => (
                  <div
                    key={i}
                    className="group relative"
                  >
                    <div
                      className={`
                        border-2 border-black px-4 py-3 font-bold tracking-wide uppercase text-sm
                        transition-colors duration-150 cursor-default
                        hover:bg-black hover:text-white
                        ${cat.id === "industry" ? "text-base md:text-lg" : ""}
                      `}
                    >
                      {skill}
                      {/* Hover Indicator */}
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-swiss-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}

                {/* Empty State for Industry */}
                {cat.id === "industry" && (
                  <div className="mt-4 border border-dashed border-black p-4">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      行业纵深 · 选最擅长的1个领域深耕
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Skill Matrix Visualization */}
      <div className="border-t-2 border-black bg-swiss-muted swiss-dots p-6 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black border-2 border-black">
          {[
            { label: "数据分析", level: 95 },
            { label: "需求管理", level: 90 },
            { label: "项目管理", level: 85 },
            { label: "沟通协调", level: 92 },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 flex flex-col gap-3 hover:bg-swiss-red hover:text-white transition-colors duration-150 group"
            >
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-white/70">
                PROFICIENCY
              </span>
              <span className="text-xl font-black tracking-tight uppercase">
                {item.label}
              </span>
              <div className="flex items-end gap-2">
                <div className="flex-1 h-1 bg-gray-200 group-hover:bg-white/30">
                  <div
                    className="h-full bg-black group-hover:bg-white transition-colors duration-150"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
                <span className="text-xs font-bold">{item.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
