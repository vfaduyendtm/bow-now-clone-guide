import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Tự động trích xuất khách hàng \"nóng\"",
    description: "BowNow tự động theo dõi hành vi truy cập và trích xuất những khách hàng có mức độ quan tâm cao.",
    icon: "🎯"
  },
  {
    title: "Hỗ trợ quá trình Sales", 
    description: "Cung cấp thông tin chi tiết về khách hàng để team sales có thể tiếp cận hiệu quả hơn.",
    icon: "👥"
  },
  {
    title: "Phân tích thông tin doanh nghiệp",
    description: "Phân tích sâu về thông tin và nhu cầu của các doanh nghiệp khách hàng tiềm năng.",
    icon: "📊"
  },
  {
    title: "Phân tích thông tin khách hàng",
    description: "Thu thập và phân tích hành vi của từng khách hàng cá nhân để cá nhân hóa trải nghiệm.",
    icon: "🌐"
  },
  {
    title: "Tạo form",
    description: "Tạo các form thu thập thông tin khách hàng một cách dễ dàng và tích hợp vào website.",
    icon: "📝"
  },
  {
    title: "Email Marketing",
    description: "Gửi email marketing tự động để nuôi dưỡng khách hàng tiềm năng và duy trì mối quan hệ.",
    icon: "📧"
  },
  {
    title: "Lập đồ thị",
    description: "Tạo báo cáo và biểu đồ trực quan để theo dõi hiệu quả các chiến dịch marketing.",
    icon: "📈"
  },
  {
    title: "Bảo vệ quyền riêng tư",
    description: "Tuân thủ các quy định về bảo mật dữ liệu và bảo vệ thông tin khách hàng một cách tốt nhất.",
    icon: "🛡️"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Tính năng chính
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Giới thiệu các tính năng chính của BowNow để giúp doanh nghiệp B2B tăng trưởng hiệu quả
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;