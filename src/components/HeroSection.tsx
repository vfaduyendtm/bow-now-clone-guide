import { Button } from "@/components/ui/button";
import dashboardImage from "@/assets/dashboard-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background/95 to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              ⚡ #1 CRM và Marketing Automation hàng đầu
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
                Tăng trưởng
                <span className="text-primary block">doanh số B2B</span>
                với BOW-NOW
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Hệ thống CRM và Marketing Automation all-in-one giúp doanh nghiệp 
                B2B tự động hóa quy trình bán hàng, nuôi dưỡng khách hàng tiềm năng 
                và tăng tỷ lệ chuyển đổi lên đến 300%.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Dùng thử miễn phí ngay
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Xem Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Doanh nghiệp tin dùng</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">300%</div>
                <div className="text-sm text-muted-foreground">Tăng trưởng doanh số</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Hỗ trợ</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm">
              <img 
                src={dashboardImage} 
                alt="BOW-NOW Dashboard Interface showing B2B CRM and Marketing Automation features"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;