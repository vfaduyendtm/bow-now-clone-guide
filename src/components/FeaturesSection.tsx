import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "CRM cho doanh nghiệp B2B là gì?",
    description: "Giúp doanh nghiệp có được thành quả kinh doanh xuất sắc với CRM đơn giản cùng sự hỗ trợ 1 to 1 của chuyên viên BowNow.",
    icon: "📊"
  },
  {
    title: "Marketing Automation",
    description: "Tự động hóa quy trình marketing và chăm sóc khách hàng tiềm năng một cách hiệu quả.",
    icon: "🤖"
  },
  {
    title: "Lead Management",
    description: "Quản lý và theo dõi khách hàng tiềm năng từ lúc tiếp cận đến khi chuyển đổi thành khách hàng.",
    icon: "🎯"
  },
  {
    title: "Analytics & Reports",
    description: "Báo cáo chi tiết về hiệu quả marketing và chuyển đổi khách hàng với dashboard trực quan.",
    icon: "📈"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            CRM cho doanh nghiệp B2B là gì?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Doanh nghiệp có thể bật đầu sử dụng BowNow với giá từ 0 đồng mà không cần số thẻ tín dụng.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;