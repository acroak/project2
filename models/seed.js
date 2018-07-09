let seedPlants = [
  {
    name: "Golden Pothos",
    sciname: "Scindapsus aureus",
    img:"https://images-na.ssl-images-amazon.com/images/I/51i6xDKSQKL._SL500_AC_SS350_.jpg",
    diff: "1",
    sun: ["partial sun", "full shade"],
    tags:["house plant", "vine", "easy"],
    poisonous: true,
    description:["Pothos is a low light lover that makes a good entry point into growing houseplants. It handles a wide range of conditions and still performs well. Ideally it should have low to moderate light, and should dry out between waterings. It is fast-growing and has striking variegated leaves"]
  },
  {
    name: "Philodendron",
    sciname: "Philodendron hederaceum",
    img:"https://images-na.ssl-images-amazon.com/images/I/61Q69PrXVxL._SX355_.jpg",
    diff: 1,
    sun: ["partial sun", "full shade"],
    tags:["house plant","vine", "easy"],
    poisonous: true,
    description:["Heart-leaf philodendron is a fast-growing houseplant, with deep green heart-shaped leaves. It prefers to be kept dry between waterings. Some forms trail, or can easily be trained to a post or \"totem.\" Others have larger leaves and a bushy habit."]
  },
  {
    name: "Spider Plant",
    sciname: "Chlorophytum comosum",
    img:"https://images.homedepot-static.com/productImages/b14b6033-fbf3-40c8-94fc-9c49217980e9/svn/nearly-natural-artificial-foliage-topiaries-6846-64_1000.jpg",
    diff: 1,
    sun: ["partial shade","full shade" ],
    tags:["house plant", "annual", "easy"],
    poisonous: false,
    description:["Probably the most cultivated houseplant in the world, this variety is grown primarily for its interesting foliage; great for containers, or cascading from hanging baskets; tolerates drought and deep shade, but perfers bright indirect sun"]
  },
  {
    name: "String of Pearls",
    sciname: "Senecio rowleyanus",
    img:"https://i1.wp.com/sublimesucculents.com/wp-content/uploads/2018/01/iwantthat.jpg?fit=1000%2C882&ssl=1",
    diff: 2,
    sun: ["full sun","partial shade" ],
    tags:["succulent", "perennial", "house plant", "moderate"],
    poisonous: false,
    description:["String of pearls does well in bright light. Consider placing it on a sunny windowsill or, if bright sunlight is limited, leave it under a fluorescent light during daylight hours.Make sure there’s plenty of room for your plant to sprawl. Consider displaying it in a hanging basket so tendrils can cascade downwards."]
  },
  {
    name: "English Ivy",
    sciname: "Hedera Helix",
    img:"https://i5.walmartimages.com/asr/e41b6ded-0128-4715-9ae0-375ec03afec0_1.8ce346c06e1ec31fc119f8fbd9221446.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    diff: 2,
    sun: ["partial sun","full shade" ],
    tags:["house plant", "perennial", "vine", "easy"],
    description:["English Ivy houseplants thrive in an environment of bright filtered to low light. They prefer an evenly moist environment. Water the plants freely during growth. Keep English Ivy houseplants moist in the winter. Spraying English Ivy with soft water weekly will help prevent spider mites from infesting the plants."]
  },
  {
    name: "ZZ Plant",
    sciname: "Zamioculcas Zamifolia",
    img:"https://cdn-image.realsimple.com/sites/default/files/styles/portrait_435x518/public/1508177728/zz-plant.jpg?itok=8txWnFE1",
    diff: 2,
    sun: ["partial sun","full shade" ],
    tags:["drought resistent", "perennial", "house plant", "easy"],
    poisonous: true,
    description:["They’re related to peace lilies, but ZZ plants are better known for their thick, glossy leaves than for their (infrequently appearing) flowers. These plants are slow growing, but long-lived if given good care. They like to dry out between waterings"]
  },
  {
    name: "Jade Plant",
    sciname: "Crassula ovata",
    img:"https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/jade-planting-growing.jpg?itok=ZqJeFCA7",
    diff: 2,
    sun: ["full sun" ],
    tags:["succulent", "house plant", "easy"],
    poisonous: true,
    description:["Never let a jade plant dry out completely. But also, do not water a jade plant too often, as this can cause root rot. They need full sun in order to grow properly. If they do not have full sun, they may become stunted and leggy."]
  },
  {
    name: "Scarlet Star Bromeliad",
    sciname: "Guzmania lingulata",
    img:"http://www.blumen.at/_pic/prod/guzmania_xl.jpg",
    diff: 3,
    sun: ["partial shade", "full shade", "colorful" ],
    poisonous: false,
    tags:["Bromeliad", "house plant", "moderate"],
    description:[""]
  },
  {
    name: "Snake Plant",
    sciname: "Sansevieria Trifasciata 'Laurentii'",
    img:"https://i.pinimg.com/originals/af/2a/fd/af2afd120611d12346bf8c5e712e78fc.jpg",
    diff: 2,
    sun: ["full sun", "full shade", "partial sun", "partial shade" ],
    tags:["succulent", "house plant", "easy", "drought resistant", "colorful"],
    poisonous: true,
    description:["The snake plant, also known as mother-in-law's tongue or ribbon plant (Sansevieria), is a succulent with thick, waxy leaves. It loves being potbound and thrives on being ignored — the perfect plant for two-week vacationers."]
  },
  {
    name: "Peace Lily",
    sciname: "Spathiphyllum 'Mauna Loa'",
    img:"https://cdn.shopify.com/s/files/1/1764/4293/products/22574a_White-Calla-Lily_530x.jpg?v=1503032439",
    diff: 3,
    sun: ["partial shade" , "full shade"],
    tags:["house plant", "pernnial", "moderate", "colorful"],
    poisonous: true,
    description:["Peace lily prefers moderate to low light and consistently moist soil. It reblooms several times a year, even with low light conditions."]
  },
  {
    name: "Dracaena",
    sciname: "Dracaena reflexa",
    img:"https://www.ikea.com/my/en/images/products/dracaena-reflexa-anita-potted-plant__0548618_PE657297_S4.JPG",
    diff: 2,
    sun: ["partial shade", "full shade" ],
    tags:["easy", "house plant"],
    poisonous: true,
    description:["Filtered indoor light (such as through a sheer curtain in front of a sunny window) or a semi-shade spot is an ideal location. Never place a dracaena plant in direct sun, as the rays will scorch its foliage. Dracaena require less water than most indoor plants. Keep them hydrated by misting the leaves with water and keeping the soil lightly misted (never soggy) as well with good drainage. Always allow the top soil to dry out before watering. "]
  },
  {
    name: "Lucky Bamboo",
    sciname: "Dracaena braunii",
    img:"https://cdn3.volusion.com/tbnam.coblu/v/vspfiles/photos/T100-2A-2.jpg",
    diff: 3,
    sun: ["partial sun", "partial shade" ],
    tags:["house plant", "easy"],
    poisonous: false,
    description:["This popular housewarming gift is often received growing in water only. It can remain that way, only change the water weekly. If you prefer, plant it in soil and keep it evenly moist. Low to medium light works well."]
  },
  {
    name: "Hoya",
    sciname: "Hoya carnosa ‘Rubra'",
    img:"http://cdn.shopify.com/s/files/1/0662/5489/products/Hoya_Obovata_-_pistils_nursery_grande.jpg?v=1480096388",
    diff: 3,
    sun: ["partial sun", "partial shade" ],
    tags:["house plant", "vine", "moderate"],
    poisonous: false,
    description:["A fairly bright room or bright with plenty of shade is best. Direct sunlight will damage the leaves and not enough light can slow growth down. Between watering times allow the soil to become dry to the touch within the top couple of inches or so of soil."]
  },
  {
    name: "Baby Rubber Tree Plant",
    sciname: "Peperomia Obtusifolia",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQyFt1U91A27ApDXB6CQ9Mgx8rZGDzjBhyukhBhZWcFK9ij2OOg",
    diff: 4,
    sun: ["partial sun", "partial shade" ],
    tags:["difficult", "house plant"],
    poisonous: false,
    description:["Peperomia plants grow well in the bright indirect light provided by a west or east-facing window. These plants even grow under fluorescent lights. Allow the top 50% of the soil to dry out before you water. Over-watering, resulting in root-rot, is the main cause of serious peperomia plant problems. It’s best to water these plants from the bottom. "]
  },
  {
    name: "Aloe",
    sciname: "Aloe Vera",
    img:"https://www.ikea.com/us/en/images/products/aloe-vera-potted-plant__0173210_PE327299_S4.JPG",
    diff: 1,
    sun: ["full sun" ],
    tags:["succulent", "houseplant", "drought resistant", "easy"],
    poisonous: true,
    description:["Aloe (Aloe vera) is best known for its plump leaves that can provide a soothing gel for cuts and burns. Allow the plant's soil to dry completely in between waterings; depending on the humidity of your home, that may mean watering as little as every two to three weeks."]
  },
  {
    name: "Prayer Plant",
    sciname: "Maranta leuconeura",
    img:"https://cdn.shopify.com/s/files/1/0662/5489/products/Ctenanthe_burle-marxii_-_pistils_nursery.jpg?v=1518558553",
    diff: 2,
    sun: ["partial sun", "partial shade", "full shade" ],
    tags:["vine", "easy", "house plant", "colorful"],
    poisonous: false,
    description:["Grow prayer plant in low, medium, or bright light. In bright light, it's best to protect the leaves from direct sun by using a sheer curtain or other filter. Water prayer plant just before the soil surface dries. This hardy indoor plant is likes to stay relatively moist (but not sopping wet all the time). Its leaves can start to turn brown if it dries out too much or too often.  "]
  },
  {
    name: "Dill",
    sciname: "Anethum graveolens",
    img:"https://thumbs.dreamstime.com/b/fresh-dill-pot-9713496.jpg",
    diff: 4,
    sun: ["full sun" ],
    tags:["annual", "herb", "moderate", "cooking"],
    poisonous: false,
    description:["This variety is frequently grown for both its ornamental attributes, and as a culinary herb; yellow and white lacecap flowers hover over fine, lacy, aromatic foliage; a nice accent for the garden and great for containers"]
  },
  {
    name: "Cilantro",
    sciname: "Coriandrum sativum",
    img:"https://pixfeeds.com/images/herbs-spices/1280-115812527-cilantro-in-pot.jpg",
    diff: 4,
    sun: ["full sun", "partial shade" ],
    tags:["annual", "herb", "moderate", "cooking"],
    poisonous: false,
    description:["Commonly grown in herb gardens for its strong scented foliage and aromatic seeds; remove flower heads to prolong harvest of leaves; dislikes hot summers and humidity"]
  },
  {
    name: "Chamomile",
    sciname: "Matricaria recutita",
    img:"https://thumbs.dreamstime.com/b/chamomile-flowers-pot-isolated-white-51613842.jpg",
    diff: 5,
    sun: ["full sun", "partial shade" ],
    tags:["perennial", "herb", "tea", "difficult"],
    poisonous: false,
    description:["Chamomile is a perennial herb that is typically grown for its edible qualities, although it does have ornamental merits as well. It produces white flowers which are harvested from mid spring to mid summer. The flowers have an earthy taste."]
  },
  {
    name: "Mojito",
    sciname: "Mentha x villosa 'Mojito'",
    img:"https://www.jungseed.com/PIF/12266/JungSeed.jpg",
    diff: 4,
    sun: ["full sun", "partial shade" ],
    tags:["moderate", "herb", "perennial", "cooking"],
    poisonous: false,
    description:["This variety is grown primarily for its less pungent, sweet flavored foliage that is popular in drinks and as a food seasoning; a great container plant, and it is suggested that planting within a pot in the ground will curtail invasiveness"]
  },
  {
    name: "Sweet Basil",
    sciname: "Ocimum basilicum",
    img:"https://www.rainshadowlabs.com/thumbnail.asp?file=assets/images/eos/sweet%20basil%20eo.jpg&maxx=450&maxy=0",
    diff: 3,
    sun: ["full sun", "partial sun"],
    tags:["moderate", "annual", "cooking", "herb" ],
    poisonous: false,
    description:["Sweet Basil is an annual herb that is commonly grown for its edible qualities. The fragrant oval light green leaves are usually harvested from early summer to early fall. The leaves have a potent taste."]
  },
  {
    name: "Curly Parsley",
    sciname: "Petroselinum crispum 'var. crispum'",
    img:"https://freshproducegroup.us/wp-content/uploads/2017/01/CURLY-PARSLEY-FRESH-PRODUCE-GROUP-LLC.jpg",
    diff: 4,
    sun: ["full sun" ],
    tags:["moderate", "annual", "cooking", "herb" ],
    poisonous: false,
    description:["This variety produces aromatic, dense curled foliage that is deep green; use in soups, salads or as a garnish; requires a well prepared fertilized soil and even moisture"]
  },
  {
    name: "Italian Parsley",
    sciname: "Petroselinum crispum 'var. neapolitanum'",
    img:"https://www.melissas.com/v/vspfiles/photos/702-2T.jpg",
    diff: 4,
    sun: ["full sun" ],
    tags:["moderate", "annual", "cooking", "herb" ],
    poisonous: false,
    description:["An upright parsley producing large, flat, open medium green leaves; requires a well prepared fertilized soil and even moisture; if it flowers, the leaves are inedible; pinch blooms to promote foliage"]
  },
  {
    name: "Common Thyme",
    sciname: "Thymus vulgaris",
    img:"http://herbspice.guide/wp-content/uploads/2015/05/Thyme-06.jpg",
    diff: 4,
    sun: ["full sun" ],
    tags:["moderate", "herb", "perennial", "cooking"],
    poisonous: false,
    description:["Common Thyme is a perennial herb that is commonly grown for its edible qualities, although it does have ornamental merits as well. The tiny fragrant round grayish green leaves can be harvested at any time in the season. The leaves have a savory taste and a pleasant fragrance."]
  },
  {
    name: "Hidcote Lavender",
    sciname: "Lavandula angustifolia 'Hidcote'",
    img:"https://www.pavilionbroadway.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/i/sia_lavender_pot_purple_height_70cm.jpg",
    diff: 5,
    sun: ["full" ],
    tags:["perennial", "herb", "tea"],
    poisonous: false,
    description:["Hidcote Lavender has masses of beautiful spikes of fragrant purple flowers rising above the foliage from early to late summer, which are most effective when planted in groupings. The flowers are excellent for cutting. It has attractive grayish green foliage. The fragrant needles are highly ornamental and turn coppery-bronze in fall. The fruit is not ornamentally significant."]
  }

];

module.exports = seedPlants;
