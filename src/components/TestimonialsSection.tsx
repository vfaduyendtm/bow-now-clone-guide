import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    quote: "BOW-NOW đã thay đổi hoàn toàn cách chúng tôi approach B2B sales. Lead scoring automation giúp team tập trung vào prospects có value cao nhất. Conversion rate tăng từ 3% lên 18% trong 8 tháng.",
    name: "Nguyễn Minh Tú",
    position: "Sales Director",
    company: "TechViet Solutions",
    avatar: "MT",
    metric: "+500% ROI",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    quote: "Implementation cực kỳ smooth. Từ demo đến go-live chỉ mất 2 tuần. Support team rất professional, training đầy đủ cho cả team. Giờ chúng tôi track được mọi touchpoint với clients.",
    name: "Lê Thành Đạt",
    position: "Marketing Manager", 
    company: "Green Building Corp",
    avatar: "LTD",
    metric: "2 weeks setup",
    color: "from-green-500/20 to-green-600/20"
  },
  {
    quote: "Dashboard analytics của BOW-NOW cung cấp insights mà trước đây chúng tôi không thể có được. Predictive analytics giúp forecast pipeline chính xác 95%, planning budget dễ dàng hơn nhiều.",
    name: "Trần Hương Ly",
    position: "VP Sales",
    company: "MedTech Vietnam", 
    avatar: "THL",
    metric: "95% accuracy",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    quote: "Multi-channel automation tuyệt vời. Customers được nurture qua email, SMS, và social media một cách seamless. Customer satisfaction tăng 40% vì communication consistent và personalized.",
    name: "Phạm Quang Huy",
    position: "Customer Success",
    company: "EduPro Platform",
    avatar: "PQH", 
    metric: "+40% satisfaction",
    color: "from-orange-500/20 to-orange-600/20"
  },
  {
    quote: "ROI trong 4 tháng đầu đã vượt investment cost. Automation workflows giải phóng 70% thời gian manual tasks, team có thể focus vào strategic activities và relationship building.",
    name: "Vũ Thanh Hà",
    position: "CEO",
    company: "Industrial Supply Co",
    avatar: "VTH",
    metric: "4-month ROI", 
    color: "from-red-500/20 to-red-600/20"
  },
  {
    quote: "Automation workflows giải phóng 70% thời gian manual tasks, team có thể focus vào strategic activities và relationship building với khách hàng.",
    name: "Đỗ Minh Châu",
    position: "IT Director",
    company: "HealthCare Plus",
    avatar: "DMC",
    metric: "70% time saved",
    color: "from-teal-500/20 to-teal-600/20"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">🗣️ Khách hàng nói gì</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Hơn 10,000+ doanh nghiệp tin tưởng BOW-NOW
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Từ startup đến enterprise, các doanh nghiệp B2B đã đạt được kết quả ấn tượng với BOW-NOW. 
            Đây là những câu chuyện thành công có thật.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${testimonial.color}`} />
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs font-medium">
                      {testimonial.metric}
                    </Badge>
                  </div>
                  
                  <blockquote className="text-sm text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.position}</div>
                      <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;