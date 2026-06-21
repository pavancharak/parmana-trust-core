package parmana

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

type Client struct {
	BaseURL string
}

func NewClient(
	baseURL string,
) *Client {

	return &Client{
		BaseURL: baseURL,
	}
}

func (c *Client) post(
	path string,
	body any,
) (map[string]any, error) {

	payload, err :=
		json.Marshal(body)

	if err != nil {
		return nil, err
	}

	resp, err :=
		http.Post(
			c.BaseURL+path,
			"application/json",
			bytes.NewBuffer(payload),
		)

	if err != nil {
		return nil, err
	}

	defer resp.Body.Close()

	var result map[string]any

	err =
		json.NewDecoder(
			resp.Body,
		).Decode(&result)

	if err != nil {
		return nil, err
	}

	return result, nil
}

func (c *Client) get(
	path string,
) (map[string]any, error) {

	resp, err :=
		http.Get(
			c.BaseURL + path,
		)

	if err != nil {
		return nil, err
	}

	defer resp.Body.Close()

	var result map[string]any

	err =
		json.NewDecoder(
			resp.Body,
		).Decode(&result)

	if err != nil {
		return nil, err
	}

	return result, nil
}

func (c *Client) Attest(
	body any,
) (map[string]any, error) {

	return c.post(
		"/attest",
		body,
	)
}

func (c *Client) Verify(
	body any,
) (map[string]any, error) {

	return c.post(
		"/verify",
		body,
	)
}

func (c *Client) IssueToken(
	receiptId string,
) (map[string]any, error) {

	return c.post(
		"/token",
		map[string]string{
			"receiptId": receiptId,
		},
	)
}

func (c *Client) Execute(
	body any,
) (map[string]any, error) {

	return c.post(
		"/execute",
		body,
	)
}

func (c *Client) CreateOverride(
	body any,
) (map[string]any, error) {

	return c.post(
		"/override",
		body,
	)
}

func (c *Client) AttestOverride(
	overrideId string,
) (map[string]any, error) {

	return c.post(
		"/override/attest",
		map[string]string{
			"overrideId": overrideId,
		},
	)
}

func (c *Client) VerifyOverride(
	overrideAttestationId string,
) (map[string]any, error) {

	return c.post(
		"/override/verify",
		map[string]string{
			"overrideAttestationId": overrideAttestationId,
		},
	)
}

func (c *Client) GetTrustChain(
	businessTransactionId string,
) (map[string]any, error) {

	return c.get(
		fmt.Sprintf(
			"/trust-chain/%s",
			businessTransactionId,
		),
	)
}
