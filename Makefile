.PHONY: pine clean

clean:
	rm -rm shoppingApp

pine:
	env GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o shoppingApp
