import { useState, useEffect, useRef, useCallback } from "react";

// ============================================================
// JORO PLATFORM - جورو
// Full-Stack E-Commerce + Admin Dashboard
// Saudi Market | Arabic RTL | Multi-vendor | Drop-shipping
// ============================================================

// ─── TRANSLATIONS ───────────────────────────────────────────
const T = {
  en: {
    storeName: "Joro",
    tagline: "Shop Global, Pay Local",
    search: "Search products...",
    cart: "Cart",
    wishlist: "Wishlist",
    profile: "Profile",
    home: "Home",
    categories: "Categories",
    deals: "Deals",
    orders: "My Orders",
    login: "Sign In",
    register: "Create Account",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    outOfStock: "Out of Stock",
    price: "Price",
    originalPrice: "Original Price",
    yourPrice: "Your Price",
    shipping: "Shipping",
    freeShipping: "Free Shipping",
    rating: "Rating",
    reviews: "Reviews",
    description: "Description",
    variants: "Options",
    qty: "Quantity",
    subtotal: "Subtotal",
    total: "Total",
    checkout: "Checkout",
    payWith: "Pay with",
    orderPlaced: "Order Placed!",
    trackOrder: "Track Order",
    admin: "Admin Panel",
    dashboard: "Dashboard",
    products: "Products",
    users: "Users",
    ordersAdmin: "Orders",
    analytics: "Analytics",
    importProduct: "Import Product",
    pasteUrl: "Paste product URL from Amazon, AliExpress, Noon...",
    importing: "Importing...",
    importBtn: "Import",
    margin: "Profit Margin",
    sellingPrice: "Selling Price",
    commission: "Commission",
    supplier: "Supplier",
    vendors: "Vendors",
    coupons: "Coupons",
    notifications: "Notifications",
    darkMode: "Dark Mode",
    language: "Language",
    currency: "Currency",
    loyaltyPoints: "Loyalty Points",
    points: "pts",
    earnPoints: "Earn points with every purchase",
    couponCode: "Coupon Code",
    apply: "Apply",
    remove: "Remove",
    savedAmount: "You saved",
    trending: "Trending Now",
    newArrivals: "New Arrivals",
    recommended: "For You",
    topVendors: "Top Vendors",
    verified: "Verified",
    fastShip: "Fast Shipping",
    returns: "Easy Returns",
    secure: "Secure Payment",
    support: "24/7 Support",
    revenue: "Revenue",
    profit: "Profit",
    totalOrders: "Total Orders",
    activeUsers: "Active Users",
    conversionRate: "Conversion Rate",
    avgOrderValue: "Avg. Order Value",
    syncStatus: "Sync Status",
    lastSync: "Last Synced",
    syncNow: "Sync Now",
    autoSync: "Auto Sync",
    externalUrl: "External URL",
    profitCalc: "Profit Calculator",
    externalCost: "External Cost",
    yourMargin: "Your Margin %",
    finalPrice: "Final Selling Price",
    yourProfit: "Your Profit",
    affiliateLink: "Affiliate Link",
    orderForwarding: "Order Forwarding",
    fraudScore: "Fraud Score",
    lowRisk: "Low Risk",
    medRisk: "Medium Risk",
    highRisk: "High Risk",
    paymentMethods: "Payment Methods",
    mada: "Mada",
    applePay: "Apple Pay",
    stcPay: "STC Pay",
    visaMaster: "Visa / Mastercard",
    tabby: "Tabby – Buy Now Pay Later",
    tamara: "Tamara – Split Payments",
    addressBook: "Address Book",
    addAddress: "Add Address",
    city: "City",
    country: "Country",
    postalCode: "Postal Code",
    phoneNumber: "Phone Number",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot Password?",
    googleLogin: "Continue with Google",
    appleLogin: "Continue with Apple",
    phoneLogin: "Continue with Phone",
    otp: "Enter OTP",
    sendOtp: "Send OTP",
    verify: "Verify",
    categoryElectronics: "Electronics",
    categoryFashion: "Fashion",
    categoryHome: "Home & Living",
    categoryBeauty: "Beauty",
    categorySports: "Sports",
    categoryBooks: "Books",
    categoryToys: "Toys",
    categoryFood: "Food & Groceries",
    filterBy: "Filter By",
    sortBy: "Sort By",
    priceRange: "Price Range",
    brand: "Brand",
    condition: "Condition",
    new: "New",
    used: "Used",
    refurbished: "Refurbished",
    clearFilters: "Clear Filters",
    noResults: "No products found",
    loadMore: "Load More",
    backToTop: "Back to Top",
    shareProduct: "Share",
    copyLink: "Copy Link",
    reportProduct: "Report",
    sellerInfo: "Seller Info",
    visitStore: "Visit Store",
    followStore: "Follow Store",
    productImported: "Product imported successfully!",
    syncComplete: "Sync complete",
    orderForwarded: "Order forwarded to supplier",
    pointsEarned: "points earned!",
  },
  ar: {
    storeName: "جورو",
    tagline: "تسوّق عالمياً، ادفع محلياً",
    search: "ابحث عن منتجات...",
    cart: "السلة",
    wishlist: "المفضلة",
    profile: "الملف الشخصي",
    home: "الرئيسية",
    categories: "الفئات",
    deals: "العروض",
    orders: "طلباتي",
    login: "تسجيل الدخول",
    register: "إنشاء حساب",
    addToCart: "أضف للسلة",
    buyNow: "اشترِ الآن",
    outOfStock: "نفد المخزون",
    price: "السعر",
    originalPrice: "السعر الأصلي",
    yourPrice: "سعرك",
    shipping: "الشحن",
    freeShipping: "شحن مجاني",
    rating: "التقييم",
    reviews: "المراجعات",
    description: "الوصف",
    variants: "الخيارات",
    qty: "الكمية",
    subtotal: "المجموع الفرعي",
    total: "الإجمالي",
    checkout: "الدفع",
    payWith: "الدفع بـ",
    orderPlaced: "تم تقديم الطلب!",
    trackOrder: "تتبع الطلب",
    admin: "لوحة الإدارة",
    dashboard: "لوحة التحكم",
    products: "المنتجات",
    users: "المستخدمون",
    ordersAdmin: "الطلبات",
    analytics: "التحليلات",
    importProduct: "استيراد منتج",
    pasteUrl: "الصق رابط المنتج من أمازون، علي إكسبرس، نون...",
    importing: "جاري الاستيراد...",
    importBtn: "استيراد",
    margin: "هامش الربح",
    sellingPrice: "سعر البيع",
    commission: "العمولة",
    supplier: "المورد",
    vendors: "البائعون",
    coupons: "الكوبونات",
    notifications: "الإشعارات",
    darkMode: "الوضع الداكن",
    language: "اللغة",
    currency: "العملة",
    loyaltyPoints: "نقاط الولاء",
    points: "نقطة",
    earnPoints: "اكسب نقاطاً مع كل عملية شراء",
    couponCode: "رمز الكوبون",
    apply: "تطبيق",
    remove: "إزالة",
    savedAmount: "وفّرت",
    trending: "الأكثر رواجاً",
    newArrivals: "وصل حديثاً",
    recommended: "مقترح لك",
    topVendors: "أفضل البائعين",
    verified: "موثّق",
    fastShip: "شحن سريع",
    returns: "إرجاع سهل",
    secure: "دفع آمن",
    support: "دعم ٢٤/٧",
    revenue: "الإيرادات",
    profit: "الربح",
    totalOrders: "إجمالي الطلبات",
    activeUsers: "المستخدمون النشطون",
    conversionRate: "معدل التحويل",
    avgOrderValue: "متوسط قيمة الطلب",
    syncStatus: "حالة المزامنة",
    lastSync: "آخر مزامنة",
    syncNow: "مزامنة الآن",
    autoSync: "مزامنة تلقائية",
    externalUrl: "الرابط الخارجي",
    profitCalc: "حاسبة الربح",
    externalCost: "التكلفة الخارجية",
    yourMargin: "هامشك %",
    finalPrice: "سعر البيع النهائي",
    yourProfit: "ربحك",
    affiliateLink: "رابط الأفلييت",
    orderForwarding: "توجيه الطلب",
    fraudScore: "مؤشر الاحتيال",
    lowRisk: "خطر منخفض",
    medRisk: "خطر متوسط",
    highRisk: "خطر مرتفع",
    paymentMethods: "طرق الدفع",
    mada: "مدى",
    applePay: "Apple Pay",
    stcPay: "STC Pay",
    visaMaster: "فيزا / ماستركارد",
    tabby: "تابي – اشتر الآن وادفع لاحقاً",
    tamara: "تمارا – تقسيط المدفوعات",
    addressBook: "دفتر العناوين",
    addAddress: "إضافة عنوان",
    city: "المدينة",
    country: "الدولة",
    postalCode: "الرمز البريدي",
    phoneNumber: "رقم الهاتف",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    googleLogin: "المتابعة مع Google",
    appleLogin: "المتابعة مع Apple",
    phoneLogin: "المتابعة برقم الهاتف",
    otp: "أدخل رمز التحقق",
    sendOtp: "إرسال الرمز",
    verify: "تحقق",
    categoryElectronics: "الإلكترونيات",
    categoryFashion: "الأزياء",
    categoryHome: "المنزل والمعيشة",
    categoryBeauty: "الجمال",
    categorySports: "الرياضة",
    categoryBooks: "الكتب",
    categoryToys: "الألعاب",
    categoryFood: "الطعام والبقالة",
    filterBy: "تصفية بـ",
    sortBy: "ترتيب بـ",
    priceRange: "نطاق السعر",
    brand: "الماركة",
    condition: "الحالة",
    new: "جديد",
    used: "مستعمل",
    refurbished: "مُجدَّد",
    clearFilters: "مسح الفلاتر",
    noResults: "لا توجد منتجات",
    loadMore: "تحميل المزيد",
    backToTop: "للأعلى",
    shareProduct: "مشاركة",
    copyLink: "نسخ الرابط",
    reportProduct: "إبلاغ",
    sellerInfo: "معلومات البائع",
    visitStore: "زيارة المتجر",
    followStore: "متابعة المتجر",
    productImported: "تم استيراد المنتج بنجاح!",
    syncComplete: "اكتملت المزامنة",
    orderForwarded: "تم توجيه الطلب للمورد",
    pointsEarned: "نقطة مكتسبة!",
  },
};

// ─── MOCK DATA ───────────────────────────────────────────────
const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Sony WH-1000XM5 Wireless Headphones",
    titleAr: "سماعات سوني WH-1000XM5 اللاسلكية",
    price: 299,
    externalPrice: 249,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&q=80",
    ],
    rating: 4.8,
    reviews: 2341,
    category: "electronics",
    vendor: "TechZone SA",
    source: "amazon",
    sourceUrl: "https://amazon.com/...",
    inStock: true,
    badge: "trending",
    shipping: "free",
    variants: ["Black", "Silver", "Midnight Blue"],
    description: "Industry-leading noise canceling with Auto NC Optimizer. Up to 30 hours battery life.",
    descriptionAr: "إلغاء الضوضاء الرائد في الصناعة مع Auto NC Optimizer. حتى 30 ساعة من عمر البطارية.",
    profit: 50,
    loyaltyPoints: 150,
    fraudScore: 12,
  },
  {
    id: 2,
    title: "iPhone 15 Pro Max 256GB",
    titleAr: "آيفون 15 برو ماكس 256 جيجابايت",
    price: 1499,
    externalPrice: 1299,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80"],
    rating: 4.9,
    reviews: 8901,
    category: "electronics",
    vendor: "Apple Hub KSA",
    source: "noon",
    sourceUrl: "https://noon.com/...",
    inStock: true,
    badge: "hot",
    shipping: "free",
    variants: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    description: "A17 Pro chip. Titanium design. Pro camera system. USB 3.",
    descriptionAr: "شريحة A17 برو. تصميم تيتانيوم. نظام كاميرا احترافية. USB 3.",
    profit: 200,
    loyaltyPoints: 750,
    fraudScore: 8,
  },
  {
    id: 3,
    title: "Nike Air Max 270 React",
    titleAr: "نايكي إير ماكس 270 ريأكت",
    price: 189,
    externalPrice: 149,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80"],
    rating: 4.6,
    reviews: 1204,
    category: "fashion",
    vendor: "Sports World",
    source: "aliexpress",
    sourceUrl: "https://aliexpress.com/...",
    inStock: true,
    badge: "new",
    shipping: "3-5 days",
    variants: ["40", "41", "42", "43", "44", "45"],
    description: "Combines Nike Air Max and React foam for ultimate comfort.",
    descriptionAr: "يجمع بين نايكي إير ماكس ورغوة ريأكت لراحة قصوى.",
    profit: 40,
    loyaltyPoints: 95,
    fraudScore: 5,
  },
  {
    id: 4,
    title: "Samsung 65\" QLED 4K Smart TV",
    titleAr: "سامسونج 65 بوصة QLED 4K سمارت",
    price: 1299,
    externalPrice: 999,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80"],
    rating: 4.7,
    reviews: 3102,
    category: "electronics",
    vendor: "ElectroMart",
    source: "amazon",
    sourceUrl: "https://amazon.com/...",
    inStock: true,
    badge: "deal",
    shipping: "free",
    variants: ["55\"", "65\"", "75\"", "85\""],
    description: "Quantum HDR 32X, Neo Quantum Processor 4K.",
    descriptionAr: "Quantum HDR 32X، معالج نيو كوانتم 4K.",
    profit: 300,
    loyaltyPoints: 650,
    fraudScore: 3,
  },
  {
    id: 5,
    title: "Dyson Airwrap Multi-Styler",
    titleAr: "دايسون إيرراب متعدد الاستخدامات",
    price: 699,
    externalPrice: 549,
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=80"],
    rating: 4.8,
    reviews: 5670,
    category: "beauty",
    vendor: "Beauty Palace",
    source: "temu",
    sourceUrl: "https://temu.com/...",
    inStock: true,
    badge: "trending",
    shipping: "free",
    variants: ["Complete Long", "Complete"],
    description: "Style with air, not extreme heat. Multiple attachments.",
    descriptionAr: "تصفيف بالهواء وليس الحرارة الشديدة. ملحقات متعددة.",
    profit: 150,
    loyaltyPoints: 350,
    fraudScore: 15,
  },
  {
    id: 6,
    title: "Instant Pot Duo 7-in-1",
    titleAr: "انستنت بوت دوو 7 في 1",
    price: 149,
    externalPrice: 99,
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&q=80"],
    rating: 4.5,
    reviews: 12043,
    category: "home",
    vendor: "Kitchen World",
    source: "aliexpress",
    sourceUrl: "https://aliexpress.com/...",
    inStock: false,
    badge: "popular",
    shipping: "5-7 days",
    variants: ["3L", "5.7L", "8L"],
    description: "Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Sauté, Yogurt Maker, Warmer.",
    descriptionAr: "طنجرة ضغط، طهي بطيء، طهي أرز، بخار، قلي، صانعة يوغارت، تدفئة.",
    profit: 50,
    loyaltyPoints: 75,
    fraudScore: 7,
  },
];

const CURRENCIES = {
  SAR: { symbol: "﷼", rate: 1, name: "Saudi Riyal" },
  USD: { symbol: "$", rate: 0.267, name: "US Dollar" },
  EUR: { symbol: "€", rate: 0.245, name: "Euro" },
  GBP: { symbol: "£", rate: 0.211, name: "British Pound" },
  AED: { symbol: "د.إ", rate: 0.98, name: "UAE Dirham" },
  KWD: { symbol: "د.ك", rate: 0.082, name: "Kuwaiti Dinar" },
  EGP: { symbol: "ج.م", rate: 8.3, name: "Egyptian Pound" },
  INR: { symbol: "₹", rate: 22.1, name: "Indian Rupee" },
};

const VENDORS = [
  { id: 1, name: "TechZone SA", nameAr: "تك زون السعودية", rating: 4.9, products: 234, verified: true, commission: 12 },
  { id: 2, name: "Apple Hub KSA", nameAr: "آبل هاب السعودية", rating: 4.8, products: 89, verified: true, commission: 8 },
  { id: 3, name: "Sports World", nameAr: "عالم الرياضة", rating: 4.6, products: 456, verified: true, commission: 15 },
  { id: 4, name: "Beauty Palace", nameAr: "قصر الجمال", rating: 4.7, products: 312, verified: false, commission: 18 },
];

// ─── UTILS ───────────────────────────────────────────────────
const formatPrice = (price, currency = "SAR") => {
  const c = CURRENCIES[currency];
  const converted = (price * (1 / CURRENCIES["SAR"].rate) * c.rate).toFixed(2);
  return `${c.symbol} ${Number(converted).toLocaleString()}`;
};

const PAYMENT_ICONS = {
  mada: "💳",
  apple: "",
  stc: "📱",
  visa: "💳",
  tabby: "🟢",
  tamara: "🔵",
};

// ─── ICONS (SVG inline) ──────────────────────────────────────
const Icon = ({ name, size = 20, color = "currentColor" }) => {
  const icons = {
    cart: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
    heart: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    search: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    user: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    menu: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    star: <svg width={size} height={size} fill={color} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    truck: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    shield: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    trending: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    package: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    chart: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    settings: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
    bell: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
    close: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    plus: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    minus: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    check: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>,
    external: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
    grid: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    list: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>,
    sync: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>,
    zap: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    globe: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    sun: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
    moon: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>,
    chevronRight: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>,
    chevronLeft: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>,
    tag: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    award: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
    users: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    download: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    filter: <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
  };
  return icons[name] || null;
};

// ─── MAIN APP ────────────────────────────────────────────────
export default function JoroApp() {
  const [lang, setLang] = useState("ar");
  const [dark, setDark] = useState(true);
  const [currency, setCurrency] = useState("SAR");
  const [view, setView] = useState("home"); // home | product | cart | checkout | admin | login
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notification, setNotification] = useState(null);
  const [adminTab, setAdminTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loyaltyPoints, setLoyaltyPoints] = useState(1240);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [importUrl, setImportUrl] = useState("");
  const [importing, setImporting] = useState(false);
  const [importedProduct, setImportedProduct] = useState(null);
  const [importMargin, setImportMargin] = useState(20);
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [loginMode, setLoginMode] = useState("login");
  const [selectedVariants, setSelectedVariants] = useState({});
  const [quantities, setQuantities] = useState({});
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("trending");
  const [activePayment, setActivePayment] = useState("mada");
  const [orderSuccess, setOrderSuccess] = useState(false);

  const t = T[lang];
  const isRTL = lang === "ar";

  const notify = (msg, type = "success") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setLoyaltyPoints(p => p + product.loyaltyPoints);
    notify(`${lang === "ar" ? product.titleAr : product.title} ${t.addToCart} ✓`);
  };

  const toggleWishlist = (product) => {
    setWishlist(prev =>
      prev.find(i => i.id === product.id)
        ? prev.filter(i => i.id !== product.id)
        : [...prev, product]
    );
  };

  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = couponApplied ? cartTotal * 0.1 : 0;
  const finalTotal = cartTotal - discount;

  const handleCheckout = () => {
    setOrderSuccess(true);
    setCart([]);
    setCouponApplied(false);
    notify(t.orderPlaced, "success");
    setTimeout(() => { setOrderSuccess(false); setView("home"); }, 3000);
  };

  const handleImport = async () => {
    if (!importUrl) return;
    setImporting(true);
    await new Promise(r => setTimeout(r, 2200));
    const ext = importUrl.includes("amazon") ? "Amazon" : importUrl.includes("aliexpress") ? "AliExpress" : importUrl.includes("noon") ? "Noon" : "Temu";
    const exPrice = Math.floor(Math.random() * 200) + 30;
    const sellPrice = Math.round(exPrice * (1 + importMargin / 100));
    const imported = {
      id: Date.now(),
      title: `Imported Product from ${ext}`,
      titleAr: `منتج مستورد من ${ext}`,
      price: sellPrice,
      externalPrice: exPrice,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
      images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80"],
      rating: 4.3,
      reviews: 0,
      category: "electronics",
      vendor: "Admin Import",
      source: ext.toLowerCase(),
      sourceUrl: importUrl,
      inStock: true,
      badge: "new",
      shipping: "7-14 days",
      variants: ["Default"],
      description: `Auto-imported from ${ext}. Fulfillment handled externally.`,
      descriptionAr: `مستورد تلقائياً من ${ext}. التوصيل يتم خارجياً.`,
      profit: sellPrice - exPrice,
      loyaltyPoints: Math.round(sellPrice * 0.5),
      fraudScore: Math.floor(Math.random() * 20),
    };
    setImportedProduct(imported);
    setImporting(false);
    notify(t.productImported);
  };

  const addImportedToStore = () => {
    setProducts(prev => [importedProduct, ...prev]);
    setImportedProduct(null);
    setImportUrl("");
    notify("✓ Product added to store");
  };

  const filteredProducts = products.filter(p => {
    const matchSearch = !searchQuery || (lang === "ar" ? p.titleAr : p.title).toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = filterCategory === "all" || p.category === filterCategory;
    return matchSearch && matchCat;
  }).sort((a, b) => {
    if (sortBy === "priceAsc") return a.price - b.price;
    if (sortBy === "priceDesc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.reviews - a.reviews;
  });

  // ─── STYLES ─────────────────────────────────────────────────
  const theme = {
    bg: dark ? "#0a0a0f" : "#f8f7ff",
    card: dark ? "#13131a" : "#ffffff",
    cardHover: dark ? "#1a1a24" : "#f0eefc",
    border: dark ? "#1e1e2e" : "#e8e4f5",
    text: dark ? "#f0eeff" : "#1a1228",
    subtext: dark ? "#8888aa" : "#6b6580",
    accent: "#7c3aed",
    accentLight: "#a855f7",
    accentGlow: "rgba(124,58,237,0.25)",
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
    gold: "#fbbf24",
    nav: dark ? "rgba(10,10,15,0.95)" : "rgba(248,247,255,0.95)",
    input: dark ? "#1a1a26" : "#f0eeff",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)",
    shimmer: dark ? "#1e1e2e" : "#f5f3ff",
  };

  const css = {
    app: { minHeight: "100vh", background: theme.bg, color: theme.text, fontFamily: isRTL ? "'Noto Kufi Arabic','Cairo',sans-serif" : "'DM Sans','Outfit',sans-serif", direction: isRTL ? "rtl" : "ltr", transition: "all 0.3s ease", position: "relative", overflow: "hidden" },
    nav: { position: "fixed", top: 0, width: "100%", zIndex: 1000, background: theme.nav, backdropFilter: "blur(20px)", borderBottom: `1px solid ${theme.border}`, padding: "0 1.5rem", display: "flex", alignItems: "center", gap: "1rem", height: "64px" },
    logo: { fontWeight: 900, fontSize: "1.8rem", background: theme.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", cursor: "pointer", letterSpacing: "-1px" },
    searchBar: { flex: 1, maxWidth: "480px", margin: "0 1rem", position: "relative" },
    searchInput: { width: "100%", padding: "0.6rem 1rem 0.6rem 2.5rem", borderRadius: "50px", border: `1px solid ${theme.border}`, background: theme.input, color: theme.text, fontSize: "0.9rem", outline: "none" },
    btn: (variant = "primary", sm = false) => ({
      padding: sm ? "0.4rem 1rem" : "0.7rem 1.5rem",
      borderRadius: "50px",
      border: "none",
      cursor: "pointer",
      fontWeight: 700,
      fontSize: sm ? "0.8rem" : "0.9rem",
      fontFamily: "inherit",
      transition: "all 0.2s",
      background: variant === "primary" ? theme.gradient : variant === "outline" ? "transparent" : variant === "ghost" ? "transparent" : theme.card,
      color: variant === "primary" ? "#fff" : variant === "outline" ? theme.accent : theme.text,
      border: variant === "outline" ? `1.5px solid ${theme.accent}` : "none",
      boxShadow: variant === "primary" ? `0 0 20px ${theme.accentGlow}` : "none",
    }),
    card: { background: theme.card, borderRadius: "16px", border: `1px solid ${theme.border}`, overflow: "hidden", transition: "all 0.3s", cursor: "pointer" },
    badge: (type) => ({ display: "inline-flex", alignItems: "center", padding: "2px 8px", borderRadius: "50px", fontSize: "0.7rem", fontWeight: 700, background: type === "trending" ? "rgba(251,191,36,0.15)" : type === "hot" ? "rgba(239,68,68,0.15)" : type === "new" ? "rgba(16,185,129,0.15)" : "rgba(124,58,237,0.15)", color: type === "trending" ? "#fbbf24" : type === "hot" ? "#ef4444" : type === "new" ? "#10b981" : "#a855f7" }),
    section: { padding: "5rem 1.5rem 2rem" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.2rem" },
    tag: { display: "inline-block", padding: "0.2rem 0.7rem", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 600, background: `${theme.accent}20`, color: theme.accentLight },
    stat: { background: theme.card, borderRadius: "16px", padding: "1.5rem", border: `1px solid ${theme.border}` },
    input: { width: "100%", padding: "0.75rem 1rem", borderRadius: "12px", border: `1.5px solid ${theme.border}`, background: theme.input, color: theme.text, fontSize: "0.9rem", outline: "none", fontFamily: "inherit" },
    adminSidebar: { width: "220px", background: theme.card, borderRight: `1px solid ${theme.border}`, minHeight: "100vh", padding: "1rem 0", position: "fixed", top: "64px", [isRTL ? "right" : "left"]: 0 },
    adminContent: { [isRTL ? "marginRight" : "marginLeft"]: "220px", padding: "5.5rem 2rem 2rem" },
  };

  // ─── NOTIFICATION ────────────────────────────────────────────
  const Notif = () => notification ? (
    <div style={{ position: "fixed", bottom: "2rem", [isRTL ? "left" : "right"]: "1.5rem", zIndex: 9999, background: theme.success, color: "#fff", padding: "0.8rem 1.5rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.9rem", boxShadow: "0 8px 30px rgba(16,185,129,0.4)", animation: "slideIn 0.3s ease", maxWidth: "300px" }}>
      {notification.msg}
    </div>
  ) : null;

  // ─── TOP NAV ─────────────────────────────────────────────────
  const Navbar = () => (
    <nav style={css.nav}>
      <div style={css.logo} onClick={() => setView("home")}>
        {t.storeName}
      </div>

      <div style={css.searchBar}>
        <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", [isRTL ? "right" : "left"]: "12px", color: theme.subtext }}>
          <Icon name="search" size={16} />
        </div>
        <input
          style={{ ...css.searchInput, [isRTL ? "paddingRight" : "paddingLeft"]: "2.5rem" }}
          placeholder={t.search}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginInlineStart: "auto" }}>
        {/* Currency */}
        <select
          value={currency}
          onChange={e => setCurrency(e.target.value)}
          style={{ background: theme.input, color: theme.text, border: `1px solid ${theme.border}`, borderRadius: "8px", padding: "0.3rem 0.5rem", fontSize: "0.8rem", fontFamily: "inherit", cursor: "pointer" }}
        >
          {Object.entries(CURRENCIES).map(([k, v]) => (
            <option key={k} value={k}>{k} {v.symbol}</option>
          ))}
        </select>

        {/* Lang toggle */}
        <button onClick={() => setLang(l => l === "ar" ? "en" : "ar")} style={{ ...css.btn("ghost", true), padding: "0.3rem 0.8rem", border: `1px solid ${theme.border}` }}>
          {lang === "ar" ? "EN" : "العربية"}
        </button>

        {/* Dark mode */}
        <button onClick={() => setDark(d => !d)} style={{ ...css.btn("ghost", true), padding: "0.4rem" }}>
          <Icon name={dark ? "sun" : "moon"} size={18} color={theme.subtext} />
        </button>

        {/* Wishlist */}
        <button onClick={() => setView("wishlist")} style={{ ...css.btn("ghost", true), padding: "0.4rem", position: "relative" }}>
          <Icon name="heart" size={20} color={wishlist.length ? "#ef4444" : theme.subtext} />
          {wishlist.length > 0 && <span style={{ position: "absolute", top: "-4px", [isRTL ? "left" : "right"]: "-4px", background: "#ef4444", color: "#fff", borderRadius: "50%", width: "16px", height: "16px", fontSize: "0.65rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{wishlist.length}</span>}
        </button>

        {/* Cart */}
        <button onClick={() => setView("cart")} style={{ ...css.btn("ghost", true), padding: "0.4rem", position: "relative" }}>
          <Icon name="cart" size={20} color={theme.subtext} />
          {cart.length > 0 && <span style={{ position: "absolute", top: "-4px", [isRTL ? "left" : "right"]: "-4px", background: theme.accent, color: "#fff", borderRadius: "50%", width: "16px", height: "16px", fontSize: "0.65rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{cart.reduce((s, i) => s + i.qty, 0)}</span>}
        </button>

        {/* Admin */}
        <button onClick={() => setView("admin")} style={css.btn("outline", true)}>
          <Icon name="settings" size={14} /> {" "}{t.admin}
        </button>
      </div>
    </nav>
  );

  // ─── HERO ─────────────────────────────────────────────────────
  const Hero = () => (
    <div style={{ position: "relative", background: dark ? "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)" : "linear-gradient(135deg, #f8f7ff 0%, #ede9ff 50%, #f8f7ff 100%)", padding: "7rem 1.5rem 3rem", overflow: "hidden", minHeight: "400px", display: "flex", alignItems: "center" }}>
      {/* Ambient orbs */}
      <div style={{ position: "absolute", top: "20%", [isRTL ? "right" : "left"]: "10%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", [isRTL ? "left" : "right"]: "15%", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(30px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "600px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: `${theme.accent}20`, border: `1px solid ${theme.accent}40`, borderRadius: "50px", padding: "0.3rem 1rem", marginBottom: "1.5rem" }}>
          <Icon name="zap" size={14} color={theme.accentLight} />
          <span style={{ color: theme.accentLight, fontSize: "0.8rem", fontWeight: 700 }}>{t.tagline}</span>
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1rem", background: theme.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {lang === "ar" ? "تسوّق بلا حدود\nمع جورو" : "Shop Without\nLimits with Joro"}
        </h1>
        <p style={{ color: theme.subtext, fontSize: "1.1rem", marginBottom: "2rem", lineHeight: 1.6 }}>
          {lang === "ar" ? "منتجات عالمية من أمازون، نون، علي إكسبرس وأكثر — بالأسعار المحلية وطرق الدفع السعودية" : "Global products from Amazon, Noon, AliExpress & more — at local prices with Saudi payment methods"}
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button style={css.btn("primary")} onClick={() => document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" })}>
            {lang === "ar" ? "تسوّق الآن" : "Shop Now"} →
          </button>
          <button style={css.btn("outline")} onClick={() => setView("admin")}>
            {lang === "ar" ? "لوحة الإدارة" : "Admin Panel"}
          </button>
        </div>

        {/* Trust badges */}
        <div style={{ display: "flex", gap: "1.5rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
          {[
            { icon: "truck", label: t.fastShip },
            { icon: "shield", label: t.secure },
            { icon: "award", label: t.returns },
          ].map(b => (
            <div key={b.label} style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: theme.subtext, fontSize: "0.8rem" }}>
              <Icon name={b.icon} size={16} color={theme.accentLight} />
              {b.label}
            </div>
          ))}
        </div>
      </div>

      {/* Floating product cards */}
      <div style={{ position: "absolute", [isRTL ? "left" : "right"]: "5%", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "0.8rem", opacity: 0.85 }}>
        {products.slice(0, 3).map((p, i) => (
          <div key={p.id} style={{ background: theme.card, border: `1px solid ${theme.border}`, borderRadius: "12px", padding: "0.6rem 1rem", display: "flex", alignItems: "center", gap: "0.8rem", width: "200px", boxShadow: `0 ${8 + i * 4}px ${20 + i * 10}px rgba(0,0,0,0.3)`, transform: `translateX(${i * 8}px)` }}>
            <img src={p.image} alt="" style={{ width: "40px", height: "40px", borderRadius: "8px", objectFit: "cover" }} />
            <div style={{ flex: 1, overflow: "hidden" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{lang === "ar" ? p.titleAr : p.title}</div>
              <div style={{ color: theme.accentLight, fontSize: "0.75rem", fontWeight: 700 }}>{formatPrice(p.price, currency)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ─── PRODUCT CARD ─────────────────────────────────────────────
  const ProductCard = ({ product }) => {
    const inWishlist = wishlist.find(i => i.id === product.id);
    const profit = product.price - product.externalPrice;
    const profitPct = Math.round((profit / product.externalPrice) * 100);

    return (
      <div
        style={{ ...css.card, display: "flex", flexDirection: "column" }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 20px 40px ${theme.accentGlow}`; e.currentTarget.style.borderColor = `${theme.accent}50`; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; e.currentTarget.style.borderColor = theme.border; }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={product.image}
            alt={lang === "ar" ? product.titleAr : product.title}
            style={{ width: "100%", height: "180px", objectFit: "cover" }}
            onClick={() => { setSelectedProduct(product); setView("product"); }}
          />
          {product.badge && (
            <span style={{ ...css.badge(product.badge), position: "absolute", top: "10px", [isRTL ? "right" : "left"]: "10px" }}>
              {product.badge === "trending" ? "🔥" : product.badge === "hot" ? "⚡" : product.badge === "new" ? "✨" : "🏷️"} {product.badge}
            </span>
          )}
          <button
            onClick={() => toggleWishlist(product)}
            style={{ position: "absolute", top: "10px", [isRTL ? "left" : "right"]: "10px", background: dark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.9)", border: "none", borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
          >
            <Icon name="heart" size={16} color={inWishlist ? "#ef4444" : theme.subtext} />
          </button>
          {!product.inStock && (
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 700, background: "#ef4444", padding: "0.3rem 1rem", borderRadius: "50px" }}>{t.outOfStock}</span>
            </div>
          )}
        </div>

        <div style={{ padding: "1rem", display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.4rem" }}>
            <span style={css.tag}>{product.source}</span>
            {product.vendor && <span style={{ fontSize: "0.7rem", color: theme.subtext }}>{product.vendor}</span>}
          </div>

          <h3
            style={{ fontSize: "0.9rem", fontWeight: 700, lineHeight: 1.4, marginBottom: "0.6rem", cursor: "pointer", flex: 1 }}
            onClick={() => { setSelectedProduct(product); setView("product"); }}
          >
            {lang === "ar" ? product.titleAr : product.title}
          </h3>

          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.6rem" }}>
            <Icon name="star" size={14} color={theme.gold} />
            <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>{product.rating}</span>
            <span style={{ fontSize: "0.75rem", color: theme.subtext }}>({product.reviews.toLocaleString()})</span>
          </div>

          <div style={{ marginBottom: "0.8rem" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
              <span style={{ fontWeight: 900, fontSize: "1.1rem", color: theme.accentLight }}>{formatPrice(product.price, currency)}</span>
              <span style={{ fontSize: "0.8rem", color: theme.subtext, textDecoration: "line-through" }}>{formatPrice(product.externalPrice, currency)}</span>
            </div>
            <div style={{ fontSize: "0.7rem", color: theme.success, fontWeight: 700 }}>+{profitPct}% {lang === "ar" ? "ربح" : "profit"}</div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.8rem", fontSize: "0.75rem", color: theme.subtext }}>
            <Icon name="truck" size={12} />
            {product.shipping === "free" ? <span style={{ color: theme.success, fontWeight: 700 }}>{t.freeShipping}</span> : <span>{product.shipping}</span>}
          </div>

          <button
            style={{ ...css.btn("primary", true), width: "100%", opacity: product.inStock ? 1 : 0.5 }}
            disabled={!product.inStock}
            onClick={() => addToCart(product)}
          >
            {product.inStock ? t.addToCart : t.outOfStock}
          </button>
        </div>
      </div>
    );
  };

  // ─── HOME VIEW ────────────────────────────────────────────────
  const HomeView = () => {
    const categories = [
      { key: "electronics", emoji: "🔌", label: t.categoryElectronics },
      { key: "fashion", emoji: "👗", label: t.categoryFashion },
      { key: "home", emoji: "🏠", label: t.categoryHome },
      { key: "beauty", emoji: "💄", label: t.categoryBeauty },
      { key: "sports", emoji: "⚽", label: t.categorySports },
      { key: "food", emoji: "🍕", label: t.categoryFood },
    ];

    return (
      <div>
        <Hero />

        {/* Loyalty points bar */}
        <div style={{ background: `linear-gradient(135deg, ${theme.accent}, #a855f7)`, padding: "0.8rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#fff" }}>
            <Icon name="award" size={18} color="#fbbf24" />
            <span style={{ fontWeight: 700 }}>{t.loyaltyPoints}: {loyaltyPoints.toLocaleString()} {t.points}</span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>{t.earnPoints}</span>
        </div>

        {/* Categories */}
        <div style={{ padding: "2rem 1.5rem 1rem" }}>
          <h2 style={{ fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>{t.categories}</h2>
          <div style={{ display: "flex", gap: "0.8rem", overflowX: "auto", paddingBottom: "0.5rem" }}>
            <div
              onClick={() => setFilterCategory("all")}
              style={{ minWidth: "90px", background: filterCategory === "all" ? theme.gradient : theme.card, borderRadius: "12px", padding: "1rem", textAlign: "center", cursor: "pointer", border: `1px solid ${filterCategory === "all" ? "transparent" : theme.border}`, flexShrink: 0 }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>🛍️</div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: filterCategory === "all" ? "#fff" : theme.text }}>{lang === "ar" ? "الكل" : "All"}</div>
            </div>
            {categories.map(cat => (
              <div
                key={cat.key}
                onClick={() => setFilterCategory(cat.key)}
                style={{ minWidth: "90px", background: filterCategory === cat.key ? theme.gradient : theme.card, borderRadius: "12px", padding: "1rem", textAlign: "center", cursor: "pointer", border: `1px solid ${filterCategory === cat.key ? "transparent" : theme.border}`, flexShrink: 0, transition: "all 0.2s" }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>{cat.emoji}</div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: filterCategory === cat.key ? "#fff" : theme.text }}>{cat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sort bar */}
        <div style={{ padding: "0 1.5rem 1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: theme.subtext, fontSize: "0.85rem" }}>
            <Icon name="filter" size={14} />
            {t.sortBy}:
          </div>
          {["trending", "rating", "priceAsc", "priceDesc"].map(s => (
            <button key={s} onClick={() => setSortBy(s)} style={{ padding: "0.3rem 0.8rem", borderRadius: "50px", border: `1px solid ${sortBy === s ? theme.accent : theme.border}`, background: sortBy === s ? `${theme.accent}20` : "transparent", color: sortBy === s ? theme.accentLight : theme.subtext, fontSize: "0.78rem", fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
              {s === "trending" ? (lang === "ar" ? "رائج" : "Trending") : s === "rating" ? (lang === "ar" ? "تقييم" : "Rating") : s === "priceAsc" ? (lang === "ar" ? "سعر ↑" : "Price ↑") : (lang === "ar" ? "سعر ↓" : "Price ↓")}
            </button>
          ))}
        </div>

        {/* Products */}
        <div id="products-section" style={{ padding: "0 1.5rem 2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.2rem" }}>
            <Icon name="trending" size={18} color={theme.accentLight} />
            <h2 style={{ fontWeight: 800, fontSize: "1.4rem" }}>{t.trending}</h2>
            <span style={{ color: theme.subtext, fontSize: "0.85rem", marginInlineStart: "auto" }}>{filteredProducts.length} {lang === "ar" ? "منتج" : "products"}</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: "center", color: theme.subtext, padding: "3rem" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
              {t.noResults}
            </div>
          ) : (
            <div style={css.grid}>
              {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>

        {/* Top vendors */}
        <div style={{ padding: "0 1.5rem 2rem" }}>
          <h2 style={{ fontWeight: 800, fontSize: "1.4rem", marginBottom: "1.2rem" }}>{t.topVendors}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
            {VENDORS.map(v => (
              <div key={v.id} style={{ ...css.card, padding: "1.2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: theme.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "1.2rem", color: "#fff" }}>
                    {(lang === "ar" ? v.nameAr : v.name)[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{lang === "ar" ? v.nameAr : v.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      {v.verified && <span style={{ ...css.badge("new"), fontSize: "0.65rem" }}>✓ {t.verified}</span>}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: theme.subtext }}>
                  <span>⭐ {v.rating}</span>
                  <span>{v.products} {lang === "ar" ? "منتج" : "products"}</span>
                  <span style={{ color: theme.success, fontWeight: 700 }}>{v.commission}% {lang === "ar" ? "عمولة" : "comm."}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // ─── PRODUCT DETAIL ───────────────────────────────────────────
  const ProductView = () => {
    if (!selectedProduct) return null;
    const p = selectedProduct;
    const [qty, setQty] = useState(1);
    const [selVariant, setSelVariant] = useState(p.variants[0]);
    const [activeImg, setActiveImg] = useState(0);

    return (
      <div style={{ paddingTop: "5rem", maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem 2rem" }}>
        <button onClick={() => setView("home")} style={{ ...css.btn("ghost", true), marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem", color: theme.subtext }}>
          <Icon name={isRTL ? "chevronRight" : "chevronLeft"} size={16} /> {lang === "ar" ? "رجوع" : "Back"}
        </button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
          {/* Images */}
          <div>
            <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "0.8rem", background: theme.card }}>
              <img src={p.images[activeImg] || p.image} alt="" style={{ width: "100%", height: "380px", objectFit: "contain", padding: "1rem" }} />
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {p.images.map((img, i) => (
                <div key={i} onClick={() => setActiveImg(i)} style={{ width: "70px", height: "70px", borderRadius: "10px", overflow: "hidden", border: `2px solid ${activeImg === i ? theme.accent : theme.border}`, cursor: "pointer" }}>
                  <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.8rem", flexWrap: "wrap" }}>
              <span style={css.badge(p.badge)}>{p.badge}</span>
              <span style={css.tag}>{p.source}</span>
              <span style={{ ...css.tag, background: `${theme.success}20`, color: theme.success }}>{p.vendor}</span>
            </div>

            <h1 style={{ fontSize: "1.5rem", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
              {lang === "ar" ? p.titleAr : p.title}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
              <div style={{ display: "flex", gap: "2px" }}>
                {[1,2,3,4,5].map(i => <Icon key={i} name="star" size={16} color={i <= Math.round(p.rating) ? theme.gold : theme.border} />)}
              </div>
              <span style={{ fontWeight: 700 }}>{p.rating}</span>
              <span style={{ color: theme.subtext, fontSize: "0.85rem" }}>({p.reviews.toLocaleString()} {t.reviews})</span>
            </div>

            <div style={{ background: theme.card, borderRadius: "16px", padding: "1.2rem", marginBottom: "1.2rem", border: `1px solid ${theme.border}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: theme.accentLight }}>{formatPrice(p.price, currency)}</span>
                <div>
                  <div style={{ color: theme.subtext, textDecoration: "line-through", fontSize: "0.9rem" }}>{formatPrice(p.externalPrice, currency)}</div>
                  <div style={{ color: theme.success, fontSize: "0.8rem", fontWeight: 700 }}>
                    {lang === "ar" ? "توفر" : "Save"} {formatPrice(p.price - p.externalPrice, currency)}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.8rem" }}>
                <div style={{ ...css.tag, background: `${theme.gold}20`, color: theme.gold }}>🏆 +{p.loyaltyPoints} {t.points}</div>
                <div style={{ ...css.tag, background: `${theme.success}20`, color: theme.success }}>✓ {t.freeShipping}</div>
              </div>
            </div>

            {/* Variants */}
            {p.variants && p.variants.length > 1 && (
              <div style={{ marginBottom: "1.2rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.9rem" }}>{t.variants}</div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {p.variants.map(v => (
                    <button key={v} onClick={() => setSelVariant(v)} style={{ padding: "0.4rem 1rem", borderRadius: "8px", border: `1.5px solid ${selVariant === v ? theme.accent : theme.border}`, background: selVariant === v ? `${theme.accent}20` : "transparent", color: selVariant === v ? theme.accentLight : theme.text, cursor: "pointer", fontFamily: "inherit", fontSize: "0.85rem", fontWeight: 600 }}>
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Qty */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{t.qty}:</div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: theme.input, borderRadius: "50px", padding: "0.2rem" }}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: "32px", height: "32px", borderRadius: "50%", border: "none", background: theme.card, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="minus" size={16} color={theme.text} />
                </button>
                <span style={{ fontWeight: 700, minWidth: "30px", textAlign: "center" }}>{qty}</span>
                <button onClick={() => setQty(q => q + 1)} style={{ width: "32px", height: "32px", borderRadius: "50%", border: "none", background: theme.gradient, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="plus" size={16} color="#fff" />
                </button>
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.8rem", marginBottom: "1.5rem" }}>
              <button style={{ ...css.btn("primary"), flex: 1 }} onClick={() => { for (let i = 0; i < qty; i++) addToCart(p); setView("cart"); }}>
                {t.buyNow}
              </button>
              <button style={{ ...css.btn("outline") }} onClick={() => addToCart(p)}>
                {t.addToCart}
              </button>
              <button style={{ ...css.btn("ghost", true), padding: "0.7rem" }} onClick={() => toggleWishlist(p)}>
                <Icon name="heart" size={20} color={wishlist.find(i => i.id === p.id) ? "#ef4444" : theme.subtext} />
              </button>
            </div>

            {/* Description */}
            <div style={{ background: theme.card, borderRadius: "12px", padding: "1rem", border: `1px solid ${theme.border}` }}>
              <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{t.description}</div>
              <p style={{ color: theme.subtext, fontSize: "0.9rem", lineHeight: 1.7 }}>
                {lang === "ar" ? p.descriptionAr : p.description}
              </p>
            </div>

            {/* Source link */}
            <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: theme.subtext }}>
              <Icon name="external" size={14} />
              <span>{lang === "ar" ? "المصدر:" : "Source:"} {p.source}</span>
              <span style={{ ...css.tag, fontSize: "0.7rem" }}>{lang === "ar" ? "شحن خارجي" : "External Fulfillment"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ─── CART VIEW ────────────────────────────────────────────────
  const CartView = () => {
    const updateQty = (id, delta) => setCart(prev =>
      prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i).filter(i => i.qty > 0)
    );
    const removeItem = (id) => setCart(prev => prev.filter(i => i.id !== id));

    if (orderSuccess) return (
      <div style={{ paddingTop: "64px", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1.5rem", textAlign: "center" }}>
        <div style={{ fontSize: "5rem" }}>🎉</div>
        <h2 style={{ fontSize: "2rem", fontWeight: 900, color: theme.success }}>{t.orderPlaced}</h2>
        <p style={{ color: theme.subtext }}>{lang === "ar" ? "سيتم توجيه طلبك للمورد تلقائياً" : "Your order will be forwarded to supplier automatically"}</p>
        <div style={{ ...css.tag, fontSize: "0.85rem", padding: "0.5rem 1rem" }}>
          {lang === "ar" ? "رقم الطلب: #JO-2024-" : "Order #JO-2024-"}{Math.random().toString(36).substr(2, 6).toUpperCase()}
        </div>
      </div>
    );

    return (
      <div style={{ paddingTop: "64px", maxWidth: "900px", margin: "0 auto", padding: "5.5rem 1.5rem 2rem" }}>
        <h1 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem" }}>
          {t.cart} ({cart.reduce((s, i) => s + i.qty, 0)})
        </h1>

        {cart.length === 0 ? (
          <div style={{ textAlign: "center", color: theme.subtext, padding: "4rem" }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🛒</div>
            <p>{lang === "ar" ? "السلة فارغة" : "Your cart is empty"}</p>
            <button style={{ ...css.btn("primary"), marginTop: "1rem" }} onClick={() => setView("home")}>{lang === "ar" ? "تسوّق الآن" : "Start Shopping"}</button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "1.5rem" }}>
            {/* Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {cart.map(item => (
                <div key={item.id} style={{ ...css.card, padding: "1rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                  <img src={item.image} alt="" style={{ width: "80px", height: "80px", borderRadius: "10px", objectFit: "cover" }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.3rem" }}>{lang === "ar" ? item.titleAr : item.title}</div>
                    <div style={{ color: theme.accentLight, fontWeight: 800 }}>{formatPrice(item.price, currency)}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <button onClick={() => updateQty(item.id, -1)} style={{ width: "28px", height: "28px", borderRadius: "50%", border: `1px solid ${theme.border}`, background: "transparent", cursor: "pointer", color: theme.text }}>−</button>
                    <span style={{ fontWeight: 700, minWidth: "24px", textAlign: "center" }}>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} style={{ width: "28px", height: "28px", borderRadius: "50%", border: `1px solid ${theme.border}`, background: "transparent", cursor: "pointer", color: theme.text }}>+</button>
                  </div>
                  <button onClick={() => removeItem(item.id)} style={{ background: "transparent", border: "none", cursor: "pointer", color: "#ef4444" }}>
                    <Icon name="close" size={18} color="#ef4444" />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div style={{ ...css.card, padding: "1.5rem", marginBottom: "1rem" }}>
                <h3 style={{ fontWeight: 800, marginBottom: "1rem" }}>{lang === "ar" ? "ملخص الطلب" : "Order Summary"}</h3>

                {/* Coupon */}
                <div style={{ marginBottom: "1rem" }}>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <input
                      style={{ ...css.input, flex: 1 }}
                      placeholder={t.couponCode}
                      value={coupon}
                      onChange={e => setCoupon(e.target.value.toUpperCase())}
                    />
                    <button style={css.btn("outline", true)} onClick={() => { if (coupon === "JORO10") { setCouponApplied(true); notify("✓ 10% off applied!"); } }}>
                      {t.apply}
                    </button>
                  </div>
                  {couponApplied && <div style={{ color: theme.success, fontSize: "0.8rem", marginTop: "0.3rem", fontWeight: 700 }}>✓ JORO10 – 10% {lang === "ar" ? "خصم" : "discount"}</div>}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", borderTop: `1px solid ${theme.border}`, paddingTop: "1rem" }}>
                  {[
                    { label: t.subtotal, value: formatPrice(cartTotal, currency) },
                    { label: t.shipping, value: lang === "ar" ? "مجاني" : "Free", green: true },
                    ...(couponApplied ? [{ label: t.savedAmount, value: `-${formatPrice(discount, currency)}`, green: true }] : []),
                  ].map(row => (
                    <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                      <span style={{ color: theme.subtext }}>{row.label}</span>
                      <span style={{ fontWeight: 700, color: row.green ? theme.success : theme.text }}>{row.value}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 900, fontSize: "1.1rem", borderTop: `1px solid ${theme.border}`, paddingTop: "0.8rem", marginTop: "0.3rem" }}>
                    <span>{t.total}</span>
                    <span style={{ color: theme.accentLight }}>{formatPrice(finalTotal, currency)}</span>
                  </div>
                </div>

                {/* Loyalty points */}
                <div style={{ background: `${theme.gold}15`, borderRadius: "10px", padding: "0.7rem", marginTop: "0.8rem", border: `1px solid ${theme.gold}30`, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Icon name="award" size={16} color={theme.gold} />
                  <span style={{ fontSize: "0.8rem", color: theme.gold, fontWeight: 700 }}>
                    +{Math.round(finalTotal * 0.5)} {t.loyaltyPoints}
                  </span>
                </div>

                <button style={{ ...css.btn("primary"), width: "100%", marginTop: "1rem", padding: "1rem" }} onClick={() => setView("checkout")}>
                  {t.checkout} →
                </button>
              </div>

              {/* Security badges */}
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                {["🔒", "✅", "🛡️"].map((e, i) => (
                  <div key={i} style={{ fontSize: "0.75rem", color: theme.subtext, display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    {e} {i === 0 ? t.secure : i === 1 ? t.returns : t.support}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // ─── CHECKOUT VIEW ────────────────────────────────────────────
  const CheckoutView = () => {
    const payments = [
      { key: "mada", icon: "💳", label: t.mada, color: "#1da462", desc: lang === "ar" ? "بطاقة مدى السعودية" : "Saudi debit card" },
      { key: "apple", icon: "", label: t.applePay, color: "#000", desc: lang === "ar" ? "ادفع باللمس أو الوجه" : "Pay with Touch/Face ID" },
      { key: "stc", icon: "📱", label: t.stcPay, color: "#4b0082", desc: lang === "ar" ? "محفظة STC Pay" : "STC Pay wallet" },
      { key: "visa", icon: "💳", label: t.visaMaster, color: "#1a1f71", desc: lang === "ar" ? "الدفع الدولي" : "International cards" },
      { key: "tabby", icon: "🟢", label: t.tabby, color: "#3d9970", desc: lang === "ar" ? "اشتري الآن وادفع لاحقاً" : "Buy now, pay in 4 installments" },
      { key: "tamara", icon: "🔵", label: t.tamara, color: "#2c6fad", desc: lang === "ar" ? "قسّم على 3 أشهر بدون فوائد" : "Split into 3 months, 0% interest" },
    ];

    return (
      <div style={{ paddingTop: "64px", maxWidth: "800px", margin: "0 auto", padding: "5.5rem 1.5rem 2rem" }}>
        <h1 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem" }}>{t.checkout}</h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "1.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Delivery info */}
            <div style={{ ...css.card, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Icon name="truck" size={18} color={theme.accentLight} /> {lang === "ar" ? "عنوان التوصيل" : "Delivery Address"}
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
                {[
                  { placeholder: lang === "ar" ? "الاسم الأول" : "First Name" },
                  { placeholder: lang === "ar" ? "الاسم الأخير" : "Last Name" },
                  { placeholder: t.city, full: false },
                  { placeholder: t.postalCode },
                  { placeholder: t.phoneNumber, full: false },
                  { placeholder: t.email },
                ].map((f, i) => (
                  <input key={i} placeholder={f.placeholder} style={{ ...css.input, gridColumn: f.full === false ? "span 1" : "auto" }} />
                ))}
              </div>
            </div>

            {/* Payment methods */}
            <div style={{ ...css.card, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Icon name="shield" size={18} color={theme.accentLight} /> {t.paymentMethods}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {payments.map(pm => (
                  <div
                    key={pm.key}
                    onClick={() => setActivePayment(pm.key)}
                    style={{ padding: "1rem", borderRadius: "12px", border: `2px solid ${activePayment === pm.key ? theme.accent : theme.border}`, background: activePayment === pm.key ? `${theme.accent}10` : "transparent", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.8rem", transition: "all 0.2s" }}
                  >
                    <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: `${pm.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
                      {pm.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{pm.label}</div>
                      <div style={{ fontSize: "0.75rem", color: theme.subtext }}>{pm.desc}</div>
                    </div>
                    <div style={{ width: "18px", height: "18px", borderRadius: "50%", border: `2px solid ${activePayment === pm.key ? theme.accent : theme.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {activePayment === pm.key && <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: theme.accent }} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div>
            <div style={{ ...css.card, padding: "1.5rem", position: "sticky", top: "80px" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>{lang === "ar" ? "ملخص الطلب" : "Order Summary"}</h3>
              {cart.map(item => (
                <div key={item.id} style={{ display: "flex", gap: "0.6rem", marginBottom: "0.8rem", alignItems: "center" }}>
                  <img src={item.image} alt="" style={{ width: "44px", height: "44px", borderRadius: "8px", objectFit: "cover" }} />
                  <div style={{ flex: 1, fontSize: "0.8rem" }}>
                    <div style={{ fontWeight: 600, lineHeight: 1.3 }}>{lang === "ar" ? item.titleAr : item.title}</div>
                    <div style={{ color: theme.subtext }}>×{item.qty}</div>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>{formatPrice(item.price * item.qty, currency)}</div>
                </div>
              ))}
              <div style={{ borderTop: `1px solid ${theme.border}`, paddingTop: "1rem", marginTop: "0.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 900, fontSize: "1.1rem", marginBottom: "1rem" }}>
                  <span>{t.total}</span>
                  <span style={{ color: theme.accentLight }}>{formatPrice(finalTotal, currency)}</span>
                </div>
                <button style={{ ...css.btn("primary"), width: "100%", padding: "1rem", fontSize: "1rem" }} onClick={handleCheckout}>
                  {t.payWith} {payments.find(p => p.key === activePayment)?.label} →
                </button>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", marginTop: "0.8rem", fontSize: "0.75rem", color: theme.subtext }}>
                  <Icon name="shield" size={12} color={theme.success} />
                  {lang === "ar" ? "دفع آمن ومشفر بالكامل" : "Fully encrypted & secure payment"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ─── ADMIN PANEL ──────────────────────────────────────────────
  const AdminView = () => {
    const [extCost, setExtCost] = useState(100);
    const [marginPct, setMarginPct] = useState(20);
    const sellPrice = Math.round(extCost * (1 + marginPct / 100));
    const myProfit = sellPrice - extCost;

    const statsData = [
      { label: t.revenue, value: "﷼ 128,420", change: "+18%", icon: "chart", color: theme.accentLight },
      { label: t.profit, value: "﷼ 38,726", change: "+23%", icon: "trending", color: theme.success },
      { label: t.totalOrders, value: "2,847", change: "+12%", icon: "package", color: theme.warning },
      { label: t.activeUsers, value: "14,302", change: "+31%", icon: "users", color: "#60a5fa" },
    ];

    const adminNav = [
      { key: "dashboard", icon: "grid", label: t.dashboard },
      { key: "import", icon: "download", label: t.importProduct },
      { key: "products", icon: "package", label: t.products },
      { key: "orders", icon: "truck", label: t.ordersAdmin },
      { key: "vendors", icon: "users", label: t.vendors },
      { key: "analytics", icon: "chart", label: t.analytics },
      { key: "coupons", icon: "tag", label: t.coupons },
      { key: "settings", icon: "settings", label: lang === "ar" ? "الإعدادات" : "Settings" },
    ];

    return (
      <div style={{ paddingTop: "64px", display: "flex" }}>
        {/* Sidebar */}
        <div style={css.adminSidebar}>
          <div style={{ padding: "1rem 1.2rem", borderBottom: `1px solid ${theme.border}`, marginBottom: "0.5rem" }}>
            <div style={{ fontWeight: 900, fontSize: "1.2rem", background: theme.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.storeName}</div>
            <div style={{ fontSize: "0.75rem", color: theme.subtext }}>{t.admin}</div>
          </div>
          {adminNav.map(item => (
            <button
              key={item.key}
              onClick={() => setAdminTab(item.key)}
              style={{ width: "100%", padding: "0.8rem 1.2rem", background: adminTab === item.key ? `${theme.accent}20` : "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.7rem", color: adminTab === item.key ? theme.accentLight : theme.subtext, fontFamily: "inherit", fontSize: "0.88rem", fontWeight: adminTab === item.key ? 700 : 500, borderRight: adminTab === item.key && !isRTL ? `3px solid ${theme.accent}` : "none", borderLeft: adminTab === item.key && isRTL ? `3px solid ${theme.accent}` : "none", transition: "all 0.2s", textAlign: "start" }}
            >
              <Icon name={item.icon} size={17} color={adminTab === item.key ? theme.accentLight : theme.subtext} />
              {item.label}
            </button>
          ))}
          <div style={{ padding: "1rem 1.2rem", marginTop: "auto", borderTop: `1px solid ${theme.border}` }}>
            <button onClick={() => setView("home")} style={{ ...css.btn("ghost", true), color: theme.subtext, fontSize: "0.82rem" }}>
              ← {lang === "ar" ? "العودة للمتجر" : "Back to Store"}
            </button>
          </div>
        </div>

        {/* Content */}
        <div style={css.adminContent}>
          {adminTab === "dashboard" && (
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem" }}>{t.dashboard}</h1>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
                {statsData.map(s => (
                  <div key={s.label} style={css.stat}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <div style={{ color: theme.subtext, fontSize: "0.82rem", marginBottom: "0.5rem" }}>{s.label}</div>
                        <div style={{ fontWeight: 900, fontSize: "1.5rem" }}>{s.value}</div>
                      </div>
                      <div style={{ background: `${s.color}20`, borderRadius: "10px", padding: "0.5rem" }}>
                        <Icon name={s.icon} size={20} color={s.color} />
                      </div>
                    </div>
                    <div style={{ color: theme.success, fontSize: "0.8rem", fontWeight: 700, marginTop: "0.5rem" }}>{s.change} {lang === "ar" ? "هذا الشهر" : "this month"}</div>
                  </div>
                ))}
              </div>

              {/* Recent orders */}
              <div style={{ ...css.card, padding: "1.5rem", marginBottom: "1.5rem" }}>
                <h2 style={{ fontWeight: 700, marginBottom: "1rem" }}>{lang === "ar" ? "أحدث الطلبات" : "Recent Orders"}</h2>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${theme.border}` }}>
                      {[lang === "ar" ? "رقم الطلب" : "Order ID", lang === "ar" ? "العميل" : "Customer", lang === "ar" ? "المنتج" : "Product", lang === "ar" ? "الإجمالي" : "Total", lang === "ar" ? "الحالة" : "Status", lang === "ar" ? "الاحتيال" : "Fraud"].map(h => (
                        <th key={h} style={{ padding: "0.7rem", textAlign: isRTL ? "right" : "left", color: theme.subtext, fontWeight: 600, fontSize: "0.82rem" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "#JO-8821", customer: "محمد عبدالله", product: "Sony WH-1000XM5", total: "﷼ 1,122", status: "delivered", fraud: 8 },
                      { id: "#JO-8820", customer: "Sarah Johnson", product: "iPhone 15 Pro Max", total: "﷼ 5,620", status: "processing", fraud: 15 },
                      { id: "#JO-8819", customer: "فاطمة النجار", product: "Dyson Airwrap", total: "﷼ 2,621", status: "shipped", fraud: 5 },
                      { id: "#JO-8818", customer: "Khalid Al-Mutairi", product: "Nike Air Max", total: "﷼ 709", status: "pending", fraud: 45 },
                    ].map(o => (
                      <tr key={o.id} style={{ borderBottom: `1px solid ${theme.border}` }}>
                        <td style={{ padding: "0.8rem", fontWeight: 700, fontSize: "0.85rem", color: theme.accentLight }}>{o.id}</td>
                        <td style={{ padding: "0.8rem", fontSize: "0.85rem" }}>{o.customer}</td>
                        <td style={{ padding: "0.8rem", fontSize: "0.85rem" }}>{o.product}</td>
                        <td style={{ padding: "0.8rem", fontWeight: 700, fontSize: "0.85rem" }}>{o.total}</td>
                        <td style={{ padding: "0.8rem" }}>
                          <span style={{ ...css.badge(o.status === "delivered" ? "new" : o.status === "shipped" ? "trending" : o.status === "processing" ? "deal" : "hot"), fontSize: "0.72rem" }}>
                            {o.status === "delivered" ? (lang === "ar" ? "مُسلَّم" : "Delivered") : o.status === "shipped" ? (lang === "ar" ? "مشحون" : "Shipped") : o.status === "processing" ? (lang === "ar" ? "معالجة" : "Processing") : (lang === "ar" ? "معلق" : "Pending")}
                          </span>
                        </td>
                        <td style={{ padding: "0.8rem" }}>
                          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: o.fraud < 20 ? theme.success : o.fraud < 40 ? theme.warning : theme.danger }}>
                            {o.fraud}% {o.fraud < 20 ? t.lowRisk : o.fraud < 40 ? t.medRisk : t.highRisk}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Sync status */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ ...css.card, padding: "1.2rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                    <h3 style={{ fontWeight: 700 }}>{t.syncStatus}</h3>
                    <span style={{ ...css.badge("new"), fontSize: "0.72rem" }}>● {lang === "ar" ? "نشط" : "Active"}</span>
                  </div>
                  {["Amazon", "AliExpress", "Noon", "Temu"].map(src => (
                    <div key={src} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 0", borderBottom: `1px solid ${theme.border}` }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{src}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ fontSize: "0.75rem", color: theme.subtext }}>{lang === "ar" ? "منذ 5 دقائق" : "5 min ago"}</span>
                        <button style={{ ...css.btn("outline", true), padding: "0.2rem 0.6rem", fontSize: "0.72rem" }} onClick={() => notify(t.syncComplete)}>
                          <Icon name="sync" size={12} /> {t.syncNow}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Profit calc */}
                <div style={{ ...css.card, padding: "1.2rem" }}>
                  <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>{t.profitCalc}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                    <div>
                      <label style={{ fontSize: "0.8rem", color: theme.subtext, display: "block", marginBottom: "0.3rem" }}>{t.externalCost} ({CURRENCIES[currency].symbol})</label>
                      <input type="number" value={extCost} onChange={e => setExtCost(Number(e.target.value))} style={css.input} />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.8rem", color: theme.subtext, display: "block", marginBottom: "0.3rem" }}>{t.yourMargin} (%)</label>
                      <input type="range" min="5" max="100" value={marginPct} onChange={e => setMarginPct(Number(e.target.value))} style={{ width: "100%", accentColor: theme.accent }} />
                      <div style={{ textAlign: "center", fontWeight: 700, color: theme.accentLight }}>{marginPct}%</div>
                    </div>
                    <div style={{ background: `${theme.accent}10`, borderRadius: "12px", padding: "1rem", border: `1px solid ${theme.accent}30` }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                        <span style={{ fontSize: "0.85rem", color: theme.subtext }}>{t.finalPrice}</span>
                        <span style={{ fontWeight: 700 }}>{CURRENCIES[currency].symbol} {sellPrice}</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "0.85rem", color: theme.subtext }}>{t.yourProfit}</span>
                        <span style={{ fontWeight: 900, color: theme.success, fontSize: "1.1rem" }}>{CURRENCIES[currency].symbol} {myProfit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {adminTab === "import" && (
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.5rem" }}>{t.importProduct}</h1>
              <p style={{ color: theme.subtext, marginBottom: "2rem" }}>
                {lang === "ar" ? "استورد منتجات من أمازون، علي إكسبرس، تيمو، نون تلقائياً" : "Auto-import products from Amazon, AliExpress, Temu, Noon"}
              </p>

              <div style={{ maxWidth: "700px" }}>
                <div style={{ ...css.card, padding: "2rem", marginBottom: "1.5rem" }}>
                  <h2 style={{ fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Icon name="download" size={20} color={theme.accentLight} />
                    {lang === "ar" ? "محرك استيراد المنتجات" : "Product Import Engine"}
                  </h2>

                  <div style={{ marginBottom: "1rem" }}>
                    <label style={{ fontSize: "0.85rem", color: theme.subtext, display: "block", marginBottom: "0.4rem" }}>{t.externalUrl}</label>
                    <input
                      style={{ ...css.input, fontSize: "0.9rem" }}
                      placeholder={t.pasteUrl}
                      value={importUrl}
                      onChange={e => setImportUrl(e.target.value)}
                    />
                  </div>

                  <div style={{ marginBottom: "1.2rem" }}>
                    <label style={{ fontSize: "0.85rem", color: theme.subtext, display: "block", marginBottom: "0.4rem" }}>
                      {t.margin}: <strong style={{ color: theme.accentLight }}>{importMargin}%</strong>
                    </label>
                    <input type="range" min="5" max="100" value={importMargin} onChange={e => setImportMargin(Number(e.target.value))} style={{ width: "100%", accentColor: theme.accent }} />
                  </div>

                  <div style={{ background: `${theme.accent}08`, borderRadius: "12px", padding: "1rem", marginBottom: "1.2rem", border: `1px solid ${theme.border}` }}>
                    <div style={{ fontSize: "0.82rem", color: theme.subtext, marginBottom: "0.5rem", fontWeight: 600 }}>
                      {lang === "ar" ? "ما سيتم استخراجه تلقائياً:" : "What will be auto-extracted:"}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem" }}>
                      {[
                        lang === "ar" ? "✓ العنوان والوصف" : "✓ Title & Description",
                        lang === "ar" ? "✓ الصور بجودة عالية" : "✓ High-quality Images",
                        lang === "ar" ? "✓ السعر وتفاصيل الشحن" : "✓ Price & Shipping",
                        lang === "ar" ? "✓ الأنواع والمقاسات" : "✓ Variants & Sizes",
                        lang === "ar" ? "✓ معلومات المخزون" : "✓ Stock Info",
                        lang === "ar" ? "✓ تفاصيل المورد" : "✓ Supplier Details",
                      ].map(f => (
                        <div key={f} style={{ fontSize: "0.8rem", color: theme.success, fontWeight: 600 }}>{f}</div>
                      ))}
                    </div>
                  </div>

                  <button
                    style={{ ...css.btn("primary"), width: "100%", padding: "1rem", fontSize: "1rem" }}
                    onClick={handleImport}
                    disabled={importing || !importUrl}
                  >
                    {importing ? (
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                        <span style={{ animation: "spin 1s linear infinite", display: "inline-block" }}>⟳</span>
                        {t.importing}
                      </span>
                    ) : (
                      <span>{t.importBtn} ↗</span>
                    )}
                  </button>
                </div>

                {/* Imported product preview */}
                {importedProduct && (
                  <div style={{ ...css.card, padding: "1.5rem", border: `2px solid ${theme.success}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: theme.success, fontWeight: 700, marginBottom: "1rem" }}>
                      <Icon name="check" size={18} color={theme.success} />
                      {t.productImported}
                    </div>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <img src={importedProduct.image} alt="" style={{ width: "100px", height: "100px", borderRadius: "12px", objectFit: "cover" }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{importedProduct.title}</div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem", marginBottom: "1rem" }}>
                          {[
                            { label: t.externalCost, value: formatPrice(importedProduct.externalPrice, currency), color: theme.subtext },
                            { label: t.sellingPrice, value: formatPrice(importedProduct.price, currency), color: theme.accentLight },
                            { label: t.yourProfit, value: formatPrice(importedProduct.profit, currency), color: theme.success },
                          ].map(s => (
                            <div key={s.label} style={{ background: theme.input, borderRadius: "8px", padding: "0.5rem", textAlign: "center" }}>
                              <div style={{ fontSize: "0.7rem", color: theme.subtext }}>{s.label}</div>
                              <div style={{ fontWeight: 700, color: s.color, fontSize: "0.85rem" }}>{s.value}</div>
                            </div>
                          ))}
                        </div>
                        <div style={{ display: "flex", gap: "0.7rem" }}>
                          <button style={css.btn("primary")} onClick={addImportedToStore}>
                            {lang === "ar" ? "إضافة للمتجر" : "Add to Store"}
                          </button>
                          <button style={css.btn("outline")} onClick={() => { setImportedProduct(null); setImportUrl(""); }}>
                            {lang === "ar" ? "تجاهل" : "Discard"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Source grid */}
                <div style={{ ...css.card, padding: "1.5rem", marginTop: "1.5rem" }}>
                  <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>{lang === "ar" ? "المصادر المدعومة" : "Supported Sources"}</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.8rem" }}>
                    {[
                      { name: "Amazon", emoji: "🟧", url: "amazon.com" },
                      { name: "AliExpress", emoji: "🟥", url: "aliexpress.com" },
                      { name: "Noon", emoji: "🟨", url: "noon.com" },
                      { name: "Temu", emoji: "🟦", url: "temu.com" },
                      { name: "Shein", emoji: "⬛", url: "shein.com" },
                      { name: "eBay", emoji: "🔵", url: "ebay.com" },
                      { name: "Walmart", emoji: "🔵", url: "walmart.com" },
                      { name: "Etsy", emoji: "🟫", url: "etsy.com" },
                    ].map(s => (
                      <div key={s.name} style={{ background: theme.input, borderRadius: "10px", padding: "0.7rem", textAlign: "center" }}>
                        <div style={{ fontSize: "1.5rem", marginBottom: "0.2rem" }}>{s.emoji}</div>
                        <div style={{ fontSize: "0.78rem", fontWeight: 700 }}>{s.name}</div>
                        <div style={{ fontSize: "0.65rem", color: theme.subtext }}>{s.url}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {adminTab === "products" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h1 style={{ fontSize: "1.8rem", fontWeight: 800 }}>{t.products} ({products.length})</h1>
                <button style={css.btn("primary", true)} onClick={() => setAdminTab("import")}>
                  <Icon name="plus" size={14} /> {t.importProduct}
                </button>
              </div>
              <div style={{ ...css.card, overflow: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${theme.border}` }}>
                      {[lang === "ar" ? "المنتج" : "Product", lang === "ar" ? "المورد" : "Source", lang === "ar" ? "التكلفة" : "Cost", lang === "ar" ? "سعر البيع" : "Selling Price", lang === "ar" ? "الربح" : "Profit", lang === "ar" ? "المخزون" : "Stock", lang === "ar" ? "المزامنة" : "Sync"].map(h => (
                        <th key={h} style={{ padding: "1rem", textAlign: isRTL ? "right" : "left", color: theme.subtext, fontWeight: 600, fontSize: "0.82rem" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(p => (
                      <tr key={p.id} style={{ borderBottom: `1px solid ${theme.border}` }}>
                        <td style={{ padding: "0.8rem" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                            <img src={p.image} alt="" style={{ width: "44px", height: "44px", borderRadius: "8px", objectFit: "cover" }} />
                            <div>
                              <div style={{ fontWeight: 600, fontSize: "0.85rem", maxWidth: "180px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lang === "ar" ? p.titleAr : p.title}</div>
                              <div style={{ fontSize: "0.72rem", color: theme.subtext }}>{p.vendor}</div>
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: "0.8rem" }}><span style={css.tag}>{p.source}</span></td>
                        <td style={{ padding: "0.8rem", fontSize: "0.85rem" }}>{formatPrice(p.externalPrice, currency)}</td>
                        <td style={{ padding: "0.8rem", fontWeight: 700, fontSize: "0.85rem", color: theme.accentLight }}>{formatPrice(p.price, currency)}</td>
                        <td style={{ padding: "0.8rem", fontWeight: 700, color: theme.success, fontSize: "0.85rem" }}>+{formatPrice(p.profit, currency)}</td>
                        <td style={{ padding: "0.8rem" }}>
                          <span style={{ ...css.badge(p.inStock ? "new" : "hot"), fontSize: "0.72rem" }}>{p.inStock ? (lang === "ar" ? "متوفر" : "In Stock") : (lang === "ar" ? "نفد" : "Out")}</span>
                        </td>
                        <td style={{ padding: "0.8rem" }}>
                          <button style={{ ...css.btn("ghost", true), padding: "0.3rem" }} onClick={() => notify(t.syncComplete)}>
                            <Icon name="sync" size={15} color={theme.accentLight} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {adminTab === "vendors" && (
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem" }}>{t.vendors}</h1>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
                {VENDORS.map(v => (
                  <div key={v.id} style={{ ...css.card, padding: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                      <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: theme.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "1.5rem", color: "#fff" }}>
                        {(lang === "ar" ? v.nameAr : v.name)[0]}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700 }}>{lang === "ar" ? v.nameAr : v.name}</div>
                        {v.verified && <span style={{ ...css.badge("new"), fontSize: "0.65rem" }}>✓ {t.verified}</span>}
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem", marginBottom: "1rem" }}>
                      {[
                        { label: lang === "ar" ? "تقييم" : "Rating", value: `⭐ ${v.rating}` },
                        { label: lang === "ar" ? "منتجات" : "Products", value: v.products },
                        { label: lang === "ar" ? "عمولة" : "Comm.", value: `${v.commission}%`, color: theme.success },
                      ].map(s => (
                        <div key={s.label} style={{ background: theme.input, borderRadius: "8px", padding: "0.5rem", textAlign: "center" }}>
                          <div style={{ fontSize: "0.65rem", color: theme.subtext }}>{s.label}</div>
                          <div style={{ fontWeight: 700, fontSize: "0.9rem", color: s.color || theme.text }}>{s.value}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <button style={{ ...css.btn("outline", true), flex: 1 }}>{lang === "ar" ? "عرض المنتجات" : "View Products"}</button>
                      <button style={{ ...css.btn("ghost", true), padding: "0.4rem 0.7rem" }}><Icon name="settings" size={15} color={theme.subtext} /></button>
                    </div>
                  </div>
                ))}

                {/* Add vendor */}
                <div style={{ ...css.card, padding: "1.5rem", border: `2px dashed ${theme.border}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.8rem", minHeight: "180px", cursor: "pointer" }} onClick={() => notify(lang === "ar" ? "نموذج إضافة بائع" : "Vendor form opened")}>
                  <Icon name="plus" size={30} color={theme.subtext} />
                  <div style={{ color: theme.subtext, fontWeight: 600 }}>{lang === "ar" ? "إضافة بائع جديد" : "Add New Vendor"}</div>
                </div>
              </div>
            </div>
          )}

          {adminTab === "analytics" && (
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, mar
