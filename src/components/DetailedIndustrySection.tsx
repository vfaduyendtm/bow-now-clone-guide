import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const industries = [
  {
    title: "Bất động sản & Xây dựng",
    description: "Quản lý pipeline dự án dài hạn, nurture prospects qua multiple touchpoints, track từng giai đoạn decision-making.",
    icon: "🏗️",
    color: "from-blue-500/20 to-blue-600/20",
    features: [
      "Lead scoring cho high-value prospects",
      "Automated follow-up sequences", 
      "Project milestone tracking"
    ]
  },
  {
    title: "Technology & Software",
    description: "Product-led growth với behavior tracking, trial-to-paid conversion optimization, customer health scoring.",
    icon: "💻", 
    color: "from-purple-500/20 to-purple-600/20",
    features: [
      "Usage-based lead scoring",
      "Freemium conversion funnels",
      "Technical integration tracking"
    ]
  },
  {
    title: "Healthcare & Medical",
    description: "Compliance-ready workflows, patient referral tracking, medical equipment sales automation với HIPAA compliance.",
    icon: "🏥",
    color: "from-green-500/20 to-green-600/20", 
    features: [
      "HIPAA-compliant communications",
      "Medical professional targeting",
      "Regulatory compliance tracking"
    ]
  },
  {
    title: "Education & Training",
    description: "Student recruitment automation, course completion tracking, alumni relationship management cho educational institutions.",
    icon: "🎓",
    color: "from-orange-500/20 to-orange-600/20",
    features: [
      "Student journey mapping",
      "Enrollment funnel optimization", 
      "Alumni engagement automation"
    ]
  },
  {
    title: "Manufacturing & Industrial",
    description: "Complex B2B sales cycles, distributor relationship management, technical specification tracking cho industrial clients.",
    icon: "🏭", 
    color: "from-gray-500/20 to-gray-600/20",
    features: [
      "Long sales cycle management",
      "Technical specification matching",
      "Distributor portal integration"
    ]
  },
  {
    title: "E-commerce & Retail",
    description: "B2B wholesale automation, retailer onboarding, inventory-based marketing cho wholesale businesses.",
    icon: "🛍️",
    color: "from-pink-500/20 to-pink-600/20", 
    features: [
      "Wholesale customer segmentation",
      "Inventory-driven campaigns",
      "Retailer performance tracking"
    ]
  }
];

const DetailedIndustrySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">🎯 Giải pháp theo ngành</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Được tối ưu cho mọi ngành nghề B2B
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Mỗi ngành có những thách thức riêng. BOW-NOW cung cấp templates và workflows được thiết kế riêng cho từng vertical, 
            giúp triển khai nhanh và hiệu quả ngay từ ngày đầu.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${industry.color}`} />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{industry.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {industry.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-primary">Tính năng chính:</h4>
                  <ul className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Xem case study →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Khám phá thêm 50+ tính năng khác trong bản demo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Xem demo chi tiết
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Tải brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedIndustrySection;