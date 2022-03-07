const links = {
  공일: "5363759347&pwd=dimigo",
  데프: "9785689787&pwd=dimigo",
  시프: "3853069417&pwd=dimigo",
  미적: "https://classroom.google.com/u/1",
  구축: "4679526373&pwd=dimigo",
  미래: "3053522072&pwd=dimigo",
  비영A: "4700404365&pwd=dimigo",
  비영B: "7385237525&pwd=dimigo",
  응개: "2121961647&pwd=dimigo",
  공수: "https://classroom.google.com/u/1",
  고전: "3300965795&pwd=dimigo",
  진로: "7385237525&pwd=dimigo",
  방콘: "",
};

const localSchedule = {
  "3-3": [
    ["공일", "데프", "시프", "미적", "미래", "미래", "HR"],
    ["응개", "공수", "미래", "미적", "비영", "고전", "데프"],
  ],
  "3-4": [
    ["비영", "미래", "데프", "시프", "공일", "응개", "HR"],
    ["공수", "비영", "진로", "응개", "응개", "데프", "공수"],
  ],
};

let todaySchedule = [];
const scheduleFunction = () => {
  if (new Date().getDay() >= 5 || new Date().getDay() == 0) {
    todaySchedule = ["No Schedule"];
    return;
  }
  let classData = localStorage.getItem("class").split("-");
  fetch(`https://api.dimigo.in/timetable/weekly/grade/${classData[0]}/class/${classData[1]}`, {
    method: "GET",
  })
    .then((data) => data.json())
    .then((data) => {
      switchExplanation.textContent = "디미고인 시간표 사용중";
      todaySchedule = data.timetable[new Date().getDay() - 1].sequence;
      if (todaySchedule[0] == "쉬는 날") {
        todaySchedule = ["No Schedule"];
      } else {
        for (let i = 0; i <= 6; i++) {
          if (todaySchedule[i] == undefined) {
            todaySchedule[i] = "";
          } else if (todaySchedule[i][0] == "*") {
            //변동 시간표는 앞에 *이 붙음. 그걸 제거해줌
            todaySchedule[i] = todaySchedule[i].substr(2);
          } else if (todaySchedule[i]) {
            todaySchedule[i] = todaySchedule[i];
          }
        }
      }
    })
    .catch((e) => {
      //디미고인 시간표 사용 불가시 로컬 시간표 사용
      switchExplanation.textContent = "로컬 시간표 사용중";
      for (let i = 0; i <= 6; i++) {
        todaySchedule[i] = localSchedule[localStorage.getItem("class")][new Date().getDay() - 1][i];
      }
    });
};

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let className = "";
let recentName = "";

let scheduleInterval;

document.addEventListener("DOMContentLoaded", () => {
  initialize();
});

const isMobile = () => {
  let UserAgent = navigator.userAgent;
  if (
    UserAgent.match(/iPhone|iPod|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null ||
    UserAgent.match(/LG|SAMSUNG|Samsung/) != null
  ) {
    return true;
  } else {
    return false;
  }
};

const initialize = (updateOnly) => {
  if (localStorage.getItem("class") == null) {
    document.getElementById("explanation").innerHTML = "반을 선택해주세요.";
    return;
  }
  className = localStorage.getItem("class");
  let elements = document.getElementsByTagName("option");
  if (elements[0].value == "선택해주세요") {
    classSelector.remove(0);
  }
  for (let i = 0; i < elements.length; i++) {
    if (className == elements[i].value) {
      classSelector.selectedIndex = i;
    }
  }
  scheduleFunction();
  if (!updateOnly) {
    scheduleInterval = setInterval(scheduleFunction, 3600000);
    loop();
  }
};

const loop = () => {
  setTimeout(loop, 1000);
  if (className == "3-3") {
    links["CA"] = links["비영B"];
    links["HR"] = links["비영B"];
  } else if (className == "3-4") {
    links["CA"] = links["미적"];
    links["HR"] = links["미적"];
  }
  const d = new Date();
  if (todaySchedule[0] == "No Schedule") {
    noSchedule();
    return;
  }
  if (!todaySchedule.length) {
    explanation.textContent = "로딩중..";
    return;
  }
  let hour = d.getHours();
  let min = d.getMinutes();
  if ((19 <= hour && 40 <= min) || hour == 20 || (hour == 21 && min < 50)) {
    //저녁이후
  } else if (hour == 17 || (hour == 18 && min < 35)) {
    //방과후
    day = d.getDay();
    switch (day) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
    }
    // todaySchedule[4] = "";
    // todaySchedule[5] = "";
    // todaySchedule[6] = "";
  }
  let elements = document.getElementsByClassName("schedule");
  for (let i = 0; i < 7; i++) {
    let inner = "";
    if (todaySchedule[i] == "구축" || todaySchedule[i] == "미래" || todaySchedule[i] == "방콘") {
      elements[i].style.cursor = "default";
      if (localStorage.getItem("1-a-1") == undefined || isNaN(Number(localStorage.getItem("1-a-1")))) localStorage.setItem("1-a-1", 0);
      inner = `<span class="classSelect ${localStorage.getItem("1-a-1") == 0}" onclick="classClicked('1-a-1', 0, ${i})">구축</span>
       | <span class="classSelect ${localStorage.getItem("1-a-1") == 1}" onclick="classClicked('1-a-1', 1, ${i})">미래</span>
       | <span class="classSelect ${localStorage.getItem("1-a-1") == 2}" onclick="classClicked('1-a-1', 2, ${i})">방콘</span>`;
      if (localStorage.getItem("1-a-1")) {
        todaySchedule[i] = ["구축", "미래", "방콘"][localStorage.getItem("1-a-1")];
      }
    } else {
      inner = todaySchedule[i];
    }
    elements[i].innerHTML = inner;
    elements[i].classList.remove("selected");
  }
  if (hour < 8) {
    document.getElementById("explanation").innerHTML = "아직 리잠 잘 시간이야..";
  } else if (hour <= 8 && min < 45) {
    updateH2("조례", links.HR, true);
    redirect(links.HR, "조례");
  } else if (hour == 8 && min < 58) {
    updateH2("조례", links.HR, false);
    redirect(links.HR, "조례");
  } else if (hour == 8) {
    elements[0].classList.add("selected");
    updateH2(todaySchedule[0], links[todaySchedule[0]], true);
    redirect(links[todaySchedule[0]], todaySchedule[0]);
  } else if (hour <= 9 && min < 50) {
    elements[0].classList.add("selected");
    updateH2(todaySchedule[0], links[todaySchedule[0]], false);
    redirect(links[todaySchedule[0]], todaySchedule[0]);
  } else if (hour == 9) {
    elements[1].classList.add("selected");
    updateH2(todaySchedule[1], links[todaySchedule[1]], true);
    if (min >= 55) {
      redirect(links[todaySchedule[1]], todaySchedule[1]);
    }
  } else if (hour <= 10 && min < 50) {
    elements[1].classList.add("selected");
    updateH2(todaySchedule[1], links[todaySchedule[1]], false);
    redirect(links[todaySchedule[1]], todaySchedule[1]);
  } else if (hour == 10) {
    elements[2].classList.add("selected");
    updateH2(todaySchedule[2], links[todaySchedule[2]], true);
    if (min >= 55) {
      redirect(links[todaySchedule[2]], todaySchedule[2]);
    }
  } else if (hour <= 11 && min < 50) {
    elements[2].classList.add("selected");
    updateH2(todaySchedule[2], links[todaySchedule[2]], false);
    redirect(links[todaySchedule[2]], todaySchedule[2]);
  } else if (hour == 11 || (hour == 12 && min < 40)) {
    document.getElementsByTagName("h2")[0].innerHTML = "점심시간 !";
  } else if (hour == 12 && min < 50) {
    elements[3].classList.add("selected");
    updateH2(todaySchedule[3], links[todaySchedule[3]], true);
    if (min >= 45) {
      redirect(links[todaySchedule[3]], todaySchedule[3]);
    }
  } else if (hour == 13 || (hour <= 14 && min < 40)) {
    elements[3].classList.add("selected");
    updateH2(todaySchedule[3], links[todaySchedule[3]], false);
    redirect(links[todaySchedule[3]], todaySchedule[3]);
  } else if (hour == 13 && min < 50) {
    elements[4].classList.add("selected");
    updateH2(todaySchedule[4], links[todaySchedule[4]], true);
    if (min >= 45) {
      redirect(links[todaySchedule[4]], todaySchedule[4]);
    }
  } else if (hour == 13 || (hour <= 14 && min < 40)) {
    elements[4].classList.add("selected");
    updateH2(todaySchedule[4], links[todaySchedule[4]], false);
    redirect(links[todaySchedule[4]], todaySchedule[4]);
  } else if (hour == 14 && min < 50) {
    elements[5].classList.add("selected");
    updateH2(todaySchedule[5], links[todaySchedule[5]], true);
    if (min >= 45) {
      redirect(links[todaySchedule[5]], todaySchedule[5]);
    }
  } else if (hour == 14 || (hour <= 15 && min < 40)) {
    elements[5].classList.add("selected");
    updateH2(todaySchedule[5], links[todaySchedule[5]], false);
    redirect(links[todaySchedule[5]], todaySchedule[5]);
  } else if (hour == 15 && min < 50) {
    if (todaySchedule[6] != "") {
      elements[6].classList.add("selected");
      updateH2(todaySchedule[6], links[todaySchedule[6]], true);
      if (min >= 45) {
        redirect(links[todaySchedule[6]], todaySchedule[6]);
      }
    } else {
      updateH2("종례", links.HR, true);
    }
  } else if (hour == 15 || (hour <= 16 && min < 40)) {
    if (todaySchedule[6] != "") {
      elements[6].classList.add("selected");
      updateH2(todaySchedule[6], links[todaySchedule[6]], false);
      redirect(links[todaySchedule[6]], todaySchedule[6]);
    } else {
      updateH2("종례", links.HR, true);
    }
  } else if (hour == 16 && min < 45) {
    updateH2("종례", links.HR, true);
    redirect(links.HR, "종례");
  } else if (hour == 16) {
    updateH2("종례", links.HR, false);
    redirect(links.HR, "종례");
  } else if (hour == 17 || (hour == 18 && min < 35)) {
    // document.getElementById("explanation").innerHTML = "아래에서 수강중인 강좌를 선택해주세요.";
    document.getElementById("explanation").innerHTML = "수업끝 !!";
  } else if (hour == 18 || (hour == 19 && min < 40)) {
    document.getElementById("explanation").innerHTML = "수업끝 !!";
    recentName = "";
  } else if (hour < 21 || (hour == 21 && min < 50)) {
    // document.getElementById("explanation").innerHTML = "아래에서 수강중인 강좌를 선택해주세요.";
    document.getElementById("explanation").innerHTML = "수업끝 !!";
  } else {
    document.getElementById("explanation").innerHTML = "수업끝 !!";
    recentName = "";
  }
};

const classSelected = (e) => {
  localStorage.setItem("class", e.value);
  if (className) {
    initialize(true);
  } else {
    initialize();
  }
  document.getElementById("explanation").innerHTML = "반영 중..";
};

const updateH2 = (className, classLink, isReady) => {
  if (classLink.indexOf("pwd") != -1) {
    if (isMobile()) {
      classLink = `zoomus://zoom.us/join?confno=${classLink}`.replace("&", "?");
    } else {
      classLink = `zoommtg://zoom.us/join?action=join&confno=${classLink}`;
    }
  }
  document.getElementById("explanation").innerHTML = `${isReady ? "다음 수업 준비" : "지금 수업중"} : <span>${className}</span>, <a href="${classLink}" target="_blank">여기</a>를 눌러 수동접속`;
};

const noSchedule = () => {
  explanation.textContent = "오늘은 수업이 없는 날입니다!";
};

const classClicked = (n, b, m) => {
  if (localStorage.getItem(n) == `${b}`) {
    explanation.textContent = "링크를 실행하는 중..";
    call(links[document.getElementsByClassName("schedule")[m].getElementsByClassName("true")[0].textContent]);
  } else {
    explanation.textContent = "반영 중..";
    localStorage.setItem(n, b);
  }
};

const scheduleClicked = (n) => {
  if (!document.getElementsByClassName("schedule")[n].getElementsByTagName("span").length) {
    explanation.textContent = "링크를 실행하는 중..";
    call(links[todaySchedule[n]]);
  }
};

const redirect = (link, name) => {
  if (recentName == name) return;
  call(link);
  recentName = name;
};

const call = (link) => {
  let a = document.createElement("a");
  if (isMobile()) {
    a.target = "_blank";
    a.href = `zoomus://zoom.us/join?confno=${link}`.replace("&", "?");
  } else {
    a.href = `zoommtg://zoom.us/join?confno=${link}`;
  }
  if (link.indexOf("pwd") == -1) {
    a.target = "_blank";
    a.href = link;
  }
  a.click();
};
