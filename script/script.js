document.addEventListener("DOMContentLoaded", function () {
  
  // navigation bar ----------------------------------------------->

  const hamburger = document.querySelector(".hamburger");
  const contentWrapper = document.querySelector(".content-wrapper");

  hamburger.onclick = function() {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
    contentWrapper.classList.toggle('active');
  }

  // cookies ------------------------------------------------------>

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }

  function checkCookie() {
    const cookieAccepted = getCookie("cookieAccepted");
    if (cookieAccepted === "true") {
        // Cookies accepted, do nothing
    } else {
        // Cookies not accepted, show cookie banner
        document.getElementById("cookieBanner").style.display = "block";
    }
  }

  function acceptCookies() {
    setCookie("cookieAccepted", "true", 365);
    document.getElementById("cookieBanner").style.display = "none";
  }

  function rejectCookies() {
    setCookie("cookieAccepted", "false", 365);
    document.getElementById("cookieBanner").style.display = "none";
  }

  checkCookie();

  // events ------------------------------------------------------->

  const eventList = document.getElementById("event-list");
  const events = [
      {
          title: "Summer Car Show",
          date: "Sep 16, 2023",
          description: "Join us for a car show featuring the latest car models and special discounts.",
          backgroundImage: "url('image/events/1.jpg')"
      },
      {
          title: "Off-Roading Adventure",
          date: "Sep 24, 2023",
          description: "Experience an exciting off-roading adventure with our exclusive rental SUVs.",
          backgroundImage: "url('image/events/2.jpg')"
      },
      {
          title: "Spring Road Trip Special",
          date: "October 20, 2023",
          description: "Plan your spring road trip with our special rental rates and packages.",
          backgroundImage: "url('image/events/4.jpg')"
      },
      {
          title: "Spring Road Trip Special",
          date: "Oct 20, 2023",
          description: "Plan your spring road trip with our special rental rates and packages.",
          backgroundImage: "url('image/events/3.jpg')"
      },
      {
          title: "Rock Paper Scissors Event",
          date: "Oct 20, 2023",
          description: "Plan your spring road trip with our special rental rates and packages.",
          backgroundImage: "url('image/game/1.jpg')" 

      }
  ];
  events.forEach(event => {
      const eventCard = document.createElement("div");
      eventCard.classList.add("event");
      eventCard.style.backgroundImage = event.backgroundImage;
      eventCard.style.backgroundPosition = "center"; 
      eventCard.style.backgroundSize = "cover"; 
      eventCard.style.backgroundRepeat = "no-repeat";  

      const title = document.createElement("h2");
      title.textContent = event.title;

      const date = document.createElement("p");
      date.textContent = "Date: " + event.date;

      const description = document.createElement("p");
      description.textContent = event.description;

      const subscribeButton = document.createElement("button");
      subscribeButton.textContent = "Join";
      subscribeButton.addEventListener("click", () => {
          alert("You have joined the event: " + event.title);
      });

      if (event.title === "Rock Paper Scissors Event") {
          subscribeButton.textContent = "Play Now";
          subscribeButton.addEventListener("click", () => {
              let newWindow = open('/game.html', 'Rock Paper Scissors', 'width=600,height=800');
              newWindow.focus();
          });
      }

      eventCard.appendChild(title);
      eventCard.appendChild(date);
      eventCard.appendChild(description);
      eventCard.appendChild(subscribeButton);
      
      eventList.appendChild(eventCard);
  });

  // upload file -------------------------------------------------->

  
});

