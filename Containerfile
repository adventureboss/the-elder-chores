FROM docker.io/library/golang:1.19 as builder
WORKDIR /app
COPY . .
RUN apt update && apt install -y npm nodejs
RUN cd the-elder-chores-user-ui && \
  npm run build
RUN cd /app && go get -d ./... && \
  go build -o the-elder-chores cmd/pocketbase/main.go

FROM registry.redhat.io/ubi8/ubi-minimal

WORKDIR /

VOLUME /pb_data

COPY --from=builder /app/the-elder-chores-user-ui/build ./the-elder-chores-user-ui/build
COPY --from=builder /app/the-elder-chores ./the-elder-chores

CMD ["/the-elder-chores", "serve", "--http=0.0.0.0:8000"]

