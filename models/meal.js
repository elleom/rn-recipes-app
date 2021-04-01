class Meal {

    constructor(id, categoryIds, title, affordability, complexity, imageUrl, duration, ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree; //bool
        this.isVegan = isVegan; //bool
        this.isVegetarian = isVegetarian; //bool
        this.isLacotoseFree = isLactoseFree; //bool


    }

}

export default Meal;