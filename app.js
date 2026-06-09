const nutrientsDatabase = [
 {
 id: "vitamin_c", name: "فيتامين C", icon: "🍊", type: "vitamin",
 category: "water-soluble", categoryAr: "ذواب في الماء",
 benefits: ["تعزيز المناعة", "مضاد قوي للأكسدة", "صحة الجلد والكولاجين", "تحسين امتصاص الحديد", "التئام الجروح"],
 naturalSources: ["البرتقال", "الليمون", "الفلفل الأحمر", "الكيوي", "الفراولة", "البروكلي", "البندورة"],
 treatsDiseases: ["نزلات البرد", "الإسقربوط", "فقر الدم", "ضعف المناعة", "التهابات اللثة"],
 deficiencySymptoms: ["سهولة التعرض للعدوى", "تأخر التئام الجروح", "نزيف اللثة", "جفاف الجلد", "التعب المستمر"],
 dailyDosage: { amount: 90, unit: "ملغ" },
 positiveCombinations: [
 { nutrientId: "iron", effect: "يزيد امتصاص الحديد بنسبة 300%", mechanism: "يحول الحديد لصيغة ثنائية أسهل امتصاصاً" }
 ],
 negativeCombinations: [
 { nutrientId: "vitamin_b12", effect: "قد يقلل امتصاص B12", mechanism: "الجرعات العالية من C قد تتداخل", severity: "متوسط" }
 ]
 },
 {
 id: "vitamin_d", name: "فيتامين D", icon: "☀️", type: "vitamin",
 category: "fat-soluble", categoryAr: "ذواب في الدهون",
 benefits: ["تقوية العظام والأسنان", "تنظيم امتصاص الكالسيوم", "تعزيز المناعة", "تحسين المزاج", "صحة العضلات"],
 naturalSources: ["أشعة الشمس", "سمك السلمون", "التونة", "سردين", "صفار البيض", "كبد البقر", "الحليب المدعم"],
 treatsDiseases: ["هشاشة العظام", "الكساح", "الكآبة", "ضعف المناعة", "آلام العضلات"],
 deficiencySymptoms: ["آلام العظام", "ضعف العضلات", "التعب المزمن", "تساقط الشعر", "كثرة الإصابة بالعدوى"],
 dailyDosage: { amount: 600, unit: "وحدة دولية" },
 positiveCombinations: [
 { nutrientId: "calcium", effect: "ضروري لامتصاص الكالسيوم", mechanism: "ينشط ناقلات الكالسيوم في الأمعاء" },
 { nutrientId: "magnesium", effect: "المغنيسيوم ينشط فيتامين D", mechanism: "يدخل في تحويل D لصيغته النشطة" }
 ],
 negativeCombinations: []
 },
 {
 id: "vitamin_a", name: "فيتامين A", icon: "🥕", type: "vitamin",
 category: "fat-soluble", categoryAr: "ذواب في الدهون",
 benefits: ["صحة النظر", "تقوية المناعة", "صحة الجلد", "النمو السليم", "مضاد للأكسدة"],
 naturalSources: ["الجزر", "البطاطا الحلوة", "السبانخ", "الكبد", "المانجو", "الشمام", "القرع"],
 treatsDiseases: ["العشى الليلي", "جفاف العين", "حب الشباب", "ضعف المناعة", "التهابات الجلد"],
 deficiencySymptoms: ["ضعف النظر ليلاً", "جفاف العين", "جفاف الجلد", "تأخر النمو", "ضعف المناعة"],
 dailyDosage: { amount: 900, unit: "مكغ" },
 positiveCombinations: [
 { nutrientId: "zinc", effect: "الزنك ينقل فيتامين A", mechanism: "يدخل في بروتين نقل الريتينول" },
 { nutrientId: "iron", effect: "يساعد في استخدام فيتامين A", mechanism: "يدخل في تحويله للصيغة النشطة" }
 ],
 negativeCombinations: [
 { nutrientId: "vitamin_e", effect: "الجرعات العالية تتعارض", mechanism: "تداخل في الامتصاص", severity: "منخفض" }
 ]
 },
 {
 id: "vitamin_e", name: "فيتامين E", icon: "🌰", type: "vitamin",
 category: "fat-soluble", categoryAr: "ذواب في الدهون",
 benefits: ["مضاد قوي للأكسدة", "حماية الخلايا", "صحة الجلد والشعر", "دعم المناعة", "صحة القلب"],
 naturalSources: ["اللوز", "بذور دوار الشمس", "زيت الزيتون", "الأفوكادو", "السبانخ", "البندق"],
 treatsDiseases: ["شيخوخة الجلد", "أمراض القلب", "ضعف المناعة", "التهابات المفاصل"],
 deficiencySymptoms: ["ضعف العضلات", "مشاكل في الرؤية", "ضعف المناعة", "خدر الأطراف"],
 dailyDosage: { amount: 15, unit: "ملغ" },
 positiveCombinations: [
 { nutrientId: "vitamin_c", effect: "يعيد تدوير فيتامين E", mechanism: "يجدد الصيغة النشطة من E" },
 { nutrientId: "selenium", effect: "يعملان معاً كمضادات أكسدة", mechanism: "تآزر في حماية الخلايا" }
 ],
 negativeCombinations: []
 },
 {
 id: "vitamin_k", name: "فيتامين K", icon: "🥬", type: "vitamin",
 category: "fat-soluble", categoryAr: "ذواب في الدهون",
 benefits: ["تخثر الدم", "صحة العظام", "منع تكلس الشرايين", "صحة القلب"],
 naturalSources: ["الكرنب", "السبانخ", "البروكلي", "الخس", "كبدة_brussel", "زيت فول الصويا"],
 treatsDiseases: ["سيولة الدم الزائدة", "هشاشة العظام", "تكلس الشرايين"],
 deficiencySymptoms: ["سهولة النزف", "كدمات", "هشاشة العظام"],
 dailyDosage: { amount: 120, unit: "مكغ" },
 positiveCombinations: [
 { nutrientId: "vitamin_d", effect: "يعملان معاً لصحة العظام", mechanism: "K ينشط بروتينات العظام" }
 ],
 negativeCombinations: [
 { nutrientId: "vitamin_e", effect: "E العالي يقلل تأثير K", mechanism: "تداخل في التخثر", severity: "عالي" }
 ]
 },
 {
 id: "vitamin_b1", name: "فيتامين B1 (ثيامين)", icon: "🌾", type: "vitamin",
 category: "water-soluble", categoryAr: "ذواب في الماء",
 benefits: ["تحويل الطعام لطاقة", "صحة الجهاز العصبي", "صحة القلب", "تحسين الذاكرة"],
 naturalSources: ["الحبوب الكاملة", "لحم الخنزير", "البقوليات", "المكسرات", "البذور"],
 treatsDiseases: ["مرض البري بري", "إرهاق العضلات", "ضعف الذاكرة", "اعتلال الأعصاب"],
 deficiencySymptoms: ["التعب", "ضعف العضلات", "اعتلال الأعصاب", "فقدان الشهية", "التهيج"],
 dailyDosage: { amount: 1.2, unit: "ملغ" },
 positiveCombinations: [],
 negativeCombinations: []
 },
 {
 id: "vitamin_b12", name: "فيتامين B12", icon: "🥩", type: "vitamin",
 category: "water-soluble", categoryAr: "ذواب في الماء",
 benefits: ["تكوين كريات الدم الحمراء", "صحة الجهاز العصبي", "تصنيع DNA", "الطاقة"],
 naturalSources: ["اللحم", "السمك", "الدجاج", "البيض", "الحليب", "الأجبان", "الكبد"],
 treatsDiseases: ["فقر الدم الخبيث", "اعتلال الأعصاب", "التعب المزمن", "مشاكل الذاكرة"],
 deficiencySymptoms: ["فقر الدم", "التعب الشديد", "خدر الأطراف", "ضعف الذاكرة", "الاكتئاب"],
 dailyDosage: { amount: 2.4, unit: "مكغ" },
 positiveCombinations: [
 { nutrientId: "folic_acid", effect: "يعملان معاً لتكوين الدم", mechanism: "ضروريان لتصنيع DNA" }
 ],
 negativeCombinations: []
 },
 {
 id: "folic_acid", name: "حمض الفوليك (B9)", icon: "🥦", type: "vitamin",
 category: "water-soluble", categoryAr: "ذواب في الماء",
 benefits: ["تكوين خلايا جديدة", "صحة الحامل والجنين", "تصنيع DNA", "صحة القلب"],
 naturalSources: ["السبانخ", "البروكلي", "البقوليات", "الهليون", "البرتقال", "الأفوكادو"],
 treatsDiseases: ["فقر الدم", "عيوب الأنبوب العصبي", "أمراض القلب", "اكتئاب"],
 deficiencySymptoms: ["فقر الدم", "التعب", "ضعف التركيز", "قروح الفم"],
 dailyDosage: { amount: 400, unit: "مكغ" },
 positiveCombinations: [
 { nutrientId: "vitamin_b12", effect: "تآزر في تكوين الدم", mechanism: "ضروريان لتصنيع DNA" }
 ],
 negativeCombinations: []
 },
 {
 id: "iron", name: "الحديد", icon: "🩸", type: "mineral",
 category: "mineral", categoryAr: "معدن أساسي",
 benefits: ["نقل الأكسجين في الدم", "تكوين الهيموغلوبين", "الطاقة والنشاط", "تقوية المناعة", "النمو"],
 naturalSources: ["اللحم الأحمر", "الكبد", "السبانخ", "العدس", "الحمص", "بذور اليقطين", "المشمش المجفف"],
 treatsDiseases: ["فقر الدم", "الأنيميا", "التعب المزمن", "ضعف التركيز", "تساقط الشعر"],
 deficiencySymptoms: ["فقر الدم", "التعب الشديد", "شحوب الجلد", "ضيق التنفس", "برودة الأطراف", "ضعف المناعة"],
 dailyDosage: { amount: 18, unit: "ملغ" },
 positiveCombinations: [
 { nutrientId: "vitamin_c", effect: "يزيد الامتصاص 300%", mechanism: "يحول الحديد للصيغة الثنائية" }
 ],
 negativeCombinations: [
 { nutrientId: "calcium", effect: "الكالسيوم يقلل امتصاص الحديد", mechanism: "تنافس على الامتصاص", severity: "عالي" },
 { nutrientId: "zinc", effect: "الجرعات العالية تتنافس", mechanism: "تنافس على نفس الناقلات", severity: "متوسط" }
 ]
 },
 {
 id: "calcium", name: "الكالسيوم", icon: "🥛", type: "mineral",
 category: "mineral", categoryAr: "معدن أساسي",
 benefits: ["قوة العظام والأسنان", "تقلص العضلات", "نقل الإشارات العصبية", "تخثر الدم", "صحة القلب"],
 naturalSources: ["الحليب", "الأجبان", "الزبادي", "السردين", "البروكلي", "اللوز", "التين المجفف"],
 treatsDiseases: ["هشاشة العظام", "تشنجات العضلات", "ارتفاع ضغط الدم", "متلازمة ما قبل الحيض"],
 deficiencySymptoms: ["هشاشة العظام", "تشنجات العضلات", "خدر الأطراف", "تكسر الأظافر", "تسوس الأسنان"],
 dailyDosage: { amount: 1000, unit: "ملغ" },
 positiveCombinations: [
 { nutrientId: "vitamin_d", effect: "D ضروري لامتصاص الكالسيوم", mechanism: "ينشط ناقلات الكالسيوم" },
 { nutrientId: "magnesium", effect: "توازن مثالي للعظام", mechanism: "يعملان معاً في بنية العظم" }
 ],
 negativeCombinations: [
 { nutrientId: "iron", effect: "يقلل امتصاص الحديد", mechanism: "تنافس على الامتصاص", severity: "عالي" }
 ]
 },
 {
 id: "magnesium", name: "المغنيسيوم", icon: "🌱", type: "mineral",
 category: "mineral", categoryAr: "معدن أساسي",
 benefits: ["أكثر من 300 تفاعل إنزيمي", "صحة القلب", "استرخاء العضلات", "صحة الأعصاب", "تنظيم السكر"],
 naturalSources: ["اللوز", "الكاجو", "السبانخ", "الأفوكادو", "الموز", "الشوكولاتة الداكنة", "البقوليات"],
 treatsDiseases: ["تشنجات العضلات", "الصداع النصفي", "الأرق", "ارتفاع ضغط الدم", "القلق"],
 deficiencySymptoms: ["تشنجات العضلات", "الأرق", "القلق", "الصداع", "عدم انتظام ضربات القلب"],
 dailyDosage: { amount: 400, unit: "ملغ" },
 positiveCombinations: [
 { nutrientId: "calcium", effect: "توازن للعظام", mechanism: "نسبة 2:1 مثالية" },
 { nutrientId: "vitamin_d", effect: "ينشط فيتامين D", mechanism: "يدخل في تحويله للصيغة النشطة" },
 { nutrientId: "vitamin_b6", effect: "يزيد امتصاص المغنيسيوم", mechanism: "يسهل دخوله للخلايا" }
 ],
 negativeCombinations: []
 },
 {
 id: "zinc", name: "الزنك", icon: "⚙️", type: "mineral",
 category: "mineral", categoryAr: "معدن أساسي",
 benefits: ["تقوية المناعة", "التئام الجروح", "صحة الجلد", "النمو", "صحة الإنجاب"],
 naturalSources: ["المحار", "اللحم الأحمر", "بذور اليقطين", "العدس", "الكاجو", "البيض"],
 treatsDiseases: ["نزلات البرد", "حب الشباب", "ضعف المناعة", "تساقط الشعر", "ضعف الخصوبة"],
 deficiencySymptoms: ["ضعف المناعة", "تأخر التئام الجروح", "تساقط الشعر", "فقدان حاسة التذوق", "حب الشباب"],
 dailyDosage: { amount: 11, unit: "ملغ" },
 positiveCombinations: [
 { nutrientId: "vitamin_a", effect: "ينقل فيتامين A", mechanism: "يدخل في بروتين النقل" },
 { nutrientId: "vitamin_c", effect: "تآزر للمناعة", mechanism: "دعم مناعي متكامل" }
 ],
 negativeCombinations: [
 { nutrientId: "iron", effect: "الجرعات العالية تتنافس", mechanism: "تنافس على الامتصاص", severity: "متوسط" },
 { nutrientId: "copper", effect: "الزنك العالي يقلل النحاس", mechanism: "تنافس مباشر", severity: "عالي" }
 ]
 },
 {
 id: "potassium", name: "البوتاسيوم", icon: "🍌", type: "mineral",
 category: "mineral", categoryAr: "معدن أساسي",
 benefits: ["تنظيم ضغط الدم", "صحة القلب", "تقلص العضلات", "توازن السوائل", "نقل الإشارات العصبية"],
 naturalSources: ["الموز", "البطاطا", "الأفوكادو", "السبانخ", "الفاصوليا", "البرتقال", "الطماطم"],
 treatsDiseases: ["ارتفاع ضغط الدم", "تشنجات العضلات", "احتباس السوائل", "السكتة الدماغية"],
 deficiencySymptoms: ["ضعف العضلات", "التعب", "تشنجات", "عدم انتظام ضربات القلب", "الإمساك"],
 dailyDosage: { amount: 3500, unit: "ملغ" },
 positiveCombinations: [
 { nutrientId: "magnesium", effect: "تآزر لصحة القلب", mechanism: "تنظيم ضربات القلب" }
 ],
 negativeCombinations: []
 },
 {
 id: "selenium", name: "السيلينيوم", icon: "🧪", type: "mineral",
 category: "mineral", categoryAr: "معدن نادر",
 benefits: ["مضاد قوي للأكسدة", "صحة الغدة الدرقية", "تقوية المناعة", "صحة الشعر"],
 naturalSources: ["الجوز البرازيلي", "التونة", "السردين", "البيض", "بذور دوار الشمس"],
 treatsDiseases: ["أمراض الغدة الدرقية", "السرطان", "ضعف المناعة"],
 deficiencySymptoms: ["ضعف المناعة", "تساقط الشعر", "إعتام عدسة العين", "ضعف الغدة الدرقية"],
 dailyDosage: { amount: 55, unit: "مكغ" },
 positiveCombinations: [
 { nutrientId: "vitamin_e", effect: "تآزر مضاد للأكسدة", mechanism: "حماية متكاملة للخلايا" }
 ],
 negativeCombinations: []
 },
 {
 id: "copper", name: "النحاس", icon: "🪙", type: "mineral",
 category: "mineral", categoryAr: "معدن نادر",
 benefits: ["تكوين كريات الدم الحمراء", "صحة الأعصاب", "تكوين الكولاجين", "امتصاص الحديد"],
 naturalSources: ["الكبد", "المحار", "المكسرات", "البذور", "الشوكولاتة الداكنة"],
 treatsDiseases: ["فقر الدم", "هشاشة العظام", "التهاب المفاصل"],
 deficiencySymptoms: ["فقر الدم", "ضعف المناعة", "هشاشة العظام", "مشاكل الأعصاب"],
 dailyDosage: { amount: 900, unit: "مكغ" },
 positiveCombinations: [
 { nutrientId: "iron", effect: "يساعد في استخدام الحديد", mechanism: "يدخل في أيض الحديد" }
 ],
 negativeCombinations: [
 { nutrientId: "zinc", effect: "الزنك العالي يقلل النحاس", mechanism: "تنافس مباشر", severity: "عالي" }
 ]
 }
];
const STORAGE_KEY = 'vitamins_app_open_count';
const PASSWORD = 'QaWs@#$1234';
const CONTACT_NUMBER = '0998324288';
const MAX_OPENS_BEFORE_LOCK = 3;
function updateOpenCounter() {
 let count = parseInt(localStorage.getItem(STORAGE_KEY) || '0');
 count++;
 localStorage.setItem(STORAGE_KEY, count);
 document.getElementById('openCount').textContent = count;
 if (count > MAX_OPENS_BEFORE_LOCK) {
 document.getElementById('lockScreen').classList.add('active');
 }
}
function checkPassword() {
 const input = document.getElementById('passwordInput').value;
 if (input === PASSWORD) {
 document.getElementById('lockScreen').classList.remove('active');
 document.getElementById('passwordInput').value = '';
 document.getElementById('lockError').style.display = 'none';
 localStorage.setItem(STORAGE_KEY, '0');
 document.getElementById('openCount').textContent = '0';
 } else {
 document.getElementById('lockError').style.display = 'block';
 setTimeout(() => {
 document.getElementById('lockError').style.display = 'none';
 }, 3000);
 }
}
function resetCounter() {
 if (confirm('هل تريد إعادة تعيين عداد الفتح؟')) {
 localStorage.setItem(STORAGE_KEY, '0');
 document.getElementById('openCount').textContent = '0';
 document.getElementById('lockScreen').classList.remove('active');
 }
}
function renderNutrients(filter = 'all', search = '') {
 const grid = document.getElementById('nutrientsGrid');
 grid.innerHTML = '';
 let filtered = nutrientsDatabase;
 if (filter !== 'all') {
 if (filter === 'vitamin') filtered = filtered.filter(n => n.type === 'vitamin');
 else if (filter === 'mineral') filtered = filtered.filter(n => n.type === 'mineral');
 else filtered = filtered.filter(n => n.category === filter);
 }
 if (search) {
 const s = search.toLowerCase();
 filtered = filtered.filter(n => 
 n.name.toLowerCase().includes(s) ||
 n.benefits.some(b => b.includes(search)) ||
 n.naturalSources.some(src => src.includes(search))
 );
 }
 if (filtered.length === 0) {
 grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:40px; color:#666;">❌ لا توجد نتائج</p>';
 return;
 }
 filtered.forEach(nutrient => {
 const card = document.createElement('div');
 card.className = `card ${nutrient.type}`;
 card.onclick = () => showNutrientDetails(nutrient.id);
 card.innerHTML = `
 <div class="card-icon">${nutrient.icon}</div>
 <div class="card-title">${nutrient.name}</div>
 <span class="card-type">${nutrient.categoryAr}</span>
 <div class="card-benefits">
 <strong>أهم الفوائد:</strong><br>
 ${nutrient.benefits.slice(0, 3).map(b => '• ' + b).join('<br>')}
 </div>
 `;
 grid.appendChild(card);
 });
}
function showNutrientDetails(id) {
 const n = nutrientsDatabase.find(x => x.id === id);
 if (!n) return;
 const positiveHTML = n.positiveCombinations.length > 0 
 ? n.positiveCombinations.map(c => {
 const other = nutrientsDatabase.find(x => x.id === c.nutrientId);
 return `<div class="tag info">✅ مع ${other?.name || c.nutrientId}: ${c.effect}</div>`;
 }).join('')
 : '<p style="color:#888;">لا توجد تفاعلات إيجابية مسجلة</p>';
 const negativeHTML = n.negativeCombinations.length > 0
 ? n.negativeCombinations.map(c => {
 const other = nutrientsDatabase.find(x => x.id === c.nutrientId);
 return `<div class="tag warning">⚠️ مع ${other?.name || c.nutrientId}: ${c.effect} (${c.severity})</div>`;
 }).join('')
 : '<p style="color:#888;">لا توجد محاذير مسجلة</p>';
 document.getElementById('nutrientDetails').innerHTML = `
 <div class="modal-header">
 <div class="modal-icon">${n.icon}</div>
 <h2 class="modal-title">${n.name}</h2>
 <span class="card-type">${n.categoryAr}</span>
 <p style="margin-top:10px; color:#666;">الجرعة اليومية: <strong>${n.dailyDosage.amount} ${n.dailyDosage.unit}</strong></p>
 </div>
 <div class="tabs">
 <button class="tab active" onclick="switchTab(event, 'tab-benefits')">💚 الفوائد</button>
 <button class="tab" onclick="switchTab(event, 'tab-sources')">🌿 المصادر</button>
 <button class="tab" onclick="switchTab(event, 'tab-diseases')">🏥 الأمراض</button>
 <button class="tab" onclick="switchTab(event, 'tab-deficiency')">⚠️ أعراض النقص</button>
 <button class="tab" onclick="switchTab(event, 'tab-positive')">✅ الجمع المفيد</button>
 <button class="tab" onclick="switchTab(event, 'tab-negative')">❌ محاذير الجمع</button>
 </div>
 <div id="tab-benefits" class="tab-content active">
 <div class="info-section">
 <h3>💚 الفوائد الصحية</h3>
 <div class="tag-list">
 ${n.benefits.map(b => `<span class="tag">${b}</span>`).join('')}
 </div>
 </div>
 </div>
 <div id="tab-sources" class="tab-content">
 <div class="info-section">
 <h3>🌿 المصادر الطبيعية</h3>
 <div class="tag-list">
 ${n.naturalSources.map(s => `<span class="tag">${s}</span>`).join('')}
 </div>
 </div>
 </div>
 <div id="tab-diseases" class="tab-content">
 <div class="info-section">
 <h3>🏥 الأمراض التي يساعد في علاجها</h3>
 <div class="tag-list">
 ${n.treatsDiseases.map(d => `<span class="tag info">${d}</span>`).join('')}
 </div>
 </div>
 </div>
 <div id="tab-deficiency" class="tab-content">
 <div class="info-section">
 <h3>⚠️ أعراض النقص</h3>
 <div class="tag-list">
 ${n.deficiencySymptoms.map(s => `<span class="tag warning">${s}</span>`).join('')}
 </div>
 </div>
 </div>
 <div id="tab-positive" class="tab-content">
 <div class="info-section">
 <h3>✅ الجمع المفيد (التفاعلات الإيجابية)</h3>
 <div class="tag-list">${positiveHTML}</div>
 </div>
 </div>
 <div id="tab-negative" class="tab-content">
 <div class="info-section">
 <h3>❌ محاذير الجمع (التفاعلات السلبية)</h3>
 <div class="tag-list">${negativeHTML}</div>
 </div>
 </div>
 `;
 document.getElementById('nutrientModal').classList.add('active');
}
function switchTab(event, tabId) {
 document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
 document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
 event.target.classList.add('active');
 document.getElementById(tabId).classList.add('active');
}
function closeModal(id) {
 document.getElementById(id).classList.remove('active');
}
function populateSelectors() {
 const s1 = document.getElementById('select1');
 const s2 = document.getElementById('select2');
 nutrientsDatabase.forEach(n => {
 s1.innerHTML += `<option value="${n.id}">${n.icon} ${n.name}</option>`;
 s2.innerHTML += `<option value="${n.id}">${n.icon} ${n.name}</option>`;
 });
}
function showInteractionEngine() {
 const engine = document.getElementById('interactionEngine');
 engine.style.display = engine.style.display === 'none' ? 'block' : 'none';
 if (engine.style.display === 'block') {
 engine.scrollIntoView({ behavior: 'smooth' });
 }
}
function analyzeInteraction() {
 const id1 = document.getElementById('select1').value;
 const id2 = document.getElementById('select2').value;
 const result = document.getElementById('interactionResult');
 if (!id1 || !id2) {
 alert('الرجاء اختيار عنصرين!');
 return;
 }
 if (id1 === id2) {
 result.className = 'interaction-result neutral';
 result.innerHTML = '⚠️ الرجاء اختيار عنصرين مختلفين!';
 return;
 }
 const n1 = nutrientsDatabase.find(x => x.id === id1);
 const n2 = nutrientsDatabase.find(x => x.id === id2);
 const pos1 = n1.positiveCombinations.find(c => c.nutrientId === id2);
 const pos2 = n2.positiveCombinations.find(c => c.nutrientId === id1);
 const neg1 = n1.negativeCombinations.find(c => c.nutrientId === id2);
 const neg2 = n2.negativeCombinations.find(c => c.nutrientId === id1);
 const positive = pos1 || pos2;
 const negative = neg1 || neg2;
 if (positive && !negative) {
 result.className = 'interaction-result beneficial';
 result.innerHTML = `
 <h3>✅ تفاعل مفيد!</h3>
 <p><strong>${n1.name} + ${n2.name}</strong></p>
 <p style="margin-top:10px;">${positive.effect}</p>
 ${positive.mechanism ? `<p style="margin-top:5px; font-size:0.9em;">🔬 الآلية: ${positive.mechanism}</p>` : ''}
 `;
 } else if (negative && !positive) {
 result.className = 'interaction-result harmful';
 result.innerHTML = `
 <h3>⚠️ محذور! تفاعل سلبي</h3>
 <p><strong>${n1.name} + ${n2.name}</strong></p>
 <p style="margin-top:10px;">${negative.effect}</p>
 <p style="margin-top:5px;">درجة الخطورة: <strong>${negative.severity}</strong></p>
 ${negative.mechanism ? `<p style="margin-top:5px; font-size:0.9em;">🔬 الآلية: ${negative.mechanism}</p>` : ''}
 `;
 } else if (positive && negative) {
 result.className = 'interaction-result neutral';
 result.innerHTML = `
 <h3>⚖️ تفاعل مختلط</h3>
 <p><strong>${n1.name} + ${n2.name}</strong></p>
 <p style="margin-top:10px; color:#1b5e20;">✅ ${positive.effect}</p>
 <p style="margin-top:5px; color:#b71c1c;">⚠️ ${negative.effect}</p>
 `;
 } else {
 result.className = 'interaction-result neutral';
 result.innerHTML = `
 <h3>ℹ️ لا يوجد تفاعل مسجل</h3>
 <p><strong>${n1.name} + ${n2.name}</strong></p>
 <p style="margin-top:10px;">لا توجد بيانات عن تفاعل مباشر بين هذين العنصرين في قاعدة البيانات.</p>
 `;
 }
}
function showProfile() {
 document.getElementById('profileModal').classList.add('active');
}
function toggleTheme() {
 const current = document.documentElement.getAttribute('data-theme');
 document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}
document.getElementById('searchBox').addEventListener('input', (e) => {
 const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
 renderNutrients(activeFilter, e.target.value);
});
document.querySelectorAll('.filter-btn').forEach(btn => {
 btn.addEventListener('click', () => {
 document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
 btn.classList.add('active');
 renderNutrients(btn.dataset.filter, document.getElementById('searchBox').value);
 });
});
document.getElementById('passwordInput').addEventListener('keypress', (e) => {
 if (e.key === 'Enter') checkPassword();
});
document.querySelectorAll('.modal').forEach(modal => {
 modal.addEventListener('click', (e) => {
 if (e.target === modal) modal.classList.remove('active');
 });
});
window.addEventListener('DOMContentLoaded', () => {
 updateOpenCounter();
 renderNutrients();
 populateSelectors();
});