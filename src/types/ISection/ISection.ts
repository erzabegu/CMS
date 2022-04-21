import { ISectionItem } from "../ISectionItem";

export interface ISection {
    sectionId: number,
    displayDirection?: string;
    background?: string;
    alignItems?: string;
    items: Array<ISectionItem>
}