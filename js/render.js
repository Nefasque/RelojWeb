import { renderAlarm } from "./alarma.js";

const load_main = () => {
  const main = document.createElement("MAIN");
  main.className = "main main-grid";
  main.innerHTML = `
      <nav class="tab">
        <ul>
          <li class="LIActive">
            <a title="Alarma"><i class="bi bi-alarm"></i></a>
          </li>
          <li>
            <a title="Cronometro"><i class="bi bi-stopwatch"></i></a>
          </li>
          <li>
            <a title="Temporizador"><i class="bi bi-hourglass-split"></i></a>
          </li>
        </ul>
      </nav>
  `;

  main.append(renderAlarm());
  return main;
};

export const render = (page) => {
  if (page === "init") {
    document.querySelector("body").append(load_main());
    console.log(load_main());
  }
};
