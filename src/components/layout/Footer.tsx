import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>

      <div className="bg-slate-950 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-slate-800/50">
            {/* Brand */}
            <div className="md:col-span-1 space-y-5">
              <a href="#" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs tracking-tight shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
                  TCT
                </div>
                <span className="font-bold text-xl tracking-tight">Tiệm Code Team</span>
              </a>
              <p className="text-sm text-slate-400 leading-relaxed">
                Đội ngũ phát triển website chuyên nghiệp, tận tâm mang đến giải pháp tối ưu cho khách hàng.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-300">Liên kết</h4>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Giới thiệu", href: "#about" },
                  { label: "Dịch vụ", href: "#services" },
                  { label: "Dự án", href: "#projects" },
                  { label: "Liên hệ", href: "#contact" },
                ].map((link) => (
                  <a key={link.href} href={link.href} className="text-sm text-slate-400 hover:text-indigo-400 transition-colors w-fit hover:translate-x-1 transform transition-transform duration-200">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-5">
              <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-300">Dịch vụ</h4>
              <div className="flex flex-col gap-3">
                {["Website Bán Hàng", "Website Doanh Nghiệp", "Landing Page", "SEO & Marketing"].map((s) => (
                  <span key={s} className="text-sm text-slate-400">{s}</span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-5">
              <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-300">Cập nhật</h4>
              <p className="text-sm text-slate-400">Đăng ký nhận tin tức mới nhất.</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email của bạn"
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-indigo-500 h-10 rounded-xl flex-1"
                />
                <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 px-5 h-10 rounded-xl shrink-0 shadow-lg shadow-indigo-500/20 cursor-pointer">
                  Gửi
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2025 Tiệm Code Team. All rights reserved.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z", vb: "0 0 16 16" },
                { icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", vb: "0 0 24 24" },
                { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z", vb: "0 0 24 24" },
              ].map((social, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-violet-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20">
                  <svg className="w-4 h-4" viewBox={social.vb} fill="currentColor"><path d={social.icon} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
