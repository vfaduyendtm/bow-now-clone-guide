import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const featureCategories = [
    {
      title: "Lead Management",
      description: "Quản lý khách hàng tiềm năng hiệu quả",
      features: [
        "Theo dõi hành vi khách hàng trên website",
        "Phân loại và ghi điểm leads tự động",
        "Quản lý thông tin liên hệ tập trung",
        "Lịch sử tương tác đầy đủ"
      ]
    },
    {
      title: "Marketing Automation",
      description: "Tự động hóa quy trình marketing",
      features: [
        "Email marketing automation",
        "Lead nurturing campaigns",
        "Trigger-based communications",
        "Personalized content delivery"
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Báo cáo và phân tích chuyên sâu",
      features: [
        "Dashboard tổng quan trực quan",
        "Báo cáo ROI chi tiết",
        "Phân tích customer journey",
        "Export dữ liệu linh hoạt"
      ]
    },
    {
      title: "Integration",
      description: "Tích hợp với các công cụ khác",
      features: [
        "CRM integration",
        "Social media platforms",
        "Web analytics tools",
        "Email marketing platforms"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">Tính năng</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Khám phá các tính năng mạnh mẽ của BowNow được thiết kế đặc biệt 
              để tối ưu hóa quy trình marketing và bán hàng B2B của bạn.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {featureCategories.map((category, index) => (
                <Card key={index} className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{category.title}</CardTitle>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Xem demo trực tiếp
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Đặt lịch demo cá nhân để khám phá cách BowNow có thể giúp 
              doanh nghiệp của bạn tăng trưởng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-12 py-6">
                Đặt lịch demo
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-12 py-6">
                Dùng thử miễn phí
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;