import { IColor } from "./IColor";
import { IFontSize } from "./IFontSize";
import { IFontWeight } from "./IFontWeight";

export interface ITheme {
    colors: IColor,
    fontSize: IFontSize,
    fontWeight: IFontWeight
}