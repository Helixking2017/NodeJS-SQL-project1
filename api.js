var Order = require('./order')
const dboperations = require('./dboperations')

//what is then?
dboperations.getOrders().then(result => {
    console.log(result)
})