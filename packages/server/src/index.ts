import invariantsRoute
  from "./routes/invariants.js";

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
import schemasRoute
  from "./routes/schemas.js";
import receiptRoute
  from "./routes/receipt.js";
import tasksRoute
  from "./routes/tasks.js";
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
import verifyTrustRootRoute
  from "./routes/verify-trust-root.js";
import keysCurrentRouter
  from "./routes/keys-current.js";
import verifyTrustRootRouter
  from "./routes/verify-trust-root.js";
import policiesRoute
  from "./routes/policies.js";
import signalsRoute
  from "./routes/signals.js";
app.use(
  policiesRoute
);
app.use(
  rootRoute
);
app.use(
  invariantsRoute
);
app.use(
  tasksRoute
);
app.use(
  signalsRoute
);
app.use(
  verifyTrustRootRouter
);
app.use(
  trustRootCurrentRoute
);
app.use(
  schemasRoute
);
app.use(
  verifyRoute
);
app.use(
  keysCurrentRouter
);
app.use(
  transparencyProofRoute
);
app.use(
  evaluateRoute
);
app.use(
  verifyTrustRootRoute
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