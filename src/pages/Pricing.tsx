import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "Miễn phí mãi mãi",
      description: "Dành cho doanh nghiệp nhỏ mới bắt đầu",
      features: [
        "Tối đa 1,000 contacts",
        "Email marketing cơ bản",
        "Lead tracking",
        "Báo cáo cơ bản",
        "Hỗ trợ email"
      ],
      isPopular: false,
      ctaText: "Bắt đầu miễn phí"
    },
    {
      name: "Professional",
      price: "99",
      period: "USD/tháng",
      description: "Dành cho doanh nghiệp đang phát triển",
      features: [
        "Tối đa 10,000 contacts",
        "Marketing automation",
        "Lead scoring",
        "Báo cáo nâng cao",
        "Integration với CRM",
        "Hỗ trợ điện thoại",
        "Đào tạo sử dụng"
      ],
      isPopular: true,
      ctaText: "Dùng thử 14 ngày"
    },
    {
      name: "Enterprise",
      price: "Liên hệ",
      period: "Tùy chỉnh",
      description: "Dành cho doanh nghiệp lớn",
      features: [
        "Unlimited contacts",
        "Advanced automation",
        "Custom integrations",
        "Dedicated account manager",
        "Premium support 24/7",
        "Custom training",
        "API access",
        "White-label options"
      ],
      isPopular: false,
      ctaText: "Liên hệ tư vấn"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">Chi phí</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chọn gói phù hợp với nhu cầu và quy mô doanh nghiệp của bạn. 
              Bắt đầu miễn phí, nâng cấp khi cần thiết.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`shadow-lg relative ${
                    plan.isPopular 
                      ? 'border-2 border-primary scale-105 bg-primary/5' 
                      : 'border-0 bg-card/50'
                  } backdrop-blur-sm`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Phổ biến nhất
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-primary">
                        {plan.price === "Liên hệ" ? plan.price : `$${plan.price}`}
                      </div>
                      <div className="text-muted-foreground">{plan.period}</div>
                    </div>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.isPopular ? "hero" : "outline"} 
                      className="w-full"
                      size="lg"
                    >
                      {plan.ctaText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Câu hỏi thường gặp
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Có thể hủy gói trả phí bất cứ lúc nào không?</h3>
                  <p className="text-muted-foreground">
                    Có, bạn có thể hủy gói trả phí bất cứ lúc nào mà không phát sinh thêm chi phí. 
                    Dữ liệu của bạn sẽ được bảo lưu trong 30 ngày.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Có hỗ trợ tiếng Việt không?</h3>
                  <p className="text-muted-foreground">
                    Có, chúng tôi cung cấp hỗ trợ khách hàng bằng tiếng Việt 24/7 qua email, 
                    chat và điện thoại cho tất cả các gói trả phí.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Có thể nâng cấp hoặc hạ cấp gói bất cứ lúc nào không?</h3>
                  <p className="text-muted-foreground">
                    Có, bạn có thể thay đổi gói dịch vụ bất cứ lúc nào. Phí sẽ được tính theo tỷ lệ 
                    cho thời gian sử dụng thực tế.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/95 to-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Bắt đầu ngay hôm nay</h2>
            <p className="text-xl mb-8 opacity-90">
              Không cần thẻ tín dụng. Hủy bất cứ lúc nào.
            </p>
            <Button variant="secondary" size="lg" className="text-lg px-12 py-6">
              Dùng thử miễn phí
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;