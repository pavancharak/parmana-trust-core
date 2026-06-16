import * as fs from "node:fs";

import {
  AuditStore
} from "./audit-store.js";

import type {
  AuditRecord
} from "./types.js";

export class FileAuditStore
  extends AuditStore {

  constructor(

    private readonly filePath:
      string

  ) {

    super();
  }

  save(): void {

    fs.writeFileSync(

      this.filePath,

      JSON.stringify(

        this.getAll(),

        null,

        2

      ),

      "utf8"
    );
  }

  load(): void {

    if (

      !fs.existsSync(
        this.filePath
      )

    ) {

      return;
    }

    const records =

      JSON.parse(

        fs.readFileSync(

          this.filePath,

          "utf8"

        )

      ) as AuditRecord[];

    this.clear();

    for (

      const record
      of records

    ) {

      this.add(
        record
      );
    }
  }
}