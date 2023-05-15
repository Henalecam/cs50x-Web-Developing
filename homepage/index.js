const textarea = document.querySelector('.post-textarea');
const postButton = document.querySelector('.post-button');
const postsContainer = document.querySelector('.posts');
const image = document.querySelector('.header-box-image');

postButton.addEventListener('click', () => {
  if (textarea.value.trim() === '') {
    alert('Write somenthing to publish.');
  } else {
    publish();
  }
});

function publish() {
  console.log('publicando');
  const post = textarea.value;
  const postDiv = document.createElement('div');
  postDiv.classList.add('simple-post');
  const postHeader = document.createElement('div');
  postHeader.classList.add('simple-post-header');
  const postImage = document.createElement('img');
  postImage.classList.add('simple-post-image');
  postImage.src = image.src;
  const postName = document.createElement('div');
  postName.classList.add('simple-post-name');
  const postNameh3 = document.createElement('h3');
  postNameh3.innerText = 'Henrique Alexandre';
  const postText = document.createElement('div');
  postText.classList.add('simple-post-content');
  postText.innerText = post;
  postHeader.appendChild(postImage);
  postHeader.appendChild(postName);
  postName.appendChild(postNameh3);
  postDiv.appendChild(postHeader);
  postDiv.appendChild(postText);
  postsContainer.appendChild(postDiv);
  textarea.value = '';
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

textarea.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
});

textarea.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    postButton.click();
  }
});
textarea.addEventListener('input', e => {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
});

//   function sendEmail() {
//     const email = document.getElementById("FormControlInput1").value;
//     const mensagem = document.getElementById("FormControlTextarea1").value;

//     Email.send({
//         SecureToken: "AIzaSyA5wr1L6i5IkP05sNROxTNOjaWiKQ3Z1rg",
//         To: "henriqueprojetosportf@gmail.com",
//         From: email,
//         Body: mensagem,
//     }).then((message) => {
//         if (message === "OK") {
//             alert("E-mail enviado com sucesso.");
//         } else {
//             alert("Erro ao enviar e-mail.");
//         }
//     });
// } Another Way to Send Email
