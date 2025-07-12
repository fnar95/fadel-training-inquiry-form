import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface TrainingRequestData {
  name: string;
  program_name: string;
  description?: string;
  date: string;
  time: string;
  attendees: number;
  target_audience: string;
  contact: string;
  location: string;
  notes?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: TrainingRequestData = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Training Platform <onboarding@resend.dev>",
      to: ["fnar95@hotmail.com"],
      subject: "طلب برنامج تدريبي جديد",
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h1 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            طلب برنامج تدريبي جديد
          </h1>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e40af; margin-top: 0;">تفاصيل الطلب:</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; background-color: #e2e8f0; font-weight: bold; width: 30%;">اسم مقدم الطلب:</td>
                <td style="padding: 8px; background-color: #ffffff;">${requestData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #e2e8f0; font-weight: bold;">اسم البرنامج:</td>
                <td style="padding: 8px; background-color: #ffffff;">${requestData.program_name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #e2e8f0; font-weight: bold;">التاريخ المطلوب:</td>
                <td style="padding: 8px; background-color: #ffffff;">${requestData.date}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #e2e8f0; font-weight: bold;">الوقت المطلوب:</td>
                <td style="padding: 8px; background-color: #ffffff;">${requestData.time}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #e2e8f0; font-weight: bold;">عدد الحضور:</td>
                <td style="padding: 8px; background-color: #ffffff;">${requestData.attendees}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #e2e8f0; font-weight: bold;">الفئة المستهدفة:</td>
                <td style="padding: 8px; background-color: #ffffff;">${requestData.target_audience}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #e2e8f0; font-weight: bold;">بيانات الاتصال:</td>
                <td style="padding: 8px; background-color: #ffffff;">${requestData.contact}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #e2e8f0; font-weight: bold;">مكان التدريب:</td>
                <td style="padding: 8px; background-color: #ffffff;">${requestData.location}</td>
              </tr>
              ${requestData.description ? `
              <tr>
                <td style="padding: 8px; background-color: #e2e8f0; font-weight: bold;">وصف البرنامج:</td>
                <td style="padding: 8px; background-color: #ffffff;">${requestData.description}</td>
              </tr>
              ` : ''}
              ${requestData.notes ? `
              <tr>
                <td style="padding: 8px; background-color: #e2e8f0; font-weight: bold;">ملاحظات إضافية:</td>
                <td style="padding: 8px; background-color: #ffffff;">${requestData.notes}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; border-right: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af;">
              <strong>تم استلام هذا الطلب من منصة التدريب الخاصة بك.</strong><br>
              يرجى مراجعة التفاصيل والتواصل مع مقدم الطلب في أقرب وقت ممكن.
            </p>
          </div>
          
          <p style="text-align: center; color: #64748b; margin-top: 30px;">
            منصة التدريب - المدرب فاضل المبارك
          </p>
        </div>
      `,
    });

    console.log("Notification email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, data: emailResponse }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);