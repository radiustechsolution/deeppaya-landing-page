export interface NetworkProvider {
  name: string;
  code: string;
  img: string;
}
export interface DataPlan {
  PRODUCT_CODE: string;
  PRODUCT_ID: string;
  PRODUCT_NAME: string;
  PRODUCT_AMOUNT: number;
  PRODUCT_SOURCE: number;
}
export interface CableProvider {
  name: string;
  code: string;
  img: string;
}

export interface CablePackage {
  PACKAGE_ID: string;
  PACKAGE_NAME: string;
  PACKAGE_AMOUNT: string;
  PRODUCT_DISCOUNT_AMOUNT: string;
  PRODUCT_DISCOUNT: string;
}
export interface ElectricityProvider {
  name: string;
  code: string;
  img: string;
}
export interface EducationProduct {
  PRODUCT_CODE: string;
  PRODUCT_DESCRIPTION: string;
  PRODUCT_AMOUNT: string;
  img: string;
}

export interface ApiResponse {
  status: number;
  message: string;
  data: {
    network_provider: NetworkProvider[];
    data_plans: {
      [key: string]: {
        ID: string;
        PRODUCT: DataPlan[];
      }[];
    };
    cable_provider: CableProvider[];
    cable: {
      TV_ID: {
        [key: string]: {
          ID: string;
          PRODUCT: CablePackage[];
        }[];
      };
    };
    elecricity: ElectricityProvider[];
    education: {
      EXAM_TYPE: EducationProduct[];
    };
  };
}
