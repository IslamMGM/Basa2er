document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".Q_and_A_box");

  boxes.forEach((box) => {
    box.addEventListener("click", function (e) {
      e.stopPropagation();

      const currentAnswer = this.querySelector(".answer_box");
      const currentHeader = this.querySelector(".Q_head");

      // Close all others
      document.querySelectorAll(".answer_box").forEach((ans) => {
        if (ans !== currentAnswer && ans.style.height !== "0px") {
          ans.style.height = ans.scrollHeight + "px";
          requestAnimationFrame(() => {
            ans.style.height = "0";
          });

          const head = ans
            .closest(".Q_and_A_box")
            .querySelector(".Q_head, .Q-head");
          head.classList.remove("open");
        }
      });

      // Toggle current
      if (!currentAnswer.style.height || currentAnswer.style.height === "0px") {
        currentAnswer.style.height = currentAnswer.scrollHeight + "px";
        currentHeader.classList.add("open");
      } else {
        currentAnswer.style.height = currentAnswer.scrollHeight + "px";
        requestAnimationFrame(() => {
          currentAnswer.style.height = "0";
        });
        currentHeader.classList.remove("open");
      }
    });
  });

  // Close all on body click
  document.body.addEventListener("click", () => {
    document.querySelectorAll(".answer_box").forEach((ans) => {
      if (ans.style.height !== "0px") {
        ans.style.height = ans.scrollHeight + "px";
        requestAnimationFrame(() => {
          ans.style.height = "0";
        });

        const head = ans
          .closest(".Q_and_A_box")
          .querySelector(".Q_head, .Q-head");
        head.classList.remove("open");
      }
    });
  });

  // Prevent inside click
  document.querySelectorAll(".answer_box").forEach((ans) => {
    ans.addEventListener("click", (e) => e.stopPropagation());
  });
});
