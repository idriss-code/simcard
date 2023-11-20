import { SimcardStatus } from '../enums/status';

export class Simcard {
    iccid?: string;
    msisdn?: string;
    pinCode?: string;
    pukCode?: string;
    tag?: string;
    accessPointName?: string;
    ipAddr?: string;
    status?: SimcardStatus;
    creationDate?: Date;
}
