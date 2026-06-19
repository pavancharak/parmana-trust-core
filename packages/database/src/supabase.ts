import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
  path: path.resolve(
    process.cwd(),
    "../../.env"
  )
});

import {
  createClient
} from "@supabase/supabase-js";

const url =
  process.env.SUPABASE_URL;

const key =
  process.env.SUPABASE_SERVICE_KEY;

if (!url) {

  throw new Error(
    "SUPABASE_URL missing"
  );
}

if (!key) {

  throw new Error(
    "SUPABASE_SERVICE_KEY missing"
  );
}

export const supabase =
  createClient(
    url,
    key
  );