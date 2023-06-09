// 在螢幕寬度小於991px時禁用 Popover
function togglePopover() {
  const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
  const windowWidth = window.innerWidth;

  popovers.forEach((popover) => {
    const popoverInstance = bootstrap.Popover.getInstance(popover);

    if (windowWidth < 991) {
      popoverInstance.disable();
    } else {
      popoverInstance.enable();
    }
  });
}

// 載入頁面時進行初始設定
togglePopover();

// 監聽視窗大小變化事件
window.addEventListener('resize', togglePopover);



// $(document).ready(function(){
// $("#answer1").slideUp(,$(".question-1>.question-arrow").text("expand_less"));
// $("#answer1").slideDown(,$(".question-1>.question-arrow").text("expand_less"));
// $("#answer2").slideUp();
// $("#answer3").slideUp();
// $("#answer4").slideUp();
// $("#answer5").slideUp();
// $("#answer6").slideUp();
// });

const scrollToBottom = document.querySelector('.scrollToBottom');
window.addEventListener('scroll', (e) => {
  if (window.innerHeight > 768) { return; }
  if (window.scrollY > 2000) {
    scrollToBottom.classList.add("hide");
  scrollToBottom.classList.remove("show");
  } else if(window.scrollY<1000){
    scrollToBottom.classList.add("show");
    scrollToBottom.classList.remove("hide");
  }
})


function handleContentReplacement() {
  $(".question.question-1").click(function () {
    $("#answer1").slideToggle(300);
    if (document.querySelector(".question-1 .question-arrow").textContent == "expand_more") {
      document.querySelector(".question-1 .question-arrow").textContent = "expand_less";
    } else {
      document.querySelector(".question-1 .question-arrow").textContent = "expand_more";
    }
  });
  $(".question.question-2").click(function () {
    $("#answer2").slideToggle(300);
    if (document.querySelector(".question-2 .question-arrow").textContent == "expand_more") {
      document.querySelector(".question-2 .question-arrow").textContent = "expand_less";
    } else {
      document.querySelector(".question-2 .question-arrow").textContent = "expand_more";
    }
  });
  $(".question.question-3").click(function () {
    $("#answer3").slideToggle(300);
    if (document.querySelector(".question-3 .question-arrow").textContent == "expand_more") {
      document.querySelector(".question-3 .question-arrow").textContent = "expand_less";
    } else {
      document.querySelector(".question-3 .question-arrow").textContent = "expand_more";
    }
  });
  $(".question.question-4").click(function () {
    $("#answer4").slideToggle(300);
    if (document.querySelector(".question-4 .question-arrow").textContent == "expand_more") {
      document.querySelector(".question-4 .question-arrow").textContent = "expand_less";
    } else {
      document.querySelector(".question-4 .question-arrow").textContent = "expand_more";
    }
  });
  $(".question.question-5").click(function () {
    $("#answer5").slideToggle(300);
    if (document.querySelector(".question-5 .question-arrow").textContent == "expand_more") {
      document.querySelector(".question-5 .question-arrow").textContent = "expand_less";
    } else {
      document.querySelector(".question-5 .question-arrow").textContent = "expand_more";
    }
  });
  $(".question.question-6").click(function () {
    $("#answer6").slideToggle(300);
    if (document.querySelector(".question-6 .question-arrow").textContent == "expand_more") {
      document.querySelector(".question-6 .question-arrow").textContent = "expand_less";
    } else {
      document.querySelector(".question-6 .question-arrow").textContent = "expand_more";
    }
  });

}



const ajax_change_area = document.getElementById('ajax-change-area');
// console.log(ajax_change_area);
const area1 = document.querySelector('#selector-btn :nth-child(1)');
const area2 = document.querySelector('#selector-btn :nth-child(2)');
const area3 = document.querySelector('#selector-btn :nth-child(3)');
const area4 = document.querySelector('#selector-btn :nth-child(4)');


const btn1 = document.getElementById('btn');
const changeDiv = document.getElementById('change');
const allbtn = document.querySelectorAll('#selector-btn a');
console.log(allbtn);


area1.addEventListener('click', (e) => {
  allbtn.forEach((item, index) => {
    item.classList.remove('active');
  })
  e.target.classList.add('active');
  e.preventDefault();
  fetch('./introduce.html')
    .then(response => response.text())
    .then(data => {
      ajax_change_area.innerHTML = data;
      // window.contentReplacementComplete = false;
    })
});

area2.addEventListener('click', (e) => {
  allbtn.forEach((item, index) => {
    item.classList.remove('active');
  })
  e.target.classList.add('active');
  e.preventDefault();
  fetch('./questions.html')
    .then(response => response.text())
    .then(data => {
      ajax_change_area.innerHTML = data;
      window.contentReplacementComplete = true;
      handleContentReplacement();
    })
});
area3.addEventListener('click', (e) => {
  allbtn.forEach((item, index) => {
    item.classList.remove('active');
  })
  e.target.classList.add('active');
  e.preventDefault();
  fetch('./progress.html')
    .then(response => response.text())
    .then(data => {
      ajax_change_area.innerHTML = data;
      // window.contentReplacementComplete = false;
    })
});
area4.addEventListener('click', (e) => {
  allbtn.forEach((item, index) => {
    item.classList.remove('active');
  })
  e.target.classList.add('active');
  e.preventDefault();
  fetch('./message.html')
    .then(response => response.text())
    .then(data => {
      ajax_change_area.innerHTML = data;
      // window.contentReplacementComplete = false;
    })
});






