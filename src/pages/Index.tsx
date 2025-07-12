
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Target, Mail, Eye, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen hero-gradient">
      {/* Header with Logo */}
      <header className="py-6 px-4 bg-white/80 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/eda11f6b-4189-49bf-b91b-f76814f9c3c9.png" 
              alt="أستاذ فاضل - لوقو"
              className="h-16 w-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block p-1 rounded-full primary-gradient mb-8">
            <div className="bg-white rounded-full px-6 py-2">
              <span className="text-primary font-semibold text-sm">✨ مدرب معتمد في التقنيات الحديثة</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
            المدرب <span className="primary-gradient bg-clip-text text-transparent">فاضل المبارك</span>
          </h1>
          <p className="text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            خبير في أدوات الذكاء الاصطناعي وبرامج أوفس365 والمنصات التعليمية الحديثة
            <br />
            <span className="text-primary font-semibold">نحو تعليم متطور ومواكب للعصر</span>
          </p>
          
          <div className="w-32 h-1 secondary-gradient mx-auto rounded-full mb-12 shadow-glow"></div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/training-request">
              <Button size="lg" className="btn-primary-enhanced text-lg px-8 py-6 rounded-xl">
                <BookOpen className="w-6 h-6 ml-2" />
                اطلب برنامجك التدريبي الآن
              </Button>
            </Link>
            
            <Link to="/view-requests">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5">
                <Eye className="w-6 h-6 ml-2" />
                عرض الطلبات المرسلة
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About the Trainer Section */}
      <section className="py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-1 primary-gradient rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <img 
                  src="/lovable-uploads/64705b91-73ae-4cd3-b411-1ffbfdd31c16.png" 
                  alt="المدرب فاضل المبارك"
                  className="relative w-32 h-32 rounded-full object-cover shadow-2xl mx-auto border-4 border-white"
                  style={{ width: '128px', height: '128px' }}
                />
              </div>
            </div>
            
            <div className="lg:w-2/3 text-center lg:text-right">
              <div className="inline-block secondary-gradient rounded-full px-4 py-2 mb-6">
                <span className="text-secondary-foreground font-semibold text-sm">🎓 خبير تعليمي معتمد</span>
              </div>
              
              <h2 className="text-4xl font-bold text-foreground mb-8">
                عن <span className="primary-gradient bg-clip-text text-transparent">المدرب</span>
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  مدرب متخصص في أدوات الذكاء الاصطناعي وبرامج أوفس365 والمنصات التعليمية الحديثة. 
                  أسعى لتقديم تدريب عالي الجودة يواكب أحدث التطورات التقنية في مجال التعليم والتدريب.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  خبرة واسعة في استراتيجيات التدريس الحديثة والتعلم النشط، مع التركيز على دمج التقنية 
                  في العملية التعليمية لتحقيق أفضل النتائج للمتدربين.
                </p>
              </div>
              
              <Link to="/training-request">
                <Button size="lg" className="btn-secondary-enhanced rounded-xl px-8 py-4">
                  📚 احجز تدريبك الآن
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 hero-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block secondary-gradient rounded-full px-4 py-2 mb-6">
              <span className="text-secondary-foreground font-semibold text-sm">💼 خدمات متميزة</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              خدماتنا <span className="primary-gradient bg-clip-text text-transparent">التدريبية</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نقدم برامج تدريبية شاملة ومتخصصة تلبي احتياجات العصر الرقمي
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-enhanced text-center transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 secondary-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Users className="w-10 h-10 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">استراتيجيات التدريس</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  برامج متخصصة في استراتيجيات التدريس الحديث والتعلم النشط بما يتناسب مع مهارات القرن الحادي والعشرين
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-enhanced text-center transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 primary-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Target className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">التطوير المهني</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  دورات مصممة لتنمية المهارات المهنية والشخصية لجميع مستويات الموظفين مع التركيز على الابتكار والإبداع
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-enhanced text-center transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 secondary-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <BookOpen className="w-10 h-10 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">التدريب المخصص</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  برامج تدريبية تقنية متقدمة في المنصات التعليمية والذكاء الاصطناعي وأدوات أوفس365 والتقنيات الحديثة
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white/90 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block primary-gradient rounded-full px-4 py-2 mb-8">
            <span className="text-primary-foreground font-semibold text-sm">🚀 ابدأ رحلتك معنا</span>
          </div>
          
          <h2 className="text-4xl font-bold text-foreground mb-8">
            ابدأ رحلتك <span className="secondary-gradient bg-clip-text text-transparent">التدريبية</span> معنا
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك في تحقيق أهدافك التدريبية والمهنية من خلال برامج تدريبية مبتكرة ومتطورة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="w-full sm:w-auto btn-primary-enhanced" asChild>
              <a href="https://x.com/Fnar9595" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 ml-2" />
                تابعني على تويتر
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto btn-secondary-enhanced border-2 border-secondary" asChild>
              <a href="https://fnar-blog-archive.lovable.app/#contact" target="_blank" rel="noopener noreferrer">
                <Mail className="w-6 h-6 ml-2" />
                تواصل معنا
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
