const links = {
  "진로(김)": "8448373394&pwd=dimigo",
  "자료구조 B": "4679526373&pwd=py2020",
  "음악": "https://bit.ly/34rBBfM",
  "국어(성)": "3300965795&pwd=dimigo",
  "사회": "https://bit.ly/34rBBfM",
  "수학(류)": "6838770867&pwd=dimigo",
  "과학": "7178015132&pwd=dimigo",
  "영어(공)": "4700404365&pwd=dimigo",
  "영어(전)": "7385237525&pwd=dimigo",
  "컴일": "6971690768&pwd=dimigo",
  "CA": "",
  "체육": "7760965125&pwd=dimigo",
  "자료구조 A": "4332940405&pwd=dimigo",
  "HR": "",
  "미술": "8448373394&pwd=dimigo",
  "수학(이)": "7987833794&pwd=dimigo",
  "역사": "3955689232&pwd=dimigo",
  "상업경제": "3154650453&pwd=dimigo",
  "컴그": "7987737883&pwd=dimigo",
  "국어(김)": "8134411742&pwd=dimigo",
  "문학": "8134411742&pwd=dimigo",
  "영어(이)": "7126847915&pwd=dimigo",
  "공수(이)": "7987833794&pwd=dimigo",
  "진로(박)": "3955689232&pwd=dimigo",
  "화학1": "4361766687&pwd=dimigo",
  "중국어": "7722593481&pwd=dimigo",
  "운건": "7864104388&pwd=dimigo",
  "성직": "77234554774&pwd=dimigo",
  "응프": "6863031340&pwd=dimigo",
  "응화": "3650046422&pwd=dimigo",
  "자구": "3650046422&pwd=dimigo",
  "정통": "3335559622&pwd=dimigo",
  "수학2": "7965443330&pwd=dimigo"
};

const schedule = {
  "1-1": {
    "Mon": ['사회', '음악', '영어(공)', '역사', '컴그', '컴그', '수학(이)'],
    "Tue": ['상업경제', '사회', '국어(김)', '과학', '체육', 'CA', 'CA'],
    "Wed": ['영어(공)', '상업경제', '음악', '역사', '과학', '수학(이)', ''],
    "Thu": ['영어(공)', '상업경제', '음악', '역사', '과학', '국어(성)', 'HR'],
    "Fri": ['수학(이)', '영어(공)', '역사', '과학', '국어(성)', '음악', '진로(김)'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "1-2": {
    "Mon": ['역사', '사회', '수학(류)', '영어(공)', '미술', '미술', '상업경제'],
    "Tue": ['국어(성)', '컴그', '컴그', '사회', '과학', 'CA', 'CA'],
    "Wed": ['과학', '국어(성)', '체육', '상업경제', '컴그', '컴그', ''],
    "Thu": ['사회', '상업경제', '영어(공)', '역사', '수학(류)', '미술', 'HR'],
    "Fri": ['수학(류)', '과학', '국어(김)', '진로(김)', '영어(공)', '체육', '역사'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "1-3": {
    "Mon": ['영어(공)', '자료구조 A', '자료구조 A', '음악', '자료구조 B', '자료구조 B', '수학(류)'],
    "Tue": ['수학(류)', '과학', '체육', '음악', '컴일', '진로(김)', 'CA'],
    "Wed": ['자료구조 A', '영어(공)', '진로(김)', '국어(성)', '사회', '수학(류)', ''],
    "Thu": ['컴일', '과학', '사회', '국어(성)', '음악', '체육', 'HR'],
    "Fri": ['국어(성)', '사회', '자료구조 B', '컴일', '자료구조 A', '과학', '영어(공)'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "1-4": {
    "Mon": ['진로(김)', '자료구조 B', '음악', '국어(성)', '사회', '수학(류)', '과학'],
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
    "Thu": ['진로(김)', '자료구조 A', '자료구조 B', '자료구조 B', '과학', '영어(공)', 'HR'],
    "Fri": ['자료구조 A', '자료구조 A', '수학(이)', '사회', '컴일', '국어(성)', '영어(전)'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "1-6": {
    "Mon": ['수학', '미술', '국어(성)', '과학', '체육', '영어(공)', '자료구조 A'],
    "Tue": ['사회', '자료구조 A', '자료구조 A', '국어(성)', '진로(김)', 'CA', 'CA'],
    "Wed": ['자료구조 B', '자료구조 B', '사회', '자료구조 A', '컴일', '체육', ''],
    "Thu": ['영어(공)', '컴일', '미술', '미술', '수학(이)', '과학', 'HR'],
    "Fri": ['과학', '수학(이)', '국어(성)', '자료구조 B', '사회', '영어(전)', '컴일'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "2-3": {
    "Mon": ['중국어', '성직', '응화', '영어(이)', '화학1', '정통', '수학2'],
    "Tue": ['공수(이)', '운건', '수학2', '응화', '정통', '진로(박)', 'CA'],
    "Wed": ['응프', '응프', '진로(박)', '공수(이)', '자구', '화학1', ''],
    "Thu": ['응프', '응프', '화학1', '문학', '수학2', '공수(이)', 'HR'],
    "Fri": ['영어(이)', '화학1', '자구', '문학', '중국어', '성직', '운건'],
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

const isMobile = () => {
	let UserAgent = navigator.userAgent;
	if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
		return true;
	} else {
		return false;
	}
};

const initialize = () => {
  if(localStorage.getItem('class') == null) {
    document.getElementsByTagName('h2')[0].innerHTML = '반을 선택해주세요.';
    return;
  }
  className = localStorage.getItem('class');
  let elements = document.getElementsByTagName('option');
  if(elements[0].value == '선택해주세요') {
    classSelector.remove(0);
  }
  for (let i = 0; i < elements.length; i++) {
    if(className == elements[i].value) {
      classSelector.selectedIndex = i;
    }
  }
  loop();
};

const loop = () => {
  setTimeout(loop, 1000);
  if(className == "1-4") {
    links["CA"] = links["화학1"];
    links["HR"] = links["화학1"];
  } else if(className == "1-3") {
    links["CA"] = links["자료구조 A"];
    links["HR"] = links["자료구조 A"];
  } else if(className == "1-1") {
    links["CA"] = links["영어(공)"];
    links["HR"] = links["영어(공)"];
  } else if(className == "1-2") {
    links["CA"] = links["수학(류)"];
    links["HR"] = links["수학(류)"];
  } else if(className == "1-5") {
    links["CA"] = links["음악"];
    links["HR"] = links["음악"];
  } else if(className == "1-6") {
    links["CA"] = links["사회"];
    links["HR"] = links["사회"];
  } else if(className == "2-3") {
    links["CA"] = links["공수(이)"];
    links["HR"] = links["공수(이)"];
  }
  const d = new Date();
  todaySchedule = schedule[className][days[d.getDay()]];
  if(todaySchedule[0] == 'No Schedule') {
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
    if(min >= 55) {
      redirect(links[todaySchedule[1]], todaySchedule[1]);
    }
  } else if(hour <= 10 && min < 50) {
    elements[1].classList.add('selected');
    updateH2(todaySchedule[1], links[todaySchedule[1]], false);
    redirect(links[todaySchedule[1]], todaySchedule[1]);
  } else if(hour == 10) {
    elements[2].classList.add('selected');
    updateH2(todaySchedule[2], links[todaySchedule[2]], true);
    if(min >= 55) {
      redirect(links[todaySchedule[2]], todaySchedule[2]);
    }
  } else if(hour <= 11 && min < 50) {
    elements[2].classList.add('selected');
    updateH2(todaySchedule[2], links[todaySchedule[2]], false);
    redirect(links[todaySchedule[2]], todaySchedule[2]);
  } else if(hour == 11) {
    elements[3].classList.add('selected');
    updateH2(todaySchedule[3], links[todaySchedule[3]], true);
    if(min >= 55) {
      redirect(links[todaySchedule[3]], todaySchedule[3]);
    }
  } else if(hour <= 12 && min < 50) {
    elements[3].classList.add('selected');
    updateH2(todaySchedule[3], links[todaySchedule[3]], false);
    redirect(links[todaySchedule[3]], todaySchedule[3]);
  } else if(hour == 12 || (hour == 13 && min < 40)) {
    document.getElementsByTagName('h2')[0].innerHTML = '점심시간 !';
  } else if(hour == 13 && min < 50) {
    elements[4].classList.add('selected');
    updateH2(todaySchedule[4], links[todaySchedule[4]], true);
    if(min >= 45) {
      redirect(links[todaySchedule[4]], todaySchedule[4]);
    }
  } else if(hour == 13 || (hour <= 14 && min < 40)) {
    elements[4].classList.add('selected');
    updateH2(todaySchedule[4], links[todaySchedule[4]], false);
    redirect(links[todaySchedule[4]], todaySchedule[4]);
  } else if(hour == 14 && min < 50) {
    elements[5].classList.add('selected');
    updateH2(todaySchedule[5], links[todaySchedule[5]], true);
    if(min >= 45) {
      redirect(links[todaySchedule[5]], todaySchedule[5]);
    }
  } else if(hour == 14 || (hour <= 15 && min < 40)) {
    elements[5].classList.add('selected');
    updateH2(todaySchedule[5], links[todaySchedule[5]], false);
    redirect(links[todaySchedule[5]], todaySchedule[5]);
  } else if(hour == 15 && min < 50) {
    if(todaySchedule[6] != '') {
      elements[6].classList.add('selected');
      updateH2(todaySchedule[6], links[todaySchedule[6]], true);
      if(min >= 45) {
        redirect(links[todaySchedule[6]], todaySchedule[6]);
      }
    } else {
      updateH2('종례', links.HR, true);
    }
  } else if(hour == 15 || (hour <= 16 && min < 40)) {
    if(todaySchedule[6] != '') {
      elements[6].classList.add('selected');
      updateH2(todaySchedule[6], links[todaySchedule[6]], false);
      redirect(links[todaySchedule[6]], todaySchedule[6]);
    } else {
      updateH2('종례', links.HR, true);
    }
  } else if(hour == 16 && min < 45) {
    updateH2('종례', links.HR, true);
    redirect(links.HR, '종례');
  } else if(hour == 16) {
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
  if(classLink.indexOf("pwd") != -1) {
    classLink = `zoommtg://zoom.us/join?action=join&confno=${classLink}`;
  }
  document.getElementsByTagName('h2')[0].innerHTML = `${isReady ? '다음 수업 준비' : '지금 수업중'} : <span>${className}</span>, <a href="${classLink}" target="_blank">여기</a>를 눌러 수동접속`;
};

const noSchedule = () => {
  document.getElementsByTagName('h2')[0].innerHTML = '오늘은 수업이 없는 날입니다!';
};

const redirect = (link, name) => {
  if(recentName == name) return;
  let a = document.createElement("a");
  if(isMobile()) {
    a.href = `https://zoom.us/j/${link}`.replace('&', '?');
  } else {
    a.href = `zoommtg://zoom.us/join?action=join&confno=${link}`;
  }
  if(link.indexOf("pwd") == -1) {
    a.target = "_blank";
    a.href = link;
  }
  a.click();
  recentName = name;
}
