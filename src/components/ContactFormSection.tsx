import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, MessageCircle, MapPin } from "lucide-react";

const ContactFormSection = () => {
  const contactMethods = [
    {
      title: "Hotline tư vấn",
      description: "0832 048 790",
      subtitle: "Tổng đài 9:00-12:00 / 13:00-17:00 các ngày trong tuần",
      icon: Phone,
      action: "Gọi ngay",
      color: "from-red-500/20 to-red-600/20"
    },
    {
      title: "Email tư vấn", 
      description: "dtm.duyen@cloudcircus.asia",
      subtitle: "B2B CRM & Marketing Consultant",
      icon: Mail,
      action: "Gửi email",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Liên hệ Zalo",
      description: "0832.048.790",
      subtitle: "Đoàn Trần Mỹ Duyên (Ms.) - CloudCIRCUS Nhật Bản", 
      icon: MessageCircle,
      action: "Chat Zalo",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      title: "Liên hệ Telegram",
      description: "0866.777.808",
      subtitle: "Tư vấn trực tiếp với chuyên gia",
      icon: Phone,
      action: "Chat Telegram",
      color: "from-purple-500/20 to-purple-600/20"
    }
  ];

  const guarantees = [
    "Setup hoàn thành trong 24 giờ",
    "Training team miễn phí",
    "Data migration không tính phí", 
    "ROI guarantee trong 6 tháng"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">📞 Liên hệ</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Sẵn sàng tăng trưởng với BOW-NOW?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Đội ngũ experts của chúng tôi sẵn sàng tư vấn giải pháp phù hợp nhất cho business của bạn. 
            Liên hệ ngay để được demo và báo giá chi tiết.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Nhận tư vấn miễn phí</CardTitle>
              <CardDescription>
                Điền form dưới đây, chúng tôi sẽ liên hệ trong 30 phút
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Họ tên *</Label>
                  <Input id="fullName" placeholder="Nguyễn Văn A" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Số điện thoại *</Label>
                  <Input id="phone" placeholder="0123 456 789" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email công ty *</Label>
                  <Input id="email" type="email" placeholder="ten@congty.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Tên công ty *</Label>
                  <Input id="company" placeholder="Tên công ty của bạn" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="industry">Ngành nghề</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn ngành nghề" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology & Software</SelectItem>
                      <SelectItem value="healthcare">Healthcare & Medical</SelectItem>
                      <SelectItem value="education">Education & Training</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="realestate">Bất động sản</SelectItem>
                      <SelectItem value="ecommerce">E-commerce & Retail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teamSize">Quy mô team</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn quy mô" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 người</SelectItem>
                      <SelectItem value="11-50">11-50 người</SelectItem>
                      <SelectItem value="51-200">51-200 người</SelectItem>
                      <SelectItem value="200+">200+ người</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="requirements">Mô tả nhu cầu</Label>
                <Textarea 
                  id="requirements" 
                  placeholder="Chia sẻ về challenges hiện tại và mục tiêu bạn muốn đạt được..."
                  rows={4}
                />
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {guarantees.map((guarantee, idx) => (
                    <div key={idx} className="flex items-center text-sm text-primary">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {guarantee}
                    </div>
                  ))}
                </div>
                
                <Button size="lg" className="w-full">
                  Nhận tư vấn miễn phí
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Bằng việc gửi form, bạn đồng ý với điều khoản sử dụng và chính sách bảo mật
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${method.color}`} />
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{method.title}</h3>
                        <p className="text-primary font-medium">{method.description}</p>
                        <p className="text-sm text-muted-foreground">{method.subtitle}</p>
                      </div>
                      <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {method.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="border-dashed">
              <CardContent className="p-6 text-center space-y-4">
                <MapPin className="w-8 h-8 text-primary mx-auto" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Thông tin liên hệ</h3>
                  <p className="text-muted-foreground">
                    <strong>Đoàn Trần Mỹ Duyên (Ms.)</strong><br/>
                    B2B CRM & Marketing Consultant<br/>
                    CloudCIRCUS Nhật Bản<br/>
                    <span className="text-primary font-medium">📧 dtm.duyen@cloudcircus.asia</span><br/>
                    <span className="text-primary font-medium">📞 0832.048.790 | 0866.777.808</span>
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Liên hệ ngay
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;