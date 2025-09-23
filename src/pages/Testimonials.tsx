import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      position: "Giám đốc Marketing",
      company: "TechCorp Vietnam",
      content: "BowNow đã giúp chúng tôi tăng conversion rate lên 35% chỉ trong 3 tháng đầu sử dụng. Tính năng lead scoring rất hữu ích cho việc ưu tiên khách hàng tiềm năng.",
      rating: 5
    },
    {
      name: "Trần Thị B",
      position: "CEO",
      company: "Digital Solutions JSC",
      content: "Interface rất trực quan và dễ sử dụng. Team chúng tôi chỉ cần 1 tuần để làm quen hoàn toàn. Hỗ trợ khách hàng rất tận tình và chuyên nghiệp.",
      rating: 5
    },
    {
      name: "Lê Minh C",
      position: "Sales Manager",
      company: "Innovation Hub",
      content: "Báo cáo analytics của BowNow giúp chúng tôi hiểu rõ customer journey và tối ưu hóa chiến lược marketing. ROI tăng 150% so với trước đây.",
      rating: 5
    },
    {
      name: "Phạm Thu D",
      position: "Marketing Director",
      company: "StartupXYZ",
      content: "Automation workflows giúp tiết kiệm rất nhiều thời gian. Chúng tôi có thể nurture leads 24/7 mà không cần can thiệp thủ công.",
      rating: 5
    },
    {
      name: "Hoàng Văn E",
      position: "Business Development",
      company: "Enterprise Co., Ltd",
      content: "Integration với các tool hiện tại rất mượt mà. Setup nhanh chóng, không gián đoạn quy trình làm việc. Highly recommended!",
      rating: 5
    },
    {
      name: "Đỗ Thị F",
      position: "Head of Sales",
      company: "B2B Solutions",
      content: "Từ khi sử dụng BowNow, số lượng qualified leads tăng gấp đôi. Lead scoring algorithm rất chính xác, giúp sales team focus vào prospect chất lượng cao.",
      rating: 5
    }
  ];

  const stats = [
    {
      number: "11,000+",
      label: "Doanh nghiệp tin tưởng",
      icon: "🏢"
    },
    {
      number: "98.4%",
      label: "Tỷ lệ hài lòng",
      icon: "😊"
    },
    {
      number: "150%",
      label: "Tăng trưởng ROI trung bình",
      icon: "📈"
    },
    {
      number: "35%",
      label: "Tăng conversion rate",
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">Cảm nhận của khách hàng</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Khám phá những chia sẻ thật từ các doanh nghiệp đã thành công với BowNow. 
              Hàng nghìn doanh nghiệp B2B đã tin tưởng và đạt được kết quả ấn tượng.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center shadow-lg border-0 bg-primary/5">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-accent text-xl">⭐</span>
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="border-t pt-4">
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-primary">{testimonial.position}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Case Study nổi bật
              </h2>
              <p className="text-xl text-muted-foreground">
                Tìm hiểu chi tiết cách các doanh nghiệp thành công với BowNow
              </p>
            </div>
            
            <Card className="shadow-xl border-0 bg-gradient-to-r from-primary/5 to-accent/5 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      TechCorp Vietnam
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Công ty công nghệ hàng đầu với 500+ nhân viên đã tăng trưởng doanh số 200% 
                      trong 6 tháng đầu sử dụng BowNow.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span>Lead Generation:</span>
                        <span className="font-bold text-primary">+250%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Conversion Rate:</span>
                        <span className="font-bold text-primary">+180%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time to Close:</span>
                        <span className="font-bold text-primary">-40%</span>
                      </div>
                    </div>
                    <Button variant="outline">Đọc case study đầy đủ</Button>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">200%</div>
                    <div className="text-muted-foreground">Tăng trưởng doanh số</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/95 to-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Tham gia cùng 11,000+ doanh nghiệp thành công</h2>
            <p className="text-xl mb-8 opacity-90">
              Bắt đầu hành trình tăng trưởng của bạn với BowNow ngay hôm nay
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-12 py-6">
                Dùng thử miễn phí
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Liên hệ tư vấn
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;