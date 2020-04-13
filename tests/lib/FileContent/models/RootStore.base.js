/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin } from "mst-gql"

import { FileContentModel } from "./FileContentModel"
import { fileContentModelPrimitives, FileContentModelSelector } from "./FileContentModel.base"


/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['FileContent', () => FileContentModel]], ['FileContent'], "js"))
  .props({
    fileContents: types.optional(types.map(types.late(() => FileContentModel)), {})
  })
  .actions(self => ({
    queryFiles(variables, resultSelector = fileContentModelPrimitives.toString(), options = {}) {
      return self.query(`query files { files {
        ${typeof resultSelector === "function" ? resultSelector(new FileContentModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
  }))
