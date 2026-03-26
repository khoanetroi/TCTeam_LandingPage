import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Subtle background grid */}
      <div className="absolute inset-0 -z-10" style={{
        backgroundImage: 'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)',
        backgroundSize: '72px 72px'
      }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-transparent to-white" />

      <div className="container mx-auto px-6 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left */}
          <div className="flex-1 max-w-xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-8 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Web Development Agency
            </div>

            <h1 className="font-display font-extrabold text-slate-900 text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
              Xin chào,{" "}
              <br />
              <span className="text-emerald-500">chúng tôi</span>
              <br />
              là TCT.
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Đội ngũ phát triển website chuyên nghiệp. Chúng tôi tập trung vào sự đơn giản,
              hiệu quả và trải nghiệm người dùng tối ưu để kiến tạo giải pháp nền tảng trực tuyến vững chắc.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-all duration-300"
              >
                Khám phá dự án
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-sm transition-all duration-200"
              >
                Liên hệ ngay
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12 pt-10 border-t border-slate-100">
              {[
                { value: "8+", label: "Dự án hoàn thành" },
                { value: "10+", label: "Khách hàng" },
                { value: "5+", label: "Năm kinh nghiệm" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="flex-1 w-full max-w-xl">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                  alt="Workspace"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Badge bottom-left */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl border border-slate-100 p-3.5 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold text-sm">
                  5+
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Năm phát triển</p>
                  <p className="text-[11px] text-slate-400">Kinh nghiệm thực chiến</p>
                </div>
              </div>
              {/* Status badge top-right */}
              <div className="absolute -top-4 -right-4 bg-slate-900 text-white rounded-xl px-3.5 py-2 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold">Đang nhận dự án</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
