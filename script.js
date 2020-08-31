const links = {
  "진로": "zoommtg://zoom.us/join?action=join&confno=8448373394&pwd=dimigo",
  "자료구조 B": "zoommtg://zoom.us/join?action=join&confno=4679526373&pwd=py2020",
  "음악": "https://bit.ly/34rBBfM",
  "국어(성)": "zoommtg://zoom.us/join?action=join&confno=3300965795&pwd=dimigo",
  "사회": "https://bit.ly/34rBBfM",
  "수학(류)": "zoommtg://zoom.us/join?action=join&confno=6838770867&pwd=dimigo",
  "과학": "zoommtg://zoom.us/join?action=join&confno=7178015132&pwd=dimigo",
  "영어(공)": "zoommtg://zoom.us/join?action=join&confno=4700404365&pwd=dimigo",
  "영어(전)": "https://zoom.us/j/7385237525?pwd=dHY5SVBuVUNrL0psZjVJU3VKR3JZQT09",
  "컴일": "zoommtg://zoom.us/join?action=join&confno=6971690768&pwd=dimigo",
  "CA": "",
  "체육": "zoommtg://zoom.us/join?action=join&confno=7760965125&pwd=dimigo",
  "자료구조 A": "zoommtg://zoom.us/join?action=join&confno=433%202940405&pwd=dimigo",
  "HR": "",
  "미술": "zoommtg://zoom.us/join?action=join&confno=8448373394&pwd=dimigo",
  "수학(이)": "https://zoom.us/j/7987833794",
  "역사": "https://us04web.zoom.us/j/3955689232?pwd=eUNCRXoxcDgxKzdhZkJZdzdQTjFmdz09",
  "상경": "https://zoom.us/j/3154650453",
  "컴그": "https://zoom.us/j/7987737883",
  "국어(김)": "https://us02web.zoom.us/j/8134411742?pwd=2P5EGorAeZ3uZTEN4UsZTO6utKTGGQ"
};
const schedule = {
  "1-1": {
    "Mon": ['사회', '음악', '영어(공)', '역사', '컴그', '컴그', '수학(이)'],
    "Tue": ['상경', '사회', '국어(김)', '과학', '체육', 'CA', 'CA'],
    "Wed": ['영어(공)', '상경', '음악', '역사', '과학', '수학(이)', ''],
    "Thu": ['영어(공)', '상경', '음악', '역사', '과학', '국어(성)', 'HR'],
    "Fri": ['수학(이)', '영어(공)', '역사', '과학', '국어(성)', '음악', '진로'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "1-2": {
    "Mon": ['역사', '사회', '수학(류)', '영어(공)', '미술', '미술', '상경'],
    "Tue": ['국어(성)', '컴그', '컴그', '사회', '과학', 'CA', 'CA'],
    "Wed": ['과학', '국어(성)', '체육', '상경', '컴그', '컴그', ''],
    "Thu": ['사회', '상경', '영어(공)', '역사', '수학(류)', '미술', 'HR'],
    "Fri": ['수학(류)', '과학', '국어(김)', '진로', '영어(공)', '체육', '역사'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "1-3": {
    "Mon": ['영어(공)', '자료구조 A', '자료구조 A', '음악', '자료구조 B', '자료구조 B', '수학(류)'],
    "Tue": ['수학(류)', '과학', '체육', '음악', '컴일', '진로', 'CA'],
    "Wed": ['자료구조 A', '영어(공)', '진로', '국어(성)', '사회', '수학(류)'],
    "Thu": ['컴일', '과학', '사회', '국어(성)', '음악', '체육', 'HR'],
    "Fri": ['국어(성)', '사회', '자료구조 B', '컴일', '자료구조 A', '과학', '영어(공)'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "1-4": {
    "Mon": ['진로', '자료구조 B', '음악', '국어(성)', '사회', '수학(류)', '과학'],
    "Tue": ['자료구조 B', '자료구조 B', '영어(공)', '컴일', '국어(성)', 'CA', 'CA'],
    "Wed": ['수학(류)', '체육', '자료구조 A', '사회', '영어(공)', '과학', ''],
    "Thu": ['음악', '국어(성)', '과학', '컴일', '자료구조 A', '자료구조 A', 'HR'],
    "Fri": ['사회', '컴일', '음악', '영어(공)', '체육', '수학(류)', '자료구조 A'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "1-5": {
    "Mon": ['자료구조 B', '과학', '사회', '수학(이)', '자료구조 A', '체육', '국어(성)'],
    "Tue": ['컴일', '미술', '미술', '영어(공)', '수학(이)', 'CA', 'CA'],
    "Wed": ['사회', '컴일', '과학', '미술', '체육', '국어(성)', ''],
    "Thu": ['진로', '자료구조 A', '자료구조 B', '자료구조 B', '과학', '영어(공)', 'HR'],
    "Fri": ['자료구조 A', '자료구조 A', '수학(이)', '사회', '컴일', '국어(김)', '영어(전)'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "1-6": {
    "Mon": ['수학', '미술', '국어(성)', '과학', '체육', '영어(공)', '자료구조 A'],
    "Tue": ['사회', '자료구조 A', '자료구조 A', '국어(성)', '진로', 'CA', 'CA'],
    "Wed": ['자료구조 B', '자료구조 B', '사회', '자료구조 A', '컴일', '체육', ''],
    "Thu": ['영어(공)', '컴일', '미술', '미술', '수학(이)', '과학', 'HR'],
    "Fri": ['과학', '수학(이)', '국어(성)', '자료구조 B', '사회', '영어(전)', '컴일'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  }
};
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let className = '';
let todaySchedule = [];
let recentName = '';

document.addEventListener("DOMContentLoaded", () => {
  initialize();
});

const initialize = () => {
  if (localStorage.getItem('class') == null) {
    document.getElementsByTagName('h2')[0].innerHTML = '반을 선택해주세요.';
    return;
  }
  className = localStorage.getItem('class');
  let elements = document.getElementsByTagName('option');
  if (elements[0].value == '선택해주세요') {
    classSelector.remove(0);
  }
  for (let i = 0; i < elements.length; i++) {
    if (className == elements[i].value) {
      classSelector.selectedIndex = i;
    }
  }
  loop();
};

const loop = () => {
  setTimeout(loop, 1000);
  if (className == "1-4") {
    links["CA"] = "https://bit.ly/2Qf4l33";
    links["HR"] = "https://bit.ly/2Qf4l33";
  } else if (className == "1-3") {
    links["CA"] = links["자료구조 A"];
    links["HR"] = links["자료구조 A"];
  } else if (className == "1-1") {
    links["CA"] = links["영어(공)"];
    links["HR"] = links["영어(공)"];
  } else if (className == "1-2") {
    links["CA"] = links["수학(류)"];
    links["HR"] = links["수학(류)"];
  } else if (className == "1-5") {
    links["CA"] = links["음악"];
    links["HR"] = links["음악"];
  } else if (className == "1-6") {
    links["CA"] = links["사회"];
    links["HR"] = links["사회"];
  }
  const d = new Date();
  todaySchedule = schedule[className][days[d.getDay()]];
  if (todaySchedule[0] == 'No Schedule') {
    noSchedule();
    return;
  }
  let elements = document.getElementsByClassName('schedule');
  for (let i = 0; i < 7; i++) {
    elements[i].textContent = todaySchedule[i];
    elements[i].classList.remove('selected');
  }
  let hour = d.getHours();
  let min = d.getMinutes();
  if (hour < 8) {
    document.getElementsByTagName('h2')[0].innerHTML = '아직 리잠 잘 시간이야..';
  } else if (hour <= 8 && min < 45) {
    updateH2('조례', links.HR, true);
    redirect(links.HR, '조례');
  } else if (hour == 8 && min < 58) {
    updateH2('조례', links.HR, false);
    redirect(links.HR, '조례');
  } else if (hour == 8) {
    elements[0].classList.add('selected');
    updateH2(todaySchedule[0], links[todaySchedule[0]], true);
    redirect(links[todaySchedule[0]], todaySchedule[0]);
  } else if (hour <= 9 && min < 50) {
    elements[0].classList.add('selected');
    updateH2(todaySchedule[0], links[todaySchedule[0]], false);
    redirect(links[todaySchedule[0]], todaySchedule[0]);
  } else if (hour == 9) {
    elements[1].classList.add('selected');
    updateH2(todaySchedule[1], links[todaySchedule[1]], true);
    redirect(links[todaySchedule[1]], todaySchedule[1]);
  } else if (hour <= 10 && min < 50) {
    elements[1].classList.add('selected');
    updateH2(todaySchedule[1], links[todaySchedule[1]], false);
    redirect(links[todaySchedule[1]], todaySchedule[1]);
  } else if (hour == 10) {
    elements[2].classList.add('selected');
    updateH2(todaySchedule[2], links[todaySchedule[2]], true);
    redirect(links[todaySchedule[2]], todaySchedule[2]);
  } else if (hour <= 11 && min < 50) {
    elements[2].classList.add('selected');
    updateH2(todaySchedule[2], links[todaySchedule[2]], false);
    redirect(links[todaySchedule[2]], todaySchedule[2]);
  } else if (hour == 11) {
    elements[3].classList.add('selected');
    updateH2(todaySchedule[3], links[todaySchedule[3]], true);
    redirect(links[todaySchedule[3]], todaySchedule[3]);
  } else if (hour <= 12 && min < 50) {
    elements[3].classList.add('selected');
    updateH2(todaySchedule[3], links[todaySchedule[3]], false);
    redirect(links[todaySchedule[3]], todaySchedule[3]);
  } else if (hour == 12 || (hour == 13 && min < 40)) {
    document.getElementsByTagName('h2')[0].innerHTML = '점심시간 !';
  } else if (hour == 13 && min < 50) {
    elements[4].classList.add('selected');
    updateH2(todaySchedule[4], links[todaySchedule[4]], true);
    redirect(links[todaySchedule[4]], todaySchedule[4]);
  } else if (hour == 13 || (hour <= 14 && min < 40)) {
    elements[4].classList.add('selected');
    updateH2(todaySchedule[4], links[todaySchedule[4]], false);
    redirect(links[todaySchedule[4]], todaySchedule[4]);
  } else if (hour == 14 && min < 50) {
    elements[5].classList.add('selected');
    updateH2(todaySchedule[5], links[todaySchedule[5]], true);
    redirect(links[todaySchedule[5]], todaySchedule[5]);
  } else if (hour == 14 || (hour <= 15 && min < 40)) {
    elements[5].classList.add('selected');
    updateH2(todaySchedule[5], links[todaySchedule[5]], false);
    redirect(links[todaySchedule[5]], todaySchedule[5]);
  } else if (hour == 15 && min < 50) {
    elements[6].classList.add('selected');
    updateH2(todaySchedule[6], links[todaySchedule[6]], true);
    redirect(links[todaySchedule[6]], todaySchedule[6]);
  } else if (hour == 15 || (hour <= 16 && min < 40)) {
    elements[6].classList.add('selected');
    updateH2(todaySchedule[6], links[todaySchedule[6]], false);
    redirect(links[todaySchedule[6]], todaySchedule[6]);
  } else if (hour == 15 && min < 45) {
    updateH2('종례', links.HR, true);
    redirect(links.HR, '종례');
  } else if (hour == 15) {
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
  if (recentName == name) return;
  let a = document.createElement("a");
  a.href = link;
  if (link.indexOf("zoommtg") == -1) {
    a.target = "_blank";
  }
  a.click();
  recentName = name;
}
