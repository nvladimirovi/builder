let structure = [];

class Tree {
    /**
     * Add elements into the 
     * structure array wich represents the HTML structure
     * @param {*object} tree 
     */
    static printDFS(tree) {
        if (tree == null) return;

        if (tree.element.type === "img") {
            //console.log("<" + tree.element.type + "/>");
            structure.push("<" + tree.element.type + "/>");
        } else {
            //console.log("<" + tree.element.type + ">");
            structure.push("<" + tree.element.type + ">");
        }

        let child = null;

        if (tree.children) {
            for (let i = 0; i < tree.children.length; i++) {
                child = tree.children[i].root;
                this.printDFS(child);
            }
        }

        if (tree.element.type === "img") {
            return true;
        } else {
            //console.log("</" + tree.element.type + ">");
            structure.push("</" + tree.element.type + ">");
        }
    }

    static treeParser(tree) {
        structure = [];
        this.printDFS(tree);
        return structure;
    }
}

module.exports = Tree;
