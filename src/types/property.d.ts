interface Property {
  id?: number;
  title?: string;
  description?: string;
  typeId?: number;
  availableFrom?: Date;
  address?: PropertyAddress;
  deposit?: string | number; /// پیش پرداخت
  monthlyRent?: string | number; /// اجاره ماهانه
  tenancyDaysStart?: number;
  tenancyDaysEnd?: number;
  maxAllowedTenants?: number;
  bedNumber?: number;
  bathroomNumber?: number;
  receptionNumber?: number;
  landArea?: number;
  furnishing?: string;
  buildDate?: Date;
  options?: string[];
  streetView?: PropertyStreetView;
  hasRemoteView?: boolean;
  hasRequested?: boolean;
  coverImageId?: string;
  status?: PropertyStatus;
  featureIds?: number[];
  additionalFeatures?: string[];
  files?: PropertyFiles[];
  tours?: Tour[];
  cover?: File;
  features?: PropertyFeature[];
  createdAt?: Date;
  currency?: string;
  type?: { description?: string; id?: number; image?: File; title?: string };
  href?: string;
  user?: Profile;
  isNewBuild?: boolean;
  isFavorited?: boolean;
  imagesCount?: number;
  landlord?: Profile;
  userRole?: "agent" | "landlord";
  landlordEmail?: string | null;
  agentCommissionAmount?: string | number;
  agentBankAccountId?: string | number;
  agentBankAccount?: BankAccount;
  epcFile?: File;
}

interface PropertyFeature {
  id?: number;
  title?: string;
  type?: string;
  icon?: File;
}

interface PropertyStreetView {
  StreetView_Lat?: string;
  StreetView_Lng?: string;
  StreetView_Heading?: string;
  StreetView_Pitch?: string;
  StreetView_Zoom?: string;
}
interface PropertyAddress {
  address_1?: string;
  address_2?: string;
  postcode?: any;
  latitude?: string;
  longitude?: string;
  city?: { id?: number | string; name?: string };
  state?: { id?: number | string; name?: string };
}

interface PropertyFiles {
  id?: number;
  file?: File;
  fileId?: string;
  type?: PropertyFileType;
  createdAt?: string;
  updatedAt?:string
}
