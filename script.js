
const serverData = [
  { id:1,
    title: "Portuguese company (unipessoal ltd)", 
    date: "22.05.2023", 
    category: "Taxation of IP", 
    views: 285 
  },
  { id:2,
    title: "I don't want to pay taxes in the Netherlands", 
    date: "22.05.2023", 
    category: "Opening and work of IP", 
    views: 285 
  },
  { id:3,
    title: "EMZ clearance for high skilled migrant", 
    date: "22.05.2023", 
    category: "Taxation of IP", 
    views: 285 
  },
  { id:4,
    title: "Portuguese company (unipessoal ltd)", 
    date: "22.05.2023", 
    category: "Opening and work of IP", 
    views: 285 
  },
  { id:5,
    title: "Buying a house in the Netherlands for non-residents", 
    date: "22.05.2023", 
    category: "Common", 
    views: 285 
  },
  { id:6,
    title: "I don't want to pay taxes in the Netherlands", 
    date: "22.05.2023", 
    category: "Taxation of IP", 
    views: 285 
  },
  { id:7,
    title: "EMZ clearance for high skilled migrant", 
    date: "22.05.2023", 
    category: "Taxation of IP", 
    views: 285 
  },
];

/**nav menu */
document.getElementById('nav-collaps').addEventListener('click', function() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('menu-open'); // Добавляем/удаляем класс для открытия/закрытия меню
});

function test(){
  alert("It works )))");
}

document.addEventListener('DOMContentLoaded', function() {
  const listOfQuestions = document.querySelector('.listOfQuestions');
  listOfQuestions.innerHTML = serverData.map(data => `
  <a href="/question/${data.id}">
    <div class="question">
      <div class="ellips">
        <img src="icons/check.svg" alt="">
      </div>
      <div class="questionTitle">
        <h3>${data.title}</h3>
        <div class="questionDate">
          <span>${data.date}</span>
          <span>${data.category}</span>
        </div>
      </div>
      <div class="viewQuantity"> 
        <span>${data.views}</span>
        <span>view</span>
      </div>
      
    </div>
    </a>
  `).join('');
});


