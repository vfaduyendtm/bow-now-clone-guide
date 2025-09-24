import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SuccessStorySection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">💼 Success Story</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            "ROI 400% trong 6 tháng với BOW-NOW"
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Tech Solutions Corp đã tăng conversion rate từ 2% lên 12% và giảm 60% thời gian sales cycle 
            nhờ automation workflows và predictive lead scoring của BOW-NOW.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                400%
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">ROI</div>
              <div className="text-sm text-muted-foreground">Return on Investment</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                12%
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">Conversion</div>
              <div className="text-sm text-muted-foreground">Từ 2% lên 12%</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                -60%
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">Sales Cycle</div>
              <div className="text-sm text-muted-foreground">Giảm thời gian bán hàng</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8">
            Đọc case study đầy đủ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStorySection;