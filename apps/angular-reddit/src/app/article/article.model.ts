export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(): void { //void is a Typescript type, like number, string, array, and is used to type that which returns no value. This doesn't return a value because it's used to assign a function in a model, and actually returns the value in the article component
        this.votes += 1;
    }

    voteDown():void {
        this.votes -= 1;
    }

    domain(): string {
        const domainAndPath: string  = this.link;
        if (domainAndPath == null)
        {
            return this.domain();
        }
        else {
            return domainAndPath;
        }
    }
}
