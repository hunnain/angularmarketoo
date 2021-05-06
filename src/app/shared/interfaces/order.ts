export interface Order {
    orderId: number;
    customerId: string;
    country: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    subtotal: number;
    isInternationalShipping: boolean;
    total: number;
    currency: string;
    orderStatus: string;
    paymentStatus: string;
    paymentService: string;
    shipmentMethod?: null;
    paymentMethod: string;
    note: string;
    isDiscounted: boolean;
    isReturnExchangeRequested: boolean;
    couponCode: string;
    couponKey: string;
    discountAmount: number;
    discountType: string;
    paymentMethodKey: string;
    fpsImageUrl: string;
    creationDate: string;
    deliveryDate?: null;
    confirmationDate?: null;
    customer: Customer;
    invoice: Invoice;
    shippingDetail: ShippingDetail;
    orderedProductDetails?: (OrderedProductDetailsEntity)[] | null;
    additionalOrderAmounts?: (null)[] | null;
}
export interface Customer {
    username: string;
    email: string;
    customerId: string;
    imageUrl?: null;
    phoneNumber?: null;
    country?: null;
    zipCode?: null;
    regionState?: null;
    address?: null;
    city?: null;
    flatPlot?: null;
    message?: null;
    isNotificationSubscribed: boolean;
}
export interface Invoice {
    invoiceNo: string;
    customerName: string;
    grandTotal: number;
    orderId: number;
    creationDate: string;
    country: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    paymentService?: null;
    paymentMethod?: null;
    invoiceProductDetails?: (InvoiceProductDetailsEntity)[] | null;
}
export interface InvoiceProductDetailsEntity {
    invoiceNo: string;
    productName: string;
    qty: number;
    price: number;
    total: number;
}
export interface ShippingDetail {
    orderId: number;
    trackingDetails: string;
    shippingCost: number;
    courierService: string;
    images?: (null)[] | null;
    isMarketooAccount: boolean;
}
export interface OrderedProductDetailsEntity {
    orderId: number;
    productId: string;
    unitAmount: number;
    quantity: number;
    totalAmount: number;
    size?: null;
    color?: null;
    name: string;
}
