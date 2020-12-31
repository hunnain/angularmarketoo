export interface AllCoupons{
    coupons:[Coupon]
}

export interface Coupon {
  couponTitle: string;
  couponId: string;
  couponCode: string;
  startDate: Date;
  endDate: Date;
  allowFreeShipping: boolean;
  quantity: number;
  discountType: string;
  percentageDiscount: number;
  category: string;
  subCategory: string;
  extendedSubCategory: string;
  minSpend: number;
  maxSpend: number;
  perLimit: number;
  perCustomer: number;
  sellerId: string;
  seller?: any;
}
