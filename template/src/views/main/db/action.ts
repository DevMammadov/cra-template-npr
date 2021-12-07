import { createActionFactory } from "helpers/actionFactory";

const factory = createActionFactory("GROUP");

export const getText = factory.create("GET_TEXT");
export const getTextAsync = factory.createAsync("GET_TEXT_ASYNC");

export const mainActions = {
  getText,
  getTextAsync,
};
