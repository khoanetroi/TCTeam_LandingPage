import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50/80 to-indigo-50/30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">Liên hệ</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-slate-500 text-lg mt-4 max-w-lg mx-auto">
            Hãy để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí cho bạn.
          </p>
        </div>

        {/* Card with gradient border */}
        <div className="max-w-5xl mx-auto relative group">
          {/* Animated gradient border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-[1.75rem] opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-gradient"></div>

          <div className="relative bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-xl">
            {/* Form */}
            <div className="flex-1 p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">Gửi tin nhắn</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Họ và tên</label>
                  <Input placeholder="Nguyễn Văn A" className="rounded-xl bg-slate-50/70 border-slate-200 h-12 focus-visible:ring-indigo-500 focus-visible:bg-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <Input type="email" placeholder="email@example.com" className="rounded-xl bg-slate-50/70 border-slate-200 h-12 focus-visible:ring-indigo-500 focus-visible:bg-white transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Số điện thoại</label>
                <Input type="tel" placeholder="0909 xxx xxx" className="rounded-xl bg-slate-50/70 border-slate-200 h-12 focus-visible:ring-indigo-500 focus-visible:bg-white transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Nội dung</label>
                <Textarea placeholder="Mô tả nhu cầu của bạn..." className="rounded-xl bg-slate-50/70 border-slate-200 min-h-[130px] resize-none focus-visible:ring-indigo-500 focus-visible:bg-white transition-colors" />
              </div>
              <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold px-8 h-12 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto cursor-pointer">
                <Send className="w-4 h-4 mr-2" />
                Gửi tin nhắn
              </Button>
            </div>

            {/* Info Panel */}
            <div className="w-full md:w-[380px] bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative">
                <h3 className="text-3xl font-bold mb-3">Thông tin<br/>liên hệ</h3>
                <p className="text-indigo-200 text-sm leading-relaxed">
                  Liên hệ trực tiếp hoặc gửi form, chúng tôi sẽ phản hồi trong 24h.
                </p>
              </div>

              <div className="space-y-5 mt-10 relative">
                {[
                  { icon: Phone, text: "+84 xxx xxx xxx" },
                  { icon: Mail, text: "contact@tiemcodeteam.com" },
                  { icon: MapPin, text: "Việt Nam" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
