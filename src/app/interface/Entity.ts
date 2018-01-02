export namespace Entity {
  export interface IClient {
    active: number;
    clientkeyid: number;
    email: string;
    email_link_lost: number;
    keyid: number;
    mainClient: boolean;
    name: string;
    phone: string;
    send_email: number;
  }

  export interface IInclino {
    context: any[];
    dateend: string;
    datestart: string;
    inclinokeyid: number;
    liakeyid: number;
    location: ILocation;
    locationkeyid: number;
    locationname: string;
    name: string;
    notes: number;
    trigger: number;
    type: number;
    uid: string;
  }

  export interface ILocation {
    keyid: number;
    locationkeyid: number;
    name: string;
    parent: number;
  }

  export interface ILiris {
    context: any[];
    liakeyid: number;
    liriskeyid: number;
    name: string;
    notes: number;
  }

  export interface ISensors {
    channel: number;
    locationname: string;
    name: string;
    paramA: number;
    paramB: number;
    paramC: number;
    paramD: number;
    paramE: number;
    sensorkeyid: number;
    sn: string;
    type: number;
  }

  export interface IDaus {
    channel: number;
    daukeyid: number;
    name: string;
    sensors: ISensors[];
  }

  export interface ISpcu {
    context: any[];
    dateend: string;
    datestart: string;
    daus: IDaus[];
    name: string;
    notes: number;
    sn: string;
    spakeyid: number;
    spcukeyid: number;
  }

  export interface IProject {
    address1: string;
    address2: string;
    city: string;
    clientsendexpiration: boolean;
    code: string;
    country: string;
    dateend: string;
    datestart: string;
    installersendexpiration: boolean;
    latitude: number;
    levelkeyid: number;
    longitude: number;
    name: string;
    notes: number;
    osmossendexpiration: boolean;
    place: string;
    projectkeyid: number;
    toanalyse: number;
    zipcode: string;
    zoom: number;
  }

  export interface IUser {
    userkeyid: number;
    levelkeyid: number;
    levelname: string;
    level: number;
    lastname: string;
    firstname: string;
    email: string;
    phone: string;
    admin: number;
    active: number;
    production: number;
    token: string;
  }

  export interface ILevel {
    levelkeyid: number;
    parent: number;
    name: string;
    level: number;
    active: number;
  }
}
