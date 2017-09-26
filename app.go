package main
import (
"net/http"
"log"
)
func main() {
  assets := http.StripPrefix("/", http.FileServer(http.Dir("static/")))
  http.Handle("/", assets)
  log.Fatal(http.ListenAndServe(":8080", nil))

}

