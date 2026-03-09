# 🚀 إعداد إرسال الإيميلات (Resend)

## الخطوات

### 1. إنشاء حساب Resend مجاني
- روح على [resend.com](https://resend.com)
- اضغط **Sign Up** وعمل حساب مجاناً (100 إيميل/يوم مجاناً)

### 2. إنشاء API Key
- من الـ Dashboard اضغط **API Keys** من الـ sidebar
- اضغط **Create API Key**
- سمّيه مثلاً `mountainview-leads`
- انسخ الـ key

### 3. إضافة Domain (مهم جداً)
- من الـ Dashboard اضغط **Domains**
- اضغط **Add Domain** وأضف `grandeur-spaces.com`
- اتبع التعليمات لإضافة DNS records على domain provider بتاعك
- بعد التأكيد، الإيميل بيتبعت من `leads@grandeur-spaces.com`

### 4. إضافة الـ API Key للمشروع
```bash
# انسخ الملف
cp .env.example .env.local

# افتح .env.local وحط الـ API Key بتاعك
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 5. تشغيل المشروع
```bash
npm install
npm run dev
```

## ✅ اختبار الإيميل
- افتح الموقع على `http://localhost:3000`
- املأ أي فورم وابعت
- يجب يوصلك إيميل على `leads@grandeur-spaces.com`

## 📧 شكل الإيميل اللي هيوصلك
- اسم العميل
- رقم تليفونه
- نوع الوحدة المطلوبة
- رسالته (لو كتب)
- زرار "اتصل بيه الآن" مباشرة في الإيميل
