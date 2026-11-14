import { atomicModelData, type AtomicModelRecord } from './atomic-model-data';

// Curated static reference data for the 118 named elements.
// Atomic properties: PubChem periodic table; narratives, discovery dates and name origins: Royal Society of Chemistry (RSC).
export type CategoryKey = 'alkali-metal' | 'alkaline-earth-metal' | 'transition-metal' | 'post-transition-metal' | 'metalloid' | 'nonmetal' | 'halogen' | 'noble-gas' | 'lanthanide' | 'actinide';
type BaseElementRecord = { number:number; symbol:string; nameAr:string; nameEn:string; mass:string; group:number|null; period:number; category:CategoryKey; phase:string; radioactive:boolean; summaryAr:string; propertiesAr:string[]; usesAr:string[]; occurrenceAr:string; imageUrl:string|null; imageCredit:string; discoverer:string|null; discoveryYear:string|null; discoveryPlace:string|null; storyAr:string|null; nameOriginAr:string|null; halfLife:string|null; radiationType:string|null; sources:{label:string;url:string}[] };
export type ElementRecord = BaseElementRecord & AtomicModelRecord;
export const categories: {key:CategoryKey;labelAr:string;color:string}[] = [
  {
    "key": "alkali-metal",
    "labelAr": "الفلزات القلوية",
    "color": "#ff9b68"
  },
  {
    "key": "alkaline-earth-metal",
    "labelAr": "الفلزات القلوية الترابية",
    "color": "#f6c66b"
  },
  {
    "key": "transition-metal",
    "labelAr": "الفلزات الانتقالية",
    "color": "#5bd4ce"
  },
  {
    "key": "post-transition-metal",
    "labelAr": "الفلزات بعد الانتقالية",
    "color": "#78a9ff"
  },
  {
    "key": "metalloid",
    "labelAr": "أشباه الفلزات",
    "color": "#c39aff"
  },
  {
    "key": "nonmetal",
    "labelAr": "اللافلزات",
    "color": "#67d8a2"
  },
  {
    "key": "halogen",
    "labelAr": "الهالوجينات",
    "color": "#f27ab5"
  },
  {
    "key": "noble-gas",
    "labelAr": "الغازات النبيلة",
    "color": "#78caff"
  },
  {
    "key": "lanthanide",
    "labelAr": "اللانثانيدات",
    "color": "#f187aa"
  },
  {
    "key": "actinide",
    "labelAr": "الأكتينيدات",
    "color": "#c48cff"
  }
];
const elementSource: BaseElementRecord[] = [
  {
    "number": 1,
    "symbol": "H",
    "nameAr": "هيدروجين",
    "nameEn": "Hydrogen",
    "mass": "1.0080",
    "group": 1,
    "period": 1,
    "category": "nonmetal",
    "phase": "غاز",
    "radioactive": false,
    "summaryAr": "الهيدروجين هو غاز عديم اللون والرائحة وأقل كثافة من جميع الغازات.",
    "propertiesAr": [
      "غاز عديم اللون",
      "غاز عديم الرائحة"
    ],
    "usesAr": [
      "يستخدم كوقود نظيف في خلايا الطاقة ووسائل النقل.",
      "يستخدم في الصناعات الكيميائية لإنتاج الأمونيا والبلاستيك والأدوية وتكرير الوقود."
    ],
    "occurrenceAr": "هو العنصر الأكثر وفرة في الكون، بينما يتواجد على الأرض غالباً في الماء وبنسب ضئيلة جداً في الغلاف الجوي.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Hydrogenglow.jpg",
    "imageCredit": "User:Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/hydrogen.php",
    "discoverer": "Henry Cavendish",
    "discoveryYear": "1766",
    "discoveryPlace": null,
    "storyAr": "تعود أصول اكتشافه إلى ملاحظات حول اشتعال الفقاعات الناتجة عن التفاعل مع الأحماض، لكن هنري كافنديش هو من أثبت في عام 1766 طبيعته كعنصر مستقل وأنه يشكل الماء عند احتراقه.",
    "nameOriginAr": "مشتق من الكلمتين اليونانيتين 'hydro' و 'genes' وتعنيان مشكل الماء.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/1/hydrogen"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/1"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 2,
    "symbol": "He",
    "nameAr": "هيليوم",
    "nameEn": "Helium",
    "mass": "4.00260",
    "group": 18,
    "period": 1,
    "category": "noble-gas",
    "phase": "غاز",
    "radioactive": false,
    "summaryAr": "الهيليوم غاز خامل تماماً عديم اللون والرائحة.",
    "propertiesAr": [
      "غاز عديم اللون",
      "غاز عديم الرائحة"
    ],
    "usesAr": [
      "يستخدم كوسيط تبريد في المفاعلات والماسحات الضوئية والمغناطيسات فائقة التوصيل.",
      "يستخدم كجو خامل في صناعة أشباه الموصلات واللحام وبالونات الهواء."
    ],
    "occurrenceAr": "هو ثاني أكثر العناصر وفرة في الكون، ويتواجد في الغلاف الجوي بنسبة 5 أجزاء في المليون ويُستخرج تجارياً من الغاز الطبيعي.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/00/Helium-glow.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/helium.php",
    "discoverer": "Sir William Ramsay in London, and independently by Per Teodor Cleve and Nils Abraham Langlet in Uppsala, Sweden",
    "discoveryYear": "1895",
    "discoveryPlace": null,
    "storyAr": "رُصد الهيليوم لأول مرة في طيف الشمس عام 1868، ثم أكد بيير كليف ونيلز لانجليت وجوده على الأرض في عام 1895.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'helios' وتعني الشمس، حيث اكتُشف لأول مرة في هالة الشمس.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/2/helium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/2"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 3,
    "symbol": "Li",
    "nameAr": "ليثيوم",
    "nameEn": "Lithium",
    "mass": "7.0",
    "group": 1,
    "period": 2,
    "category": "alkali-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الليثيوم معدن فضي ناعم وأقل كثافة من جميع المعادن ويتفاعل بقوة مع الماء.",
    "propertiesAr": [
      "معدن فضي ناعم"
    ],
    "usesAr": [
      "يستخدم بشكل رئيسي في البطاريات القابلة لإعادة الشحن للأجهزة الإلكترونية والسيارات الكهربائية.",
      "يستخدم في صناعة السبائك الخفيفة والقوية وفي بعض العقاقير الطبية."
    ],
    "occurrenceAr": "لا يوجد كعنصر حر في الطبيعة، بل في صخور نارية معينة ومياه الينابيع، ويُنتج بشكل أساسي من المحاليل الملحية.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e2/0.5_grams_lithium_under_argon.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lithium.php",
    "discoverer": "Johan August Arfvedson",
    "discoveryYear": "1817",
    "discoveryPlace": null,
    "storyAr": "اكتشف يوهان أغسطس أرفيدسون المعدن في عام 1817 بعد تحليله لمعدن البتاليت، بينما نجح روبرت بنسن وأغسطس ماتيسن في عزله بكتلة كبيرة عام 1855.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'lithos' وتعني حجر.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/3/lithium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/3"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 4,
    "symbol": "Be",
    "nameAr": "بيريليوم",
    "nameEn": "Beryllium",
    "mass": "9.012183",
    "group": 2,
    "period": 2,
    "category": "alkaline-earth-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "البريليوم معدن فضي-أبيض ناعم نسبياً ومنخفض الكثافة.",
    "propertiesAr": [
      "معدن فضي-أبيض",
      "ناعم"
    ],
    "usesAr": [
      "يدخل في سبائك النحاس والنيكل لصناعة الأدوات غير الشاررة والمكونات الكهربائية.",
      "يستخدم كدرع للأشعة السينية وفي المفاعلات النووية وكمادة هيكلية في الطائرات والأقمار الصناعية."
    ],
    "occurrenceAr": "يوجد في حوالي 30 نوعاً من المعادن، أهمها البريل والبرترانديت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Beryllium_%28Be%29.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/beryllium.php",
    "discoverer": "Nicholas Louis Vauquelin",
    "discoveryYear": "1797",
    "discoveryPlace": null,
    "storyAr": "حدد نيكولاس لويس فوكلين المعدن في عام 1797 بعد تحليل أحجار كريمة، بينما نجح فريدريك فولر وأنطوان بوسي في عزله بشكل منفصل عام 1828.",
    "nameOriginAr": "مشتق من الاسم اليوناني لحجر البريل 'beryllo'.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/4/beryllium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/4"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 5,
    "symbol": "B",
    "nameAr": "بورون",
    "nameEn": "Boron",
    "mass": "10.81",
    "group": 13,
    "period": 2,
    "category": "metalloid",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "البورون النقي هو مسحوق صلب داكن غير متبلور.",
    "propertiesAr": [
      "مسحوق صلب داكن غير متبلور"
    ],
    "usesAr": [
      "يستخدم كوقود للصواريخ وفي الألعاب النارية، ومركباته مثل البوراكس تستخدم في المنظفات والزجاج المقاوم للحرارة.",
      "يستخدم نظير البورون-10 في تنظيم المفاعلات النووية للكشف عن النيوترونات."
    ],
    "occurrenceAr": "يوجد في مياه الينابيع البركانية وكمعادن بورات مثل البوراكس والكوليمانيت، ويُستخرج بشكل رئيسي من الراسوريت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Boron.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/boron.php",
    "discoverer": "Louis-Josef Gay-Lussac and Louis-Jacques Thénard in Paris, France, and Humphry Davy in London, UK",
    "discoveryYear": "1808",
    "discoveryPlace": null,
    "storyAr": "استُخرج البورون لأول مرة عام 1808 من قبل غاي-لوساك وتينارد ودافي، لكن الحصول على النقاء التام تحقق لاحقاً من قبل إي. وينتروب.",
    "nameOriginAr": "مشتق من الكلمة العربية 'بورق' وهو الاسم القديم للبوراكس.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/5/boron"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/5"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 6,
    "symbol": "C",
    "nameAr": "كربون",
    "nameEn": "Carbon",
    "mass": "12.011",
    "group": 14,
    "period": 2,
    "category": "nonmetal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الكربون عنصر يوجد في صور نقية متنوعة مثل الألماس والجرافيت والجرافين.",
    "propertiesAr": [
      "الألماس: صلب شفاف شفاف بلوري",
      "الجرافيت: أسود لامع طري"
    ],
    "usesAr": [
      "يُستخدم الكربون في صناعة الوقود الأحفوري، وفي إنتاج الفولاذ، والبلاستيك، والألياف الكربونية القوية.",
      "يستخدم الجرافيت في أقلام الرصاص والمحركات، وتستخدم الألماس الصناعي في أدوات القطع والحفر."
    ],
    "occurrenceAr": "يوجد في النجوم، وفي الغلاف الجوي كغاز ثاني أكسيد الكربون، وفي الطبيعة كجرافيت وألماس، وفي جميع الكائنات الحية والوقود الأحفوري.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/68/Pure_Carbon.png",
    "imageCredit": "Texas Lane, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    "discoverer": null,
    "discoveryYear": "عصور ما قبل التاريخ",
    "discoveryPlace": null,
    "storyAr": "أثبت سميثسون تينانت عام 1796 أن الألماس هو شكل من أشكال الكربون من خلال إثبات تحوله إلى ثاني أكسيد الكربون عند احتراقه.",
    "nameOriginAr": "مشتق من الكلمة اللاتينية 'carbo' وتعني الفحم.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/6/carbon"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/6"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 7,
    "symbol": "N",
    "nameAr": "نيتروجين",
    "nameEn": "Nitrogen",
    "mass": "14.007",
    "group": 15,
    "period": 2,
    "category": "nonmetal",
    "phase": "غاز",
    "radioactive": false,
    "summaryAr": "النيتروجين غاز عديم اللون والرائحة.",
    "propertiesAr": [
      "غاز عديم اللون",
      "غاز عديم الرائحة"
    ],
    "usesAr": [
      "يستخدم في إنتاج الأسمدة وحمض النيتريك والنايلون والمواد المتفجرة عبر عملية هابر.",
      "يستخدم كجو خامل لحفظ الأطعمة وفي التجميد السريع."
    ],
    "occurrenceAr": "يشكل 78% من حجم الهواء، ويوجد كمركبات في الكائنات الحية والوقود الأحفوري.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nitrogen-glow.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/nitrogen.php",
    "discoverer": "Daniel Rutherford",
    "discoveryYear": "1772",
    "discoveryPlace": null,
    "storyAr": "كان النيتروجين معروفاً في شكل كلوريد الأمونيوم لدى الكيميائيين القدامى، واكتُشف كغاز في الستينيات من القرن الثامن عشر، ثم حدده دانيال رذرفورد كعنصر عام 1772.",
    "nameOriginAr": "مشتق من اليونانية 'nitron' و 'genes' ومعناها مشكل النيتر.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/7/nitrogen"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/7"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 8,
    "symbol": "O",
    "nameAr": "أكسجين",
    "nameEn": "Oxygen",
    "mass": "15.999",
    "group": 16,
    "period": 2,
    "category": "nonmetal",
    "phase": "غاز",
    "radioactive": false,
    "summaryAr": "الأكسجين غاز عديم اللون والرائحة.",
    "propertiesAr": [
      "غاز عديم اللون",
      "غاز عديم الرائحة"
    ],
    "usesAr": [
      "يستخدم بشكل رئيسي في صناعة الفولاذ وفي إنتاج الكيماويات مثل حمض النيتريك.",
      "يستخدم في لحام المعادن وقطعها وفي معالجة مياه الصرف الصحي."
    ],
    "occurrenceAr": "يشكل 21% من الغلاف الجوي، و49.2% من كتلة القشرة الأرضية، وحوالي ثلثي جسم الإنسان.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Liquid_oxygen_in_a_beaker_%28cropped_and_retouched%29.jpg",
    "imageCredit": "Staff Sgt. Nika Glover, U.S. Air Force, Public domain, via Wikimedia Commons",
    "discoverer": "Joseph Priestley in Wiltshire, England and independently by Carl Wilhelm Scheele in Uppsala, Sweden",
    "discoveryYear": "1774",
    "discoveryPlace": null,
    "storyAr": "شارك جوزيف بريستلي، وكارل فيلهلم شيل، وأنطوان لافوازييه في اكتشاف الأكسجين وتحديد طبيعته كعنصر في سبعينيات القرن الثامن عشر.",
    "nameOriginAr": "مشتق من اليونانية 'oxy genes' ومعناها مشكل الحمض.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/8/oxygen"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/8"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 9,
    "symbol": "F",
    "nameAr": "فلور",
    "nameEn": "Fluorine",
    "mass": "18.99840316",
    "group": 17,
    "period": 2,
    "category": "halogen",
    "phase": "غاز",
    "radioactive": false,
    "summaryAr": "الفلور غاز أصفر مخضر باهت وشديد التفاعل يهاجم المعادن بسرعة.",
    "propertiesAr": [
      "غاز أصفر مخضر باهت"
    ],
    "usesAr": [
      "يستخدم في الصناعات النووية، وفي تصنيع الفلوروكيميائيات مثل التيفلون والمواد العازلة.",
      "تُستخدم أملاحه في اللحام وتلميع الزجاج، ويستخدم حمض الهيدروفلوريك في نقش الزجاج."
    ],
    "occurrenceAr": "يحتل المرتبة الثالثة عشرة في وفرة العناصر في القشرة الأرضية، وأهم معادنه الفلوريت والكريوليت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Fluoro_liquido_a_-196%C2%B0C_1.jpg",
    "imageCredit": "Fulvio314, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
    "discoverer": "Henri Moissan",
    "discoveryYear": "1886",
    "discoveryPlace": null,
    "storyAr": "بعد محاولات فاشلة وخطرة من كيميائيين سابقين، نجح هنري مواسان في عزل الفلور عام 1886 باستخدام التحليل الكهربائي.",
    "nameOriginAr": "مشتق من الكلمة اللاتينية 'fluere' ومعناها يتدفق.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/9/fluorine"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/9"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 10,
    "symbol": "Ne",
    "nameAr": "نيون",
    "nameEn": "Neon",
    "mass": "20.180",
    "group": 18,
    "period": 2,
    "category": "noble-gas",
    "phase": "غاز",
    "radioactive": false,
    "summaryAr": "النيون غاز خامل تماماً عديم اللون والرائحة.",
    "propertiesAr": [
      "غاز عديم اللون",
      "غاز عديم الرائحة"
    ],
    "usesAr": [
      "يستخدم بشكل رئيسي في لافتات الإعلانات المضيئة.",
      "يستخدم في أجهزة التبديل، وموانع الصواعق، والمبردات الكريوجينية."
    ],
    "occurrenceAr": "هو خامس أكثر العناصر وفرة في الكون، لكنه يتواجد في الغلاف الجوي بنسبة 18 جزءاً في المليون فقط.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Neon-glow.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/neon.php",
    "discoverer": "Sir William Ramsay and Morris Travers",
    "discoveryYear": "1898",
    "discoveryPlace": null,
    "storyAr": "اكتشف ويليام رامزي وموريس ترافيرس النيون عام 1898 من خلال تبخير الأرجون السائل، حيث أثار انبهارهم توهجه الأحمر في المطياف.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'neos' ومعناها جديد.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/10/neon"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/10"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 11,
    "symbol": "Na",
    "nameAr": "صوديوم",
    "nameEn": "Sodium",
    "mass": "22.9897693",
    "group": 1,
    "period": 3,
    "category": "alkali-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الصوديوم معدن لين يتفاعل بقوة مع الماء ويفقد بريقه سريعاً عند تعرضه للهواء.",
    "propertiesAr": [
      "معدن لين",
      "يفقد بريقه سريعاً عند التعرض للهواء"
    ],
    "usesAr": [
      "يستخدم كعامل تبادل حراري في المفاعلات النووية وكمادة كيميائية في الصناعة",
      "تستخدم أملاحه مثل كلوريد الصوديوم في حفظ الأطعمة وإذابة الثلوج"
    ],
    "occurrenceAr": "يعد سادس أكثر العناصر شيوعاً في قشرة الأرض ولا يوجد في الطبيعة بصورته المعدنية.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/27/Na_%28Sodium%29.jpg",
    "imageCredit": "The original uploader was Dnn87 at English Wikipedia., CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
    "discoverer": "Humphry Davy",
    "discoveryYear": "1807",
    "discoveryPlace": null,
    "storyAr": "عزل همفري ديفي الصوديوم لأول مرة في عام 1807 عن طريق تمرير تيار كهربائي في الصودا الكاوية.",
    "nameOriginAr": "مشتق من الكلمة الإنجليزية 'صودا'.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/11/sodium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/11"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 12,
    "symbol": "Mg",
    "nameAr": "مغنيسيوم",
    "nameEn": "Magnesium",
    "mass": "24.305",
    "group": 2,
    "period": 3,
    "category": "alkaline-earth-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "المغنيسيوم معدن أبيض فضي يحترق بسهولة في الهواء بضوء ساطع.",
    "propertiesAr": [
      "معدن أبيض فضي",
      "يحترق بسهولة في الهواء بضوء ساطع"
    ],
    "usesAr": [
      "يستخدم في سبائك الألمنيوم لجعله أخف وزناً وأقوى في صناعة الطائرات والسيارات",
      "يستخدم في الألعاب النارية والمشاعل وفي تطبيقات طبية وصناعية متنوعة"
    ],
    "occurrenceAr": "ثامن أكثر العناصر وفرة في قشرة الأرض ويستخرج غالباً من معادن مثل المغنيسيت ومن مياه البحر.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Magnesium_crystals.jpg",
    "imageCredit": "Warut Roonguthai, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
    "discoverer": "Joseph Black",
    "discoveryYear": "1755",
    "discoveryPlace": null,
    "storyAr": "ميز جوزيف بلاك المغنيسيوم كعنصر لأول مرة في عام 1755.",
    "nameOriginAr": "مشتق من اسم منطقة مغنيسيا في شرق ثيساليا باليونان.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/12/magnesium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/12"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 13,
    "symbol": "Al",
    "nameAr": "ألومنيوم",
    "nameEn": "Aluminium",
    "mass": "26.981538",
    "group": 13,
    "period": 3,
    "category": "post-transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الألمنيوم معدن أبيض فضي خفيف الوزن ومرن.",
    "propertiesAr": [
      "معدن أبيض فضي",
      "خفيف الوزن ومرن"
    ],
    "usesAr": [
      "يستخدم في صناعة المعلبات، أواني الطهي، وإطارات النوافذ",
      "يستخدم في سبائك هياكل الطائرات وفي خطوط نقل الكهرباء لقدرته على التوصيل"
    ],
    "occurrenceAr": "أكثر المعادن وفرة في قشرة الأرض (8.1%) ونادراً ما يوجد منفرداً في الطبيعة.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Aluminium.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/aluminium.php ",
    "discoverer": "Hans Oersted",
    "discoveryYear": "1825",
    "discoveryPlace": null,
    "storyAr": "أنتج هانز كريستيان أورستد الألمنيوم لأول مرة عام 1825 عن طريق تسخين كلوريد الألمنيوم مع البوتاسيوم.",
    "nameOriginAr": "مشتق من الاسم اللاتيني 'alumen' ويعني الملح المر.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/13/aluminium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/13"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 14,
    "symbol": "Si",
    "nameAr": "سيليكون",
    "nameEn": "Silicon",
    "mass": "28.085",
    "group": 14,
    "period": 3,
    "category": "metalloid",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "السيليكون عنصر صلب يمتلك بريقاً معدنياً أزرق رمادياً في حالته فائقة النقاء.",
    "propertiesAr": [
      "صلب ذو بريق معدني أزرق رمادي"
    ],
    "usesAr": [
      "يستخدم في صناعة السبائك والسيليكونات والأسمنت والزجاج",
      "يستخدم كمادة شبه موصلة في الأجهزة الإلكترونية والحواسيب"
    ],
    "occurrenceAr": "ثاني أكثر العناصر وفرة في قشرة الأرض ولا يوجد منفرداً، بل في صورة أكاسيد وسيليكات.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Silicon.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/silicon.php",
    "discoverer": "Jöns Jacob Berzelius",
    "discoveryYear": "1824",
    "discoveryPlace": null,
    "storyAr": "تمكن يونس ياكوب بيرسيليوس من الحصول على السيليكون نقي نسبياً في عام 1824.",
    "nameOriginAr": "مشتق من الكلمة اللاتينية 'silex' أو 'silicis' وتعني الصوان.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/14/silicon"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/14"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 15,
    "symbol": "P",
    "nameAr": "فوسفور",
    "nameEn": "Phosphorus",
    "mass": "30.97376200",
    "group": 15,
    "period": 3,
    "category": "nonmetal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "للفوسفور صورتان رئيسيتان: الفوسفور الأبيض السام والشمعي، والفوسفور الأحمر غير السام.",
    "propertiesAr": [
      "الفوسفور الأبيض: صلب شمعي سام يضيء في الظلام",
      "الفوسفور الأحمر: صلب غير سام"
    ],
    "usesAr": [
      "يستخدم الفوسفور الأبيض في المشاعل، والأحمر في جانب علب الثقاب",
      "تستخدم مركبات الفوسفور بشكل رئيسي كأسمدة زراعية وفي صناعة الصلب"
    ],
    "occurrenceAr": "لا يوجد منفرداً في الطبيعة ويستخرج بشكل أساسي من صخور الفوسفات.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Phosphorus-purple.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/phosphorus.php",
    "discoverer": "Hennig Brandt",
    "discoveryYear": "1669",
    "discoveryPlace": null,
    "storyAr": "اكتشف هينينج براندت الفوسفور عام 1669 من خلال تبخير البول وتسخين البقايا.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'phosphoros' وتعني حامل الضوء.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/15/phosphorus"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/15"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 16,
    "symbol": "S",
    "nameAr": "كبريت",
    "nameEn": "Sulfur",
    "mass": "32.07",
    "group": 16,
    "period": 3,
    "category": "nonmetal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الكبريت عنصر له عدة متآصلات، أشهرها البلورات أو المسحوق الأصفر.",
    "propertiesAr": [
      "بلورات أو مسحوق أصفر"
    ],
    "usesAr": [
      "يستخدم بشكل رئيسي في إنتاج حمض الكبريتيك الضروري للأسمدة",
      "يستخدم في تقسية المطاط، المبيدات، والمواد الحافظة للأطعمة"
    ],
    "occurrenceAr": "يوجد طبيعياً في المناطق البركانية وفي العديد من المعادن، ويستخلص حديثاً من تنقية الغاز الطبيعي والنفط.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/23/Native_sulfur_%28Vodinskoe_Deposit%3B_quarry_near_Samara%2C_Russia%29_9.jpg",
    "imageCredit": "James St. John, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons",
    "discoverer": null,
    "discoveryYear": "قبل التاريخ",
    "discoveryPlace": null,
    "storyAr": "عُرف الكبريت منذ عصور ما قبل التاريخ وذُكر في الكتاب المقدس واستخدم في الكيمياء القديمة.",
    "nameOriginAr": "مشتق إما من الكلمة السنسكريتية 'sulvere' أو اللاتينية 'sulfurium'.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/16/sulfur"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/16"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 17,
    "symbol": "Cl",
    "nameAr": "كلور",
    "nameEn": "Chlorine",
    "mass": "35.45",
    "group": 17,
    "period": 3,
    "category": "halogen",
    "phase": "غاز",
    "radioactive": false,
    "summaryAr": "الكلور غاز أصفر مخضر كثيف ذو رائحة خانقة.",
    "propertiesAr": [
      "غاز أصفر مخضر كثيف",
      "ذو رائحة خانقة"
    ],
    "usesAr": [
      "يستخدم كمطهر لمياه الشرب والمسابح",
      "يدخل في صناعة مادة PVC والأدوية والعديد من المنتجات الاستهلاكية"
    ],
    "occurrenceAr": "لا يوجد منفرداً في الطبيعة ويستخرج من أملاح الهاليت ومن المعادن مثل الكارناليت والسيلفيت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Chlorine-sample-flip.jpg",
    "imageCredit": "Benjah-bmm27, Public domain, via Wikimedia Commons",
    "discoverer": "Carl Wilhelm Scheele",
    "discoveryYear": "1774",
    "discoveryPlace": null,
    "storyAr": "أنتج كارل فيلهلم شيل غاز الكلور لأول مرة عام 1774 عبر تسخين حمض الهيدروكلوريك مع ثاني أكسيد المنجنيز.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'chloros' وتعني الأخضر المصفر.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/17/chlorine"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/17"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 18,
    "symbol": "Ar",
    "nameAr": "أرجون",
    "nameEn": "Argon",
    "mass": "39.9",
    "group": 18,
    "period": 3,
    "category": "noble-gas",
    "phase": "غاز",
    "radioactive": false,
    "summaryAr": "الأرجون غاز خامل تماماً وعديم اللون والرائحة.",
    "propertiesAr": [
      "غاز عديم اللون والرائحة"
    ],
    "usesAr": [
      "يستخدم لتوفير جو خامل في الصناعات وتعبئة المصابيح المتوهجة والفلورية",
      "يستخدم في النوافذ مزدوجة الزجاج وعجلات السيارات الفارهة"
    ],
    "occurrenceAr": "ثالث أكثر الغازات وفرة في الغلاف الجوي ويتم الحصول عليه تجارياً بتقطير الهواء السائل.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/53/Argon-glow.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/argon.php",
    "discoverer": "Lord Rayleigh and Sir William Ramsay",
    "discoveryYear": "1894",
    "discoveryPlace": null,
    "storyAr": "اكتشف اللورد رايلي والسير ويليام رامزي الأرجون عام 1894 بعد فصله من الهواء السائل.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'argos' وتعني الخامل.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/18/argon"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/18"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 19,
    "symbol": "K",
    "nameAr": "بوتاسيوم",
    "nameEn": "Potassium",
    "mass": "39.0983",
    "group": 1,
    "period": 4,
    "category": "alkali-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "البوتاسيوم معدن لين فضي اللون يفقد بريقه في الهواء خلال دقائق.",
    "propertiesAr": [
      "معدن لين فضي",
      "يفقد بريقه في الهواء"
    ],
    "usesAr": [
      "يستخدم بشكل رئيسي في الأسمدة",
      "تستخدم مركباته في صناعة الزجاج والمنظفات والصابون والأدوية"
    ],
    "occurrenceAr": "سابع أكثر المعادن وفرة في قشرة الأرض ويوجد في رواسب كلوريد البوتاسيوم الناتجة عن تبخر البحار القديمة.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Potassium.JPG",
    "imageCredit": "Dnn87, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons",
    "discoverer": "Humphry Davy",
    "discoveryYear": "1807",
    "discoveryPlace": null,
    "storyAr": "عزل همفري ديفي البوتاسيوم عام 1807 عن طريق تمرير تيار كهربائي في البوتاس الرطب.",
    "nameOriginAr": "مشتق من الكلمة الإنجليزية 'potash'.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/19/potassium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/19"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 20,
    "symbol": "Ca",
    "nameAr": "كالسيوم",
    "nameEn": "Calcium",
    "mass": "40.08",
    "group": 2,
    "period": 4,
    "category": "alkaline-earth-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الكالسيوم معدن لين أبيض فضي يفقد بريقه بسرعة في الهواء ويتفاعل مع الماء.",
    "propertiesAr": [
      "معدن لين أبيض فضي",
      "يفقد بريقه بسرعة"
    ],
    "usesAr": [
      "يستخدم كعامل مختزل في إنتاج معادن أخرى وكعامل مساعد في السبائك",
      "تستخدم مركباته مثل الحجر الجيري والجبس في البناء والطب"
    ],
    "occurrenceAr": "خامس أكثر المعادن وفرة في قشرة الأرض ولا يوجد منفرداً، بل في معادن مثل الحجر الجيري والجبس والفلوريت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/72/Calcium.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/calcium.php",
    "discoverer": "Humphry Davy",
    "discoveryYear": "1808",
    "discoveryPlace": null,
    "storyAr": "نجح همفري ديفي في عزل الكالسيوم عام 1808 عن طريق تقطير الزئبق من ملغم الكالسيوم.",
    "nameOriginAr": "مشتق من الكلمة اللاتينية 'calx' وتعني الجير.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/20/calcium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/20"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 21,
    "symbol": "Sc",
    "nameAr": "سكانديوم",
    "nameEn": "Scandium",
    "mass": "44.95591",
    "group": 3,
    "period": 4,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "السكانديوم عنصر فلزي نادر يتوزع في العديد من المعادن.",
    "propertiesAr": [
      "فلز فضي",
      "يفقد بريقه في الهواء"
    ],
    "usesAr": [
      "يستخدم في الأبحاث وبعض السبائك خفيفة الوزن وعالية المقاومة للحرارة.",
      "يستخدم في مصابيح بخار الزئبق وكاشف نظائري في تكرير النفط."
    ],
    "occurrenceAr": "يتواجد بكميات ضئيلة في أكثر من 800 نوع من المعادن.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Scandium%2C_Sc.jpg",
    "imageCredit": "JanDerChemiker, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
    "discoverer": "Lars Frederik Nilson",
    "discoveryYear": "1879",
    "discoveryPlace": null,
    "storyAr": "تنبأ مندليف بوجود عنصر السكانديوم قبل اكتشافه عام 1879 على يد لارس فريدريك نيلسون.",
    "nameOriginAr": "مشتق من \"Scandia\" وهو الاسم اللاتيني لسكندنافيا.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/21/scandium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/21"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 22,
    "symbol": "Ti",
    "nameAr": "تيتانيوم",
    "nameEn": "Titanium",
    "mass": "47.867",
    "group": 4,
    "period": 4,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "التيتانيوم فلز قوي وخفيف الوزن ومقاوم للتآكل وواسع الانتشار.",
    "propertiesAr": [
      "فلز صلب وبراق"
    ],
    "usesAr": [
      "يستخدم في سبائك الطائرات والمركبات الفضائية والمعدات الطبية.",
      "يستخدم ثاني أكسيد التيتانيوم كصبغة بيضاء وواقي شمس."
    ],
    "occurrenceAr": "هو العنصر التاسع من حيث الوفرة على الأرض ويتواجد في الصخور النارية ومعادن مثل الإلمنيت والروتيل.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Titanium.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/titanium.php",
    "discoverer": "William Gregor",
    "discoveryYear": "1791",
    "discoveryPlace": null,
    "storyAr": "اكتشف ويليام جريجور التيتانيوم عام 1791، ثم أطلق عليه مارتن كلابروث اسمه الحالي لاحقاً.",
    "nameOriginAr": "مشتق من \"الجبابرة\" (Titans) في الميثولوجيا اليونانية.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/22/titanium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/22"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 23,
    "symbol": "V",
    "nameAr": "فاناديوم",
    "nameEn": "Vanadium",
    "mass": "50.9415",
    "group": 5,
    "period": 4,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الفاناديوم فلز انتقالي يستخدم بشكل أساسي لتحسين خصائص الصلب.",
    "propertiesAr": [
      "فلز فضي",
      "يقاوم التآكل"
    ],
    "usesAr": [
      "يدخل في سبائك الصلب لجعله شديد الصلابة ومقاوماً للصدمات.",
      "يستخدم في المفاعلات النووية وكمحفز صناعي."
    ],
    "occurrenceAr": "يتواجد في حوالي 65 معدناً مختلفاً بالإضافة إلى الصخور الفوسفاتية وبعض النفط الخام.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Vanadium-pieces.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/vanadium.php",
    "discoverer": "Andrés Manuel del Rio",
    "discoveryYear": "1801",
    "discoveryPlace": null,
    "storyAr": "اكتُشف الفاناديوم مرتين، الأولى عام 1801 على يد أندريس مانويل ديل ريو والثانية عام 1831 على يد نيل غابرييل سيفستروم.",
    "nameOriginAr": "مشتق من \"Vanadis\" وهو اسم إسكندنافي قديم للإلهة فرايا.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/23/vanadium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/23"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 24,
    "symbol": "Cr",
    "nameAr": "كروم",
    "nameEn": "Chromium",
    "mass": "51.996",
    "group": 6,
    "period": 4,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الكروم فلز يستخدم في صناعة الصلب المقاوم للصدأ وطلاء المعادن.",
    "propertiesAr": [
      "فلز صلب وفضي",
      "ذو مسحة زرقاء"
    ],
    "usesAr": [
      "يستخدم لتقسية الصلب وإنتاج الفولاذ المقاوم للصدأ والطلاء الكرومي.",
      "تستخدم مركباته كأصباغ ومحفزات صناعية وفي دباغة الجلود."
    ],
    "occurrenceAr": "يوجد بشكل رئيسي في خام الكروميت في مناطق مثل جنوب أفريقيا والهند.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Chromium.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/chromium.php",
    "discoverer": "Nicholas Louis Vauquelin",
    "discoveryYear": "1798",
    "discoveryPlace": null,
    "storyAr": "اكتشفه الكيميائي الفرنسي نيكولا لوي فوكلين عام 1798 في معدن الكروكويت.",
    "nameOriginAr": "مشتق من الكلمة اليونانية \"chroma\" التي تعني اللون.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/24/chromium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/24"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 25,
    "symbol": "Mn",
    "nameAr": "منغنيز",
    "nameEn": "Manganese",
    "mass": "54.93804",
    "group": 7,
    "period": 4,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "المنغنيز فلز هش يستخدم بشكل أساسي كإضافة لتعزيز قوة الصلب.",
    "propertiesAr": [
      "فلز صلب وهش",
      "فضي اللون"
    ],
    "usesAr": [
      "يضاف للصلب لزيادة قوته ومقاومته للتآكل.",
      "يستخدم ثاني أكسيد المنغنيز كمحفز وكمادة لإزالة تلون الزجاج."
    ],
    "occurrenceAr": "هو خامس أكثر الفلزات وفرة في القشرة الأرضية ويتواجد في معادن مثل البيرولوسيت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/64/Manganese_element.jpg",
    "imageCredit": "W. Oelen, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
    "discoverer": "Johan Gottlieb Gahn",
    "discoveryYear": "1774",
    "discoveryPlace": null,
    "storyAr": "رغم استخدامه في العصور القديمة، عُزل المنغنيز كفلز لأول مرة بواسطة يوهان غوتليب غان عام 1774.",
    "nameOriginAr": "ربما مشتق من الكلمة اللاتينية \"magnes\" التي تعني مغناطيس أو \"magnesia nigra\".",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/25/manganese"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/25"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 26,
    "symbol": "Fe",
    "nameAr": "حديد",
    "nameEn": "Iron",
    "mass": "55.84",
    "group": 8,
    "period": 4,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الحديد هو الفلز الأكثر أهمية تجارياً ويشكل أساس صناعة الصلب والبنية التحتية.",
    "propertiesAr": [
      "فلز فضي",
      "يصدأ في الهواء الرطب"
    ],
    "usesAr": [
      "يستخدم في إنتاج أنواع مختلفة من الصلب للبناء والتصنيع والأدوات.",
      "يستخدم كعامل حفاز في عمليات كيميائية صناعية."
    ],
    "occurrenceAr": "رابع أكثر العناصر وفرة في القشرة الأرضية ويوجد بكثرة في خامات الهيماتيت والمغنتيت.",
    "imageUrl": "https://images-of-elements.com/iron-2.jpg",
    "imageCredit": "Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/iron.php",
    "discoverer": null,
    "discoveryYear": "حوالي 3500 قبل الميلاد",
    "discoveryPlace": null,
    "storyAr": "استُخدم الحديد منذ حوالي 3500 قبل الميلاد، وبدأ العصر الحديدي مع قدرة الحيثيين على صهره عام 1500 قبل الميلاد.",
    "nameOriginAr": "مشتق من الاسم الأنجلوسكسوني \"iren\".",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/26/iron"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/26"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 27,
    "symbol": "Co",
    "nameAr": "كوبالت",
    "nameEn": "Cobalt",
    "mass": "58.93319",
    "group": 9,
    "period": 4,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الكوبالت فلز مغناطيسي يستخدم في صناعة المغناطيسات القوية والسبائك المقاومة للحرارة.",
    "propertiesAr": [
      "فلز لامع",
      "فضي مزرق"
    ],
    "usesAr": [
      "يستخدم في صنع مغناطيسات قوية وسبائك لمحركات النفاثة.",
      "تستخدم أملاحه لإنتاج ألوان زرقاء زاهية، ويستخدم الكوبالت-60 في علاج السرطان."
    ],
    "occurrenceAr": "يوجد في معادن مثل الكوبالتيت ويتم الحصول عليه غالباً كمنتج ثانوي لتكرير النيكل.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/62/Cobalt_ore_2.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/cobalt.php",
    "discoverer": "Georg Brandt",
    "discoveryYear": "1739",
    "discoveryPlace": null,
    "storyAr": "أثبت جورج براندت عام 1739 أن الخام الأزرق الداكن يحتوي على معدن غير معروف، بعد أن كان يُعتقد أنه مركب من الحديد والزرنيخ.",
    "nameOriginAr": "مشتق من الكلمة الألمانية \"kobald\" التي تعني عفريت.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/27/cobalt"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/27"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 28,
    "symbol": "Ni",
    "nameAr": "نيكل",
    "nameEn": "Nickel",
    "mass": "58.693",
    "group": 10,
    "period": 4,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "النيكل فلز مقاوم للتآكل ويدخل في العديد من السبائك والبطاريات.",
    "propertiesAr": [
      "فلز فضي",
      "يقاوم التآكل في درجات الحرارة العالية"
    ],
    "usesAr": [
      "يستخدم في طلاء المعادن وصناعة الفولاذ المقاوم للصدأ وسبائك المقاومة للحرارة.",
      "يستخدم في البطاريات القابلة لإعادة الشحن والعملات المعدنية."
    ],
    "occurrenceAr": "يستخرج من كبريتيدات الحديد والنيكل مثل البنتلانديت، ووصل جزء كبير منه للأرض عبر النيازك.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/57/Nickel_chunk.jpg",
    "imageCredit": "Materialscientist at English Wikipedia, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
    "discoverer": "Axel Fredrik Cronstedt",
    "discoveryYear": "1751",
    "discoveryPlace": null,
    "storyAr": "اكتشف أكسل فريدريك كرونستيد النيكل عام 1751، وأُنتج بشكله النقي لأول مرة عام 1775.",
    "nameOriginAr": "اختصار للكلمة الألمانية \"kupfernickel\" التي تعني نحاس الشيطان أو نحاس القديس نيكولاس.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/28/nickel"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/28"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 29,
    "symbol": "Cu",
    "nameAr": "نحاس",
    "nameEn": "Copper",
    "mass": "63.55",
    "group": 11,
    "period": 4,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "النحاس فلز قديم يشتهر بقدرته العالية على توصيل الكهرباء والحرارة.",
    "propertiesAr": [
      "فلز ضارب للحمرة والذهب",
      "سهل التشكيل والسحب"
    ],
    "usesAr": [
      "يستخدم في التوصيلات الكهربائية والمحركات وأعمال البناء.",
      "يستخدم في صناعة السبائك مثل البرونز والعملات المعدنية، وكبريتات النحاس كمبيد زراعي."
    ],
    "occurrenceAr": "يوجد بشكل طبيعي في معادن مثل الكالكوبيريت والبورنيت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f0/NatCopper.jpg",
    "imageCredit": "Native_Copper_Macro_Digon3.jpg: 'Jonathan Zander (Digon3)' derivative work: Materialscientist, CC BY-SA 2.5 <https://creativecommons.org/licenses/by-sa/2.5>, via Wikimedia Commons",
    "discoverer": null,
    "discoveryYear": "ما قبل التاريخ",
    "discoveryPlace": null,
    "storyAr": "استخدم البشر النحاس منذ أكثر من عشرة آلاف عام، وكان أول فلز يشكله الإنسان في التاريخ.",
    "nameOriginAr": "مشتق من الاسم الإنجليزي القديم \"coper\" والمستمد من اللاتينية \"Cyprium aes\" أي معدن قبرص.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/29/copper"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/29"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 30,
    "symbol": "Zn",
    "nameAr": "زنك",
    "nameEn": "Zinc",
    "mass": "65.4",
    "group": 12,
    "period": 4,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الزنك فلز يستخدم على نطاق واسع في جلفنة المعادن لحمايتها من الصدأ.",
    "propertiesAr": [
      "فلز أبيض فضي",
      "ذو مسحة زرقاء"
    ],
    "usesAr": [
      "يستخدم لجلفنة الحديد ومنع صدئه وفي سبائك مثل النحاس الأصفر.",
      "يستخدم أكسيد الزنك في صناعة الطلاء والمطاط ومستحضرات التجميل والأدوية."
    ],
    "occurrenceAr": "يستخرج بشكل رئيسي من خامات سفاليريت وكالامين في الصين وأستراليا وبيرو.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Zinc_%2830_Zn%29.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/zinc.php",
    "discoverer": "Andreas Marggraf",
    "discoveryYear": "حدد كعنصر عام 1746",
    "discoveryPlace": null,
    "storyAr": "عرفته الشعوب القديمة، ولكن تم التعرف عليه كعنصر مستقل في أوروبا بواسطة أندرياس مارجغراف عام 1746.",
    "nameOriginAr": "مشتق من الكلمة الألمانية \"zinc\" التي قد تعود لكلمة \"sing\" الفارسية بمعنى حجر.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/30/zinc"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/30"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 31,
    "symbol": "Ga",
    "nameAr": "غاليوم",
    "nameEn": "Gallium",
    "mass": "69.723",
    "group": 13,
    "period": 4,
    "category": "post-transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الغاليوم معدن ناعم يشبه الألمنيوم في مظهره.",
    "propertiesAr": [
      "معدن ناعم",
      "فضي مبيض"
    ],
    "usesAr": [
      "يستخدم كبديل للسيليكون في صناعة الإلكترونيات وأشباه الموصلات.",
      "يدخل في صناعة صمامات الثنائية الباعثة للضوء ومعدات تسجيل درجات الحرارة العالية."
    ],
    "occurrenceAr": "يتواجد بتركيزات ضئيلة في خامات الزنك والفحم والبوكسيت ويستخرج كمنتج ثانوي.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Solid_gallium_%28Ga%29.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/gallium.php",
    "discoverer": "Paul-Émile Lecoq de Boisbaudran",
    "discoveryYear": "1875",
    "discoveryPlace": null,
    "storyAr": "اكتشف بول إميل ليكوك دي بوبودران الغاليوم في باريس عام 1875 بعد أن لاحظ خطاً بنفسجياً في طيف الزنك، محققاً تنبؤ مندلييف بوجود عنصر تحت الألمنيوم.",
    "nameOriginAr": "مشتق من الاسم اللاتيني لفرنسا 'غاليا'.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/31/gallium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/31"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 32,
    "symbol": "Ge",
    "nameAr": "جرمانيوم",
    "nameEn": "Germanium",
    "mass": "72.63",
    "group": 14,
    "period": 4,
    "category": "metalloid",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الجرمانيوم شبه معدن هش يتميز بخصائص أشباه الموصلات.",
    "propertiesAr": [
      "شبه معدن",
      "فضي مبيض وهش"
    ],
    "usesAr": [
      "يستخدم في صناعة العدسات المتطورة لتميزه بمعامل انكسار عالٍ.",
      "يُستخدم كعامل سبائك لمنع تشوه الفضة وفي المصابيح الفلورية."
    ],
    "occurrenceAr": "نادر جداً ويتواجد في معادن مثل الجرمانايت والأرجيرودايت، ويستخلص من غبار صهر الزنك ورماد الفحم.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/08/Polycrystalline-germanium.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/germanium.php",
    "discoverer": "Clemens Winkler",
    "discoveryYear": "1886",
    "discoveryPlace": null,
    "storyAr": "اكتشف كليمنس وينكلر الجرمانيوم عام 1886 في ألمانيا بعد تحليله لمعدن الأرجيرودايت الذي وجد فيه عنصراً مجهولاً كان مندلييف قد تنبأ بوجوده.",
    "nameOriginAr": "مشتق من الاسم اللاتيني لألمانيا 'جرمانيا'.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/32/germanium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/32"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 33,
    "symbol": "As",
    "nameAr": "زرنيخ",
    "nameEn": "Arsenic",
    "mass": "74.92159",
    "group": 15,
    "period": 4,
    "category": "metalloid",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الزرنيخ شبه معدن له أشكال سامة وأخرى معدنية.",
    "propertiesAr": [
      "شبه معدن",
      "فضي رمادي لامع وهش"
    ],
    "usesAr": [
      "يُستخدم كعامل تشويب في أشباه الموصلات وفي صناعة الزجاج والحفاظ على الأخشاب.",
      "يستخدم في بعض التطبيقات الطبية وفي صناعة المبيدات الحشرية تحت رقابة صارمة."
    ],
    "occurrenceAr": "يتواجد بشكل رئيسي في معادن مثل الأرسينوبايرايت، ويتم الحصول عليه كمنتج ثانوي لتكرير النحاس والرصاص.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Arsenic_%2833_As%29.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/arsenic.php",
    "discoverer": "Albertus Magnus",
    "discoveryYear": "حوالي 1250",
    "discoveryPlace": null,
    "storyAr": "عُرف الزرنيخ قديماً لدى المصريين والصينيين، وتُنسب اكتشافاته العلمية إلى ألبرتوس ماغنوس في القرن الثالث عشر.",
    "nameOriginAr": "يُعتقد أنه مشتق من 'أرسينيكون'، الاسم اليوناني لصبغة الأوربيمينت الصفراء.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/33/arsenic"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/33"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 34,
    "symbol": "Se",
    "nameAr": "سيلينيوم",
    "nameEn": "Selenium",
    "mass": "78.97",
    "group": 16,
    "period": 4,
    "category": "nonmetal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "السيلينيوم شبه معدن يوجد في شكلين هما المعدن الفضي أو المسحوق الأحمر.",
    "propertiesAr": [
      "شبه معدن",
      "معدن فضي أو مسحوق أحمر"
    ],
    "usesAr": [
      "يستخدم لإزالة لون الزجاج أو تلوينه، وفي صناعة الخلايا الضوئية والمقومات الكهربائية.",
      "يدخل في صناعة الشامبو المضاد للقشرة وكمضاف لسبائك الفولاذ المقاوم للصدأ."
    ],
    "occurrenceAr": "يوجد في معادن نادرة ويستخلص من الحمأة الأنودية الناتجة عن تكرير النحاس كهربائياً.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Selenium.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/selenium.php",
    "discoverer": "Jöns Jacob Berzelius",
    "discoveryYear": "1817",
    "discoveryPlace": null,
    "storyAr": "اكتشف يونس ياكوب بيرزيليوس السيلينيوم في ستوكهولم عام 1817 بعد ملاحظة رواسب غريبة في مصنع لحمض الكبريتيك.",
    "nameOriginAr": "مشتق من 'سيليني'، الاسم اليوناني للقمر.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/34/selenium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/34"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 35,
    "symbol": "Br",
    "nameAr": "بروم",
    "nameEn": "Bromine",
    "mass": "79.90",
    "group": 17,
    "period": 4,
    "category": "halogen",
    "phase": "سائل",
    "radioactive": false,
    "summaryAr": "البروم سائل سام ذو لون أحمر داكن ورائحة نفاذة.",
    "propertiesAr": [
      "سائل زيتي",
      "أحمر داكن"
    ],
    "usesAr": [
      "يستخدم في صناعة مثبطات اللهب، والمبيدات الحشرية، والأدوية، والأصباغ.",
      "يُستخدم في التصوير الفوتوغرافي وفي طفايات الحريق الخاصة."
    ],
    "occurrenceAr": "يستخرج من الرواسب الملحية الغنية بالبروم، خاصة في البحر الميت والولايات المتحدة والصين.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/87/Bromine-ampoule.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/bromine.php",
    "discoverer": "Antoine-Jérôme Balard in Montpellier, France and Carl Löwig in Heidelberg, Germany",
    "discoveryYear": "1826",
    "discoveryPlace": null,
    "storyAr": "اكتشف أنطوان جيروم بالارد البروم عام 1826 من مياه مالحة في فرنسا، بينما أنتجه كارل لويغ بشكل مستقل في نفس الفترة تقريباً.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'بروموس' وتعني النتن.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/35/bromine"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/35"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 36,
    "symbol": "Kr",
    "nameAr": "كريبتون",
    "nameEn": "Krypton",
    "mass": "83.80",
    "group": 18,
    "period": 4,
    "category": "noble-gas",
    "phase": "غاز",
    "radioactive": false,
    "summaryAr": "الكريبتون غاز خامل عديم اللون والرائحة يتميز بخموله الكيميائي.",
    "propertiesAr": [
      "غاز",
      "عديم اللون والرائحة"
    ],
    "usesAr": [
      "يستخدم في تعبئة المصابيح الفلورية الموفرة للطاقة وفي مصابيح التصوير الفوتوغرافي.",
      "تُستخدم مركباته مثل فلوريد الكريبتون في بعض أنواع الليزر."
    ],
    "occurrenceAr": "غاز نادر جداً في الغلاف الجوي ويستخلص عن طريق تقطير الهواء المسال.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Krypton-glow.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/krypton.php",
    "discoverer": "Sir William Ramsay and Morris Travers",
    "discoveryYear": "1898",
    "discoveryPlace": null,
    "storyAr": "اكتشف ويليام رامزي وموريس ترافيرز الكريبتون في عام 1898 من خلال تقطير الهواء المسال واختبار المكونات المتبقية طيفياً.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'كريبتوس' وتعني الخفي.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/36/krypton"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/36"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 37,
    "symbol": "Rb",
    "nameAr": "روبيديوم",
    "nameEn": "Rubidium",
    "mass": "85.468",
    "group": 1,
    "period": 5,
    "category": "alkali-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الروبيديوم معدن ناعم يتفاعل بعنف مع الماء ويشتعل في الهواء.",
    "propertiesAr": [
      "معدن ناعم",
      "معدن فضي"
    ],
    "usesAr": [
      "يُستخدم في بعض أنواع الخلايا الضوئية والزجاج المتخصص.",
      "يُقترح استخدامه في المحركات الأيونية وتوربينات البخار ومولدات الحرارة الكهربائية."
    ],
    "occurrenceAr": "يتواجد في معادن مثل الليبيدوليت ويستخلص كمنتج ثانوي من تعدين الليثيوم.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Rb5.JPG",
    "imageCredit": "Dnn87, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons",
    "discoverer": "Gustav Kirchhoff and Robert Bunsen",
    "discoveryYear": "1861",
    "discoveryPlace": null,
    "storyAr": "اكتشف روبرت بنزن وغوستاف كيرشوف الروبيديوم عام 1861 من خلال التحليل الطيفي لمعدن الليبيدوليت، حيث لاحظا خطوطاً حمراء داكنة جديدة.",
    "nameOriginAr": "مشتق من الكلمة اللاتينية 'روبيديوس' وتعني الأحمر الداكن.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/37/rubidium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/37"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 38,
    "symbol": "Sr",
    "nameAr": "سترونشيوم",
    "nameEn": "Strontium",
    "mass": "87.62",
    "group": 2,
    "period": 5,
    "category": "alkaline-earth-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "السترونتيوم معدن ناعم يشتعل في الهواء ويتفاعل مع الماء.",
    "propertiesAr": [
      "معدن ناعم",
      "معدن فضي"
    ],
    "usesAr": [
      "تستخدم أملاحه لإضفاء اللون الأحمر في الألعاب النارية والمشاعل.",
      "يستخدم في مغناطيسات الفريت، الدهانات المضيئة، ومعجون الأسنان المخصص للحساسية."
    ],
    "occurrenceAr": "يتواجد في خامات السليستيت والسترونتيانيت، وتعتبر الصين المنتج الرئيسي له.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/84/Strontium-1.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/strontium.php",
    "discoverer": "Adair Crawford",
    "discoveryYear": "1790",
    "discoveryPlace": null,
    "storyAr": "اكتشف أدير كروفورد عنصراً مجهولاً في معدن من أسكتلندا عام 1790، ثم عزله همفري ديفي لاحقاً بواسطة التحليل الكهربائي في 1808.",
    "nameOriginAr": "سمي تيمناً ببلدة سترونتيان في أسكتلندا.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/38/strontium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/38"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 39,
    "symbol": "Y",
    "nameAr": "إيتريوم",
    "nameEn": "Yttrium",
    "mass": "88.90584",
    "group": 3,
    "period": 5,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الإيتريوم معدن ناعم ذو لون فضي.",
    "propertiesAr": [
      "معدن ناعم",
      "معدن فضي"
    ],
    "usesAr": [
      "يستخدم كمضاف لزيادة قوة سبائك الألمنيوم والمغنيسيوم وفي صناعة الليزر.",
      "يدخل في صناعة السيراميك المقاوم للحرارة والمواد فائقة التوصيل."
    ],
    "occurrenceAr": "يوجد في معادن الأرض النادرة مثل الزينوتايم والمونازيت ويستخلص باختزال فلوريد الإيتريوم.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/90/Piece_of_Yttrium.jpg",
    "imageCredit": "Jan Anskeit, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    "discoverer": "Johan Gadolin",
    "discoveryYear": "1794",
    "discoveryPlace": null,
    "storyAr": "اكتشف يوهان غادولين الإيتريوم عام 1794 في معدن غامض عُثر عليه في السويد، وعُزل المعدن الخالص لأول مرة عام 1828.",
    "nameOriginAr": "سمي تيمناً ببلدة يتربي في السويد.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/39/yttrium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/39"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 40,
    "symbol": "Zr",
    "nameAr": "زركونيوم",
    "nameEn": "Zirconium",
    "mass": "91.22",
    "group": 4,
    "period": 5,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الزركونيوم معدن صلب يتميز بمقاومة عالية للتآكل.",
    "propertiesAr": [
      "معدن صلب",
      "معدن فضي"
    ],
    "usesAr": [
      "يستخدم في المفاعلات النووية لقدرته على عدم امتصاص النيوترونات.",
      "يُستخدم في صناعة السيراميك فائق القوة والعدسات وأدوات التجميل."
    ],
    "occurrenceAr": "يتواجد في معادن مثل الزركون والبادلييت، ويستخرج غالباً من أستراليا وجنوب أفريقيا.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Zirconium-pieces.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/zirconium.php",
    "discoverer": "Martin Heinrich Klaproth",
    "discoveryYear": "1789",
    "discoveryPlace": null,
    "storyAr": "اكتشف مارتن كلابروث الزركونيوم عام 1789 في معدن الزركون، لكن عزله الخالص لم يتحقق إلا في عام 1925.",
    "nameOriginAr": "مشتق من الكلمة الفارسية 'زرغون' وتعني ذهبي اللون.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/40/zirconium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/40"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 41,
    "symbol": "Nb",
    "nameAr": "نيوبيوم",
    "nameEn": "Niobium",
    "mass": "92.90637",
    "group": 5,
    "period": 5,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "النيوبيوم معدن فضي يتميز بمقاومة عالية للتآكل بفضل طبقة الأكسيد على سطحه.",
    "propertiesAr": [
      "معدن فضي مقاوم للتآكل"
    ],
    "usesAr": [
      "يدخل في صناعة سبائك الفولاذ المقاوم للصدأ لتعزيز قوتها.",
      "يستخدم في المغانط فائقة التوصيل والمكونات الإنشائية في المحركات والجسور."
    ],
    "occurrenceAr": "يستخرج بشكل رئيسي من معدن الكولومبيت الموجود في عدة دول، ويعد نتاجاً ثانوياً لاستخراج القصدير.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Niobium_strips.JPG",
    "imageCredit": "Mauro Cateb, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
    "discoverer": "Charles Hatchett",
    "discoveryYear": "1801",
    "discoveryPlace": null,
    "storyAr": "اكتشف تشارلز هاتشيت النيوبيوم عام 1801 وأطلق عليه اسم كولومبيوم، ثم أعاد هاينريش روز تسميته لاحقاً بعد إثبات وجوده في معدن الكولومبيت.",
    "nameOriginAr": "مشتق من نيوَب، ابنة الملك تانتالوس في الأساطير اليونانية.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/41/niobium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/41"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 42,
    "symbol": "Mo",
    "nameAr": "موليبدينوم",
    "nameEn": "Molybdenum",
    "mass": "95.95",
    "group": 6,
    "period": 5,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الموليبدينوم معدن لامع وفضي يتميز بدرجة انصهار عالية جداً.",
    "propertiesAr": [
      "معدن لامع وفضي"
    ],
    "usesAr": [
      "يستخدم كمكون في السبائك لزيادة الصلابة ومقاومة التآكل.",
      "يعمل كعامل مساعد في الصناعات البترولية وكإضافات للتشحيم."
    ],
    "occurrenceAr": "يستخرج من معدن الموليبدينيت في الولايات المتحدة والصين وتشيلي وبيرو، أو كمنتج ثانوي لاستخراج النحاس والتنغستن.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Molybdenum.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/molybdenum.php",
    "discoverer": "Peter Jacob Hjelm",
    "discoveryYear": "1781",
    "discoveryPlace": null,
    "storyAr": "أعلن بيتر جاكوب هيلم عن اكتشافه للمعدن عام 1781 بعد نجاحه في اختزال حمض الموليبديك باستخدام الكربون.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'molybdos' التي تعني الرصاص.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/42/molybdenum"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/42"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 43,
    "symbol": "Tc",
    "nameAr": "تكنيشيوم",
    "nameEn": "Technetium",
    "mass": "96.90636",
    "group": 7,
    "period": 5,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "التكنيتيوم معدن فضي مشع لا يوجد بشكل طبيعي على الأرض.",
    "propertiesAr": [
      "معدن فضي مشع"
    ],
    "usesAr": [
      "يستخدم نظير التكنيتيوم-99m في التشخيص الطبي عبر التصوير الإشعاعي.",
      "يعمل كمثبط فعال لتآكل الفولاذ في الأنظمة المغلقة."
    ],
    "occurrenceAr": "ينتج بكميات كبيرة كأحد نواتج الانشطار النووي لوقود اليورانيوم.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Technetium-sample-cropped.jpg",
    "imageCredit": "GFDL, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    "discoverer": "Carlo Perrier and Emilio Segrè",
    "discoveryYear": "1937",
    "discoveryPlace": null,
    "storyAr": "اكتشف إميليو سيغري هذا العنصر عام 1937 في إيطاليا بعد تعريض الموليبدينوم لإشعاع عالي الطاقة.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'tekhnetos' التي تعني اصطناعي.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/43/technetium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/43"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 44,
    "symbol": "Ru",
    "nameAr": "روثينيوم",
    "nameEn": "Ruthenium",
    "mass": "101.1",
    "group": 8,
    "period": 5,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الروثينيوم معدن لامع وفضي يعد من أندر المعادن على كوكب الأرض.",
    "propertiesAr": [
      "معدن لامع وفضي"
    ],
    "usesAr": [
      "يستخدم في صناعة الإلكترونيات والمقاومات الكهربائية.",
      "يدخل في صناعة المحفزات الكيميائية وتصليد البلاتين والبالاديوم."
    ],
    "occurrenceAr": "يوجد مرتبطاً بمعادن مجموعة البلاتين في خامات البنتلانديت والبيروكسينيت، ويستخلص من نفايات تكرير النيكل.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Ruthenium_crystal.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/ruthenium.php",
    "discoverer": "Karl Karlovich Klaus",
    "discoveryYear": "1844",
    "discoveryPlace": null,
    "storyAr": "تم تأكيد اكتشافه عام 1844 على يد كارل كارلوفيتش كلاوس الذي استخلصه ونقاه بعد محاولات سابقة غير مؤكدة من باحثين آخرين.",
    "nameOriginAr": "مشتق من 'Ruthenia'، الاسم اللاتيني لروسيا.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/44/ruthenium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/44"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 45,
    "symbol": "Rh",
    "nameAr": "روديوم",
    "nameEn": "Rhodium",
    "mass": "102.9055",
    "group": 9,
    "period": 5,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الروديوم معدن صلب ولامع وفضي، وهو أندر المعادن غير المشعة.",
    "propertiesAr": [
      "معدن صلب لامع وفضي"
    ],
    "usesAr": [
      "يستخدم بشكل رئيسي في المحولات الحفازة للسيارات لتقليل الانبعاثات الضارة.",
      "يستعمل في طلاء المرايا، الألياف البصرية، والاتصالات الكهربائية."
    ],
    "occurrenceAr": "يوجد غير متحد في رمال الأنهار بأمريكا، أو في خامات كبريتيد النحاس والنيكل بكندا، ويستخلص كمنتج ثانوي.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/54/Rhodium_%28Rh%29.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/rhodium.php",
    "discoverer": "William Hyde Wollaston",
    "discoveryYear": "1803",
    "discoveryPlace": null,
    "storyAr": "اكتشفه ويليام ولاستون عام 1803 أثناء فصله للبقايا الناتجة عن تذويب البلاتين في الماء الملكي.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'rhodon' التي تعني وردي اللون.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/45/rhodium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/45"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 46,
    "symbol": "Pd",
    "nameAr": "بالاديوم",
    "nameEn": "Palladium",
    "mass": "106.42",
    "group": 10,
    "period": 5,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "البالاديوم معدن فضي-أبيض لامع يتميز بمقاومة التآكل.",
    "propertiesAr": [
      "معدن فضي-أبيض لامع"
    ],
    "usesAr": [
      "يدخل في صناعة المحولات الحفازة للسيارات، المجوهرات، وطب الأسنان.",
      "يستخدم في الإلكترونيات كمكثفات خزفية وكمحفز لعمليات الهدرجة."
    ],
    "occurrenceAr": "يوجد بشكل غير متحد في البرازيل، ولكنه يستخرج تجارياً كمنتج ثانوي لتكرير النيكل والنحاس والزنك.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Palladium_%2846_Pd%29.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/palladium.php",
    "discoverer": "William Hyde Wollaston",
    "discoveryYear": "1803",
    "discoveryPlace": null,
    "storyAr": "تم استخلاصه عام 1803 على يد ويليام ولاستون من بقايا تذويب البلاتين، وأعلن عن اكتشافه رسمياً عام 1805.",
    "nameOriginAr": "سمي تيمناً بالكويكب بالاس، الذي سمي نسبة للإلهة اليونانية بالاس.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/46/palladium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/46"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 47,
    "symbol": "Ag",
    "nameAr": "فضة",
    "nameEn": "Silver",
    "mass": "107.868",
    "group": 11,
    "period": 5,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الفضة معدن ناعم ولامع يفقد بريقه تدريجياً نتيجة تفاعله مع مركبات الكبريت في الهواء.",
    "propertiesAr": [
      "معدن ناعم ولامع"
    ],
    "usesAr": [
      "يستخدم في صناعة المجوهرات، أدوات المائدة، والمرايا بفضل قدرته العالية على عكس الضوء.",
      "يدخل في صناعة الدوائر المطبوعة، البطاريات، وبعض التطبيقات الطبية والبكتيرية."
    ],
    "occurrenceAr": "توجد الفضة بشكل غير متحد أو في خامات مثل الأرجنتيت، وتستخرج غالباً كمنتج ثانوي من مناجم الرصاص والزنك والنحاس.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Silver-nugget.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: http://images-of-elements.com/silver.php",
    "discoverer": null,
    "discoveryYear": "حوالي 3000 قبل الميلاد",
    "discoveryPlace": null,
    "storyAr": "بدأ تعدين الفضة منذ حوالي 3000 قبل الميلاد، وكانت تقنيات التكرير معروفة لدى الكلديين القدماء.",
    "nameOriginAr": "مشتق من الكلمة الأنجلوسكسونية 'siolfur'.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/47/silver"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/47"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 48,
    "symbol": "Cd",
    "nameAr": "كادميوم",
    "nameEn": "Cadmium",
    "mass": "112.41",
    "group": 12,
    "period": 5,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الكادميوم معدن فضي يتميز بمسحة زرقاء على سطحه.",
    "propertiesAr": [
      "معدن فضي بمسحة زرقاء"
    ],
    "usesAr": [
      "يستخدم في البطاريات القابلة لإعادة الشحن وفي طلاء الفولاذ لحمايته من التآكل.",
      "يعمل كقضبان تحكم في المفاعلات النووية لقدرته على امتصاص النيوترونات."
    ],
    "occurrenceAr": "يوجد بكميات صغيرة في معدن السفاليريت، ويستخلص تجارياً كمنتج ثانوي لتكرير الزنك.",
    "imageUrl": "https://images-of-elements.com/cadmium-4.jpg",
    "imageCredit": "Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/cadmium.php",
    "discoverer": "Friedrich Stromeyer",
    "discoveryYear": "1817",
    "discoveryPlace": null,
    "storyAr": "اكتشفه فريدريك ستروماير عام 1817 بعد ملاحظة شوائب في أكسيد الزنك، وأعلن آخرون عن اكتشافه في العام التالي.",
    "nameOriginAr": "مشتق من الكلمة اللاتينية 'cadmia' وهو اسم لمعدن الكالامين.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/48/cadmium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/48"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 49,
    "symbol": "In",
    "nameAr": "إنديوم",
    "nameEn": "Indium",
    "mass": "114.818",
    "group": 13,
    "period": 5,
    "category": "post-transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الإنديوم معدن ناعم وفضي يتميز بالاستقرار في الهواء والماء.",
    "propertiesAr": [
      "معدن ناعم وفضي"
    ],
    "usesAr": [
      "يستخدم في صناعة أكاسيد القصدير والإنديوم للشاشات التي تعمل باللمس والألواح الشمسية.",
      "يدخل في صناعة أشباه الموصلات وطلاء المرايا والأسطح الزجاجية."
    ],
    "occurrenceAr": "من المعادن نادرة الوجود، يوجد مرتبطاً بخامات الزنك والحديد والرصاص والنحاس، ويستخرج كمنتج ثانوي لتكرير الزنك.",
    "imageUrl": "https://images-of-elements.com/indium-2.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: http://images-of-elements.com/indium.php",
    "discoverer": "Ferdinand Reich and Hieronymous Richter",
    "discoveryYear": "1863",
    "discoveryPlace": null,
    "storyAr": "اكتشفه فرديناند رايش وهيرونيموس ريشتر عام 1863 باستخدام التحليل الطيفي الذي كشف عن خط بنفسجي مميز.",
    "nameOriginAr": "مشتق من الكلمة اللاتينية 'indicium' التي تعني اللون البنفسجي أو النيلي.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/49/indium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/49"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 50,
    "symbol": "Sn",
    "nameAr": "قصدير",
    "nameEn": "Tin",
    "mass": "118.71",
    "group": 14,
    "period": 5,
    "category": "post-transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "القصدير معدن ناعم وقابل للتشكيل، يتحول إلى مسحوق في درجات الحرارة المنخفضة.",
    "propertiesAr": [
      "معدن ناعم وقابل للتشكيل"
    ],
    "usesAr": [
      "يستخدم لطلاء المعادن الأخرى لمنع التآكل، ويدخل في تركيب السبائك كالنحاس والبرونز واللحام.",
      "يستعمل في صناعة الزجاج المسطح وفي تركيبات السيراميك والمجسات الغازية."
    ],
    "occurrenceAr": "يستخرج بشكل رئيسي من خام الكاسيتيريت، وتتركز مناجمه في الصين وتايلاند وإندونيسيا ودول أخرى.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Tin-2.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: http://images-of-elements.com/tin.php",
    "discoverer": null,
    "discoveryYear": "حوالي 2100 قبل الميلاد",
    "discoveryPlace": null,
    "storyAr": "لعب القصدير دوراً تاريخياً في تطوير الحضارة من خلال صناعة البرونز، واستخدمه البشر منذ حوالي 3000 قبل الميلاد.",
    "nameOriginAr": "مشتق من الكلمة الأنجلوسكسونية 'tin'.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/50/tin"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/50"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 51,
    "symbol": "Sb",
    "nameAr": "أنتيمون",
    "nameEn": "Antimony",
    "mass": "121.760",
    "group": 15,
    "period": 5,
    "category": "metalloid",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الأنتيمون هو شبه فلز فضي اللون، صلب وهش في صورته المعدنية.",
    "propertiesAr": [
      "شبه فلز فضي اللون",
      "مادة صلبة وهشة في صورتها المعدنية"
    ],
    "usesAr": [
      "يستخدم في الإلكترونيات والسبائك المقوية والبطاريات",
      "تدخل مركباته في صناعة المواد المقاومة للاشتعال والدهانات والزجاج"
    ],
    "occurrenceAr": "يتواجد بكميات صغيرة في أكثر من 100 معدن، وأبرزها كبريتيد الأنتيمون الثلاثي.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Antimony-4.jpg",
    "imageCredit": "Unknown authorUnknown author, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/antimony.php",
    "discoverer": null,
    "discoveryYear": "حوالي 1600 قبل الميلاد",
    "discoveryPlace": null,
    "storyAr": "عُرف الأنتيمون ومركباته منذ العصور القديمة، حيث استُخدم كحل من قبل شخصيات تاريخية مثل إيزابل.",
    "nameOriginAr": "مشتق من اليونانية 'anti - monos' وتعني ليس وحيداً.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/51/antimony"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/51"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 52,
    "symbol": "Te",
    "nameAr": "تلوريوم",
    "nameEn": "Tellurium",
    "mass": "127.6",
    "group": 16,
    "period": 5,
    "category": "metalloid",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "التيلوريوم هو شبه فلز يُستخلص عادةً على شكل مسحوق رمادي.",
    "propertiesAr": [
      "شبه فلز",
      "مسحوق رمادي اللون"
    ],
    "usesAr": [
      "يُستخدم في السبائك لتحسين قابليتها للتشغيل ومقاومتها للأحماض",
      "يدخل في صناعة الخلايا الشمسية والأقراص المدمجة وكمحفز في تكرير النفط"
    ],
    "occurrenceAr": "نادر جداً في القشرة الأرضية ويُستخلص تجارياً من طين المصعد الناتج عن تكرير النحاس.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Tellurium2.jpg",
    "imageCredit": "Unknown authorUnknown author, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/tellurium.php",
    "discoverer": "Franz-Joseph Müller von Reichenstein",
    "discoveryYear": "1783",
    "discoveryPlace": null,
    "storyAr": "اكتشفه فرانز جوزيف مولر فون راينشتاين عام 1783 بعد بحثه في خام معدني من رومانيا.",
    "nameOriginAr": "مشتق من اللاتينية 'tellus' وتعني الأرض.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/52/tellurium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/52"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 53,
    "symbol": "I",
    "nameAr": "يود",
    "nameEn": "Iodine",
    "mass": "126.9045",
    "group": 17,
    "period": 5,
    "category": "halogen",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "اليود مادة صلبة بلورية سوداء لامعة تتسامى لتشكل بخاراً أرجوانياً.",
    "propertiesAr": [
      "مادة صلبة بلورية سوداء لامعة",
      "يطلق بخاراً أرجوانياً عند تسخينه"
    ],
    "usesAr": [
      "يستخدم في المستحضرات الصيدلانية والمطهرات والأصباغ",
      "يدخل في صناعة مرشحات الاستقطاب لشاشات العرض ويُضاف إلى ملح الطعام"
    ],
    "occurrenceAr": "يتواجد في مياه البحر بتركيزات ضئيلة وتجمعه الأعشاب البحرية، ويُستخرج تجارياً من رواسب اليودات أو المحاليل الملحية.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Iodine-sample.jpg",
    "imageCredit": "Benjah-bmm27, Public domain, via Wikimedia Commons",
    "discoverer": "Bernard Courtois",
    "discoveryYear": "1811",
    "discoveryPlace": null,
    "storyAr": "اكتشفه برنارد كورتوا عام 1811 عندما لاحظ أبخرة أرجوانية أثناء معالجة رماد الأعشاب البحرية.",
    "nameOriginAr": "مشتق من اليونانية 'iodes' وتعني البنفسجي.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/53/iodine"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/53"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 54,
    "symbol": "Xe",
    "nameAr": "زينون",
    "nameEn": "Xenon",
    "mass": "131.29",
    "group": 18,
    "period": 5,
    "category": "noble-gas",
    "phase": "غاز",
    "radioactive": false,
    "summaryAr": "الزينون غاز خامل عديم اللون والرائحة.",
    "propertiesAr": [
      "غاز عديم اللون",
      "غاز عديم الرائحة"
    ],
    "usesAr": [
      "يستخدم في مصادر إضاءة متخصصة ومصابيح الوميض وأجهزة الليزر",
      "يُستخدم في أنظمة الدفع الأيوني للأقمار الصناعية وفي تصنيع بعض الأدوية"
    ],
    "occurrenceAr": "يوجد في الغلاف الجوي بتركيز منخفض ويُستخلص تجارياً من الهواء السائل.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Xenon-glow.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/xenon.php",
    "discoverer": "Sir William Ramsay and Morris Travers",
    "discoveryYear": "1898",
    "discoveryPlace": null,
    "storyAr": "اكتشفه ويليام رامزي وموريس ترافيرس عام 1898 من خلال تقطير غاز الكريبتون.",
    "nameOriginAr": "مشتق من اليونانية 'xenos' وتعني غريب.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/54/xenon"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/54"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 55,
    "symbol": "Cs",
    "nameAr": "سيزيوم",
    "nameEn": "Cesium",
    "mass": "132.9054520",
    "group": 1,
    "period": 6,
    "category": "alkali-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "السيزيوم فلز ناعم ذهبي اللون يتفاعل بمتفجر مع الماء.",
    "propertiesAr": [
      "فلز ناعم",
      "ذهبي اللون"
    ],
    "usesAr": [
      "يستخدم في سوائل الحفر وصناعة الزجاج البصري",
      "يُعد المكون الأساسي في الساعات الذرية المستخدمة في أنظمة تحديد المواقع العالمية"
    ],
    "occurrenceAr": "يتواجد في معادن مثل البولوسيت والليبيدوليت ويُنتج غالباً كمنتج ثانوي لتصنيع الليثيوم.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Cesium.jpg",
    "imageCredit": "Dnn87 Contact email: Dnn87yahoo.dk, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
    "discoverer": "Gustav Kirchhoff and Robert Bunsen",
    "discoveryYear": "1860",
    "discoveryPlace": null,
    "storyAr": "اكتشفه غوستاف كيرشوف وروبرت بنزن عام 1860 من خلال تحليل أطياف المياه المعدنية.",
    "nameOriginAr": "مشتق من اللاتينية 'caesius' وتعني الأزرق السماوي.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/55/cesium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/55"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 56,
    "symbol": "Ba",
    "nameAr": "باريوم",
    "nameEn": "Barium",
    "mass": "137.33",
    "group": 2,
    "period": 6,
    "category": "alkaline-earth-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الباريوم فلز ناعم فضي يتأكسد بسرعة في الهواء.",
    "propertiesAr": [
      "فلز ناعم",
      "فضي اللون"
    ],
    "usesAr": [
      "يستخدم في سوائل حفر آبار النفط والغاز وفي صناعة الدهانات والزجاج",
      "تستخدم كبريتات الباريوم كوسط تباين في الفحوصات الطبية بالأشعة السينية"
    ],
    "occurrenceAr": "يتواجد حصراً في مركبات مثل الباريت والويثيريت ولا يوجد في حالته الحرة.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Barium_%2856_Ba%29.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/barium.php",
    "discoverer": "Humphry Davy",
    "discoveryYear": "1808",
    "discoveryPlace": null,
    "storyAr": "تمكن همفري ديفي من إنتاج معدن الباريوم لأول مرة عام 1808 باستخدام التحليل الكهربائي.",
    "nameOriginAr": "مشتق من اليونانية 'barys' وتعني ثقيل.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/56/barium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/56"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 57,
    "symbol": "La",
    "nameAr": "لانثانوم",
    "nameEn": "Lanthanum",
    "mass": "138.9055",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "اللانثانوم فلز ناعم أبيض فضي يتأكسد بسرعة عند تعرضه للهواء.",
    "propertiesAr": [
      "فلز ناعم",
      "أبيض فضي"
    ],
    "usesAr": [
      "تستخدم سبائكه في تخزين الهيدروجين وفي بطاريات النيكل-هيدريد المعدنية",
      "يُستخدم في صناعة قداحات السجائر والمواد البصرية ومحفزات تكرير البترول"
    ],
    "occurrenceAr": "يوجد في معادن الأرض النادرة مثل المونازيت والباستنيسيت ويُفصل بتقنيات التبادل الأيوني.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Lanthanum.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lanthanum.php",
    "discoverer": "Carl Gustav Mosander",
    "discoveryYear": "1839",
    "discoveryPlace": null,
    "storyAr": "اكتشفه كارل غوستاف موساندر عام 1839 بعد فصله من عينة أكسيد السيريوم.",
    "nameOriginAr": "مشتق من اليونانية 'lanthanein' وتعني الاختباء.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/57/lanthanum"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/57"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 58,
    "symbol": "Ce",
    "nameAr": "سيريوم",
    "nameEn": "Cerium",
    "mass": "140.116",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "السيريوم فلز رمادي اللون يتأكسد بسهولة ويتفاعل مع الماء.",
    "propertiesAr": [
      "فلز رمادي"
    ],
    "usesAr": [
      "يستخدم كعنصر رئيسي في سبائك الميش التي تولد شرراً للقداحات",
      "يدخل في صناعة المحولات الحفزية، والأفران ذاتية التنظيف، وكمادة صبغية"
    ],
    "occurrenceAr": "هو العنصر الأكثر وفرة بين اللانثانيدات، ويوجد بشكل أساسي في معادن الباستنيسيت والمونازيت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Cerium2.jpg",
    "imageCredit": "Jurii, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/cerium.php",
    "discoverer": "Jöns Jacob Berzelius and Wilhelm Hisinger",
    "discoveryYear": "1803",
    "discoveryPlace": null,
    "storyAr": "تم التعرف عليه لأول مرة عام 1803 على يد برزيليوس وهيسينجر، بينما اكتشفه كلابروث بشكل مستقل في نفس الوقت.",
    "nameOriginAr": "سُمي تيمناً بالكويكب سيريس، الذي سُمي نسبة لإلهة الزراعة الرومانية.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/58/cerium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/58"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 59,
    "symbol": "Pr",
    "nameAr": "براسيوديميوم",
    "nameEn": "Praseodymium",
    "mass": "140.90766",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "البراسيوديميوم فلز ناعم ذو لون فضي مبيض.",
    "propertiesAr": [
      "فلز ناعم",
      "فضي مبيض"
    ],
    "usesAr": [
      "يستخدم في سبائك المغنيسيوم للطائرات وفي المغناطيسات الدائمة",
      "يُستخدم في تلوين الزجاج والمينا وفي نظارات الحماية للحامين"
    ],
    "occurrenceAr": "يتواجد مع عناصر لانثانيدية أخرى في معادن المونازيت والباستنيسيت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Praseodymium.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/praseodymium.php",
    "discoverer": "Carl Auer von Welsbach",
    "discoveryYear": "1885",
    "discoveryPlace": null,
    "storyAr": "نجح كارل أور فون ويلسباخ عام 1885 في فصل خليط 'الديديميوم' إلى عنصري البراسيوديميوم والنيوديميوم.",
    "nameOriginAr": "مشتق من اليونانية 'prasios didymos' وتعني التوأم الأخضر.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/59/praseodymium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/59"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 60,
    "symbol": "Nd",
    "nameAr": "نيوديميوم",
    "nameEn": "Neodymium",
    "mass": "144.24",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "النيوديميوم فلز ذو لون أبيض فضي يتأكسد بسرعة في الهواء.",
    "propertiesAr": [
      "فلز",
      "أبيض فضي"
    ],
    "usesAr": [
      "يُستخدم في صناعة مغناطيسات دائمة قوية جداً للأجهزة الإلكترونية",
      "يستخدم في تلوين الزجاج، وصناعة الليزر، وكعوامل حفازة في تفاعلات البلمرة"
    ],
    "occurrenceAr": "يستخلص من معادن المونازيت والباستنيسيت عبر تقنيات التبادل الأيوني والاستخلاص بالمذيبات.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Neodymium_%2860_Nd%29.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/neodymium.php",
    "discoverer": "Carl Auer von Welsbach",
    "discoveryYear": "1885",
    "discoveryPlace": null,
    "storyAr": "اكتشفه كارل أور فون ويلسباخ عام 1885 في فيينا بعد فصله من خليط كان يُعرف سابقاً بالديديميوم.",
    "nameOriginAr": "مشتق من اليونانية 'neos didymos' وتعني التوأم الجديد.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/60/neodymium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/60"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 61,
    "symbol": "Pm",
    "nameAr": "بروميثيوم",
    "nameEn": "Promethium",
    "mass": "144.91276",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "البروميثيوم عنصر مشع لا يوجد بشكل طبيعي على الأرض وينتج عن طريق الانشطار النووي.",
    "propertiesAr": [
      "معدن مشع"
    ],
    "usesAr": [
      "يستخدم بشكل رئيسي في الأبحاث",
      "يستخدم في البطاريات الذرية المتخصصة وأجهزة القياس"
    ],
    "occurrenceAr": "لا يوجد طبيعياً على الأرض بسبب قصر عمر نظائره.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Jacob .A. Marinsky, Lawrence E. Glendenin, and Charles D. Coryell",
    "discoveryYear": "1945",
    "discoveryPlace": null,
    "storyAr": "تم إنتاج العنصر 61 لأول مرة في عام 1945 بواسطة مارينسكي وغليندنين وكوريل في أوك ريدج باستخدام الكروماتوغرافيا.",
    "nameOriginAr": "مشتق من اسم بروميثيوس في الميثولوجيا اليونانية.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/61/promethium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/61"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 62,
    "symbol": "Sm",
    "nameAr": "ساماريوم",
    "nameEn": "Samarium",
    "mass": "150.4",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الساماريوم عنصر أرضي نادر يوجد في معادن مثل المونازيت والباستنيسيت ويستخدم في المغانط القوية.",
    "propertiesAr": [
      "معدن أبيض فضي"
    ],
    "usesAr": [
      "يستخدم في صناعة مغانط ساماريوم-كوبالت القوية",
      "يستخدم في الليزر البصري وامتصاص النيوترونات في المفاعلات النووية"
    ],
    "occurrenceAr": "يوجد في معادن مثل المونازيت والباستنيسيت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/88/Samarium-2.jpg",
    "imageCredit": "Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/samarium.php",
    "discoverer": "Paul-Émile Lecoq de Boisbaudran",
    "discoveryYear": "1879",
    "discoveryPlace": null,
    "storyAr": "استخلص بول إيميل ليكوك دي بويسودران الساماريوم من معدن السامارسكيت في عام 1879.",
    "nameOriginAr": "مشتق من اسم معدن السامارسكيت.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/62/samarium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/62"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 63,
    "symbol": "Eu",
    "nameAr": "يوروبيوم",
    "nameEn": "Europium",
    "mass": "151.964",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "اليوروبيوم معدن أرضي نادر نشط كيميائياً ويستخدم في تطبيقات بصرية وأمنية.",
    "propertiesAr": [
      "معدن ناعم أبيض فضي"
    ],
    "usesAr": [
      "يستخدم في طباعة الأوراق النقدية كعلامة أمنية",
      "يستخدم في مصابيح الإضاءة وقضبان التحكم في المفاعلات النووية"
    ],
    "occurrenceAr": "يوجد بشكل أساسي في معادن المونازيت والباستنيسيت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Europium.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/europium.php",
    "discoverer": "Eugène-Anatole Demarçay",
    "discoveryYear": "1901",
    "discoveryPlace": null,
    "storyAr": "استخلص يوجين-أناتول ديمارسي العنصر عام 1901 بعد عمليات تبلور متكررة لنترات ساماريوم والمغنيسيوم.",
    "nameOriginAr": "سمي تيمناً بقارة أوروبا.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/63/europium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/63"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 64,
    "symbol": "Gd",
    "nameAr": "غادولينيوم",
    "nameEn": "Gadolinium",
    "mass": "157.25",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الجادولينيوم عنصر أرضي نادر يتميز بقدرته العالية على امتصاص النيوترونات.",
    "propertiesAr": [
      "معدن ناعم أبيض فضي"
    ],
    "usesAr": [
      "يستخدم في سبائك الحديد والكروم لتعزيز مقاومتها للحرارة",
      "يستخدم في التصوير بالرنين المغناطيسي وفي مفاعلات الطاقة النووية"
    ],
    "occurrenceAr": "يوجد في معادن المونازيت والباستنيسيت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Gadolinium-2.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/gadolinium.php",
    "discoverer": "Jean Charles Galissard de Marignac",
    "discoveryYear": "1880",
    "discoveryPlace": null,
    "storyAr": "اكتشف تشارلز جاليسارد دي مارينياك العنصر عام 1880، وأطلق عليه لاحقاً اسم جادولينيوم عام 1886.",
    "nameOriginAr": "سمي تكريماً لجوهان جادولين.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/64/gadolinium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/64"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 65,
    "symbol": "Tb",
    "nameAr": "تيربيوم",
    "nameEn": "Terbium",
    "mass": "158.92535",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "التيربيوم عنصر أرضي نادر يستخدم في الأجهزة البصرية وتقنيات الإضاءة الموفرة للطاقة.",
    "propertiesAr": [
      "معدن ناعم أبيض فضي"
    ],
    "usesAr": [
      "يستخدم في الليزر والمصابيح الموفرة للطاقة",
      "يستخدم في تحسين جودة صور الأشعة السينية الطبية"
    ],
    "occurrenceAr": "يستخلص من معادن المونازيت والباستنيسيت والإكسينيت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Terbium-2.jpg",
    "imageCredit": "Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/terbium.php",
    "discoverer": "Carl Gustav Mosander",
    "discoveryYear": "1843",
    "discoveryPlace": null,
    "storyAr": "عزل كارل موساندر العنصر لأول مرة عام 1843 أثناء دراسته لأكسيد الإيتريوم.",
    "nameOriginAr": "مشتق من اسم مدينة يتربي السويدية.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/65/terbium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/65"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 66,
    "symbol": "Dy",
    "nameAr": "ديسبروسيوم",
    "nameEn": "Dysprosium",
    "mass": "162.500",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الديسبروسيوم معدن أرضي نادر حيوي في صناعة المغانط ذات الحرارة العالية.",
    "propertiesAr": [
      "معدن مشرق أبيض فضي"
    ],
    "usesAr": [
      "يستخدم في سبائك مغانط النيوديميوم لتحسين ثباتها الحراري",
      "يستخدم في قضبان التحكم بالمفاعلات النووية ومصابيح التفريغ"
    ],
    "occurrenceAr": "يوجد في معادن المونازيت والباستنيسيت والزينوتيم.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/55/Dysprosium-2.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/dysprosium.php",
    "discoverer": "Paul-Émile Lecoq de Boisbaudran",
    "discoveryYear": "1886",
    "discoveryPlace": null,
    "storyAr": "اكتشف بول إيميل ليكوك دي بويسودران العنصر في عام 1886 نتيجة أبحاث على أكسيد الإيتريوم.",
    "nameOriginAr": "مشتق من الكلمة اليونانية التي تعني يصعب الحصول عليه.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/66/dysprosium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/66"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 67,
    "symbol": "Ho",
    "nameAr": "هولميوم",
    "nameEn": "Holmium",
    "mass": "164.93033",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الهولميوم عنصر أرضي نادر يستخدم في المفاعلات النووية وتطبيقات المغنطة.",
    "propertiesAr": [
      "معدن مشرق أبيض فضي"
    ],
    "usesAr": [
      "يستخدم في المفاعلات النووية للتحكم في التفاعل المتسلسل",
      "يستخدم في صناعة بعض أنواع المغانط"
    ],
    "occurrenceAr": "يوجد كعنصر ثانوي في معادن المونازيت والباستنيسيت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Holmium2.jpg",
    "imageCredit": "Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/holmium.php",
    "discoverer": "Per Teodor Cleve at Uppsala, Sweden and independently by Marc Delafontaine and Louis Soret in Geneva, Switzerland",
    "discoveryYear": "1878",
    "discoveryPlace": null,
    "storyAr": "تم اكتشاف الهولميوم في عام 1878 بشكل مستقل من قبل فريقين بحثيين في جنيف وأوبسالا.",
    "nameOriginAr": "مشتق من الاسم اللاتيني لمدينة ستوكهولم.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/67/holmium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/67"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 68,
    "symbol": "Er",
    "nameAr": "إربيوم",
    "nameEn": "Erbium",
    "mass": "167.26",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الإربيوم معدن أرضي نادر يستخدم بشكل أساسي في تلوين الزجاج وتضخيم الإشارات في الألياف البصرية.",
    "propertiesAr": [
      "معدن ناعم أبيض فضي"
    ],
    "usesAr": [
      "يستخدم في تلوين الزجاج وتصنيع نظارات الحماية",
      "يستخدم في تضخيم الإشارات في كابلات الألياف البصرية"
    ],
    "occurrenceAr": "يوجد بشكل رئيسي في معادن المونازيت والباستنيسيت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Erbium-2.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/erbium.php",
    "discoverer": "Carl Gustav Mosander",
    "discoveryYear": "1843",
    "discoveryPlace": null,
    "storyAr": "عزل كارل موساندر الإربيوم عام 1843، ولم يتم إنتاجه كعنصر معدني نقي حتى عام 1934.",
    "nameOriginAr": "مشتق من اسم مدينة يتربي السويدية.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/68/erbium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/68"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 69,
    "symbol": "Tm",
    "nameAr": "ثوليوم",
    "nameEn": "Thulium",
    "mass": "168.93422",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الثوليوم معدن أرضي نادر يستخدم في تطبيقات التصوير بالأشعة السينية المحمولة وتقنيات الليزر.",
    "propertiesAr": [
      "معدن ناعم أبيض فضي"
    ],
    "usesAr": [
      "يستخدم في أجهزة الأشعة السينية الطبية المحمولة",
      "يستخدم في التطبيقات الجراحية بالليزر"
    ],
    "occurrenceAr": "يوجد في معدن المونازيت بنسبة ضئيلة.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Thulium-2.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/thulium.php",
    "discoverer": "Per Teodor Cleve",
    "discoveryYear": "1879",
    "discoveryPlace": null,
    "storyAr": "عزل بير تيودور كليف أكسيد الثوليوم عام 1879، وأحرزت عينة نقية منه لاحقاً في عام 1911.",
    "nameOriginAr": "مشتق من ثولي، الاسم القديم لاسكندنافيا.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/69/thulium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/69"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 70,
    "symbol": "Yb",
    "nameAr": "إيتيربيوم",
    "nameEn": "Ytterbium",
    "mass": "173.05",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الإيتربيوم عنصر أرضي نادر يستخدم في الأجهزة التكنولوجية كأجهزة الذاكرة والليزر والحفازات الصناعية.",
    "propertiesAr": [
      "معدن ناعم أبيض فضي"
    ],
    "usesAr": [
      "يستخدم في أجهزة الذاكرة والليزر القابل للضبط",
      "يستخدم كحفاز صناعي كبديل للمواد السامة"
    ],
    "occurrenceAr": "يوجد بشكل رئيسي في معدن المونازيت.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Ytterbium-3.jpg",
    "imageCredit": "Jurii, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/ytterbium.php",
    "discoverer": "Jean Charles Galissard de Marignac",
    "discoveryYear": "1878",
    "discoveryPlace": null,
    "storyAr": "عزل جان شارل جاليسارد دي مارينياك العنصر عام 1878، ولم يتم الحصول على عينة نقية منه إلا في عام 1953.",
    "nameOriginAr": "مشتق من اسم مدينة يتربي السويدية.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/70/ytterbium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/70"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 71,
    "symbol": "Lu",
    "nameAr": "لوتيتيوم",
    "nameEn": "Lutetium",
    "mass": "174.9667",
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "اللوتيتيوم هو عنصر معدني نادر من عائلة اللانثانويدات يُستخدم بشكل محدود في تطبيقات بحثية وصناعية.",
    "propertiesAr": [
      "فلز صلب وكثيف"
    ],
    "usesAr": [
      "عامل حفاز في تكرير الهيدروكربونات بمصافي النفط"
    ],
    "occurrenceAr": "يوجد بشكل رئيسي في معدن المونازيت ويستخلص بصعوبة",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Lutetium.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lutetium.php",
    "discoverer": "Georges Urbain in Paris, France and independently by Charles James in New Hampshire, USA",
    "discoveryYear": "1907",
    "discoveryPlace": null,
    "storyAr": "اكتشف جورج أوربان اللوتيتيوم في باريس عام 1907، متفوقاً على باحثين آخرين كانوا على وشك التوصل للاكتشاف ذاته.",
    "nameOriginAr": "مشتق من اسم 'لوتيتيا' وهو الاسم الروماني القديم لباريس.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/71/lutetium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/71"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 72,
    "symbol": "Hf",
    "nameAr": "هافنيوم",
    "nameEn": "Hafnium",
    "mass": "178.49",
    "group": 4,
    "period": 6,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الهافنيوم هو معدن لامع ومقاوم للتآكل يتميز بقدرته العالية على امتصاص النيوترونات.",
    "propertiesAr": [
      "فلز فضي لامع قابل للسحب"
    ],
    "usesAr": [
      "صناعة قضبان التحكم في المفاعلات النووية",
      "مكون في مشاعل اللحام بالبلازما وعوازل الرقائق الإلكترونية"
    ],
    "occurrenceAr": "يوجد بنسبة تقارب 5% في معظم خامات الزركونيوم",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/17/Hafnium_%2872_Hf%29.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/hafnium.php",
    "discoverer": "George Charles de Hevesy and Dirk Coster",
    "discoveryYear": "1923",
    "discoveryPlace": null,
    "storyAr": "اكتشف جورج دي هيفيسي وديرك كوستر العنصر عام 1923 في جامعة كوبنهاغن بعد بحث طويل لصعوبة فصله عن الزركونيوم.",
    "nameOriginAr": "مشتق من 'هافنيا' وهو الاسم اللاتيني لمدينة كوبنهاغن.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/72/hafnium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/72"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 73,
    "symbol": "Ta",
    "nameAr": "تانتالوم",
    "nameEn": "Tantalum",
    "mass": "180.9479",
    "group": 5,
    "period": 6,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "التانتالوم هو فلز شديد المقاومة للتآكل ويستخدم على نطاق واسع في التكنولوجيا الطبية والإلكترونيات.",
    "propertiesAr": [
      "فلز فضي لامع"
    ],
    "usesAr": [
      "صناعة المكثفات الإلكترونية للهواتف المحمولة",
      "استخدامه في الغرسات الجراحية نظراً لتوافقه الحيوي"
    ],
    "occurrenceAr": "يوجد في معدن كولومبيت-تانتاليت ويستخرج غالباً كمنتج ثانوي لتعدين القصدير",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/61/Tantalum.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/tantalum.php",
    "discoverer": "Anders Gustav Ekeberg",
    "discoveryYear": "1802",
    "discoveryPlace": null,
    "storyAr": "اكتشفه أندرس غوستاف إيكيبيرغ عام 1802، لكنه خلط لسنوات بينه وبين النيوبيوم حتى أثبت هاينريش روز اختلافهما عام 1846.",
    "nameOriginAr": "مشتق من اسم الملك الأسطوري اليوناني 'تانتالوس'.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/73/tantalum"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/73"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 74,
    "symbol": "W",
    "nameAr": "تنغستن",
    "nameEn": "Tungsten",
    "mass": "183.84",
    "group": 6,
    "period": 6,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "التنجستن هو معدن يمتاز بأعلى درجة انصهار بين جميع الفلزات ويستخدم في التطبيقات الصناعية القاسية.",
    "propertiesAr": [
      "فلز فضي أبيض لامع"
    ],
    "usesAr": [
      "صناعة أدوات القطع والحفر القاسية من كربيد التنجستن",
      "تطبيقات درجات الحرارة العالية وأقطاب اللحام"
    ],
    "occurrenceAr": "يستخرج من خامات الشيليت والولفراميت",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Tungsten_rod_with_oxidised_surface.jpg",
    "imageCredit": "Jurii, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/tungsten.php",
    "discoverer": "Juan and Fausto Elhuyar",
    "discoveryYear": "1783",
    "discoveryPlace": null,
    "storyAr": "بعد محاولات سابقة، تمكن الأخوان خوان وفاستو إلهويار من عزل التنجستن عام 1783 عبر اختزال أكسيده المعدني بالكربون.",
    "nameOriginAr": "مشتق من الكلمة السويدية 'tung sten' وتعني الحجر الثقيل.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/74/tungsten"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/74"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 75,
    "symbol": "Re",
    "nameAr": "رينيوم",
    "nameEn": "Rhenium",
    "mass": "186.207",
    "group": 7,
    "period": 6,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الرينيوم هو معدن نادر جداً يمتلك درجة انصهار عالية ويستخدم كمضاف لتحسين خصائص السبائك.",
    "propertiesAr": [
      "فلز ذو درجة انصهار عالية جداً"
    ],
    "usesAr": [
      "صناعة فتائل الأفران وأجزاء من توربينات الطائرات",
      "عامل حفاز في إنتاج الكيماويات الدقيقة"
    ],
    "occurrenceAr": "ينتشر بتركيزات ضئيلة جداً في القشرة الأرضية ويستخلص من غبار صهر الموليبدينوم",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Pure_rhenium_bead%2C_arc_melted%2C_21_grams._Original_size_in_cm_-_1.5_x_1.7.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/rhenium.php",
    "discoverer": "Walter Noddack, Ida Tacke and Otto Berg",
    "discoveryYear": "1925",
    "discoveryPlace": null,
    "storyAr": "كان آخر عنصر مستقر طبيعياً يتم اكتشافه، حيث عزله والتر نوداك وإيدا تاك عام 1925 بعد دراسة طيفية سابقة لماساتاكا أوغاوا.",
    "nameOriginAr": "مشتق من 'رينوس' وهو الاسم اللاتيني لنهر الراين.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/75/rhenium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/75"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 76,
    "symbol": "Os",
    "nameAr": "أوزميوم",
    "nameEn": "Osmium",
    "mass": "190.2",
    "group": 8,
    "period": 6,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الأوزميوم هو المعدن الأكثر كثافة بين جميع العناصر ويستخدم في التطبيقات التي تتطلب صلابة عالية.",
    "propertiesAr": [
      "فلز فضي لامع"
    ],
    "usesAr": [
      "إنتاج سبائك شديدة الصلابة لرؤوس أقلام الحبر والوصلات الكهربائية",
      "عامل حفاز في الصناعة الكيميائية"
    ],
    "occurrenceAr": "يوجد في الطبيعة بشكله الحر أو كسبائك مع الإيريديوم ويستخلص من فضلات تكرير النيكل",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Osmium-bead.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/osmium.php",
    "discoverer": "Smithson Tennant",
    "discoveryYear": "1803",
    "discoveryPlace": null,
    "storyAr": "اكتشفه سميثسون تينانت عام 1803 أثناء دراسته للبقايا الناتجة عن إذابة البلاتين في الأحماض.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'osme' التي تعني الرائحة.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/76/osmium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/76"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 77,
    "symbol": "Ir",
    "nameAr": "إريديوم",
    "nameEn": "Iridium",
    "mass": "192.22",
    "group": 9,
    "period": 6,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الإيريديوم هو معدن شديد الصلابة ومقاوم للتآكل بشكل استثنائي.",
    "propertiesAr": [
      "فلز فضي صلب"
    ],
    "usesAr": [
      "استخدامه في أطراف الأقلام وسبائك المقاومة للحرارة",
      "صناعة نقاط التلامس في شمعات الاحتراق"
    ],
    "occurrenceAr": "عنصر نادر يوجد طبيعياً في الرواسب النهرية ويستخلص كمنتج ثانوي لتكرير النيكل",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Iridium-2.jpg",
    "imageCredit": "Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/iridium.php",
    "discoverer": "Smithson Tennant",
    "discoveryYear": "1803",
    "discoveryPlace": null,
    "storyAr": "اكتشفه سميثسون تينانت عام 1803 وأطلق عليه هذا الاسم لأن أملاحه تتميز بألوان زاهية.",
    "nameOriginAr": "مشتق من اسم إلهة قوس قزح اليونانية 'إيريس'.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/77/iridium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/77"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 78,
    "symbol": "Pt",
    "nameAr": "بلاتين",
    "nameEn": "Platinum",
    "mass": "195.08",
    "group": 10,
    "period": 6,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "البلاتين معدن نبيل يقاوم التآكل ويعد أساسياً في تطبيقات المحولات الحفازة والمجوهرات.",
    "propertiesAr": [
      "فلز فضي أبيض لامع"
    ],
    "usesAr": [
      "استخدامه في المحولات الحفازة للمركبات لتقليل الانبعاثات",
      "صناعة المجوهرات والمعدات المخبرية والمحفزات الكيميائية"
    ],
    "occurrenceAr": "يوجد في الرواسب الغرينية ويستخلص بشكل أساسي من معدن الكوبريت في جنوب إفريقيا",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/68/Platinum_crystals.jpg",
    "imageCredit": "Periodictableru, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons",
    "discoverer": null,
    "discoveryYear": "عُرف لدى سكان أمريكا الجنوبيين قبل كولومبوس، وجُلِب إلى أوروبا حوالي عام 1750",
    "discoveryPlace": null,
    "storyAr": "استخدمه السكان الأصليون في أمريكا الجنوبية قبل قرون، وعرفه الأوروبيون ودرسوه بشكل موسع خلال القرن الثامن عشر.",
    "nameOriginAr": "مشتق من الكلمة الإسبانية 'platina' ومعناها الفضة الصغيرة.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/78/platinum"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/78"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 79,
    "symbol": "Au",
    "nameAr": "ذهب",
    "nameEn": "Gold",
    "mass": "196.96657",
    "group": 11,
    "period": 6,
    "category": "transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الذهب هو معدن كريم خامل كيميائياً يُستخدم في العملات والمجوهرات والصناعات الإلكترونية.",
    "propertiesAr": [
      "معدن لين ذو لون أصفر مميز"
    ],
    "usesAr": [
      "استخدامه في المجوهرات والعملات المعدنية والسبائك",
      "طلاء المكونات الإلكترونية وتطبيقات طب الأسنان والطب"
    ],
    "occurrenceAr": "يوجد في حالته الحرة في عروق الصخور والرواسب النهرية",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Gold_%2879_Au%29.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/gold.php",
    "discoverer": null,
    "discoveryYear": "حوالي 3000 قبل الميلاد",
    "discoveryPlace": null,
    "storyAr": "عُرف الذهب منذ عصور ما قبل التاريخ وكان أحد أوائل المعادن التي استخدمها الإنسان، حيث استُخرج في مصر القديمة منذ 2000 قبل الميلاد.",
    "nameOriginAr": "كلمة أنجلو-ساكسونية، والرمز الكيميائي مشتق من الكلمة اللاتينية 'aurum'.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/79/gold"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/79"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 80,
    "symbol": "Hg",
    "nameAr": "زئبق",
    "nameEn": "Mercury",
    "mass": "200.59",
    "group": 12,
    "period": 6,
    "category": "transition-metal",
    "phase": "سائل",
    "radioactive": false,
    "summaryAr": "الزئبق هو الفلز الوحيد الذي يكون في حالة سائلة في ظروف الضغط والحرارة العادية، ويُستخدم بحذر بسبب سميته.",
    "propertiesAr": [
      "فلز سائل فضي"
    ],
    "usesAr": [
      "عامل حفاز في الصناعات الكيميائية",
      "استخدامه في بعض المفاتيح الكهربائية والمقومات"
    ],
    "occurrenceAr": "يوجد نادراً بشكله الحر، لكنه يوجد كقطرات في خامات السينبار (كبريتيد الزئبق)",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/be/Hydrargyrum_%2880_Hg%29.jpg",
    "imageCredit": "Hi-Res Images of Chemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/mercury.php",
    "discoverer": null,
    "discoveryYear": "حوالي 1500 قبل الميلاد",
    "discoveryPlace": null,
    "storyAr": "استخدم البشر مادة السينبار كصبغة حمراء منذ 30,000 عام، وعُرف الزئبق بقدرته على إذابة الذهب قديماً.",
    "nameOriginAr": "سُمي تيمناً بكوكب عطارد.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/80/mercury"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/80"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 81,
    "symbol": "Tl",
    "nameAr": "ثاليوم",
    "nameEn": "Thallium",
    "mass": "204.383",
    "group": 13,
    "period": 6,
    "category": "post-transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الثاليوم معدن سام نادر يوجد في خامات معينة ويُستخرج كمنتج ثانوي لعمليات صقل المعادن.",
    "propertiesAr": [
      "معدن طري",
      "أبيض فضي يميل إلى التأكسد بسهولة"
    ],
    "usesAr": [
      "يستخدم في الأجهزة الكهروضوئية",
      "يدخل في صناعة الزجاج المتخصص والمجسات الحرارية"
    ],
    "occurrenceAr": "يوجد في خامات البيريت، ونواتج صقل النحاس والزنك والرصاص، وعقيدات المنجنيز في قاع المحيط.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/55/Thallium_%2881_Tl%29.jpg",
    "imageCredit": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/thallium.php",
    "discoverer": "William Crookes",
    "discoveryYear": "1861",
    "discoveryPlace": null,
    "storyAr": "شهد اكتشاف الثاليوم جدلاً بين ويليام كروكس وكلود أوغست لامي حول أولوية الكشف والحصول على التقدير العلمي.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'thallos' التي تعني غصناً أخضر.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/81/thallium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/81"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 82,
    "symbol": "Pb",
    "nameAr": "رصاص",
    "nameEn": "Lead",
    "mass": "207",
    "group": 14,
    "period": 6,
    "category": "post-transition-metal",
    "phase": "صلب",
    "radioactive": false,
    "summaryAr": "الرصاص معدن قديم الاستخدام، يسهل تشكيله ومقاوم للتآكل، لكنه ضار بالصحة.",
    "propertiesAr": [
      "معدن رمادي فضي باهت",
      "طري وسهل التشكيل في ألواح"
    ],
    "usesAr": [
      "يستخدم في بطاريات السيارات والذخيرة والأصباغ",
      "يدخل في الحماية من الإشعاع وتبطين الكابلات"
    ],
    "occurrenceAr": "يُستخرج بشكل رئيسي من معدن الجالينا، ويتم إعادة تدوير نسبة كبيرة منه.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/63/Lead-2.jpg",
    "imageCredit": "Chemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lead.php",
    "discoverer": null,
    "discoveryYear": "العصور القديمة",
    "discoveryPlace": null,
    "storyAr": "استخدم الإنسان الرصاص منذ أكثر من 6000 عام، وتنوعت تطبيقاته عبر الحضارات من الأنابيب الرومانية إلى الإضافات الوقودية حديثاً.",
    "nameOriginAr": "مشتق من الكلمة الأنجلو-ساكسونية 'lead'.",
    "halfLife": null,
    "radiationType": null,
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/82/lead"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/82"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 83,
    "symbol": "Bi",
    "nameAr": "بزموت",
    "nameEn": "Bismuth",
    "mass": "208.98040",
    "group": 15,
    "period": 6,
    "category": "post-transition-metal",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "البزموت معدن هش يتميز بكثافة عالية ويُستخدم غالباً في سبائك بفضل انخفاض درجة انصهاره.",
    "propertiesAr": [
      "معدن عالي الكثافة",
      "فضي ذو مسحة وردية"
    ],
    "usesAr": [
      "يدخل في صناعة كواشف الحرائق، والمصهرات الكهربائية، واللحام",
      "يستخدم في مستحضرات التجميل وبعض الأدوية المعالجة لعسر الهضم"
    ],
    "occurrenceAr": "يوجد كمعدن طبيعي وفي خامات مثل البزموتينيت، ويُستخرج كمنتج ثانوي لصقل معادن أخرى.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Bismuth-2.jpg",
    "imageCredit": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/bismuth.php",
    "discoverer": null,
    "discoveryYear": "حوالي 1500",
    "discoveryPlace": null,
    "storyAr": "استُخدم البزموت في سبائك البرونز لدى الإنكا، وتم تمييزه كعنصر منفصل عن الرصاص في القرن الثامن عشر.",
    "nameOriginAr": "مشتق من الكلمة الألمانية 'Bisemutum' التي تحرف 'Weisse Masse' ومعناها الكتلة البيضاء.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/83/bismuth"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/83"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 84,
    "symbol": "Po",
    "nameAr": "بولونيوم",
    "nameEn": "Polonium",
    "mass": "208.98243",
    "group": 16,
    "period": 6,
    "category": "metalloid",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "البولونيوم عنصر نادر جداً وشديد الإشعاع، ويُصنع تجارياً عن طريق قصف البزموت بالنيوترونات.",
    "propertiesAr": [
      "شبه معدن فضي رمادي",
      "مشع"
    ],
    "usesAr": [
      "يستخدم في أجهزة إزالة الكهرباء الساكنة والأغراض البحثية",
      "يُستغل كمصدر للحرارة في معدات الفضاء"
    ],
    "occurrenceAr": "يوجد بكميات ضئيلة جداً في خامات اليورانيوم، ويُنتج صناعياً في روسيا.",
    "imageUrl": "https://images-of-elements.com/polonium.jpg",
    "imageCredit": "Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/polonium.php",
    "discoverer": "Marie Curie",
    "discoveryYear": "1898",
    "discoveryPlace": null,
    "storyAr": "استخلص ماري وبيير كوري البولونيوم من خام اليورانيوم عام 1898، بعد أن توقع مندليف وجود عنصر يتبع البزموت.",
    "nameOriginAr": "سُمي تيمناً ببولندا، الوطن الأم لماري كوري.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/84/polonium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/84"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 85,
    "symbol": "At",
    "nameAr": "أستاتين",
    "nameEn": "Astatine",
    "mass": "209.98715",
    "group": 17,
    "period": 6,
    "category": "halogen",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "الأستاتين عنصر غير مستقر وشديد الإشعاع، ولا يوجد له استخدامات خارج النطاق البحثي.",
    "propertiesAr": [
      "عنصر مشع"
    ],
    "usesAr": [
      "يستخدم فقط في الأبحاث العلمية للتأكد من خصائصه الكيميائية كأحد الهالوجينات."
    ],
    "occurrenceAr": "لا يوجد بكميات قابلة للوزن، ويُنتج في المفاعلات النووية عن طريق قصف البزموت بالنيوترونات.",
    "imageUrl": "https://images-of-elements.com/astatine.jpg",
    "imageCredit": "Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/astatine.php",
    "discoverer": "Dale R. Corson, Kenneth Ross MacKenzie, Emilio Segrè",
    "discoveryYear": "1940",
    "discoveryPlace": null,
    "storyAr": "أُنتج الأستاتين لأول مرة عام 1940 في جامعة كاليفورنيا، لكن تعطلت أبحاثه بسبب متطلبات الحرب العالمية الثانية.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'astatos' التي تعني غير مستقر.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/85/astatine"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/85"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 86,
    "symbol": "Rn",
    "nameAr": "رادون",
    "nameEn": "Radon",
    "mass": "222.01758",
    "group": 18,
    "period": 6,
    "category": "noble-gas",
    "phase": "غاز",
    "radioactive": true,
    "summaryAr": "الرادون غاز خامل كيميائياً ولكنه مشع، ينتج طبيعياً عن تحلل الراديوم الموجود في الصخور.",
    "propertiesAr": [
      "غاز عديم اللون والرائحة"
    ],
    "usesAr": [
      "استُخدم تاريخياً في علاج الأورام السرطانية، بينما تُستخدم الآن طرق أكثر أماناً."
    ],
    "occurrenceAr": "ينتج من تحلل الراديوم-226 الموجود في الصخور، ويوجد بنسب ملموسة في الغلاف الجوي.",
    "imageUrl": "https://images-of-elements.com/radon.jpg",
    "imageCredit": "Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/radon.php",
    "discoverer": "Friedrich Ernst Dorn",
    "discoveryYear": "1900",
    "discoveryPlace": null,
    "storyAr": "اكتشفه فريدريك إرنست دورن عام 1900 كغاز ينبعث من الراديوم، وتوسع ويليام رامزي لاحقاً في دراسة خصائصه.",
    "nameOriginAr": "مشتق من اسم عنصر الراديوم لأنه ينبعث نتيجة تحلله الإشعاعي.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/86/radon"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/86"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 87,
    "symbol": "Fr",
    "nameAr": "فرانسيوم",
    "nameEn": "Francium",
    "mass": "223.01973",
    "group": 1,
    "period": 7,
    "category": "alkali-metal",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "الفرنسيوم معدن شديد الإشعاع ولا توجد له استخدامات بسبب عمر النصف القصير جداً له.",
    "propertiesAr": [
      "معدن مشع بشدة"
    ],
    "usesAr": [
      "لا توجد له استخدامات."
    ],
    "occurrenceAr": "يُحصل عليه صناعياً عن طريق قصف الراديوم أو الثوريوم بالنيوترونات أو البروتونات في المفاعلات النووية.",
    "imageUrl": "https://images-of-elements.com/francium.jpg",
    "imageCredit": "Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/francium.jpg",
    "discoverer": "Marguerite Perey",
    "discoveryYear": "1939",
    "discoveryPlace": null,
    "storyAr": "اكتشفت مارغريت بيري الفرنسيوم عام 1939 في معهد كوري بباريس بعد تنقية عينات الأكتينيوم من الشوائب الإشعاعية.",
    "nameOriginAr": "سُمي تيمناً بفرنسا.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/87/francium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/87"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 88,
    "symbol": "Ra",
    "nameAr": "راديوم",
    "nameEn": "Radium",
    "mass": "226.02541",
    "group": 2,
    "period": 7,
    "category": "alkaline-earth-metal",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "الراديوم معدن مشع جداً ونادر، يُستخلص حالياً من الوقود النووي المستهلك.",
    "propertiesAr": [
      "معدن طري ولامع وفضي"
    ],
    "usesAr": [
      "يستخدم نظير الراديوم-223 في علاج سرطان البروستاتا الذي ينتشر للعظام."
    ],
    "occurrenceAr": "يوجد في خامات اليورانيوم، ويُستخرج اليوم من قضبان الوقود النووي المستهلك.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Radium226.jpg",
    "imageCredit": "grenadier, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons",
    "discoverer": "Pierre and Marie Curie",
    "discoveryYear": "1898",
    "discoveryPlace": null,
    "storyAr": "اكتشفه ماري وبيير كوري عام 1898، وعُرف بوهجه الأزرق في الظلام بسبب الإشعاع المكثف.",
    "nameOriginAr": "مشتق من الكلمة اللاتينية 'radius' التي تعني شعاعاً.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/88/radium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/88"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 89,
    "symbol": "Ac",
    "nameAr": "أكتينيوم",
    "nameEn": "Actinium",
    "mass": "227.02775",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "الأكتينيوم معدن مشع ونادر يتوهج باللون الأزرق في الظلام، ويُستخدم نادراً خارج الأبحاث.",
    "propertiesAr": [
      "معدن طري أبيض فضي",
      "مشع بشدة"
    ],
    "usesAr": [
      "يُستخدم كمصدر قوي لأشعة ألفا في الأبحاث العلمية."
    ],
    "occurrenceAr": "يوجد طبيعياً بنسب ضئيلة في خامات اليورانيوم، ويُنتج للبحث عن طريق قصف الراديوم بالنيوترونات.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/27/Actinium_sample_%2831481701837%29.png",
    "imageCredit": "Oak Ridge National Laboratory, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons, source: https://www.flickr.com/photos/oakridgelab/31481701837/",
    "discoverer": "Andrew Debierne",
    "discoveryYear": "1899",
    "discoveryPlace": null,
    "storyAr": "اكتشفه أندريه ديبيرن عام 1899 في خام البيتشبلند، بينما اكتشفه غيزل بشكل مستقل لاحقاً وأطلق عليه اسم 'إيمانيوم'.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'actinos' التي تعني شعاعاً.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/89/actinium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/89"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 90,
    "symbol": "Th",
    "nameAr": "ثوريوم",
    "nameEn": "Thorium",
    "mass": "232.038",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "الثوريوم معدن فضي مشع ضعيف، ويُعد مصدراً واعداً للطاقة النووية.",
    "propertiesAr": [
      "معدن فضي",
      "مشع ضعيف"
    ],
    "usesAr": [
      "يستخدم كعامل تقوية في سبائك المغنيسيوم وكحفاز صناعي",
      "يُدرس كمصدر للطاقة النووية في مفاعلات خاصة"
    ],
    "occurrenceAr": "يوجد في معادن مثل الثوريت والمونازيت، وهو وفير مثل الرصاص تقريباً.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Thorium-1.jpg",
    "imageCredit": "W. Oelen, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
    "discoverer": "Jöns Jacob Berzelius",
    "discoveryYear": "1829",
    "discoveryPlace": null,
    "storyAr": "اكتشفه بيرزيليوس عام 1829، وتعد نظائره مثل الثوريوم-232 مستقرة نسبياً بسبب عمر النصف الطويل جداً.",
    "nameOriginAr": "سُمي تيمناً بـ 'ثور' إله الحرب الإسكندنافي.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/90/thorium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/90"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 91,
    "symbol": "Pa",
    "nameAr": "بروتاكتينيوم",
    "nameEn": "Protactinium",
    "mass": "231.03588",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "البروتكتينيوم عنصر معدني مشع ونادر.",
    "propertiesAr": [
      "معدن فضي مشع"
    ],
    "usesAr": [
      "يستخدم فقط في الأبحاث العلمية."
    ],
    "occurrenceAr": "يتواجد بكميات ضئيلة في خامات اليورانيوم، ويُستخرج من قضبان الوقود النووي المستهلك.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/af/Protactinium-233.jpg",
    "imageCredit": "ENERGY.GOV, Public domain, via Wikimedia Commons",
    "discoverer": "Kasimir Fajans and Otto Göhring",
    "discoveryYear": "1913",
    "discoveryPlace": null,
    "storyAr": "تم فصل نظير أطول عمراً في عام 1918 بواسطة ليز ميتنر بعد أن أثبت كاسيمير فاجانس وأوتو جورينج وجود العنصر في عام 1913.",
    "nameOriginAr": "مشتق من الكلمة اليونانية 'protos' وتعني الأول، كبادئة لعنصر الأكتينيوم.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/91/protactinium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/91"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 92,
    "symbol": "U",
    "nameAr": "يورانيوم",
    "nameEn": "Uranium",
    "mass": "238.0289",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "اليورانيوم معدن مشع يعد عنصراً حيوياً في مجال الطاقة النووية.",
    "propertiesAr": [
      "معدن فضي مشع"
    ],
    "usesAr": [
      "يستخدم كوقود نووي لتوليد الكهرباء وفي التطبيقات العسكرية."
    ],
    "occurrenceAr": "يتواجد في معادن مثل اليورانينيت والبرانيريت والكارنوتيت، ويُستخرج ويُحول إلى أكسيد نقي.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Ames_Process_uranium_biscuit.jpg",
    "imageCredit": "Unknown authorUnknown author, Public domain, via Wikimedia Commons",
    "discoverer": "Martin Heinrich Klaproth",
    "discoveryYear": "1789",
    "discoveryPlace": null,
    "storyAr": "اكتشف مارتن هاينريش كلابروث هذا العنصر في عام 1789 بعد دراسة معدن البتشبلند.",
    "nameOriginAr": "سُمي تيمناً بكوكب أورانوس.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/92/uranium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/92"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 93,
    "symbol": "Np",
    "nameAr": "نبتونيوم",
    "nameEn": "Neptunium",
    "mass": "237.048172",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "النبتونيوم عنصر معدني مشع يُنتج ثانوياً في المفاعلات النووية.",
    "propertiesAr": [
      "معدن مشع"
    ],
    "usesAr": [
      "يُستخدم في الأبحاث وفي كواشف النيوترونات."
    ],
    "occurrenceAr": "يوجد بكميات ضئيلة في خامات اليورانيوم ويُستخرج من الوقود النووي المستهلك.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Neptunium2.jpg",
    "imageCredit": "Los Alamos National Laboratory,, Public domain, via Wikimedia Commons",
    "discoverer": "Edwin McMillan and Philip Abelson",
    "discoveryYear": "1940",
    "discoveryPlace": null,
    "storyAr": "تم تصنيع النبتونيوم لأول مرة في عام 1940 بواسطة إدوين ماكميلان وفيليب أبيلسون في بيركلي.",
    "nameOriginAr": "سُمي تيمناً بكوكب نبتون.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/93/neptunium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/93"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 94,
    "symbol": "Pu",
    "nameAr": "بلوتونيوم",
    "nameEn": "Plutonium",
    "mass": "244.06420",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "البلوتونيوم معدن مشع له أهمية كبيرة في تطوير الأسلحة النووية والطاقة.",
    "propertiesAr": [
      "معدن فضي مشع"
    ],
    "usesAr": [
      "يستخدم في الأسلحة النووية ومصدر للطاقة في المهمات الفضائية."
    ],
    "occurrenceAr": "يتم الحصول عليه من خلال تشعيع اليورانيوم في المفاعلات النووية.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Plutonium_ring.jpg",
    "imageCredit": "Los Alamos National Laboratory, Attribution, via Wikimedia Commons",
    "discoverer": "Glenn Seaborg and colleagues",
    "discoveryYear": "1940",
    "discoveryPlace": null,
    "storyAr": "صُنع البلوتونيوم لأول مرة في ديسمبر 1940 بواسطة جلين سيبورج وزملاؤه.",
    "nameOriginAr": "سُمي تيمناً بكوكب بلوتو، تكملة لسلسلة اليورانيوم والنبتونيوم.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/94/plutonium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/94"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 95,
    "symbol": "Am",
    "nameAr": "أمريسيوم",
    "nameEn": "Americium",
    "mass": "243.061380",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "الأمريسيوم معدن مشع يُستخدم بشكل أساسي في أجهزة إنذار الحريق.",
    "propertiesAr": [
      "معدن فضي لامع ومشع"
    ],
    "usesAr": [
      "يُستخدم في أجهزة إنذار الدخان وله إمكانية للاستخدام في بطاريات المركبات الفضائية."
    ],
    "occurrenceAr": "يتواجد بكميات ضئيلة في معادن اليورانيوم ويُنتج أساساً من قصف البلوتونيوم بالنيوترونات.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Glenn Seaborg and colleagues",
    "discoveryYear": "1944",
    "discoveryPlace": null,
    "storyAr": "اكتُشف العنصر في أواخر عام 1944 من قبل فريق في جامعة شيكاغو.",
    "nameOriginAr": "سُمي تيمناً بأمريكا حيث تم تصنيعه لأول مرة.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/95/americium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/95"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 96,
    "symbol": "Cm",
    "nameAr": "كوريوم",
    "nameEn": "Curium",
    "mass": "247.07035",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "الكوريوم معدن مشع يُنتج بكميات ضئيلة جداً للأغراض البحثية والفضائية.",
    "propertiesAr": [
      "معدن فضي مشع",
      "يفقد بريقه بسرعة في الهواء"
    ],
    "usesAr": [
      "يستخدم لتزويد المعدات الكهربائية في المهمات الفضائية بالطاقة."
    ],
    "occurrenceAr": "يُنتج بكميات صغيرة جداً عبر قصف البلوتونيوم بالنيوترونات، وقد توجد منه كميات دقيقة في ترسبات اليورانيوم الطبيعية.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Glenn Seaborg and colleagues",
    "discoveryYear": "1944",
    "discoveryPlace": null,
    "storyAr": "صُنع الكوريوم عام 1944 من قبل جلين سيبورج وفريقه وتم الإعلان عنه في عام 1945.",
    "nameOriginAr": "سُمي تكريماً لبيير وماري كوري.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/96/curium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/96"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 97,
    "symbol": "Bk",
    "nameAr": "بركيليوم",
    "nameEn": "Berkelium",
    "mass": "247.07031",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "البركليوم عنصر معدني مشع ونادر جداً.",
    "propertiesAr": [
      "معدن فضي مشع"
    ],
    "usesAr": [
      "لا توجد له استخدامات تجارية أو تقنية حالياً بسبب ندرته."
    ],
    "occurrenceAr": "يُنتج في المفاعلات النووية عبر قصف البلوتونيوم-239 بالنيوترونات بكميات أقل من جرام واحد سنوياً.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Stanley Thompson, Albert Ghiorso, and Glenn Seaborg",
    "discoveryYear": "1949",
    "discoveryPlace": null,
    "storyAr": "تم إنتاجه لأول مرة في ديسمبر 1949 بجامعة كاليفورنيا في بيركلي.",
    "nameOriginAr": "سُمي تيمناً بمدينة بيركلي بولاية كاليفورنيا.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/97/berkelium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/97"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 98,
    "symbol": "Cf",
    "nameAr": "كاليفورنيوم",
    "nameEn": "Californium",
    "mass": "251.07959",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "الكاليفورنيوم معدن مشع وقوي في انبعاث النيوترونات.",
    "propertiesAr": [
      "معدن مشع"
    ],
    "usesAr": [
      "يستخدم في كواشف المعادن المحمولة، تحديد خامات الذهب والفضة، واكتشاف إجهاد المعادن في الطائرات."
    ],
    "occurrenceAr": "يُحضر بكميات مليجرامية فقط من خلال قصف البلوتونيوم-239 بالنيوترونات.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Stanley Thompson, Kenneth Street, Jr., Albert Ghiorso, and Glenn Seaborg",
    "discoveryYear": "1950",
    "discoveryPlace": null,
    "storyAr": "صُنع الكاليفورنيوم عام 1950 في بيركلي على يد فريق بقيادة ستانلي طومسون وآخرين.",
    "nameOriginAr": "سُمي تيمناً بالجامعة والولاية التي تم فيها تصنيع العنصر لأول مرة.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/98/californium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/98"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 99,
    "symbol": "Es",
    "nameAr": "أينشتاينيوم",
    "nameEn": "Einsteinium",
    "mass": "252.0830",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "الأينشتاينيوم معدن مشع يُنتج بكميات ضئيلة جداً.",
    "propertiesAr": [
      "معدن مشع"
    ],
    "usesAr": [
      "لا توجد له استخدامات خارج نطاق الأبحاث."
    ],
    "occurrenceAr": "يمكن الحصول عليه بكميات مليجرامية من قصف البلوتونيوم بالنيوترونات في المفاعلات النووية.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Albert Ghiorso and colleagues",
    "discoveryYear": "1952",
    "discoveryPlace": null,
    "storyAr": "اكتُشف في حطام أول انفجار نووي حراري عام 1952 ولم يُكشف عنه حتى عام 1955.",
    "nameOriginAr": "سُمي تيمناً بالفيزيائي الشهير ألبرت أينشتاين.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/99/einsteinium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/99"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 100,
    "symbol": "Fm",
    "nameAr": "فيرميوم",
    "nameEn": "Fermium",
    "mass": "257.09511",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "الفيرميوم معدن مشع يتم الحصول عليه بكميات ميكروجرامية.",
    "propertiesAr": [
      "معدن مشع"
    ],
    "usesAr": [
      "لا توجد له استخدامات خارج نطاق الأبحاث."
    ],
    "occurrenceAr": "يمكن الحصول عليه بكميات ميكروجرامية من خلال قصف البلوتونيوم بالنيوترونات في المفاعلات النووية.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Albert Ghiorso and colleagues",
    "discoveryYear": "1953",
    "discoveryPlace": null,
    "storyAr": "اكتُشف عام 1953 في حطام أول انفجار نووي حراري حدث في نوفمبر 1952.",
    "nameOriginAr": "سُمي تيمناً بالفيزيائي النووي إنريكو فيرمي.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/100/fermium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/100"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 101,
    "symbol": "Md",
    "nameAr": "مندليفيوم",
    "nameEn": "Mendelevium",
    "mass": "258.09843",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "مندليفيوم هو معدن مشع تم تصنيعه بكميات قليلة جداً.",
    "propertiesAr": [
      "معدن مشع"
    ],
    "usesAr": [
      "يستخدم في الأبحاث فقط."
    ],
    "occurrenceAr": "لا يوجد بشكل طبيعي ويتم تصنيعه بقذف أينشتاينيوم بجسيمات ألفا.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Albert Ghiorso and colleagues",
    "discoveryYear": "1955",
    "discoveryPlace": null,
    "storyAr": "تم تصنيع سبع عشرة ذرة من مندليفيوم عام 1955 بواسطة ألبرت غيورسو وزملائه في مختبر بيركلي.",
    "nameOriginAr": "سمي تيمناً بديميتري مندليف الذي وضع أحد الجداول الدورية الأولى.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/101/mendelevium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/101"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 102,
    "symbol": "No",
    "nameAr": "نوبليوم",
    "nameEn": "Nobelium",
    "mass": "259.10100",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "نوبليوم هو معدن مشع تم تصنيع عدد قليل من ذراته فقط.",
    "propertiesAr": [
      "معدن مشع"
    ],
    "usesAr": [
      "لا توجد له استخدامات خارج نطاق الأبحاث."
    ],
    "occurrenceAr": "يتم إنتاجه عن طريق قذف الكوريوم بالكربون في جهاز السيكلوترون.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Georgy Flerov and colleagues and at Dubna, near Moscow, Russia, and independently by Albert Ghiorso and colleagues at Berkeley, California, USA",
    "discoveryYear": "1963",
    "discoveryPlace": null,
    "storyAr": "شهد اكتشاف هذا العنصر جدلاً طويلاً بين علماء روسيا والولايات المتحدة قبل أن يقر الاتحاد الدولي للكيمياء بأحقية الروس في الاكتشاف.",
    "nameOriginAr": "سمي تيمناً بألفرد نوبل مؤسس جائزة نوبل.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/102/nobelium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/102"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 103,
    "symbol": "Lr",
    "nameAr": "لورنسيوم",
    "nameEn": "Lawrencium",
    "mass": "266.120",
    "group": 3,
    "period": 7,
    "category": "actinide",
    "phase": "صلب",
    "radioactive": true,
    "summaryAr": "لورنسيوم هو معدن مشع تم إنتاج عدد قليل من ذراته.",
    "propertiesAr": [
      "معدن مشع"
    ],
    "usesAr": [
      "لا توجد له استخدامات خارج نطاق الأبحاث."
    ],
    "occurrenceAr": "لا يوجد بشكل طبيعي ويتم إنتاجه بقذف الكاليفورنيوم بالبورون.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Georgy Flerov and colleagues and at Dubna, near Moscow, Russia, and independently by Albert Ghiorso and colleagues at Berkeley, California, USA",
    "discoveryYear": "1965",
    "discoveryPlace": null,
    "storyAr": "تم منح أولوية الاكتشاف لمختبر لورنس بيركلي بعد تاريخ حافل بالجدل والتجارب المتضاربة.",
    "nameOriginAr": "سمي تيمناً بإرنست لورنس مخترع السيكلوترون.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/103/lawrencium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/103"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 104,
    "symbol": "Rf",
    "nameAr": "رذرفورديوم",
    "nameEn": "Rutherfordium",
    "mass": "267.122",
    "group": 4,
    "period": 7,
    "category": "transition-metal",
    "phase": "متوقع أن يكون صلبًا",
    "radioactive": true,
    "summaryAr": "رذرفورديوم عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حالياً في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Georgy Flerov and colleagues and at Dubna, near Moscow, Russia, and independently by Albert Ghiorso and colleagues at Berkeley, California, USA",
    "discoveryYear": "1964",
    "discoveryPlace": null,
    "storyAr": "خلص الاتحاد الدولي للكيمياء في عام 1992 إلى أن كلاً من الباحثين الروس والأمريكيين كانوا محقين في مطالبهم بالاكتشاف.",
    "nameOriginAr": "سمي تكريماً للكيميائي إرنست رذرفورد الذي شرح بنية الذرة.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/104/rutherfordium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/104"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 105,
    "symbol": "Db",
    "nameAr": "دوبنيوم",
    "nameEn": "Dubnium",
    "mass": "268.126",
    "group": 5,
    "period": 7,
    "category": "transition-metal",
    "phase": "متوقع أن يكون صلبًا",
    "radioactive": true,
    "summaryAr": "دوبنيوم عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حالياً في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Scientists at both Berkeley, California, USA, and Dubna, near Moscow, Russia",
    "discoveryYear": "1968-1970",
    "discoveryPlace": null,
    "storyAr": "نشأ نزاع بين العلماء الروس والأمريكيين حول التسمية قبل أن يقرر الاتحاد الدولي للكيمياء تسميته دوبنيوم.",
    "nameOriginAr": "سمي تيمناً بمدينة دوبنا الروسية.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/105/dubnium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/105"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 106,
    "symbol": "Sg",
    "nameAr": "سيبورغيوم",
    "nameEn": "Seaborgium",
    "mass": "269.128",
    "group": 6,
    "period": 7,
    "category": "transition-metal",
    "phase": "متوقع أن يكون صلبًا",
    "radioactive": true,
    "summaryAr": "سيبورغيوم عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حالياً في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Albert Ghiorso and colleagues",
    "discoveryYear": "1974",
    "discoveryPlace": null,
    "storyAr": "تم إنتاج ذرات السيبورجيوم عن طريق قذف الكاليفورنيوم بالأكسجين، وهي عملية تنتج ذرة واحدة كل ساعة.",
    "nameOriginAr": "سمي تيمناً بجلين سيبورغ الذي كان له دور فعال في إنتاج عدة عناصر ما بعد اليورانيوم.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/106/seaborgium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/106"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 107,
    "symbol": "Bh",
    "nameAr": "بوهريوم",
    "nameEn": "Bohrium",
    "mass": "270.133",
    "group": 7,
    "period": 7,
    "category": "transition-metal",
    "phase": "متوقع أن يكون صلبًا",
    "radioactive": true,
    "summaryAr": "بوهريوم عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حالياً في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Peter Armbruster, Gottfried Münzenberg and colleagues",
    "discoveryYear": "1981",
    "discoveryPlace": null,
    "storyAr": "منح الاتحاد الدولي للكيمياء حق الاكتشاف لمعهد أبحاث ألماني رغم ترجيح أسبقية المعهد الروسي في تصنيعه.",
    "nameOriginAr": "سمي تيمناً بالفيزيائي الذري الدنماركي نيلز بور.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/107/bohrium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/107"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 108,
    "symbol": "Hs",
    "nameAr": "هاسيوم",
    "nameEn": "Hassium",
    "mass": "269.1336",
    "group": 8,
    "period": 7,
    "category": "transition-metal",
    "phase": "متوقع أن يكون صلبًا",
    "radioactive": true,
    "summaryAr": "هاسيوم عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حالياً في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Peter Armbruster, Gottfried Münzenberg",
    "discoveryYear": "1984",
    "discoveryPlace": null,
    "storyAr": "تمكن فريق ألماني من تصنيع النظير 265 مما منحهم حق تسمية العنصر بناءً على ولاية هيسن.",
    "nameOriginAr": "مشتق من ولاية هيسن الألمانية حيث تم إنتاجه لأول مرة.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/108/hassium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/108"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 109,
    "symbol": "Mt",
    "nameAr": "مايتنيريوم",
    "nameEn": "Meitnerium",
    "mass": "277.154",
    "group": 9,
    "period": 7,
    "category": "transition-metal",
    "phase": "متوقع أن يكون صلبًا",
    "radioactive": true,
    "summaryAr": "مايتنيريوم عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حالياً في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Peter Armbruster, Gottfried Münzenberg and colleagues",
    "discoveryYear": "1982",
    "discoveryPlace": null,
    "storyAr": "تم إنتاجه لأول مرة عام 1982 في منشأة أبحاث ألمانية حيث تم اكتشاف ذرة واحدة بعد أسبوع من القذف.",
    "nameOriginAr": "سمي تيمناً بالفيزيائية النمساوية ليز مايتنر.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/109/meitnerium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/109"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 110,
    "symbol": "Ds",
    "nameAr": "دارمشتاتيوم",
    "nameEn": "Darmstadtium",
    "mass": "282.166",
    "group": 10,
    "period": 7,
    "category": "transition-metal",
    "phase": "متوقع أن يكون صلبًا",
    "radioactive": true,
    "summaryAr": "دارمشتاتيوم عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حالياً في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Sigurd Hofmann, Peter Armbruster and Gottfried Münzenberg",
    "discoveryYear": "1994",
    "discoveryPlace": null,
    "storyAr": "بعد عدة محاولات فاشلة، تمكن فريق ألماني من تصنيع النظير 269 مما منحهم حق تسمية العنصر.",
    "nameOriginAr": "سمي تيمناً بمدينة دارمشتات الألمانية حيث تم إنتاجه لأول مرة.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/110/darmstadtium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/110"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 111,
    "symbol": "Rg",
    "nameAr": "رونتجينيوم",
    "nameEn": "Roentgenium",
    "mass": "282.169",
    "group": 11,
    "period": 7,
    "category": "transition-metal",
    "phase": "متوقع أن يكون صلبًا",
    "radioactive": true,
    "summaryAr": "رونتجينيوم عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حاليًا في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Peter Armbruster and Gottfried Münzenberg",
    "discoveryYear": "1994",
    "discoveryPlace": null,
    "storyAr": "نجح فريق ألماني بقيادة بيتر أرمبروستر وجوتفريد مونزينبرج في تصنيع العنصر عام 1994 بعد محاولة سابقة فاشلة عام 1986.",
    "nameOriginAr": "سُمي تكريمًا للفيزيائي الألماني فيلهلم كونراد رونتجن.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/111/roentgenium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/111"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 112,
    "symbol": "Cn",
    "nameAr": "كوبرنيسيوم",
    "nameEn": "Copernicium",
    "mass": "286.179",
    "group": 12,
    "period": 7,
    "category": "transition-metal",
    "phase": "متوقع أن يكون صلبًا",
    "radioactive": true,
    "summaryAr": "كوبرنيسيوم عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حاليًا في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Sigurd Hofmann and colleagues",
    "discoveryYear": "1996",
    "discoveryPlace": null,
    "storyAr": "أعلن سيجورد هوفمان وفريقه عن إنتاج أول ذرات للعنصر عام 1996 في ألمانيا.",
    "nameOriginAr": "سُمي تيمناً بالعالم نيكولاس كوبرنيكوس.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/112/copernicium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/112"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 113,
    "symbol": "Nh",
    "nameAr": "نيهونيوم",
    "nameEn": "Nihonium",
    "mass": "286.182",
    "group": 13,
    "period": 7,
    "category": "post-transition-metal",
    "phase": "متوقع أن يكون صلبًا",
    "radioactive": true,
    "summaryAr": "نيهونيوم عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حاليًا في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Scientists from RIKEN (The Institute of Physical and Chemical Research) in Japan",
    "discoveryYear": "2004",
    "discoveryPlace": null,
    "storyAr": "أكد الاتحاد الدولي للكيمياء البحتة والتطبيقية (IUPAC) اكتشافه من قبل علماء في معهد ريكن باليابان في عام 2015.",
    "nameOriginAr": "الاسم يشير إلى التسمية اليابانية لدولة اليابان.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/113/nihonium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/113"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 114,
    "symbol": "Fl",
    "nameAr": "فليروفيوم",
    "nameEn": "Flerovium",
    "mass": "290.192",
    "group": 14,
    "period": 7,
    "category": "post-transition-metal",
    "phase": "متوقع أن يكون صلبًا",
    "radioactive": true,
    "summaryAr": "فليروفيوم عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حاليًا في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Scientists from the Joint Institute for Nuclear Research in Dubna, Russia and the Lawrence Livermore National Laboratory, California, USA.",
    "discoveryYear": "1999",
    "discoveryPlace": null,
    "storyAr": "نجح فريق روسي بقيادة يوري اوجانيسيان وفلاديمير يوتيونكوف في إنتاج العنصر عام 1998 عبر قذف البلوتونيوم بالكالسيوم.",
    "nameOriginAr": "سُمي نسبة إلى الفيزيائي الروسي جيورجي فليروف مؤسس معهد البحوث النووية.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/114/flerovium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/114"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 115,
    "symbol": "Mc",
    "nameAr": "موسكوفيوم",
    "nameEn": "Moscovium",
    "mass": "290.196",
    "group": 15,
    "period": 7,
    "category": "post-transition-metal",
    "phase": "متوقع أن يكون صلبًا",
    "radioactive": true,
    "summaryAr": "موسكوفيوم عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حاليًا في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Scientists from the Joint Institute for Nuclear Research in Dubna, Russia, the Lawrence Livermore National Laboratory in California, USA, and Oak Ridge National Laboratory in Tennessee, USA",
    "discoveryYear": "2010",
    "discoveryPlace": null,
    "storyAr": "أكد الاتحاد الدولي للكيمياء البحتة والتطبيقية (IUPAC) اكتشافه في عام 2015 من قبل علماء في روسيا والولايات المتحدة.",
    "nameOriginAr": "الاسم يشير إلى منطقة موسكو حيث يقع معهد البحوث النووية.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/115/moscovium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/115"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 116,
    "symbol": "Lv",
    "nameAr": "ليفرموريوم",
    "nameEn": "Livermorium",
    "mass": "293.205",
    "group": 16,
    "period": 7,
    "category": "post-transition-metal",
    "phase": "متوقع أن يكون صلبًا",
    "radioactive": true,
    "summaryAr": "ليفرموريوم عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حاليًا في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Scientists from the Joint Institute for Nuclear Research in Dubna, Russia and the Lawrence Livermore National Laboratory, California, USA.",
    "discoveryYear": "2000",
    "discoveryPlace": null,
    "storyAr": "تمت ملاحظة العنصر لأول مرة عام 2000 من قبل باحثين في معهد البحوث النووية الروسي بعد محاولات سابقة فاشلة.",
    "nameOriginAr": "سُمي نسبة إلى مختبر لورانس ليفرمور الوطني.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/116/livermorium"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/116"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 117,
    "symbol": "Ts",
    "nameAr": "تينيسين",
    "nameEn": "Tennessine",
    "mass": "294.211",
    "group": 17,
    "period": 7,
    "category": "halogen",
    "phase": "متوقع أن يكون صلبًا",
    "radioactive": true,
    "summaryAr": "تينيسين عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حاليًا في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Scientists from the Joint Institute for Nuclear Research in Dubna, Russia, the Lawrence Livermore National Laboratory in California, USA, and Oak Ridge National Laboratory in Tennessee, USA",
    "discoveryYear": "2010",
    "discoveryPlace": null,
    "storyAr": "أكد الاتحاد الدولي للكيمياء البحتة والتطبيقية (IUPAC) اكتشافه من قبل علماء من روسيا والولايات المتحدة في عام 2015.",
    "nameOriginAr": "الاسم يشير إلى ولاية تينيسي الأمريكية.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/117/tennessine"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/117"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  },
  {
    "number": 118,
    "symbol": "Og",
    "nameAr": "أوغانيسون",
    "nameEn": "Oganesson",
    "mass": "295.216",
    "group": 18,
    "period": 7,
    "category": "noble-gas",
    "phase": "متوقع أن يكون غازًا",
    "radioactive": true,
    "summaryAr": "أوغانيسون عنصر فائق الثقل مُصنّع ومشع؛ أُنتجت منه ذرات قليلة، لذلك تُستنتج معظم خواصه ولا تُقاس على عينة عيانية.",
    "propertiesAr": [
      "عنصر مُصنّع ومشع.",
      "لا تتوفر منه عينة عيانية؛ خواصه الكيميائية مستنتجة نظريًا."
    ],
    "usesAr": [
      "يستخدم حاليًا في الأبحاث فقط."
    ],
    "occurrenceAr": "لا توجد منه كمية طبيعية قابلة للرصد؛ يُنتَج في المختبر على هيئة ذرات قليلة.",
    "imageUrl": null,
    "imageCredit": "لا تتوفر صورة موثوقة لعينة فعلية؛ يرجى الرجوع إلى المصادر العلمية المرتبطة.",
    "discoverer": "Scientists from the Joint Institute for Nuclear Research in Dubna, Russia, and the Lawrence Livermore National Laboratory in California, USA",
    "discoveryYear": "2006",
    "discoveryPlace": null,
    "storyAr": "أكد الاتحاد الدولي للكيمياء البحتة والتطبيقية (IUPAC) اكتشافه في عام 2015 بواسطة علماء من روسيا والولايات المتحدة.",
    "nameOriginAr": "سُمي تكريماً للفيزيائي النووي الروسي يوري اوجانيسيان لمساهماته في أبحاث العناصر الثقيلة.",
    "halfLife": null,
    "radiationType": "يختلف باختلاف النظير؛ لا يوجد نوع إشعاع واحد ينطبق على العنصر كله.",
    "sources": [
      {
        "label": "الجمعية الملكية للكيمياء (RSC)",
        "url": "https://periodic-table.rsc.org/element/118/oganesson"
      },
      {
        "label": "PubChem — مرجع العنصر",
        "url": "https://pubchem.ncbi.nlm.nih.gov/element/118"
      },
      {
        "label": "IUPAC — الجدول الدوري",
        "url": "https://iupac.org/what-we-do/periodic-table-of-elements/"
      }
    ]
  }
];

export const elements: ElementRecord[] = elementSource.map((element) => {
  const atomicData = atomicModelData[element.number];
  if (!atomicData) throw new Error(`Missing atomic model data for element ${element.number}`);
  return { ...element, ...atomicData };
});
