const travelPackages = [
  {
    id: "arang-kel",
    title: "Arang Kel Tour",
    image: "/gallery/arang-kel.webp",
    price: "Rs12,000",
    duration: "7 Days (6 nights)",
    departureDate: "15th August 2025",
    departureTime: "5:00 AM (from Lahore)",
    description: "Discover the lush meadows and tranquil beauty of Arang Kel with guided tours, comfortable stays, and scenic treks.",
    rules: [
      "Carry original CNIC or B-Form",
      "Follow guide instructions",
      "No littering in forest areas",
      "Respect local customs",
      "Refunds not available after booking"
    ]
  },
  {
    id: "azad-kashmir",
    title: "Azad Kashmir Tour",
    image: "gallery/azad-kashmir.webp",
    price: "Rs22,000",
    duration: "8 Days (7 nights)",
    departureDate: "18th August 2025",
    departureTime: "6:00 AM",
    description: "Explore waterfalls, valleys, and cultural heritage in Azad Kashmir with our all-inclusive guided tour.",
    rules: [
      "Bring ID documents",
      "Stay with group",
      "No damage to natural sites",
      "Follow schedule strictly",
      "Tour is non-refundable after confirmation"
    ]
  },
  {
    id: "badshahi-masjid",
    title: "Badshahi Masjid Heritage Tour",
    image: "gallery/Badshahi mosque.jpg",
    price: "Rs7,000",
    duration: "2 Days (1 Night)",
    departureDate: "20th August 2025",
    departureTime: "9:00 AM",
    description: "A cultural exploration of Lahore's Mughal masterpiece, including guided history sessions and local food stops.",
    rules: [
      "Respect mosque dress code",
      "Photography only in allowed zones",
      "Avoid loud conversations",
      "Follow guide’s instructions",
      "Non-refundable after booking"
    ]
  },
  {
    id: "banjosa",
    title: "Banjosa Lake Tour",
    image: "gallery/banjosa.webp",
    price: "Rs10,000",
    duration: "7 Days (6 Nights)",
    departureDate: "22nd August 2025",
    departureTime: "5:30 AM",
    description: "Visit the serene Banjosa Lake and surrounding attractions with our well-managed family-friendly tour package.",
    rules: [
      "Bring CNIC for verification",
      "Respect nature and wildlife",
      "Keep area clean",
      "Children under 12 must be accompanied",
      "Bookings are final"
    ]
  },
  {
    id: "beauty-of-skardu",
    title: "The Beauty of Skardu",
    image: "gallery/Beauty-of-Skardu.webp",
    price: "Rs15,000",
    duration: "4 Days (3 nights)",
    departureDate: "25th August 2025",
    departureTime: "6:00 AM",
    description: "Experience breathtaking views and cultural richness in Skardu — from lakes to fortresses and beyond.",
    rules: [
      "Respect cultural sites",
      "No smoking during group activities",
      "Late arrivals not accommodated",
      "Follow group leader instructions",
      "Payment non-refundable"
    ]
  },
  {
    id: "chitta-katha-lake",
    title: "Chitta Katha Lake Trek",
    image: "gallery/chitta-katha-lake.webp",
    price: "Rs10,000",
    duration: "1 Day (0 Night)",
    departureDate: "1st September 2025",
    departureTime: "3:00 AM",
    description: "A thrilling one-day trek to one of the most beautiful alpine lakes in Pakistan — ideal for adventure seekers.",
    rules: [
      "Physical fitness required",
      "No individual treks allowed",
      "Bring personal water and gear",
      "Start time is strict",
      "Refunds not entertained"
    ]
  },
  {
    id: "dagri",
    title: "Dagri Bangla Trek",
    image: "gallery/dagri.jpg",
    price: "Rs13,000",
    duration: "8 Days (7 nights)",
    departureDate: "3rd September 2025",
    departureTime: "4:30 AM",
    description: "Explore pine forests and high-altitude camps in this unforgettable trek through Dagri's wild trails.",
    rules: [
      "Carry raincoat and trekking shoes",
      "Group movement only",
      "No fires in forest areas",
      "Respect guide leadership",
      "Payment non-refundable"
    ]
  },
  {
    id: "fairy-meadows-and-nanga-parbat",
    title: "Fairy Meadows & Nanga Parbat",
    image: "gallery/fairy-meadows-and-nanga-parbat.webp",
    price: "Rs24,000",
    duration: "8 Days (7 nights)",
    departureDate: "7th September 2025",
    departureTime: "6:00 AM",
    description: "Visit Pakistan’s most iconic view — the majestic Nanga Parbat from the green pastures of Fairy Meadows.",
    rules: [
      "Respect local hospitality",
      "Use eco-friendly products",
      "Don't leave trash behind",
      "Timings must be followed",
      "No refunds available"
    ]
  },
  {
    id: "hunza",
    title: "Hunza Valley Escape",
    image: "gallery/hunza.webp",
    price: "Rs27,000",
    duration: "3 Days (2 nights)",
    departureDate: "10th September 2025",
    departureTime: "7:00 AM",
    description: "Wander through the stunning landscapes of Hunza Valley with guided tours to Altit & Baltit Forts and local bazaars.",
    rules: [
      "CNIC required for hotel stays",
      "Follow cultural guidelines",
      "Group tours only",
      "Night out not allowed",
      "No refund policy"
    ]
  },
  {
    id: "kalash-and-chitral",
    title: "Kalash & Chitral Cultural Tour",
    image: "gallery/Kalash and chitral.webp",
    price: "Rs56,000",
    duration: "8 Days (7 nights)",
    departureDate: "15th September 2025",
    departureTime: "5:00 AM",
    description: "Celebrate the unique traditions of the Kalash people and the mountainous beauty of Chitral in this cultural deep dive.",
    rules: [
      "Dress modestly in Kalash villages",
      "No photos without permission",
      "Follow guide inside heritage sites",
      "Respect private property",
      "Non-refundable"
    ]
  },
  {
    id: "khabeki-lake",
    title: "Khabeki Lake Adventure",
    image: "gallery/khabeki-lake.webp",
    price: "Rs12,000",
    duration: "8 Days (7 nights)",
    departureDate: "18th September 2025",
    departureTime: "5:30 AM",
    description: "Enjoy boating, bird-watching, and peace at this lesser-known but beautiful lake in Soon Valley.",
    rules: [
      "Wear life jackets near water",
      "No loud music",
      "Group safety protocols apply",
      "Dispose of trash properly",
      "No refunds"
    ]
  },
  {
    id: "khanjrab",
    title: "Khunjerab Pass Tour",
    image: "gallery/khanjrab.jpg",
    price: "Rs12,000",
    duration: "8 Days (7 nights)",
    departureDate: "20th September 2025",
    departureTime: "6:00 AM",
    description: "Reach the highest paved international border at Khunjerab Pass with scenic views and wildlife experiences.",
    rules: [
      "Passport or CNIC required",
      "Photography allowed in specific areas",
      "No overnight stay at Pass",
      "Altitude awareness advised",
      "No refund available"
    ]
  },
  {
    id: "sawat",
    title: "Swat Valley Getaway",
    image: "gallery/sawat.webp",
    price: "Rs12,000",
    duration: "8 Days (7 nights)",
    departureDate: "22nd September 2025",
    departureTime: "5:30 AM",
    description: "Travel through the 'Switzerland of Pakistan' with visits to Malam Jabba, Fizaghat, and Kalam Valley.",
    rules: [
      "CNIC is mandatory",
      "Don't pollute river areas",
      "Follow guide timings",
      "Respect locals",
      "No refund on cancellation"
    ]
  },
  {
    id: "shangrila",
    title: "Shangrila Heaven on Earth Tour",
    image: "gallery/shangrila.webp",
    price: "Rs12,000",
    duration: "8 Days (7 nights)",
    departureDate: "25th September 2025",
    departureTime: "6:00 AM",
    description: "Visit the iconic Shangrila Resort and Lower Kachura Lake, a truly breathtaking escape into the north.",
    rules: [
      "No smoking in hotel premises",
      "Guided area access only",
      "Quiet hours after 10 PM",
      "Environmentally friendly conduct required",
      "Non-refundable booking"
    ]
  },
  {
    id: "skardu",
    title: "Skardu Tour Package",
    image: "gallery/skardu.webp",
    price: "Rs12,000",
    duration: "8 Days (7 nights)",
    departureDate: "28th September 2025",
    departureTime: "6:00 AM",
    description: "Explore Skardu’s lakes, forts, and valleys with our premium tour. Includes luxury stay, meals, and guided exploration.",
    rules: [
      "Original CNIC required",
      "Respect group time",
      "No smoking indoors",
      "Be eco-conscious",
      "Tour cost is non-refundable"
    ]
  },
  {
    id: "taobat-kashmir",
    title: "Taobat Kashmir Retreat",
    image: "gallery/taobat-kashmir.webp",
    price: "Rs12,000",
    duration: "8 Days (7 nights)",
    departureDate: "30th September 2025",
    departureTime: "5:00 AM",
    description: "Visit the untouched beauty of Taobat with river walks, hill climbs, and stunning green valleys.",
    rules: [
      "Limit luggage to essentials",
      "Maintain silence in village areas",
      "Always be on time",
      "No drones allowed",
      "Refunds not provided"
    ]
  }
];