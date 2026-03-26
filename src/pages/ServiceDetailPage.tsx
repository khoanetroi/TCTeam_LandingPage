import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { services } from "@/data/siteData";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Không tìm thấy dịch vụ</h1>
          <Link to="/#services" className="text-emerald-600 font-medium hover:underline">← Quay lại</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 py-12">
          <Link to="/#services" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-medium transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Quay lại trang chủ
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Info */}
            <div className="flex-1 max-w-xl">
              <p className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-4">Dịch vụ</p>
              <span className="font-display text-9xl font-black text-slate-100 leading-none block mb-4 select-none">
                {service.number}
              </span>
              <h1 className="font-display text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                {service.title}
              </h1>
              <p className="text-slate-500 leading-relaxed mb-8 text-lg">{service.fullDesc}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Consultation Form */}
            <div className="w-full lg:w-[400px] shrink-0">
              <ConsultationForm serviceName={service.title} />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-slate-950 text-white rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Cùng chúng tôi xây dựng website giúp nâng tầm thương hiệu của bạn.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://zalo.me/" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl px-8 py-3.5 transition-colors cursor-pointer">
                💬 Chat Zalo ngay
              </button>
            </a>
            <Link to="/projects">
              <button className="bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl px-8 py-3.5 transition-colors cursor-pointer border border-white/10">
                Xem dự án đã làm
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsultationForm({ serviceName }: { serviceName: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7 text-emerald-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Cảm ơn bạn!</h3>
        <p className="text-slate-500 text-sm">Chúng tôi sẽ liên hệ trong thời gian sớm nhất.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="bg-slate-950 p-6">
        <h3 className="text-lg font-bold text-white">Nhận tư vấn miễn phí</h3>
        <p className="text-slate-400 text-sm mt-1">Cho dịch vụ: {serviceName}</p>
      </div>
      <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1.5 block">Họ và tên *</label>
          <Input required placeholder="Nguyễn Văn A" className="h-11 rounded-xl border-slate-200 focus-visible:ring-emerald-500" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1.5 block">Số điện thoại *</label>
          <Input required type="tel" placeholder="0901 234 567" className="h-11 rounded-xl border-slate-200 focus-visible:ring-emerald-500" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1.5 block">Email</label>
          <Input type="email" placeholder="email@example.com" className="h-11 rounded-xl border-slate-200 focus-visible:ring-emerald-500" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1.5 block">Ghi chú</label>
          <textarea
            placeholder="Mô tả ngắn về dự án..."
            rows={3}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <button type="submit" className="w-full h-11 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold transition-colors cursor-pointer">
          Gửi yêu cầu tư vấn
        </button>
        <p className="text-[11px] text-slate-400 text-center">Thông tin được bảo mật hoàn toàn.</p>
      </form>
    </div>
  );
}
