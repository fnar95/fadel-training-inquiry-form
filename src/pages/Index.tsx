import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Target, Phone, Eye } from "lucide-react";
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
            خبير في التدريب والتطوير المهني، نقدم برامج تدريبية مخصصة لتلبية احتياجاتكم
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
                <CardTitle className="text-xl">القيادة والإدارة</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  برامج متخصصة في تطوير مهارات القيادة والإدارة الفعالة للمديرين والمشرفين
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
                  برامج تدريبية مصممة خصيصاً لتلبية احتياجات مؤسستكم وأهدافكم المحددة
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
            <Link to="/training-request">
              <Button size="lg" className="w-full sm:w-auto">
                <BookOpen className="w-5 h-5 ml-2" />
                اطلب استشارة مجانية
              </Button>
            </Link>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Phone className="w-5 h-5 ml-2" />
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
