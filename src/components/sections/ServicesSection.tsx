import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/siteData";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-4">Dịch vụ</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Dịch vụ cung cấp
          </h2>
          <p className="text-slate-500">
            Các giải pháp website chuyên nghiệp, phù hợp với mọi nhu cầu kinh doanh.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group flex flex-col p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-400 hover:-translate-y-1 bg-white"
            >
              {/* Number */}
              <span className="font-display text-7xl font-black text-slate-50 group-hover:text-emerald-50 transition-colors leading-none mb-6 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400 mb-6">{service.subtitle}</p>

              <div className="h-px bg-slate-50 mb-6" />

              <ul className="space-y-2.5 mb-8 flex-1">
                {service.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to={`/services/${service.id}`}>
                <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 cursor-pointer">
                  Tìm hiểu thêm
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
