function Animal(imageUrl, name, lifespan, group, food, description, height, weight, found, summary) {
    this.image = imageUrl,
    this.name = name,
    this.lifespan = lifespan,
    this.group = group,
    this.food = food, 
    this.description = description,
    this.height = height,
    this.weight = weight,
    this.found = found,
    this.summary = summary;
    this.slug = name.toLowerCase().replace(/\s+/g, '-');
}

const echidna = new Animal (
    "/images/echidna.jpg",
    "Echidna",
    "50 years", 
    "Mammals", 
    "Insects such as ants and termites, beetle larvae and worms", 
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.", 
    "76 Cm", 
    "10 Kg", 
    "Throughout Australia", 
    "Nature's spiky DIY enthusiasts! With a face like an anteater-vacuum mashup and a coat of quills that says, 'Don't mess with me', they're the hipsters of the animal kingdom. They're proof that Mother Nature has a wicked sense of humor."
);

const tasmanianDevil = new Animal (
    "/images/tasmania2.jpg",
    "Tasmanian Devil",
    "5 years", 
    "Mammals", 
    "A predator, then eat meat from other animals such as wallabies and wombats", 
    "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.", 
    "70 Cm", 
    "10 Kg", 
    "Tasmania", 
    "Nature's furry tornadoes on a sugar rush. With a face that says 'chaos is my middle name' and a growl that could wake the dead, they're the heavy metal rockstars of the marsupial world."
);

const quokka = new Animal (
    "/images/quokka.jpg" ,
    "Quokka", 
    "10 years", 
    "Mammals",
    "Plant eaters, they munch on shrubs and grasses", 
    "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.", 
    "50 Cm", 
    "3 Kg", 
    "Only found on Rottnest Island and a few places on mainland Western Australia", 
    "Nature's perpetual optimists. With smiles that rival Disney characters and a vibe that says 'Life's a beach,' they're the Instagram influencers of Rottnest Island, spreading joy wherever they hop."
);

const cassowary = new Animal(
    "/images/cassowary.jpg" ,
    "Cassowary", 
    "20 years", 
    "Birds", 
    "Plants matter like fruit, insects and small animals like mice and lizards", 
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.", 
    "1,7 m", 
    "44 kg",
    "Queensland", 
    "Nature's bird ninjas. With a dinosaur-like demeanor and kicks that'd impress Bruce Lee, they're the rainforest's punk rockers. Approach with caution – they're the world's most dangerous birds!", "Nature's laugh track. With a cackle that could rival a sitcom audience, they're the outback's stand-up comedians, finding humor in everything, even their own jokes."
);

const kookaburra = new Animal(
    "/images/kooka2.jpg" ,
    "Kookaburra", 
    "20 years", 
    "Birds", 
    "Insects and smalll animals including snakes, frogs and lizards", 
    "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.", 
    "43 cm", 
    "300 g", 
    "Australia wide", 
    "Nature's laugh track. With a cackle that could rival a sitcom audience, they're the outback's stand-up comedians, finding humor in everything, even their own jokes."
);

const yellowTailedBlackCockatoo = new Animal(
    "/images/cockatoo.jpg" ,
    "Yellow Tailed Black Cockatoo", 
    "41 years",
    "Birds", 
    "Seeds and other plant material", 
    "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.", 
    "65 cm", 
    "900 g", 
    "SE Australia", 
    "Nature's rebel poets. With black feathers and a splash of yellow, they're the punk rockers of the bird world, coolly perched in trees, reminding us that being different is always in style."
);

const lizard = new Animal(
    "/images/frilledlizard.jpg",
    "Frilled Neck Lizard",
    "20 years",
    "Reptiles",
    "Small insects and spiders",
    "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
    "90 cm",
    "1 kg",
    "Northern Australia",
    "Ever seen a lizard groove? They've got moves that'll make you chuckle. With their cool vibes and quirky antics, lizards are nature's little comedians. Catch them in action and prepare for a show that's sure to bring a smile."
);

const turtle = new Animal(
    "/images/turtle2.jpg",
    "Hawksbill Turtle",
    "50 years",
    "Reptiles",
    "other animals (sponges & jellyfish), sea plants",
    "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
    "80cm (carapace)",
    "50 kg",
    "Tropical coasts of Queensland, Northern Territory and Western Australia.",
    "Meet the turtles, the chill kings of the pond. With their laid-back demeanor and slow-motion antics, they're the zen masters of the animal kingdom. Watch them glide through life with grace and ease, reminding us to take it slow and enjoy the journey."
);

const perentie = new Animal(
    "/images/perentie3.jpg",
    "Perentie",
    "20 years",
    "Reptiles",
    "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
    "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    "2.5 m",
    "20 kg",
    "Deserts",
    "Behold the perenties, the desert dynamos of the reptile world. With their sleek scales and stealthy moves, they're the undisputed rulers of the outback. These majestic lizards roam the arid landscapes with confidence, showcasing the beauty and resilience of Australia's wilderness."
);

const welcomeContent = {
    home: {
        title: "Australia Zoo",
        subtitle: "Home of the Crocodile Hunter",
        text1: "Welcome to our zoo, where every visit promises an adventure into the remarkable biodiversity of Australia.", 
        text2: "From birds soaring through the skies to mammals exploring their habitats and reptiles basking in the sun, experience the wonders of nature with us.",
        image: "/images/zooanimals.jpg"
    },
    birds: {
        title: "Bird Diversity",
        text1: "Explore the rich diversity of bird life at our zoo. Encounter the majestic cassowary, the melodious kookaburra, and the striking yellow-tailed black cockatoo.", 
        text2: "Each showcasing unique beauty and fascinating behaviors.",
        image: "/images/birds.jpg",
    },
    mammals: {
        title: "Mammal Exploration",
        text1: "Step into the world of mammals, where Australia's unique creatures thrive. Discover the spiky charm of the echidna, the feisty tenacity of the Tasmanian devil, and the perpetual smile of the quokka.", 
        text2: "Each species showcases remarkable adaptations and survival strategies that have evolved over millennia. From pouch-bearing marsupials to the solitary monotremes, these mammals exemplify Australia's diverse fauna and their crucial ecological roles.",
        image: "/images/mammals2.jpg",
    },
    reptiles : {
        title: "Reptile Realm",
        text1: "Welcome to the realm of reptiles, where ancient species still roam. Encounter the regal frilled-neck lizard, known for its dramatic displays, the majestic hawksbill turtle, guardian of the seas, and the formidable perentie, Australia's largest monitor lizard.",
        text2: "These reptilian wonders demonstrate remarkable resilience and specialized adaptations honed through evolutionary history. Explore their habitats, behaviors, and the vital roles they play in maintaining the delicate balance of Australia's ecosystems.",
        image: "/images/reptiles.jpg",
    }
}

const mammals = [echidna, tasmanianDevil, quokka];
const birds = [cassowary, kookaburra, yellowTailedBlackCockatoo];    
const reptiles = [lizard, turtle, perentie];

export const animals = {birds, mammals, reptiles};
export {welcomeContent};