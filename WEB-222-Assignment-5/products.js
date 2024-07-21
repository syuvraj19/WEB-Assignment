const products = [
  {
    id: "S1",
    sneakername: "Nike Dunk High Syracuse",
    sneakerdesc:
      "Dressed in a White and Orange Blaze color scheme. This Nike Dunk High will look exactly like the original featuring an all-leather design decked out in the New York University's team colors with a White base, Orange overlays and rubber outsole.",
    sneakerprice: 769.99,
    discontinued: false,
    category: ["cat1"],
    img:"images/S1.webp"
  },
  {
    id: "S2",
    sneakername: "Nike Dunk SB High Oceanic Airlines",
    sneakerdesc:
      "Danger, death and madness lurk around every corner of this dark and horrific world, and you must discover its darkest secrets in order to survive.",
    sneakerprice: 1199.99,
    discontinued: false,
    category: ["cat1"],
    img:"images/S2.webp"
  },
  {
    id: "S3",
    sneakername: "Reebok Answer IV The Tunnel",
    sneakerdesc:
      "Reebok paid homage to one of Allen Iverson's most well-known pre-game outfits from the 2001 NBA Finals with the Reebok Answer IV The Tunnel.",
    sneakerprice: 349.99,
    discontinued: false,
    category: ["cat1"],
    img:"images/S3.webp"
  },
  {
    id: "S4",
    sneakername: "Jordan 2 Retro SP Maison Chateau Rouge",
    sneakerdesc:
      "In collaboration with Paris-based boutique and fashion label Maison Château Rouge, the Air Jordan 2 Maison Château Rouge celebrates global youth culture with its playful palette and unique detailing.",
    sneakerprice: 339.99,
    discontinued: true,
    category: ["cat1"],
    img:"images/S4.jpeg"
  },
  {
    id: "S5",
    sneakername: "Reebok Pump Omni Zone II Celtics",
    sneakerdesc:
      "This innovative model was designed to provide players with a custom-fit feel and unparalleled support on the court.",
    sneakerprice: 329.99,
    discontinued: false,
    category: ["cat1"],
    img:"images/S5.png"
  },
  {
    id: "S6",
    sneakername: "Jordan 2 Retro SP Union Grey Fog",
    sneakerdesc:
      "The Air Jordan 1 Union LA Grey Fog features a grey canvas upper with matching perforated suede overlays and mudguards",
    sneakerprice: 450.99,
    discontinued: true,
    category: ["cat1"],
    img:"images/S6.webp"
  },
  {
    id: "S7",
    sneakername: "Reebok Question Mid Undefeated (2006)",
    sneakerdesc:
      "The Undefeated x Reebok Question Mid dropped in 2006, ten years following the debut of Allen Iverson’s first signature shoe. ",
    sneakerprice: 849.99,
    discontinued: false,
    category: ["cat1"],
    img:"images/S7.webp"
  },
  {
    id: "S8",
    sneakername: "Jordan 1 Retro High YOTS",
    sneakerdesc:
      "this Air Jordan 1 Retro High, which features a rapid-fire mix of punchy colorways using patent leather, nubucks, and synthetic leathers.",
    sneakerprice: 2239.99,
    discontinued: false,
    category: ["cat1", "cat5"],
    img:"images/S8.webp"
  },
  {
    id: "S9",
    sneakername: "Jordan 4 Retro Infrared",
    sneakerdesc:
      "The Air Jordan 4 Infrared features a tonal grey Durabuck upper with black TPU mesh inserts, tech straps, and heel tabs.",
    sneakerprice: 350.99,
    discontinued: false,
    category: ["cat2"],
    img:"images/S9.webp"
  },
  {
    id: "S10",
    sneakername: "Jordan 1 Mid Sonics (2021)",
    sneakerdesc:
      "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom.",
    sneakerprice: 349.99,
    discontinued: false,
    category: ["cat2"],
    img:"images/S10.webp"
  },
  {
    id: "S11",
    sneakername: "Jordan 5 Retro Satin Bred",
    sneakerdesc:
      "This one-of-a-kind Jordan is sporting an all-black satin upper, a red midsole with black accents, and a translucent sole. ",
    sneakerprice: 449.99,
    discontinued: true,
    category: ["cat2"],
    img:"images/S11.jpeg"
  },
  {
    id: "S12",
    sneakername: "Jordan 5 Retro Bel-Air",
    sneakerdesc:
      "The classic mid-top sports a white leather upper mounted atop a contrasting purple midsole with visible Air cushioning",
    sneakerprice: 744.99,
    discontinued: true,
    category: ["cat2"],
    img:"images/S12.webp"
  },
  {
    id: "S13",
    sneakername: "Jordan 4 Retro Military Black",
    sneakerdesc:
      "Jordan Brand flipped one of its original Air Jordan 4 colorways for the Air Jordan 4 Military Black.",
    sneakerprice: 380.99,
    discontinued: true,
    category: ["cat2"],
    img:"images/S13.webp"
  },
  {
    id: "S14",
    sneakername: "Adidas Yeezy Boost 350 V2 Yeezreel (Reflective)",
    sneakerdesc:
      "Following its non-reflective counterpart, Yeezy released the adidas Yeezy 350 Yeezreel Reflective, now available on StockX.",
    sneakerprice: 529.99,
    discontinued: false,
    category: ["cat2"],
    img:"images/S14.webp"
  },
  {
    id: "S15",
    sneakername: "Adidas Yeezy Boost 350 V2 Trfrm",
    sneakerdesc:
      "Get a Yeezy 350 in its truest form and grab the adidas Yeezy Boost 350 V2 Trfrm. This Yeezy Boost 350 comes with a grey upper plus orange accents, translucent stripe with orange accents, grey midsole with orange accents, and a grey sole. ",
    sneakerprice: 534.99,
    discontinued: false,
    category: ["cat2"],
    img:"images/S15.webp"
  },
  {
    id: "S16",
    sneakername: "Adidas Yeezy 500 Granite",
    sneakerdesc:
      "Composed of tonal grey mesh, suede, and leather, the adidas Yeezy 500 Granite offers a monochromatic styling similar to the early Yeezy 500s of 2018. ",
    sneakerprice: 229.99,
    discontinued: true,
    category: ["cat2"],
    img:"images/S16.webp"
  },
  {
    id: "S17",
    sneakername: "Jordan 4 Retro Levi's Black (Levi's Tag)",
    sneakerdesc:
      "Combining two of the most recognizable brands in the world, Jordan and Levi's came together to execute this beautiful Levi’s x Air Jordan 4 Black. ",
    sneakerprice: 1100.99,
    discontinued: false,
    category: ["cat2"],
    img:"images/S17.webp"
  },
  {
    id: "S18",
    sneakername: "New Balance 990v4 Stussy Cream",
    sneakerdesc:
      "This New Balance 990v4 was made in collaboration with streetwear label, Stussy. Nicknamed the 'Cream' edition, they come in a clean cream and white colorway.",
    sneakerprice: 1111.99,
    discontinued: true,
    category: ["cat3"],
    img:"images/S18.webp"
  },
  {
    id: "S19",
    sneakername: "Nike Dunk Low Un-Tiffany",
    sneakerdesc:
      "The sneakers feature a Black suede upper trimmed in Tiffany Blue on its toe box, lining, swoosh and outsole.",
    sneakerprice: 2159.99,
    discontinued: false,
    category: ["cat3", "cat5"],
    img:"images/S19.webp"
  },
  {
    id: "S20",
    sneakername: "Jordan 1 Low Bred Toe",
    sneakerdesc:
      "The Jordan 1 Low Bred Toe takes cues from the 2018 Air Jordan 1 High Bred Toe with its signature black and red color blocking.",
    sneakerprice: 254.99,
    discontinued: false,
    category: ["cat3"],
    img:"images/S20.webp"
  },
  {
    id: "S21",
    sneakername: "Adidas Yeezy Boost 350 V2 Zebra (2017/2022)",
    sneakerdesc:
      "Debuted in 2017, the adidas Yeezy Boost 350 V2 Zebra is known as one of the most renowned colorways in the Yeezy line",
    sneakerprice: 364.99,
    discontinued: false,
    category: ["cat3"],
    img:"images/S15.webp"
  },
  {
    id: "S22",
    sneakername: "Nike SB Dunk Low VX1000",
    sneakerdesc:
      "A faded black tone then interrupts and baptizes the tongues, laces and back overlay, while a hint of teal backdrops the branded heel embroidery.",
    sneakerprice: 649.99,
    discontinued: true,
    category: ["cat3"],
    img:"images/S22.webp"
  },
  {
    id: "S23",
    sneakername: "Nike Dunk Low Jackie Robinson",
    sneakerdesc:
      "In 1948, Jackie Robinson broke the color barrier in baseball when he stepped onto the field for the Brooklyn Dodgers in his MLB debut. ",
    sneakerprice: 449.99,
    discontinued: false,
    category: ["cat3"],
    img:"images/S23.jpeg"
  },
  {
    id: "S24",
    sneakername: "Nike Dunk Low Retro White Black Panda (2021)",
    sneakerdesc:
      "From the school-spirited College Colors Program to the vibrant Nike CO.JP collection, Nike Dunks have seen many colorways since the design’s inception in 1985. ",
    sneakerprice: 334.99,
    discontinued: false,
    category: ["cat3"],
    img:"images/S24.webp"
  },
  {
    id: "S25",
    sneakername: "New Balance Test Run 3.0 Salehe Bembury Finders Keepers",
    sneakerdesc:
      "Run Project 3 “Finders Keepers” boasts a wild outfit comprising cheetah printed underlays, grey suede toe cap overlays, and orange webbing with a fingerprint-inspired pattern on the heel.",
    sneakerprice: 1579.99,
    discontinued: false,
    category: ["cat3"],
    img:"images/S25.webp"
  },
  {
    id: "S26",
    sneakername: "Off-White Arrow Pattern Slippers White/Black",
    sneakerdesc:
      "Off-White Arrow Pattern SlippersWhite & Black · 100% Cotton · Silk Lining · Engineered Branding · Made in Italy.",
    sneakerprice: 133.99,
    discontinued: false,
    category: ["cat4"],
    img:"images/S26.webp"
  },
  {
    id: "S27",
    sneakername: "FTP Logo Slippers Black",
    sneakerdesc:
      "the FTP premium slippers comes with handmade silk and high quality padding giving extra comfort.",
    sneakerprice: 139.99,
    discontinued: false,
    category: ["cat4"],
    img:"images/S27.webp"
  },
  {
    id: "S28",
    sneakername: "Adidas Yeezy Slide Onyx",
    sneakerdesc:
      "First revealed in February 2022 at the Donda 2 listening event in Miami, the adidas Yeezy Slide Onyx features an all-black foam construction with a soft footbed for comfort. At the base, a grooved outsole adds stability and responsiveness.",
    sneakerprice: 154.99,
    discontinued: false,
    category: ["cat4"],
    img:"images/S28.webp"
  },
  {
    id: "S29",
    sneakername: "Adidas Yeezy Slide Resin",
    sneakerdesc:
      "The adidas Yeezy Slide Resin is made of Resin EVA foam throughout the design to provide lightweight durability. From there, a soft footbed offers an immediate step in comfort. An outsole with accentuated grooves for traction and support wraps the design.",
    sneakerprice: 159.99,
    discontinued: false,
    category: ["cat4"],
    img:"images/S29.jpeg"
  },
  {
    id: "S30",
    sneakername: "Adidas Yeezy Slide Enflame Orange",
    sneakerdesc:
      "The adidas Yeezy Slide Enflame Orange features Enflame Orange EVA foam construction with a soft footbed that offers an immediate step-in comfort. An outsole with accentuated grooves for traction and support completes the design.",
    sneakerprice: 164.99,
    discontinued: false,
    category: ["cat4"],
    img:"images/S30.jpeg"
  },
  {
    id: "S31",
    sneakername: "Jordan 1 Retro High Dior",
    sneakerdesc:
      "Jordan Brand connected with Parisian fashion house Dior to create history with the Jordan 1 Retro High Dior, now available on StockX.",
    sneakerprice: 10033.99,
    discontinued: false,
    category: ["cat5"],
    img:"images/S31.webp"
  },
  {
    id: "S32",
    sneakername: "New Balance 992 Joe Freshgoods No Emotions Are Emotions",
    sneakerdesc:
      "The joe freshgoods x new balance 992 'no emotions are emotions' shares the designer's affinity for the heritage massachusetts - based footwear company.",
    sneakerprice: 5779.99,
    discontinued: false,
    category: ["cat5"],
    img:"images/S32.webp"
  },
  {
    id: "S33",
    sneakername: "Jordan 1 Retro Satin Banned",
    sneakerdesc:
      "This limited edition of the Air Jordan 1 “Banned” features a Satin built that mimics the material that Michael Jordan wore during his warm-up that he wore when debuting the Air Jordan 1.",
    sneakerprice: 8449.99,
    discontinued: false,
    category: ["cat5"],
    img:"images/S33.png"
  },

  {
    id: "S34",
    sneakername: "Jordan 4 Retro Manila",
    sneakerdesc:
      "The Air Jordan 4 Manila finds multiple shades of green coming together across the upper, a nod to the tropical islands of the Philippines.",
    sneakerprice: 3999.99,
    discontinued: false,
    category: ["cat5"],
    img:"images/S34.webp"
  },
  {
    id: "S35",
    sneakername: "Jordan 1 Retro High Shinedown Attention Attention PE",
    sneakerdesc:
      "Shared by guitarist Zach Myers, a huge sneakerhead, the Air Jordan 1 Retro High OG comes in a 'Black Toe' configuration with yellow, black and white colour-blocking.",
    sneakerprice: 5599.99,
    discontinued: false,
    category: ["cat5"],
    img:"images/S35.jpeg"
  },{
    id: "S36",
    sneakername: "Air Jordan III OG ",
    sneakerdesc:
      "The sneakers are a part of the celebrity series because basketball legend Michael Jordan wore them when slam dunking Dominque Wilkins, which made the sneakers become even more valuable.",
    sneakerprice: 4599.99,
    discontinued: false,
    category: ["cat5"],
    img:"images/S36.webp"
  }
];
  



