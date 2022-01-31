//to create Order class
class Order {
    constructor(Id, Title, Quantity, Message, City){
        // this is used to speciffy how I want the Objects created by the constructor to be like
        this.Id = Id;
        this.Title = Title;
        this.Quantity = Quantity;
        this.Message = Message;
        this.City = City;
    }
}

module.exports = Order;