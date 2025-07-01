#!/bin/bash

set -ea

source .env

pushd ./scripts/js &>/dev/null
    yarn && yarn verify_call
popd &>/dev/null
