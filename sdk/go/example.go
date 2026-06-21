package main

import (
	"fmt"

	"github.com/parmana-ai/parmana-go/parmana"
)

func main() {

	client :=
		parmana.NewClient(
			"http://localhost:3000",
		)

	attestation, err :=
		client.Attest(
			map[string]any{
				"task": "payment-release",
				"signals": map[string]any{
					"businessTransactionId": "GO-PAY-002",
					"subjectId":             "finance-manager-001",
					"amount":                1000,
					"currency":              "USD",
					"recipient":             "vendor-001",
				},
			},
		)

	if err != nil {
		panic(err)
	}

	fmt.Println("ATTESTATION")
	fmt.Println(attestation)

	receipt, err :=
		client.Verify(
			map[string]any{
				"attestation": attestation,
				"policy": map[string]any{
					"policyId":           "payment-release",
					"policyVersion":      "1.0.0",
					"requiredAlgorithms": []string{"ed25519"},
				},
			},
		)

	if err != nil {
		panic(err)
	}

	fmt.Println("RECEIPT")
	fmt.Println(receipt)

	token, err :=
		client.IssueToken(
			receipt["receiptId"].(string),
		)

	if err != nil {
		panic(err)
	}

	fmt.Println("TOKEN")
	fmt.Println(token)

	execution, err :=
		client.Execute(
			map[string]any{
				"executionToken":     token,
				"executionSystem":    "stripe",
				"executionReference": "go_pi_001",
			},
		)

	if err != nil {
		panic(err)
	}

	fmt.Println("EXECUTION")
	fmt.Println(execution)
}
