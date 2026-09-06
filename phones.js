const phones = [
  // =========================================================
  // APPLE iPHONE
  // =========================================================

  {
    id:"iphone", name:"iPhone",
    search:"iphone 아이폰1 초대아이폰 original",
    brand:"Apple", year:2007,
    chipset:"Samsung S5L8900", ram:"128MB",
    display:"3.5인치 LCD · 480×320", refreshRate:"60Hz",
    battery:"약 1400mAh", camera:"후면 2MP",
    weight:"135g", os:"iPhone OS 1"
  },
  {
    id:"iphone3g", name:"iPhone 3G",
    search:"iphone3g 아이폰3g 3g",
    brand:"Apple", year:2008,
    chipset:"Samsung S5L8900", ram:"128MB",
    display:"3.5인치 LCD · 480×320", refreshRate:"60Hz",
    battery:"약 1150mAh", camera:"후면 2MP",
    weight:"133g", os:"iPhone OS 2"
  },
  {
    id:"iphone3gs", name:"iPhone 3GS",
    search:"iphone3gs 아이폰3gs 3gs",
    brand:"Apple", year:2009,
    chipset:"Samsung S5PC100", ram:"256MB",
    display:"3.5인치 LCD · 480×320", refreshRate:"60Hz",
    battery:"약 1219mAh", camera:"후면 3MP",
    weight:"135g", os:"iPhone OS 3"
  },
  {
    id:"iphone4", name:"iPhone 4",
    search:"iphone4 아이폰4",
    brand:"Apple", year:2010,
    chipset:"Apple A4", ram:"512MB",
    display:"3.5인치 Retina LCD · 960×640", refreshRate:"60Hz",
    battery:"약 1420mAh", camera:"후면 5MP",
    weight:"137g", os:"iOS 4"
  },
  {
    id:"iphone4s", name:"iPhone 4s",
    search:"iphone4s 아이폰4s",
    brand:"Apple", year:2011,
    chipset:"Apple A5", ram:"512MB",
    display:"3.5인치 Retina LCD · 960×640", refreshRate:"60Hz",
    battery:"약 1432mAh", camera:"후면 8MP",
    weight:"140g", os:"iOS 5"
  },
  {
    id:"iphone5", name:"iPhone 5",
    search:"iphone5 아이폰5",
    brand:"Apple", year:2012,
    chipset:"Apple A6", ram:"1GB",
    display:"4.0인치 Retina LCD · 1136×640", refreshRate:"60Hz",
    battery:"약 1440mAh", camera:"후면 8MP",
    weight:"112g", os:"iOS 6"
  },
  {
    id:"iphone5c", name:"iPhone 5c",
    search:"iphone5c 아이폰5c",
    brand:"Apple", year:2013,
    chipset:"Apple A6", ram:"1GB",
    display:"4.0인치 Retina LCD · 1136×640", refreshRate:"60Hz",
    battery:"약 1510mAh", camera:"후면 8MP",
    weight:"132g", os:"iOS 7"
  },
  {
    id:"iphone5s", name:"iPhone 5s",
    search:"iphone5s 아이폰5s",
    brand:"Apple", year:2013,
    chipset:"Apple A7", ram:"1GB",
    display:"4.0인치 Retina LCD · 1136×640", refreshRate:"60Hz",
    battery:"약 1560mAh", camera:"후면 8MP",
    weight:"112g", os:"iOS 7"
  },
  {
    id:"iphone6", name:"iPhone 6",
    search:"iphone6 아이폰6",
    brand:"Apple", year:2014,
    chipset:"Apple A8", ram:"1GB",
    display:"4.7인치 Retina HD LCD · 1334×750", refreshRate:"60Hz",
    battery:"약 1810mAh", camera:"후면 8MP",
    weight:"129g", os:"iOS 8"
  },
  {
    id:"iphone6plus", name:"iPhone 6 Plus",
    search:"iphone6plus 아이폰6플러스 6plus",
    brand:"Apple", year:2014,
    chipset:"Apple A8", ram:"1GB",
    display:"5.5인치 Retina HD LCD · 1920×1080", refreshRate:"60Hz",
    battery:"약 2915mAh", camera:"후면 8MP",
    weight:"172g", os:"iOS 8"
  },
  {
    id:"iphone6s", name:"iPhone 6s",
    search:"iphone6s 아이폰6s",
    brand:"Apple", year:2015,
    chipset:"Apple A9", ram:"2GB",
    display:"4.7인치 Retina HD LCD · 1334×750", refreshRate:"60Hz",
    battery:"약 1715mAh", camera:"후면 12MP",
    weight:"143g", os:"iOS 9"
  },
  {
    id:"iphone6splus", name:"iPhone 6s Plus",
    search:"iphone6splus 아이폰6s플러스",
    brand:"Apple", year:2015,
    chipset:"Apple A9", ram:"2GB",
    display:"5.5인치 Retina HD LCD · 1920×1080", refreshRate:"60Hz",
    battery:"약 2750mAh", camera:"후면 12MP",
    weight:"192g", os:"iOS 9"
  },
  {
    id:"iphonese1", name:"iPhone SE (1st generation)",
    search:"iphonese1 se1 아이폰se1 아이폰se",
    brand:"Apple", year:2016,
    chipset:"Apple A9", ram:"2GB",
    display:"4.0인치 Retina LCD · 1136×640", refreshRate:"60Hz",
    battery:"약 1624mAh", camera:"후면 12MP",
    weight:"113g", os:"iOS 9.3"
  },
  {
    id:"iphone7", name:"iPhone 7",
    search:"iphone7 아이폰7",
    brand:"Apple", year:2016,
    chipset:"Apple A10 Fusion", ram:"2GB",
    display:"4.7인치 Retina HD LCD · 1334×750", refreshRate:"60Hz",
    battery:"약 1960mAh", camera:"후면 12MP",
    weight:"138g", os:"iOS 10"
  },
  {
    id:"iphone7plus", name:"iPhone 7 Plus",
    search:"iphone7plus 아이폰7플러스",
    brand:"Apple", year:2016,
    chipset:"Apple A10 Fusion", ram:"3GB",
    display:"5.5인치 Retina HD LCD · 1920×1080", refreshRate:"60Hz",
    battery:"약 2900mAh", camera:"12MP 광각 + 12MP 망원",
    weight:"188g", os:"iOS 10"
  },
  {
    id:"iphone8", name:"iPhone 8",
    search:"iphone8 아이폰8",
    brand:"Apple", year:2017,
    chipset:"Apple A11 Bionic", ram:"2GB",
    display:"4.7인치 Retina HD LCD · 1334×750", refreshRate:"60Hz",
    battery:"약 1821mAh", camera:"후면 12MP",
    weight:"148g", os:"iOS 11"
  },
  {
    id:"iphone8plus", name:"iPhone 8 Plus",
    search:"iphone8plus 아이폰8플러스",
    brand:"Apple", year:2017,
    chipset:"Apple A11 Bionic", ram:"3GB",
    display:"5.5인치 Retina HD LCD · 1920×1080", refreshRate:"60Hz",
    battery:"약 2691mAh", camera:"12MP 광각 + 12MP 망원",
    weight:"202g", os:"iOS 11"
  },
  {
    id:"iphonex", name:"iPhone X",
    search:"iphonex 아이폰x 아이폰10",
    brand:"Apple", year:2017,
    chipset:"Apple A11 Bionic", ram:"3GB",
    display:"5.8인치 Super Retina OLED · 2436×1125", refreshRate:"60Hz",
    battery:"약 2716mAh", camera:"12MP 광각 + 12MP 망원",
    weight:"174g", os:"iOS 11"
  },
  {
    id:"iphonexr", name:"iPhone XR",
    search:"iphonexr 아이폰xr",
    brand:"Apple", year:2018,
    chipset:"Apple A12 Bionic", ram:"3GB",
    display:"6.1인치 Liquid Retina LCD · 1792×828", refreshRate:"60Hz",
    battery:"약 2942mAh", camera:"후면 12MP",
    weight:"194g", os:"iOS 12"
  },
  {
    id:"iphonexs", name:"iPhone XS",
    search:"iphonexs 아이폰xs",
    brand:"Apple", year:2018,
    chipset:"Apple A12 Bionic", ram:"4GB",
    display:"5.8인치 Super Retina OLED · 2436×1125", refreshRate:"60Hz",
    battery:"약 2658mAh", camera:"12MP 광각 + 12MP 망원",
    weight:"177g", os:"iOS 12"
  },
  {
    id:"iphonexsmax", name:"iPhone XS Max",
    search:"iphonexsmax 아이폰xs맥스",
    brand:"Apple", year:2018,
    chipset:"Apple A12 Bionic", ram:"4GB",
    display:"6.5인치 Super Retina OLED · 2688×1242", refreshRate:"60Hz",
    battery:"약 3174mAh", camera:"12MP 광각 + 12MP 망원",
    weight:"208g", os:"iOS 12"
  },

  // iPhone 11
  {
    id:"iphone11", name:"iPhone 11",
    search:"iphone11 아이폰11",
    brand:"Apple", year:2019,
    chipset:"Apple A13 Bionic", ram:"4GB",
    display:"6.1인치 Liquid Retina LCD · 1792×828", refreshRate:"60Hz",
    battery:"약 3110mAh", camera:"12MP 광각 + 12MP 초광각",
    weight:"194g", os:"iOS 13"
  },
  {
    id:"iphone11pro", name:"iPhone 11 Pro",
    search:"iphone11pro 아이폰11프로",
    brand:"Apple", year:2019,
    chipset:"Apple A13 Bionic", ram:"4GB",
    display:"5.8인치 Super Retina XDR OLED · 2436×1125", refreshRate:"60Hz",
    battery:"약 3046mAh", camera:"12MP 광각 + 초광각 + 망원",
    weight:"188g", os:"iOS 13"
  },
  {
    id:"iphone11promax", name:"iPhone 11 Pro Max",
    search:"iphone11promax 아이폰11프로맥스",
    brand:"Apple", year:2019,
    chipset:"Apple A13 Bionic", ram:"4GB",
    display:"6.5인치 Super Retina XDR OLED · 2688×1242", refreshRate:"60Hz",
    battery:"약 3969mAh", camera:"12MP 광각 + 초광각 + 망원",
    weight:"226g", os:"iOS 13"
  },

  {
    id:"iphonese2", name:"iPhone SE (2nd generation)",
    search:"iphonese2 se2 아이폰se2",
    brand:"Apple", year:2020,
    chipset:"Apple A13 Bionic", ram:"3GB",
    display:"4.7인치 Retina HD LCD · 1334×750", refreshRate:"60Hz",
    battery:"약 1821mAh", camera:"후면 12MP",
    weight:"148g", os:"iOS 13"
  },

  // iPhone 12
  {
    id:"iphone12mini", name:"iPhone 12 mini",
    search:"iphone12mini 아이폰12미니",
    brand:"Apple", year:2020,
    chipset:"Apple A14 Bionic", ram:"4GB",
    display:"5.4인치 Super Retina XDR OLED · 2340×1080", refreshRate:"60Hz",
    battery:"약 2227mAh", camera:"12MP 광각 + 초광각",
    weight:"133g", os:"iOS 14"
  },
  {
    id:"iphone12", name:"iPhone 12",
    search:"iphone12 아이폰12",
    brand:"Apple", year:2020,
    chipset:"Apple A14 Bionic", ram:"4GB",
    display:"6.1인치 Super Retina XDR OLED · 2532×1170", refreshRate:"60Hz",
    battery:"약 2815mAh", camera:"12MP 광각 + 초광각",
    weight:"164g", os:"iOS 14"
  },
  {
    id:"iphone12pro", name:"iPhone 12 Pro",
    search:"iphone12pro 아이폰12프로",
    brand:"Apple", year:2020,
    chipset:"Apple A14 Bionic", ram:"6GB",
    display:"6.1인치 Super Retina XDR OLED · 2532×1170", refreshRate:"60Hz",
    battery:"약 2815mAh", camera:"12MP 광각 + 초광각 + 망원",
    weight:"189g", os:"iOS 14"
  },
  {
    id:"iphone12promax", name:"iPhone 12 Pro Max",
    search:"iphone12promax 아이폰12프로맥스",
    brand:"Apple", year:2020,
    chipset:"Apple A14 Bionic", ram:"6GB",
    display:"6.7인치 Super Retina XDR OLED · 2778×1284", refreshRate:"60Hz",
    battery:"약 3687mAh", camera:"12MP 광각 + 초광각 + 망원",
    weight:"228g", os:"iOS 14"
  },

  // iPhone 13
  {
    id:"iphone13mini", name:"iPhone 13 mini",
    search:"iphone13mini 아이폰13미니",
    brand:"Apple", year:2021,
    chipset:"Apple A15 Bionic", ram:"4GB",
    display:"5.4인치 Super Retina XDR OLED · 2340×1080", refreshRate:"60Hz",
    battery:"약 2406mAh", camera:"12MP 광각 + 초광각",
    weight:"140g", os:"iOS 15"
  },
  {
    id:"iphone13", name:"iPhone 13",
    search:"iphone13 아이폰13",
    brand:"Apple", year:2021,
    chipset:"Apple A15 Bionic", ram:"4GB",
    display:"6.1인치 Super Retina XDR OLED · 2532×1170", refreshRate:"60Hz",
    battery:"약 3227mAh", camera:"12MP 광각 + 초광각",
    weight:"173g", os:"iOS 15"
  },
  {
    id:"iphone13pro", name:"iPhone 13 Pro",
    search:"iphone13pro 아이폰13프로",
    brand:"Apple", year:2021,
    chipset:"Apple A15 Bionic", ram:"6GB",
    display:"6.1인치 Super Retina XDR OLED", refreshRate:"ProMotion 최대 120Hz",
    battery:"약 3095mAh", camera:"12MP 광각 + 초광각 + 망원",
    weight:"203g", os:"iOS 15"
  },
  {
    id:"iphone13promax", name:"iPhone 13 Pro Max",
    search:"iphone13promax 아이폰13프로맥스",
    brand:"Apple", year:2021,
    chipset:"Apple A15 Bionic", ram:"6GB",
    display:"6.7인치 Super Retina XDR OLED", refreshRate:"ProMotion 최대 120Hz",
    battery:"약 4352mAh", camera:"12MP 광각 + 초광각 + 망원",
    weight:"238g", os:"iOS 15"
  },

  {
    id:"iphonese3", name:"iPhone SE (3rd generation)",
    search:"iphonese3 se3 아이폰se3",
    brand:"Apple", year:2022,
    chipset:"Apple A15 Bionic", ram:"4GB",
    display:"4.7인치 Retina HD LCD", refreshRate:"60Hz",
    battery:"약 2018mAh", camera:"후면 12MP",
    weight:"144g", os:"iOS 15"
  },

  // iPhone 14
  {
    id:"iphone14", name:"iPhone 14",
    search:"iphone14 아이폰14",
    brand:"Apple", year:2022,
    chipset:"Apple A15 Bionic (5-core GPU)", ram:"6GB",
    display:"6.1인치 Super Retina XDR OLED", refreshRate:"60Hz",
    battery:"약 3279mAh", camera:"12MP 메인 + 12MP 초광각",
    weight:"172g", os:"iOS 16"
  },
  {
    id:"iphone14plus", name:"iPhone 14 Plus",
    search:"iphone14plus 아이폰14플러스",
    brand:"Apple", year:2022,
    chipset:"Apple A15 Bionic (5-core GPU)", ram:"6GB",
    display:"6.7인치 Super Retina XDR OLED", refreshRate:"60Hz",
    battery:"약 4325mAh", camera:"12MP 메인 + 12MP 초광각",
    weight:"203g", os:"iOS 16"
  },
  {
    id:"iphone14pro", name:"iPhone 14 Pro",
    search:"iphone14pro 아이폰14프로",
    brand:"Apple", year:2022,
    chipset:"Apple A16 Bionic", ram:"6GB",
    display:"6.1인치 Super Retina XDR OLED", refreshRate:"1~120Hz ProMotion",
    battery:"약 3200mAh", camera:"48MP 메인 + 12MP 초광각 + 12MP 망원",
    weight:"206g", os:"iOS 16"
  },
  {
    id:"iphone14promax", name:"iPhone 14 Pro Max",
    search:"iphone14promax 아이폰14프로맥스",
    brand:"Apple", year:2022,
    chipset:"Apple A16 Bionic", ram:"6GB",
    display:"6.7인치 Super Retina XDR OLED", refreshRate:"1~120Hz ProMotion",
    battery:"약 4323mAh", camera:"48MP 메인 + 12MP 초광각 + 12MP 망원",
    weight:"240g", os:"iOS 16"
  },

  // iPhone 15
  {
    id:"iphone15", name:"iPhone 15",
    search:"iphone15 아이폰15",
    brand:"Apple", year:2023,
    chipset:"Apple A16 Bionic", ram:"6GB",
    display:"6.1인치 Super Retina XDR OLED", refreshRate:"60Hz",
    battery:"공식 mAh 미공개", camera:"48MP 메인 + 12MP 초광각",
    weight:"171g", os:"iOS 17"
  },
  {
    id:"iphone15plus", name:"iPhone 15 Plus",
    search:"iphone15plus 아이폰15플러스",
    brand:"Apple", year:2023,
    chipset:"Apple A16 Bionic", ram:"6GB",
    display:"6.7인치 Super Retina XDR OLED", refreshRate:"60Hz",
    battery:"공식 mAh 미공개", camera:"48MP 메인 + 12MP 초광각",
    weight:"201g", os:"iOS 17"
  },
  {
    id:"iphone15pro", name:"iPhone 15 Pro",
    search:"iphone15pro 아이폰15프로",
    brand:"Apple", year:2023,
    chipset:"Apple A17 Pro", ram:"8GB",
    display:"6.1인치 Super Retina XDR OLED", refreshRate:"1~120Hz ProMotion",
    battery:"공식 mAh 미공개", camera:"48MP 메인 + 12MP 초광각 + 12MP 망원",
    weight:"187g", os:"iOS 17"
  },
  {
    id:"iphone15promax", name:"iPhone 15 Pro Max",
    search:"iphone15promax 아이폰15프로맥스",
    brand:"Apple", year:2023,
    chipset:"Apple A17 Pro", ram:"8GB",
    display:"6.7인치 Super Retina XDR OLED", refreshRate:"1~120Hz ProMotion",
    battery:"공식 mAh 미공개", camera:"48MP 메인 + 12MP 초광각 + 12MP 5배 망원",
    weight:"221g", os:"iOS 17"
  },

  // iPhone 16
  {
    id:"iphone16", name:"iPhone 16",
    search:"iphone16 아이폰16",
    brand:"Apple", year:2024,
    chipset:"Apple A18", ram:"8GB",
    display:"6.1인치 Super Retina XDR OLED", refreshRate:"60Hz",
    battery:"공식 mAh 미공개", camera:"48MP Fusion + 12MP 초광각",
    weight:"170g", os:"iOS 18"
  },
  {
    id:"iphone16plus", name:"iPhone 16 Plus",
    search:"iphone16plus 아이폰16플러스",
    brand:"Apple", year:2024,
    chipset:"Apple A18", ram:"8GB",
    display:"6.7인치 Super Retina XDR OLED", refreshRate:"60Hz",
    battery:"공식 mAh 미공개", camera:"48MP Fusion + 12MP 초광각",
    weight:"199g", os:"iOS 18"
  },
  {
    id:"iphone16pro", name:"iPhone 16 Pro",
    search:"iphone16pro 아이폰16프로",
    brand:"Apple", year:2024,
    chipset:"Apple A18 Pro", ram:"8GB",
    display:"6.3인치 Super Retina XDR OLED", refreshRate:"1~120Hz ProMotion",
    battery:"공식 mAh 미공개", camera:"48MP Fusion + 48MP 초광각 + 12MP 5배 망원",
    weight:"199g", os:"iOS 18"
  },
  {
    id:"iphone16promax", name:"iPhone 16 Pro Max",
    search:"iphone16promax 아이폰16프로맥스",
    brand:"Apple", year:2024,
    chipset:"Apple A18 Pro", ram:"8GB",
    display:"6.9인치 Super Retina XDR OLED", refreshRate:"1~120Hz ProMotion",
    battery:"공식 mAh 미공개", camera:"48MP Fusion + 48MP 초광각 + 12MP 5배 망원",
    weight:"227g", os:"iOS 18"
  },
  {
    id:"iphone16e", name:"iPhone 16e",
    search:"iphone16e 아이폰16e 16e",
    brand:"Apple", year:2025,
    chipset:"Apple A18", ram:"8GB",
    display:"6.1인치 Super Retina XDR OLED", refreshRate:"60Hz",
    battery:"공식 mAh 미공개", camera:"48MP Fusion",
    weight:"167g", os:"iOS 18"
  },

  // iPhone 17
  {
    id:"iphone17", name:"iPhone 17",
    search:"iphone17 아이폰17",
    brand:"Apple", year:2025,
    chipset:"Apple A19", ram:"공식 미공개",
    display:"6.3인치 Super Retina XDR OLED", refreshRate:"최대 120Hz ProMotion",
    battery:"공식 mAh 미공개", camera:"48MP Fusion 메인 + 48MP 초광각",
    weight:"177g", os:"iOS 26"
  },
  {
    id:"iphoneair", name:"iPhone Air",
    search:"iphoneair 아이폰에어 air",
    brand:"Apple", year:2025,
    chipset:"Apple A19 Pro", ram:"공식 미공개",
    display:"6.5인치 Super Retina XDR OLED", refreshRate:"최대 120Hz ProMotion",
    battery:"공식 mAh 미공개", camera:"48MP Fusion",
    weight:"165g", os:"iOS 26"
  },
  {
    id:"iphone17pro", name:"iPhone 17 Pro",
    search:"iphone17pro 아이폰17프로",
    brand:"Apple", year:2025,
    chipset:"Apple A19 Pro", ram:"공식 미공개",
    display:"6.3인치 Super Retina XDR OLED", refreshRate:"최대 120Hz ProMotion",
    battery:"공식 mAh 미공개", camera:"48MP Pro Fusion 카메라 시스템",
    weight:"206g", os:"iOS 26"
  },
  {
    id:"iphone17promax", name:"iPhone 17 Pro Max",
    search:"iphone17promax 아이폰17프로맥스",
    brand:"Apple", year:2025,
    chipset:"Apple A19 Pro", ram:"공식 미공개",
    display:"6.9인치 Super Retina XDR OLED", refreshRate:"최대 120Hz ProMotion",
    battery:"공식 mAh 미공개", camera:"48MP Pro Fusion 카메라 시스템",
    weight:"233g", os:"iOS 26"
  },
  {
    id:"iphone17e", name:"iPhone 17e",
    search:"iphone17e 아이폰17e 17e",
    brand:"Apple", year:2026,
    chipset:"Apple A19", ram:"공식 미공개",
    display:"6.1인치 Super Retina XDR OLED · 2532×1170", refreshRate:"60Hz",
    battery:"공식 mAh 미공개 · 동영상 최대 26시간",
    camera:"48MP Fusion",
    weight:"170g", os:"iOS 26"
  },


  // =========================================================
  // SAMSUNG GALAXY S
  // 대표/한국 출시 사양 기준. 지역 및 통신사판은 일부 차이 가능.
  // =========================================================

  {
    id:"s1", name:"Galaxy S",
    search:"s1 galaxys 갤럭시s 갤럭시s1",
    brand:"Samsung", year:2010,
    chipset:"Samsung Exynos 3 Single", ram:"512MB",
    display:"4.0인치 Super AMOLED · 800×480", refreshRate:"60Hz",
    battery:"1500mAh", camera:"후면 5MP",
    weight:"121g", os:"Android 2.1"
  },
  {
    id:"s2", name:"Galaxy S II",
    search:"s2 galaxys2 갤럭시s2",
    brand:"Samsung", year:2011,
    chipset:"Samsung Exynos 4210", ram:"1GB",
    display:"4.3인치 Super AMOLED Plus · 800×480", refreshRate:"60Hz",
    battery:"1650mAh", camera:"후면 8MP",
    weight:"116g", os:"Android 2.3"
  },
  {
    id:"s3", name:"Galaxy S III",
    search:"s3 galaxys3 갤럭시s3",
    brand:"Samsung", year:2012,
    chipset:"Samsung Exynos 4412", ram:"1~2GB",
    display:"4.8인치 HD Super AMOLED · 1280×720", refreshRate:"60Hz",
    battery:"2100mAh", camera:"후면 8MP",
    weight:"133g", os:"Android 4.0"
  },
  {
    id:"s4", name:"Galaxy S4",
    search:"s4 galaxys4 갤럭시s4",
    brand:"Samsung", year:2013,
    chipset:"Exynos 5410 / Snapdragon 600 (지역별)", ram:"2GB",
    display:"5.0인치 Full HD Super AMOLED", refreshRate:"60Hz",
    battery:"2600mAh", camera:"후면 13MP",
    weight:"130g", os:"Android 4.2.2"
  },
  {
    id:"s5", name:"Galaxy S5",
    search:"s5 galaxys5 갤럭시s5",
    brand:"Samsung", year:2014,
    chipset:"Snapdragon 801 (주요 모델)", ram:"2GB",
    display:"5.1인치 Full HD Super AMOLED", refreshRate:"60Hz",
    battery:"2800mAh", camera:"후면 16MP",
    weight:"145g", os:"Android 4.4.2"
  },

  // S6
  {
    id:"s6", name:"Galaxy S6",
    search:"s6 갤럭시s6",
    brand:"Samsung", year:2015,
    chipset:"Exynos 7420", ram:"3GB",
    display:"5.1인치 QHD Super AMOLED", refreshRate:"60Hz",
    battery:"2550mAh", camera:"후면 16MP",
    weight:"138g", os:"Android 5.0"
  },
  {
    id:"s6edge", name:"Galaxy S6 edge",
    search:"s6edge s6엣지 갤럭시s6엣지",
    brand:"Samsung", year:2015,
    chipset:"Exynos 7420", ram:"3GB",
    display:"5.1인치 QHD Super AMOLED", refreshRate:"60Hz",
    battery:"2600mAh", camera:"후면 16MP",
    weight:"132g", os:"Android 5.0"
  },
  {
    id:"s6edgeplus", name:"Galaxy S6 edge+",
    search:"s6edgeplus s6edge+ s6엣지플러스",
    brand:"Samsung", year:2015,
    chipset:"Exynos 7420", ram:"4GB",
    display:"5.7인치 QHD Super AMOLED", refreshRate:"60Hz",
    battery:"3000mAh", camera:"후면 16MP",
    weight:"153g", os:"Android 5.1"
  },

  // S7
  {
    id:"s7", name:"Galaxy S7",
    search:"s7 갤럭시s7",
    brand:"Samsung", year:2016,
    chipset:"Exynos 8890 (한국)", ram:"4GB",
    display:"5.1인치 QHD Super AMOLED", refreshRate:"60Hz",
    battery:"3000mAh", camera:"후면 12MP",
    weight:"152g", os:"Android 6.0"
  },
  {
    id:"s7edge", name:"Galaxy S7 edge",
    search:"s7edge s7엣지 갤럭시s7엣지",
    brand:"Samsung", year:2016,
    chipset:"Exynos 8890 (한국)", ram:"4GB",
    display:"5.5인치 QHD Super AMOLED", refreshRate:"60Hz",
    battery:"3600mAh", camera:"후면 12MP",
    weight:"157g", os:"Android 6.0"
  },

  // S8
  {
    id:"s8", name:"Galaxy S8",
    search:"s8 갤럭시s8",
    brand:"Samsung", year:2017,
    chipset:"Exynos 8895 (한국)", ram:"4GB",
    display:"5.8인치 QHD+ Super AMOLED", refreshRate:"60Hz",
    battery:"3000mAh", camera:"후면 12MP",
    weight:"155g", os:"Android 7.0"
  },
  {
    id:"s8plus", name:"Galaxy S8+",
    search:"s8plus s8+ 갤럭시s8플러스",
    brand:"Samsung", year:2017,
    chipset:"Exynos 8895 (한국)", ram:"4GB",
    display:"6.2인치 QHD+ Super AMOLED", refreshRate:"60Hz",
    battery:"3500mAh", camera:"후면 12MP",
    weight:"173g", os:"Android 7.0"
  },

  // S9
  {
    id:"s9", name:"Galaxy S9",
    search:"s9 갤럭시s9",
    brand:"Samsung", year:2018,
    chipset:"Exynos 9810 (한국)", ram:"4GB",
    display:"5.8인치 QHD+ Super AMOLED", refreshRate:"60Hz",
    battery:"3000mAh", camera:"후면 12MP",
    weight:"163g", os:"Android 8.0"
  },
  {
    id:"s9plus", name:"Galaxy S9+",
    search:"s9plus s9+ 갤럭시s9플러스",
    brand:"Samsung", year:2018,
    chipset:"Exynos 9810 (한국)", ram:"6GB",
    display:"6.2인치 QHD+ Super AMOLED", refreshRate:"60Hz",
    battery:"3500mAh", camera:"12MP + 12MP",
    weight:"189g", os:"Android 8.0"
  },

  // S10
  {
    id:"s10e", name:"Galaxy S10e",
    search:"s10e 갤럭시s10e",
    brand:"Samsung", year:2019,
    chipset:"Exynos 9820 (한국)", ram:"6GB",
    display:"5.8인치 Dynamic AMOLED · FHD+", refreshRate:"60Hz",
    battery:"3100mAh", camera:"12MP + 16MP 초광각",
    weight:"150g", os:"Android 9"
  },
  {
    id:"s10", name:"Galaxy S10",
    search:"s10 갤럭시s10",
    brand:"Samsung", year:2019,
    chipset:"Exynos 9820 (한국)", ram:"8GB",
    display:"6.1인치 Dynamic AMOLED · QHD+", refreshRate:"60Hz",
    battery:"3400mAh", camera:"12MP + 12MP 망원 + 16MP 초광각",
    weight:"157g", os:"Android 9"
  },
  {
    id:"s10plus", name:"Galaxy S10+",
    search:"s10plus s10+ 갤럭시s10플러스",
    brand:"Samsung", year:2019,
    chipset:"Exynos 9820 (한국)", ram:"8GB",
    display:"6.4인치 Dynamic AMOLED · QHD+", refreshRate:"60Hz",
    battery:"4100mAh", camera:"12MP + 12MP 망원 + 16MP 초광각",
    weight:"175g", os:"Android 9"
  },
  {
    id:"s105g", name:"Galaxy S10 5G",
    search:"s105g s10 5g 갤럭시s105g",
    brand:"Samsung", year:2019,
    chipset:"Exynos 9820", ram:"8GB",
    display:"6.7인치 Dynamic AMOLED · QHD+", refreshRate:"60Hz",
    battery:"4500mAh", camera:"12MP + 12MP + 16MP + ToF",
    weight:"198g", os:"Android 9"
  },

  // S20
  {
    id:"s20", name:"Galaxy S20",
    search:"s20 갤럭시s20",
    brand:"Samsung", year:2020,
    chipset:"Snapdragon 865 (한국 5G)", ram:"12GB",
    display:"6.2인치 Dynamic AMOLED 2X · QHD+", refreshRate:"최대 120Hz",
    battery:"4000mAh", camera:"12MP + 64MP 망원 + 12MP 초광각",
    weight:"163g", os:"Android 10"
  },
  {
    id:"s20plus", name:"Galaxy S20+",
    search:"s20plus s20+ 갤럭시s20플러스",
    brand:"Samsung", year:2020,
    chipset:"Snapdragon 865 (한국 5G)", ram:"12GB",
    display:"6.7인치 Dynamic AMOLED 2X · QHD+", refreshRate:"최대 120Hz",
    battery:"4500mAh", camera:"12MP + 64MP 망원 + 12MP 초광각 + DepthVision",
    weight:"186g", os:"Android 10"
  },
  {
    id:"s20ultra", name:"Galaxy S20 Ultra",
    search:"s20ultra s20울트라 갤럭시s20울트라",
    brand:"Samsung", year:2020,
    chipset:"Snapdragon 865 (한국 5G)", ram:"12GB",
    display:"6.9인치 Dynamic AMOLED 2X · QHD+", refreshRate:"최대 120Hz",
    battery:"5000mAh", camera:"108MP + 48MP 망원 + 12MP 초광각 + DepthVision",
    weight:"220g", os:"Android 10"
  },
  {
    id:"s20fe", name:"Galaxy S20 FE",
    search:"s20fe 갤럭시s20fe 팬에디션",
    brand:"Samsung", year:2020,
    chipset:"Snapdragon 865 (5G)", ram:"6GB",
    display:"6.5인치 Super AMOLED · FHD+", refreshRate:"120Hz",
    battery:"4500mAh", camera:"12MP + 8MP 망원 + 12MP 초광각",
    weight:"190g", os:"Android 10"
  },

  // S21
  {
    id:"s21", name:"Galaxy S21",
    search:"s21 갤럭시s21",
    brand:"Samsung", year:2021,
    chipset:"Exynos 2100 (한국)", ram:"8GB",
    display:"6.2인치 Dynamic AMOLED 2X · FHD+", refreshRate:"48~120Hz",
    battery:"4000mAh", camera:"12MP + 64MP 망원 + 12MP 초광각",
    weight:"169g", os:"Android 11"
  },
  {
    id:"s21plus", name:"Galaxy S21+",
    search:"s21plus s21+ 갤럭시s21플러스",
    brand:"Samsung", year:2021,
    chipset:"Exynos 2100 (한국)", ram:"8GB",
    display:"6.7인치 Dynamic AMOLED 2X · FHD+", refreshRate:"48~120Hz",
    battery:"4800mAh", camera:"12MP + 64MP 망원 + 12MP 초광각",
    weight:"200g", os:"Android 11"
  },
  {
    id:"s21ultra", name:"Galaxy S21 Ultra",
    search:"s21ultra s21울트라 갤럭시s21울트라",
    brand:"Samsung", year:2021,
    chipset:"Exynos 2100 (한국)", ram:"12GB",
    display:"6.8인치 Dynamic AMOLED 2X · QHD+", refreshRate:"10~120Hz",
    battery:"5000mAh", camera:"108MP + 10MP 3배 + 10MP 10배 + 12MP 초광각",
    weight:"227g", os:"Android 11"
  },
  {
    id:"s21fe", name:"Galaxy S21 FE",
    search:"s21fe 갤럭시s21fe",
    brand:"Samsung", year:2022,
    chipset:"Snapdragon 888", ram:"6/8GB",
    display:"6.4인치 Dynamic AMOLED 2X · FHD+", refreshRate:"120Hz",
    battery:"4500mAh", camera:"12MP + 8MP 망원 + 12MP 초광각",
    weight:"177g", os:"Android 12"
  },

  // S22
  {
    id:"s22", name:"Galaxy S22",
    search:"s22 갤럭시s22",
    brand:"Samsung", year:2022,
    chipset:"Snapdragon 8 Gen 1 (한국)", ram:"8GB",
    display:"6.1인치 Dynamic AMOLED 2X · FHD+", refreshRate:"48~120Hz",
    battery:"3700mAh", camera:"50MP + 10MP 3배 망원 + 12MP 초광각",
    weight:"167g", os:"Android 12"
  },
  {
    id:"s22plus", name:"Galaxy S22+",
    search:"s22plus s22+ 갤럭시s22플러스",
    brand:"Samsung", year:2022,
    chipset:"Snapdragon 8 Gen 1 (한국)", ram:"8GB",
    display:"6.6인치 Dynamic AMOLED 2X · FHD+", refreshRate:"48~120Hz",
    battery:"4500mAh", camera:"50MP + 10MP 3배 망원 + 12MP 초광각",
    weight:"195g", os:"Android 12"
  },
  {
    id:"s22ultra", name:"Galaxy S22 Ultra",
    search:"s22ultra s22울트라 갤럭시s22울트라",
    brand:"Samsung", year:2022,
    chipset:"Snapdragon 8 Gen 1 (한국)", ram:"12GB",
    display:"6.8인치 Dynamic AMOLED 2X · QHD+", refreshRate:"1~120Hz",
    battery:"5000mAh", camera:"108MP + 10MP 3배 + 10MP 10배 + 12MP 초광각",
    weight:"228g", os:"Android 12"
  },

  // S23
  {
    id:"s23", name:"Galaxy S23",
    search:"s23 갤럭시s23",
    brand:"Samsung", year:2023,
    chipset:"Snapdragon 8 Gen 2 for Galaxy", ram:"8GB",
    display:"6.1인치 Dynamic AMOLED 2X · FHD+", refreshRate:"48~120Hz",
    battery:"3900mAh", camera:"50MP + 10MP 3배 망원 + 12MP 초광각",
    weight:"168g", os:"Android 13"
  },
  {
    id:"s23plus", name:"Galaxy S23+",
    search:"s23plus s23+ 갤럭시s23플러스",
    brand:"Samsung", year:2023,
    chipset:"Snapdragon 8 Gen 2 for Galaxy", ram:"8GB",
    display:"6.6인치 Dynamic AMOLED 2X · FHD+", refreshRate:"48~120Hz",
    battery:"4700mAh", camera:"50MP + 10MP 3배 망원 + 12MP 초광각",
    weight:"195g", os:"Android 13"
  },
  {
    id:"s23ultra", name:"Galaxy S23 Ultra",
    search:"s23ultra s23울트라 갤럭시s23울트라",
    brand:"Samsung", year:2023,
    chipset:"Snapdragon 8 Gen 2 for Galaxy", ram:"12GB",
    display:"6.8인치 Dynamic AMOLED 2X · QHD+", refreshRate:"1~120Hz",
    battery:"5000mAh", camera:"200MP + 10MP 3배 + 10MP 10배 + 12MP 초광각",
    weight:"233g", os:"Android 13"
  },
  {
    id:"s23fe", name:"Galaxy S23 FE",
    search:"s23fe 갤럭시s23fe",
    brand:"Samsung", year:2023,
    chipset:"Exynos 2200 (한국)", ram:"8GB",
    display:"6.4인치 Dynamic AMOLED 2X · FHD+", refreshRate:"60~120Hz",
    battery:"4500mAh", camera:"50MP + 8MP 3배 망원 + 12MP 초광각",
    weight:"209g", os:"Android 13"
  },

  // S24
  {
    id:"s24", name:"Galaxy S24",
    search:"s24 갤럭시s24",
    brand:"Samsung", year:2024,
    chipset:"Exynos 2400 (한국)", ram:"8GB",
    display:"6.2인치 Dynamic AMOLED 2X · FHD+", refreshRate:"1~120Hz",
    battery:"4000mAh", camera:"50MP + 10MP 3배 망원 + 12MP 초광각",
    weight:"167g", os:"Android 14 / One UI 6.1"
  },
  {
    id:"s24plus", name:"Galaxy S24+",
    search:"s24plus s24+ 갤럭시s24플러스",
    brand:"Samsung", year:2024,
    chipset:"Exynos 2400 (한국)", ram:"12GB",
    display:"6.7인치 Dynamic AMOLED 2X · QHD+", refreshRate:"1~120Hz",
    battery:"4900mAh", camera:"50MP + 10MP 3배 망원 + 12MP 초광각",
    weight:"196g", os:"Android 14 / One UI 6.1"
  },
  {
    id:"s24ultra", name:"Galaxy S24 Ultra",
    search:"s24ultra s24울트라 갤럭시s24울트라",
    brand:"Samsung", year:2024,
    chipset:"Snapdragon 8 Gen 3 for Galaxy", ram:"12GB",
    display:"6.8인치 Dynamic AMOLED 2X · QHD+", refreshRate:"1~120Hz",
    battery:"5000mAh", camera:"200MP + 50MP 5배 + 10MP 3배 + 12MP 초광각",
    weight:"232g", os:"Android 14 / One UI 6.1"
  },
  {
    id:"s24fe", name:"Galaxy S24 FE",
    search:"s24fe 갤럭시s24fe",
    brand:"Samsung", year:2024,
    chipset:"Exynos 2400e", ram:"8GB",
    display:"6.7인치 Dynamic AMOLED 2X · FHD+", refreshRate:"최대 120Hz",
    battery:"4700mAh", camera:"50MP + 8MP 3배 망원 + 12MP 초광각",
    weight:"213g", os:"Android 14"
  },

  // S25
  {
    id:"s25", name:"Galaxy S25",
    search:"s25 갤럭시s25",
    brand:"Samsung", year:2025,
    chipset:"Snapdragon 8 Elite for Galaxy", ram:"12GB",
    display:"6.2인치 Dynamic AMOLED 2X · FHD+", refreshRate:"1~120Hz",
    battery:"4000mAh", camera:"50MP + 10MP 3배 망원 + 12MP 초광각",
    weight:"162g", os:"Android 15 / One UI 7"
  },
  {
    id:"s25plus", name:"Galaxy S25+",
    search:"s25plus s25+ 갤럭시s25플러스",
    brand:"Samsung", year:2025,
    chipset:"Snapdragon 8 Elite for Galaxy", ram:"12GB",
    display:"6.7인치 Dynamic AMOLED 2X · QHD+", refreshRate:"1~120Hz",
    battery:"4900mAh", camera:"50MP + 10MP 3배 망원 + 12MP 초광각",
    weight:"190g", os:"Android 15 / One UI 7"
  },
  {
    id:"s25ultra", name:"Galaxy S25 Ultra",
    search:"s25ultra s25울트라 갤럭시s25울트라",
    brand:"Samsung", year:2025,
    chipset:"Snapdragon 8 Elite for Galaxy", ram:"12GB",
    display:"6.9인치 Dynamic AMOLED 2X · QHD+", refreshRate:"1~120Hz",
    battery:"5000mAh", camera:"200MP + 50MP 5배 + 10MP 3배 + 50MP 초광각",
    weight:"218g", os:"Android 15 / One UI 7"
  },
  {
    id:"s25edge", name:"Galaxy S25 Edge",
    search:"s25edge s25엣지 갤럭시s25엣지",
    brand:"Samsung", year:2025,
    chipset:"Snapdragon 8 Elite for Galaxy", ram:"12GB",
    display:"6.7인치 Dynamic AMOLED 2X · QHD+", refreshRate:"1~120Hz",
    battery:"3900mAh", camera:"200MP 메인 + 12MP 초광각",
    weight:"163g", os:"Android 15"
  },
  {
    id:"s25fe", name:"Galaxy S25 FE",
    search:"s25fe 갤럭시s25fe",
    brand:"Samsung", year:2025,
    chipset:"Exynos 2400", ram:"8GB",
    display:"6.7인치 Dynamic AMOLED 2X", refreshRate:"최대 120Hz",
    battery:"4900mAh", camera:"50MP + 8MP 망원 + 12MP 초광각",
    weight:"190g", os:"Android 16 / One UI 8"
  },

  // S26
  {
    id:"s26", name:"Galaxy S26",
    search:"s26 갤럭시s26",
    brand:"Samsung", year:2026,
    chipset:"Exynos 2600 (한국)", ram:"12GB",
    display:"6.3인치 Dynamic AMOLED 2X · 2340×1080", refreshRate:"최대 120Hz",
    battery:"4300mAh", camera:"50MP + 10MP 3배 망원 + 12MP 초광각",
    weight:"167g", os:"Android / One UI"
  },
  {
    id:"s26plus", name:"Galaxy S26+",
    search:"s26plus s26+ 갤럭시s26플러스",
    brand:"Samsung", year:2026,
    chipset:"Exynos 2600 (한국)", ram:"12GB",
    display:"6.7인치 Dynamic AMOLED 2X", refreshRate:"최대 120Hz",
    battery:"4900mAh", camera:"50MP + 10MP 3배 망원 + 12MP 초광각",
    weight:"190g", os:"Android / One UI"
  },
  {
    id:"s26ultra", name:"Galaxy S26 Ultra",
    search:"s26ultra s26울트라 갤럭시s26울트라",
    brand:"Samsung", year:2026,
    chipset:"Snapdragon 8 Elite Gen 5 for Galaxy", ram:"12GB",
    display:"6.9인치 Dynamic AMOLED 2X · QHD+", refreshRate:"최대 120Hz",
    battery:"5000mAh", camera:"200MP 메인 + 망원 + 초광각 멀티 카메라",
    weight:"약 214g", os:"Android / One UI"
  }
];
