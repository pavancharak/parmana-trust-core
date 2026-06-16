$pkgs = @(
  "contracts",
  "provenance",
  "trust-profiles",
  "verifier",
  "crypto",
  "attestation",
  "evidence"
)

foreach ($pkg in $pkgs) {
  Write-Host ""
  Write-Host "Building $pkg"
  npx tsc -p "packages/$pkg"
}