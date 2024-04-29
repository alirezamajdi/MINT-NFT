interface Profile {
  id?: number;
  username?: string;
  name?: string;
  userType?: "landlord" | "agent" | "tenant" | "interested" | "other";
  avatarId?: string;
  referralCode?: string;
  avatar?: File;
  agent: Agent;
  createdAt?: Date;
  email?: string;
  bio?: string;
  phone?: string;
  mobile?: string;
  social?: Social;
  website?: string;
  isVerified?: boolean;
  isEmailVerified?: boolean;
  emailVerifiedAt?: Date;
  updatedAt?: Date;
  address?: Address;
  activePlans: ActivePlans[];
  isActiveTenant?: boolean;
  isActiveAgency?: boolean;
  emailSettings: EmailSetting;
}

interface Agent {
  id?: number;
  name?: string;
  email?: string;
  number?: string;
  phone?: string;
  mobile?: string;
  about?: string;
  isVerified?: boolean;
  logoId: string;
  openingHours: OpeningHours;
  logo?: File;
  createdAt?: Date;
}

interface Social {
  twitter: string;
  youtube: string;
  facebook: string;
  instagram: string;
}

interface Address {
  address?: string;
  phone?: string;
  postcode?: string;
}

interface EmailSetting {
  news?: boolean;
  newProperties?: boolean;
  newRequests?: boolean;
}
