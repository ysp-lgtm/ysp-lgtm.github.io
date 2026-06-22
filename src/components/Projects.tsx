import { profileData } from "../data/profile";
import { ArrowUpRight, Target, Lightbulb } from "lucide-react";

const starLabels = {
  s: { label: "SITUATION", labelCn: "背景与痛点", color: "bg-swiss-red text-white" },
  t: { label: "TARGET", labelCn: "目标与指标", color: "bg-black text-white" },
  a: { label: "ACTION", labelCn: "我的动作", color: "border-2 border-black" },
  r: { label: "RESULT", labelCn: "量化结果", color: "bg-swiss-muted" },
  l: { label: "LESSON", labelCn: "沉淀与复盘", color: "swiss-diagonal border-2 border-black" },
} as const;

type StarKey = keyof typeof starLabels;

export default function Projects() {
  const { projects } = profileData;

  return (
    <section className="relative border-b-2 border-black">
      {/* Section Header */}
      <div className="border-b-2 border-black bg-swiss-muted swiss-grid-pattern">
        <div className="px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="swiss-section-num">03. EXPERIENCE</span>
            <div className="w-px h-6 bg-black" />
            <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">
              项目经验
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500">STAR + L</span>
            <div className="w-16 h-1 bg-black" />
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="divide-y-2 divide-black">
        {projects.map((project) => (
          <div key={project.id} className="relative">
            {/* Project Header */}
            <div className="border-b-2 border-black bg-black text-white px-6 md:px-12 lg:px-24 py-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <span className="text-5xl md:text-7xl font-black tracking-tighter opacity-30">
                    {project.id}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase">
                      {project.name}
                    </h3>
                    <p className="text-sm font-medium text-white/60 tracking-wide">
                      {project.company} · {project.period}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/40 px-3 py-1 text-xs font-bold tracking-widest uppercase text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* STAR+L Content */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x-2 divide-black border-b-2 border-black">
              {(Object.keys(starLabels) as StarKey[]).map((key) => {
                const { label, labelCn, color } = starLabels[key];
                const content = project.star[key];

                return (
                  <div
                    key={key}
                    className={`p-6 md:p-8 flex flex-col gap-4 ${color}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 border-2 border-current flex items-center justify-center">
                        <span className="text-xs font-black">{key.toUpperCase()}</span>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold tracking-widest uppercase opacity-60">
                          {label}
                        </div>
                        <div className="text-sm font-black tracking-tight uppercase">
                          {labelCn}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm md:text-base font-medium leading-relaxed tracking-tight flex-1">
                      {content}
                    </p>
                    {key === "r" && (
                      <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide opacity-60">
                        <ArrowUpRight size={14} />
                        量化验证
                      </div>
                    )}
                    {key === "l" && (
                      <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide opacity-60">
                        <Lightbulb size={14} />
                        方法论沉淀
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Highlight Bar */}
            <div className="bg-swiss-muted px-6 md:px-12 lg:px-24 py-4 flex items-center gap-4">
              <Target size={16} className="text-swiss-red" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                亮点: {project.star.r}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* STAR+L Legend */}
      <div className="border-t-2 border-black bg-swiss-muted swiss-dots px-6 md:px-12 lg:px-24 py-6">
        <div className="flex flex-wrap items-center gap-6">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">方法论指引</span>
          {(Object.keys(starLabels) as StarKey[]).map((key) => (
            <div key={key} className="flex items-center gap-2">
              <span className="w-6 h-6 border-2 border-black flex items-center justify-center text-xs font-black">
                {key.toUpperCase()}
              </span>
              <span className="text-xs font-medium">{starLabels[key].labelCn}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
