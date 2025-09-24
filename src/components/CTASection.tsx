import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary/50 to-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Sẵn sàng tham gia cộng đồng 10,000+ doanh nghiệp thành công?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Bắt đầu free trial 14 ngày, setup trong 5 phút. 300+ integration sẵn sàng cho business của bạn.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-12 py-6 font-semibold">
              Dùng thử miễn phí ngay
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6">
              Đặt lịch demo 1-1
            </Button>
          </div>
          
          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">✓ Không cần thẻ tín dụng ✓ Setup trong 5 phút ✓ Hỗ trợ 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;