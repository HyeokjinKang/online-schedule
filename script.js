const links = {
                "진로": "https://bit.ly/3hrEkcE",
                "자료구조 B": "https://bit.ly/3j32xqb",
                "음악": "https://bit.ly/34rBBfM",
                "국어": "https://bit.ly/2Ysa6Ph",
                "사회": "https://bit.ly/34rBBfM",
                "수학": "https://bit.ly/3hqR9nJ",
                "과학": "https://bit.ly/3b8gwZ6",
                "영어": "https://bit.ly/34pW9oX",
                "컴일": "https://bit.ly/3aM8hle",
                "CA": "https://bit.ly/2Qf4l33",
                "체육": "https://bit.ly/2Elyefv",
                "자료구조 A": "https://bit.ly/31lyLHb",
                "HR": "https://bit.ly/2Qf4l33"
              }
const schedule = {
                    "1-3": {
                      "Mon": ['영어', '자료구조 A', '자료구조 A', '음악', '자료구조 B', '자료구조 B', '수학'],
                      "Tue": ['수학', '과학', '체육', '음악', '컴일', '진로', 'CA'],
                      "Wed": ['자료구조 A', '영어', '진로', '국어', '사회', '수학'],
                      "Thu": ['컴일', '과학', '사회', '국어', '음악', '체육', 'HR'],
                      "Fri": ['국어', '사회', '자료구조 B', '컴일', '자료구조 A', '과학', '영어'],
                      "Sat": ['No Schedule'],
                      "Sun": ['No Schedule']
                    },
                    "1-4": {
                      "Mon": ['진로', '자료구조 B', '음악', '국어', '사회', '수학', '과학'],
                      "Tue": ['자료구조 B', '자료구조 B', '영어', '컴일', '국어', 'CA', 'CA'],
                      "Wed": ['수학', '체육', '자료구조 A', '사회', '영어', '과학', ''],
                      "Thu": ['음악', '국어', '과학', '컴일', '자료구조 A', '자료구조 A', 'HR'],
                      "Fri": ['사회', '컴일', '음악', '영어', '체육', '수학', '자료구조 A'],
                      "Sat": ['No Schedule'],
                      "Sun": ['No Schedule']
                    }
                  };
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let className = '';
let todaySchedule = [];
let recentName = '';

document.addEventListener("DOMContentLoaded", () => {
  initialize();
});

const initialize = () => {
  if(localStorage.getItem('class') == null) {
    classSelected({value: "1-4"});
    return;
  }
  className = localStorage.getItem('class');
  let elements = document.getElementsByTagName('option');
  for(let i = 0; i < elements.length; i++) {
    if(className == elements[i].value) {
      classSelector.selectedIndex = i;
    }
  }
  loop();
};

const loop = () => {
  setTimeout(loop, 1000);
  const d = new Date();
  todaySchedule = schedule[className][days[d.getDay()]];
  if(todaySchedule[0] == 'No Schedule') {
    noSchedule();
    return;
  }
  let elements = document.getElementsByClassName('schedule');
  for(let i = 0; i < 7; i++) {
    elements[i].textContent = todaySchedule[i];
    elements[i].classList.remove('selected');
  }
  let hour = d.getHours();
  let min = d.getMinutes();
  if(hour < 8) {
    document.getElementsByTagName('h2')[0].innerHTML = '아직 리잠 잘 시간이야..';
  } else if(hour <= 8 && min < 45) {
    updateH2('조례', links.HR, true);
    redirect(links.HR, '조례');
  } else if(hour == 8 && min < 58) {
    updateH2('조례', links.HR, false);
    redirect(links.HR, '조례');
  } else if(hour == 8) {
    elements[0].classList.add('selected');
    updateH2(todaySchedule[0], links[todaySchedule[0]], true);
    redirect(links[todaySchedule[0]], todaySchedule[0]);
  } else if(hour <= 9 && min < 50) {
    elements[0].classList.add('selected');
    updateH2(todaySchedule[0], links[todaySchedule[0]], false);
    redirect(links[todaySchedule[0]], todaySchedule[0]);
  } else if(hour == 9) {
    elements[1].classList.add('selected');
    updateH2(todaySchedule[1], links[todaySchedule[1]], true);
    redirect(links[todaySchedule[1]], todaySchedule[1]);
  } else if(hour <= 10 && min < 50) {
    elements[1].classList.add('selected');
    updateH2(todaySchedule[1], links[todaySchedule[1]], false);
    redirect(links[todaySchedule[1]], todaySchedule[1]);
  } else if(hour == 10) {
    elements[2].classList.add('selected');
    updateH2(todaySchedule[2], links[todaySchedule[2]], true);
    redirect(links[todaySchedule[2]], todaySchedule[2]);
  } else if(hour <= 11 && min < 50) {
    elements[2].classList.add('selected');
    updateH2(todaySchedule[2], links[todaySchedule[2]], false);
    redirect(links[todaySchedule[2]], todaySchedule[2]);
  } else if(hour == 11) {
    elements[3].classList.add('selected');
    updateH2(todaySchedule[3], links[todaySchedule[3]], true);
    redirect(links[todaySchedule[3]], todaySchedule[3]);
  } else if(hour <= 12 && min < 50) {
    elements[3].classList.add('selected');
    updateH2(todaySchedule[3], links[todaySchedule[3]], false);
    redirect(links[todaySchedule[3]], todaySchedule[3]);
  } else if(hour == 12 || (hour == 13 && min < 40)) {
    document.getElementsByTagName('h2')[0].innerHTML = '점심시간 !';
  } else if(hour == 13 && min < 50) {
    elements[4].classList.add('selected');
    updateH2(todaySchedule[4], links[todaySchedule[4]], true);
    redirect(links[todaySchedule[4]], todaySchedule[4]);
  } else if(hour == 13 || (hour <= 14 && min < 40)) {
    elements[4].classList.add('selected');
    updateH2(todaySchedule[4], links[todaySchedule[4]], false);
    redirect(links[todaySchedule[4]], todaySchedule[4]);
  } else if(hour == 14 && min < 50) {
    elements[5].classList.add('selected');
    updateH2(todaySchedule[5], links[todaySchedule[5]], true);
    redirect(links[todaySchedule[5]], todaySchedule[5]);
  } else if(hour == 14 || (hour <= 15 && min < 40)) {
    elements[5].classList.add('selected');
    updateH2(todaySchedule[5], links[todaySchedule[5]], false);
    redirect(links[todaySchedule[5]], todaySchedule[5]);
  } else if(hour == 15 && min < 50) {
    elements[6].classList.add('selected');
    updateH2(todaySchedule[6], links[todaySchedule[6]], true);
    redirect(links[todaySchedule[6]], todaySchedule[6]);
  } else if(hour == 15 || (hour <= 16 && min < 40)) {
    elements[6].classList.add('selected');
    updateH2(todaySchedule[6], links[todaySchedule[6]], false);
    redirect(links[todaySchedule[6]], todaySchedule[6]);
  } else if(hour == 15 && min < 45) {
    updateH2('종례', links.HR, true);
    redirect(links.HR, '종례');
  } else if(hour == 15) {
    updateH2('종례', links.HR, false);
    redirect(links.HR, '종례');
  } else {
    document.getElementsByTagName('h2')[0].innerHTML = '수업끝 !!';
    recentName = '';
  }
};

const classSelected = e => {
  localStorage.setItem('class', e.value);
  initialize();
};

const updateH2 = (className, classLink, isReady) => {
  document.getElementsByTagName('h2')[0].innerHTML = `${isReady ? '다음 수업 준비' : '지금 수업중'} : <span>${className}</span>, <a href="${classLink}" target="_blank">여기</a>를 눌러 수동접속`;
};

const noSchedule = () => {
  document.getElementsByTagName('h2')[0].innerHTML = '오늘은 수업이 없는 날입니다!';
};

const redirect = (link, name) => {
  if(recentName == name) return;
  let a = document.createElement("a");
  a.href = link;
  a.target = "_blank";
  a.click();
  recentName = name;
}