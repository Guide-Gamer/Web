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
        video: "https://youtu.be/FUu9w8_9hAI",
        keywords: "solara beastmode india 1 Player 2 Player 4 Player"
      },
      {
        title: "AQUA LEGENDS",
        image: "island.jpg",
        codes: [
          { text: "INDIA 2PLAYER", code: "#FREEFIRE9BB5ABACE868981999719350FF283B383512" },
          { text: "INDIA 4PLAYER", code: "#FREEFIRE448678A2A0C4BCF4F98F436F8C3722A23512" },
        ],
        video: "https://youtu.be/cCnnQUMIsco",
        keywords: "Water island contest water kingdom"
      },
      
       {
        title: "BEASTMODE BERMUDA",
        image: "https://i.ibb.co/vvzWjf4B/Picsart-25-02-13-21-20-32-458.jpg",
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
        keywords: "beastmode bermuda all-in-one 1 Player 2 Player 4 Player 8 player India Brazil "
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
        keywords: "kalahari beastmode 1 Player 2 Player 4 Player India "
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
        keywords: "nexterra beastmode 1 Player 2 Player 4 Player India "
      },
      {
        title: "Bundles Evoguns 1v1",
        image: "https://i.ibb.co/2WYNnJD/Picsart-25-01-02-12-28-04-161.jpg",
        codes: [
          { text: "INDIA", code: "##FREEFIRE122366B7F36980CE2EBCFOEEA31DB8FD1576" },
          { text: "OTHER SERVER", code: "#FREEFIREE98FB4A28809F8994477DA51D3485B926248" }
        ],
        video: "https://youtu.be/0TDL41Livs8",
        keywords: "evogun bundle 1v1 india other outfit 1 v 1 1vs1 1 vs 1"
      },
       {
        title: "THE COLOUR GAME",
        image: "holi.jpg",
        codes: [
          { text: "INDIA 4PLAYER", code: "#FREEFIREE5009F262EEAF8689A0395793BBBBEB73512" },
        ],
        video: "https://youtu.be/YbpWtLzKmeI",
        keywords: "Holi craftland Contest The colour game "
      }
    
  ];

  function renderMaps() {
    const mapContainer = document.getElementById("map");
    mapContainer.innerHTML = "";

    maps.forEach((map, index) => {
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
    console.log("Like clicked for:", id);
    const likeKey = "liked_" + id;
    if (localStorage.getItem(likeKey)) {
      alert("You already liked this map!");
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

  function fetchLikesAndRenderSorted() {
    let fetches = maps.map(map => {
      return new Promise(resolve => {
        const id = map.title.replaceAll(' ', '');
        const likeRef = ref(db, "likes/" + id);
        onValue(likeRef, snapshot => {
          map.likes = snapshot.val() || 0;
          resolve();
        }, { onlyOnce: true });
      });
    });

    Promise.all(fetches).then(() => {
      maps.sort((a, b) => (b.likes || 0) - (a.likes || 0));
      renderMaps();
      updateIcons();
    });
  }

  function updateIcons() {
    maps.forEach(map => {
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
      button.innerHTML = `<strong>Copied <font color='lime'>&#x2713;</font></strong>`;
      button.style.backgroundColor = "#28a745";
      button.style.color = "white";
      setTimeout(() => {
        button.innerHTML = originalText;
        button.style.backgroundColor = "#ff2600";
        button.style.color = "white";
      }, 4000);
    });
  }

  window.likeMap = likeMap;

  window.onload = () => {
    fetchLikesAndRenderSorted();
  };
  window.filterMaps = function () {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const mapItems = document.querySelectorAll("#map .brdr");

  mapItems.forEach(item => {
    const keywords = item.getAttribute("data-keywords");
    if (keywords.includes(input)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};
