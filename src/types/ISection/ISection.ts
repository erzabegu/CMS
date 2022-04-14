import { ISectionItem } from "../ISectionItem";

export interface ISection {
    sectionId: number,
    displayDirection?: string;
    items: Array<ISectionItem>
}