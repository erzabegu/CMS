import { ISectionItem } from "../ISectionItem";

export interface ISection {
    sectionId: number,
    displayDirection?: string;
    background?: string;
    alignItems?: string;
    padding?: number;
    margin?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    items: Array<ISectionItem>
}