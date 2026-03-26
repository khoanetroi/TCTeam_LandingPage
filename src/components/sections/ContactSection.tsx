import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-4">Liên hệ</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-slate-500">
            Hãy để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí cho bạn.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-0 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden">
          {/* Info Panel */}
          <div className="md:col-span-2 bg-slate-950 text-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-3">Thông tin<br />liên hệ</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Liên hệ trực tiếp hoặc gửi form, chúng tôi sẽ phản hồi trong 24h.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Phone, text: "+84 xxx xxx xxx" },
                  { icon: Mail, text: "contact@tiemcodeteam.com" },
                  { icon: MapPin, text: "Việt Nam" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-sm text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-500" />
              <div className="w-6 h-6 self-end rounded-full bg-emerald-500/40" />
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 p-8 md:p-10 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Họ và tên</label>
                <Input placeholder="Nguyễn Văn A" className="h-11 rounded-xl border-slate-200 bg-slate-50 focus-visible:ring-emerald-500" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <Input type="email" placeholder="email@example.com" className="h-11 rounded-xl border-slate-200 bg-slate-50 focus-visible:ring-emerald-500" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">Số điện thoại</label>
              <Input type="tel" placeholder="0909 xxx xxx" className="h-11 rounded-xl border-slate-200 bg-slate-50 focus-visible:ring-emerald-500" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">Nội dung</label>
              <Textarea placeholder="Mô tả nhu cầu của bạn..." className="rounded-xl border-slate-200 bg-slate-50 min-h-[120px] resize-none focus-visible:ring-emerald-500" />
            </div>
            <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 h-11 rounded-xl transition-colors duration-200 shadow-lg shadow-emerald-500/20 cursor-pointer">
              <Send className="w-4 h-4" />
              Gửi tin nhắn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
