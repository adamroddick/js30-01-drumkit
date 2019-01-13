const state = [
    {
      key: "a",
      label: "(A)",
      label2: "Boom",
      audio: "audio/boom.wav"
    },
    {
      key: "s",
      label: "(S)",
      label2: "Clap",
      audio: "audio/clap.wav"
    },
    {
      key: "d",
      label: "(D)",
      label2: "HiHat",
      audio: "audio/hihat.wav"
    },
    {
      key: "f",
      label: "(F)",
      label2: "Kick",
      audio: "audio/kick.wav"
    },
    {
      key: "g",
      label: "(G)",
      label2: "OpenHat",
      audio: "audio/openhat.wav"
    },
    {
      key: "h",
      label: "(H)",
      label2: "Ride",
      audio: "audio/ride.wav"
    },
    {
      key: "j",
      label: "(J)",
      label2: "Snare",
      audio: "audio/snare.wav"
    },
    {
      key: "k",
      label: "(K)",
      label2: "Tink",
      audio: "audio/tink.wav"
    },
    {
      key: "l",
      label: "(L)",
      label2: "Tom",
      audio: "audio/tom.wav"
    }
  ];

  function buildApp() {
    for (i in state) {
      let root = document.getElementById("root");
      let template = `
    <div class="col">
        <button type="button" class="btn btn-sm btn-secondary" style="width:90px" onClick='playAudio(${i})' id=${
        state[i].key
      } data-key='${i}'>${state[i].label}<br>${state[i].label2}</button>
    </div>
    `;
      root.innerHTML += template;
    }
  }

  function playAudio(id) {
    let audioFile = state[id].audio;
    let audio = new Audio(audioFile);
    audio.play();
    console.log(audioFile);
  }

  window.addEventListener("keydown", function(event) {
    let element = document.querySelector(`#${event.key}`);

    if (element) {
      toggleKeyColour(element);
      let id = element.getAttribute("data-key");
      let audio = new Audio(state[id].audio);
      audio.play();
      setTimeout(function() {
        toggleKeyColour(element)
      }, 200);
    }
    
  });

  function toggleKeyColour(element) {
    element.classList.toggle("btn-success");
    element.classList.toggle("btn-secondary");
  }

  buildApp();