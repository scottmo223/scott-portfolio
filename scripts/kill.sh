#!/usr/bin/env bash
#
# Kill anything listening on the scott-dev dev port.
#
set -euo pipefail

# Keep this in sync with scripts/start.sh
DEV_PORT=4823

PIDS="$(lsof -ti tcp:"$DEV_PORT" 2>/dev/null || true)"

if [ -z "$PIDS" ]; then
  echo "Nothing running on port $DEV_PORT."
  exit 0
fi

echo "Killing process(es) on port $DEV_PORT: $PIDS"
# shellcheck disable=SC2086
kill $PIDS 2>/dev/null || true

# Give them a moment, then force-kill any stragglers
sleep 1
STRAGGLERS="$(lsof -ti tcp:"$DEV_PORT" 2>/dev/null || true)"
if [ -n "$STRAGGLERS" ]; then
  echo "Force-killing stubborn process(es): $STRAGGLERS"
  # shellcheck disable=SC2086
  kill -9 $STRAGGLERS 2>/dev/null || true
fi

echo "Port $DEV_PORT is now free."
