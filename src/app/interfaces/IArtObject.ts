import { IWebImage } from './IWebImage';


export interface IArtObject {
    description: string;
    hasImage: boolean;
    id: string;
    longTitle: string;
    objectNumber: string;
    principalOrFirstMaker: string;
    title: string;
    webImage: IWebImage;
}
