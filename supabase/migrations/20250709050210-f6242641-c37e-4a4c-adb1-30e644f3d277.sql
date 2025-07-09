-- إنشاء جدول طلبات البرامج التدريبية
CREATE TABLE public.training_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  program_name TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  time TIME NOT NULL,
  attendees INTEGER NOT NULL,
  target_audience TEXT NOT NULL,
  contact TEXT NOT NULL,
  location TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- تفعيل Row Level Security
ALTER TABLE public.training_requests ENABLE ROW LEVEL SECURITY;

-- سياسة للسماح لأي شخص بإدراج طلبات جديدة
CREATE POLICY "Anyone can insert training requests" 
ON public.training_requests 
FOR INSERT 
WITH CHECK (true);

-- سياسة للسماح لأي شخص بقراءة الطلبات (يمكن تقييدها لاحقاً حسب الحاجة)
CREATE POLICY "Anyone can view training requests" 
ON public.training_requests 
FOR SELECT 
USING (true);

-- إنشاء دالة تحديث الطابع الزمني
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- إنشاء trigger لتحديث updated_at تلقائياً
CREATE TRIGGER update_training_requests_updated_at
  BEFORE UPDATE ON public.training_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();