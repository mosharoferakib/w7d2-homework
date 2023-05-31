// Q1:

const shopItems = [
    {
      id: 1,
      name: "Air Max 97",
      price: 130.00,
      desc: "The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes.",
      category: "shoes"
    },
    {
      id: 2,
      name: "Adidas NMD R1",
      price: 128,
      desc: "New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
      category: "shoes"
    },
    {
      id: 3,
      name: "Gucci Oversize T-shirt with Interlocking G",
      price: 580,
      desc: "The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
      category: "shirts"
    },
    {
      id: 4,
      name: "Nike Sportswear Club",
      price: 18.97,
      desc: "The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
      category: "shirts"
    },
    {
      id: 5,
      name: "Spanx Flare Jeans, Vintage Indigo",
      price: 148,
      desc: "These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
      category: "pants"
    },
    {
      id: 6,
      name: "Bonobos Premium Stretch Jeans",
      price: 69,
      desc: "Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
      category: "pants"
    }
  ]
  
  function displayShopItems(items) {
    for (const item of items) {
      console.log("Name: \t", item.name);
      console.log("Price: \t", item.price)
      console.log("About: \t", item.desc)
      console.log("Category: ", item.category)
    }
  }
  
  displayShopItems(shopItems)




// Q2:  


  
const hwPerson = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [{
    oberwise: "Chocolate",
    dunkin: "Vanilla",
    culvers: "All of them",
    mcDonalds: "Sham-rock-shake",
    cupids_candies: "Chocolate Malt",
  }],
}

function displayFavoriteFoods(obj, indent = "") {
  for (const key in obj) {
    const value = obj[key];
  
    if (Array.isArray(value)) {
      console.log(`${indent}${key} :`);
      for (const item of value) {
        console.log(`${indent}${item}`);
      }
    } else if (typeof value === "object") {
      console.log(`${indent}${key} :`);
      displayFavoriteFoods(value, indent + "  ");
    } else {
      console.log(`${indent}${key} :`);
      console.log(`${indent}${value}`);      }
    }
}
  
displayFavoriteFoods(hwPerson);
  

// Q3:


function checkStringLength(string) {
  return new Promise((resolve, reject) => {
    if (string.length > 10) {
      resolve("Big word");
    } else {
      reject("Small String");
    }
  });
}

checkStringLength("cat")
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })