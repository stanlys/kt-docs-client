export interface IDelivery {
  orgname: string;
  website: string;
  phone: string;
}

export interface ILoadingDelivery {
  isLoading: boolean;
  error: string | null;
  organization: Array<IDelivery>;
}
