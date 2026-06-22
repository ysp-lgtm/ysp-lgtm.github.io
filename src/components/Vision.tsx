import { profileData } from "../data/profile";
import { Mail, Phone, Target, Rocket, Clock, ArrowRight } from "lucide-react";

export default function Vision() {
  const { vision } = profileData;

  return (
    <section className="relative border-b-2 border-black">
      {/* Section Header */}
      <div className="border-b-2 border-black bg-swiss-muted swiss-grid-pattern">
        <div className="px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="swiss-section-num">07. VISION</span>
            <div className="w-px h-6 bg-black" />
            <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">
              求职意向与个人愿景
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Target size={18} className="text-swiss-red" />
            <span className="text-xs font-bold tracking-widest uppercase">FIT</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2">
        {/* Left: Job Intent */}
        <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-black p-8 md:p-12 bg-white">
          <div className="mb-8">
            <div className="swiss-section-num mb-4">JOB INTENT</div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight uppercase mb-6">
              意向岗位
            </h3>
          </div>

          {/* Target Position Card */}
          <div className="border-4 border-black p-8 bg-swiss-muted swiss-dots mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Rocket size={24} className="text-swiss-red" />
              <span className="text-sm font-black tracking-widest uppercase">{vision.target}</span>
            </div>
            <div className="swiss-rule mb-6" />
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-swiss-red" />
                <span className="text-sm font-medium">{vision.status}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-gray-400" />
                <span className="text-sm font-medium">{vision.available}</span>
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div>
            <div className="swiss-section-num mb-4">FUTURE VISION</div>
            <div className="border-l-4 border-swiss-red pl-6">
              <p className="text-xl md:text-2xl font-bold tracking-tight leading-snug">
                {vision.future}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact & CTA */}
        <div className="p-8 md:p-12 bg-black text-white swiss-grid-pattern">
          <div className="mb-8">
            <div className="swiss-section-num text-swiss-red mb-4">CONTACT</div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight uppercase">
              取得联系
            </h3>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4 mb-12">
            <a
              href={`mailto:${vision.contact.email}`}
              className="flex items-center gap-4 p-4 border-2 border-white/20 hover:border-white hover:bg-white hover:text-black transition-colors duration-150 group"
            >
              <div className="w-12 h-12 border-2 border-current flex items-center justify-center group-hover:bg-swiss-red group-hover:border-swiss-red">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase opacity-60">EMAIL</div>
                <div className="font-medium">{vision.contact.email}</div>
              </div>
              <ArrowRight size={18} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={`tel:${vision.contact.phone.replace(/-/g, "")}`}
              className="flex items-center gap-4 p-4 border-2 border-white/20 hover:border-white hover:bg-white hover:text-black transition-colors duration-150 group"
            >
              <div className="w-12 h-12 border-2 border-current flex items-center justify-center group-hover:bg-swiss-red group-hover:border-swiss-red">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase opacity-60">PHONE</div>
                <div className="font-medium">{vision.contact.phone}</div>
              </div>
              <ArrowRight size={18} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* CTA Button */}
          <div className="border-t-2 border-white/20 pt-8">
            <button className="w-full bg-swiss-red text-white border-4 border-swiss-red p-6 font-black text-lg tracking-widest uppercase hover:bg-white hover:text-swiss-red transition-colors duration-150 group flex items-center justify-center gap-3">
              <span>下载简历 PDF</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-xs font-medium text-white/40 mt-4 tracking-wide">
              或直接发送邮件，我会 24 小时内回复
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="bg-swiss-muted swiss-dots px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">李明 · 产品经理 Portfolio</span>
          <div className="w-px h-4 bg-black/20" />
          <span className="text-xs font-medium text-gray-400">2026</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium text-gray-400">Made with React + Tailwind CSS · Swiss Design System</span>
        </div>
      </div>
    </section>
  );
}
