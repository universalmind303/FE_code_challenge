package main
import ("net/http")
func init() {
  assets := http.StripPrefix("/", http.FileServer(http.Dir("static/")))
  http.Handle("/", assets)
  log.Fatal(http.ListenAndServe(":8080", nil))

}

