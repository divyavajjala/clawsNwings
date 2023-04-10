const items = [
    {
        id: 0,
        title: "chickenBiryani",
        category: "Biryani",
        price: 230,
        description: "Chicken biryani prepared with biryani gravy, chicken pieces, basmati rice and topped with crisply fried onions and leg piece served with gravy curry and raita."
    },
    {
        id: 1,
        title: "VegBiryani",
        category: "Biryani",
        price: 150,
        description: "Vegetable biryani prepared by layering the biryani gravy , vegetables , basmati rice and topped with crisply fried onions served with gravy curry and raita."
    },
    {
        id: 2,
        title: "EggBiryani",
        category: "Biryani",
        price: 170,
        description: "Claws'n wings signature egg biryani with tastefully cooked in a rich mix of long grain rice delicately flavoured with authentic herbs, spices and saffron, served with gravy curry and raita."
    },
    {
        id: 3,
        title: "MuttonBiryani",
        category: "Biryani",
        price: 230,
        description: "Mutton biryani with tastefully cooked in a rich mix of long grain rice delicately flavoured with authentic herbs, spices and saffron,layered with mutton. Served with gravy curry and raita."
    },
    {
        id: 4,
        title: "ChickenDumBiryani",
        category: "Biryani",
        price: 190,
        description: "Deliciously Decadent Flavored Dum Rice Layered with Chicken And Indian Whole Spices Dum Coked To Perfection served with gravy curry and raita."
    },
    {
        id: 5,
        title: "SpecialChickenBiryani",
        category: "Biryani",
        price: 210,
        description: "Richly flavored aromatic Dum rice Layered with juicy marinated chicken pieces in a delicate blend of whole spices and served with gravy curry and raita."
    },
    {
        id: 6,
        title: "FishBiryani",
        category: "Biryani",
        price: 230,
        description: "Fish biryani prepared by layering the biryani gravy , fish pieces , basmati rice and topped with crisply fried onions served with gravy curry and raita."
    },
    {
        id: 7,
        title: "EggNoodles",
        category: "Chinese FastFood",
        price: 139,
        description: "Noodles stir fried in wok with Soy sauce, spring onion, egg and white pepper."
    },
    {
        id: 8,
        title: "ChickenNoodles",
        category: "Chinese FastFood",
        price: 230,
        description: "Noodles stir fried in wok with Soy sauce, spring onion, long grain rice, chicken & white pepper."
    },
    {
        id: 9,
        title: "Chicken fried rice",
        category: "Chinese FastFood",
        price: 210,
        description: "Flavoured rice recipe made with cooked rice , finely chopped veggies and seasoning ingredients & Chicken."
    },
    {
        id: 10,
        title: "Veg Noodles",
        category: "Chinese FastFood",
        price: 129,
        description: "Noodles stir fried in wok with Soy sauce, spring onion, vegitables and white pepper."
    },
    {
        id: 11,
        title: "Veg Schezwan Noodels",
        category: "Chinese FastFood",
        price: 159
    },

    {
        id: 12,
        title: "Fried rice",
        category: "Chinese FastFood",
        price: 169,
        description: "Flavoured rice recipe made with cooked rice , finely chopped veggies and seasoning ingredients,"
    },
    {
        id: 13,
        title: "Gobi Manchurian",
        category: "Veg Appetizers",
        price: 150,
        description: "Gobi batter fried and sautéed in chef's special spices, red onions and topped off with some fresh green onions."
    },
    {
        id: 14,
        title: "Babycorn Manchurian",
        category: "Veg Appetizers",
        price: 180,
        description: "Baby corn batter fried and sautéed in chef's special spices, red onions and topped off with some fresh green onions."
    },
    {
        id: 15,
        title: "Mashroom Manchrian ",
        category: "Veg Appetizers",
        price: 180,
        description: "whole mushrrom batter fried and sautéed in chef's special spices, red onions and topped off with some fresh green onions."
    },

    {
        id: 16,
        title: "Veg Springrolls(4pc)",
        category: "Veg Appetizers",
        price: 150,
        description: "Vegetarian Spring Rolls crispy fried in gram flour batter and herbs."
    },
    {
        id: 17,
        title: "Chicken65",
        category: "Non-Veg Appetizers",
        price: 190,
        description: "Delicious and succulent chunks of chicken marinated and stir fried in a tangy mixed of spices."
    },
    {
        id: 18,
        title: "Chilli Chicken",
        category: "Non-Veg Appetizers",
        price: 200,
        description: "Diced chicken tossed with onion, capsicum and chilies in oyster and soy sauces."
    },

    {
        id: 19,
        title: "Vanilla Milk Shake",
        category: "Shakes&Jucices",
        price: 80
    },
    {
        id: 20,
        title: "Chocolate Milk Shake",
        category: "Shakes&Jucices",
        price: 80
    },
    {
        id: 21,
        title: "Sprite",
        category: "Shakes&Jucices",
        price: 70
    },
    {
        id: 22,
        title: "Coke",
        category: "Shakes&Jucices",
        price: 70
    },
    {
        id: 23,
        title: "Maaza",
        category: "Shakes&Jucices",
        price: 70
    },
    {
        id: 24,
        title: "Pizza",
        category: "Continental",
        price: 100,
        description: "tooped with Onions, sausage, peppers, olives,bell peppers"
    },
    {
        id: 25,
        title: "Chicken Pizza",
        category: "Continental",
        price: 120,
        description: "tooped with Onions, sausage, peppers,bell peppers and chicken"
    },
    {
        id: 26,
        title: "White Pasta",
        category: "Continental",
        price: 100,
        description: "Flavourful with Italian sausage, cheese, shredded Parmesan, and Parmesan-oregano seasoning."
    },
    {
        id: 27,
        title: "Pasta",
        category: "Continental",
        price: 120,
        description: "Flavourful with sweet tomato sause, Italian sausage, cheese, shredded Parmesan, and Parmesan-oregano seasoning."
    },
    {
        id: 28,
        title: "Sandwich",
        category: "Continental",
        price: 70,
        description: "veg sandwich served with some crispy fries with or without our delicious seasoning."
    }, 
    {
        id: 29,
        title: "ChickenSandwich",
        category: "Continental",
        price: 80,
        description: "chicken sandwich served with some crispy fries with or without our delicious seasoning."
    },
    {
        id: 30,
        title: "Potato Fries",
        category: "Continental",
        price: 50,
        description: "Crispy fries with or without our delicious seasoning."
    },
    {
        id: 31,
        title: "ButterScotch",
        category: "Ice-creams",
        price: 50
    },
    {
        id: 32,
        title: "Chocolate",
        category: "Ice-creams",
        price: 50
    },
    {
        id: 33,
        title: "Vanilla",
        category: "Ice-creams",
        price: 50
    },
]
export default items;