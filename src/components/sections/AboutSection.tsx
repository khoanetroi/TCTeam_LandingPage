

const coreValues = [
  {
    title: "Theo dõi hành vi",
    desc: "Hiểu rõ khách hàng đang làm gì trên website, từ đó đưa ra phương án tối ưu hóa trải nghiệm người dùng.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Xác định chân dung",
    desc: "Dữ liệu sở thích, nhân khẩu học và thiết bị sử dụng giúp tối ưu nền tảng và đưa ra quyết định marketing chính xác.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Đánh giá hiệu quả",
    desc: "Đo lường kết quả website một cách trực quan để tối ưu chi phí và tăng giá trị chuyển đổi cho doanh nghiệp.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="container mx-auto px-6 h-full font-sans">

        {/* EXACT MIRROR of HeroSection Flex Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">

          {/* Left Text Block */}
          <div className="flex-1 space-y-8 max-w-2xl lg:py-10">
            {/* Matching Hero's Badge Style */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              Về Chúng Tôi
            </div>

            {/* Matching Hero's Heading Scale */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Kiến tạo giải pháp <br />
              số <span className="text-indigo-600 font-extrabold">chuyên nghiệp</span>
            </h2>

            {/* Matching Hero's Description Block */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-xl">
              Chúng tôi không chỉ triển khai website, chúng tôi xây dựng nền tảng kinh doanh trực tuyến hiệu quả. Với sự kết hợp giữa thiết kế tinh tế và công nghệ hiện đại, TCT cam kết mang lại giá trị bền vững cho doanh nghiệp của bạn.
            </p>

            {/* Compact Profile replacing the giant card */}
            <div className="pt-6 border-t border-slate-100 max-w-md">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=150&q=80"
                    alt="Souta/GoPro"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Souta/GoPro</h4>
                  <p className="text-sm text-slate-500 font-medium">Người lập / Tư vấn giải pháp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Block (Core Values) */}
          <div className="flex-1 w-full lg:max-w-none relative flex flex-col justify-center">

            <div className="space-y-5 lg:space-y-6">
              {coreValues.map((value, i) => (
                <div
                  key={i}
                  className="group flex gap-6 items-start p-6 lg:p-7 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-indigo-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[17px] mb-2">{value.title}</h4>
                    <p className="text-slate-500 text-[15px] leading-relaxed font-normal">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
