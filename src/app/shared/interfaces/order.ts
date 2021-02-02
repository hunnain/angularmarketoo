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
    customer: Customer;
    invoice: Invoice;
    orderedProductDetails?: (OrderedProductDetailsEntity)[] | null;
}

export interface Customer {
    username: string;
    email: string;
    customerId: string;
    phoneNumber?: null;
    country?: null;
    zipCode?: null;
    regionState?: null;
    address?: null;
    city?: null;
    flatPlot?: null;
    message?: null;
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
    invoiceProductDetails?: (InvoiceProductDetailsEntity)[] | null;
}
export interface InvoiceProductDetailsEntity {
    invoiceNo: string;
    productName: string;
    qty: number;
    price: number;
    total: number;
}
export interface OrderedProductDetailsEntity {
    orderId: number;
    productId: string;
    unitAmount: number;
    qty: number;
    totalAmount: number;
    size?: null;
    colour?: null;
    name: string;
}
