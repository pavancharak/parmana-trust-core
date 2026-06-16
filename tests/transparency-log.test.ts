import {
  describe,
  expect,
  it
} from "vitest";

import {
  appendEntry
} from "../packages/transparency-log/src/append-entry.js";

import {
  verifyLog
} from "../packages/transparency-log/src/verify-log.js";

describe(
  "transparency log",
  () => {

    it(
      "appends entry",
      () => {

        const entries =
          appendEntry(

            [],

            {
              id: "1",
              hash: "abc",
              createdAt:
                new Date()
                  .toISOString()
            }
          );

        expect(
          entries
        ).toHaveLength(1);

      }
    );

    it(
      "verifies valid chain",
      () => {

        const entries = [

          {
            id: "1",
            hash: "a",
            createdAt: ""
          },

          {
            id: "2",
            hash: "b",
            previousHash: "a",
            createdAt: ""
          }

        ];

        expect(
          verifyLog(entries)
        ).toBe(true);

      }
    );

    it(
      "detects broken chain",
      () => {

        const entries = [

          {
            id: "1",
            hash: "a",
            createdAt: ""
          },

          {
            id: "2",
            hash: "b",
            previousHash: "wrong",
            createdAt: ""
          }

        ];

        expect(
          verifyLog(entries)
        ).toBe(false);

      }
    );

    it(
      "detects tampering",
      () => {

        const entries = [

          {
            id: "1",
            hash: "tampered",
            createdAt: ""
          },

          {
            id: "2",
            hash: "b",
            previousHash: "a",
            createdAt: ""
          }

        ];

        expect(
          verifyLog(entries)
        ).toBe(false);

      }
    );

  }
);