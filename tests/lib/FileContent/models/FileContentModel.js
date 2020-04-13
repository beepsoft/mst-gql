import { FileContentModelBase } from "./FileContentModel.base"

/* A graphql query fragment builders for FileContentModel */
export {
  selectFromFileContent,
  fileContentModelPrimitives,
  FileContentModelSelector
} from "./FileContentModel.base"

/**
 * FileContentModel
 */
export const FileContentModel = FileContentModelBase.actions(self => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  }
}))
