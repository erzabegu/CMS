import { ISectionItem } from "../ISectionItem";

export interface ISection {
    sectionId: number,
    displayDirection?: string;
    background?: string;
    items: Array<ISectionItem>
}