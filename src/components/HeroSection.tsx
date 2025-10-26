import { Button } from "@/components/ui/button";
import dashboardImage from "@/assets/dashboard-bownow.png";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background/95 to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium">
              CRM cho doanh nghiệp B2B
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
                Marketing Automation Tool
                <span className="text-red-600 block">BowNow</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Giúp doanh nghiệp có được thành quả kinh doanh xuất sắc với CRM đơn giản cùng sự hỗ trợ 1 to 1 của chuyên viên BowNow. 
                Doanh nghiệp có thể bắt đầu sử dụng BowNow với giá từ 0 đồng mà không gặp bất kỳ khó khăn nào về cài đặt.
              </p>
            </div>
            
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full inline-block">
                  <div className="text-2xl font-bold">11,000+</div>
                </div>
                <div className="text-sm text-muted-foreground mt-2">doanh nghiệp sử dụng</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full inline-block">
                  <div className="text-2xl font-bold">98.4%</div>
                </div>
                <div className="text-sm text-muted-foreground mt-2">Tỷ lệ dùng tiếp</div>
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