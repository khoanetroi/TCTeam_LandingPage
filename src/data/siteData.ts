export interface Project {
  id: string;
  title: string;
  desc: string;
  fullDesc: string;
  year: string;
  client: string;
  image: string;
  tag: string;
  link: string;
  features: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  fullDesc: string;
  features: string[];
  gradient: string;
  lightGradient: string;
  iconColor: string;
  price?: string;
}

export const projects: Project[] = [
  {
    id: "telectric",
    title: "Telectric",
    desc: "Website giới thiệu sản phẩm thiết bị điện công nghiệp, tối ưu hóa trải nghiệm người dùng và SEO.",
    fullDesc: "Dự án thiết kế website cho Telectric — đơn vị chuyên cung cấp thiết bị điện công nghiệp. Website được xây dựng với giao diện chuyên nghiệp, tối ưu SEO và tốc độ tải trang, giúp doanh nghiệp tiếp cận khách hàng hiệu quả hơn trên nền tảng trực tuyến.",
    year: "2026",
    client: "Telectric",
    image: "/banner.png",
    tag: "Doanh nghiệp",
    link: "https://telectric.vn",
    features: ["Giao diện responsive", "Tối ưu SEO", "Quản lý sản phẩm", "Tích hợp liên hệ nhanh"],
  },
  {
    id: "quan-ly-vat-tu",
    title: "Hệ thống quản lý vật tư",
    desc: "Nền tảng quản lý kho bãi và vật tư thông minh cho doanh nghiệp xây dựng.",
    fullDesc: "Hệ thống web app quản lý vật tư toàn diện, hỗ trợ theo dõi nhập xuất kho, quản lý tồn kho theo thời gian thực, và báo cáo thống kê chi tiết. Được thiết kế riêng cho ngành xây dựng với giao diện trực quan, dễ sử dụng.",
    year: "2026",
    client: "Việt Tín",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tag: "Nền tảng",
    link: "#",
    features: ["Dashboard thống kê", "Quản lý nhập/xuất kho", "Báo cáo tự động", "Phân quyền người dùng"],
  },
  {
    id: "chatbot-ai-school",
    title: "ChatBot AI School",
    desc: "Hệ thống hỗ trợ học tập và tuyển sinh dựa trên trí tuệ nhân tạo cho các trường đại học.",
    fullDesc: "Chatbot AI tích hợp vào website trường học, hỗ trợ tư vấn tuyển sinh 24/7, trả lời câu hỏi thường gặp, và hướng dẫn quy trình đăng ký. Sử dụng công nghệ xử lý ngôn ngữ tự nhiên để hiểu và phản hồi chính xác.",
    year: "2026",
    client: "University Client",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    tag: "AI",
    link: "#",
    features: ["Tư vấn tự động 24/7", "Xử lý ngôn ngữ tự nhiên", "Tích hợp dễ dàng", "Dashboard phân tích"],
  },
  {
    id: "mabanol",
    title: "Mabanol Việt Nam",
    desc: "Website thương mại điện tử chuyên cung cấp dầu nhớt cao cấp từ Đức.",
    fullDesc: "Website e-commerce cho Mabanol Việt Nam — nhà phân phối dầu nhớt cao cấp từ Đức. Tích hợp hệ thống đặt hàng trực tuyến, quản lý sản phẩm, và thanh toán an toàn. Giao diện sang trọng phù hợp với định vị thương hiệu cao cấp.",
    year: "2022",
    client: "Mabanol",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tag: "Doanh nghiệp",
    link: "#",
    features: ["Đặt hàng online", "Thanh toán an toàn", "Quản lý sản phẩm", "Giao diện cao cấp"],
  },
  {
    id: "bat-dong-san-abc",
    title: "Bất Động Sản ABC",
    desc: "Trang đích giới thiệu dự án căn hộ cao cấp với tích hợp bản đồ 360 độ.",
    fullDesc: "Landing page cao cấp cho dự án bất động sản ABC. Thiết kế ấn tượng với hiệu ứng parallax, tích hợp bản đồ 360 độ giúp khách hàng trải nghiệm không gian sống trước khi đến thăm thực tế. Tối ưu tỷ lệ chuyển đổi với form đăng ký tư vấn.",
    year: "2024",
    client: "ABC Real Estate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    tag: "Landing Page",
    link: "#",
    features: ["Hiệu ứng parallax", "Bản đồ 360°", "Form tư vấn", "Tối ưu chuyển đổi"],
  },
];

export const services: Service[] = [
  {
    id: "website-ban-hang",
    number: "01",
    title: "Thiết kế Website Bán Hàng",
    subtitle: "Giúp bán hàng dễ dàng và hiệu quả.",
    fullDesc: "Chúng tôi thiết kế website bán hàng chuyên nghiệp, giúp doanh nghiệp tiếp cận khách hàng và tăng doanh thu trực tuyến. Giao diện thân thiện, tích hợp đầy đủ công cụ quản lý bán hàng và thanh toán an toàn.",
    features: [
      "Giao diện thân thiện, dễ điều hướng.",
      "Tích hợp giỏ hàng và thanh toán trực tuyến an toàn.",
      "Quản lý nội dung dễ dàng với CMS.",
      "SEO tối ưu hóa, tăng khả năng xuất hiện trên tìm kiếm.",
      "Tích hợp công cụ quản lý bán hàng, kho hàng.",
      "Tư vấn và hỗ trợ 24/7.",
    ],
    gradient: "from-emerald-500 to-teal-500",
    lightGradient: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-500",
  },
  {
    id: "website-doanh-nghiep",
    number: "02",
    title: "Thiết kế Website Doanh Nghiệp",
    subtitle: "Xây dựng uy tín, thương hiệu cho doanh nghiệp.",
    fullDesc: "Website doanh nghiệp là bộ mặt trực tuyến của công ty bạn. Chúng tôi thiết kế giao diện chuyên nghiệp, phù hợp thương hiệu, giúp doanh nghiệp tạo ấn tượng mạnh mẽ với khách hàng và đối tác.",
    features: [
      "Giao diện chuyên nghiệp, phù hợp thương hiệu.",
      "Tối ưu hóa cho mọi thiết bị.",
      "Chức năng giới thiệu công ty, dịch vụ, tin tức.",
      "Tích hợp các công cụ tương tác khách hàng.",
      "Hỗ trợ SEO, nâng cao vị thế doanh nghiệp.",
      "Hỗ trợ liên kết mạng xã hội.",
    ],
    gradient: "from-emerald-500 to-teal-500",
    lightGradient: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-500",
  },
  {
    id: "landing-page",
    number: "03",
    title: "Landing Page",
    subtitle: "Trang đích chuyên nghiệp, tăng chuyển đổi.",
    fullDesc: "Landing page tập trung vào mục tiêu chuyển đổi, giúp bạn thu thập thông tin khách hàng tiềm năng hiệu quả. Thiết kế tối ưu tốc độ, responsive trên mọi thiết bị, và tích hợp đầy đủ công cụ tracking.",
    features: [
      "Thiết kế tập trung vào mục tiêu chuyển đổi.",
      "Tối ưu tốc độ tải trang nhanh chóng.",
      "Tích hợp form thu thập thông tin khách hàng.",
      "Responsive trên mọi thiết bị.",
      "Hỗ trợ Google Analytics và tracking.",
      "A/B testing để tối ưu hiệu suất.",
    ],
    gradient: "from-emerald-500 to-teal-500",
    lightGradient: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-500",
  },
];
