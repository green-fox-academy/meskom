'use strict';

class blogPost {
    authorName: string;
    title: string;
    text: string;
    publicationDate: string;

constructor(authorName: string, title: string, text: string, publicationDate: string){
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    
    }
blogPostInfo(): void {
    console.log(`This is title: ${this.title}, its author was ${this.authorName}, published on: ${this.publicationDate}`     
)
}

}
const blogPost1: blogPost = new blogPost ('John Doe', 'Lorem Ipsum',' popular long-form, stick-figure-illustrated blog about almost everything.', '2017.03.28')

 blogPost1.blogPostInfo();
