import { IMainState } from "./db/reducer";

export interface IMainPage {
  mainState: IMainState;
  getText(text: string): void;
}
