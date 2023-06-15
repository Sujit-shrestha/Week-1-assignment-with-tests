/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(trans) {
  let transactions = trans;
  let output = [];
 
  if(Object.keys(transactions).length === 0){
    return output;
  }
  
  for(let i=0 ; i<transactions.length ; i++){
      let cat = {};
      let catName = "";
      catName = transactions[i].category;
      let catPrice = 0;
      
      
      for(let j=0 ; j<transactions.length ; j++){
        if(transactions[j].category == catName){
          catPrice = catPrice + transactions[j].price;
      
        }
      }   
      cat = { category : catName , totalSpent : catPrice};
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

let transactions1 = [{ itemName : 'milk' ,  category : 'food', price : 120 ,  timestamp : 1 , } ,
                    { itemName : 'carrots' ,  category : 'food', price : 50 ,  timestamp : 1 , }, 
                    { itemName : 'keyboard' ,category : 'electronics', price : 5000 ,timestamp : 1 , },
                    { itemName : 'monitor' ,  category : 'electronics', price : 27000 ,  timestamp : 1 , } ,
                    { itemName : 'shirt' ,  category :'clothes', price : 575 ,  timestamp : 1 , }, 
                    { itemName : 'pants' ,  category : 'food', price : 1300 ,  timestamp : 1 , }
                   ];
let transactions   =  [{
				id: 1,
				timestamp: 1656076800000,
				price: 10,
				category: 'Food',
				itemName: 'Pizza',
			},
			{
				id: 2,
				timestamp: 1656259600000,
				price: 20,
				category: 'Food',
				itemName: 'Burger',
			},
			{
				id: 3,
				timestamp: 1656019200000,
				price: 15,
				category: 'Clothing',
				itemName: 'T-Shirt',
			},
			{
				id: 4,
				timestamp: 1656364800000,
				price: 30,
				category: 'Electronics',
				itemName: 'Headphones',
			},
			{
				id: 5,
				timestamp: 1656105600000,
				price: 25,
				category: 'Clothing',
				itemName: 'Jeans',
			},
		];
  
const ans = calculateTotalSpentByCategory(transactions);
console.log(ans);

module.exports = calculateTotalSpentByCategory;
