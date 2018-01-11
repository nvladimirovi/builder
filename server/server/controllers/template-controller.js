const Template = require("mongoose").model("Template");
const Tree = require("../utilities/tree")

module.exports = {
    create_get: (req, res) => {
        res.render("template/create");
    },
    create_post: (req, res) => {
        let template = req.body;

        //console.log(Tree.treeParser(template.root));
        //console.log(req.body);
        Template
            .create({
                body: template
            }).then(() => {
                res.render("template/create");
            })
    },
    all: (req, res) => {
        Template
            .find({})
            .then(template => {
                res.render("template/all");
            });
    }
};
