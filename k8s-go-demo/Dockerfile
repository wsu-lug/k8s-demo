FROM golang as go-build
WORKDIR $GOPATH/src/github.com/k8s-demo
COPY . .
RUN go get ./...
RUN go build -o /app/k8s-demo main.go

FROM ubuntu
WORKDIR /app
COPY --from=go-build /app/k8s-demo .
EXPOSE 80
CMD ["./k8s-demo"]