import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  email: string;
  comment: string;
  date: string;
}

const dummyTestimonials: Testimonial[] = [
    { date: "01/08/2025", name: "محمد حسن", comment: "التطبيق سهل والمكنة بتطبع بسرعة.", email: "m.hassan@example.com" },
    { date: "01/08/2025", name: "أحمد علي", comment: "خدمة العملاء ردت عليا بسرعة وحلت مشكلتي.", email: "a.ali@example.com" },
    { date: "02/08/2025", name: "مروة إبراهيم", comment: "الماكينة عملية جداً وأنصح بيها.", email: "m.ibrahim@example.com" },
    { date: "02/08/2025", name: "مصطفى رمضان", comment: "عمولتها كويسة والسرعة ممتازة.", email: "m.ramadan@example.com" },
    { date: "03/08/2025", name: "سارة محمود", comment: "وصلتني الماكينة متغلفة كويس والشحن سريع.", email: "s.mahmoud@example.com" },
    { date: "03/08/2025", name: "رامي سمير", comment: "التطبيق واضح وسهل الاستخدام.", email: "r.samir@example.com" },
    { date: "04/08/2025", name: "منى خليفة", comment: "خدمة العملاء مؤدبة ومفيدة.", email: "m.khalifa@example.com" },
    { date: "04/08/2025", name: "هاني جابر", comment: "الماكينة بتدعم كل الكروت وده مهم جداً.", email: "h.jaber@example.com" },
    { date: "05/08/2025", name: "علي فؤاد", comment: "سحب المعاشات شغال تمام.", email: "a.fouad@example.com" },
    { date: "05/08/2025", name: "ريم عبدالعال", comment: "التسليم خلال 48 ساعة كان مظبوط.", email: "r.abdelal@example.com" },
    { date: "06/08/2025", name: "عمرو طه", comment: "الطابعة المدمجة مريحة ومش بحتاج طابعة تانية.", email: "a.taha@example.com" },
    { date: "06/08/2025", name: "إيمان زكي", comment: "العمولة فعلاً أعلى من اللي لقيته في السوق.", email: "e.zaki@example.com" },
    { date: "07/08/2025", name: "كريم أشرف", comment: "واجهة التطبيق سهلة للعمالة.", email: "k.ashraf@example.com" },
    { date: "07/08/2025", name: "خلود ناصر", comment: "الدعم التقني حللي مشكلة بسرعة.", email: "k.nasser@example.com" },
    { date: "08/08/2025", name: "إبراهيم شوقي", comment: "المكنة خفيفة وسهلة النقل.", email: "i.shawky@example.com" },
    { date: "08/08/2025", name: "ياسمين سمير", comment: "التعامل معاهم على الهاتف محترم.", email: "y.samir@example.com" },
    { date: "09/08/2025", name: "نادر رشاد", comment: "التحويل بين البنوك سريع ومافيش تأخير.", email: "n.rashad@example.com" },
    { date: "09/08/2025", name: "منال توفيق", comment: "الماكينة بتشتغل مع كروت المرافق بدون مشاكل.", email: "m.tawfik@example.com" },
    { date: "10/08/2025", name: "غادة سعيد", comment: "التطبيق ماشي بدون خلل لحد دلوقتي.", email: "gh.saeed@example.com" },
    { date: "10/08/2025", name: "شريف منير", comment: "الخطوات بسيطة وسهلة للموظفين.", email: "s.monir@example.com" },
    { date: "11/08/2025", name: "أحمد مروان", comment: "التسعيرة مناسبة ومفيش مصاريف خفية.", email: "a.marwan@example.com" },
    { date: "11/08/2025", name: "سمية هاني", comment: "الماكينة نقلة في الشغل اليومي.", email: "s.hany@example.com" },
    { date: "12/08/2025", name: "طارق جبريل", comment: "الشحن كان سريع والمندوب شرحلي كل حاجة.", email: "t.gibril@example.com" },
    { date: "12/08/2025", name: "نادية فتحي", comment: "كل المعاملات بتظهر في التطبيق فورًا.", email: "n.fathy@example.com" },
    { date: "13/08/2025", name: "سامح كمال", comment: "خدمة ممتازة وفرصة ربح كويسة.", email: "s.kamal@example.com" },
    { date: "13/08/2025", name: "هبة أمين", comment: "سهولة في الاستخدام حتى للي مش عنده خبرة.", email: "h.amin@example.com" },
    { date: "14/08/2025", name: "وائل سمير", comment: "الطباعة نقية وواضحة.", email: "w.samir@example.com" },
    { date: "14/08/2025", name: "لميس عصمت", comment: "فريق الدعم متعاون جداً.", email: "l.esmat@example.com" },
    { date: "15/08/2025", name: "رشا عبدالغنى", comment: "التعامل كان محترف وسريع.", email: "r.abdelghany@example.com" },
    { date: "15/08/2025", name: "مازن جمال", comment: "الماكينة بتوفر وقت كتير في الشغل.", email: "m.gamal@example.com" },
    { date: "16/08/2025", name: "بشرى أنور", comment: "انصح كل التجار يجربوها.", email: "b.anwar@example.com" },
    { date: "16/08/2025", name: "حسام علاء", comment: "الربح واضح والعمولة مغرية.", email: "h.alaa@example.com" },
    { date: "17/08/2025", name: "مها رضا", comment: "وصلت في الوقت المحدد والحالة ممتازة.", email: "m.reda@example.com" },
    { date: "17/08/2025", name: "رامي نبيل", comment: "التطبيق منظم وفيه تقارير مفيدة.", email: "r.nabil@example.com" },
    { date: "18/08/2025", name: "ياسر زين", comment: "الماكينة متينة وفيها كل اللي محتاجه.", email: "y.zein@example.com" },
    { date: "18/08/2025", name: "نورهان بسيوني", comment: "الدفع عبر الفودافون كاش سهل وسريع.", email: "n.bassyouni@example.com" },
    { date: "19/08/2025", name: "عبد الرحمن صادق", comment: "العمولة 15 جنيه فعلاً مفيدة.", email: "a.sadek@example.com" },
    { date: "19/08/2025", name: "نسرين غانم", comment: "الماكينة بتستجيب بسرعة لما تضغط زر.", email: "n.ghanem@example.com" },
    { date: "20/08/2025", name: "طه شريف", comment: "التدريب اللي عملوه مع المندوب أفادني كتير.", email: "t.sherif@example.com" },
    { date: "20/08/2025", name: "علياء كرم", comment: "الواجهات بسيطة والعاملين متعاونين.", email: "a.karam@example.com" },
    { date: "21/08/2025", name: "إيهاب سامي", comment: "التحويلات البنكية وصلت فوراً.", email: "e.samy@example.com" },
    { date: "21/08/2025", name: "ياسمين خالد", comment: "المندوب جاب الماكينة وشغلها قدامي.", email: "y.khaled@example.com" },
    { date: "22/08/2025", name: "كريم نبيل", comment: "سعرها يستاهل مقابل اللي بتقدمه.", email: "k.nabil@example.com" },
    { date: "22/08/2025", name: "شيرين فاروق", comment: "الخدمة بعد البيع ممتازة.", email: "s.farouk@example.com" },
    { date: "23/08/2025", name: "أيمن حمدي", comment: "التطبيق بيحفظ الفواتير بشكل مرتب.", email: "a.hamdy@example.com" },
    { date: "23/08/2025", name: "منى سعيد", comment: "خدمتكم سهلت عليا كتير في المحل.", email: "m.saeed@example.com" },
    { date: "24/08/2025", name: "سامر المارد", comment: "مافيش تعقيد في التشغيل نهائيًا.", email: "s.elmared@example.com" },
    { date: "24/08/2025", name: "دعاء مرسي", comment: "رسوم منخفضة ومكسب ثابت.", email: "d.morsy@example.com" },
    { date: "25/08/2025", name: "مروان بهاء", comment: "سحب الفلوس من المحافظ سريع.", email: "m.bahaa@example.com" },
    { date: "25/08/2025", name: "نوال نبيل", comment: "التطبيق مشغل كل الخدمات المطلوبة.", email: "n.nabil@example.com" },
    { date: "26/08/2025", name: "هشام قاسم", comment: "جودة الطباعة ممتازة.", email: "h.kassem@example.com" },
    { date: "26/08/2025", name: "نرمين صلاح", comment: "الدعم الفني حللي مشكلة فوراً.", email: "n.salah@example.com" },
    { date: "27/08/2025", name: "وليد عماد", comment: "الماكينة خفيفة ومريحة في النقل.", email: "w.emad@example.com" },
    { date: "27/08/2025", name: "غادة محسن", comment: "سعر الماكينة مناسب لبداية شغل.", email: "gh.mohsen@example.com" },
    { date: "28/08/2025", name: "مينا توماس", comment: "التعامل كان واضح ومهني.", email: "m.thomas@example.com" },
    { date: "28/08/2025", name: "إيناس محمد", comment: "التطبيق بيسهل متابعة الحسابات.", email: "e.mohamed@example.com" },
    { date: "29/08/2025", name: "بهاء الدين كمال", comment: "التقارير بتساعدني أتابع المبيعات.", email: "b.kamal@example.com" },
    { date: "29/08/2025", name: "أسماء حسين", comment: "الماكينة مش بتعلق وبتشتغل باستمرار.", email: "a.hussien@example.com" },
    { date: "30/08/2025", name: "عبد الله يوسف", comment: "التركيب والتسليم كانوا ممتازين.", email: "a.youssef@example.com" },
    { date: "30/08/2025", name: "ملك مرعي", comment: "انظمة الدفع كلها شغالة ومافيهاش مشاكل.", email: "m.marey@example.com" },
    { date: "31/08/2025", name: "أحمد نبيل", comment: "الماكينة وفرّتلي وقت ومجهود في المحل.", email: "a.nabil@example.com" },
    { date: "31/08/2025", name: "سلوى جلال", comment: "الدعم الفني متواصل وبيحل بسرعة.", email: "s.galal@example.com" },
    { date: "01/09/2025", name: "نور محمد", comment: "التطبيق سريع ومفيش بطء.", email: "n.mohamed@example.com" },
    { date: "01/09/2025", name: "سامح فوزي", comment: "الماكينة بتشتغل مع كل البطاقات.", email: "s.fawzy@example.com" },
    { date: "02/09/2025", name: "رباب عصمت", comment: "خدمة العملاء محترفة جداً.", email: "r.esmat@example.com" },
    { date: "02/09/2025", name: "عماد جمال", comment: "الاستلام من الفرع كان سهل وسريع.", email: "e.gamal@example.com" },
    { date: "03/09/2025", name: "هاجر صبري", comment: "الماكينة قوية ومناسبة للشغل الكتير.", email: "h.sabry@example.com" },
    { date: "03/09/2025", name: "فادي بطرس", comment: "التطبيق فيه كل اللي محتاجه لإدارة المدفوعات.", email: "f.botros@example.com" },
    { date: "04/09/2025", name: "لينا ماهر", comment: "التعامل معاهم بدون تعقيد.", email: "l.maher@example.com" },
    { date: "04/09/2025", name: "رائد منصور", comment: "كنت محتاج خدمة زي دي من زمان.", email: "r.mansour@example.com" },
    { date: "05/09/2025", name: "صفاء عبدالسلام", comment: "الماكينة تدعم خدمات كتير ومفيدة.", email: "s.abdelsalam@example.com" },
    { date: "05/09/2025", name: "عبدالغني بدر", comment: "الشحن كان سريع والتغليف كويس.", email: "a.badr@example.com" },
    { date: "06/09/2025", name: "نجلاء سمير", comment: "انبهرت بسرعة الاستجابة من الدعم.", email: "n.samir@example.com" },
    { date: "06/09/2025", name: "وديع نوفل", comment: "التطبيق مرتب وسهل على البائع.", email: "w.nofal@example.com" },
    { date: "07/09/2025", name: "ياسر نبيل", comment: "الماكينة شغالة 24 ساعة بدون مشاكل.", email: "y.nabil@example.com" },
    { date: "07/09/2025", name: "حنان راضي", comment: "التعامل معانا باحترام ومصداقية.", email: "h.rady@example.com" },
    { date: "08/09/2025", name: "عمرو صادق", comment: "الطباعة نظيفة والورق ماشي كويس.", email: "a.sadek2@example.com" },
    { date: "08/09/2025", name: "بوسي كمال", comment: "ربحت كويس من العمولة خلال أسبوع.", email: "b.kamal2@example.com" },
    { date: "09/09/2025", name: "فاروق حسين", comment: "التجربة كانت ممتازة من البداية للنهاية.", email: "f.hussien@example.com" },
    { date: "09/09/2025", name: "بثينة المغربي", comment: "الماكينة ماخدتش مساحة في المحل.", email: "b.elmaghraby@example.com" },
    { date: "10/09/2025", name: "وائل قنديل", comment: "التطبيق بيوفر تقارير يومية مفيدة.", email: "w.kandil@example.com" },
    { date: "10/09/2025", name: "ندى عاطف", comment: "سعرها مناسب جداً مقابل الخدمة.", email: "n.atef@example.com" },
    { date: "11/09/2025", name: "إيهاب نادر", comment: "الماكينة متوافقة مع كل الكروت.", email: "e.nader@example.com" },
    { date: "11/09/2025", name: "سمر عبدالغني", comment: "الدعم الفني متاح في أي وقت.", email: "s.abdelghany2@example.com" },
    { date: "12/09/2025", name: "سامية صفوت", comment: "التطبيق سهل الاستخدام للعاملين.", email: "s.safwat@example.com" },
    { date: "12/09/2025", name: "هاني مهدي", comment: "الطباعة سريعة ومريحة.", email: "h.mahdy@example.com" },
    { date: "13/09/2025", name: "نادر سامي", comment: "خدمة ما بعد البيع ممتازة وبتابع معايا.", email: "n.samy@example.com" },
    { date: "13/09/2025", name: "مها جلال", comment: "الماكينة أداء ثابت ومش بتعلق.", email: "m.galal@example.com" },
    { date: "14/09/2025", name: "عادل سعد", comment: "التسليم كان في المعاد والماكينة جديدة.", email: "a.saad@example.com" },
    { date: "14/09/2025", name: "نرمين هلال", comment: "المكسب واضح كل يوم في التطبيق.", email: "n.helal@example.com" },
    { date: "15/09/2025", name: "سامر كاظم", comment: "الماكينة قوية وتتحمل الاستخدام الكتير.", email: "s.kazem@example.com" },
    { date: "15/09/2025", name: "نجلاء عامر", comment: "التطبيق مرتب وسهل على الموظفين.", email: "n.amer@example.com" },
    { date: "16/09/2025", name: "عمر بدوي", comment: "العمولة فعلاً كويسة ومش زي السوق.", email: "o.badawy@example.com" },
    { date: "16/09/2025", name: "دعاء نجيب", comment: "التعامل معاهم محترم ومنظم.", email: "d.nagib@example.com" },
    { date: "17/09/2025", name: "محمود فؤاد", comment: "الماكينة سهّلت الشغل اليومي جدًا.", email: "m.fouad@example.com" },
    { date: "17/09/2025", name: "رنا شوقي", comment: "التطبيق بيقدم تقارير واضحة.", email: "r.shawky@example.com" },
    { date: "18/09/2025", name: "إيهاب رشاد", comment: "الدعم عبر الواتس كان مفيد جداً.", email: "e.rashad@example.com" },
    { date: "18/09/2025", name: "هبة رمزي", comment: "المندوب جرب الماكينة معايا وده طمني.", email: "h.ramzy@example.com" },
    { date: "19/09/2025", name: "طارق الجندي", comment: "الطباعة سلسة والايصالات واضحة.", email: "t.elgendy@example.com" },
    { date: "19/09/2025", name: "نادية مكرم", comment: "التطبيق مستقر ومفيش فيه مشاكل كتير.", email: "n.makram@example.com" },
    { date: "20/09/2025", name: "شريف مرسي", comment: "الرصيد بيتحدث فورًا بعد العملية.", email: "s.morsy@example.com" },
    { date: "20/09/2025", name: "منى رضا", comment: "الماكينة حل ممتاز للمحل بتاعي.", email: "m.reda2@example.com" },
    { date: "21/09/2025", name: "أنور ماهر", comment: "اهتمام وتنفيذ سريع من فريق الدعم.", email: "a.maher@example.com" },
    { date: "21/09/2025", name: "هناء عبدالعال", comment: "التطبيق مرتب وتابع المعاملات بدقة.", email: "h.abdelal@example.com" },
    { date: "22/09/2025", name: "صلاح كمال", comment: "الماكينة شغالة كويس طول الوقت.", email: "s.kamal2@example.com" },
    { date: "22/09/2025", name: "يارا فهمي", comment: "الاستلام من المقر كان سهل وسريع.", email: "y.fahmy@example.com" },
    { date: "23/09/2025", name: "زياد مصطفى", comment: "الماكينة مريحة ومناسبة للبزنس.", email: "z.mostafa@example.com" },
    { date: "23/09/2025", name: "سلوى نادر", comment: "التطبيق بيوفر تجربة مستخدم كويسة.", email: "s.nader@example.com" },
    { date: "24/09/2025", name: "حسني جابر", comment: "التعامل كان واضح ومفيش وعود كاذبة.", email: "h.gaber2@example.com" },
    { date: "24/09/2025", name: "منير رفاعي", comment: "الماكينة وفرتلي وقت ومجهود يومي.", email: "m.refaey@example.com" },
    { date: "25/09/2025", name: "سلمى توفيق", comment: "الطباعة سريعة والخدمة ممتازة.", email: "s.tawfik@example.com" },
    { date: "25/09/2025", name: "مروان عزيز", comment: "العمولة بتخلي المشروع مربح.", email: "m.aziz@example.com" },
    { date: "26/09/2025", name: "نيرمين سمير", comment: "الدعم الفني متابع معايا خطوة بخطوة.", email: "n.samir2@example.com" },
    { date: "26/09/2025", name: "بلال غازي", comment: "التطبيق سهل وبيقدم كل الخدمات.", email: "b.ghazy@example.com" },
    { date: "27/09/2025", name: "هشام جوهر", comment: "الماكينة أداءها مستقر ومضمون.", email: "h.gohar@example.com" },
    { date: "27/09/2025", name: "نوال الشامي", comment: "الاستلام والتجربة كانت قدامي مع المندوب.", email: "n.elshamy@example.com" },
    { date: "28/09/2025", name: "رامي فهيم", comment: "الماكينة فرقّت معايا في الربح اليومي.", email: "r.fahim@example.com" },
    { date: "28/09/2025", name: "سلوى جميل", comment: "التطبيق مشغل كل طرق الدفع بدون مشاكل.", email: "s.gamil@example.com" },
    { date: "28/09/2025", name: "عبد الله حاتم", comment: "الخدمة بعد البيع ممتازة ومتابعة دائمة.", email: "a.hatem@example.com" },
    { date: "28/09/2025", name: "إيمان فتحي", comment: "انصح أي تاجر ياخدها وتجرب بنفسك.", email: "e.fathy@example.com" }
];

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    try {
      const storedTestimonials = localStorage.getItem('testimonials');
      const userTestimonials = storedTestimonials ? JSON.parse(storedTestimonials) : [];
      setTestimonials([...userTestimonials, ...dummyTestimonials]);
    } catch (error) {
      console.error("Failed to parse testimonials from localStorage", error);
      setTestimonials(dummyTestimonials);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment || !email) {
      alert('يرجى إدخال جميع البيانات: الاسم والبريد الإلكتروني والتعليق.');
      return;
    }

    const newTestimonial: Testimonial = {
      name,
      email,
      comment,
      date: new Date().toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' }),
    };

    const currentStored = localStorage.getItem('testimonials');
    const userTestimonials = currentStored ? JSON.parse(currentStored) : [];
    const updatedUserTestimonials = [newTestimonial, ...userTestimonials];
    
    localStorage.setItem('testimonials', JSON.stringify(updatedUserTestimonials));
    setTestimonials([...updatedUserTestimonials, ...dummyTestimonials]);

    // Clear form and show success message
    setName('');
    setEmail('');
    setComment('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <div className="flex flex-col items-center justify-center mb-2">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#006eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /> </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#006eff] to-blue-500 text-transparent bg-clip-text">
                    آراء عملائنا
                </h2>
            </div>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            نفخر بثقتكم ونسعد دائمًا بسماع آرائكم التي تدفعنا للأمام.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-h-[40rem] overflow-y-auto p-4 pr-6 border border-gray-200 rounded-lg bg-white shadow-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
                  <p className="text-gray-600 text-sm flex-grow">“{item.comment}”</p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="font-bold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* Add Testimonial Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 mt-16 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">أضف رأيك</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#006eff] focus:border-[#006eff]" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#006eff] focus:border-[#006eff]" />
                </div>
                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">التعليق</label>
                    <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#006eff] focus:border-[#006eff]"></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-[#006eff] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        إرسال التعليق
                    </button>
                </div>
            </form>
            {showSuccess && (
                <div className="mt-4 text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative" role="alert">
                    <strong className="font-bold">تم الإرسال!</strong>
                    <span className="block sm:inline"> شكرًا لك، تم إضافة تعليقك بنجاح.</span>
                </div>
            )}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;