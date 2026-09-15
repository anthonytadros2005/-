const menuButton =
  document.getElementById("menuButton");

const navLinks =
  document.getElementById("navLinks");

const languageButton =
  document.getElementById("languageButton");

const backToTop =
  document.getElementById("backToTop");

const modal =
  document.getElementById("productModal");

const modalClose =
  document.getElementById("modalClose");

const modalImage =
  document.getElementById("modalImage");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const modalWhatsApp =
  document.getElementById("modalWhatsApp");

const reviewForm =
  document.getElementById("reviewForm");

const reviewName =
  document.getElementById("reviewName");

const reviewRating =
  document.getElementById("reviewRating");

const reviewText =
  document.getElementById("reviewText");

const reviewsContainer =
  document.getElementById("reviewsContainer");


/* ===== MENU ===== */

menuButton.addEventListener(
  "click",
  () => {

    navLinks.classList.toggle("open");

  }
);


navLinks
  .querySelectorAll("a")
  .forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        navLinks.classList.remove("open");

      }
    );

  });


/* ===== YEAR ===== */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* ===== TRANSLATIONS ===== */

const translations = {

  en: {

    brand:
      "Wholesale Market",

    owners:
      "Adel & Uncle Maher",

    home:
      "Home",

    categories:
      "Categories",

    products:
      "Products",

    securityCameras:
      "Security Cameras",

    reviews:
      "Reviews",

    location:
      "Location",

    contact:
      "Contact",

    heroLine1:
      "Everything You Need",

    heroLine2:
      "In One Place",

    heroDescription:
      "Mobile and computer accessories, security cameras, networking products, cosmetics, makeup, perfumes, jewelry, toys, school bags, and more.",

    viewProducts:
      "View Products",

    orderWhatsApp:
      "Order on WhatsApp",

    whatsapp:
      "WhatsApp",

    phone:
      "Phone",

    hours:
      "Store Hours",

    largeSelection:
      "Large Selection",

    manyProducts:
      "Many products and services",

    whyUs:
      "Why Us?",

    whyHeading:
      "More Than Just One Type of Store",

    variety:
      "Large Variety",

    varietyDescription:
      "Many different product categories in one place.",

    securitySolutions:
      "Security Solutions",

    securitySolutionsDescription:
      "Cameras and security equipment for homes and businesses.",

    easyContact:
      "Easy Contact",

    easyContactDescription:
      "Ask about products directly through WhatsApp.",

    lookingFor:
      "What Are You Looking For?",

    mobileAccessories:
      "Mobile & Accessories",

    computerAccessories:
      "Computer & Accessories",

    networkingInternet:
      "Networking & Internet",

    schoolSupplies:
      "School Bags & Supplies",

    kidsToys:
      "Kids Toys",

    makeupCosmetics:
      "Makeup & Cosmetics",

    perfumes:
      "Perfumes",

    jewelryAccessories:
      "Jewelry & Accessories",

    featured:
      "Featured",

    featuredProducts:
      "Featured Products",

    safetySecurity:
      "Safety & Security",

    cameraSystems:
      "Security Camera Systems",

    cameraDescription:
      "Solutions for homes and stores.",

    cameras:
      "Cameras",

    smartCameras:
      "Smart Cameras",

    smartCameraDescription:
      "Options for home and store monitoring.",

    electronics:
      "Electronics",

    receiversAccessories:
      "Receivers & Accessories",

    receiverDescription:
      "Different electronic products.",

    school:
      "School",

    schoolDescription:
      "Bags and school supplies for children.",

    summer:
      "Summer",

    summerProducts:
      "Summer Toys & Products",

    summerDescription:
      "Products for the beach and summer.",

    jewelry:
      "Jewelry",

    jewelryDescription:
      "A variety of jewelry and accessories.",

    makeup:
      "Makeup",

    makeupDescription:
      "Makeup and beauty products.",

    viewDetails:
      "View Details",

    securityServices:
      "Security Services",

    securityHeading:
      "Security Camera Solutions for Your Home or Store",

    securityDescription:
      "Indoor and outdoor cameras, recording devices, hard drives, cables, and accessories.",

    getQuote:
      "Get a Quote",

    whenVisit:
      "When Can You Visit?",

    openDaily:
      "Open Daily",

    customers:
      "Customers",

    customerHeading:
      "Customer Feedback",

    leaveReview:
      "Leave a Review",

    yourName:
      "Your Name",

    rating:
      "Rating",

    yourReview:
      "Your Review",

    submitReview:
      "Submit Review",

    visitStore:
      "Visit Our Store",

    fullAddress:
      "📍 231 Teret El Zomor Street, Ard El Lewa, Mohandessin",

    getDirections:
      "Get Directions",

    contactUs:
      "Contact Us",

    questionProduct:
      "Have a Question About a Product?",

    contactDescription:
      "Message us on WhatsApp or call us to check availability and pricing.",

    followUs:
      "Follow Us",

    askWhatsApp:
      "Ask on WhatsApp",

    tagline:
      "Everything You Need in One Place"

  },


  ar: {

    brand:
      "سوق الجملة",

    owners:
      "عادل وعم ماهر",

    home:
      "الرئيسية",

    categories:
      "الأقسام",

    products:
      "المنتجات",

    securityCameras:
      "كاميرات المراقبة",

    reviews:
      "آراء العملاء",

    location:
      "الموقع",

    contact:
      "تواصل معنا",

    heroLine1:
      "كل اللي محتاجه",

    heroLine2:
      "في مكان واحد",

    heroDescription:
      "إكسسوارات موبايل وكمبيوتر، كاميرات مراقبة، شبكات وإنترنت، مستحضرات تجميل، مكياج، عطور، إكسسوارات وحُلي، ألعاب، شنط مدرسية والمزيد.",

    viewProducts:
      "شوف المنتجات",

    orderWhatsApp:
      "اطلب على واتساب",

    whatsapp:
      "واتساب",

    phone:
      "تليفون",

    hours:
      "مواعيد العمل",

    largeSelection:
      "تشكيلة كبيرة",

    manyProducts:
      "منتجات وخدمات متعددة",

    whyUs:
      "ليه سوق الجملة؟",

    whyHeading:
      "أكتر من نوع منتجات في مكان واحد",

    variety:
      "تشكيلة كبيرة",

    varietyDescription:
      "أقسام ومنتجات مختلفة في مكان واحد.",

    securitySolutions:
      "حلول أمان",

    securitySolutionsDescription:
      "كاميرات ومعدات أمان للبيت والمحلات.",

    easyContact:
      "تواصل بسهولة",

    easyContactDescription:
      "اسأل عن المنتجات مباشرة على واتساب.",

    lookingFor:
      "بتدور على إيه؟",

    mobileAccessories:
      "موبايل وإكسسوارات",

    computerAccessories:
      "كمبيوتر وإكسسوارات",

    networkingInternet:
      "شبكات وإنترنت",

    schoolSupplies:
      "شنط وأدوات مدرسية",

    kidsToys:
      "ألعاب أطفال",

    makeupCosmetics:
      "مكياج ومستحضرات تجميل",

    perfumes:
      "عطور",

    jewelryAccessories:
      "إكسسوارات وحُلي",

    featured:
      "مختارات",

    featuredProducts:
      "منتجات مميزة",

    safetySecurity:
      "أمان وحماية",

    cameraSystems:
      "أنظمة كاميرات مراقبة",

    cameraDescription:
      "حلول للمنازل والمحلات.",

    cameras:
      "كاميرات",

    smartCameras:
      "كاميرات ذكية",

    smartCameraDescription:
      "اختيارات لمراقبة المنازل والمحلات.",

    electronics:
      "إلكترونيات",

    receiversAccessories:
      "ريسيفرات وإكسسوارات",

    receiverDescription:
      "منتجات إلكترونية متنوعة.",

    school:
      "المدرسة",

    schoolDescription:
      "شنط وأدوات مدرسية للأطفال.",

    summer:
      "الصيف",

    summerProducts:
      "ألعاب ومنتجات صيفية",

    summerDescription:
      "منتجات للبحر والمصيف.",

    jewelry:
      "إكسسوارات وحُلي",

    jewelryDescription:
      "تشكيلة من الإكسسوارات والحُلي.",

    makeup:
      "مكياج",

    makeupDescription:
      "مكياج ومنتجات تجميل وعناية.",

    viewDetails:
      "شوف التفاصيل",

    securityServices:
      "خدمات الأمان",

    securityHeading:
      "حلول كاميرات مراقبة للبيت أو المحل",

    securityDescription:
      "كاميرات داخلية وخارجية، أجهزة تسجيل، هاردات، كابلات ومستلزمات.",

    getQuote:
      "اطلب عرض",

    whenVisit:
      "إمتى تقدر تزورنا؟",

    openDaily:
      "مفتوح يومياً",

    customers:
      "عملاؤنا",

    customerHeading:
      "آراء العملاء",

    leaveReview:
      "اكتب رأيك",

    yourName:
      "اسمك",

    rating:
      "التقييم",

    yourReview:
      "رأيك",

    submitReview:
      "إرسال التقييم",

    visitStore:
      "زور محلنا",

    fullAddress:
      "📍 ٢٣١ شارع ترعة الزمر، أرض اللواء، المهندسين",

    getDirections:
      "الاتجاهات",

    contactUs:
      "تواصل معنا",

    questionProduct:
      "عندك سؤال عن منتج؟",

    contactDescription:
      "ابعت لنا على واتساب أو اتصل بنا لمعرفة المتاح والسعر.",

    followUs:
      "تابعنا",

    askWhatsApp:
      "اسأل على واتساب",

    tagline:
      "كل اللي محتاجه في مكان واحد"

  }

};


let currentLanguage = "en";


function changeLanguage(language) {

  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {

      const key =
        element.dataset.i18n;

      if (translations[language][key]) {

        element.textContent =
          translations[language][key];

      }

    });


  if (language === "ar") {

    document.documentElement.lang =
      "ar";

    document.documentElement.dir =
      "rtl";

    languageButton.textContent =
      "English";

    reviewName.placeholder =
      "اكتب اسمك";

    reviewText.placeholder =
      "اكتب رأيك...";

  }

  else {

    document.documentElement.lang =
      "en";

    document.documentElement.dir =
      "ltr";

    languageButton.textContent =
      "العربية";

    reviewName.placeholder =
      "Your name";

    reviewText.placeholder =
      "Write your review...";

  }


  currentLanguage =
    language;

}


languageButton.addEventListener(
  "click",
  () => {

    if (currentLanguage === "en") {

      changeLanguage("ar");

    }

    else {

      changeLanguage("en");

    }

  }
);


/* ===== PRODUCT MODAL ===== */

document
  .querySelectorAll(".clickable-product")
  .forEach((card) => {

    card.addEventListener(
      "click",
      () => {

        const title =
          currentLanguage === "ar"
            ? card.dataset.titleAr
            : card.dataset.titleEn;

        const description =
          currentLanguage === "ar"
            ? card.dataset.descriptionAr
            : card.dataset.descriptionEn;


        modalImage.src =
          card.dataset.image;


        modalTitle.textContent =
          title;


        modalDescription.textContent =
          description;


        modalWhatsApp.href =
          "https://wa.me/201113352317?text=" +
          encodeURIComponent(

            currentLanguage === "ar"

              ? "عايز أعرف تفاصيل عن " + title

              : "I want details about " +
                card.dataset.message

          );


        modal.classList.add("open");


        document.body.classList.add(
          "modal-open"
        );

      }
    );

  });


function closeModal() {

  modal.classList.remove("open");

  document.body.classList.remove(
    "modal-open"
  );

}


modalClose.addEventListener(
  "click",
  closeModal
);


modal.addEventListener(
  "click",
  (event) => {

    if (event.target === modal) {

      closeModal();

    }

  }
);


/* ===== REVIEWS ===== */

let reviews =
  JSON.parse(
    localStorage.getItem(
      "wholesaleMarketReviews"
    )
  ) || [];


function displayReviews() {

  reviewsContainer.innerHTML = "";


  reviews.forEach((review) => {

    const card =
      document.createElement("article");


    card.className =
      "testimonial-card";


    const stars =
      "★".repeat(review.rating) +
      "☆".repeat(5 - review.rating);


    card.innerHTML = `
      <div class="review-stars">
        ${stars}
      </div>

      <div class="review-name">
        ${escapeHTML(review.name)}
      </div>

      <p class="review-text">
        ${escapeHTML(review.text)}
      </p>
    `;


    reviewsContainer.appendChild(card);

  });

}


reviewForm.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();


    const newReview = {

      name:
        reviewName.value.trim(),

      rating:
        Number(reviewRating.value),

      text:
        reviewText.value.trim()

    };


    if (
      newReview.name === "" ||
      newReview.text === ""
    ) {

      return;

    }


    reviews.unshift(newReview);


    localStorage.setItem(
      "wholesaleMarketReviews",
      JSON.stringify(reviews)
    );


    displayReviews();


    reviewForm.reset();

  }
);


function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent =
    text;

  return div.innerHTML;

}


displayReviews();


/* ===== BACK TO TOP ===== */

window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 500) {

      backToTop.classList.add("show");

    }

    else {

      backToTop.classList.remove("show");

    }

  }
);


backToTop.addEventListener(
  "click",
  () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  }
);