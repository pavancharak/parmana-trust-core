from parmana_sdk import ParmanaClient

client = ParmanaClient(
    "http://localhost:3000"
)

attestation = client.attest({
    "task": "payment-release",
    "signals": {
        "businessTransactionId": "PY-PAY-001",
        "subjectId": "finance-manager-001",
        "amount": 1000,
        "currency": "USD",
        "recipient": "vendor-001"
    }
})

print("ATTESTATION")
print(attestation)

receipt = client.verify({
    "attestation": attestation,
    "policy": {
        "policyId": "payment-release",
        "policyVersion": "1.0.0",
        "requiredAlgorithms": [
            "ed25519"
        ]
    }
})

print("RECEIPT")
print(receipt)

token = client.issue_token(
    receipt["receiptId"]
)

print("TOKEN")
print(token)

execution = client.execute({
    "executionToken": token,
    "executionSystem": "stripe",
    "executionReference": "py_pi_001"
})

print("EXECUTION")
print(execution)