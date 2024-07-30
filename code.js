let addBtn = document.querySelector('button');
let title= document.querySelector('#title')
let author = document.querySelector('#author');
let language = document.querySelector('#language')
let pages = document.querySelector('#pages');
let hasRead = document.querySelector('#hasRead');
const form = document.querySelector('form');
const cardsContainer= document.querySelector('.cards');

let Books = [

    // {
    //     title: 'Harry Potter',
    //     author: 'J.K Rowling',
    //     pages: 245,
    //     language: 'English',
    //     read: false
    // },
    // {
    //     title: 'Harry Potter',
    //     author: 'J.K Rowling',
    //     pages: 245,
    //     language: 'English',
    //     read: false
    // }
];
Book.prototype.ChangeRead = function(){
  this.read = this.read ? false : true;

}
function displayLibrary(){ 
  cardsContainer.innerHTML= '';
  Books.forEach(newBook => {
    let titlePara = document.createElement('p');
    titlePara.textContent=`Title: ${newBook.title}`;
    let authorPara = document.createElement('p');
    authorPara.textContent=`Author: ${newBook.author}`;
    let languagePara = document.createElement('p');
    languagePara.textContent=`Language: ${newBook.language}`;
    let pagesPara = document.createElement('p');
    pagesPara.textContent=`Pages: ${newBook.pages}`;
    let hasReadPara = document.createElement('p');
    hasReadPara.textContent=`Has Read: ${newBook.read}`;
    let delBtn=document.createElement('button');
    let changeReadBtn=document.createElement('button');
    changeReadBtn.className="changeRead";
    delBtn.className='delete'
    changeReadBtn.addEventListener('click',()=>{
      newBook.ChangeRead();
      displayLibrary();
    })
    delBtn.addEventListener('click',(event)=>{
      console.log(Books);
      let cardIndex=Books.indexOf(newBook);
        if (cardIndex !== -1) {
          Books.splice(cardIndex, 1);
          card.remove();
      }
      console.log(Books);
        
    })
    delBtn.textContent='Delete';
    changeReadBtn.textContent='Change Read';
    let card = document.createElement('div');
    card.className="card";
    card.appendChild(titlePara);
    card.appendChild(authorPara);
    card.appendChild(languagePara);
    card.appendChild(pagesPara);
    card.appendChild(hasReadPara);
    card.appendChild(changeReadBtn);
    card.appendChild(delBtn);
    cardsContainer.appendChild(card);
    if (document.body.scrollHeight > window.innerHeight) {
      document.body.style.height = '100%';
  }
   
  });
}
form.addEventListener('submit',function(event){
    event.preventDefault();
    let newBook= new Book(title.value,author.value,pages.value,language.value,hasRead.checked);
    Books.push(newBook);
    displayLibrary();
  this.reset();
})
function Book(title,author,pages,language,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.language=language;
    this.read=read;
}
