import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">BowNow là gì?</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              BowNow là giải pháp CRM Marketing Automation hàng đầu được thiết kế đặc biệt cho doanh nghiệp B2B, 
              giúp tự động hóa quy trình marketing và chăm sóc khách hàng một cách hiệu quả.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-4">Lead Management</h3>
                  <p className="text-muted-foreground">
                    Quản lý và theo dõi khách hàng tiềm năng từ lúc tiếp cận đến khi chuyển đổi thành khách hàng thực sự.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-bold mb-4">Marketing Automation</h3>
                  <p className="text-muted-foreground">
                    Tự động hóa email marketing, nurturing leads và các chiến dịch marketing phức tạp.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-4">Analytics & Reports</h3>
                  <p className="text-muted-foreground">
                    Báo cáo chi tiết về hiệu quả marketing và ROI với dashboard trực quan, dễ hiểu.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🔗</div>
                  <h3 className="text-xl font-bold mb-4">Integration</h3>
                  <p className="text-muted-foreground">
                    Tích hợp dễ dàng với các công cụ marketing và CRM hiện có của doanh nghiệp.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-bold mb-4">Mobile Friendly</h3>
                  <p className="text-muted-foreground">
                    Giao diện responsive, tối ưu cho mọi thiết bị từ desktop đến mobile.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold mb-4">Security</h3>
                  <p className="text-muted-foreground">
                    Bảo mật cao với mã hóa SSL và tuân thủ các tiêu chuẩn bảo mật quốc tế.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/95 to-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Sẵn sàng bắt đầu?</h2>
            <p className="text-xl mb-8 opacity-90">
              Trải nghiệm BowNow miễn phí ngay hôm nay
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

export default About;