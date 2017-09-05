package httpserver
import ("net/http")
func init() {
  assets := http.StripPrefix("/", http.FileServer(http.Dir("static/")))
  http.Handle("/", assets)
}

