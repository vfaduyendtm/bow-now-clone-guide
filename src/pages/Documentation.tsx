import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Documentation = () => {
  const docCategories = [
    {
      title: "Bắt đầu",
      icon: "🚀",
      docs: [
        "Hướng dẫn setup tài khoản",
        "Cài đặt đầu tiên", 
        "Import dữ liệu khách hàng",
        "Tích hợp website"
      ]
    },
    {
      title: "Lead Management",
      icon: "👥",
      docs: [
        "Quản lý danh sách leads",
        "Lead scoring system",
        "Phân loại và gắn tag",
        "Xuất báo cáo leads"
      ]
    },
    {
      title: "Email Marketing",
      icon: "📧",
      docs: [
        "Tạo email campaign",
        "Template library",
        "A/B testing emails",
        "Tracking và analytics"
      ]
    },
    {
      title: "Automation",
      icon: "⚙️",
      docs: [
        "Workflow automation",
        "Trigger và actions",
        "Lead nurturing campaigns",
        "Advanced automation"
      ]
    },
    {
      title: "Analytics",
      icon: "📊",
      docs: [
        "Dashboard overview",
        "Campaign performance",
        "ROI calculation",
        "Custom reports"
      ]
    },
    {
      title: "Integrations",
      icon: "🔗",
      docs: [
        "CRM integrations",
        "API documentation",
        "Webhooks setup",
        "Third-party tools"
      ]
    }
  ];

  const resources = [
    {
      title: "Video Tutorials",
      description: "Học qua video hướng dẫn từng bước",
      icon: "🎥",
      count: "25+ videos"
    },
    {
      title: "Webinars",
      description: "Tham gia hội thảo trực tuyến hàng tuần",
      icon: "💻",
      count: "Hàng tuần"
    },
    {
      title: "Best Practices",
      description: "Những kinh nghiệm thực tế từ chuyên gia",
      icon: "💡",
      count: "50+ guides"
    },
    {
      title: "Community",
      description: "Cộng đồng người dùng BowNow Việt Nam",
      icon: "👥",
      count: "1000+ thành viên"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">Tài liệu</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tìm kiếm hướng dẫn, tài liệu và tài nguyên để tối đa hóa hiệu quả sử dụng BowNow. 
              Từ hướng dẫn cơ bản đến advanced strategies.
            </p>
            
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Tìm kiếm tài liệu..." 
                  className="w-full px-6 py-4 text-lg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="absolute right-2 top-2" size="sm">
                  Tìm kiếm
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Danh mục tài liệu
              </h2>
              <p className="text-xl text-muted-foreground">
                Tìm hiểu từng tính năng một cách chi tiết
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category, index) => (
                <Card key={index} className="shadow-lg border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.docs.map((doc, docIndex) => (
                        <li key={docIndex}>
                          <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full flex-shrink-0"></span>
                            <span>{doc}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full mt-4">
                      Xem tất cả →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Tài nguyên học tập
              </h2>
              <p className="text-xl text-muted-foreground">
                Nhiều cách khác để học và nâng cao kỹ năng
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="text-center shadow-lg border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{resource.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <div className="text-sm text-primary font-semibold">{resource.count}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="shadow-xl border-0 bg-gradient-to-r from-primary/5 to-accent/5 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Bắt đầu trong 5 phút
                  </h2>
                  <p className="text-muted-foreground">
                    Làm theo hướng dẫn nhanh để thiết lập BowNow cho doanh nghiệp của bạn
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      1
                    </div>
                    <h3 className="font-bold mb-2">Tạo tài khoản</h3>
                    <p className="text-sm text-muted-foreground">Đăng ký miễn phí chỉ với email</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      2
                    </div>
                    <h3 className="font-bold mb-2">Import dữ liệu</h3>
                    <p className="text-sm text-muted-foreground">Tải lên danh sách khách hàng</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      3
                    </div>
                    <h3 className="font-bold mb-2">Tạo campaign</h3>
                    <p className="text-sm text-muted-foreground">Khởi chạy campaign đầu tiên</p>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button variant="hero" size="lg">
                    Bắt đầu ngay
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 bg-gradient-to-r from-primary/95 to-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Cần hỗ trợ thêm?</h2>
            <p className="text-xl mb-8 opacity-90">
              Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ bạn 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-12 py-6">
                Chat với chuyên gia
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-12 py-6 bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Gọi hotline
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;