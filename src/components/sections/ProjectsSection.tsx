import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/siteData";

export function ProjectsSection() {
  const featured = projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-4">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Dự án nổi bật
            </h2>
            <p className="text-slate-500 mt-3 max-w-md">
              Một số dự án tiêu biểu mà chúng tôi đã thực hiện cho khách hàng.
            </p>
          </div>
          <Link to="/projects">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 cursor-pointer">
              Xem tất cả
              <ExternalLink className="w-4 h-4" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-400 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-400" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold text-slate-600 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">{project.title}</h3>
                  <span className="text-xs text-slate-400 font-medium">{project.year}</span>
                </div>
                <p className="text-sm text-slate-500 line-clamp-2">{project.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
