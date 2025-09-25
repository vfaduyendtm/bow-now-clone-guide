import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoBlack from "@/assets/logo-bownow-black.png";
import logoWhite from "@/assets/logo-bownow-white.png";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <img 
              src={logoBlack} 
              alt="BowNow by CloudCIRCUS" 
              className="h-10 dark:hidden"
            />
            <img 
              src={logoWhite} 
              alt="BowNow by CloudCIRCUS" 
              className="h-10 hidden dark:block"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              BowNow là gì?
            </Link>
            <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Tính năng
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Chi phí
            </Link>
            <Link to="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Cảm nhận khách hàng
            </Link>
            <Link to="/documentation" className="text-muted-foreground hover:text-foreground transition-colors">
              Tài liệu
            </Link>
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