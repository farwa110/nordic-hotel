export const rooms = [
  {
    number: "01",
    slug: "aurora-suite",
    title: "Aurora Suite",
    description: "Panoramic views and ultimate luxury.",
    longDescription: "A private luxury suite designed for guests who want to experience the Northern Lights from the comfort of a warm, elegant retreat.",
    price: "$299",
    guests: "2 Guests",
    bed: "King Bed",
    view: "Aurora View",
    image: "/room-one.png",
    featuredImage: "/room-horizontal.png",

    storyTitle: "Front-row seats to nature's greatest light show.",
    storyText: "Designed for unforgettable nights beneath the Northern Lights, the Aurora Suite combines modern Scandinavian elegance with panoramic glass walls. Sink into luxury bedding, watch the sky dance above, and enjoy complete privacy surrounded by Arctic wilderness.",

    size: "48 m²",

    highlights: ["Private Aurora Viewing", "Panoramic Glass Windows", "King-Size Luxury Bed", "Complimentary Breakfast"],

    collection: [
      {
        title: "Skyline Glass Lodge",
        description: "A modern suite with uninterrupted sky views.",
        price: "$279",
        // image: "/skyline-one.png",
        images: ["/skyline-one.png", "/skyline-two.png", "/skyline-three.png"],
      },
      {
        title: "Arctic Horizon Room",
        description: "Perfect for stargazing and winter nights.",
        price: "$259",
        // image: "/artic-one.png",
        images: ["/artic-one.png", "/artic-two.png", "/artic-three.png"],
      },
      {
        title: "Northern Lights Loft",
        description: "An elevated retreat with rooftop views.",
        price: "$349",
        // image: "/northern-one.png",
        images: ["/northern-one.png", "/northern-two.png", "/northern-three.png"],
      },
    ],
  },
  {
    number: "02",
    slug: "nordic-cabin",
    title: "Nordic Cabin",
    description: "Cozy retreat surrounded by nature.",
    longDescription: "A peaceful wooden cabin surrounded by snowy forest, perfect for slow mornings, fireside evenings and nature escapes.",
    price: "$199",
    guests: "2 Guests",
    bed: "Queen Bed",
    view: "Forest View",
    image: "/room-two.png",
    featuredImage: "/roomtwo-horizontal.png",
    storyTitle: "A woodland hideaway where time slows down.",
    storyText: "Tucked among snow-covered pines, the Nordic Cabin offers warmth, simplicity, and authentic Scandinavian charm. Enjoy quiet mornings by the fireplace and peaceful evenings surrounded by nature.",

    size: "36 m²",

    highlights: ["Wood-Burning Fireplace", "Private Forest Terrace", "Handcrafted Nordic Interior", "Nature Trails Nearby"],
    collection: [
      {
        title: "Pinewood Retreat",
        description: "A cozy cabin surrounded by towering pines.",
        price: "$179",
        // image: "/pinewood-retreat.png",
        images: ["/pinewood-retreat.png", "/pinewood-retreat-two.png", "/pinewood-retreat-three.png"],
      },
      {
        title: "Snowfall Cottage",
        description: "Rustic comfort with scenic winter views.",
        price: "$189",
        // image: "/snowfall-cottage.png",
        images: ["/snowfall-cottage.png", "/snowfall-cottage-two.png", "/snowfall-cottage-three.png"],
      },
      {
        title: "Timber Hearth Lodge",
        description: "Warm interiors and a crackling fireplace.",
        price: "$219",
        // image: "/timber-hearth-lodge.png",
        images: ["/timber-hearth-lodge.png", "/timber-hearth-lodge-two.png", "/timber-hearth-lodge-three.png"],
      },
    ],
  },
  {
    number: "03",
    slug: "premium-lodge",
    title: "Premium Lodge",
    description: "Spacious comfort for memorable stays.",
    longDescription: "A spacious mountain-view lodge designed for families and travelers seeking comfort, elegant interiors, and breathtaking alpine scenery.",
    price: "$249",
    guests: "4 Guests",
    bed: "2 Beds",
    view: "Mountain View",
    image: "/room-three.png",
    featuredImage: "/roomthree-horizontal.png",
    storyTitle: "Space to gather, comfort to remember.",
    storyText: "Created for families and longer stays, the Premium Lodge blends spacious living areas with refined Nordic design. Large windows frame the mountains while thoughtful details make every moment feel at home.",

    size: "65 m²",

    highlights: ["Family-Friendly Layout", "Mountain-Facing Balcony", "Separate Living Area", "Premium Amenities"],
    collection: [
      {
        title: "Summit Family Lodge",
        description: "Spacious interiors for shared adventures.",
        price: "$269",
        // image: "/summit-family-lodge.png",
        images: ["/skyline-one.png", "/skyline-two.png", "/skyline-three.png"],
      },
      {
        title: "Alpine Gathering House",
        description: "Designed for comfort and connection.",
        price: "$289",
        // image: "/alpine-gathering-house.png",
        images: ["/artic-one.png", "/artic-two.png", "/artic-three.png"],
      },
      {
        title: "Mountain View Residence",
        description: "Panoramic scenery with extra space.",
        price: "$319",
        // image: "/mountain-view-residence.png",
        images: ["/mountain-view.png", "/mountain-view-two.png", "/mountain-view-three.png"],
      },
    ],
  },
  {
    number: "04",
    slug: "panorama-retreat",
    title: "Panorama Retreat",
    description: "Unmatched views, pure serenity.",
    longDescription: "An exclusive panoramic retreat featuring floor-to-ceiling windows, luxurious furnishings, and uninterrupted views across lakes and distant mountains.",
    price: "$329",
    guests: "2 Guests",
    bed: "King Bed",
    view: "Panorama View",
    image: "/room-four.png",

    featuredImage: "/roomfour-horizontal.png",
    storyTitle: "Where every window frames a masterpiece.",
    storyText: "Wake up to sweeping views of lakes, mountains, and endless skies. The Panorama Retreat is designed around natural beauty, offering floor-to-ceiling glass and elegant interiors that invite complete relaxation.",

    size: "55 m²",

    highlights: ["Floor-to-Ceiling Windows", "Private Viewing Lounge", "Luxury Rain Shower", "Lake & Mountain Views"],
    collection: [
      {
        title: "Lakeside Panorama Suite",
        description: "A serene escape overlooking crystal waters.",
        price: "$299",
        images: ["/lakeside-panorama-suite.png", "/lakeside-panorama-suite-two.png", "/lakeside-panorama-suite-three.png"],
      },
      {
        title: "Summit View Retreat",
        description: "Elevated luxury with dramatic scenery.",
        price: "$339",
        images: ["/summit-view-retreat.png", "/summit-view-retreat-two.png", "/summit-view-retreat-three.png"],
      },
      {
        title: "Horizon Edge Suite",
        description: "Modern comfort with endless views.",
        price: "$359",
        images: ["/horizon-edge-suite.png", "/horizon-edge-suite-two.png", "/horizon-edge-suite-three.png"],
      },
    ],
  },
];
export type Room = (typeof rooms)[number];
