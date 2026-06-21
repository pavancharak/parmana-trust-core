\# parmana-go



Go SDK for Parmana Trust Core.



Parmana prevents unauthorized autonomous actions.



Parmana verifies human-defined authority and organizational policy before autonomous systems act.



\---



\## Installation



```bash

go get github.com/parmana-ai/parmana-go

```



\---



\## Create Client



```go

package main



import (

&#x09;"github.com/parmana-ai/parmana-go/parmana"

)



func main() {



&#x09;client :=

&#x09;	parmana.NewClient(

&#x09;		"http://localhost:3000",

&#x09;	)



&#x09;\_ = client

}

```



\---



\## Create Attestation



```go

attestation, err :=

&#x09;client.Attest(

&#x09;	map\[string]any{

&#x09;		"task": "payment-release",

&#x09;		"signals": map\[string]any{

&#x09;			"businessTransactionId":

&#x09;				"PAY-001",

&#x09;			"subjectId":

&#x09;				"finance-manager-001",

&#x09;			"amount":

&#x09;				1000,

&#x09;			"currency":

&#x09;				"USD",

&#x09;			"recipient":

&#x09;				"vendor-001",

&#x09;		},

&#x09;	},

&#x09;)

```



\---



\## Verify Attestation



```go

receipt, err :=

&#x09;client.Verify(

&#x09;	map\[string]any{

&#x09;		"attestation":

&#x09;			attestation,

&#x09;		"policy":

&#x09;			map\[string]any{

&#x09;				"policyId":

&#x09;					"payment-release",

&#x09;				"policyVersion":

&#x09;					"1.0.0",

&#x09;				"requiredAlgorithms":

&#x09;					\[]string{

&#x09;						"ed25519",

&#x09;					},

&#x09;			},

&#x09;	},

&#x09;)

```



\---



\## Issue Execution Token



```go

token, err :=

&#x09;client.IssueToken(

&#x09;	receipt\["receiptId"].(string),

&#x09;)

```



\---



\## Record Execution



```go

execution, err :=

&#x09;client.Execute(

&#x09;	map\[string]any{

&#x09;		"executionToken":

&#x09;			token,

&#x09;		"executionSystem":

&#x09;			"stripe",

&#x09;		"executionReference":

&#x09;			"go\_pi\_001",

&#x09;	},

&#x09;)

```



\---



\## Retrieve Trust Chain



```go

chain, err :=

&#x09;client.GetTrustChain(

&#x09;	"PAY-001",

&#x09;)

```



\---



\## Execution Trust Chain



```text

Subject

&#x20; ↓

Task

&#x20; ↓

Policy

&#x20; ↓

Decision Attestation

&#x20; ↓

Verification Receipt

&#x20; ↓

Execution Token

&#x20; ↓

Execution Record

&#x20; ↓

External System

```



\---



\## Supported APIs



\* Attest

\* Verify

\* Issue Token

\* Execute

\* Create Override

\* Attest Override

\* Verify Override

\* Retrieve Trust Chain



\---



\## Example



See:



```text

sdk/go/example.go

```



for a complete end-to-end execution trust chain example.



\---



\## License



Apache-2.0



