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
    {
      img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9V6O4Lv1K4b9D0CceIzTYclqbW2RA9H5Uc4R7o8my5GXyTCPsAQ',
      drinkName: 'Coke & Rum',
      description: 'Another Classic, sweet and smooth',
      ingredients: '2 ounces Rye Whiskey, 1 ounce Sweet Vermouth, 3 dashes angostura bitters, 2-3 Luxardo cherries, A few drops of syrup from the cocktail cherries (optional)',
      instructions: 'Fill a mixing glass or cocktail shaker with ice. Add whiskey, sweet vermouth,bitters and cherry syrup. Stir for 90 seconds. Strain into a martini glass, garnish with cherries.',
      votes: 35,
      liquorType: 'Rum'
  }];
  
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
