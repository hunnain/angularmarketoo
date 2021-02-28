export interface Report {
    netProfit: number;
    referrelDeduction: number;
    storeCredit: number;
    refund: number;
    coupons: number;
    transactionsManagementFee: number;
    onlinePaymentFee: number;
    totalReimbursment: number;
    totalOrders: number;
    totalDeliveredOrders: number;
    totalCancelledOrders: number;
    totalRefundedOrders: number;
    shippingViaOwnAccount: number;
    shippingViaMarketooAccount: number;
    newFollowers: number;
    lastMonthFollowers: number;
    followersCompareDesc: string;
    averageBasketValue: number;
    averageBasketValueLastMonth: number;
    averageBasketValueCompareDesc: string;
    totalMessages: number;
    revenue: number;
    revenueLastMonth: number;
    totalActiveProducts: number;
    revenueCompareDesc: string;
}