import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import * as path from "path";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Turing Squad API",
      version: "1.0.0",
    },
  },
  servers: {
    url: "http://localhost:4000",
  },
  apis: ["src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/docs.json", (req, res) => {
    res.setHeader("Content-type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`version doc 1 is availabe at http://localhost:${port}/api/docs`);
};

export default swaggerDocs;
