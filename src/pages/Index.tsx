
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Target, Mail, Eye, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            المدرب فاضل المبارك
          </h1>
          <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            مدرب أدوات الذكاء الاصطناعي و برامج أوفس365 ولكثير من المنصات التعليمية واستراتيجيات التدريس وكل مايتعلق بالتقنية والتعليم
          </p>
          <div className="w-32 h-1 bg-primary mx-auto rounded-full mb-12"></div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/training-request">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <BookOpen className="w-5 h-5 ml-2" />
                اطلب برنامجك التدريبي الآن
              </Button>
            </Link>
            
            <Link to="/view-requests">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Eye className="w-5 h-5 ml-2" />
                عرض الطلبات المرسلة
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About the Trainer Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="relative">
                <img 
                  src="/lovable-uploads/e9816855-cfa2-4c49-8523-7d8622fcbd1f.png" 
                  alt="المدرب فاضل المبارك"
                  className="w-40 h-40 rounded-full object-cover shadow-2xl mx-auto border-4 border-background"
                  style={{ width: '160px', height: '160px' }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </div>
            
            <div className="lg:w-2/3 text-center lg:text-right">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                عن المدرب
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                مدرب متخصص في أدوات الذكاء الاصطناعي وبرامج أوفس365 والمنصات التعليمية الحديثة. 
                أسعى لتقديم تدريب عالي الجودة يواكب أحدث التطورات التقنية في مجال التعليم والتدريب.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                خبرة واسعة في استراتيجيات التدريس الحديثة والتعلم النشط، مع التركيز على دمج التقنية 
                في العملية التعليمية لتحقيق أفضل النتائج للمتدربين.
              </p>
              <Link to="/training-request">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  احجز تدريبك الآن
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            خدماتنا التدريبية
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">استراتيجيات التدريس</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  برامج متخصصة في استراتيجيات التدريس الحديث والتعلم النشط بما يتناسب مع مهارات القرن21
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">التطوير المهني</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  دورات مصممة لتنمية المهارات المهنية والشخصية لجميع مستويات الموظفين
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">التدريب المخصص</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  برامج تدريبية تقنية لكل مايتعلق بالمنصات التعليمية والذكاء الاصطناعي وأدوات أوفس365
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            ابدأ رحلتك التدريبية معنا
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            نحن هنا لمساعدتك في تحقيق أهدافك التدريبية والمهنية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://x.com/Fnar9595" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 ml-2" />
                تابعني على تويتر
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://fnar-blog-archive.lovable.app/#contact" target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5 ml-2" />
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
