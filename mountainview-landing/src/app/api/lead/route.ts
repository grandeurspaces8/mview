import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const LEAD_EMAIL = 'leads@grandeur-spaces.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, message, type } = body

    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY environment variable')
      return NextResponse.json({ success: false, error: 'Email service not configured' }, { status: 500 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'leads@grandeur-spaces.com',
      to: LEAD_EMAIL,
      subject: `🏠 ليد جديد من ${name} - ${type || 'غير محدد'}`,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; direction: rtl; }
            .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #1a1400, #2a2000); padding: 30px; text-align: center; }
            .header h1 { color: #c9a84c; margin: 0; font-size: 22px; }
            .header p { color: #999; margin: 6px 0 0; font-size: 13px; }
            .body { padding: 32px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
            .value { font-size: 16px; color: #222; font-weight: 600; background: #f9f5eb; padding: 12px 16px; border-radius: 8px; border-right: 3px solid #c9a84c; }
            .cta { background: #c9a84c; color: #000; text-decoration: none; display: inline-block; padding: 14px 28px; border-radius: 8px; font-weight: 700; margin-top: 8px; }
            .footer { background: #f9f9f9; padding: 16px 32px; text-align: center; color: #aaa; font-size: 12px; border-top: 1px solid #eee; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏠 ليد جديد</h1>
              <p>وصل طلب تواصل جديد من الموقع</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">الاسم</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">رقم الهاتف</div>
                <div class="value">${phone}</div>
              </div>
              ${type ? `
              <div class="field">
                <div class="label">نوع الوحدة المطلوبة</div>
                <div class="value">${type}</div>
              </div>` : ''}
              ${message ? `
              <div class="field">
                <div class="label">الرسالة</div>
                <div class="value">${message}</div>
              </div>` : ''}
              <a href="tel:+2${phone.replace(/^0/, '')}" class="cta">📞 اتصل بـ ${name} الآن</a>
            </div>
            <div class="footer">Mountain View Luxury Real Estate — ${new Date().toLocaleString('ar-EG')}</div>
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Lead email error:', err)
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
  }
}
