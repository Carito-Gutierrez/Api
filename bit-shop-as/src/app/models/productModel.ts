export class Product {
    //attr
    _id?: string;
    name: string;
    price?: number;
    availableElemnts?: number;
    description: string;
    image: string;
    tags: string[];
  
    constructor(
      _id = '',
      name = '',
      price = undefined,
      availableElemnts = undefined,
      description = '',
      image = '',
      tags = []
    ) {
      this._id = _id;
      this.name = name;
      this.price = price;
      this.availableElemnts = availableElemnts;
      this.description = description;
      this.image = image;
      this.tags = tags;
    }
  }