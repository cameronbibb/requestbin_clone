#!/bin/bash

BIN_PATH="27b54b6e-64f1-4160-a5ba-eb6d6035d0aa"
BASE_URL="http://localhost:3000/api/endpoints/${BIN_PATH}"

# Neo searches for Morpheus
curl -s "$BASE_URL/search?name=morpheus&alias=the+one"

# Trinity logs in
curl -s -X POST "$BASE_URL/login" \
  -H "Content-Type: application/json" \
  -d '{"username": "trinity", "password": "white_rabbit"}'

# Morpheus offers the pills
curl -s -X POST "$BASE_URL/pills/offer" \
  -H "Content-Type: application/json" \
  -d '{"red_pill": "truth", "blue_pill": "ignorance", "candidate": "neo"}'

# Neo takes the red pill
curl -s -X PUT "$BASE_URL/pills/choice" \
  -H "Content-Type: application/json" \
  -H "X-Chosen-One: true" \
  -d '{"choice": "red", "subject": "thomas_anderson"}'

# Load kung fu into Neo
curl -s -X POST "$BASE_URL/training/upload" \
  -H "Content-Type: application/json" \
  -H "X-Program: combat_training" \
  -d '{"skill": "kung_fu", "duration_hours": 10, "subject": "neo", "status": "i_know_kung_fu"}'

# Agent Smith updates his replication count
curl -s -X PATCH "$BASE_URL/agents/smith" \
  -H "Content-Type: application/json" \
  -d '{"copies": 100, "purpose": "inevitability", "target": "neo"}'

# Delete a sentinel
curl -s -X DELETE "$BASE_URL/machines/sentinels/42" \
  -H "Authorization: Bearer zion_defense_token" \
  -H "X-Weapon: EMP"

# The Oracle checks on cookies
curl -s "$BASE_URL/oracle/predictions?subject=neo&question=am+i+the+one" \
  -H "Accept: application/json" \
  -H "X-Location: oracle-apartment"

# Nebuchadnezzar crew status
curl -s "$BASE_URL/ships/nebuchadnezzar/crew?status=jacked_in" \
  -H "X-Operator: tank"

# Cypher makes a deal
curl -s -X POST "$BASE_URL/matrix/reinsert" \
  -H "Content-Type: application/json" \
  -H "X-Traitor: true" \
  -d '{"agent": "smith", "request": "reinsert", "identity": "famous_actor", "condition": "remember_nothing"}'

echo ""
echo "Seeded Matrix requests to bin: $BIN_PATH"
