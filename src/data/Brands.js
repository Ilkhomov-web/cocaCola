const BrandsData = [
    {
        id: 1,
        brandImg: '/public/cocaBrand.webp',
        brandPageName: 'Coca Cola',
        brandPageDes: 'Coca-Cola kompaniyasi tarixidagi eng mashhur ichimlik 1886-yil 8-mayda Jorjiya shtatining Atlanta shahrida farmatsevt doktor Jon Pemberton tomonidan ixtiro qilingan.',
        brandVideoUrl: 'https://youtu.be/sDCArFkGn-A?si=C9wsx2C9iB2o3hbM',
        brand: [
            {
                id: 1.1,
                brandName: 'Coca Cola',
                brandImageUrl: '/public/orgCola.webp',
                brandDes: 'MAVSIZ ALKOLLI gazlangan ichimlik',
                nutritionalInformation: {
                    nutritionalValue: 100,
                    calories: 42,
                    caloriesKJ: 176,
                    totalFat: 0.0,
                    saturatedFats: 0.0,
                    totalCarbohydrates: 10.6,
                    totalSugar: 10.6,
                    protein: 0.0,
                    salt: 0.0,
                    ingredientlar: 'Gazlangan suv, shakar, rang beruvchi (karamel rangi IV), kislotalilik regulyatori (ortofosfor kislotasi), tabiiy lazzatlar, kofein.'
                }
            },
            {
                id: 1.2,
                brandName: 'Shakarsiz Coca-Cola',
                brandImageUrl: '/public/shCola.webp',
                brandDes: 'MAVSIZ ALKOLLI gazlangan ichimlik',
                nutritionalInformation: {
                    nutritionalValue: 100,
                    calories: 0.2,
                    caloriesKJ: 0.8,
                    totalFat: 0.0,
                    saturatedFats: 0.0,
                    totalCarbohydrates: 0.0,
                    totalSugar: 0.0,
                    protein: 0.0,
                    salt: 0.0,
                    ingredientlar: 'Tarkibi: gazlangan suv, rang (karamel rangi IV), kislotalilik regulyatorlari (ortofosfor kislotasi, natriy sitrat trial), tatlandırıcılar (natriy siklamat, kaliy asesulfam, aspartam*), tabiiy lazzatlar, konservant (natriy benzoat), kofein.  Shakar yo`q'
                }
            },
        ]

    },
    {
        id: 2,
        brandImg: '/public/fantaBrand.webp',
        brandPageName: 'Fanta',
        brandPageDes: "1940 yilda taqdim etilgan Fanta Coca-Cola kompaniyasining ikkinchi yirik brendidir. Fanta Orange asosiy lazzat bo'lsa-da, Fanta portfeli iste'molchilarga meva ta'mlarining keng assortimentini taklif etadi. Dunyo bo'ylab har kuni 130 million martadan ortiq ichiladigan Fanta o'zining ajoyib mevali ta'mi bilan iste'molchilar tomonidan seviladi.",
        brandVideoUrl: '',
        brand: [
            {
                id: 2.1,
                brandName: 'Fanta apelsin',
                brandImageUrl: '/public/fantaOrg.webp',
                brandDes: "Apelsin ta'miga ega bo'lgan mayin alkogolli gazlangan ichimlik",
                nutritionalInformation: {
                    nutritionalValue: 100,
                    calories: 32,
                    caloriesKJ: 134,
                    totalFat: 0.0,
                    saturatedFats: 7.8,
                    totalCarbohydrates: 7.8,
                    totalSugar: 0.0,
                    protein: 0.0,
                    sVitamini: 12,
                    ingredientlar: "Gazlangan suv, shakar, kislotalilik regulyatorlari (limon kislotasi, natriy sitrat trial), konsentrlangan apelsin sharbati (qayta tiklangan sharbat sifatida 1%), stabilizatorlar (arab saqichlari, saxaroza asetat izobutirat, glitserin esterlari va qatron kislotalari), vitamin C, konservantlar (kaliyli sorbat, tabiiy shirinliklar), aspartam*), rang (beta-karotin).S vitamini bilan bir stakanda C vitaminiga bo'lgan kunlik ehtiyojning 50% (250 ml)"
                }
            },
            {
                id: 2.2,
                brandName: 'Fanta sitrus',
                brandImageUrl: '/public/fantaS.webp',
                brandDes: 'Citrus hosh iisi bar spirtsiz gazdalgan susin.',
                nutritionalInformation: {
                    nutritionalValue: 28,
                    calories: 117,
                    caloriesKJ: 0.0,
                    totalFat: 6.8,
                    saturatedFats: 0.0,
                    totalCarbohydrates: 0.0,
                    totalSugar: 0.0,
                    protein: 0.0,
                    sVitamini: '',
                    ingredientlar: "Gazlangan suv, shakar, limon sharbati konsentrati (3% sharbat), kislotalilikni regulyatorlari (natriy glyukonat, limon kislotasi, olma kislotasi), lazzatlar, konservantlar (kaliy sorbat), stabilizatorlar (arab saqichlari, glitserin va qatron kislotasi esterlari), tatlandırıcılar (kaliy asesulfami, antioksid kislotasi (saxaroza))."
                }
            },
        ]

    },
    {
        id: 2,
        brandImg: '/public/spritePage.webp',
        brandPageName: 'Sprite',
        brandPageDes: "1961-yilda sotuvga chiqarilgan Sprite dunyodagi yetakchi limonli xushbo'y ichimlikdir. Sprite o'zini rivojlantirish va ifoda etishni xohlaydigan, o'zini istehzo qilishning sog'lom dozasi bo'lgan faol va ijodiy odamlar uchun ichimlik sifatida joylashtirilgan. AQShda Sprite ko'cha madaniyati platformasini yaratdi, uning asosiy komponentlari basketbol, ​​xip-xop va graffiti edi.",
        brandVideoUrl: '',
        brand: [
            {
                id: 2.1,
                brandName: "Sprite limonli ohak ta'mi",
                brandImageUrl: '/public/spriteOrg.webp',
                brandDes: "MUM ALKOLLI GAZATLANGAN ICHIMLIK LIMONI VA OHAK XIZI",
                nutritionalInformation: {
                    nutritionalValue: 100,
                    calories: 113,
                    caloriesKJ: 56,
                    totalFat: 0.0,
                    saturatedFats: 3.1,
                    totalCarbohydrates: 3.1,
                    totalSugar: 0.0,
                    protein: 0.0,
                    ingredientlar: "Gazlangan suv, shakar, kislotalik regulyatorlari (limon kislotasi, natriy sitrat 3-almashtirilgan), tatlandırıcılar (atsesulfam kaliy, aspartam*), konservant (natriy benzoat), tabiiy lazzatlar Tabiiy tetiklantiruvchi ta'm"
                }
            },
        ]

    }
]


export default BrandsData;