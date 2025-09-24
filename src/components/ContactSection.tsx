import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  const contactMethods = [
    {
      title: "Khánh vị doanh nghiệp", 
      description: "Dành cho teams từ 10-50 người",
      icon: "🏢",
      contact: "sales@bow-now.vn",
      action: "Gửi email"
    },
    {
      title: "Hỗ trợ kỹ thuật",
      description: "24/7 technical support",
      icon: "🛠️", 
      contact: "support@bow-now.vn",
      action: "Tạo ticket"
    },
    {
      title: "Tư vấn giải pháp",
      description: "Free consultation cho enterprise",
      icon: "💡",
      contact: "+84 28 1234 5678", 
      action: "Gọi ngay"
    },
    {
      title: "Live chat",
      description: "Trợ giúp tức thời online",
      icon: "💬",
      contact: "Chat widget góc phải",
      action: "Bắt đầu chat"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn 24/7 qua nhiều kênh khác nhau
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardHeader>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <CardTitle className="text-lg mb-2">{method.title}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">
                  {method.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium text-sm text-primary">
                    {method.contact}
                  </p>
                  <p className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    {method.action} →
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 p-6 bg-background rounded-lg border">
          <p className="text-sm text-muted-foreground">
            <strong>Giờ làm việc:</strong> Thứ 2 - Thứ 6: 8:00 - 18:00 | Thứ 7: 8:00 - 12:00 | 
            <strong> Emergency Support:</strong> 24/7 qua hotline và live chat
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;