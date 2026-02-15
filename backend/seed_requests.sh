#!/bin/bash

BIN_PATH="27b54b6e-64f1-4160-a5ba-eb6d6035d0aa"
BASE_URL="http://localhost:3000/api/endpoints/${BIN_PATH}"

# GET with query params
curl -s "$BASE_URL/users?page=1&limit=10"

# GET with different query params
curl -s "$BASE_URL/search?q=hello+world&sort=relevance"

# POST with JSON body
curl -s -X POST "$BASE_URL/users" \
  -H "Content-Type: application/json" \
  -d '{"username": "jane_doe", "email": "jane@example.com", "role": "admin"}'

# POST with form data
curl -s -X POST "$BASE_URL/login" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=jane_doe&password=secret123"

# PUT with JSON body
curl -s -X PUT "$BASE_URL/users/42" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.example_token" \
  -d '{"username": "jane_updated", "email": "jane_new@example.com"}'

# PATCH
curl -s -X PATCH "$BASE_URL/settings" \
  -H "Content-Type: application/json" \
  -H "X-Request-ID: abc-123-def" \
  -d '{"theme": "dark", "notifications": true}'

# DELETE
curl -s -X DELETE "$BASE_URL/users/7" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.example_token"

# GET with custom headers
curl -s "$BASE_URL/dashboard" \
  -H "Accept: application/json" \
  -H "Accept-Language: en-US" \
  -H "X-Custom-Header: my-value"

echo ""
echo "Seeded requests to bin: $BIN_PATH"
