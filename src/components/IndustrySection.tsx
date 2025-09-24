import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const industries = [
  {
    title: "Education & Training",
    description: "Giải pháp CRM chuyên biệt cho các tổ chức giáo dục, trung tâm đào tạo và e-learning platforms.",
    icon: "🎓",
    color: "from-orange-500/20 to-orange-600/20",
    features: [
      "Student lifecycle management",
      "Automated follow-up sequences", 
      "Course recommendation engine",
      "Parent-student communication tools"
    ]
  },
  {
    title: "Manufacturing & Industrial",
    description: "Tối ưu hóa sales process cho các doanh nghiệp sản xuất, nhà máy và công ty công nghiệp với B2B complex sales.",
    icon: "🏭", 
    color: "from-blue-500/20 to-blue-600/20",
    features: [
      "Quote-based lead nurturing",
      "Proposal automation system",
      "Vendor relationship management", 
      "Technical documentation tracking"
    ]
  },
  {
    title: "E-commerce & Retail",
    description: "Tăng conversion rate và customer retention cho các business online, retail chains và marketplace sellers.",
    icon: "🛍️",
    color: "from-pink-500/20 to-pink-600/20", 
    features: [
      "Abandoned cart recovery",
      "Product recommendation AI",
      "Inventory-based marketing",
      "Customer lifetime value optimization"
    ]
  }
];

const IndustrySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Giải pháp theo ngành
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BOW-NOW được tối ưu hóa cho từng ngành với features và workflow chuyên biệt
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${industry.color}`} />
              <CardHeader className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <CardTitle className="text-xl mb-2">{industry.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {industry.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-primary">Tính năng chính:</h4>
                  <ul className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Xem case study →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;