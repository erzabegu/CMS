import { ISectionItem } from "../ISectionItem";

export interface ISection {
    sectionId: number,
    displayDirection?: string;
    background?: string;
    alignItems?: string;
    padding?: number;
    margin?: number;
    items: Array<ISectionItem>
}