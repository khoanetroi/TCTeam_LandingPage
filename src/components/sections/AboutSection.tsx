import { Button } from "@/components/ui/button";

const coreValues = [
  {
    icon: "📊",
    title: "Theo dõi hành vi khách hàng",
    desc: "Hiểu rõ được khách hàng đang làm gì trên website từ đó đưa ra phương án để cải thiện và tối ưu hóa trải nghiệm người dùng.",
  },
  {
    icon: "🎯",
    title: "Xác định nhóm khách hàng",
    desc: "Biết rõ sở thích, nhân khẩu học và thiết bị họ sử dụng giúp bạn tối ưu hóa quảng cáo và đưa ra các quyết định marketing chính xác.",
  },
  {
    icon: "📈",
    title: "Đánh giá hiệu quả website",
    desc: "Nhận biết kết quả mà website mang lại để tối ưu chi phí đầu tư và tăng giá trị cho khách hàng.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">Về chúng tôi</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5">
            Giá trị cốt lõi
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Những giá trị chúng tôi luôn hướng đến trong từng dự án — là nền tảng cho mọi quyết định và hành động.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {coreValues.map((value, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/8 hover:border-emerald-500/40 transition-all duration-400"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="font-bold text-white text-lg mb-3 group-hover:text-emerald-400 transition-colors duration-300">{value.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Profile banner */}
        <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/8">
          <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-emerald-500/30 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
              alt="Team Lead"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="font-bold text-white">Tiệm Code Team</h4>
            <p className="text-slate-400 text-sm">Tư vấn & phát triển website chuyên nghiệp</p>
          </div>
          <a href="#contact">
            <Button className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl px-6 cursor-pointer border-none">
              Liên hệ ngay
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
