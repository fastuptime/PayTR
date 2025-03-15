declare module 'paytr-node' {
  export interface PayTRConfig {
    merchantId: string;
    merchantKey: string;
    merchantSalt: string;
    testMode?: boolean;
    debug?: boolean;
    timeout?: number;
    baseUrl?: string;
  }

  export interface IframeParams {
    userIp: string;
    merchantOid: string;
    email: string;
    paymentAmount: string;
    userName: string;
    userAddress: string;
    userPhone: string;
    merchantOkUrl: string;
    merchantFailUrl: string;
    userBasket: string | Array<Array<any>>;
    paymentType?: string;
    installmentCount?: string;
    currencyCode?: string;
    testMode?: string;
    noInstallment?: string;
    maxInstallment?: string;
    noPayment?: string;
    lang?: string;
    timeoutLimit?: string;
    cardType?: string;
    debug?: string;
  }

  export interface DirectParams {
    userIp: string;
    merchantOid: string;
    email: string;
    paymentAmount: string;
    cardOwner: string;
    cardNumber: string;
    cardExpireMonth: string;
    cardExpireYear: string;
    cardCvc: string;
    userName: string;
    userAddress: string;
    userPhone: string;
    merchantOkUrl: string;
    merchantFailUrl: string;
    userBasket: string | Array<Array<any>>;
    paymentType?: string;
    installmentCount?: string;
    currencyCode?: string;
    testMode?: string;
    non3d?: string;
    lang?: string;
    cardType?: string;
    syncMode?: string;
    storeCard?: string;
    utoken?: string;
    debug?: string;
  }

  export interface LinkParams {
    name: string;
    price: string;
    currency: string;
    maxInstallment: string;
    linkType: 'product' | 'collection';
    minCount?: string;
    maxCount?: string;
    email?: string;
    lang?: string;
    getQr?: string;
    pft?: string;
    expiryDate?: string;
    callbackLink?: string;
    callbackId?: string;
    debug?: string;
  }

  export interface CardStorageParams extends DirectParams {
    storeCard: '1';
  }

  export interface SavedCardPaymentParams {
    userIp: string;
    merchantOid: string;
    email: string;
    paymentAmount: string;
    userName: string;
    userAddress: string;
    userPhone: string;
    merchantOkUrl: string;
    merchantFailUrl: string;
    userBasket: string | Array<Array<any>>;
    utoken: string;
    ctoken: string;
    cvv?: string;
    paymentType?: string;
    installmentCount?: string;
    currencyCode?: string;
    testMode?: string;
    non3d?: string;
    lang?: string;
    cardType?: string;
    syncMode?: string;
    debug?: string;
  }

  export interface RecurringPaymentParams extends SavedCardPaymentParams {
  }

  export interface PlatformTransferParams {
    merchantOid: string;
    transId: string;
    submerchantAmount: string;
    totalAmount: string;
    transferName: string;
    transferIban: string;
  }

  export interface RefundOptions {
    referenceNo?: string;
  }

  export interface InstallmentOptions {
    singleRatio?: string;
    abroadRatio?: string;
  }

  export default class PayTR {
    constructor(options: PayTRConfig);
    
    config: any;
    
    iframe: {
      createToken: (params: IframeParams) => Promise<any>;
      validateHash: (params: any) => boolean;
    };
    
    direct: {
      createPayment: (params: DirectParams) => Promise<any>;
      validateHash: (params: any) => boolean;
    };
    
    link: {
      create: (params: LinkParams) => Promise<any>;
      delete: (id: string) => Promise<any>;
      sendSms: (id: string, phoneNumber: string) => Promise<any>;
      sendEmail: (id: string, email: string) => Promise<any>;
      validateCallback: (params: any) => boolean;
    };
    
    card: {
      store: (params: CardStorageParams) => Promise<any>;
      list: (utoken: string) => Promise<any>;
      delete: (utoken: string, ctoken: string) => Promise<any>;
      payWithSavedCard: (params: SavedCardPaymentParams) => Promise<any>;
    };
    
    recurring: {
      createPayment: (params: RecurringPaymentParams) => Promise<any>;
    };
    
    bin: {
      query: (binNumber: string) => Promise<any>;
    };
    
    installment: {
      getRates: (options?: InstallmentOptions) => Promise<any>;
    };
    
    refund: {
      create: (merchantOid: string, amount: number, options?: RefundOptions) => Promise<any>;
    };
    
    status: {
      query: (merchantOid: string) => Promise<any>;
    };
    
    transaction: {
      list: (startDate: string, endDate: string) => Promise<any>;
    };
    
    report: {
      summary: (startDate: string, endDate: string) => Promise<any>;
      detail: (date: string) => Promise<any>;
    };
    
    platform: {
      transfer: (params: PlatformTransferParams) => Promise<any>;
      getReturnedPayments: (startDate: string, endDate: string) => Promise<any>;
      sendReturnedPayment: (transId: string, transfers: Array<any>) => Promise<any>;
      validateCallback: (params: any) => boolean;
    };
  }
}
