import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Lead Scoring & Segmentation",
    description: "Tự động phân điểm và phân loại khách hàng tiềm năng dựa trên hành vi, demographics và engagement để tối ưu hóa conversion.",
    icon: "🎯"
  },
  {
    title: "Sales Automation", 
    description: "Tự động hóa quy trình bán hàng từ follow-up đến closing, tăng hiệu quả sales team lên 300%.",
    icon: "⚡"
  },
  {
    title: "Multichannel Communication",
    description: "Kết nối khách hàng qua email, SMS, social media, chatbot với personalized messaging theo từng segment.",
    icon: "💬"
  },
  {
    title: "Predictive Analytics",
    description: "Dự đoán xu hướng mua hàng, churn risk và lifetime value với AI-powered analytics để đưa ra quyết định thông minh.",
    icon: "🔮"
  },
  {
    title: "Báo cáo & Compliance",
    description: "Tuân thủ GDPR, CCPA và các quy định về dữ liệu cá nhân với báo cáo compliance tự động và audit trail.",
    icon: "📋"
  },
  {
    title: "Real-time Notifications",
    description: "Thông báo tức thời về hot leads, deal updates và customer activities qua mobile app, email hoặc Slack.",
    icon: "🔔"
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
            Giải phương toàn diện cho doanh nghiệp B2B với AI-powered automation và analytics
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