const controllers = require("../controllers");
const auth = require("./auth");

module.exports = app => {
    /**
     * Home
     */
    app.get("/", controllers.home.index);

    /**
     * User
     */
    app.get("/users/register", controllers.users.registerGet);
    app.post("/users/register", controllers.users.registerPost);
    app.get("/users/login", controllers.users.loginGet);
    app.post("/users/login", controllers.users.loginPost);
    app.post("/users/logout", controllers.users.logout);

    /**
     * Layout
     */
    app.get("/template/create", controllers.template.create_get);
    app.post("/template/create", controllers.template.create_post);
    app.get("/template/all", controllers.template.all);
    /**
     * Not found
     */
    app.all("*", (req, res) => {
        res.status(404);
        res.send("404 Not Found!");
        res.end();
    });
};
