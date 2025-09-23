import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/95 to-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Bắt đầu với BowNow ngay hôm nay
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Trải nghiệm miễn phí CRM marketing automation hàng đầu cho doanh nghiệp B2B. 
            Không cần thẻ tín dụng, hỗ trợ 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg" className="text-lg px-12 py-6 font-semibold">
              Dùng thử miễn phí
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Tham gia hội thảo
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 pt-8 opacity-80">
            <div className="text-center">
              <div className="text-2xl font-bold">11,000+</div>
              <div className="text-sm">Doanh nghiệp tin tưởng</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98.4%</div>
              <div className="text-sm">Tỷ lệ hài lòng</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Hỗ trợ khách hàng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;