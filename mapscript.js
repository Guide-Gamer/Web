import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDL5xbGLKIlkPJpgITEg3cPQx1XbL1Ns7w",
  authDomain: "website-828cd.firebaseapp.com",
  projectId: "website-828cd",
  storageBucket: "website-828cd.appspot.com",
  messagingSenderId: "6916641148",
  appId: "1:6916641148:web:f1eea6ba80cc3f363b94f9",
  measurementId: "G-CPM80GFKLW",
  databaseURL: "https://website-828cd-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

const maps = [
   {
    title: "SNIPER 2v2",
    image: "sniper.jpg",
    codes: [
      { text: "INDIA", code: "#FREEFIREE5009F262EEAF8689A0395793BBBBEB73512" },
    
    ],
    video: "https://youtu.be/H0Txe-oRwlA?si=E1ldykASTKGSvaUF",
    keywords: "sniper 2v2 password 2v2 Sniper india 4 player",
    dateAdded: new Date('2025-10-22')
  },
    {
    title: "SNOWLAND PARKOUR",
    image: "Parkour.jpg",
    codes: [
      { text: "INDIA", code: "#FREEFIRED7969AEF0D15304B81EACE94298B30573512" },
    
    ],
    video: "https://youtu.be/3WWUR6XCAS0?si=ZtlWOh4HVsNP87rs",
    keywords: "creative popular games ball game password snowland parkour v2 india 4 player",
    dateAdded: new Date('2025-10-05')
  },
  {
    title: "OBJECT IDS VIEWER",
    image: "object.jpg",
    codes: [
      { text: "INDIA", code: "#FREEFIRE93AB6B851C28F2A43DB33629FA37F73D3512" },
    
    ],
    video: "https://youtu.be/b9dqSDkV2ew?si=g1sm9yinagGFP18k",
    keywords: "object code Object ids all objects code",
    dateAdded: new Date('2025-08-08')
  },
  
  {
    title: "HONEY DROP",
    image: "drop.png",
    codes: [
      { text: "INDIA MAPCODE", code: "#FREEFIRE89C214DE11CD1A15E0EA7A8E2EC6CDC63512" },
    ],
    video: "",
    keywords: "honey drop colour drop play with friends india 4 player",
    dateAdded: new Date('2025-08-08')
  },
  {
    title: "ZOMBIE HUNT",
    image: "zombie.jpg",
    codes: [
      { text: "INDIA MAPCODE", code: "#FREEFIREBDEC1B28C4111091D5361AE23A5464053512" },
    ],
    video: "",
    keywords: "zombie hunt monster story india 4 player",
    dateAdded: new Date('2025-08-08')
  },
  {
    title: "BEASTMODE SOLARA",
    image: "solara.png",
    codes: [
      { text: "INDIA 1Player", code: "#FREEFIRE3C2FE65D7724560EF650559B00DE7F091028" },
      { text: "OTHERS 1Player", code: "COMMING SOON..." },
      { text: "INDIA 2Player", code: "#FREEFIREB15900455C70905E40E8BE4647DFA5CC1028" },
      { text: "OTHERS 2Player", code: "#FREEFIRE8BF16FB45BF8E4ED5242E2B47FB23C046248" },
      { text: "INDIA 4Player", code: "#FREEFIRE379FB1E478E530EEA27A1A99C716ED391028" },
      { text: "OTHERS 4Player", code: "#FREEFIRE8FD02344A822BDEDB16F5A7811528CA56248" }
    ],
    video: "https://youtu.be/4k4agdFc_9E?si=kpUNl8AoWOogamQI",
    keywords: "solara beastmode india 1 Player 2 Player 4 Player",
    dateAdded: new Date('2025-07-01')
  },
  {
    title: "AQUA LEGENDS",
    image: "island.jpg",
    codes: [
      { text: "INDIA 2PLAYER", code: "#FREEFIRE9BB5ABACE868981999719350FF283B383512" },
      { text: "INDIA 4PLAYER", code: "#FREEFIRE448678A2A0C4BCF4F98F436F8C3722A23512" },
    ],
    video: "https://youtu.be/cCnnQUMIsco",
    keywords: "Water island contest water kingdom",
    dateAdded: new Date('2025-06-25')
  },
  {
    title: "BEASTMODE BERMUDA",
    image: "newbr.jpeg",
    codes: [
      { text: "INDIA 1Player", code: "#FREEFIRE2B0AB26301D114904489B3ADE33A4BEC1028" },
      { text: "OTHERS 1Player", code: "#FREEFIRE626CA7F5425ED335266595C1F22885446248" },
      { text: "INDIA 2Player", code: "#FREEFIREEEE65B538370661C724771B5EA8E3CCE1028" },
      { text: "OTHERS 2Player", code: "#FREEFIRE8527E22B990AB8C80859F16331B4F76E6248" },
      { text: "INDIA 4Player", code: "#FREEFIRE35B2644BCC485CC685F41304C2E980F21028" },
      { text: "OTHERS 4Player", code: "#FREEFIRED4C0D3ED65E6B5E9D476DBABFC2B78936248" },
      { text: "INDIA 8Player", code: "#FREEFIREFF8765C68BB5E9181574043A7B58BEC91028" }
    ],
    video: "https://youtu.be/-EdbPnAFhW8",
    keywords: "beastmode bermuda all-in-one 1 Player 2 Player 4 Player 8 player India Brazil ",
    dateAdded: new Date('2025-06-20')
  },
  {
    title: "BEASTMODE KALAHARI",
    image: "https://i.ibb.co/C3MGyBP2/Picsart-25-03-08-17-58-48-320.jpg",
    codes: [
      { text: "INDIA 1Player", code: "#FREEFIREBF8C9D90B2DC0D73EF2C10506069C8B85293" },
      { text: "OTHERS 1Player", code: "#FREEFIRE444FE87CA69578E748BAEFC6C07949081956" },
      { text: "INDIA 2Player", code: "#FREEFIRE2182723F7ACD0F452B0923DAADA431BD5293" },
      { text: "OTHERS 2Player", code: "#FREEFIRECE8FB9DA86000F6FF76296206BA14F4C1956" },
      { text: "INDIA 4Player", code: "#FREEFIRE8B075000C1FBF186EDC8EC3B5A00BF485293" },
      { text: "OTHERS 4Player", code: "#FREEFIREF3B0C555D621B909F030D4FD26D849551956" }
    ],
    video: "https://youtu.be/9VuPwtDSVho",
    keywords: "kalahari beastmode 1 Player 2 Player 4 Player India ",
    dateAdded: new Date('2025-06-15')
  },
  {
    title: "BEASTMODE NEXTERRA",
    image: "https://i.ibb.co/qMmwknsv/Picsart-25-02-28-09-54-29-910.jpg",
    codes: [
      { text: "INDIA 2Player", code: "#FREEFIREDED528052C6F0098DD421F039E680F3E5293" },
      { text: "OTHERS 2Player", code: "#FREEFIREE77D52A20E8C47B0C3E758CAC22CE8371956" },
      { text: "INDIA 4Player", code: "#FREEFIRE4FB98548E27F99857A197F82DFE5D5D15293" },
      { text: "OTHERS 4Player", code: "#FREEFIRE281766F6302BFB71E6E01590CC7567AB1956" }
    ],
    video: "https://youtu.be/atwX3no_As8",
    keywords: "nexterra beastmode 1 Player 2 Player 4 Player India ",
    dateAdded: new Date('2025-06-10')
  },
  {
    title: "Bundles Evoguns 1v1",
    image: "https://i.ibb.co/2WYNnJD/Picsart-25-01-02-12-28-04-161.jpg",
    codes: [
      { text: "INDIA", code: "##FREEFIRE122366B7F36980CE2EBCFOEEA31DB8FD1576" },
      { text: "OTHER SERVER", code: "#FREEFIREE98FB4A28809F8994477DA51D3485B926248" }
    ],
    video: "https://youtu.be/0TDL41Livs8",
    keywords: "evogun bundle 1v1 india other outfit 1 v 1 1vs1 1 vs 1",
    dateAdded: new Date('2025-06-05')
  },
  {
    title: "THE COLOUR GAME",
    image: "holi.jpg",
    codes: [
      { text: "INDIA 4PLAYER", code: "#FREEFIREE5009F262EEAF8689A0395793BBBBEB73512" },
    ],
    video: "https://youtu.be/YbpWtLzKmeI",
    keywords: "Holi craftland Contest The colour game ",
    dateAdded: new Date('2025-06-01')
  }
];

const originalMaps = [...maps];
let mapsWithLikes = [];
const manualSuggestions = ["BEASTMODE BERMUDA", "BEASTMODE KALAHARI","BEASTMODE NEXTERRA","BEASTMODE SOLARA", "AQUA LEGENDS", "1 PLAYER", "2 PLAYER","4 PLAYER","8 PLAYER","INDIA","OTHER SERVERS", "EVOGUNS AND BUNDLE 1V1","HOLI", "THE COLOUR GAME","ZOMBIE HUNT","HONEY DROP","COLOUR DROP","OBJECT ID FINDER","SNOWLAND PARKOUR"];
let isSuggestionsEnabled = true;

function renderMaps(mapsToRender) {
  const mapContainer = document.getElementById("map");
  mapContainer.innerHTML = "";

  if (mapsToRender.length === 0) {
    mapContainer.innerHTML = "<center><h2>No maps found.</h2></center>";
    return;
  }

  mapsToRender.forEach((map, index) => {
    const id = map.title.replaceAll(' ', '');
    const div = document.createElement("div");
    div.className = "brdr fade-in";
    div.style.animationDelay = `${index * 0.1}s`;

    div.setAttribute("data-keywords", map.keywords.toLowerCase());

    let buttons = map.codes.map((btn, i) => {
      const btnId = `map${index}_btn${i}`;
      return `<button class="leftbtn" id="${btnId}" onclick="copyMapCode('${btn.code}', '${btnId}')">${btn.text}</button>`;
    }).join(" ");

    div.innerHTML = `
      <strong>${map.title}</strong><br>
      <img src="${map.image}" alt="${map.title}"><br><br>
      <font style="color:black;">↓ COPY MAPCODES 📝 ↓</font><br><br>
      ${buttons}<br><br>
      <a href="${map.video}" target="_blank">Click here to watch map review video</a><br><br>
      <div class="line"></div>
      <button class="rightbtn" onclick="likeMap('${id}')" id="like-${id}">
        <i class="fa heart-icon" id="icon-${id}"></i> <span id="count-${id}">${map.likes || 0}</span>
      </button>
    `;
    mapContainer.appendChild(div);
  });
}

function likeMap(id) {
  const likeKey = "liked_" + id;
  const likeButton = document.getElementById("like-" + id);
  
  if (localStorage.getItem(likeKey)) {
    let existingMsg = likeButton.querySelector('.already-liked-msg');
    if (existingMsg) {
      clearTimeout(existingMsg.timeoutId);
      existingMsg.remove();
    }

    const msg = document.createElement('span');
    msg.className = 'already-liked-msg';
    msg.innerText = 'Already Liked!';
    likeButton.appendChild(msg);

    msg.timeoutId = setTimeout(() => {
      msg.style.opacity = '0';
      msg.addEventListener('transitionend', () => {
        msg.remove();
      });
    }, 2000);

    return;
  }

  const likeRef = ref(db, "likes/" + id);
  onValue(likeRef, (snapshot) => {
    const currentLikes = snapshot.val() || 0;
    const updatedLikes = currentLikes + 1;
    set(likeRef, updatedLikes).then(() => {
      document.getElementById("count-" + id).innerText = updatedLikes;
      const icon = document.getElementById("icon-" + id);
      icon.className = "fa fa-heart heart-icon";
      icon.style.color = "red";
      localStorage.setItem(likeKey, "true");
    });
  }, { onlyOnce: true });
}

// **IMPROVED:** This function now fetches all likes in a single request.
function fetchLikesAndInitialize() {
  const likesRef = ref(db, "likes");
  onValue(likesRef, snapshot => {
    const allLikes = snapshot.val() || {};
    mapsWithLikes = maps.map(map => {
      const id = map.title.replaceAll(' ', '');
      return {
        ...map,
        likes: allLikes[id] || 0
      };
    });
    
    sortMaps('likes');
    updateIcons();
    
    document.querySelector('.loader-wrapper').style.display = 'none';

  }, { onlyOnce: true });
}

window.sortMaps = function (sortBy) {
  let sortedMaps = [...mapsWithLikes];

  if (sortBy === 'likes') {
    sortedMaps.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  } else if (sortBy === 'recent') {
    sortedMaps.sort((a, b) => b.dateAdded.getTime() - a.dateAdded.getTime());
  } else if (sortBy === 'oldest') {
    sortedMaps.sort((a, b) => a.dateAdded.getTime() - b.dateAdded.getTime());
  }

  const buttons = document.querySelectorAll('.sort-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  const activeButton = document.querySelector(`.sort-btn[onclick="sortMaps('${sortBy}')"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }

  renderMaps(sortedMaps);
  updateIcons();
};

function updateIcons() {
  mapsWithLikes.forEach(map => {
    const id = map.title.replaceAll(' ', '');
    const icon = document.getElementById("icon-" + id);
    if (!icon) return;
    if (localStorage.getItem("liked_" + id)) {
      icon.className = "fa fa-heart heart-icon";
      icon.style.color = "red";
    } else {
      icon.className = "fa fa-heart-o heart-icon";
      icon.style.color = "black";
    }
  });
}

window.copyMapCode = function (code, buttonId) {
  const button = document.getElementById(buttonId);
  const originalText = button.innerHTML;
  navigator.clipboard.writeText(code).then(() => {
    if (navigator.vibrate) navigator.vibrate(100);
    button.innerHTML = `<strong>Copied <font color='lime'>✓</font></strong>`;
    button.style.backgroundColor = "#28a745";
    button.style.color = "white";
    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.backgroundColor = "#ff2600";
      button.style.color = "white";
    }, 4000);
  });
}

function performFiltering() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const allMapItems = document.querySelectorAll("#map .brdr");

  allMapItems.forEach(item => {
    const keywords = item.getAttribute("data-keywords");
    if (keywords.includes(input)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function showSuggestions() {
  if (!isSuggestionsEnabled) {
    document.getElementById("suggestions").style.display = "none";
    return;
  }
  
  const input = document.getElementById("searchInput").value.toLowerCase();
  const suggestionsBox = document.getElementById("suggestions");
  suggestionsBox.innerHTML = "";

  if (input.length > 0) {
    const matchedSuggestions = manualSuggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(input)
    );
    
    const limitedSuggestions = matchedSuggestions.slice(0, 4);

    if (limitedSuggestions.length > 0) {
      limitedSuggestions.forEach(suggestion => {
        const suggestionDiv = document.createElement("div");
        suggestionDiv.className = "suggestion-item";
        suggestionDiv.innerText = suggestion;
        suggestionDiv.onclick = () => {
          document.getElementById("searchInput").value = suggestion;
          performFiltering();
          suggestionsBox.style.display = "none";
        };
        suggestionsBox.appendChild(suggestionDiv);
      });
      suggestionsBox.style.display = "block";
    } else {
      suggestionsBox.style.display = "none";
    }
  } else {
    suggestionsBox.style.display = "none";
  }
}

window.toggleSuggestions = function() {
  isSuggestionsEnabled = !isSuggestionsEnabled;
  const toggleButton = document.getElementById('suggestionToggle');
  const suggestionsBox = document.getElementById('suggestions');
  if (isSuggestionsEnabled) {
    toggleButton.innerHTML = "Suggestions:<br><b>On</br>";
toggleButton.style.border = "2px solid yellow";
    if (document.getElementById('searchInput').value.length > 0) {
      showSuggestions();
    }
  } else {
    toggleButton.innerHTML = "Suggestions:<br><b>Off</b>";
    toggleButton.style.color = "white";
toggleButton.style.border= "none";
  }
}

window.likeMap = likeMap;

window.onload = () => {
  fetchLikesAndInitialize();
  
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('keyup', (event) => {
      performFiltering();
      showSuggestions();
  });
  
  document.addEventListener('click', (event) => {
    const searchWrapper = document.querySelector('.search-and-suggestions-wrapper');
    if (!searchWrapper.contains(event.target)) {
      document.getElementById('suggestions').style.display = 'none';
    }
  });
};
