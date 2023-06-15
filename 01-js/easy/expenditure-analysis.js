/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let output = [];
 
  if(Object.keys(transactions).length === 0){
    return output;
  }
  
  for(let i=0 ; i<6 ; i++){
      let cat = {};
      let catName = "";
      catName = transactions[i].category;
      let catPrice = 0;
      
      
      for(let j=0 ; j<6 ; j++){
        if(transactions[j].category == catName){
          catPrice = catPrice + transactions[j].price;
      
        }
      }   
      cat[catName]  = catPrice;
      output.push(cat);
     
  }

  const newOutput = output.filter(
    (obj , index , self) =>
    index ===
    self.findIndex(
      (o) => JSON.stringify(o) === JSON.stringify(obj)
    )
  );


  return newOutput;
}

let transactions = [{ itemName : "milk" ,  category : "food", price : 120 ,  timestamp : 1} ,
                    { itemName : "carrots" ,  category : "food", price : 50 ,  timestamp : 1}, 
                    { itemName : "keyboard" ,category : "electronics", price : 5000 ,timestamp : 1},
                    { itemName : "monitor" ,  category : "electronics", price : 27000 ,  timestamp : 1} ,
                    { itemName : "shirt" ,  category : "clothes", price : 575 ,  timestamp : 1}, 
                    { itemName : "pants" ,  category : "food", price : 1300 ,  timestamp : 1}
                   ];
const ans = calculateTotalSpentByCategory(transactions);
console.log(ans);

module.exports = calculateTotalSpentByCategory;
