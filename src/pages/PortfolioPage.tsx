import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/siteData";

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-950 text-white py-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 font-medium transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Quay lại trang chủ
          </Link>
          <h1 className="font-display text-5xl font-extrabold tracking-tight mb-4">
            Dự án của chúng tôi
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Tổng hợp các giải pháp công nghệ và website chúng tôi đã triển khai cho đối tác và khách hàng.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-400 hover:-translate-y-1 flex flex-col">
              {/* Image */}
              <Link to={`/projects/${project.id}`} className="block aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold text-slate-700 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {project.tag}
                  </span>
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">{project.client}</span>
                  <span className="text-xs text-slate-400">{project.year}</span>
                </div>
                <Link to={`/projects/${project.id}`}>
                  <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors uppercase">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">{project.desc}</p>
                <div className="flex gap-2">
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex-1 py-3 text-center rounded-xl bg-slate-900 hover:bg-emerald-500 text-white font-semibold text-sm transition-all duration-300"
                  >
                    Xem dự án
                  </Link>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl border border-slate-200 text-slate-500 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-950 text-white rounded-2xl p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Bạn có dự án mới muốn thực hiện?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn.
          </p>
          <Link to="/consultation">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl px-10 py-4 text-base transition-colors cursor-pointer">
              Bắt đầu ngay
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
