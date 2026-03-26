import { ArrowLeft, MessageCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 font-medium transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" />
          Quay lại trang chủ
        </Link>

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
          {/* Left — Info */}
          <div className="flex-1 max-w-lg">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">Tư vấn</p>
            <h1 className="font-display text-5xl font-extrabold tracking-tight mb-5">
              Nhận tư vấn
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Chúng tôi luôn sẵn sàng để lắng nghe và đồng hành cùng quý khách hàng.
            </p>

            {/* Profile */}
            <div className="flex items-start gap-4 mb-8 p-5 bg-white/5 border border-white/8 rounded-2xl">
              <div className="w-14 h-14 rounded-xl overflow-hidden ring-2 ring-emerald-500/30 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                  alt="Team Lead"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-white">Tiệm Code Team</h4>
                <div className="relative mt-1.5 pl-3 border-l-2 border-emerald-500">
                  <p className="text-sm text-slate-400 italic leading-relaxed">
                    "Mỗi sản phẩm mà chúng tôi xây dựng lên luôn cố gắng sao cho nó trở thành 1 tác phẩm nghệ thuật gửi đến tay khách hàng."
                  </p>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 uppercase tracking-wider font-medium">Nhà tư vấn phát triển website</p>
              </div>
            </div>

            {/* Zalo CTA */}
            <div className="p-5 bg-white/5 border border-white/8 rounded-2xl">
              <p className="text-slate-300 text-sm mb-4">
                Cùng mình xây dựng website giúp nâng tầm thương hiệu và doanh nghiệp của bạn trên internet.
              </p>
              <a href="https://zalo.me/" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl px-6 py-3 transition-colors cursor-pointer text-sm">
                  <MessageCircle className="w-4 h-4" />
                  Chat Zalo ngay
                </button>
              </a>
              <div className="flex gap-2.5 mt-5">
                {[
                  { path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
                  { path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                ].map((s, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/8 hover:bg-emerald-500 flex items-center justify-center transition-colors duration-200">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="w-full lg:w-[460px] shrink-0">
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Đã gửi thành công!</h3>
                <p className="text-slate-500 text-sm">Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.</p>
              </div>
            ) : (
              <form className="bg-white rounded-2xl overflow-hidden shadow-2xl" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="bg-emerald-500 p-6">
                  <h3 className="text-lg font-bold text-white">Thông tin liên hệ</h3>
                  <p className="text-emerald-100 text-sm mt-0.5">Chúng tôi sẽ liên hệ lại trong 24h</p>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">Họ và tên *</label>
                    <Input required placeholder="Nguyễn Văn A" className="h-11 rounded-xl border-slate-200 text-slate-900 focus-visible:ring-emerald-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">Số điện thoại *</label>
                    <Input required type="tel" placeholder="0901 234 567" className="h-11 rounded-xl border-slate-200 text-slate-900 focus-visible:ring-emerald-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">Email</label>
                    <Input type="email" placeholder="email@example.com" className="h-11 rounded-xl border-slate-200 text-slate-900 focus-visible:ring-emerald-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">Dịch vụ quan tâm</label>
                    <select className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option>Website Bán Hàng</option>
                      <option>Website Doanh Nghiệp</option>
                      <option>Landing Page</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">Mô tả dự án</label>
                    <textarea
                      placeholder="Mô tả ngắn về yêu cầu của bạn..."
                      rows={3}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm resize-none text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <button type="submit" className="w-full h-11 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold transition-colors cursor-pointer text-sm">
                    Gửi yêu cầu tư vấn
                  </button>
                  <p className="text-[11px] text-slate-400 text-center">Thông tin được bảo mật hoàn toàn.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
