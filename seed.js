var db = require('./models')

var seedLiquor = [{
    liquorType: 'Whiskey',
    },{
    liquorType: 'Vodka',
    },{
    liquorType: 'Rum', 
    },{
    liquorType: 'Gin',
    },{
    liquorType: 'Tequila',
    },{
    liquorType: 'Brandy'
}];

db.LiquorType.remove({}, function(err, remove){
    console.log(err);

    db.LiquorType.create(seedLiquor, function(err, createdType){
      if (err) { return console.log('ERROR', err); }
      console.log("All Types:", createdType);
      // process.exit();
    });

    var seedRecipes = [{
      img_url: "https://www.thecocktailproject.com/sites/default/files/styles/recipe-slider-img/public/knobcreek_oldfashioned_beauty_7832-4868-Edit.jpg?itok=cLs3oxvF" ,
      drinkName: 'Old Fashioned',
      description: 'Classic Whiskey Cocktail with a little citrus and a little sweetness',
      ingredients: 'Ice, Rocks Glass, Stirring Glass, Stirrer, Fruit Peeler, 3oz Whiskey of your choice, 1/2oz simple syrup, orange bitters, Angostura bitter,Luxardo cherries, orange',
      instructions: 'In your stirring glass start with 3 dashes of Orange Bitters and 3 dashes of Angostura bitters. Next add 1/2 oz of simple syrup and the whiskey. Add ice until it covers the ingredients and then some. When sitring stir clockwise keeping the stirrer along the glass to help melt the ice. Stir for 30 senconds then pour over your rocks glass with 3 ice cudes. Grab the orange and peel a think slice while holding over the glass. Squeeze the rind to release the oilss over the glass and then roll up and throw into the glass. Add two Luxardo cherries and enjoy!',
      votes: 24,
      liquorType: 'Whiskey'
    },{
      img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0iopevCUjaj7kiD7bA_k7U6jk5PRh3AQDpAFKdD6_lELaA4-jg',
      drinkName: 'Sazerac',
      description: 'New Orleans Staple Cocktail',
      ingredients: '1 sugar cube, Water, 1 1/2 ounces rye whiskey 2 dashes Peychaud’s Bitters, 1 dash angostura bitters, Ice, 1 barspoon absinthe (or Pernod, Lemon peel',
      instructions: 'Put the sugar cube in a mixing glass with just enough water to moisten it. Use the back of a barspoon to crush the cube. Add the rye, both bitters, and ice and stir until chilled, about 30 seconds. Add the absinthe to a chilled Old Fashioned glass. Turn the glass to coat the sides with the absinthe, then pour out the excess. Strain the rye mixture into the absinthe-coated glass. Twist and squeeze the lemon peel over the glass. Rub the rim of the glass with the peel, drop it into the cocktail, and serve. ',
      votes: 15,
      liquorType: 'Whiskey'
  },{
      img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9V6O4Lv1K4b9D0CceIzTYclqbW2RA9H5Uc4R7o8my5GXyTCPsAQ',
      drinkName: 'Manhattan',
      description: 'Another Classic, sweet and smooth',
      ingredients: '2 ounces Rye Whiskey, 1 ounce Sweet Vermouth, 3 dashes angostura bitters, 2-3 Luxardo cherries, A few drops of syrup from the cocktail cherries (optional)',
      instructions: 'Fill a mixing glass or cocktail shaker with ice. Add whiskey, sweet vermouth,bitters and cherry syrup. Stir for 90 seconds. Strain into a martini glass, garnish with cherries.',
      votes: 35,
      liquorType: 'Whiskey'
  },
  // delete later if you want
  // RUM
    {
      img_url: 'http://cdn1.foodviva.com/static-content/food-images/long-drinks-recipes/cuba-libre-drink-rum-coke/cuba-libre-drink-rum-coke.jpg',
      drinkName: 'Coke & Rum',
      description: 'Basic Bar Drink',
      ingredients: 'Ice, your favorite rum and Coca-Cola',
      instructions: 'Fill your cup with ice, pour 2oz of rum, then top with coca-cola. Add some lime if you want to be fancy',
      votes: 2,
      liquorType: 'Rum'
  },
  {
    img_url: 'https://assets.simplyrecipes.com/wp-content/uploads/2012/08/dark-n-stormy-horiz-c-640.jpg',
    drinkName: 'Dark and Stormty',
    description: 'Light and refreshing!',
    ingredients: 'Ice, Goslings Dark Rum, Ginger Beer and a Lime',
    instructions: 'Fill your cup with ice, pour 2oz of Goslings, then top with Ginger Beer. Add some lime to give it a fresh twist',
    votes: 31,
    liquorType: 'Rum'
},
{
  img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvWveb_XMH7p8SBoT5ow83pBaTPxS4GyKnOlQvCvUmz8W4SfUbhA',
  drinkName: 'Mai Tai',
  description: 'Tropical Cocktail for sitting on the beach',
  ingredients: '3⁄4 oz, Fresh lime juice, 1⁄4 oz, Rock candy syrup - 2 parts sugar, 1 part water, 1⁄4 oz Orgeat almond syrup, 1⁄2 oz Orange curaçao, 2 oz Premium aged rum - Appleton Estate 12-Year-Old or El Dorado 12- Year-Old',
  instructions: 'Add all the ingredients to a shaker and fill with crushed ice. Shake vigorously until the shaker is well-chilled and frosty on the outside. Pour unstrained into a double Old Fashioned glass.Garnish with half of a juiced lime and a fresh mint sprig.',
  votes: 9,
  liquorType: 'Rum'
},
// Vodka
{
  img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCgQ7euIFTbScVuqId29NZBdBi4XqB1puoqWqMkS_7PwS2Ot0g',
  drinkName: 'Vodka Soda',
  description: 'Skinny B**** Drink',
  ingredients: 'Ice,  2oz of your favorite vodka, Soda Water, and fruit of your choice',
  instructions: 'Fill your cup with ice, pour 2oz of vodka, then top with soda water. Add some lime, lemon, cucumbers or all of them to give it a flavor boost',
  votes: 8,
  liquorType: 'Vodka'
},
{
  img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekYKLvwt6uGtMtu92NegBaq6iY8sBKW_jjTc5UnH6hoUaSwAkkg',
  drinkName: 'Screwdriver',
  description: 'Sweet and Simple',
  ingredients: 'Ice, unflovored vodka and Orange Juice',
  instructions: 'Fill your cup with ice, pour 2oz of vodka, then top with OJ.',
  votes: 12,
  liquorType: 'Vodka'
},
{
  img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqGNqUwreQmeu3P4VdMagG3siRjz9Lc4eM673HJARZFIPVdupqSg',
  drinkName: 'Moscow Mule',
  description: 'Refreshing, citrus, and comes in a shiny copper cup',
  ingredients: 'Ice, unflavored Vodka, Ginger Beer, Limes',
  instructions: 'Fill your cup with ice, pour in 2oz of Vodka, add half of a lime - juiced, top with Ginger Beer. Add some lime wedges as a garnish',
  votes: 35,
  liquorType: 'Vodka'
},
// tequila
{
  img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzXfU-1rpOtJEbWOHNhAIgg50BT45ekkQq0ypNc2ulzCNjO13tA',
  drinkName: 'Margarita',
  description: 'Classic Tequila Cocktail',
  ingredients: 'Ice, Limes, Triple Agave Tequila, Agave Nectar, Soda Water',
  instructions: 'Fill a shaker with ice, pour 2oz of Tequila, squeeze enough limes for an oz of juice, add 1/5 oz Agave, then shake. Pour margarita in a glass the top with soda water.',
  votes: 29,
  liquorType: 'Tequila'
},
{
  img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO_WjPAWY1Re9i_le5cUxlVWt6sLBLCuXO8JQTzmTpdP6lT1N',
  drinkName: 'Bloody Maria',
  description: 'Breakfast and a drink',
  ingredients: 'Ice, Tequila, Bloody Mary Mix - ZingZang is prefered, Olives, Celery, beer, siracha and other garnishes',
  instructions: 'Fill your cup with ice, pour 2oz of tequila, add 2oz of bloody mary mix, pour in a dollop of siracha then stir. Tope with beer, and add the garnishes',
  votes: 19,
  liquorType: 'Tequila'
},   
{
  img_url: 'http://cdn1.foodviva.com/static-content/food-images/long-drinks-recipes/cuba-libre-drink-rum-coke/cuba-libre-drink-rum-coke.jpg',
  drinkName: 'Tequila Sunrise',
  description: 'Perfect for when it is too early for shots.',
  ingredients: 'Ice, Tequila, Orange Juice and Grenadine',
  instructions: 'Fill your cup with ice, pour 2oz of tequila, add OJ then pour 1/5 oz of Grenadine over the top.',
  votes: 6,
  liquorType: 'Tequila'
},
// GIn
{
  img_url: 'http://cdn1.foodviva.com/static-content/food-images/long-drinks-recipes/cuba-libre-drink-rum-coke/cuba-libre-drink-rum-coke.jpg',
  drinkName: 'Tequila Sunrise',
  description: 'Perfect for when it is too early for shots.',
  ingredients: 'Ice, Tequila, Orange Juice and Grenadine',
  instructions: 'Fill your cup with ice, pour 2oz of tequila, add OJ then pour 1/5 oz of Grenadine over the top.',
  votes: 6,
  liquorType: 'Tequila'
},
{
  img_url: 'http://cdn1.foodviva.com/static-content/food-images/long-drinks-recipes/cuba-libre-drink-rum-coke/cuba-libre-drink-rum-coke.jpg',
  drinkName: 'Tequila Sunrise',
  description: 'Perfect for when it is too early for shots.',
  ingredients: 'Ice, Tequila, Orange Juice and Grenadine',
  instructions: 'Fill your cup with ice, pour 2oz of tequila, add OJ then pour 1/5 oz of Grenadine over the top.',
  votes: 6,
  liquorType: 'Tequila'
},
{
  img_url: 'http://cdn1.foodviva.com/static-content/food-images/long-drinks-recipes/cuba-libre-drink-rum-coke/cuba-libre-drink-rum-coke.jpg',
  drinkName: 'Tequila Sunrise',
  description: 'Perfect for when it is too early for shots.',
  ingredients: 'Ice, Tequila, Orange Juice and Grenadine',
  instructions: 'Fill your cup with ice, pour 2oz of tequila, add OJ then pour 1/5 oz of Grenadine over the top.',
  votes: 6,
  liquorType: 'Tequila'
},

// Brandy
{
  img_url: 'https://fthmb.tqn.com/JMYDPA_4FUl-ZRbDrVCuMufFoHM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Sidecar-cocktail-GettyImages-503700853-58a338e73df78c4758d1f562.jpg',
  drinkName: 'Sidecar',
  description: 'Sidecar is a fantastic brandy sour',
  ingredients: 'Ice, brandy of choice (often cognac or Armagnac), orange liqueur, and lemon juice.',
  instructions: 'Fill your shaker with ice, pour in 2oz of brandy, orange liquor and 1/2oz of lemon juice. Shake and strain into a martini glass',
  votes: 12,
  liquorType: 'Brandy'
},
{
  img_url: 'https://fthmb.tqn.com/-UwFXIot6-1NdfZrdx3zq7bEaVA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VieuxCarre-200502683-001-56a175015f9b58b7d0bf7329.jpg',
  drinkName: 'Vieux Carre ',
  description: 'New Orleans Classic',
  ingredients: 'Ice, 3/4 ounce rye whiskey, 3/4 ounce Cognac, 3/4 ounce sweet vermouth, 2 dashes Peychaud Bitters, 2 dashes Angostura Aromatic Bitters, 1 bar spoon (1/2 teaspoon) Benedictine LiqueurCherry for garnish',
  instructions: 'Combine ingredients in a mixing glass, top with ice, stir for 30 seconds, then strain over ice. Garnish with a cherry',
  votes: 8,
  liquorType: 'Brandy'
},
{
  img_url: 'https://fthmb.tqn.com/A8uM-cOVRVus_yRt4wFqATnMsTo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ChampagneCocktail-200518593-001-56a1706a3df78cf7726aa870.jpg',
  drinkName: 'Champange Cocktail',
  description: 'Elegant drink with a sparkling flavor',
  ingredients: 'Sugar cube, Champange, 1/2 brandy of your choice',
  instructions: 'Take a champange flute and drop a sugar cube in, add the brandy then top with champange',
  votes: 24,
  liquorType: 'Brandy'
}
];
  
    // remove and reseed
    db.LiquorRecipe.remove({}, function(err, remove){
        console.log(err);
      
        db.LiquorRecipe.create(seedRecipes, function(err, createdRecipes){
          if (err) { return console.log('ERROR', err); }
          console.log("All Recipes:", createdRecipes);
          process.exit();
        });
    });
    
});
