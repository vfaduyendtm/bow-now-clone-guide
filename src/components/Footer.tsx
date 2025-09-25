import logoWhiteNew from "@/assets/logo-bownow-white-2.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logoWhiteNew} 
                alt="BowNow by CloudCIRCUS" 
                className="h-10"
              />
            </div>
            <p className="text-background/70 leading-relaxed">
              CRM Marketing Automation hàng đầu cho doanh nghiệp B2B tại Việt Nam.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Sản phẩm</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">BowNow là gì?</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Thế mạnh của BowNow</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Hỗ trợ khách hàng</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Template ABM</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Tài nguyên</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Hội thảo & Sự kiện</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Tham khảo thêm</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Liên hệ</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Hỗ trợ khách hàng</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Đăng ký tư vấn</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Thông tin liên hệ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2024 BowNow Vietnam. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;