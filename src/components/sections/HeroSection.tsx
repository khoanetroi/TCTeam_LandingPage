export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center pt-24 pb-16 lg:py-24">
      <div className="container mx-auto px-6 h-full font-sans">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Text */}
          <div className="flex-1 space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white text-slate-600 text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              Web Development Agency
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Xin chào,
              <br />
              <span className="text-indigo-600 font-extrabold">
                chúng tôi là TCT
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-xl">
              Đội ngũ phát triển website chuyên nghiệp. Chúng tôi tập trung vào sự đơn giản,
              hiệu quả và trải nghiệm người dùng tối ưu để kiến tạo giải pháp nền tảng trực tuyến vững chắc.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 text-white font-medium shadow hover:bg-slate-800 transition-colors duration-200"
              >
                Khám phá dự án
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium shadow-sm hover:bg-slate-50 transition-colors duration-200"
              >
                Liên hệ ngay
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white aspect-[4/3] lg:aspect-auto lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Simple decoration */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-slate-100 p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 font-bold text-xl">
                5+
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Năm phát triển</p>
                <p className="text-xs text-slate-500">Kinh nghiệm thực chiến</p>
              </div>
            </div>
          </div>

        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-x-16 gap-y-8 mt-24 pt-8 border-t border-slate-200">
          {[
            { value: "8+", label: "Dự án hoàn thành" },
            { value: "10+", label: "Khách hàng hài lòng" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1 uppercase tracking-wide font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
