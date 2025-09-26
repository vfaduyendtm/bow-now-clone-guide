import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/95 to-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Sẵn sàng tăng trưởng với BOW-NOW?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            Đội ngũ experts của chúng tôi sẵn sàng tư vấn và setup hệ thống phù hợp cho business của bạn. 
            Liên hệ ngay để được cung cấp cơ hội tại bản cơ sở.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg" className="text-lg px-12 py-6 font-semibold">
              Gửi thông tin cho chúng tôi
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6 bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Đặt lịch demo 1-1
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;