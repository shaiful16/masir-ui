import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// tslint:disable
// Menu
export interface Menu {
	path?: string;
	title?: string;
	type?: string;
	megaMenu?: boolean;
	image?: string;
	active?: boolean;
	badge?: boolean;
	badgeText?: string;
	children?: Menu[];
}

@Injectable({providedIn: 'root'})
export class CustomNavService {

	constructor() { }
	public screenWidth: any;
	public leftMenuToggle = false;
	public mainMenuToggle = false;

	MENUITEMS: Menu[] = [
		{  title: 'home', path: '', type: 'sub',active: true },
		{  title: 'category', path: '/shop/collection/left/sidebar', type: 'link' },
		{  title: 'campaigns', path: '/pages/collection', type: 'link' },
		{  title: 'about us', path: '/pages/aboutus', type: 'link' },
		{  title: 'Theme', type: 'sub', active: false, children: [
				{ title: 'Home page', type: 'sub', active: false, children: [
						{ path: '/home/fashion', title: 'fashion-01', type: 'link' },
						{ path: '/home/fashion-2', title: 'fashion-02', type: 'link' },
						{ path: '/home/fashion-3', title: 'fashion-03', type: 'link' },
						{ path: '/home/vegetable', title: 'vegetable', type: 'link' },
						{ path: '/home/watch', title: 'watch', type: 'link' },
						{ path: '/home/furniture', title: 'furniture', type: 'link' },
						{ path: '/home/flower', title: 'flower', type: 'link' },
						{ path: '/home/beauty', title: 'beauty', type: 'link' },
						{ path: '/home/electronics', title: 'electronics', type: 'link' },
						{ path: '/home/pets', title: 'pets', type: 'link' },
						{ path: '/home/gym', title: 'gym', type: 'link' },
						{ path: '/home/tools', title: 'tools', type: 'link' },
						{ path: '/home/shoes', title: 'shoes', type: 'link' },
						{ path: '/home/bags', title: 'bags', type: 'link' },
						{ path: '/home/marijuana', title: 'marijuana', type: 'link' }
					]
				},
				{ title: 'Category page', type: 'sub', active: false, children: [
						{ path: '/shop/collection/left/sidebar', title: 'left-sidebar', type: 'link' },
						{ path: '/shop/collection/right/sidebar', title: 'right-sidebar', type: 'link' },
						{ path: '/shop/collection/no/sidebar', title: 'no-sidebar', type: 'link' },
					]
				},
				{ title: 'Single product', type: 'sub', active: false, children: [
						{ path: '/shop/product/left/sidebar/trim-dress', title: 'left-sidebar', type: 'link' },
						{ path: '/shop/product/right/sidebar/trim-dress', title: 'right-sidebar', type: 'link' },
						{ path: '/shop/product/no/sidebar/trim-dress', title: 'no-sidebar', type: 'link' },
						{ path: '/shop/product/three/column/trim-dress', title: 'three-column', type: 'link' },
						{ path: '/shop/product/four/image/belted-dress', title: 'four-image', type: 'link' },
						{ path: '/shop/product/bundle/trim-dress', title: 'bundle-product', type: 'link' },
						{ path: '/shop/product/image/outside/trim-dress', title: 'image-outside', type: 'link' }
					]
				},
				{ title: 'portfolio', type: 'sub', active: false, children: [
						{ path: '/pages/portfolio/grid/two', title: 'portfolio-grid-2', type: 'link' },
						{ path: '/pages/portfolio/grid/three', title: 'portfolio-grid-3', type: 'link' },
						{ path: '/pages/portfolio/grid/four', title: 'portfolio-grid-4', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/two', title: 'mesonary-grid-2', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/three', title: 'mesonary-grid-3', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/four', title: 'mesonary-grid-4', type: 'link' },
						{ path: '/pages/portfolio/masonry/full-width', title: 'mesonary-Full-Width', type: 'link' }
					]
				},
				{ title: 'add-to-cart', type: 'sub', active: false, children: [
						{ path: '/shop/cart', title: 'cart', type: 'link' },
					]
				},
				{ title: 'theme-elements', type: 'sub', active: false, children: [
						{ path: '/elements/theme/title', title: 'title', type: 'link' },
						{ path: '/elements/theme/collection-banner', title: 'collection-banner', type: 'link' },
						{ path: '/elements/theme/home-slider', title: 'home-slider', type: 'link' },
						{ path: '/elements/theme/category', title: 'category', type: 'link' },
						{ path: '/elements/theme/services', title: 'services', type: 'link' }
					]
				},
				{ title: 'product-elements', type: 'sub', active: false, children: [
						{ path: '/elements/product/slider', title: 'product-slider', type: 'link' },
						{ path: '/elements/product/banners', title: 'banners', type: 'link' },
						{ path: '/elements/product/tabs', title: 'product-tabs', type: 'link' },
						{ path: '/elements/product/multi-slider', title: 'multi-slider', type: 'link' }
					]
				},
				{ title: 'email-template', type: 'sub', active: false, children: [
						{ path: '', title: 'order-success', type: 'extTabLink' },
						{ path: '', title: 'order-success-2', type: 'extTabLink' },
						{ path: '', title: 'email-template', type: 'extTabLink' },
						{ path: '', title: 'email-template-2', type: 'extTabLink' }
					]
				},
				{ title: 'account', type: 'sub', active: false, children: [
						{ path: '/pages/wishlist', title: 'wishlist', type: 'link' },
						{ path: '/pages/cart', title: 'cart', type: 'link' },
						{ path: '/pages/dashboard', title: 'dashboard', type: 'link' },
						{ path: '/pages/login', title: 'login', type: 'link' },
						{ path: '/pages/register', title: 'register', type: 'link' },
						{ path: '/pages/contact', title: 'contact', type: 'link' },
						{ path: '/pages/forget/password', title: 'forget-password', type: 'link' },
						{ path: '/pages/profile', title: 'profile', type: 'link' },
						{ path: '/pages/checkout', title: 'checkout', type: 'link' },
					]
				},
				{ title: 'compare', type: 'sub', active: false, children: [
						{ path: '/pages/compare/one', title: 'compare-1', type: 'link' },
						{ path: '/pages/compare/two', title: 'compare-2', type: 'link', badge: true, badgeText: 'new' }
					]
				},
				{ title: 'page', type: 'sub', active: false, children: [
						{ path: '/pages/aboutus', title: 'about-us', type: 'link' },
						{ path: '/pages/search', title: 'search', type: 'link' },
						{ path: '/pages/typography', title: 'typography', type: 'link', badge: true, badgeText: 'new' },
						{ path: '/pages/review', title: 'review', type: 'link', badge: true, badgeText: 'new' },
						{ path: '/pages/order/success', title: 'order-success', type: 'link' },
						{ path: '/pages/collection', title: 'collection', type: 'link' },
						{ path: '/pages/lookbook', title: 'lookbook', type: 'link' },
						{ path: '/pages/404', title: '404', type: 'link' },
						{ path: '/pages/comingsoon', title: 'coming-soon', type: 'link', badge: true, badgeText: 'new' },
						{ path: '/pages/faq', title: 'faq', type: 'link' },
					]
				},
				{ title: 'blogs', type: 'sub', active: false, children: [
						{ path: '/pages/blog/left/sidebar', title: 'left-sidebar', type: 'link' },
						{ path: '/pages/blog/right/sidebar', title: 'right-sidebar', type: 'link' },
						{ path: '/pages/blog/no/sidebar', title: 'no-sidebar', type: 'link' },
						{ path: '/pages/blog/details', title: 'blog-details', type: 'link' }
					]
				}
			]
		},
	];

	LEFTMENUITEMS: Menu[] = [
		{
			title: 'bags', type: 'sub', active: false, children: [
				{ path: '/home/fashion', title: 'shopper bags', type: 'link' },
				{ path: '/home/fashion', title: 'laptop bags', type: 'link' },
				{ path: '/home/fashion', title: 'clutches', type: 'link' },
				{
					path: '/home/fashion', title: 'purses', type: 'link', active: false, children: [
						{ path: '/home/fashion', title: 'purses',  type: 'link' },
						{ path: '/home/fashion', title: 'wallets',  type: 'link' },
						{ path: '/home/fashion', title: 'leathers',  type: 'link' },
						{ path: '/home/fashion', title: 'satchels',  type: 'link' }
					]
				},
			]
		},
		{
			title: 'footwear', type: 'sub', active: false, children: [
				{ path: '/home/fashion', title: 'sport shoes', type: 'link' },
				{ path: '/home/fashion', title: 'formal shoes', type: 'link' },
				{ path: '/home/fashion', title: 'casual shoes', type: 'link' }
			]
		},
		{
			path: '/home/fashion', title: 'watches', type: 'link'
		}
	];


	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
	leftMenuItems = new BehaviorSubject<Menu[]>(this.LEFTMENUITEMS);

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}
}
