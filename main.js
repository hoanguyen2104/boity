const formSubmitBtn = document.querySelector(".form__submit");
const tryAgainBtn = document.querySelector(".tryAgain");
const modal = document.querySelector(".modal");
const name1 = document.getElementById("name-1");
const name2 = document.getElementById("name-2");
const nameModal1 = document.getElementById("modal__name-1");
const nameModal2 = document.getElementById("modal__name-2");
const percentModal = document.querySelector(".modal__heart-percent");
const heartBackground = document.querySelector(".modal__heart-background");

const App = {
  api: "https://7b99bcb9035e.ngrok-free.app",
  audio: [
    {
      id: 1,
      sound: document.getElementById("sound-1"),
      name: "Rót nước",
    },
    {
      id: 2,
      sound: document.getElementById("sound-2"),
      name: "Chúc mừng",
    },
  ],
  getSound: function (id) {
    if (typeof id == "number") {
      let sound;
      App.audio.forEach((e) => {
        if (e.id == id) {
          sound = e;
        }
      });
      if (sound) return sound;
      else {
        console.error("Không tồn tại sound đó");
      }
    }
  },
  result: [
    {
      percent: 10,
      paragraph: [
        "Có lẽ các bạn không có duyên với nhau rồi.",
        "Bạn hãy cố gắng đừng để mối quan hệ này trở thành hận thù!",
      ],
    },
    {
      percent: 45,
      paragraph: [
        "Bác sĩ tình yêu nghĩ rằng mối quan hệ này có thể đang dừng ở mức tình bạn thôi!",
        "Tuy nhiên cũng không phải là không có cơ hội cho mối quan hệ này. Nếu bạn biết quan tâm nhiều hơn, chăm sóc nhiều hơn, và gần gũi hơn nữa với người ấy.",
        "Nếu bạn mỉm cười nhiều hơn, chú ý hơn đến bản thân, học tập và làm việc chăm chỉ hơn nữa. Chà chà, được như vậy thì tỷ lệ mà mối quan hệ này có một cái kết buồn sẽ là rất nhỏ đấy!",
      ],
    },
    {
      percent: 45,
      paragraph: [
        "Bác sĩ tình yêu nghĩ rằng mối quan hệ này có thể đang dừng ở mức tình bạn thôi!",
        "Tuy nhiên cũng không phải là không có cơ hội cho mối quan hệ này. Nếu bạn biết quan tâm nhiều hơn, chăm sóc nhiều hơn, và gần gũi hơn nữa với người ấy.",
        "Nếu bạn mỉm cười nhiều hơn, chú ý hơn đến bản thân, học tập và làm việc chăm chỉ hơn nữa. Chà chà, được như vậy thì tỷ lệ mà mối quan hệ này có một cái kết buồn sẽ là rất nhỏ đấy!",
      ],
    },
    {
      percent: 45,
      paragraph: [
        "Bác sĩ tình yêu nghĩ rằng mối quan hệ này có thể đang dừng ở mức tình bạn thôi!",
        "Tuy nhiên cũng không phải là không có cơ hội cho mối quan hệ này. Nếu bạn biết quan tâm nhiều hơn, chăm sóc nhiều hơn, và gần gũi hơn nữa với người ấy.",
        "Nếu bạn mỉm cười nhiều hơn, chú ý hơn đến bản thân, học tập và làm việc chăm chỉ hơn nữa. Chà chà, được như vậy thì tỷ lệ mà mối quan hệ này có một cái kết buồn sẽ là rất nhỏ đấy!",
      ],
    },
    {
      percent: 45,
      paragraph: [
        "Bác sĩ tình yêu nghĩ rằng mối quan hệ này có thể đang dừng ở mức tình bạn thôi!",
        "Tuy nhiên cũng không phải là không có cơ hội cho mối quan hệ này. Nếu bạn biết quan tâm nhiều hơn, chăm sóc nhiều hơn, và gần gũi hơn nữa với người ấy.",
        "Nếu bạn mỉm cười nhiều hơn, chú ý hơn đến bản thân, học tập và làm việc chăm chỉ hơn nữa. Chà chà, được như vậy thì tỷ lệ mà mối quan hệ này có một cái kết buồn sẽ là rất nhỏ đấy!",
      ],
    },
    {
      percent: 45,
      paragraph: [
        "Bác sĩ tình yêu nghĩ rằng mối quan hệ này có thể đang dừng ở mức tình bạn thôi!",
        "Tuy nhiên cũng không phải là không có cơ hội cho mối quan hệ này. Nếu bạn biết quan tâm nhiều hơn, chăm sóc nhiều hơn, và gần gũi hơn nữa với người ấy.",
        "Nếu bạn mỉm cười nhiều hơn, chú ý hơn đến bản thân, học tập và làm việc chăm chỉ hơn nữa. Chà chà, được như vậy thì tỷ lệ mà mối quan hệ này có một cái kết buồn sẽ là rất nhỏ đấy!",
      ],
    },
    {
      percent: 45,
      paragraph: [
        "Bác sĩ tình yêu nghĩ rằng mối quan hệ này có thể đang dừng ở mức tình bạn thôi!",
        "Tuy nhiên cũng không phải là không có cơ hội cho mối quan hệ này. Nếu bạn biết quan tâm nhiều hơn, chăm sóc nhiều hơn, và gần gũi hơn nữa với người ấy.",
        "Nếu bạn mỉm cười nhiều hơn, chú ý hơn đến bản thân, học tập và làm việc chăm chỉ hơn nữa. Chà chà, được như vậy thì tỷ lệ mà mối quan hệ này có một cái kết buồn sẽ là rất nhỏ đấy!",
      ],
    },
    {
      percent: 60,
      paragraph: [
        "Bác sĩ tình yêu cho rằng, hai bạn sẽ có một kết quả tốt đẹp đấy.",
        "Nhưng, nếu bạn không thường xuyên quan tâm và chăm sóc đến người ấy, không làm cho người đó cười, nếu bạn không chăm sóc bản thân và phấn đấu hơn trong học tập và làm việc, thì nguy cơ có một kẻ thứ BA xuất hiện cũng không phải là ít đâu nhé!",
      ],
    },
    {
      percent: 60,
      paragraph: [
        "Bác sĩ tình yêu cho rằng, hai bạn sẽ có một kết quả tốt đẹp đấy.",
        "Nhưng, nếu bạn không thường xuyên quan tâm và chăm sóc đến người ấy, không làm cho người đó cười, nếu bạn không chăm sóc bản thân và phấn đấu hơn trong học tập và làm việc, thì nguy cơ có một kẻ thứ BA xuất hiện cũng không phải là ít đâu nhé!",
      ],
    },
    {
      percent: 60,
      paragraph: [
        "Bác sĩ tình yêu cho rằng, hai bạn sẽ có một kết quả tốt đẹp đấy.",
        "Nhưng, nếu bạn không thường xuyên quan tâm và chăm sóc đến người ấy, không làm cho người đó cười, nếu bạn không chăm sóc bản thân và phấn đấu hơn trong học tập và làm việc, thì nguy cơ có một kẻ thứ BA xuất hiện cũng không phải là ít đâu nhé!",
      ],
    },
    {
      percent: 90,
      paragraph: [
        "Bác sĩ tình yêu đã dùng kính lúp, rồi kính hiển vi soi để cố gắng tìm ra một vết nào đó trong mối quan hệ của hai bạn, nhưng hôm nay quả là một ngày đen đủi!",
        "Bác sĩ tình yêu cho rằng bạn đã phí công khi vào đây vì sớm hay muộn thì .. hai bạn sẽ có một kết cục đẹp như truyện cổ tích, đẹp như hoàng tử và công chúa. Giờ công việc của bạn thật đơn giản, hãy tích cực và thường xuyên duy trì sự quan tâm chăm sóc cho mối quan hệ đồng thời ngày càng hoàn thiện bản thân mình hơn nữa!",
      ],
    },
    {
      percent: 90,
      paragraph: [
        "Bác sĩ tình yêu đã dùng kính lúp, rồi kính hiển vi soi để cố gắng tìm ra một vết nào đó trong mối quan hệ của hai bạn, nhưng hôm nay quả là một ngày đen đủi!",
        "Bác sĩ tình yêu cho rằng bạn đã phí công khi vào đây vì sớm hay muộn thì .. hai bạn sẽ có một kết cục đẹp như truyện cổ tích, đẹp như hoàng tử và công chúa. Giờ công việc của bạn thật đơn giản, hãy tích cực và thường xuyên duy trì sự quan tâm chăm sóc cho mối quan hệ đồng thời ngày càng hoàn thiện bản thân mình hơn nữa!",
      ],
    },
    {
      percent: 90,
      paragraph: [
        "Bác sĩ tình yêu đã dùng kính lúp, rồi kính hiển vi soi để cố gắng tìm ra một vết nào đó trong mối quan hệ của hai bạn, nhưng hôm nay quả là một ngày đen đủi!",
        "Bác sĩ tình yêu cho rằng bạn đã phí công khi vào đây vì sớm hay muộn thì .. hai bạn sẽ có một kết cục đẹp như truyện cổ tích, đẹp như hoàng tử và công chúa. Giờ công việc của bạn thật đơn giản, hãy tích cực và thường xuyên duy trì sự quan tâm chăm sóc cho mối quan hệ đồng thời ngày càng hoàn thiện bản thân mình hơn nữa!",
      ],
    },
    {
      percent: 90,
      paragraph: [
        "Bác sĩ tình yêu đã dùng kính lúp, rồi kính hiển vi soi để cố gắng tìm ra một vết nào đó trong mối quan hệ của hai bạn, nhưng hôm nay quả là một ngày đen đủi!",
        "Bác sĩ tình yêu cho rằng bạn đã phí công khi vào đây vì sớm hay muộn thì .. hai bạn sẽ có một kết cục đẹp như truyện cổ tích, đẹp như hoàng tử và công chúa. Giờ công việc của bạn thật đơn giản, hãy tích cực và thường xuyên duy trì sự quan tâm chăm sóc cho mối quan hệ đồng thời ngày càng hoàn thiện bản thân mình hơn nữa!",
      ],
    },
    {
      percent: 90,
      paragraph: [
        "Bác sĩ tình yêu đã dùng kính lúp, rồi kính hiển vi soi để cố gắng tìm ra một vết nào đó trong mối quan hệ của hai bạn, nhưng hôm nay quả là một ngày đen đủi!",
        "Bác sĩ tình yêu cho rằng bạn đã phí công khi vào đây vì sớm hay muộn thì .. hai bạn sẽ có một kết cục đẹp như truyện cổ tích, đẹp như hoàng tử và công chúa. Giờ công việc của bạn thật đơn giản, hãy tích cực và thường xuyên duy trì sự quan tâm chăm sóc cho mối quan hệ đồng thời ngày càng hoàn thiện bản thân mình hơn nữa!",
      ],
    },
    {
      percent: 90,
      paragraph: [
        "Bác sĩ tình yêu đã dùng kính lúp, rồi kính hiển vi soi để cố gắng tìm ra một vết nào đó trong mối quan hệ của hai bạn, nhưng hôm nay quả là một ngày đen đủi!",
        "Bác sĩ tình yêu cho rằng bạn đã phí công khi vào đây vì sớm hay muộn thì .. hai bạn sẽ có một kết cục đẹp như truyện cổ tích, đẹp như hoàng tử và công chúa. Giờ công việc của bạn thật đơn giản, hãy tích cực và thường xuyên duy trì sự quan tâm chăm sóc cho mối quan hệ đồng thời ngày càng hoàn thiện bản thân mình hơn nữa!",
      ],
    },
    {
      percent: 100,
      paragraph: ["...", "Các bạn đã là của nhau!!!"],
    },
  ],
  randomResult: function () {
    let result = App.result;
    const index = Math.floor(Math.random() * result.length);
    return result[index];
  },
  containsNums: function (string) {
    if (typeof string == "string") {
      const check = /[0-9]/.test(string);
      return check;
    } else if (typeof string == "object") {
      let checkNum = false;
      string.forEach((e) => {
        let check = /[0-9]/.test(e);
        if (check) checkNum = true;
      });
      return checkNum;
    }
  },
  showParagraph: function (paragraph) {
    if (paragraph) {
      let container = document.querySelector(".loveDescription-container");
      paragraph.forEach((p) => {
        container.innerHTML += `
                    <p class="loveDescription__text">${p}</p>
                `;
      });
    }
  },
  postData: function (data) {
    const apiUrl = App.api;
    if (data) {
      fetch(apiUrl + "/boity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    }
  },
  handleSubmitForm: function () {
    if (
      name1.value.length >= 3 &&
      name1.value.length < 25 &&
      name2.value.length >= 3 &&
      name2.value.length < 25
    ) {
      if (App.containsNums([name1.value, name2.value]))
        alert("Vui lòng nhập đúng tên!");
      else {
        const result = App.randomResult();
        const data = {
          name_1: name1.value,
          name_2: name2.value,
          percent: result.percent,
        };
        App.postData(data);
        if (result) {
          let sound = App.getSound(1).sound;
          modal.classList.remove("hidden");
          nameModal1.innerText = name1.value;
          nameModal2.innerText = name2.value;
          setTimeout(() => {
            percentModal.classList.remove("calculating");
            heartBackground.classList.remove("hidden");
            sound.play();
            let currentPercent = 0;
            let interval = setInterval(() => {
              if (currentPercent < result.percent) {
                currentPercent += 1;
                heartBackground.style = `--height: ${currentPercent}%`;
                percentModal.innerText = currentPercent + "%";
              } else {
                sound.pause();
                tryAgainBtn.classList.remove("hidden");
                if (result.percent != 100) {
                  let randomNum = Math.floor(Math.random() * 10);
                  percentModal.innerText = result.percent + randomNum + "%";
                  heartBackground.style = `--height: ${
                    currentPercent + randomNum
                  }%`;
                }
                if (result.percent >= 45) App.getSound(2).sound.play();
                App.showParagraph(result.paragraph);
                nameModal1.classList.remove("hidden");
                nameModal2.classList.remove("hidden");
                clearInterval(interval);
              }
            }, 50);
          }, 3000);
        }
      }
    } else if (name1.value.length < 3 && name2.value.length < 3) {
      alert("Vui lòng nhập tên đầy đủ");
    } else {
      alert("Vui lòng nhập tên không quá 25 kí tự");
    }
  },
  handleTryAgain: function () {
    location.reload();
  },
  handleEvent: function () {
    formSubmitBtn.onclick = App.handleSubmitForm;
    tryAgainBtn.onclick = App.handleTryAgain;
  },
  start: function () {
    this.handleEvent();
  },
};

App.start();
