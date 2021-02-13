export const MainCategories = [
  { id: 'acces', name: 'Accessories' },
  { id: 'cloth', name: 'Clothing' },
  { id: 'stat', name: 'Stationery' },
  { id: 'dn', name: 'Daily Necessities' },
  { id: 'hr', name: 'Handbag/ Rucksack' },
  { id: 'sc', name: 'Skin Care' },
  { id: 'le', name: 'Leisure Experience' },
];
export const SendToOptions = (lang = 'en') => [
  { id: 'followers', name: lang == 'en' ? 'All Followers' : '所有粉絲' },
  {
    id: 'purchasers',
    name: lang == 'en' ? 'Who made purchases with me' : '曾向我下單的客⼾',
  },
  { id: 'both', name: lang == 'en' ? 'Both' : '兩類群組' },
];

export const SubCategories = {
  acces: [
    { id: 'acces-w', name: 'Womens Accessories' },
    { id: 'acces-m', name: 'Mens Accessories' },
    { id: 'acces-ca', name: 'Couple Accessories' },
    { id: 'acces-mem', name: 'Masks/ Eye Masks' },
  ],
  cloth: [
    { id: 'cloth-w', name: 'Womenswear' },
    { id: 'cloth-m', name: 'Menswear' },
    { id: 'cloth-cc', name: 'Couple Clothing' },
  ],
  stat: [
    { id: 'stat-pp', name: 'Paper Products' },
    { id: 'stat-s', name: 'Stationery' },
  ],
  dn: [
    { id: 'dn-hd', name: 'Home Decoration' },
    { id: 'dn-ku', name: 'Kitchen Utensils' },
    { id: 'dn-f', name: 'Food' },
    { id: 'dn-o', name: 'Others' },
  ],
  hr: [
    { id: 'hr-l', name: 'Ladies' },
    { id: 'hr-m', name: 'Men’s' },
    { id: 'hr-o', name: 'Others' },
  ],
  sc: [
    { id: 'sc-w', name: 'Womens' },
    { id: 'sc-m', name: 'Mens' },
  ],
  le: [
    { id: 'le-h', name: 'Handicraft' },
    { id: 'le-o', name: 'Others' },
  ],
};

export const ExtendedCategories = {
  'acces-w': [
    { id: 'acces-w-j', name: 'Jewellery' },
    { id: 'acces-w-ha', name: 'Hair Accessories' },
    { id: 'acces-w-ss', name: 'Scraves/ Shawl' },
    { id: 'acces-w-w', name: 'Watches' },
    { id: 'acces-w-g', name: 'Glasses' },
    { id: 'acces-w-o', name: 'Other' },
  ],
  'acces-m': [
    { id: 'acces-m-t', name: 'Ties' },
    { id: 'acces-m-w', name: 'Watches' },
    { id: 'acces-m-g', name: 'Glasses' },
    { id: 'acces-m-b', name: 'Belts' },
    { id: 'acces-m-h', name: 'Hats' },
    { id: 'acces-m-j', name: 'Jewellery' },
    { id: 'acces-m-ss', name: 'Scraves/ Shawl' },
    { id: 'acces-m-o', name: 'Other' },
  ],
  'acces-ca': [],
  'acces-mem': [
    { id: 'acces-mem-m', name: 'Masks' },
    { id: 'acces-mem-em', name: 'Eye Masks' },
  ],
  'cloth-w': [
    { id: 'cloth-w-b', name: 'Blouse' },
    { id: 'cloth-w-s', name: 'Skirts' },
    { id: 'cloth-w-t', name: 'Trousers' },
    { id: 'cloth-w-k', name: 'Knitwear' },
    { id: 'cloth-w-j', name: 'Jacket' },
    { id: 'cloth-w-l', name: 'Lingerie' },
    { id: 'cloth-w-h', name: 'Homewear' },
    { id: 'cloth-w-sptw', name: 'Sportwear' },
    { id: 'cloth-w-swimw', name: 'Swimwear' },
    { id: 'cloth-w-socks', name: 'Socks' },
    { id: 'cloth-w-shoes', name: 'Shoes' },
    { id: 'cloth-w-o', name: 'Other' },
  ],
  'cloth-m': [
    { id: 'cloth-m-b', name: 'Blouse' },
    { id: 'cloth-m-t', name: 'Trousers' },
    { id: 'cloth-m-k', name: 'Knitwear' },
    { id: 'cloth-m-j', name: 'Jacket' },
    { id: 'cloth-m-u', name: 'Underwear' },
    { id: 'cloth-m-h', name: 'Homewear' },
    { id: 'cloth-m-sptw', name: 'Sportwear' },
    { id: 'cloth-m-swimw', name: 'Swimwear' },
    { id: 'cloth-m-socks', name: 'Socks' },
    { id: 'cloth-m-shoes', name: 'Shoes' },
    { id: 'cloth-m-o', name: 'Other' },
  ],
  'cloth-cc': [],
  'stat-pp': [
    { id: 'stat-pp-pc', name: 'Post Cards' },
    { id: 'stat-pp-s', name: 'Stickers' },
    { id: 'stat-pp-t', name: 'Tapes' },
    { id: 'stat-pp-pstg', name: 'Postage' },
    { id: 'stat-pp-ewp', name: 'Envelopes/ Writing Papers' },
    { id: 'stat-pp-rprb', name: 'Red Pockets/ Red Banners' },
    { id: 'stat-pp-pbpb', name: 'Paper Boxes/ Package Boxes' },
    { id: 'stat-pp-nb', name: 'Notebooks' },
    { id: 'stat-pp-a', name: 'Albums' },
    { id: 'stat-pp-clndr', name: 'Calenders' },
    { id: 'stat-pp-o', name: 'Other' },
  ],
  'stat-s': [
    { id: 'stat-s-pens', name: 'Pens' },
    { id: 'stat-s-pspb', name: 'Pen Cases/ Pen Bags' },
    { id: 'stat-s-pspv', name: 'Pen Stands/ Pen Vases' },
    { id: 'stat-s-f', name: 'Folders' },
    { id: 'stat-s-ssp', name: 'Stamps/ Stamp Pads' },
    { id: 'stat-s-bm', name: 'Bookmarks' },
    { id: 'stat-s-sc', name: 'Slipcases' },
    { id: 'stat-s-o', name: 'Other' },
  ],
  'dn-hd': [
    { id: 'dn-hd-fd', name: 'Furnish and Decorate' },
    { id: 'dn-hd-cs', name: 'Candles/ scents' },
    { id: 'dn-hd-ppp', name: 'Plants/ Potted Plants' },
    { id: 'dn-hd-vc', name: 'Vases/ China' },
    { id: 'dn-hd-pstpaint', name: 'Posters/ Paintings' },
    { id: 'dn-hd-pc', name: 'Portrait Customisation' },
    { id: 'dn-hd-wsw', name: 'Wall Stickers/ Wallpapers' },
    { id: 'dn-hd-pfpf', name: 'Painting Frames/ Photo Frames' },
    { id: 'dn-hd-df', name: 'Dolls/ Figures' },
    { id: 'dn-hd-ss', name: 'Storage Sets' },
    { id: 'dn-hd-fb', name: 'Furniture/ Beddings' },
    { id: 'dn-hd-o', name: 'Other' },
  ],
  'dn-ku': [
    { id: 'dn-ku-cups', name: 'Cups' },
    { id: 'dn-ku-cutlr', name: 'Cutleries' },
    { id: 'dn-ku-kw', name: 'Kitchenware' },
    { id: 'dn-ku-o', name: 'Other' },
  ],
  'dn-f': [
    { id: 'dn-f-bvg', name: 'Beverage' },
    { id: 'dn-f-bkrs', name: 'Bakeries' },
    { id: 'dn-f-sncks', name: 'Snacks' },
    { id: 'dn-f-s', name: 'Seasonings' },
    { id: 'dn-f-o', name: 'Other' },
  ],
  'dn-o': [
    { id: 'dn-o-ps', name: 'Pet Supplies' },
    { id: 'dn-o-seg', name: 'Sport Equipment/ Gear' },
    { id: 'dn-o-tch', name: 'Technology' },
    { id: 'dn-o-dm', name: 'DIY Materials' },
  ],
  'hr-l': [
    { id: 'hr-l-clutch', name: 'Clutches' },
    { id: 'hr-l-cbb', name: 'Crossbody Bags' },
    { id: 'hr-l-sb', name: 'Shoulder Bags' },
    { id: 'hr-l-csmb', name: 'Cosmetic Bag' },
    { id: 'hr-l-w', name: 'Wallet' },
    { id: 'hr-l-rs', name: 'Rucksacks' },
    { id: 'hr-l-o', name: 'Other' },
  ],
  'hr-m': [
    { id: 'hr-m-sb', name: 'Shoulder Bags' },
    { id: 'hr-m-mssb', name: 'Messenger Bags' },
    { id: 'hr-m-rs', name: 'Rucksacks' },
    { id: 'hr-m-bc', name: 'Briefcases' },
    { id: 'hr-m-w', name: 'Wallet' },
    { id: 'hr-m-o', name: 'Other' },
  ],
  'hr-o': [
    { id: 'hr-o-lp', name: 'Laptop Pouch' },
    { id: 'hr-o-tbsc', name: 'Travel Bags/ Suitcases' },
    { id: 'hr-o-gb', name: 'Gadget Bags' },
    { id: 'hr-o-o', name: 'Other' },
  ],
  'sc-w': [
    { id: 'sc-w-cp', name: 'Cosmetic Products' },
    { id: 'sc-w-sp', name: 'Skincare Products' },
    { id: 'sc-w-bp', name: 'Body Products' },
    { id: 'sc-w-hp', name: 'Hair Products' },
    { id: 'sc-w-bt', name: 'Beauty Tools' },
    { id: 'sc-w-np', name: 'Nail Products' },
    { id: 'sc-w-f', name: 'Fragrance' },
    { id: 'sc-w-o', name: 'Other' },
  ],
  'sc-m': [
    { id: 'sc-m-bp', name: 'Body Products' },
    { id: 'sc-m-sp', name: 'Skincare Products' },
    { id: 'sc-m-hp', name: 'Hair Products' },
    { id: 'sc-m-f', name: 'Fragrance' },
    { id: 'sc-m-bp', name: 'Beard Products' },
    { id: 'sc-m-o', name: 'Other' },
  ],
  'le-h': [
    { id: 'le-h-acces', name: 'Accessories' },
    { id: 'le-h-ca', name: 'Candles/ Aromatherapy' },
    { id: 'le-h-plant', name: 'Planting' },
    { id: 'le-h-g', name: 'Gourmet' },
    { id: 'le-h-ipc', name: 'Illustration/ Painting/ Calligraphy' },
    { id: 'le-h-lc', name: 'Leathercrafting' },
    { id: 'le-h-cp', name: 'Carpentry' },
    { id: 'le-h-pottery', name: 'Pottery' },
    { id: 'le-h-knit', name: 'Knitting' },
    { id: 'le-h-o', name: 'Other' },
  ],
  'le-o': [
    { id: 'le-o-oa', name: 'Outdoor Activities' },
    { id: 'le-o-ia', name: 'Indoor Activities' },
    { id: 'le-o-cs', name: 'Casual Seminar' },
    { id: 'le-o-o', name: 'Other' },
  ],
};

export const LabelOptions = (lang) => [
  { id: 'gifts', text: lang === 'en' ? 'Gifts' : '禮物' },
  {
    id: 'recommendedgifts',
    text: lang === 'en' ? 'Recommended Gifts' : '推薦禮物',
  },
  { id: 'customgifts', text: lang === 'en' ? 'Custom Gifts' : '訂做禮物' },
  { id: 'diygifts', text: lang === 'en' ? 'DIY Gifts' : 'DIY禮物' },
  {
    id: 'birthdaygifts',
    text: lang === 'en' ? 'Birthday Presents' : '生日禮物',
  },
  {
    id: 'valentinesgifts',
    text: lang === 'en' ? 'Valentines Gifts' : '情人節禮物',
  },
  { id: 'couplegifts', text: lang === 'en' ? 'Couples Gifts' : '情侶禮物' },
  {
    id: 'anniversarygifts',
    text: lang === 'en' ? 'Anniversary Gifts' : '紀念禮物',
  },
  {
    id: 'mothersdaygifts',
    text: lang === 'en' ? 'Mother’s Day Gifts' : '母親節禮物',
  },
  {
    id: 'fathersdaygifts',
    text: lang === 'en' ? 'Father’s Day Gifts' : '父親節禮物',
  },
  {
    id: 'girlfriendgifts',
    text: lang === 'en' ? 'Girlfriend Gifts' : '女朋友禮物',
  },
  {
    id: 'boyfriendgifts',
    text: lang === 'en' ? 'Boyfriend Gifts' : '男朋友禮物',
  },
  { id: 'giftsexchange', text: lang === 'en' ? 'Gifts Exchange' : '交換禮物' },
  {
    id: 'graduationgifts',
    text: lang === 'en' ? 'Graduation Gifts' : '畢業禮物',
  },
  { id: 'weddinggifts', text: lang === 'en' ? 'Wedding Gifts' : '結婚禮物' },
  { id: 'bridalgifts', text: lang === 'en' ? 'Bridal Gifts' : '姊妹禮物' },
  {
    id: 'christmasgifts',
    text: lang === 'en' ? 'Christmas Gifts' : '聖誕禮物',
  },
  {
    id: 'heartfeltgifts',
    text: lang === 'en' ? 'Heartfelt Gifts' : '心意禮物',
  },
  { id: 'bestiegifts', text: lang === 'en' ? 'Bestie Gifts' : '閨蜜禮物' },
  { id: 'coupleoutfits', text: lang === 'en' ? 'Couple Outfits' : '情侶裝' },
  {
    id: 'parentchildoutfit',
    text: lang === 'en' ? 'Parent Child Outfit' : '親子裝',
  },
  { id: 'hipsterlook', text: lang === 'en' ? 'Hipster Look' : '文青' },
  { id: 'trending', text: lang === 'en' ? 'Trending' : '流行' },
  { id: 'minimalstyle', text: lang === 'en' ? 'Minimal Style' : '簡約' },
  { id: 'kawai', text: lang === 'en' ? 'Kawai' : '可愛' },
  { id: 'soothing', text: lang === 'en' ? 'Soothing' : '治癒' },
  { id: 'romantic', text: lang === 'en' ? 'Romantic' : '浪漫' },
  { id: 'vintage', text: lang === 'en' ? 'Vintage' : '復古' },
  { id: 'stylish', text: lang === 'en' ? 'Stylish' : '型格' },
  { id: 'animals', text: lang === 'en' ? 'Animals' : '動物' },
  { id: 'forestry', text: lang === 'en' ? 'Forestry' : '森林林系' },
  { id: 'japanese', text: lang === 'en' ? 'Japanese' : '日系' },
  { id: 'finesilver', text: lang === 'en' ? 'Fine Silver' : '純銀' },
  { id: 'rosegold', text: lang === 'en' ? 'Rosegold' : '玫瑰金' },
  { id: 'dyedwhite', text: lang === 'en' ? 'Dyed white' : '顯白' },
  { id: 'slimcut', text: lang === 'en' ? 'Slim Cut' : '顯瘦' },
  { id: 'handmadegoods', text: lang === 'en' ? 'Handmade goods' : '手作小物' },
  { id: 'handicrafts', text: lang === 'en' ? 'Handicrafts' : '手工製作' },
  { id: 'handpainted', text: lang === 'en' ? 'Hand Painted' : '手繪' },
  {
    id: 'environmentalfriendly',
    text: lang === 'en' ? 'Environmental Friendly' : '環保',
  },
  { id: 'workshop', text: lang === 'en' ? 'Workshop' : '工作坊' },
  {
    id: 'extracurricularactivities',
    text: lang === 'en' ? 'Extracurricular Activities' : '興趣班',
  },
  { id: 'weekendspots', text: lang === 'en' ? 'Weekend Spots' : '週末好去處' },
  {
    id: 'parentchildspots',
    text: lang === 'en' ? 'Parent Child Spots' : '親子好去處',
  },
  { id: 'couplespots', text: lang === 'en' ? 'Couples Spots' : '情侶好去處' },
  { id: 'datingspots', text: lang === 'en' ? 'Dating Spots' : '拍拖好去處' },
  {
    id: 'weekendmarkets',
    text: lang === 'en' ? 'Weekend Markets' : '週末市集',
  },
  {
    id: 'hongkongdesigns',
    text: lang === 'en' ? 'Hong Kong Designs' : '香港設計',
  },
  {
    id: 'hongkongbrands',
    text: lang === 'en' ? 'Hong Kong Brands' : '香港品牌',
  },
  {
    id: 'originaldesign',
    text: lang === 'en' ? 'Original Design' : '原創設計',
  },
];

export const PaymentOptions = [
  { id: 'credit_card', text: 'Credit Card' },
  { id: 'debit_card', text: 'Debit Card' },
  { id: 'alipay', text: 'Alipay' },
  { id: 'wechat_pay', text: 'WeChat Pay' },
  { id: 'apple_pay', text: 'Apple Pay' },
  { id: 'andriod_pay', text: 'Android Pay' },
  { id: 'google_pay', text: 'Google Pay' },
];

export const ColorOptions = (lang) => [
  { id: 'red', text: lang === 'en' ? 'Red' : '紅' },
  { id: 'orange', text: lang === 'en' ? 'Orange' : '橙' },
  { id: 'yellow', text: lang === 'en' ? 'Yellow' : '黃' },
  { id: 'green', text: lang === 'en' ? 'Green' : '綠' },
  { id: 'blue', text: lang === 'en' ? 'Blue' : '藍' },
  { id: 'indigo', text: lang === 'en' ? 'Indigo' : '靛' },
  { id: 'voilet', text: lang === 'en' ? 'Violet' : '紫' },
  { id: 'grey', text: lang === 'en' ? 'Grey' : '灰' },
  { id: 'black', text: lang === 'en' ? 'Black' : '黑' },
  { id: 'white', text: lang === 'en' ? 'White' : '白' },
];

// "Red": "紅"},
//   "Orange": "橙"},
//   "Yellow": "黃"},
//   "Green": "綠"},
//   "Blue": "藍"},
//   "Indigo": "靛"},
//   "Violet": "紫"},
//   "Grey": "灰"},
//   "Black": "黑"},
//   "White": "白"},

export const SizeOptions = (lang) => [
  { id: 'xs', text: lang === 'en' ? 'XS' : '加細碼' },
  { id: 's', text: lang === 'en' ? 'S' : '細號' },
  { id: 'm', text: lang === 'en' ? 'M' : '中碼' },
  { id: 'l', text: lang === 'en' ? 'L' : '大碼' },
  { id: 'xl', text: lang === 'en' ? 'XL' : '加大碼' },
  { id: 'xxl', text: lang === 'en' ? 'XXL' : '加大大碼' },
];


export const getValueOfCate = (mainValue, subValue, exValue) => {
  console.log("main=>", mainValue, "sub=>", subValue, "extended=>", exValue);
  let all = {};
  if (mainValue) {
    let mainCate = MainCategories.filter(main => main.id === mainValue);
    all['category'] = mainCate[0].name;
  }
  if (subValue) {
    let subCate = SubCategories[mainValue].filter(sub => sub.id === subValue);
    all['subCategory'] = subCate[0].name;
  }
  if (exValue) {
    let exCate = ExtendedCategories[subValue].filter(ex => ex.id === exValue);
    all['extendedSubCategory'] = exCate[0].name;
  }
  console.log(all)
  return all;
}

interface Cate {
  category: string;
  subCategory: string;
  extendedSubCategory: string;
}
export const getIdOfCate = (mainValue, subValue, exValue): Cate => {
  console.log("main=>", mainValue, "sub=>", subValue, "extended=>", exValue);
  let all: Cate = { category: '', subCategory: '', extendedSubCategory: '' };
  if (mainValue) {
    let mainCate = MainCategories.filter(main => main.name.toLowerCase() === mainValue.toLowerCase());
    all['category'] = mainCate[0].id;
  }
  if (subValue && all.hasOwnProperty('category')) {
    let subCate = SubCategories[all['category']].filter(sub => sub.name.toLowerCase() === subValue.toLowerCase());
    all['subCategory'] = subCate[0].id;
  }
  if (exValue && all.hasOwnProperty('subCategory')) {
    let exCate = ExtendedCategories[all['subCategory']].filter(ex => ex.name.toLowerCase() === exValue.toLowerCase());
    all['extendedSubCategory'] = exCate[0].id;
  }
  console.log(all)
  return all;
}