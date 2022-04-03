import {makeAutoObservable, runInAction} from "mobx";
import fakeTags from '../fakedata/tags'

class tagsStore {
    isLoading = false;
    allTags = [];

    loadTags() {
        this.allTags = fakeTags
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new tagsStore()