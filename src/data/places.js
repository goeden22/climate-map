
let places = [
    {
        country: "Norway",
        city: "Oslo",
        coords: {
            lat: 59.9133301,
            lng: 10.7389701
        },
        desc: "Oslo, formerly (1624–1877) Christiania or (1877–1925) Kristiania, capital and largest city of Norway. It lies at the head of Oslo Fjord in the southeastern part of the country. The original site of Oslo was east of the Aker River. The city was founded by King Harald Hardraade about 1050, and about 1300 the Akershus fortress was built by Haakon V. After the city was destroyed by fire in 1624, Christian IV of Denmark-Norway built a new town farther west, under the walls of the Akershus fortress, and called it Christiania. The growth of Christiania’s population in the 19th century was due in part to the absorption of surrounding municipalities, and the city replaced its rival, the west-coast port of Bergen, as Norway’s largest and most influential city."
    },
    {
        country: "Italy",
        city: "Venice",
        coords: {
            lat: 45.4371908,
            lng: 12.3345898
        },
        desc: "Venice is a city in northeastern Italy and the capital of the Veneto region. It is situated on a group of 118 small islands that are separated by canals and linked by over 400 bridges. The islands are located in the shallow Venetian Lagoon, an enclosed bay that lies between the mouths of the Po and the Piave rivers (more exactly between the Brenta and the Sile). In 2018, 260,897 people resided in the Comune di Venezia, of whom around 55,000 live in the historical city of Venice (centro storico). Together with Padua and Treviso, the city is included in the Padua-Treviso-Venice Metropolitan Area (PATREVE), which is considered a statistical metropolitan area, with a total population of 2.6 million."
    },
    {
        country: "United States",
        city: "New York",
        coords: {
            lat: 40.7308619,
            lng: -73.9871558
        },
        desc:"The City of New York, usually called either New York City (NYC) or simply New York (NY), is the most populous city in the United States. With an estimated 2018 population of 8,398,748 distributed over a land area of about 302.6 square miles (784 km2), New York is also the most densely populated major city in the United States.  Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass  and one of the world's most populous megacities."
    },
    {
        country: "Russia",
        city: "Moscow",
        coords: {
            lat: 55.7504461,
            lng: 37.6174943
        },
        desc: "Moscow is the major political, economic, cultural, and scientific center of Russia and Eastern Europe, as well as the largest city (both by population and by area) entirely on the European continent. By broader definitions, Moscow is among the world's largest cities, being the 14th largest metro area, the 18th largest agglomeration, the 14th largest urban area, and the 11th largest by population within city limits worldwide. According to Forbes 2013, Moscow has been ranked as the ninth most expensive city in the world by Mercer and has one of the world's largest urban economies, being ranked as an alpha global city according to the Globalization and World Cities Research Network, and is also one of the fastest growing tourist destinations in the world according to the MasterCard Global Destination Cities Index. "},
    {
        country: "Lebanon",
        city: "Mussaitbeh",
        coords: {
            lat: 33.888630,
            lng: 35.495480
        }, desc: "Beirut is the capital and largest city of Lebanon. No recent population census has been conducted, but 2007 estimates ranged from slightly more than 1 million to 2.2 million as part of Greater Beirut. Located on a peninsula at the midpoint of Lebanon's Mediterranean coast, Beirut is the country's largest and main seaport. It is one of the oldest cities in the world, having been inhabited for more than 5,000 years. The first historical mention of Beirut is found in the Amarna letters from the New Kingdom of Egypt, which date to the 15th century BC."
    },
    {
        country: "Japan",
        city: "Kyoto",
        coords: {
            lat: 35.0231321,
            lng: 135.7634074
        },
        desc:"Kyoto, located in the Kansai region of Japan, is the country's seventh largest city, with a population of 1.4 million people.  Steeped in history, Kyoto is home to roughly one quarter of Japan's national treasures, countless shrines and temples, and seventeen sites recognized by UNESCO as World Heritage Sites. Travelers to Kyoto can easily spend a week visiting the city's historical attractions such as the Kyoto Imperial Palace, Kinkakuji (Golden Pavilion), and Sanjusangendo. "
    },
    {
        country: "New Zealand",
        city: "Queenstown",
        coords: {
            lat: -45.0317203,
            lng: 168.6608096
        },
        desc: "Queenstown is a resort town in Otago in the south-west of New Zealand's South Island. It has an urban population of 15,850 (June 2018), making it the 27th-largest urban area in New Zealand. In 2016, Queenstown overtook Oamaru to become the second-largest urban area in Otago, behind Dunedin."
    },
    {
        country: "Cuba",
        city: "Havana",
        coords: {
            lat: 23.135305,
            lng: -82.3589631
        },
        desc: "Havana is the capital city, largest city, province, major port, and leading commercial center of Cuba The city has a population of 2.1 million inhabitants, and it spans a total of 781.58 km2 (301.77 sq mi) – making it the largest city by area, the most populous city, and the fourth largest metropolitan area in the Caribbean region."
    },
    {
        country: "India",
        city: "Jaipur",
        coords: {
            lat: 26.916194,
            lng: 75.820349
        },
        desc:"Jaipur is the capital and the largest city of the Indian state of Rajasthan. As of 2011, the city had a population of 3.1 million, making it the tenth most populous city in the country. Jaipur is also known as the Pink City, due to the dominant color scheme of its buildings. It is located 268 km (167 miles) from the national capital New Delhi. Jaipur was founded in 1727 by the Rajput ruler Jai Singh II, the ruler of Amer, after whom the city is named. It was one of the earliest planned cities of modern India, designed by Vidyadhar Bhattacharya. During the British Colonial period, the city served as the capital of Jaipur State. After independence in 1947, Jaipur was made capital of the newly-formed state of Rajasthan."
    },
    {
        country: "PRC",
        city: "Shanghai",
        coords: { lat: 31.2253441, lng: 121.4888922 },
        desc:"Shanghai is one of the four municipalities under the direct administration of the central government of the People's Republic of China, the most populous city in China, and the most populous city proper in the world, with a population of 26.3 million as of 2019. It is a global financial center and transport hub, with the world's busiest container port. Located in the Yangtze River Delta, it sits on the south edge of the estuary of the Yangtze in the middle portion of the Eastern China coast. The municipality borders the provinces of Jiangsuand Zhejiang to the south, east and west, and is bound to the east by the East China Sea."
    },
    {
        country: "Hungary",
        city: "Budapest",
        coords: { lat: 47.4983815, lng: 19.0404707 },
        desc: "Budapest is the capital and the most populous city of Hungary, and the tenth-largest city in the European Union by population within city limits. The city had an estimated population of 1,752,286 in 2019 distributed over a land area of about 525 square kilometres (203 square miles). Budapest is both a city and county, and forms the centre of the Budapest metropolitan area, which has an area of 7,626 square kilometres (2,944 square miles) and a population of 3,303,786, comprising 33 percent of the population of Hungary."
    },
    {
        country: "Canada",
        city: "Quebec",
        coords: { lat: 46.8259601, lng: -71.2352226 },
        desc:"is one of the thirteen provinces and territories of Canada. It is bordered to the west by the province of Ontario and the bodies of water James Bay and Hudson Bay; to the north by Hudson Strait and Ungava Bay; to the east by the Gulf of Saint Lawrence and the province of Newfoundland and Labrador; and to the south by the province of New Brunswick and the US statesof Maine, New Hampshire, Vermont, and New York. It also shares maritime borders with Nunavut, Prince Edward Island, and Nova Scotia. Quebec is Canada's largest province by area and its second-largest administrative division; only the territory of Nunavut is larger. "
    },
    {
        country: "Portugal",
        city: "Lisbon",
        coords: { lat: 38.7077507, lng: -9.1365919 },
        desc:"Lisbon is the capital and the largest city of Portugal. With an estimated population of 505,526 within its administrative limits in an area of 100.05 km2, Lisbon's urban area extends beyond the city's administrative limits with a population of around 2.8 million people, being the 11th-most populous urban area in the European Union. About 3 million people live in the Lisbon metropolitan area, including the Portuguese Riviera, (which represents approximately 27% of the country's population). It is mainland Europe's westernmost capital city and the only one along the Atlantic coast. Lisbon lies in the western Iberian Peninsula on the Atlantic Ocean and the River Tagus."
    },
    {
        country: "South Korea",
        city: "Busan",
        coords: { lat: 35.1799528, lng: 129.0752365 },
        desc:"Busan, formerly Romanized as Pusan and now officially Busan Metropolitan City, is South Korea's second most-populous city after Seoul, with a population of over 3.5 million inhabitants. It is the economic, cultural and educational center of southeastern Korea, with its port—Korea's busiest and the fifth-busiest in the world [a]—only about 120 miles (190 km) from the Japanese islands of Kyushu and Honshu. The surrounding 'Southeast Economic Zone' (including Ulsan and South Gyeongsang) is South Korea's largest industrial area. "
    },
    {
        country: "Croatia",
        city: "Dubrovnik",
        coords: { lat: 42.6499638, lng: 18.0936953 },
        desc: "Dubrovnik is a city on the Adriatic Sea in southern Croatia. It is one of the most prominent tourist destinations in the Mediterranean Sea, a seaport and the centre of Dubrovnik-Neretva County. Its total population is 42,615 (census 2011). In 1979, the city of Dubrovnik joined the UNESCO list of World Heritage sites. The prosperity of the city was historically based on maritime trade; as the capital of the maritime Republic of Ragusa, it achieved a high level of development, particularly during the 15th and 16th centuries, as it became notable for its wealth and skilled diplomacy."
    },
]
module.exports = { places }

