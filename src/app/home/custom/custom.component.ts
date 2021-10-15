import { Component, OnInit } from '@angular/core';
import { ProductSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  public products: Product[] = [];
  public productCollections: any[] = [];

  constructor(private http: HttpClient, public productService: ProductService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type === 'fashion');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) { this.productCollections.push(collection); }
        });
      });
    });
  }

  public ProductSliderConfig: any = ProductSlider;

  public sliders = [
    {
      title: 'welcome to Enterprise Ecommerce ',
      subTitle: 'Tools of your choice',
      image: 'assets/custom-image/slider/21.jpg'
    }, {
      title: 'welcome to Enterprise Ecommerce',
      subTitle: 'Tools of your choice',
      image: 'assets/custom-image/slider/22.jpg'
    }/*, {
      title: 'welcome to Enterprise Ecommerce',
      subTitle: 'Tools of your choice',
      image: `${environment.apiUrl}/organizationUiBanner/getFileByPath/1.png`
    }*/];

  // Collection banner
  public collections = [
    {
      image: 'assets/images/collection/fashion/1.jpg',
      save: 'save 50%',
      title: 'men'
    }, {
      image: 'assets/images/collection/fashion/2.jpg',
      save: 'save 40%',
      title: 'women'
    }];

  // Blog
  public blog = [
    {
      image: 'assets/images/blog/1.jpg',
      date: '25 January 2018',
      title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
      by: 'John Dio'
    }, {
      image: 'assets/images/blog/2.jpg',
      date: '26 January 2018',
      title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
      by: 'John Dio'
    }, {
      image: 'assets/images/blog/3.jpg',
      date: '27 January 2018',
      title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
      by: 'John Dio'
    }, {
      image: 'assets/images/blog/4.jpg',
      date: '28 January 2018',
      title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
      by: 'John Dio'
    }];

  // Logo
  public logo = [
    {
      image: 'assets/images/logos/1.png',
    }, {
      image: 'assets/images/logos/2.png',
    }, {
      image: 'assets/images/logos/3.png',
    }, {
      image: 'assets/images/logos/4.png',
    }, {
      image: 'assets/images/logos/5.png',
    }, {
      image: 'assets/images/logos/6.png',
    }, {
      image: 'assets/images/logos/7.png',
    }, {
      image: 'assets/images/logos/8.png',
    }];

  ngOnInit(): void {
    this.getBannerList();
  }

  // Product Tab collection
  getBannerList() {
    this.http.get<any>(`${environment.apiUrl}/organizationUiBanner/getFileByPath/1.png`).
    subscribe((res: any) => {
          console.log(res);
          if (res.status === true) {
            res.data.map(element => this.sliders.push(element));
          }
        },
        (err: any[]) => {
        });
  }

  // Product Tab collection
  getCollectionProducts(collection) {
    return this.products.filter((item) => {
      if (item.collection.find(i => i === collection)) {
        return item;
      }
    });
  }

}
