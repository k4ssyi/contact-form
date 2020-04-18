#!/bin/bash

if [ "${APP_ENV}" = 'production' ]; then
    uvicorn run:app --host 0.0.0.0 --port ${PORT:-8000}
else
    # docker development
    uvicorn run:app --reload --host 0.0.0.0 --port ${PORT:-8000}
fi
