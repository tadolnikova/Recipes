function MyRecipesComponent({label, ingredients, calories, image, dishType, mealType}) {
   
    return (<div>
    <div className="container column">
        <h2>{label}</h2>
    </div>
    <div className="container column">
        <h3>Category: {dishType}, {mealType}</h3>
    </div>
    <div className="container search">
        <img className="tasty" src={image} alt="fooditem"/>
    </div>
        <ul className="list">
            <h3> <img src="https://img.icons8.com/external-bearicons-gradient-bearicons/64/000000/external-Recipe-cooking-bearicons-gradient-bearicons.png" alt="list"/>Ingredients ({calories.toFixed()}kcal)</h3>
            {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
           
            ))}
        </ul>
        
        <div className="container">
       
        </div>
   
    </div>)
}

export default MyRecipesComponent;