package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gobuffalo/packr/v2"
	"github.com/joho/godotenv"
	_ "github.com/mattn/go-sqlite3"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("cannot load dotenv: %w", err)
	}
	port := ":3000"
	if ePort := os.Getenv("PORT"); ePort != "" {
		port = fmt.Sprintf(":%s", ePort)
	}

	db, err := sql.Open("sqlite3", "./shopping.database")
	if err != nil {
		fmt.Printf("sql failed to open db %+v", err)
	}

	defer func() {
		err := db.Close()
		if err != nil {
			fmt.Printf("failed to close db %+v", err)
		}
	}()

	box := packr.New("myBox", "./frontend/public")
	http.Handle("/", http.FileServer(box))
	err = http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatalf("http server err: %w", err)
	}
}
