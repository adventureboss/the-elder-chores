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
				"id": "3zkh2q72xosa05y",
				"created": "2022-09-19 14:38:51.646",
				"updated": "2022-09-20 14:57:52.635",
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
				"listRule": "@request.user.id = user || @request.user.id = admin",
				"viewRule": "@request.user.id = user || @request.user.id = admin",
				"createRule": "@request.user.id = admin",
				"updateRule": "@request.user.id = user || @request.user.id = admin",
				"deleteRule": "@request.user.id = admin"
			},
			{
				"id": "systemprofiles0",
				"created": "2022-09-19 14:50:41.903",
				"updated": "2022-09-19 20:30:13.503",
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
						"id": "u0qfioot",
						"name": "manager",
						"type": "user",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"cascadeDelete": false
						}
					},
					{
						"system": false,
						"id": "x5ebr6eg",
						"name": "character_sheet",
						"type": "relation",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"collectionId": "fyhvu8nx20tlicy",
							"cascadeDelete": false
						}
					}
				],
				"listRule": "",
				"viewRule": "",
				"createRule": "",
				"updateRule": "",
				"deleteRule": null
			},
			{
				"id": "n3bxfnpsd97m0dt",
				"created": "2022-09-19 17:56:28.665",
				"updated": "2022-09-20 14:42:12.897",
				"name": "items",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "sx8eoygw",
						"name": "name",
						"type": "text",
						"required": true,
						"unique": false,
						"options": {
							"min": null,
							"max": 32,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "daz8zubq",
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
						"id": "soo0dfno",
						"name": "image",
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
							"thumbs": []
						}
					},
					{
						"system": false,
						"id": "ipi7gd3a",
						"name": "effect",
						"type": "json",
						"required": false,
						"unique": false,
						"options": {}
					},
					{
						"system": false,
						"id": "erfzqr1j",
						"name": "value",
						"type": "number",
						"required": true,
						"unique": false,
						"options": {
							"min": null,
							"max": null
						}
					},
					{
						"system": false,
						"id": "lqz3f1zs",
						"name": "type",
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
						"id": "b62j0dwf",
						"name": "user",
						"type": "user",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"cascadeDelete": false
						}
					},
					{
						"system": false,
						"id": "y4ofoorb",
						"name": "manager",
						"type": "user",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"cascadeDelete": false
						}
					}
				],
				"listRule": "",
				"viewRule": "",
				"createRule": null,
				"updateRule": null,
				"deleteRule": null
			},
			{
				"id": "fyhvu8nx20tlicy",
				"created": "2022-09-19 18:15:30.918",
				"updated": "2022-09-19 20:30:13.504",
				"name": "sheets",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "rrfzcvfm",
						"name": "hero_name",
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
						"id": "6fe9ivgk",
						"name": "class",
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
						"id": "djnecpto",
						"name": "lvl",
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
						"id": "7gee6g9t",
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
						"id": "lusnmqk0",
						"name": "str",
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
						"id": "7c3wmxqq",
						"name": "con",
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
						"id": "xvnchoj0",
						"name": "dex",
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
						"id": "0ncupk0r",
						"name": "wis",
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
						"id": "qoomwlko",
						"name": "int",
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
						"id": "wtksenyh",
						"name": "cha",
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
						"id": "njgpcpe8",
						"name": "hp",
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
						"id": "cc2bwb34",
						"name": "dead",
						"type": "bool",
						"required": false,
						"unique": false,
						"options": {}
					},
					{
						"system": false,
						"id": "1cbvmcww",
						"name": "head",
						"type": "relation",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"collectionId": "n3bxfnpsd97m0dt",
							"cascadeDelete": false
						}
					},
					{
						"system": false,
						"id": "jbaibg7t",
						"name": "chest",
						"type": "relation",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"collectionId": "n3bxfnpsd97m0dt",
							"cascadeDelete": false
						}
					},
					{
						"system": false,
						"id": "zbfwqdfg",
						"name": "primary",
						"type": "relation",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"collectionId": "n3bxfnpsd97m0dt",
							"cascadeDelete": false
						}
					},
					{
						"system": false,
						"id": "cb11q1db",
						"name": "secondary",
						"type": "relation",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"collectionId": "n3bxfnpsd97m0dt",
							"cascadeDelete": false
						}
					},
					{
						"system": false,
						"id": "kyrhxyeb",
						"name": "feet",
						"type": "relation",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"collectionId": "n3bxfnpsd97m0dt",
							"cascadeDelete": false
						}
					},
					{
						"system": false,
						"id": "s2k2cbgl",
						"name": "legs",
						"type": "relation",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"collectionId": "n3bxfnpsd97m0dt",
							"cascadeDelete": false
						}
					},
					{
						"system": false,
						"id": "azeybrru",
						"name": "pet",
						"type": "relation",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"collectionId": "n3bxfnpsd97m0dt",
							"cascadeDelete": false
						}
					},
					{
						"system": false,
						"id": "syq3hfhe",
						"name": "background",
						"type": "relation",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"collectionId": "n3bxfnpsd97m0dt",
							"cascadeDelete": false
						}
					},
					{
						"system": false,
						"id": "j27edsdl",
						"name": "currency",
						"type": "number",
						"required": false,
						"unique": false,
						"options": {
							"min": null,
							"max": null
						}
					}
				],
				"listRule": null,
				"viewRule": null,
				"createRule": null,
				"updateRule": null,
				"deleteRule": null
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
