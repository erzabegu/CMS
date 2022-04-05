import { ISection } from "../ISection"

export interface IContent {
    pageId: number,
    pageName: string,
    sections: Array<ISection>
}