import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Array<Product>;

  constructor() {
  }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.2, 1.5, '我是一号商品，这是关于我的介绍，包含我的图片，标题，价格和描述', ['上衣']),
      new Product(2, '第二个商品', 2.2, 2.5, '我是二号商品，这是关于我的介绍，包含我的图片，标题，价格和描述', ['上衣']),
      new Product(3, '第三个商品', 3.4, 3.5, '我是三号商品，这是关于我的介绍，包含我的图片，标题，价格和描述', ['上衣']),
      new Product(4, '第四个商品', 1.5, 4.5, '我是四号商品，这是关于我的介绍，包含我的图片，标题，价格和描述', ['上衣']),
      new Product(5, '第五个商品', 2.7, 3.0, '我是五号商品，这是关于我的介绍，包含我的图片，标题，价格和描述', ['上衣']),
      new Product(6, '第六个商品', 6.8, 2.0, '我是六号商品，这是关于我的介绍，包含我的图片，标题，价格和描述', ['上衣']),
    ];
  }

}

export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {
  }
}
