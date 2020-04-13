/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"


/**
 * FileContentBase
 * auto generated base class for the model FileContentModel.
 */
export const FileContentModelBase = ModelBase
  .named('FileContent')
  .props({
    __typename: types.optional(types.literal("FileContent"), "FileContent"),
    id: types.identifier,
    text: types.union(types.undefined, types.string),
    path: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore()
    }
  }))

export class FileContentModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get text() { return this.__attr(`text`) }
  get path() { return this.__attr(`path`) }
}
export function selectFromFileContent() {
  return new FileContentModelSelector()
}

export const fileContentModelPrimitives = selectFromFileContent().text.path
