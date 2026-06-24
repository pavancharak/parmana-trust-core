update policies
set definition =
'{
  "rules": [
    {
      "id": "approve-payment",
      "condition": {
        "all": [
          {
            "signal": "managerApproved",
            "equals": true
          },
          {
            "signal": "kycVerified",
            "equals": true
          }
        ]
      },
      "outcome": {
        "action": "approve",
        "requires_override": false,
        "reason": "payment_authorized"
      }
    },
    {
      "id": "reject-payment",
      "condition": {
        "all": []
      },
      "outcome": {
        "action": "reject",
        "requires_override": true,
        "reason": "payment_requirements_not_satisfied"
      }
    }
  ]
}'::jsonb
where policy_id = 'payment-policy-v1';