let addBtn = document.querySelector('button');
let title= document.querySelector('#title')
let author = document.querySelector('#author');
let language = document.querySelector('#language')
let pages = document.querySelector('#pages');
let hasRead = document.querySelector('#hasRead');
const form = document.querySelector('form');
const cardsContainer= document.querySelector('.cards');
const deleteConfirm=document.querySelector('#deleteConfirm');
let cardIndex=0;
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

function displayLibrary(){ 
  cardsContainer.innerHTML= '';
  Books.forEach(newBook => {
    cardIndex=Books.indexOf(newBook);
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
    hasReadPara.style.color = newBook.read ? 'green' : 'red'
    let delBtn=document.createElement('button');
    let changeReadBtn=document.createElement('button');
    changeReadBtn.className="changeRead";
    delBtn.className='delete'
    changeReadBtn.addEventListener('click',()=>{
      newBook.ChangeRead();
      displayLibrary();
    })
    delBtn.innerHTML="<div class='frame'><img src='https://cdn-icons-png.flaticon.com/512/2891/2891491.png'></div>";
    changeReadBtn.innerHTML="<div class='frame'><img src='https://cdn-icons-png.flaticon.com/512/3068/3068380.png'></div>";
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

    delBtn.addEventListener('click',()=>{
      form.style.filter = 'blur(5px)';
      cardsContainer.style.filter='blur(5px)';
      let deleteConfirm = document.createElement('div');
      deleteConfirm.style.filter="none";
      deleteConfirm.className="deleteConfirm";
      let deleteText=document.createElement('h3');
      deleteText.innerHTML=`Are You Sure You Want To Delete <span>${newBook.title}</span>`
      let yesDel=document.createElement('button');
      yesDel.textContent="Yes";
   
      yesDel.className="yesDel";
    
      let noDel=document.createElement('button');
      noDel.textContent="NO";
      noDel.className="noDel";

      deleteConfirm.appendChild(deleteText);
      deleteConfirm.appendChild(yesDel);
      deleteConfirm.appendChild(noDel);
      document.body.appendChild(deleteConfirm);
      yesDel.addEventListener('click',()=>{
        form.style.filter = 'none';
        cardsContainer.style.filter='none';
        card.remove();
        let cardIndex=Books.indexOf(newBook);
        Books.splice(cardIndex,1);
        deleteConfirm.remove();
        displayLibrary();
      })  
      noDel.addEventListener('click',()=>{
        deleteConfirm.remove();
        form.style.filter = 'none';
        cardsContainer.style.filter='none';
      })
    })

   
  });
}
form.addEventListener('submit',function(event){
    event.preventDefault();
    let newBook= new Book(title.value,author.value,pages.value,language.value,hasRead.checked);
    Books.push(newBook);
    displayLibrary(); 
  this.reset();
})
// function Book(title,author,pages,language,read){
//     this.title=title;
//     this.author=author;
//     this.pages=pages;
//     this.language=language;
//     this.read=read;
// }
// Book.prototype.ChangeRead = function(){
//   this.read = this.read ? false : true;

// }
class Book{
  constructor(title,author,pages,language,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.language=language;
    this.read=read;
  }
  ChangeRead(){
    this.read = this.read ? false : true;
  }
  
}
