'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => {
        const builderFunction = (counter, array, thingToAdd)=>//add that thingToAdd to the array counter number of times
        {//returns an array
          if(counter === 0)//end condition
            return array
          array.push(thingToAdd)
          return builderFunction(counter - 1, array, thingToAdd)
        }
        return builderFunction(count, [], itemName)
    }
console.log(itemRepeater("Jay")(100))
/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */

const constructCarts =
  listings =>
    customers => {
      // TODO
      const arrayOfCarts = 
          customers.reduce(
            (runningArray, currentCustomer) =>//current element is a customer, previously returned should be a 2D array of carts
            {
              //make a cart, push it on
              const listOfItems = listings.reduce(//will return a list of items from the shopping cart
                (p, currentListing) =>//p is the running list, c is a listing
                {
                  //I need to check 'c' against currentCustomer.shoppingList
                  if(currentCustomer.shoppingList[currentListing.name] !== undefined)
                    p.push(currentListing.name);
                  return p
                }, []
              )
              const obby = {
                'customer': currentCustomer.name, 
                'items': listOfItems
              }
              runningArray.push(obby)
              return runningArray
            }
            ,[]
          )
          return arrayOfCarts
    }

module.exports = {
  listing,
  customer,
  constructCarts
}
