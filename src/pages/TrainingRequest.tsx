import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Clock, Users, Target, Phone, MapPin, FileText, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "يجب أن يكون الاسم على الأقل حرفين"),
  program_name: z.string().min(2, "يجب أن يكون اسم البرنامج على الأقل حرفين"),
  description: z.string().optional(),
  date: z.string().min(1, "يرجى اختيار التاريخ"),
  time: z.string().min(1, "يرجى اختيار الوقت"),
  attendees: z.number().min(1, "يجب أن يكون عدد الحضور على الأقل واحد"),
  target_audience: z.string().min(2, "يرجى تحديد الفئة المستهدفة"),
  contact: z.string().min(5, "يرجى إدخال بيانات الاتصال"),
  location: z.string().min(2, "يرجى تحديد المكان"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const TrainingRequest = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      program_name: "",
      description: "",
      date: "",
      time: "",
      attendees: 1,
      target_audience: "",
      contact: "",
      location: "",
      notes: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from("training_requests")
        .insert([{
          name: data.name,
          program_name: data.program_name,
          description: data.description || null,
          date: data.date,
          time: data.time,
          attendees: data.attendees,
          target_audience: data.target_audience,
          contact: data.contact,
          location: data.location,
          notes: data.notes || null,
        }]);

      if (error) {
        throw error;
      }

      toast({
        title: "تم إرسال الطلب بنجاح!",
        description: "سيتم التواصل معك قريباً لتأكيد التفاصيل.",
      });

      form.reset();
    } catch (error) {
      console.error("Error submitting request:", error);
      toast({
        title: "حدث خطأ",
        description: "فشل في إرسال الطلب. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            المدرب فاضل المبارك
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            طلب برنامج تدريبي مخصص
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <Card className="shadow-xl border-0 bg-background/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">
              نموذج طلب برنامج تدريبي
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              املأ الحقول التالية لطلب برنامج تدريبي مخصص يناسب احتياجاتك
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* الاسم */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-foreground">
                          <Users className="w-4 h-4" />
                          الاسم الكامل
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="أدخل اسمك الكامل" 
                            {...field} 
                            className="text-right"
                            dir="rtl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* اسم البرنامج */}
                  <FormField
                    control={form.control}
                    name="program_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-foreground">
                          <FileText className="w-4 h-4" />
                          اسم البرنامج المطلوب
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="مثال: دورة القيادة الإدارية" 
                            {...field} 
                            className="text-right"
                            dir="rtl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* التاريخ */}
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-foreground">
                          <CalendarIcon className="w-4 h-4" />
                          التاريخ المفضل
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* الوقت */}
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-foreground">
                          <Clock className="w-4 h-4" />
                          الوقت المفضل
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="time" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* عدد الحضور */}
                  <FormField
                    control={form.control}
                    name="attendees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-foreground">
                          <Users className="w-4 h-4" />
                          عدد الحضور المتوقع
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="1"
                            placeholder="20"
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* الفئة المستهدفة */}
                  <FormField
                    control={form.control}
                    name="target_audience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-foreground">
                          <Target className="w-4 h-4" />
                          الفئة المستهدفة
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="مثال: المديرين والموظفين" 
                            {...field} 
                            className="text-right"
                            dir="rtl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* بيانات الاتصال */}
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-foreground">
                          <Phone className="w-4 h-4" />
                          بيانات الاتصال
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="رقم الهاتف أو البريد الإلكتروني" 
                            {...field} 
                            className="text-right"
                            dir="rtl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* المكان */}
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-foreground">
                          <MapPin className="w-4 h-4" />
                          مكان التدريب
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="المدينة أو العنوان المفضل" 
                            {...field} 
                            className="text-right"
                            dir="rtl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* وصف البرنامج */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        وصف البرنامج والأهداف المطلوبة
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="اكتب وصفاً مفصلاً عن البرنامج والأهداف التي تريد تحقيقها..."
                          className="min-h-24 text-right"
                          dir="rtl"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* ملاحظات إضافية */}
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        ملاحظات إضافية
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="أي ملاحظات أو متطلبات خاصة..."
                          className="min-h-20 text-right"
                          dir="rtl"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-6">
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? (
                      "جاري الإرسال..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 ml-2" />
                        إرسال طلب البرنامج التدريبي
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            سيتم مراجعة طلبك والتواصل معك خلال 24 ساعة
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainingRequest;