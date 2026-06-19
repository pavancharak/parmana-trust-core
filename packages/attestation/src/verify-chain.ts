import {
  enforceInvariant
} from "@parmana/contracts";


type ChainItem = {

  receiptHash: string;

  previousHash?:
    string | null;

};


export function verifyChain(

  receipts: ChainItem[]

): boolean {


  for (

    let index = 1;

    index < receipts.length;

    index++

  ) {


    const previous =
      receipts[
        index - 1
      ];


    const current =
      receipts[
        index
      ];


    const valid =
      current.previousHash ===
      previous.receiptHash;


    enforceInvariant(

      "INV-170",

      valid

    );


    if (!valid) {

      return false;

    }

  }


  return true;

}