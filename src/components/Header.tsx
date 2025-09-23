import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-foreground">BowNow</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              BowNow là gì?
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Tính năng
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Chi phí
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cảm nhận khách hàng
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Tài liệu
            </a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Đăng nhập
          </Button>
          <Button variant="hero" size="sm">
            Dùng thử
          </Button>
          <Button variant="outline" size="sm">
            Hội thảo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;