import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Mabanol Việt Nam",
    desc: "Website giới thiệu doanh nghiệp, sản phẩm dầu nhớt",
    year: "2022",
    client: "Mabanol Việt Nam",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    tag: "Doanh nghiệp",
  },
  {
    title: "Thanh Toán Việt Tín",
    desc: "Nền tảng kết nối giữa các nhà hàng uy tín và phân phối",
    year: "2025",
    client: "Việt Tín",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    tag: "Nền tảng",
  },
  {
    title: "Shop Thời Trang Online",
    desc: "Website bán hàng thời trang với hệ thống quản lý kho",
    year: "2024",
    client: "Fashion Store",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    tag: "Bán hàng",
  },
  {
    title: "Bất Động Sản ABC",
    desc: "Landing page giới thiệu dự án bất động sản cao cấp",
    year: "2024",
    client: "ABC Real Estate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    tag: "Landing Page",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-indigo-50 to-violet-50 rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Dự án nổi bật
            </h2>
            <p className="text-slate-500 text-lg mt-4 max-w-lg">
              Một số dự án tiêu biểu mà chúng tôi đã thực hiện cho khách hàng.
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden md:inline-flex rounded-xl border-slate-200 hover:border-indigo-300 hover:text-indigo-600 font-semibold gap-2 cursor-pointer"
          >
            Xem tất cả dự án
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image with overlay */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 rounded-xl gap-2 cursor-pointer">
                    <ExternalLink className="w-4 h-4" />
                    Xem chi tiết
                  </Button>
                </div>
                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-1.5 rounded-full shadow-lg">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-500 line-clamp-2 mb-4">{project.desc}</p>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="px-2 py-1 bg-slate-50 rounded-md font-medium">{project.client}</span>
                  <span>•</span>
                  <span className="font-medium">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
