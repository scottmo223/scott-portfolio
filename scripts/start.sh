#!/usr/bin/env bash
#
# Spin up the scott-dev site locally on a dedicated, non-conflicting port.
# Port 3000 gets reused across too many projects, so this one is pinned to 4823.
#
set -euo pipefail

# Keep this in sync with scripts/kill.sh
DEV_PORT=4823

# Resolve repo root regardless of where the script is invoked from
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$REPO_ROOT"

# Free the port first so restarts don't fail with EADDRINUSE
if lsof -ti tcp:"$DEV_PORT" >/dev/null 2>&1; then
  echo "Port $DEV_PORT is in use — clearing it first..."
  "$SCRIPT_DIR/kill.sh"
fi

echo "Starting scott-dev on http://localhost:$DEV_PORT"
exec npm run dev -- -p "$DEV_PORT"
