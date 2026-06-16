$pkgs = @(
  "@parmana/contracts",
  "@parmana/crypto",
  "@parmana/provenance",
  "@parmana/trust-anchor",
  "@parmana/trust-profiles",
  "@parmana/attestation",
  "@parmana/verifier",
  "@parmana/bundle"
)

foreach ($pkg in $pkgs) {

  Write-Host ""
  Write-Host "================================"
  Write-Host $pkg
  Write-Host "================================"

  npm run build --workspace=$pkg

  if ($LASTEXITCODE -ne 0) {
    break
  }
}