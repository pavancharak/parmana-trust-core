import requests

class ParmanaClient:

    def __init__(
        self,
        base_url: str
    ):
        self.base_url = base_url

    def _post(
        self,
        path,
        payload
    ):
        response = requests.post(
            f"{self.base_url}{path}",
            json=payload
        )

        response.raise_for_status()

        return response.json()

    def _get(
        self,
        path
    ):
        response = requests.get(
            f"{self.base_url}{path}"
        )

        response.raise_for_status()

        return response.json()

    def attest(
        self,
        payload
    ):
        return self._post(
            "/attest",
            payload
        )

    def verify(
        self,
        payload
    ):
        return self._post(
            "/verify",
            payload
        )

    def issue_token(
        self,
        receipt_id
    ):
        return self._post(
            "/token",
            {
                "receiptId":
                receipt_id
            }
        )

    def execute(
        self,
        payload
    ):
        return self._post(
            "/execute",
            payload
        )

    def get_trust_chain(
        self,
        business_transaction_id
    ):
        return self._get(
            f"/trust-chain/{business_transaction_id}"
        )