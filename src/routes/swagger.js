/**
 * @swagger

{
  "openapi": "3.0.3",
  "info": {
    "title": "Turing Squad API DOCS",
    "description": "Selected API endpoints for final project - Touring squad",
    "contact": {
      "email": "turingfinalproject@gmail.com"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    },
    "version": "1.0.11"
  },
  "externalDocs": {
    "description": "Find out more about to document your API",
    "url": "http://swagger.io"
  },
  "servers": [
    {
      "url": "https://petstore3.swagger.io/api/v3"
    }
  ],
  "tags": [
    {
      "name": "songs",
      "description": "Api endpoints for songs"
    }
  ],
  "paths": {
    "/songs": {
      "get": {
        "tags": [
          "songs"
        ],
        "summary": "Get all songs from DB",
        "operationId": "getAllSongs",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "Set the necessery page as part of pagination",
            "required": false,
            "schema": {
              "type": "number"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Set the necessery amount of documents per request",
            "required": false,
            "schema": {
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Songs"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found"
          },
          "500": {
            "description": "Server error"
          }
        }
      }
    },
    "/addsong": {
      "post": {
        "tags": [
          "songs"
        ],
        "summary": "Upload a song with cloudinary",
        "description": "Upload a song with cloudinary",
        "operationId": "createSongWithCloudinary",
        "requestBody": {
          "description": "Upload a song and a thumbnail using cloudinary service",
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "type": "string"
                  },
                  "user": {
                    "type": "string"
                  },
                  "image": {
                    "type": "string",
                    "format": "binary"
                  },
                  "video": {
                    "type": "string",
                    "format": "binary"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/uploadSong"
                }
              }
            }
          },
          "500": {
            "description": "Server error"
          }
        }
      }
    },
    "/songs/songId": {
      "get": {
        "tags": [
          "songs"
        ],
        "summary": "Find song by id",
        "operationId": "getSongById",
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Songs"
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },
    "/songs/like": {
      "post": {
        "tags": [
          "songs"
        ],
        "summary": "Give a like to a song",
        "description": "like a song",
        "operationId": "likeASong",
        "requestBody": {
          "content": {
            "application/jspm": {
              "schema": {
                "$ref": "#/components/schemas/likeASong"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/success"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Songs": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "example": "635a48a4692107ce51bb8e89"
          },
          "title": {
            "type": "string",
            "example": "Balkan improvisation"
          },
          "fileUrl": {
            "type": "string",
            "example": "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666719426/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/05_Jazz_at_Mladost_Club_-_Balkan_improvisation_zokpmf.mp3"
          },
          "imageUrl": {
            "type": "string",
            "example": "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/cover_pzehw3.webp"
          },
          "album": {
            "$ref": "#/components/schemas/Album"
          },
          "genre": {
            "$ref": "#/components/schemas/Genre"
          },
          "likedBY": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LikedBY"
            }
          }
        }
      },
      "Album": {
        "required": [
          "id",
          "title",
          "image",
          "user"
        ],
        "properties": {
          "id": {
            "type": "string",
            "example": "635a488e110c87b23d648393"
          },
          "title": {
            "type": "string",
            "example": "Jazz Night"
          }
        }
      },
      "Genre": {
        "required": [
          "id",
          "title"
        ],
        "properties": {
          "id": {
            "type": "string",
            "example": "63526ef36969fec84f60b21e"
          },
          "title": {
            "type": "string",
            "example": "Jazz"
          }
        }
      },
      "LikedBY": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "example": "63594f70cbd22b53ea62833b"
          },
          "username": {
            "type": "string",
            "example": "fehguy"
          }
        }
      },
      "uploadSong": {
        "type": "object",
        "properties": {
          "_id": {
            "type": "string",
            "example": "635bfcdf6642ad7e14b79764"
          },
          "title": {
            "type": "string",
            "example": "Like a virgin"
          },
          "fileUrl": {
            "type": "string",
            "example": "http://res.cloudinary.com/dwrqbkeyb/video/upload/v1666972892/songs/rwnkxa2hleednoiic5ph.mp3"
          },
          "thumbnail": {
            "type": "string",
            "example": "http://res.cloudinary.com/dwrqbkeyb/image/upload/v1666972894/images/ysgsvltvdpfegvhkatfa.png"
          },
          "cloudinaryId": {
            "type": "string",
            "example": "songs/rwnkxa2hleednoiic5ph"
          },
          "duration": {
            "type": "integer",
            "example": 324.445
          }
        }
      },
      "likeASong": {
        "type": "object",
        "properties": {
          "songId": {
            "type": "string",
            "example": "635bfcdf6642ad7e14b79764"
          },
          "userId": {
            "type": "string",
            "example": "635bfcde6642ad7e14f75147"
          }
        }
      },
      "success": {
        "type": "object",
        "properties": {
          "Success": {
            "type": "string",
            "example": "Success"
          }
        }
      }
    }
  }
}
 */
