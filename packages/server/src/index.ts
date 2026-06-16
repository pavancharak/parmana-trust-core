import {
  app
} from "./app.js";

import rootRoute
  from "./routes/root.js";

import verifyRoute
  from "./routes/verify.js";

import receiptRoute
  from "./routes/receipt.js";

import receiptsRoute
  from "./routes/receipts.js";

import trustRootRoute
  from "./routes/trust-root.js";

import healthRoute
  from "./routes/health.js";

import versionRoute
  from "./routes/version.js";

app.use(
  rootRoute
);

app.use(
  verifyRoute
);

app.use(
  receiptRoute
);

app.use(
  receiptsRoute
);

app.use(
  trustRootRoute
);

app.use(
  healthRoute
);

app.use(
  versionRoute
);

const PORT =
  3000;

app.listen(
  PORT,
  () => {

    console.log(

      `Parmana API listening on ${PORT}`

    );

  }
);