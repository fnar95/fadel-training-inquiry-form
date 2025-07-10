import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Calendar, Clock, Users, MapPin, Phone, FileText, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface TrainingRequest {
  id: string;
  name: string;
  program_name: string;
  description: string | null;
  date: string;
  time: string;
  attendees: number;
  target_audience: string;
  contact: string;
  location: string;
  notes: string | null;
  created_at: string;
}

const ViewRequests = () => {
  const [requests, setRequests] = useState<TrainingRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);

  // كلمة المرور الصحيحة - يمكنك تغييرها
  const ADMIN_PASSWORD = "admin123";

  useEffect(() => {
    if (isAuthenticated) {
      fetchRequests();
    }
  }, [isAuthenticated]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setShowPasswordError(false);
    } else {
      setShowPasswordError(true);
      setPassword("");
    }
  };

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("training_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      setRequests(data || []);
    } catch (error) {
      console.error("Error fetching requests:", error);
      toast({
        title: "حدث خطأ",
        description: "فشل في تحميل الطلبات. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ar-SA");
  };

  const formatTime = (timeString: string) => {
    const time = timeString.split(':');
    const hour = parseInt(time[0]);
    const minute = time[1];
    const period = hour >= 12 ? 'م' : 'ص';
    const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${hour12}:${minute} ${period}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="text-xl text-muted-foreground">جاري تحميل الطلبات...</div>
          </div>
        </div>
      </div>
    );
  }

  // إذا لم يتم تسجيل الدخول، عرض شاشة كلمة المرور
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20 flex items-center justify-center py-8 px-4">
        <div className="max-w-md w-full">
          <Card className="shadow-xl border-0 bg-background/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">
                منطقة المدير
              </CardTitle>
              <p className="text-muted-foreground">
                يرجى إدخال كلمة المرور للوصول إلى الطلبات
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <Input
                    type="password"
                    placeholder="كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-right"
                    required
                  />
                  {showPasswordError && (
                    <p className="text-destructive text-sm mt-2 text-right">
                      كلمة المرور غير صحيحة
                    </p>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <Button type="submit" className="flex-1">
                    دخول
                  </Button>
                  <Link to="/" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <ArrowLeft className="w-4 h-4 ml-2" />
                      إلغاء
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              طلبات البرامج التدريبية
            </h1>
            <p className="text-xl text-muted-foreground">
              عرض جميع الطلبات المرسلة
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setIsAuthenticated(false)}
            >
              <Lock className="w-4 h-4 ml-2" />
              تسجيل الخروج
            </Button>
            <Link to="/">
              <Button variant="outline" size="lg">
                <ArrowLeft className="w-4 h-4 ml-2" />
                العودة للرئيسية
              </Button>
            </Link>
          </div>
        </div>

        {requests.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                لا توجد طلبات حتى الآن
              </h3>
              <p className="text-muted-foreground mb-6">
                لم يتم إرسال أي طلبات تدريبية بعد
              </p>
              <Link to="/training-request">
                <Button>
                  <FileText className="w-4 h-4 ml-2" />
                  إرسال أول طلب
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <Card className="shadow-xl border-0 bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">
                إجمالي الطلبات: {requests.length}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-right">الاسم</TableHead>
                      <TableHead className="text-right">البرنامج</TableHead>
                      <TableHead className="text-right">التاريخ والوقت</TableHead>
                      <TableHead className="text-right">عدد الحضور</TableHead>
                      <TableHead className="text-right">الفئة المستهدفة</TableHead>
                      <TableHead className="text-right">الاتصال</TableHead>
                      <TableHead className="text-right">المكان</TableHead>
                      <TableHead className="text-right">الوصف</TableHead>
                      <TableHead className="text-right">تاريخ الإرسال</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((request) => (
                      <TableRow key={request.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium text-right">
                          {request.name}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="font-semibold">{request.program_name}</div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-1">
                              <span>{formatDate(request.date)}</span>
                              <Calendar className="w-3 h-3" />
                            </div>
                            <div className="flex items-center gap-1">
                              <span>{formatTime(request.time)}</span>
                              <Clock className="w-3 h-3" />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-1">
                            <span>{request.attendees}</span>
                            <Users className="w-4 h-4" />
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          {request.target_audience}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-1">
                            <span className="text-sm">{request.contact}</span>
                            <Phone className="w-3 h-3" />
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-1">
                            <span>{request.location}</span>
                            <MapPin className="w-3 h-3" />
                          </div>
                        </TableCell>
                        <TableCell className="text-right max-w-xs">
                          <div className="truncate" title={request.description || ''}>
                            {request.description || 'لا يوجد وصف'}
                          </div>
                          {request.notes && (
                            <div className="text-xs text-muted-foreground mt-1 truncate" title={request.notes}>
                              ملاحظات: {request.notes}
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="text-right text-sm text-muted-foreground">
                          {formatDate(request.created_at)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Summary Statistics */}
        {requests.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {requests.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  إجمالي الطلبات
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {requests.reduce((sum, req) => sum + req.attendees, 0)}
                </div>
                <div className="text-sm text-muted-foreground">
                  إجمالي المتدربين المتوقع
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {new Set(requests.map(req => req.program_name)).size}
                </div>
                <div className="text-sm text-muted-foreground">
                  أنواع البرامج المطلوبة
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewRequests;