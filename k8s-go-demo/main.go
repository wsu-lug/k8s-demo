package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/julienschmidt/httprouter"
)

type host struct {
	Hostname string `json:"hostname"`
}

func main() {

	r := httprouter.New()
	r.GET("/", func(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
		hostnamestr, _ := os.Hostname()
		hostinfo := host{
			Hostname: hostnamestr,
		}

		j, _ := json.Marshal(hostinfo)
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.WriteHeader(200)
		fmt.Fprintf(w, "%s", j)
	})
	fmt.Println("serving...")
	http.ListenAndServe("0.0.0.0:8080", r)
}
