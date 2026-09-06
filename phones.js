const phones = [
  // =========================
  // APPLE iPHONE
  // =========================
  { id:"iphone", name:"iPhone", search:"iphone 아이폰 1 original", brand:"Apple", year:2007 },
  { id:"iphone3g", name:"iPhone 3G", search:"iphone3g 아이폰3g", brand:"Apple", year:2008 },
  { id:"iphone3gs", name:"iPhone 3GS", search:"iphone3gs 아이폰3gs", brand:"Apple", year:2009 },

  { id:"iphone4", name:"iPhone 4", search:"iphone4 아이폰4", brand:"Apple", year:2010 },
  { id:"iphone4s", name:"iPhone 4s", search:"iphone4s 아이폰4s", brand:"Apple", year:2011 },

  { id:"iphone5", name:"iPhone 5", search:"iphone5 아이폰5", brand:"Apple", year:2012 },
  { id:"iphone5c", name:"iPhone 5c", search:"iphone5c 아이폰5c", brand:"Apple", year:2013 },
  { id:"iphone5s", name:"iPhone 5s", search:"iphone5s 아이폰5s", brand:"Apple", year:2013 },

  { id:"iphone6", name:"iPhone 6", search:"iphone6 아이폰6", brand:"Apple", year:2014 },
  { id:"iphone6plus", name:"iPhone 6 Plus", search:"iphone6plus 아이폰6플러스", brand:"Apple", year:2014 },
  { id:"iphone6s", name:"iPhone 6s", search:"iphone6s 아이폰6s", brand:"Apple", year:2015 },
  { id:"iphone6splus", name:"iPhone 6s Plus", search:"iphone6splus 아이폰6s플러스", brand:"Apple", year:2015 },

  { id:"iphonese1", name:"iPhone SE (1st generation)", search:"iphonese se1 아이폰se1", brand:"Apple", year:2016 },

  { id:"iphone7", name:"iPhone 7", search:"iphone7 아이폰7", brand:"Apple", year:2016 },
  { id:"iphone7plus", name:"iPhone 7 Plus", search:"iphone7plus 아이폰7플러스", brand:"Apple", year:2016 },

  { id:"iphone8", name:"iPhone 8", search:"iphone8 아이폰8", brand:"Apple", year:2017 },
  { id:"iphone8plus", name:"iPhone 8 Plus", search:"iphone8plus 아이폰8플러스", brand:"Apple", year:2017 },
  { id:"iphonex", name:"iPhone X", search:"iphonex 아이폰x 아이폰10", brand:"Apple", year:2017 },

  { id:"iphonexr", name:"iPhone XR", search:"iphonexr 아이폰xr", brand:"Apple", year:2018 },
  { id:"iphonexs", name:"iPhone XS", search:"iphonexs 아이폰xs", brand:"Apple", year:2018 },
  { id:"iphonexsmax", name:"iPhone XS Max", search:"iphonexsmax 아이폰xsmax", brand:"Apple", year:2018 },

  { id:"iphone11", name:"iPhone 11", search:"iphone11 아이폰11", brand:"Apple", year:2019 },
  { id:"iphone11pro", name:"iPhone 11 Pro", search:"iphone11pro 아이폰11프로", brand:"Apple", year:2019 },
  { id:"iphone11promax", name:"iPhone 11 Pro Max", search:"iphone11promax 아이폰11프로맥스", brand:"Apple", year:2019 },

  { id:"iphonese2", name:"iPhone SE (2nd generation)", search:"iphonese2 se2 아이폰se2", brand:"Apple", year:2020 },

  { id:"iphone12mini", name:"iPhone 12 mini", search:"iphone12mini 아이폰12미니", brand:"Apple", year:2020 },
  { id:"iphone12", name:"iPhone 12", search:"iphone12 아이폰12", brand:"Apple", year:2020 },
  { id:"iphone12pro", name:"iPhone 12 Pro", search:"iphone12pro 아이폰12프로", brand:"Apple", year:2020 },
  { id:"iphone12promax", name:"iPhone 12 Pro Max", search:"iphone12promax 아이폰12프로맥스", brand:"Apple", year:2020 },

  { id:"iphone13mini", name:"iPhone 13 mini", search:"iphone13mini 아이폰13미니", brand:"Apple", year:2021 },
  { id:"iphone13", name:"iPhone 13", search:"iphone13 아이폰13", brand:"Apple", year:2021 },
  { id:"iphone13pro", name:"iPhone 13 Pro", search:"iphone13pro 아이폰13프로", brand:"Apple", year:2021 },
  { id:"iphone13promax", name:"iPhone 13 Pro Max", search:"iphone13promax 아이폰13프로맥스", brand:"Apple", year:2021 },

  { id:"iphonese3", name:"iPhone SE (3rd generation)", search:"iphonese3 se3 아이폰se3", brand:"Apple", year:2022 },

  { id:"iphone14", name:"iPhone 14", search:"iphone14 아이폰14", brand:"Apple", year:2022 },
  { id:"iphone14plus", name:"iPhone 14 Plus", search:"iphone14plus 아이폰14플러스", brand:"Apple", year:2022 },
  { id:"iphone14pro", name:"iPhone 14 Pro", search:"iphone14pro 아이폰14프로", brand:"Apple", year:2022 },
  { id:"iphone14promax", name:"iPhone 14 Pro Max", search:"iphone14promax 아이폰14프로맥스", brand:"Apple", year:2022 },

  { id:"iphone15", name:"iPhone 15", search:"iphone15 아이폰15", brand:"Apple", year:2023 },
  { id:"iphone15plus", name:"iPhone 15 Plus", search:"iphone15plus 아이폰15플러스", brand:"Apple", year:2023 },
  { id:"iphone15pro", name:"iPhone 15 Pro", search:"iphone15pro 아이폰15프로", brand:"Apple", year:2023 },
  { id:"iphone15promax", name:"iPhone 15 Pro Max", search:"iphone15promax 아이폰15프로맥스", brand:"Apple", year:2023 },

  { id:"iphone16", name:"iPhone 16", search:"iphone16 아이폰16", brand:"Apple", year:2024 },
  { id:"iphone16plus", name:"iPhone 16 Plus", search:"iphone16plus 아이폰16플러스", brand:"Apple", year:2024 },
  { id:"iphone16pro", name:"iPhone 16 Pro", search:"iphone16pro 아이폰16프로", brand:"Apple", year:2024 },
  { id:"iphone16promax", name:"iPhone 16 Pro Max", search:"iphone16promax 아이폰16프로맥스", brand:"Apple", year:2024 },
  { id:"iphone16e", name:"iPhone 16e", search:"iphone16e 아이폰16e", brand:"Apple", year:2025 },

  { id:"iphone17", name:"iPhone 17", search:"iphone17 아이폰17", brand:"Apple", year:2025 },
  { id:"iphoneair", name:"iPhone Air", search:"iphoneair 아이폰에어 air", brand:"Apple", year:2025 },
  { id:"iphone17pro", name:"iPhone 17 Pro", search:"iphone17pro 아이폰17프로", brand:"Apple", year:2025 },
  { id:"iphone17promax", name:"iPhone 17 Pro Max", search:"iphone17promax 아이폰17프로맥스", brand:"Apple", year:2025 },


  // =========================
  // SAMSUNG GALAXY S
  // =========================
  { id:"s1", name:"Galaxy S", search:"s1 galaxys 갤럭시s", brand:"Samsung", year:2010 },
  { id:"s2", name:"Galaxy S II", search:"s2 galaxys2 갤럭시s2", brand:"Samsung", year:2011 },
  { id:"s3", name:"Galaxy S III", search:"s3 galaxys3 갤럭시s3", brand:"Samsung", year:2012 },
  { id:"s4", name:"Galaxy S4", search:"s4 galaxys4 갤럭시s4", brand:"Samsung", year:2013 },
  { id:"s5", name:"Galaxy S5", search:"s5 galaxys5 갤럭시s5", brand:"Samsung", year:2014 },

  { id:"s6", name:"Galaxy S6", search:"s6 galaxys6 갤럭시s6", brand:"Samsung", year:2015 },
  { id:"s6edge", name:"Galaxy S6 edge", search:"s6edge s6엣지 갤럭시s6엣지", brand:"Samsung", year:2015 },
  { id:"s6edgeplus", name:"Galaxy S6 edge+", search:"s6edgeplus s6엣지플러스", brand:"Samsung", year:2015 },

  { id:"s7", name:"Galaxy S7", search:"s7 galaxys7 갤럭시s7", brand:"Samsung", year:2016 },
  { id:"s7edge", name:"Galaxy S7 edge", search:"s7edge s7엣지 갤럭시s7엣지", brand:"Samsung", year:2016 },

  { id:"s8", name:"Galaxy S8", search:"s8 galaxys8 갤럭시s8", brand:"Samsung", year:2017 },
  { id:"s8plus", name:"Galaxy S8+", search:"s8plus s8+ 갤럭시s8플러스", brand:"Samsung", year:2017 },

  { id:"s9", name:"Galaxy S9", search:"s9 galaxys9 갤럭시s9", brand:"Samsung", year:2018 },
  { id:"s9plus", name:"Galaxy S9+", search:"s9plus s9+ 갤럭시s9플러스", brand:"Samsung", year:2018 },

  { id:"s10e", name:"Galaxy S10e", search:"s10e 갤럭시s10e", brand:"Samsung", year:2019 },
  { id:"s10", name:"Galaxy S10", search:"s10 갤럭시s10", brand:"Samsung", year:2019 },
  { id:"s10plus", name:"Galaxy S10+", search:"s10plus s10+ 갤럭시s10플러스", brand:"Samsung", year:2019 },
  { id:"s105g", name:"Galaxy S10 5G", search:"s105g s10 5g 갤럭시s105g", brand:"Samsung", year:2019 },

  { id:"s20", name:"Galaxy S20", search:"s20 갤럭시s20", brand:"Samsung", year:2020 },
  { id:"s20plus", name:"Galaxy S20+", search:"s20plus s20+ 갤럭시s20플러스", brand:"Samsung", year:2020 },
  { id:"s20ultra", name:"Galaxy S20 Ultra", search:"s20ultra s20울트라 갤럭시s20울트라", brand:"Samsung", year:2020 },
  { id:"s20fe", name:"Galaxy S20 FE", search:"s20fe s20팬에디션", brand:"Samsung", year:2020 },

  { id:"s21", name:"Galaxy S21", search:"s21 갤럭시s21", brand:"Samsung", year:2021 },
  { id:"s21plus", name:"Galaxy S21+", search:"s21plus s21+ 갤럭시s21플러스", brand:"Samsung", year:2021 },
  { id:"s21ultra", name:"Galaxy S21 Ultra", search:"s21ultra s21울트라 갤럭시s21울트라", brand:"Samsung", year:2021 },
  { id:"s21fe", name:"Galaxy S21 FE", search:"s21fe 갤럭시s21fe", brand:"Samsung", year:2022 },

  { id:"s22", name:"Galaxy S22", search:"s22 갤럭시s22", brand:"Samsung", year:2022 },
  { id:"s22plus", name:"Galaxy S22+", search:"s22plus s22+ 갤럭시s22플러스", brand:"Samsung", year:2022 },
  { id:"s22ultra", name:"Galaxy S22 Ultra", search:"s22ultra s22울트라 갤럭시s22울트라", brand:"Samsung", year:2022 },

  { id:"s23", name:"Galaxy S23", search:"s23 갤럭시s23", brand:"Samsung", year:2023 },
  { id:"s23plus", name:"Galaxy S23+", search:"s23plus s23+ 갤럭시s23플러스", brand:"Samsung", year:2023 },
  { id:"s23ultra", name:"Galaxy S23 Ultra", search:"s23ultra s23울트라 갤럭시s23울트라", brand:"Samsung", year:2023 },
  { id:"s23fe", name:"Galaxy S23 FE", search:"s23fe 갤럭시s23fe", brand:"Samsung", year:2023 },

  { id:"s24", name:"Galaxy S24", search:"s24 갤럭시s24", brand:"Samsung", year:2024 },
  { id:"s24plus", name:"Galaxy S24+", search:"s24plus s24+ 갤럭시s24플러스", brand:"Samsung", year:2024 },
  { id:"s24ultra", name:"Galaxy S24 Ultra", search:"s24ultra s24울트라 갤럭시s24울트라", brand:"Samsung", year:2024 },
  { id:"s24fe", name:"Galaxy S24 FE", search:"s24fe 갤럭시s24fe", brand:"Samsung", year:2024 },

  { id:"s25", name:"Galaxy S25", search:"s25 갤럭시s25", brand:"Samsung", year:2025 },
  { id:"s25plus", name:"Galaxy S25+", search:"s25plus s25+ 갤럭시s25플러스", brand:"Samsung", year:2025 },
  { id:"s25ultra", name:"Galaxy S25 Ultra", search:"s25ultra s25울트라 갤럭시s25울트라", brand:"Samsung", year:2025 },
  { id:"s25edge", name:"Galaxy S25 Edge", search:"s25edge s25엣지 갤럭시s25엣지", brand:"Samsung", year:2025 },
  { id:"s25fe", name:"Galaxy S25 FE", search:"s25fe 갤럭시s25fe", brand:"Samsung", year:2025 },

  { id:"s26", name:"Galaxy S26", search:"s26 갤럭시s26", brand:"Samsung", year:2026 },
  { id:"s26plus", name:"Galaxy S26+", search:"s26plus s26+ 갤럭시s26플러스", brand:"Samsung", year:2026 },
  { id:"s26ultra", name:"Galaxy S26 Ultra", search:"s26ultra s26울트라 갤럭시s26울트라", brand:"Samsung", year:2026 }
];
{ id:"iphone17promax", name:"iPhone 17 Pro Max", search:"iphone17promax 아이폰17프로맥스", brand:"Apple", year:2025 },
{ id:"iphone17e", name:"iPhone 17e", search:"iphone17e 아이폰17e 17e", brand:"Apple", year:2026 },
