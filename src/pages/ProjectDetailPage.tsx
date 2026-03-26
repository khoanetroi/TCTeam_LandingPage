import { CheckCircle2, ExternalLink, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "@/data/siteData";

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Không tìm thấy dự án</h1>
          <Link to="/projects" className="text-emerald-600 font-medium hover:underline">← Quay lại</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Dark header */}
      <div className="bg-slate-950 text-white">
        <div className="container mx-auto px-6 py-12">
          <Link to="/projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 font-medium transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Quay lại danh sách dự án
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Browser mockup */}
            <div className="flex-1 w-full max-w-2xl">
              <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Browser bar */}
                <div className="bg-slate-700/60 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex-1 bg-slate-600/50 rounded-md px-4 py-1.5 text-xs text-slate-400 font-mono flex items-center gap-2">
                    <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    {project.link !== "#" ? project.link : `www.${project.id}.com`}
                  </div>
                </div>
                <img src={project.image} alt={project.title} className="w-full aspect-[16/10] object-cover" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 max-w-lg">
              <span className="inline-block text-[10px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
                {project.tag}
              </span>
              <h1 className="font-display text-4xl font-extrabold text-white mb-4 tracking-tight">
                {project.title}
              </h1>
              <p className="text-slate-400 leading-relaxed mb-8">{project.fullDesc}</p>

              <div className="space-y-3 mb-8">
                {[
                  { label: "Phân loại", value: project.tag },
                  { label: "Khách hàng", value: project.client },
                  { label: "Thời gian", value: project.year },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    <span className="text-slate-500 min-w-[110px]">{label}:</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Xem thực tế
                </a>
                <Link to="/consultation" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-emerald-500 text-white hover:text-emerald-400 font-semibold rounded-xl transition-colors text-sm">
                  Nhận tư vấn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Tính năng nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-16">
          {project.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-sm text-slate-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-950 text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Bạn muốn một dự án tương tự?</h2>
          <p className="text-slate-400 mb-6 text-sm">Liên hệ ngay để nhận tư vấn miễn phí.</p>
          <Link to="/consultation">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl px-8 py-3.5 transition-colors cursor-pointer">
              Nhận tư vấn miễn phí
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
