package main

import (
	"encoding/json"
	"errors"
	"log"
	"net/http"

	_ "github.com/adventureboss/the-elder-chores/migrations"
	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/models"
)

func main() {
	app := pocketbase.New()

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.AddRoute(echo.Route{
			Method: http.MethodGet,
			Path:   "/api/hello",
			Handler: func(c echo.Context) error {
				return c.String(200, "lubdub")
			},
		})

		return nil
	})

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.Static("/", "./the-elder-chores-user-ui/build")
		return nil
	})

	app.OnRecordBeforeUpdateRequest().Add(func(e * core.RecordUpdateEvent) error {
		user, _ := e.HttpContext.Get(apis.ContextUserKey).(*models.User)

		// Prevent "users" from updating anything from "sheets" but the "hero_name"
        if e.Record.Collection().Name == "sheets" && user != nil {
			updateRequest := make(map[string]interface{})
			err := json.NewDecoder(e.HttpContext.Request().Body).Decode(&updateRequest)
			if err != nil {
				return err
			}
			for k := range updateRequest {
				switch k {
				case
					"hero_name":
						continue
				}

				return errors.New("invalid update on sheet")
			}
        }

		return nil
    })

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
