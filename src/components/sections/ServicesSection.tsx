import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Thiết kế Website Bán Hàng",
    subtitle: "Giúp bán hàng dễ dàng và hiệu quả.",
    features: [
      "Giao diện thân thiện, dễ điều hướng.",
      "Tích hợp giỏ hàng và thanh toán trực tuyến an toàn.",
      "Quản lý nội dung dễ dàng với CMS.",
      "SEO tối ưu hóa, tăng khả năng xuất hiện trên tìm kiếm.",
      "Tích hợp công cụ quản lý bán hàng, kho hàng.",
      "Tư vấn và hỗ trợ 24/7.",
    ],
    gradient: "from-indigo-500 to-blue-500",
    lightGradient: "from-indigo-50 to-blue-50",
    iconColor: "text-indigo-500",
  },
  {
    number: "02",
    title: "Thiết kế Website Doanh Nghiệp",
    subtitle: "Xây dựng uy tín, thương hiệu cho doanh nghiệp.",
    features: [
      "Giao diện chuyên nghiệp, phù hợp thương hiệu.",
      "Tối ưu hóa cho mọi thiết bị.",
      "Chức năng giới thiệu công ty, dịch vụ, tin tức.",
      "Tích hợp các công cụ tương tác khách hàng.",
      "Hỗ trợ SEO, nâng cao vị thế doanh nghiệp.",
      "Hỗ trợ liên kết mạng xã hội.",
    ],
    gradient: "from-violet-500 to-purple-500",
    lightGradient: "from-violet-50 to-purple-50",
    iconColor: "text-violet-500",
  },
  {
    number: "03",
    title: "Landing Page",
    subtitle: "Trang đích chuyên nghiệp, tăng chuyển đổi.",
    features: [
      "Thiết kế tập trung vào mục tiêu chuyển đổi.",
      "Tối ưu tốc độ tải trang nhanh chóng.",
      "Tích hợp form thu thập thông tin khách hàng.",
      "Responsive trên mọi thiết bị.",
      "Hỗ trợ Google Analytics và tracking.",
      "A/B testing để tối ưu hiệu suất.",
    ],
    gradient: "from-pink-500 to-rose-500",
    lightGradient: "from-pink-50 to-rose-50",
    iconColor: "text-pink-500",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">Dịch vụ</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Dịch vụ cung cấp
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Các giải pháp website chuyên nghiệp, phù hợp với mọi nhu cầu kinh doanh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Top gradient accent */}
              <div className={`h-1.5 bg-gradient-to-r ${service.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

              <div className="p-8">
                {/* Number */}
                <span className={`font-display text-7xl font-black bg-gradient-to-br ${service.lightGradient} text-gradient opacity-80`}>
                  {service.number}
                </span>

                <div className="mt-4 mb-6">
                  <h3 className="font-bold text-xl text-slate-900 leading-tight">{service.title}</h3>
                  <p className="text-sm text-slate-500 mt-2">{service.subtitle}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 mb-6"></div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className={`w-4 h-4 ${service.iconColor} mt-0.5 shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className={`w-full rounded-xl border-slate-200 hover:border-transparent hover:bg-gradient-to-r ${service.gradient} hover:text-white font-semibold transition-all duration-300 hover:shadow-lg cursor-pointer`}
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
