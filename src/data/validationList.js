let exclusiveCity = [
    "New York",
    "Mussaitbeh",
    "Jaipur",
    "Shanghai",
    "Budapest",
    "Quebec",
    "Lisbon",
    "Busan",
    "Budapest"
]
let exclusiveCityDesc = [
    {name:"New York",desc:"The City of New York, usually called either New York City (NYC) or simply New York (NY), is the most populous city in the United States. With an estimated 2018 population of 8,398,748 distributed over a land area of about 302.6 square miles (784 km2), New York is also the most densely populated major city in the United States.  Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass  and one of the world's most populous megacities."},
    {name:"Mussaitbeh",desc:"Beirut is the capital and largest city of Lebanon. No recent population census has been conducted, but 2007 estimates ranged from slightly more than 1 million to 2.2 million as part of Greater Beirut. Located on a peninsula at the midpoint of Lebanon's Mediterranean coast, Beirut is the country's largest and main seaport. It is one of the oldest cities in the world, having been inhabited for more than 5,000 years. The first historical mention of Beirut is found in the Amarna letters from the New Kingdom of Egypt, which date to the 15th century BC."},
    {name:"Jaipur",desc:"Jaipur is the capital and the largest city of the Indian state of Rajasthan. As of 2011, the city had a population of 3.1 million, making it the tenth most populous city in the country. Jaipur is also known as the Pink City, due to the dominant color scheme of its buildings. It is located 268 km (167 miles) from the national capital New Delhi. Jaipur was founded in 1727 by the Rajput ruler Jai Singh II, the ruler of Amer, after whom the city is named. It was one of the earliest planned cities of modern India, designed by Vidyadhar Bhattacharya. During the British Colonial period, the city served as the capital of Jaipur State. After independence in 1947, Jaipur was made capital of the newly-formed state of Rajasthan."},
    {name:"Shanghai",desc:"Shanghai is one of the four municipalities under the direct administration of the central government of the People's Republic of China, the most populous city in China, and the most populous city proper in the world, with a population of 26.3 million as of 2019. It is a global financial center and transport hub, with the world's busiest container port. Located in the Yangtze River Delta, it sits on the south edge of the estuary of the Yangtze in the middle portion of the Eastern China coast. The municipality borders the provinces of Jiangsuand Zhejiang to the south, east and west, and is bound to the east by the East China Sea."},
    {name:"Budapest",desc:"Budapest is the capital and the most populous city of Hungary, and the tenth-largest city in the European Union by population within city limits. The city had an estimated population of 1,752,286 in 2019 distributed over a land area of about 525 square kilometres (203 square miles). Budapest is both a city and county, and forms the centre of the Budapest metropolitan area, which has an area of 7,626 square kilometres (2,944 square miles) and a population of 3,303,786, comprising 33 percent of the population of Hungary."},
    {name:"Quebec",desc:"is one of the thirteen provinces and territories of Canada. It is bordered to the west by the province of Ontario and the bodies of water James Bay and Hudson Bay; to the north by Hudson Strait and Ungava Bay; to the east by the Gulf of Saint Lawrence and the province of Newfoundland and Labrador; and to the south by the province of New Brunswick and the US statesof Maine, New Hampshire, Vermont, and New York. It also shares maritime borders with Nunavut, Prince Edward Island, and Nova Scotia. Quebec is Canada's largest province by area and its second-largest administrative division; only the territory of Nunavut is larger. "},
    {name:"Lisbon",desc:"Lisbon is the capital and the largest city of Portugal. With an estimated population of 505,526 within its administrative limits in an area of 100.05 km2, Lisbon's urban area extends beyond the city's administrative limits with a population of around 2.8 million people, being the 11th-most populous urban area in the European Union. About 3 million people live in the Lisbon metropolitan area, including the Portuguese Riviera, (which represents approximately 27% of the country's population). It is mainland Europe's westernmost capital city and the only one along the Atlantic coast. Lisbon lies in the western Iberian Peninsula on the Atlantic Ocean and the River Tagus."},
    {name:"Busan",desc:"Busan, formerly Romanized as Pusan and now officially Busan Metropolitan City, is South Korea's second most-populous city after Seoul, with a population of over 3.5 million inhabitants. It is the economic, cultural and educational center of southeastern Korea, with its port—Korea's busiest and the fifth-busiest in the world [a]—only about 120 miles (190 km) from the Japanese islands of Kyushu and Honshu. The surrounding 'Southeast Economic Zone' (including Ulsan and South Gyeongsang) is South Korea's largest industrial area. "},
    {name:"Budapest",desc:""}
]
let exclusiveCountryDesc = [
    {name: "Croatia", desc:"Croatia can be divided into three Climatic regions. In the north are the Pannonian Plains, lowlands with a continental climate of cold winters and hot summers. Central Croatia consists of the mountainous Dinara Region, which is covered with large forests and has an alpine climate."},
    {name: "Greece", desc:"The climate of Greece is mediterranean with summers that are usually hot and dry, and the winters that can be quiet cold and wet. The upper part of Greece can be very cold during the winter and snow is not uncommon. However, for the south of Greece and the islands, the winters will be milder. During the winter much of Greece may have snow, and much snowfall can be expected in the higher mountains of Greece."},
    {name: "Italy", desc:"With its hot, dry summers and cool, wet winters, Italy experiences a mediterranean climate. Winters in Italy are cool and humid in the north and the mountainous zone. Sometimes cold air from northern Europe can spread south into Italy, bring snow to most mountains, while the coasts are kept warm by the high sea temperatures. Storms like the Mistral can bring snow and gales, sometimes even in southern districts of Italy."},
    {name: "Malta", desc:"Malta�s climate is strongly influenced by the sea and is typical of the Mediterranean. The Islands have a very sunny climate with a daily average of five to six hours sunshine in mid-winter to more than 12 hours in summer.Winters are mild, with the occasional short chilly period brought about by the north and north-easterly winds from central Europe. Summers are hot, dry and very sunny. Summer Temperatures ranges between 24°C in May and 32°C and more in August, which is the warmest month."},
    {name: "Norway", desc:"The climate of Norway is much milder than that of most other regions as far north, especially along the country's west coast. Snow that falls along the coast melts often immediately. The warm North Atlantic Current of the Gulf Stream keeps nearly all the seaports ice-free, even in the northern regions. During winter, Norway's inland regions are colder than the coast because mountains block the warm west winds from the sea."},
    {name: "PRC", desc:"China is a huge country, and has a great variety of climates. Winter is freezing cold in the north, in the mountains and the plateaus, while it's mild in the south; summer is hot everywhere, except in highlands and high mountains. If we exclude the vast western desert areas, where rainfall is scarce and irregular, summer is the rainiest season. The rainiest part of the country is the south-east, while the least rainy is the north-west. "},
    {name: "India", desc:"Indias climate can be classified as a hot tropical country, except the northern states of Himachal Pradesh and Jammu & Kashmir in the north and Sikkim in the northeastern hills, which have a cooler, more continental influenced climate."},
    {name: "Japan", desc:"Japan has four distinct seasons with a climate ranging from subarctic in the north to subtropical in the south. Conditions are different between the Pacific side and the Sea of Japan side Northern Japan has warm summers and very cold winters with heavy snow on the Sea of Japan side and in mountainous areas. Eastern Japan has hot and humid summers and cold winters with very heavy snow on the Sea of Japan side and in mountainous areas. Western Japan has very hot and humid summers (with temperatures sometimes reaching 35 oC or above) and moderate cold winters. Okinawa and Amami have a subtropical oceanic climate. These areas have hot and humid summers (with temperatures rarely reaching 35 oC or above) and mild winters."},
    {name: "South Korea", desc:"The climate of the Republic of Korea is cold but sunny in winter, while it’s hot and sultry, with abundant rainfall, in summer. Spring and autumn are quite short but pleasant. The latitude of the country is not high: the border with North Korea is located on the 38th parallel, but winter is cold because of the prevailing winds from Siberia. "},
    {name: "Russia", desc:"Climate Of course with an area the size of Russia, it is difficult to give any sort of general advice about the climate and weather except that summers are warm to hot, and winters get very cold in some areas. In general, the climate of Russia can be described as highly continental influenced climate with warm to hot dry summers and (very) cold winters with temperatures of -30°C and lower and sometimes heavy snowfall. sometimes very strong easterly winds, called Buran can occur, bringing freezing cold temperatures and snowstorms. Precipitation varies from region to region; the Western parts of Russia have the most rain (up to 750 mm), the southern and southeastern areas in the russian Steppes are the Dryest with an annual average below 200 mm."},
    {name: "Singapore", desc:"Due to its geographical location and maritime exposure, Singapore’s climate is characterised by uniform temperature and pressure, high humidity and abundant rainfall. The average temperature is between 25 degrees Celsius and 31 degrees Celsius. Thunderstorms occur on 40% of all days. Relative humidity is in the range of 70% – 80%. April is the warmest month, January is the coolest month and November is the wettest month."},
    {name: "Canada", desc:"Canada is a huge country, largely characterized by freezing winters: latitude and continentality, as well as the position of the mountain ranges, make it one of the coldest countries on Earth.The population distribution (the largest cities are located along the southern part of the country) and its scarcity (although Canada is one of the world's largest countries, it has approximately 35 million inhabitants) show how hard the environmental conditions are in much of the country, mainly because of the cold climate. Nevertheless, during the short summer, there may be some hot days, especially in the southern inland areas. "},
    {name: "Cuba", desc:"In Cuba, the climate is tropical, with a dry and relatively cool season from late November to mid-April, and a rainy and muggy season from late April to early November. The climate is fairly uniform from one area to the other, but there are some differences that are worth considering. "},
    {name: "Mexico", desc:"Mexico is a vast country and has different types of climate, however, it is generally arid on the west coast and in the central-northern highlands, it is moderately rainy in the mountain ranges and in the southern plateaus, while it's very rainy in some tropical southern areas. Summer is the rainiest season almost everywhere.  The temperature increases gradually from north to south, to the point that the south has a purely tropical climate. Altitude plays an important role as well: there are many cities located at high altitude, including the capital, where the climate is cooler. "},
    {name: "United States", desc:"Being a huge country, the contiguous United States is home to a wide variety of climates. However, in general it has a continental climate, with cold winters (often frigid) and hot summers (sometimes very hot), with a different season duration depending on latitude and distance from the sea. There are, however, some exceptions: on the west coast overlooking the Pacific Ocean, the climate is cool and damp in the northern part and Mediterranean in the southern part; on the coast of the Gulf of Mexico, the climate is mild in winter and hot and muggy in summer, while in Florida, it is almost tropical; the mountainous areas are cold in winter and cool to cold even in summer; and finally, there are deserts which are mild in winter and scorchingly hot in summer. "},
    {name: "New Zealand", desc:"In New Zealand, the climate is oceanic, mild in the north and cool in the south, and also windy and rainy, especially in the southern and western regions. The weather is often variable, and there can be sunshine and rain alternating in a few hours, as is typical of oceanic climates. In summer, it rarely gets hot, and in winter, it rarely gets very cold, except in the far south.  Rainfall is quite frequent throughout the year, but it is usually more frequent in winter than in summer, except in the extreme south (see Invercargill), where it is frequent even in summer. "},
]
let exclusiveCountry = [

    "Croatia", //
    "Greece", //
    "Italy", //
    "Malta", //
    "Norway",

 
    "PRC", //ina", //
    "India", //
    "Japan", //
    "South Korea", //
   
    "Russia", //
    "Singapore", //
 
    "Canada",//
    "Cuba", //
    "Mexico",//
    "United States",//
   
    "New Zealand",//
]

let groups = [
    {
        name:"portugalspain",
        countries:[
            "portugal", //
            "spain", //
        ]
    },
    {
        name:"unitedkingdom",
        countries: ["unitedkingdom", //
        "ireland",]
    },
    {name: "subsaharian",
    countries: ["angola",
    "burundi",
    "drcongo",
    "equatorialguinea",
    "gabon",
    "kenya",
    "nigeria",
    "rwanda",
    "saotomeandprincipe",
    "tanzania",
    "uganda",
    "djibouti",
    "somalia",
    "botswana",
    "comoros",
    "lesotho",
    "madagascar",
    "malawi",
    "mauritius",
    "mozambique",
    "namibia",
    "senegal",
    "seychelles",
    "southafrica",
    "swaziland",
    "zambia",
    "zimbabwe",
    "benin",
    "capeverde",
    "ivoryCoast",
    "cameroon",
    "centralafricanrepublic",
    "gambia",
    "ghana",
    "guinea",
    "guinea-Bissau",
    "liberia",
    "sierra Leone",
    "togo"],
desc: "The tropical savanna climate is also called the tropical wet and dry climate. It is the climate experienced in savanna or tropical grassland regions of the world. These places are located near the equator, and they lie between the Southern and the Northern Tropics. The climate dominates many parts of the African continent, the northern region of South America, and parts of Asia such as India. The tropical savanna climate has alternating dry and wet seasons, hence its name. It shares some similar characteristics with the tropical monsoon climate, but it receives less annual rainfall as compared to the tropical monsoon climate."}
    ,
    {
        name: "desert",
        countries: [
            "mauritania",
            "algeria",
            "libya",
            "egypt",
            "southsudan",
            "sudan",
            "chad",
            "niger",
            "mali",
            "burkina",
            "ethiopia",
            "eritrea",
            "saudiarabia",
            "yemen",
            "oman",
            "unitedarabemirates",
            "iran",
            "iraq",
            "israel",
            "morocco",
            "tunisia",
            "afghanistan",
            "pakistan",
            "qatar",
            "bahrain",
            "ayria",
            "jordan",
            "kuwait",
            "lebanon", //
        ],
        desc: "Deserts are areas where the rainfall is too low to sustain any vegetation at all, or only very scanty scrub. The rainfall in desert areas is less than 250 mm or 10 inches per year, and some years may experience no rainfall at all. The hot deserts are situated in the subtropical climate zone where there is unbroken sunshine for the whole year due to the stable descending air and high pressure."
    },

    {
        name:"europemountains",
        countries: [
            "switzerland",
        "france",
        "austria",
        ],
        desc: "This type of climate is heavily influenced by the Alps as well as by the Atlantic Ocean. Winters in the northern plateau are mild and damp, whereas higher altitudes experience arctic temperatures. At altitudes above 1200-1500 metres or so, precipitation in the winter falls mainly as snow. The south side of the Alps is strongly affected by the Mediterranean Sea, and so winters there are mild and the summers warm and humid, and sometimes hot."
    },
    {
        name: "europe",
        countries: [
            "albania",
            "andorra",
            "armenia",
            //
            "azerbaijan",
            "belarus",
            "belgium",
            "b&h",
            "bulgaria",
            "turkey", //
            "cyprus",
            "czechrepublic",
            "denmark",
            "estonia",
            
            "georgia",
            "germany",
    
            "hungary",
           
    
            "latvia",
            "liechtenstein",
            "lithuania",
            "luxembourg",
            "macedonia",
    
            "moldova",
            "monaco",
            "montenegro",
            "netherlands",
            "norway",
            "poland",
    
            "romania",
            "sanmarino",
            "serbia",
            "slovakia",
            "slovenia",
    
            
            "ukraine",
    
            "vaticancity",
        ],
        desc: "These zones generally have wider temperature ranges throughout the year and more distinct seasonal changes compared to tropical climates, where such variations are often small. They typically feature four distinct seasons, Summer the warmest, Autumn the transitioning season to Winter, the colder season, and Spring the transitioning season from winter back into summer. On the northern hemisphere the year starts with winter, transitions in the first halfyear through spring into summer which is in mid-year, then at the second halfyear through autumn into winter at year-end. "
    },
    
    {
        name: "mountains",
        countries: [
            "kazakhstan",
            "kyrgyzstan",
            "tajikistan",
            "turkmenistan",
            "mongolia",
    
            "uzbekistan",
            "bhutan",
            "nepal",
    
        ],
        desc: "Because Central Asia is not buffered by a large body of water, temperature fluctuations are severe, outside the sunny, hot summer months. In most areas the climate is dry and continental, with hot summers and cool to cold winters, with occasional snowfall. Outside high-elevation areas, the climate is mostly semi-arid to arid. In lower elevations, summers are hot with blazing sunshine. Winters feature occasional rain and/or snow from low-pressure systems that cross the area from the Mediterranean Sea. Average monthly precipitation is extremely low from July to September, rises in autumn (October and November) and is highest in March or April, followed by swift drying in May and June. Winds can be strong, producing dust storms sometimes, especially toward the end of the dry season in September and October. Specific cities that exemplify Central Asian climate patterns include Tashkent and Samarkand, Uzbekistan, Ashgabat, Turkmenistan, and Dushanbe, Tajikistan, the last of these representing one of the wettest climates in Central Asia, with an average annual precipitation of over 22 inches."
    },
    {
        name: "southeastasia",
        countries: [
            "burma",
            "cambodia",
            "vietnam",
            "thailand",
            "malaysia",
            "laos",
            "bangladesh",
        ],
        desc: "The region lies near the intersection of geological plates, with both heavy seismic and volcanic activities. The Sunda Plate is the main plate of the region, featuring almost all Southeast Asian countries except Myanmar, northern Thailand, northern Laos, northern Vietnam, and northern Luzon of the Philippines. The mountain ranges in Myanmar, Thailand, and peninsular Malaysia are part of the Alpide belt, while the islands of the Philippines are part of the Pacific Ring of Fire. Both seismic belts meet in Indonesia, causing the region to have relatively high occurrences of earthquakes and volcanic eruptions."
    },

    {
        name: "tropical",
        countries: ["belize",
        "costarica",
        "elsalvador",
        "ecuador",
        "guatemala",
        "honduras",
        "nicaragua",
        "panama",
        "saintkittsandnevis",
        "saintlucia",
        "saintvincentandthegrenadines",
        "trinidadandtobago",
        "grenada",
        "antiguaandbarbuda",
        "bahamas",
        "barbados",
        "dominica",
        "dominicanrepublic",
        "haiti",//
        "jamaica"],
        desc: "In tropical climates there are often only two seasons: a wet season and a dry season. Tropical climates are frost-free, and changes in the solar angle are small. In tropical climates, the temperature remains relatively constant (hot) throughout the year. Sunlight is intense. Because of the effect of sun angle on climate most areas within the tropics are hot year-round, with diurnal variations in temperature exceeding seasonal variations. "
    },
    {
        name:"oceania",
        countries:[
            "australia",//
        "fiji",
        "liribati",
        "marshallislands",
        "micronesia",
        "nauru",
        "palau",
        "papuanewguinea",
        "samoa",
        "solomonislands",
        "tonga",
        "tuvalu",
        "vanuatu",
        "brunei",
        "indonesia",
        "easttimor",
        "maldives",
        "philippines",
        "srilanka",
        ],
        desc: "Oceania is generally hot and humid year-round. The islands have no true winter or summer, but many areas experience seasonal changes in winds, ocean currents, and rainfall. Low islands are at the mercy of the winds, which can bring enough rain to create lush forests on some islands while leaving others dry wastelands. Most Oceanians live in parts of the western Pacific where rainfall exceeds 80 inches (200 centimeters) per year."
    },
    {
        name:"southamerica",
        countries: [
            "argentina",
            "bolivia",
            "brazil",
            "chile",
            "colombia",
            "guyana",
            "paraguay",
            "peru",
            "suriname",
            "uruguay",
            "venezuela"
        ],
        desc: "South America extends over a wide latitudinal range, thus encompassing a great variety of climates. South America’s broadest extent is in the equatorial zone, so that tropical conditions prevail over more than half of the continent."
    },
    {
        name:"cold",
        countries:[
            "greenland",
            "sweden",
            "finland",
            "iceland",
        ],
        desc: "is a climate characterised by long, usually very cold winters, and short, cool to mild summers. It is found on large landmasses, away from the moderating effects of an ocean, generally at latitudes from 50° to 70°N poleward of the humid continental climates. Some northern areas with subarctic climates located near oceans (southern Alaska, the northern fringe of Europe, Sakhalin Oblast and Kamchatka Oblast), have milder winters and no permafrost, and are more suited for farming unless precipitation is excessive."
    }

    

]
module.exports = {exclusiveCity, groups, exclusiveCountry, exclusiveCityDesc, exclusiveCountryDesc}