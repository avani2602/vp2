class FoodC{
    constructor(){
        this.index = null;
        this.Food = 20;
    }
    getFoodStock(){
        var foodStock = database.ref("Food");
        foodStock.on("value",(data)=>{
            Food = data.val();
          })
    }
    updateFoodStock(count){
        database.ref('/').update({
          Food: count
        });
      }
      update(){
        var foodIndex = "Food Stock" + this.index;
        database.ref(foodIndex).update({
            Food: this.Food 
        });
      }
    
    
}