/// <reference types="jest"/>

const fs = require("fs")
const { scaffold, writeFiles } = require("../../../generator/generate")

describe("FileContent.graphql tests", () => {
  let models // lazy loaded models module

  /** This functions provides a mock implementation for loading files from the graphql endpoint. Also verifies the incoming arguments */
  function mockLoadFiles(query, variables) {
    expect(query).toMatchInlineSnapshot(`
                        "query files { files {
                                __typename
                        id
                        text
                        path

                              } }"
                  `)
    expect(variables).toEqual(undefined)
    return {
      data: {
        files: [
          {
            id: "1",
            __typename: "FileContent",
            text: "First file content",
            path: "/path/to/file1"
          },
          {
            id: "2",
            __typename: "FileContent",
            text: "Second file content",
            path: "/path/to/file2"
          }
        ]
      }
    }
  }

  beforeAll(() => {
    const files = scaffold(
      fs.readFileSync(__dirname + "/FileContent.graphql", "utf8"),
      { format: "js", roots: ["FileContent"] }
    )
    writeFiles(__dirname + "/models", files, "js", false)
    models = require("./models")
  })

  test("it should be able to instantiate store and load initial data for a type named FileContent", async () => {
    /** This test will make two following two requests */
    const mockResponses = [mockLoadFiles]
    const mockClient = {
      request(query, variables) {
        return Promise.resolve(mockResponses.shift()(query, variables)) // return and remove the first mocked response
      }
    }

    /** Create a store with some initial state */
    const store = models.RootStore.create(
      {
        fileContents: {
          "1": {
            id: "1",
            __typename: "FileContent",
            text: "First initial file content",
            path: "/path/to/file1"
          }
        }
      },
      {
        gqlHttpClient: mockClient
      }
    )

    // initially, 1 file
    expect(store.toJSON()).toMatchSnapshot()
    expect(store.fileContents.get("1").text).toBe("First initial file content")

    // Then, the 2 files mocked above should be loaded and merged
    const promise = store.queryFiles()
    expect(store.__promises.size).toBe(1)
    await promise
    expect(store.__promises.size).toBe(0)
    expect(store.fileContents.size).toBe(2)
    expect(store.fileContents.get("1").text).toBe("First file content")
    expect(store.toJSON()).toMatchSnapshot()

    const file2 = store.fileContents.get("2")
    expect(file2.text).toBe("Second file content")
  })
})
