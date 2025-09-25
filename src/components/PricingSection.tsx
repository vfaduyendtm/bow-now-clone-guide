import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "BN Essential",
    price: "$200~5tr",
    period: "/tháng (HĐ 12 tháng)",
    description: "Gói cơ bản cho doanh nghiệp vừa và nhỏ",
    features: [
      "Account không giới hạn",
      "3,000 leads (+1,000 = $10/tháng)",
      "Lưu trữ nhật ký 12 tháng",
      "3 WEB liên kết",
      "10 Form WEB",
      "30,000 Page view/tháng",
      "Gửi email không giới hạn",
      "Tạo trường tùy chỉnh",
      "MiniCRM cơ bản",
      "Liên kết API",
      "BowNow Companion (Chat + Online 1to1)",
      "Audit B2B Email Marketing"
    ],
    buttonText: "Bắt đầu dùng thử",
    popular: false
  },
  {
    name: "BN Standard", 
    price: "$300~7tr5",
    period: "/tháng (HĐ 12 tháng)",
    description: "Gói tiêu chuẩn cho doanh nghiệp đang phát triển",
    features: [
      "Account không giới hạn",
      "5,000 leads (+1,000 = $10/tháng)",
      "Lưu trữ nhật ký 24 tháng",
      "WEB liên kết không giới hạn",
      "Form WEB không giới hạn",
      "50,000 Page view/tháng",
      "Gửi email không giới hạn",
      "Tạo trường tùy chỉnh",
      "MiniCRM cơ bản",
      "Liên kết API",
      "BowNow Companion (Chat + Online 1to1)",
      "Audit B2B Email Marketing"
    ],
    buttonText: "Nâng cấp ngay",
    popular: true
  },
  {
    name: "BN Premium",
    price: "$500~12tr5",
    period: "/tháng (HĐ 12 tháng)",
    description: "Gói cao cấp cho doanh nghiệp lớn",
    features: [
      "Account không giới hạn",
      "20,000 leads (+1,000 = $5/tháng)",
      "Lưu trữ nhật ký 24 tháng",
      "WEB liên kết không giới hạn",
      "Form WEB không giới hạn",
      "100,000 Page view/tháng",
      "Gửi email không giới hạn",
      "Tạo trường tùy chỉnh",
      "MiniCRM cơ bản",
      "Liên kết API",
      "BowNow Companion (Chat + Online 1to1)",
      "Audit B2B Email Marketing"
    ],
    buttonText: "Liên hệ tư vấn",
    popular: false
  }
];

const includedFeatures = [
  "Tích hợp với hệ thống CRM khác dễ dày dữ liệu Hot Lead từ BowNow qua (Sync 2 chiều)",
  "GDPR & CCPA compliant, bảo mật cấp ngân hàng", 
  "Onboarding support và training miễn phí",
  "99.9% uptime SLA với infrastructure toàn cầu",
  "Không giới hạn email sends và automation triggers",
  "*Khi vượt quá số lượng PV, mỗi 10,000 PV sẽ được tính $10 mỗi tháng"
];

const whyChoose = [
  "ROI trung bình 300% trong năm đầu", 
  "Support team Việt Nam, hiểu business địa phương",
  "Không có phí setup hay contract ràng buộc dài hạn",
  "Triển khai nhanh chóng và hiệu quả"
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