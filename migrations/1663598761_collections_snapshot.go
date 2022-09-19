package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models"
)

// Auto generated migration with the most recent collections configuration.
func init() {
	m.Register(func(db dbx.Builder) error {
		jsonData := `[
			{
				"id": "systemprofiles0",
				"created": "2022-09-19 14:21:47.119",
				"updated": "2022-09-19 14:38:01.791",
				"name": "profiles",
				"system": true,
				"schema": [
					{
						"system": true,
						"id": "pbfielduser",
						"name": "userId",
						"type": "user",
						"required": true,
						"unique": true,
						"options": {
							"maxSelect": 1,
							"cascadeDelete": true
						}
					},
					{
						"system": false,
						"id": "pbfieldname",
						"name": "name",
						"type": "text",
						"required": false,
						"unique": false,
						"options": {
							"min": null,
							"max": null,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "pbfieldavatar",
						"name": "avatar",
						"type": "file",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"maxSize": 5242880,
							"mimeTypes": [
								"image/jpg",
								"image/jpeg",
								"image/png",
								"image/svg+xml",
								"image/gif"
							],
							"thumbs": null
						}
					},
					{
						"system": false,
						"id": "jnnuejqy",
						"name": "level",
						"type": "number",
						"required": true,
						"unique": false,
						"options": {
							"min": 1,
							"max": null
						}
					},
					{
						"system": false,
						"id": "dagmsqah",
						"name": "xp",
						"type": "number",
						"required": false,
						"unique": false,
						"options": {
							"min": 0,
							"max": null
						}
					},
					{
						"system": false,
						"id": "u0qfioot",
						"name": "partner",
						"type": "user",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"cascadeDelete": false
						}
					}
				],
				"listRule": "userId = @request.user.id",
				"viewRule": "userId = @request.user.id",
				"createRule": "userId = @request.user.id",
				"updateRule": "userId = @request.user.id",
				"deleteRule": null
			},
			{
				"id": "3zkh2q72xosa05y",
				"created": "2022-09-19 14:38:51.646",
				"updated": "2022-09-19 14:45:37.400",
				"name": "tasks",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "w2mzcqpe",
						"name": "user",
						"type": "user",
						"required": true,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"cascadeDelete": false
						}
					},
					{
						"system": false,
						"id": "alldypgm",
						"name": "admin",
						"type": "user",
						"required": true,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"cascadeDelete": false
						}
					},
					{
						"system": false,
						"id": "baiezkng",
						"name": "title",
						"type": "text",
						"required": true,
						"unique": false,
						"options": {
							"min": null,
							"max": 64,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "ecmj3has",
						"name": "description",
						"type": "text",
						"required": false,
						"unique": false,
						"options": {
							"min": null,
							"max": 128,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "iojchpb4",
						"name": "xp",
						"type": "number",
						"required": false,
						"unique": false,
						"options": {
							"min": null,
							"max": null
						}
					},
					{
						"system": false,
						"id": "mwomdlno",
						"name": "currency",
						"type": "number",
						"required": false,
						"unique": false,
						"options": {
							"min": null,
							"max": null
						}
					},
					{
						"system": false,
						"id": "qn0jpnc5",
						"name": "duedate",
						"type": "date",
						"required": false,
						"unique": false,
						"options": {
							"min": "",
							"max": ""
						}
					},
					{
						"system": false,
						"id": "snl5aob1",
						"name": "damage",
						"type": "number",
						"required": false,
						"unique": false,
						"options": {
							"min": 1,
							"max": null
						}
					},
					{
						"system": false,
						"id": "9gal2ycl",
						"name": "complete",
						"type": "bool",
						"required": true,
						"unique": false,
						"options": {}
					}
				],
				"listRule": "@request.user.profile.name = user || @request.user.profile.name = admin",
				"viewRule": "@request.user.profile.name = user || @request.user.profile.name = admin",
				"createRule": "@request.user.profile.name = admin",
				"updateRule": "@request.user.profile.name = user || @request.user.profile.name = admin",
				"deleteRule": "@request.user.profile.name = admin"
			}
		]`

		collections := []*models.Collection{}
		if err := json.Unmarshal([]byte(jsonData), &collections); err != nil {
			return err
		}

		return daos.New(db).ImportCollections(collections, true, nil)
	}, func(db dbx.Builder) error {
		// no revert since the configuration on the environment, on which
		// the migration was executed, could have changed via the UI/API
		return nil
	})
}
