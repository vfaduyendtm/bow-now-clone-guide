import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-bold text-foreground">Trang không tìm thấy</h2>
        <p className="text-xl text-muted-foreground">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
        </p>
        <Link to="/">
          <Button variant="hero" size="lg" className="mt-6">
            Quay về trang chủ
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
