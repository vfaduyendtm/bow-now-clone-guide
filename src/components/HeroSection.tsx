import { Button } from "@/components/ui/button";
import dashboardImage from "@/assets/dashboard-mockup.png";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                CRM cho doanh nghiệp B2B
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Marketing Automation Tool
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  BowNow
                </h2>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Giúp doanh nghiệp có được thành quả kinh doanh xuất sắc với CRM đơn giản cùng sự hỗ trợ 1 to 1 của chuyên viên BowNow.
              </p>
            </div>
            
            <div className="space-y-6">
              <Button variant="hero" size="lg" className="text-lg px-12 py-6">
                Dùng thử
              </Button>
              
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/90"></div>
                    <div className="relative z-10 text-accent-foreground font-bold text-sm">
                      11K+
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent opacity-20 rounded-full"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-accent opacity-30 rounded-full"></div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-xl">11,000+</div>
                    <div className="text-sm text-muted-foreground">doanh nghiệp<br />sử dụng</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/90"></div>
                    <div className="relative z-10 text-accent-foreground font-bold text-sm">
                      98%
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent opacity-20 rounded-full"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-accent opacity-30 rounded-full"></div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-xl">Tỷ lệ</div>
                    <div className="text-sm text-muted-foreground">dùng tiếp<br />98.4%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={dashboardImage} 
                alt="BowNow Dashboard Interface"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;