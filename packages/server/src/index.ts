import verifyAttestationRoute
  from "./routes/verify-attestation.js";
import transparencyGetRoute
  from "./routes/transparency-get.js";
import evaluateRoute
  from "./routes/evaluate.js";

import attestRoute
  from "./routes/attest.js";
import transparencyRoute
  from "./routes/transparency.js";
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
import transparencyProofRoute
  from "./routes/transparency-proof.js";
import trustRootRoute
  from "./routes/trust-root.js";
import trustRootCurrentRoute
  from "./routes/trust-root-current.js";
import healthRoute
  from "./routes/health.js";
import trustRootPublishRoute
  from "./routes/trust-root-publish.js";
import versionRoute
  from "./routes/version.js";
import swaggerRoute
  from "./routes/swagger.js";
app.use(
  rootRoute
);
app.use(
  trustRootCurrentRoute
);
app.use(
  verifyRoute
);
app.use(
  transparencyProofRoute
);
app.use(
  evaluateRoute
);
app.use(
  transparencyRoute
);
app.use(
  attestRoute
);
app.use(
  swaggerRoute
);
app.use(
  verifyAttestationRoute
);
app.use(
  receiptRoute
);
app.use(
  transparencyGetRoute
);
app.use(
  trustRootPublishRoute
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