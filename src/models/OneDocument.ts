export class OneDocument {
    id: any;
    title: string;
    url: string;
    description: string;
    tagNameList: string[] = [];
    tagList: Tag[] = [];

    constructor() {
        this.title = ""
        this.url = ""
        this.description = ""
    }
}

export class Tag {
    id: any;
    name: string | undefined;
}