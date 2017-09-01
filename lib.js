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
/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */

const constructCarts =
  listings =>
    customers => {
      // FINISHED
      const arrayOfCarts = 
          customers.reduce(
            (runningArray, currentCustomer) =>//current element is a customer, previously returned should be a 2D array of carts
            {
              const listOfItems = []
              const doIt = entries(currentCustomer.shoppingList).forEach((arg)=>//get the shoppingList as a 2D array, for each element in that 2D array, repeat the first element of the 2D array x number of times, where x is the second element of the 2D array
                  listOfItems.push(...itemRepeater(arg[0])(arg[1]))//(name)(count)
                )
              const newCart = {
                'customer': currentCustomer.name, 
                'items': listOfItems
              }
              runningArray.push(newCart)
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
