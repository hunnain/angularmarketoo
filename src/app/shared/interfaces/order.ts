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
    shipmentMethod: any;
    note: string;
    creationDate: string;
    customer: any;
    invoice: any;
    orderedProductDetails: orderedProductDetails[];
}

interface orderedProductDetails {
    orderId: number;
    productId: string;
    unitAmount: number;
    qty: number;
    totalAmount: number;
    size: any;
    colour: any;
    name: string;
}