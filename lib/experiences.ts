export interface Amenity {
    icon: string
    title: string
    description: string
}

export interface Experience {
    id: number
    name: string
    location: string
    price: number
    pricePerChild: number
    serviceFee: number
    rating: number
    reviewCount: number
    image: string
    images: string[]
    tags: string[]
    /** Short list shown on home page cards */
    highlights: string[]
    badge?: { label: string; className: string }
    description: string
    amenities: Amenity[]
}

export const experiences: Experience[] = [
    {
        id: 1,
        name: "The Palms Turks & Caicos",
        location: "Grace Bay, Providenciales",
        price: 250,
        pricePerChild: 125,
        serviceFee: 45,
        rating: 4.8,
        reviewCount: 156,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuzCjvoygQ4AfY2mZH-vEWMJqB-QjSTKTNvnZUtmHEPtI4XEe49DOJbXY7BiZKchlEV9fefmsU0SxsBTkwdl9K9gexIrOncqWS-LW5n2_w3p6SAZ5kuZwgglt9AAhJ85gqf9uxUoYUd2p2fweK5Vode4LXAQ3Yeec1b3sZCyBdEpImnfZfW_VykUI8D5_Pt668FATuePF7zE4rCbflKCwl96EQmxSr-i6Pr6iyNk6x7Ucqh5Fyl2AY58tLsLMAPuLMFWXPfYCFmAwI",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAuzCjvoygQ4AfY2mZH-vEWMJqB-QjSTKTNvnZUtmHEPtI4XEe49DOJbXY7BiZKchlEV9fefmsU0SxsBTkwdl9K9gexIrOncqWS-LW5n2_w3p6SAZ5kuZwgglt9AAhJ85gqf9uxUoYUd2p2fweK5Vode4LXAQ3Yeec1b3sZCyBdEpImnfZfW_VykUI8D5_Pt668FATuePF7zE4rCbflKCwl96EQmxSr-i6Pr6iyNk6x7Ucqh5Fyl2AY58tLsLMAPuLMFWXPfYCFmAwI",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        ],
        tags: ["Spa Access", "Pool & Beach"],
        highlights: ["Spa Access", "Pool & Beach", "Fine Dining"],
        badge: { label: "Best Seller", className: "bg-white/90 text-primary" },
        description: "Experience luxury at The Palms, featuring world-class spa facilities, pristine pools, and direct beach access. Enjoy exclusive amenities including spa treatments, gourmet dining, and premium beach service on Grace Bay's stunning coastline.",
        amenities: [
            { icon: "spa", title: "Full Spa Access", description: "Access to award-winning spa facilities" },
            { icon: "pool", title: "Multiple Pool Areas", description: "Including infinity and adults-only pools" },
            { icon: "restaurant", title: "$75 Dining Credit", description: "Valid at all resort restaurants" },
            { icon: "beach_access", title: "Premium Beach Service", description: "Reserved chairs and towel service" },
            { icon: "local_parking", title: "Valet Parking", description: "Complimentary valet service" },
            { icon: "wifi", title: "High-Speed WiFi", description: "Throughout the property" }
        ]
    },
    {
        id: 2,
        name: "Wymara Resort & Villas",
        location: "Grace Bay, Lower Bight",
        price: 180,
        pricePerChild: 90,
        serviceFee: 35,
        rating: 4.7,
        reviewCount: 98,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUupZELwgu8iGZmVUt11HmHGQSBh_foNhyqIDuPc2Nm6tC72ludcQd_SukGcUGt2CO_l0uTnIv4xRv_MOPhxFCmNDVqPMq4ujyL8PUyXpkgVmG6WjnrIMbBCiQ3AWbqtl8snK1bn1yfeP3nFyWD3m4FxaiernnpdyQ-r1njrL-2do0CKVDE3xggVTKki1MDudq8SSJ89aeZbrsT3LSAWq9n6cfRLIGvBYYy5R0XCKOL60NU6KGoWBGx6hZHzD0qZBR9KCFRFJ15tQe",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAUupZELwgu8iGZmVUt11HmHGQSBh_foNhyqIDuPc2Nm6tC72ludcQd_SukGcUGt2CO_l0uTnIv4xRv_MOPhxFCmNDVqPMq4ujyL8PUyXpkgVmG6WjnrIMbBCiQ3AWbqtl8snK1bn1yfeP3nFyWD3m4FxaiernnpdyQ-r1njrL-2do0CKVDE3xggVTKki1MDudq8SSJ89aeZbrsT3LSAWq9n6cfRLIGvBYYy5R0XCKOL60NU6KGoWBGx6hZHzD0qZBR9KCFRFJ15tQe",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        ],
        tags: ["Cabana", "Dining Credit"],
        highlights: ["Cabana", "Dining Credit"],
        badge: { label: "Adults Only", className: "bg-[#111418]/80 text-white" },
        description: "Discover contemporary luxury at Wymara Resort, an adults-only paradise featuring private cabanas, world-class dining, and sophisticated amenities. Perfect for couples seeking an exclusive and refined resort experience.",
        amenities: [
            { icon: "cabin", title: "Private Cabana Access", description: "Exclusive beachfront cabanas" },
            { icon: "restaurant", title: "$60 Dining Credit", description: "Valid at signature restaurants" },
            { icon: "pool", title: "Adults-Only Pools", description: "Sophisticated pool environments" },
            { icon: "beach_access", title: "Beach Club Access", description: "Premium beach service" },
            { icon: "local_parking", title: "Complimentary Parking", description: "Self-parking available" },
            { icon: "fitness_center", title: "Fitness Center", description: "State-of-the-art equipment" }
        ]
    },
    {
        id: 3,
        name: "Seven Stars Resort",
        location: "Grace Bay, Providenciales",
        price: 300,
        pricePerChild: 150,
        serviceFee: 55,
        rating: 4.9,
        reviewCount: 203,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJrT11p0gc86-RSLkOK04C7dGa4nhd0ZP5gFggOycspWlrON4kuvEJabnZj__HhqY7gdRT-Nx3TtzBlvbVP5BPUKaZsRZeLQhnU8vzQZcblVR3zgkcfIDRLAY2gsGjurydHWKk-Qendn5Zz1IGM4ZApR8dQ0c-n1mVu4UapFB_p14o__F87CYqLVXKOYD3jB9QVlr6UXE1t81_ED436lizDZ-yvPXO1dpH-3BvjENac5fsBsbmLc7xOrip_xy0N7pdXbqD0uvtVYff",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCJrT11p0gc86-RSLkOK04C7dGa4nhd0ZP5gFggOycspWlrON4kuvEJabnZj__HhqY7gdRT-Nx3TtzBlvbVP5BPUKaZsRZeLQhnU8vzQZcblVR3zgkcfIDRLAY2gsGjurydHWKk-Qendn5Zz1IGM4ZApR8dQ0c-n1mVu4UapFB_p14o__F87CYqLVXKOYD3jB9QVlr6UXE1t81_ED436lizDZ-yvPXO1dpH-3BvjENac5fsBsbmLc7xOrip_xy0N7pdXbqD0uvtVYff",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        ],
        tags: ["All-Inclusive", "Water Sports"],
        highlights: ["All-Inclusive", "Water Sports", "Golf Access"],
        description: "Indulge in the ultimate luxury at Seven Stars Resort, featuring all-inclusive amenities, championship water sports, and world-renowned service. Experience the pinnacle of Grace Bay hospitality with unlimited dining and premium activities.",
        amenities: [
            { icon: "all_inclusive", title: "All-Inclusive Package", description: "Unlimited food, drinks, and activities" },
            { icon: "kayaking", title: "Water Sports Center", description: "Kayaking, snorkeling, and more" },
            { icon: "pool", title: "Multiple Pool Complexes", description: "Including swim-up bars" },
            { icon: "restaurant", title: "Gourmet Dining", description: "Multiple award-winning restaurants" },
            { icon: "spa", title: "Luxury Spa Services", description: "Full-service spa treatments" },
            { icon: "golf_course", title: "Golf Privileges", description: "Access to nearby championship course" }
        ]
    },
    {
        id: 5,
        name: "The Shore Club",
        location: "Long Bay Beach, Providenciales",
        price: 150,
        pricePerChild: 75,
        serviceFee: 45,
        rating: 4.9,
        reviewCount: 124,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPhn2TmOPFNq6ceXNRXtwsfn56TeW2CwMACrNbtEW2Q409M_6ckRefgk0rrLrEz6SU13wePNYYWLQlEafvJh3GHZmabO03eFSDqO6KY7f3O9yLg4zsYNJK7Hty2V_H15X_T4nufb2hTiHXdaXDIVBN1eUUqsXQcAPKPGVdKpl3e9tPipJwpzOVzl--jmAq_0DTxZ5Pn-CW-JVSjFs3MiprvUBCXSFdkYq_O1V-f5pgKtTz2Z45RIxaqBpz1Rvs6HF1mbUir-59Lew6",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB4YywlBWVdOS-lwyrc_rh1-9sOKq937DE1xyCw-_knmCG9Jm6Ew_Dx5UHOn6TKbwg26kL76PuUR-Pw1U8LShPVOJ9HRt6HFmeAdboU-ngInSoEmUK1QuiqhKkqAMUlGCwKpoO8Pp-4oCKimP4dipdCp8iOf7xQXImqLXszrDk0M5rK6cAFuYPwKlZwqzbkOnEM8kKI8jFqa0AZX_GG5XhumxClWK4DC8ENYNx5U7sJhqSsoHEfok48-_GsVjPyf4NjVxa13MMpLCSY",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCcnh8n_V2knx8x5ZZWRIyDgL2drtIo7Ep8T--QGrTuWtxIwzAD7bDdn12ew0RVS-nR6Nki0p6rXiMtaKyrU5_VhCTLg9jLrk-JybZPfJ1BZ5uboCr-U_N47PutQ8y3V0ULAU5J4ugACBxN06oyueTNmjA5TsIRowUeu6pU1tYw0dVrXifY2WQSWw79BNnf08RYyxntspQYwirH8HhMSi4UAVx_QalNhkS0QgnFeYPX2Zccj9Pw2kLpOafwSG867XR3V2oDCilamzQF",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuClz4E_YAnbiXir-cwF6PBUsn604LbCq_bH7NnwqVHPMnK_qm8ND6xbw-dynBTvEEVi1P1U4W-RjZGSf_qamb0Db81JvqXrwdXeCgvHdbv1fvTU7fHOHC3tuZLmbJwA6bzZ5vvP1Ht5tPpIG_CIG549J5BHHbg-gcDH51y4mSEvWxEjKLs6LV8bbZS7d_zC47qSMztpdnC8T4jirYbb74c_M5SVczWAmkK8JAkiE1CN_vFfLJ2rFCrebZd_DCkHaU1P7rbssTrhfGQM",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAv6D6XYbMqAsDEhpONMuwoe9KeDMtLcBXrNj7iwbTiR8bR9T5dBvzj-7vaYQf6TgIwZAbXF5dSaOFMlfZoeZ1pCe7RQ6w5ICa5sBfBb2COvndQgv95MHmybTHeZeavBSzY_gB6OOROvKm7xlXhpqSO_Wt_tisfo73Jq6d4jXhu2YLzUvLM-d2yDX6DtdiRBMqMvF2wwUULo8ThrsT5upl9Y4Z5DELnBQwaa9hNXpn8jZ97PP1ALBFOf1u9St_2SXBxN8yfE1MIAKXH",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDLXkYyfatM25bL94mAqV_SblAV7BfZDnn6HLLLasLzw6kljEerb-90MD87vcGkC-sXF3Gg0nOUKNBNgXPmzcFt_DK-SqujC0YwkqUobrG2d-2SlGafmyLBt8Nq5MJhxkmG7rL3bRgxgJlQ_uiTVq-dAqhQ4GrExpXoVzehwSvfCoQmQTTfTCuNe6RO-wrQcJzOns3xnbb4io5Hc9AE1fotPhY-zIe6zZRr1dxrmF_y4XSlCn3BHjuiI_CTfcM2B2zLFYvco5Usnmrf"
        ],
        tags: ["Pool Access", "Towel Service"],
        highlights: ["Pool Access", "Towel Service", "Gym"],
        description: "Escape to paradise at The Shore Club, the first and only resort on Long Bay Beach. Immerse yourself in the most sought-after stretch of coastline in Providenciales. Your day pass grants you exclusive access to our four distinct pool environments, pristine white sands, and world-class amenities.",
        amenities: [
            { icon: "pool", title: "Access to 4 Pools", description: "Including adults-only and family pools" },
            { icon: "restaurant", title: "$50 Food & Beverage Credit", description: "Valid at Sea Grapes or The Courtyard" },
            { icon: "wifi", title: "High-Speed WiFi", description: "Available throughout the property" },
            { icon: "beach_access", title: "Beach Chair & Towel Service", description: "Reserved seating on Long Bay Beach" },
            { icon: "local_parking", title: "Complimentary Valet Parking", description: "Secure on-site parking" },
            { icon: "fitness_center", title: "Fitness Center Access", description: "State-of-the-art equipment" }
        ]
    },
    {
        id: 7,
        name: "The Ritz-Carlton",
        location: "Grace Bay, Providenciales",
        price: 280,
        pricePerChild: 140,
        serviceFee: 50,
        rating: 4.8,
        reviewCount: 187,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        images: [
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        ],
        tags: ["Luxury Spa", "Fine Dining"],
        highlights: ["Luxury Spa", "Fine Dining", "Butler Service"],
        description: "Experience the legendary service and luxury of The Ritz-Carlton, featuring world-class spa treatments, award-winning fine dining, and impeccable attention to detail. Enjoy exclusive access to premium amenities and personalized service.",
        amenities: [
            { icon: "spa", title: "La Prairie Spa", description: "World-renowned luxury spa treatments" },
            { icon: "restaurant", title: "$100 Dining Credit", description: "Valid at all resort restaurants" },
            { icon: "pool", title: "Oceanfront Pools", description: "Multiple pool areas with ocean views" },
            { icon: "room_service", title: "Butler Service", description: "Personalized concierge assistance" },
            { icon: "local_parking", title: "Valet Parking", description: "Premium valet service" },
            { icon: "fitness_center", title: "Fitness Center", description: "Fully equipped fitness facility" }
        ]
    },
    {
        id: 8,
        name: "Beaches Turks & Caicos",
        location: "Lower Bight, Providenciales",
        price: 195,
        pricePerChild: 95,
        serviceFee: 40,
        rating: 4.6,
        reviewCount: 142,
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        images: [
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        ],
        tags: ["Water Park", "Kids Club"],
        highlights: ["Water Park", "Kids Club", "Multiple Pools"],
        description: "Perfect for families, Beaches Turks & Caicos offers an exciting water park, supervised kids club, and endless activities for all ages. Enjoy all-inclusive dining, entertainment, and family-friendly amenities in a tropical paradise setting.",
        amenities: [
            { icon: "pool", title: "Pirates Island Water Park", description: "Massive water park with slides and pools" },
            { icon: "child_care", title: "Kids Club", description: "Supervised activities for children" },
            { icon: "restaurant", title: "All-Inclusive Dining", description: "Multiple restaurants and bars included" },
            { icon: "sports_bar", title: "Teen Activities", description: "Xbox lounge and teen programs" },
            { icon: "local_parking", title: "Family Parking", description: "Convenient family parking" },
            { icon: "beach_access", title: "Family Beach Area", description: "Safe swimming areas for kids" }
        ]
    },
    {
        id: 9,
        name: "Conch Bar Beach Resort",
        location: "Conch Bar, Middle Caicos",
        price: 125,
        pricePerChild: 60,
        serviceFee: 25,
        rating: 4.5,
        reviewCount: 89,
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        images: [
            "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        ],
        tags: ["Eco-Tours", "Fishing"],
        highlights: ["Eco-Tours", "Fishing", "Kayaking"],
        description: "Discover the natural beauty of Middle Caicos at Conch Bar Beach Resort. Experience authentic island life with eco-tours, world-class fishing, and pristine beaches away from the crowds. Perfect for nature lovers and adventure seekers.",
        amenities: [
            { icon: "nature", title: "Eco-Tour Adventures", description: "Guided nature and cave tours" },
            { icon: "sailing", title: "Deep Sea Fishing", description: "Charter fishing expeditions" },
            { icon: "restaurant", title: "$40 Dining Credit", description: "Local cuisine and fresh seafood" },
            { icon: "beach_access", title: "Private Beach Access", description: "Secluded beach areas" },
            { icon: "local_parking", title: "Complimentary Parking", description: "Free on-site parking" },
            { icon: "kayaking", title: "Water Activities", description: "Kayaking and snorkeling equipment" }
        ]
    },
    {
        id: 10,
        name: "Club Med",
        location: "Grace Bay, Providenciales",
        price: 320,
        pricePerChild: 160,
        serviceFee: 60,
        rating: 4.7,
        reviewCount: 178,
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        images: [
            "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        ],
        tags: ["All-Inclusive", "Adults Only", "Water Sports"],
        highlights: ["All-Inclusive", "Adults Only", "Water Sports"],
        badge: { label: "Premium", className: "bg-luxury-gold text-white" },
        description: "Experience the legendary Club Med all-inclusive luxury at our adults-only resort on Grace Bay Beach. Enjoy unlimited gourmet dining, premium beverages, water sports, and world-class entertainment in an elegant beachfront setting designed exclusively for sophisticated travelers.",
        amenities: [
            { icon: "all_inclusive", title: "All-Inclusive Premium", description: "Unlimited food, drinks, and activities included" },
            { icon: "18_up_rating", title: "Adults Only Resort", description: "Sophisticated atmosphere for guests 18+" },
            { icon: "kayaking", title: "Complimentary Water Sports", description: "Kayaking, snorkeling, windsurfing, and sailing" },
            { icon: "restaurant", title: "Gourmet Dining", description: "Multiple specialty restaurants and bars" },
            { icon: "sports_bar", title: "Entertainment & Shows", description: "Live music, themed parties, and performances" },
            { icon: "spa", title: "Spa Services", description: "Relaxation and wellness treatments available" },
            { icon: "fitness_center", title: "Fitness Center", description: "Fully equipped gym and group classes" },
            { icon: "local_parking", title: "Valet Parking", description: "Complimentary valet service" }
        ]
    },
    {
        id: 11,
        name: "Alexandra Resort",
        location: "Grace Bay, Providenciales",
        price: 220,
        pricePerChild: 110,
        serviceFee: 40,
        rating: 4.6,
        reviewCount: 164,
        image: "https://lh3.googleusercontent.com/p/AF1QipNmcg9Metm1vcr8vGtHh5cymrCq02C1_Ffdu0iH=s1360-w1360-h1020-rw",
        images: [
            "https://lh3.googleusercontent.com/p/AF1QipNmcg9Metm1vcr8vGtHh5cymrCq02C1_Ffdu0iH=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/p/AF1QipNtg_E2Px6uNlC3tGCtue5SssXWhAWzRBWu6o92=s1360-w1360-h1020-rw",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
            "https://lh3.googleusercontent.com/p/AF1QipPkitA59cwzGQFFa3DAQpR-KJX0VxUn0F5_3L3p=s1360-w1360-h1020-rw",
            "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        ],
        tags: ["All-Inclusive", "Lagoon Pool", "Water Sports"],
        highlights: ["All-Inclusive", "Lagoon Pool", "Water Sports"],
        badge: { label: "Family Friendly", className: "bg-green-500 text-white" },
        description: "Experience the perfect blend of luxury and family-friendly fun at Alexandra Resort, featuring 90 sophisticated suites along 600 feet of pristine Grace Bay Beach. Enjoy our signature lagoon-style pool, all-inclusive dining at multiple restaurants, and complimentary water sports in a relaxed, welcoming atmosphere.",
        amenities: [
            { icon: "all_inclusive", title: "All-Inclusive Package", description: "Unlimited dining, drinks, and activities" },
            { icon: "pool", title: "Lagoon-Style Pool", description: "Expansive pool with swim-up bar" },
            { icon: "kayaking", title: "Water Sports Included", description: "Kayaking, snorkeling, and windsurfing" },
            { icon: "restaurant", title: "Multiple Restaurants", description: "Five dining venues and bars" },
            { icon: "child_care", title: "Family Friendly", description: "Kids activities and family suites" },
            { icon: "spa", title: "Spa Services", description: "Full-service spa and wellness center" },
            { icon: "fitness_center", title: "Fitness Center", description: "Modern gym and tennis court" },
            { icon: "local_parking", title: "Complimentary Parking", description: "Free on-site parking" }
        ]
    }
]

/** Shown in the "Featured Resorts" section on the home page, in this order */
export const featuredExperienceIds = [5, 2, 7, 9]

/** Shown in the "New Arrivals" section on the home page, in this order */
export const newArrivalIds = [1, 10, 11, 8, 3, 9]

export function getExperience(id: number | string): Experience | undefined {
    return experiences.find(exp => exp.id === Number(id))
}

export function getExperiences(ids: number[]): Experience[] {
    return ids.map(id => getExperience(id)).filter((exp): exp is Experience => exp !== undefined)
}
