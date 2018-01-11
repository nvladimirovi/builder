import { Collectable } from './collectable.module';

export class CollectableService {
    private collectables: Collectable[] = [
        { description: "Example", type: "Book" },
        { description: "Example", type: "Video" },
        { description: "Example", type: "Book" },
        { description: "Example", type: "Video" }
    ];

    private collection: Collectable[] = []

    getCollectables() {
        return this.collectables;
    }

    getCollection() {
        return this.collection
    }

    addToCollection(item: Collectable) {
        if(this.collection.indexOf(item) !== -1) {
            console.log("The item already exists.");
            return;
        }

        this.collection.push(item);
    }

    removeFromCollection(item: Collectable) {
        this.collection.splice(this.collection.indexOf(item), 1);
    }
}