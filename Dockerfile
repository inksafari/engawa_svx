# ---------------------------------------------------> The builder stage
ARG NODE_VERSION=16.16
FROM --platform=linux/amd64 node:${NODE_VERSION}-slim AS builder

WORKDIR /app
RUN corepack enable

COPY .npmrc pnpm-lock.yaml ./
# RUN \
# --mount=type=cache,id=pnpm,target=/node_modules/.pnpm-store/v3 \
# pnpm install --frozen-lockfile --ignore-scripts
RUN pnpm fetch --dev
ADD . ./
RUN pnpm install -r --offline --ignore-scripts --dev

COPY . .
RUN pnpm build
# RUN pnpm prune --production

# ----------------------------------------------------> The runner stage
# FROM --platform=linux/amd64 node:${NODE_VERSION}-alpine AS runner
# WORKDIR /app
# COPY --from=builder /app/build ./build
# COPY --from=builder /app/.svelte-kit ./.svelte-kit
# COPY --from=builder /app/node_modules ./node_modules
# RUN apk add dumb-init

# EXPOSE 9000
# CMD ["dumb-init", "pnpm", "build:preview"]

# ----------------------------------------------------> The runner stage
FROM gcr.io/distroless/static:nonroot
USER nonroot:nonroot
WORKDIR /app
# Copy Builder Artifacts
COPY --from=builder --chown=nonroot:nonroot /app/build ./build
COPY --from=builder --chown=nonroot:nonroot /app/.svelte-kit ./.svelte-kit
COPY --from=builder --chown=nonroot:nonroot /app/node_modules ./node_modules

EXPOSE 9000
CMD ["pnpm", "build:preview"]
# https://github.com/PREreview/prereview.org/blob/main/Dockerfile
# https://github.com/antfu/vitesse/blob/main/Dockerfile
# https://github.com/janoamaral/personal-blog-v2/blob/master/Dockerfile
# https://qiita.com/mojatter/items/d431e933d7c34ba76872
# https://github.com/SouthwestKoala/southwestkoala.co.uk/blob/main/apps/web/Dockerfile
