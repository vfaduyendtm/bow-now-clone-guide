const StatsSection = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Doanh nghiệp tin dùng",
      description: "Từ startup đến enterprise"
    },
    {
      number: "300%", 
      label: "Tăng trưởng doanh số",
      description: "Trung bình sau 6 tháng"
    },
    {
      number: "99.9%",
      label: "Uptime SLA", 
      description: "Đảm bảo hoạt động 24/7"
    },
    {
      number: "4.9/5",
      label: "Điểm đánh giá trung bình",
      description: "Từ 2,500+ reviews"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/95 to-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Con số ấn tượng
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Được tin tưởng bởi hàng nghìn doanh nghiệp từ startup đến enterprise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2 text-white/90">
                  {stat.label}
                </div>
                <div className="text-sm text-white/70 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;