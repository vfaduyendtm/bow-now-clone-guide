import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "2,900,000₫",
    period: "/tháng",
    description: "Dành cho team nhỏ mới bắt đầu với CRM",
    features: [
      "Lên đến 1,000 contacts",
      "5 users", 
      "Email automation cơ bản",
      "Lead scoring",
      "Mobile app",
      "Email & chat support",
      "Basic reporting"
    ],
    buttonText: "Bắt đầu dùng thử",
    popular: false
  },
  {
    name: "Professional", 
    price: "5,900,000₫",
    period: "/tháng",
    description: "Dành cho doanh nghiệp đang phát triển",
    features: [
      "Lên đến 10,000 contacts",
      "15 users",
      "Advanced email automation", 
      "Predictive lead scoring",
      "Sales pipeline management",
      "Advanced analytics",
      "API integrations",
      "Priority support",
      "Custom workflows"
    ],
    buttonText: "Nâng cấp ngay",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    period: "",
    description: "Giải pháp toàn diện cho tập đoàn",
    features: [
      "Unlimited contacts",
      "Unlimited users",
      "AI-powered insights", 
      "Custom integrations",
      "Dedicated account manager",
      "White-label options",
      "Advanced security",
      "SLA guarantee",
      "Custom training"
    ],
    buttonText: "Liên hệ tư vấn",
    popular: false
  }
];

const includedFeatures = [
  "Tích hợp với 100+ tools phổ biến (Salesforce, HubSpot, Slack...)",
  "GDPR & CCPA compliant, bảo mật cấp ngân hàng", 
  "Onboarding support và training miễn phí",
  "99.9% uptime SLA với infrastructure toàn cầu",
  "Không giới hạn email sends và automation triggers"
];

const whyChoose = [
  "Setup nhanh chóng trong 24 giờ",
  "ROI trung bình 300% trong năm đầu", 
  "Support team Việt Nam, hiểu business địa phương",
  "Không có phí setup hay contract ràng buộc dài hạn"
];

const savings = [
  "60% thời gian quản lý leads thủ công",
  "40% chi phí hiring thêm sales admin",
  "80% thời gian tạo báo cáo sales", 
  "90% risk mất leads do follow-up không kịp"
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">💰 Bảng giá</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Chọn gói phù hợp với quy mô của bạn
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Bắt đầu miễn phí 14 ngày, không cần thẻ tín dụng. Nâng cấp hoặc hủy bất cứ lúc nào. 
            Tất cả gói đều bao gồm implementation support và training.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-primary border-2' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Phổ biến nhất
                  </Badge>
                </div>
              )}
              {plan.name === "Enterprise" && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="outline">
                    Tùy chỉnh
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Tất cả gói đều bao gồm:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-left">
                {includedFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Tại sao chọn BOW-NOW?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-left">
                {whyChoose.map((reason, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 mt-2" />
                    {reason}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Bạn sẽ tiết kiệm được gì?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-left">
                {savings.map((saving, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 mt-2" />
                    {saving}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;