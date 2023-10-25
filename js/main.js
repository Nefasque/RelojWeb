"user strict";
//---------------------------//
// Estado
let section = "Alarma";

//---------------------------//

// Carga Inicial ----------------------------------
const L_Header = () => {
  const header = document.createElement("HEADER");
  header.innerHTML = `
      <h1 title="Reloj Web">Reloj Web</h1>
      <p>Un Secillo reloc Html, CSS y JavaScript</p>
  `;

  header.classList.add("header");
  return header;
};

const L_Main = () => {
  const main = document.createElement("MAIN");
  const div = L_TabConteniner("Alarma");
  main.innerHTML = `
      <nav class="tab">
        <ul>
          <li class="LIActive"><a >Alamar</a></li>
          <li><a>Cronometro</a></li>
          <li><a>Cuanta Regresiva</a></li>
        </ul>
      </nav>
  `;

  main.classList.add("main", "main-grid");
  main.appendChild(div);
  return main;
};

const L_TabConteniner = (section) => {
  let div;

  if (section == "Alarma") div = L_Alarmar();
  else if (section == "Cronometro") alert("Cronometro");
  else if (section == "Cuenta Regresiva") alert("Cuenta Regresiva");

  return div;
};

const L_Alarmar = () => {
  const div = document.createElement("DIV");
  const TableAlarma = L_TableAlarma();
  const reloj = L_Reloj();

  div.innerHTML = `
    <div class="controles">
      <div class="setAlarma">
        <p>
          <label for="Alarma">Alarma</label>
          <input type="time" id="Alarma" />
        </p>
        <button class="btn-Estableser btn">Estableser</button>
      </div>
    </div>
  `;

  div.querySelector(".controles").appendChild(TableAlarma);
  div.appendChild(reloj);
  div.classList.add("tab-conteiner", "grid-setAlarma");
  return div;
};

const L_TableAlarma = () => {
  const table = document.createElement("TABLE");
  table.innerHTML = `
    <tbody>
    </tbody>
  `;

  //----------------------------------
  // BORRA DESPUES !!
  //----------------------------------
  table.querySelector("tbody").appendChild(L_NewRowTableAlarma(AlarmaFAlse(2)));
  table.querySelector("tbody").appendChild(L_NewRowTableAlarma(AlarmaFAlse(3)));
  table.querySelector("tbody").appendChild(L_NewRowTableAlarma(AlarmaFAlse(4)));
  //----------------------------------
  //----------------------------------

  table.classList.add("TableAlarma");
  return table;
};

const L_NewRowTableAlarma = (date) => {
  const tr = document.createElement("TR");
  tr.innerHTML = `
    <tr class="tr1">
      <th><p>E</p></th>
      <th><p>${date.name}</p></th>
      <th><p><input type="time" class="time" disabled value="${date.value}"></p></th>
      <th><p>X</p></th>
    </tr>
  `;
  return tr;
};

const AlarmaFAlse = (id) => {
  const date = {
    name: `Alarma ${id}`,
    value: "15:32",
  };
  return date;
};

const L_Reloj = () => {
  const table = document.createElement("TABLE");
  table.innerHTML = `
    <tbody>
      <tr>
        <th title="horas" id="horas"></th>
        <th>:</th>
        <th title="minutos" id="minutos"></th>
        <th>:</th>
        <th title="segundos" id="segundos"></th>
        <th id="PM_AM">AM</th>
      </tr>
    </tbody>
  `;
  table.classList.add("reloj");
  return table;
};

////////////////////////////FUNCIONES

addEventListener("load", () => {
  const body = document.querySelector("body");
  const header = L_Header();
  const main = L_Main();
  body.appendChild(header);
  body.appendChild(main);
  CalibrarReloj();
  F_Reloj();
});

/////////////////////////////////// Reloj

const segundoUpdate = (segundo) =>
  document.getElementById("segundos").textContent = segundo;

const minutosUpdate = (minutos) =>
  document.getElementById("minutos").textContent = minutos;

const HorasUpdate = (horas) =>
  document.getElementById("horas").textContent = horas;

const PM_AM_Update = (pasadoMediodia) => {
  if (pasadoMediodia) {
    document.getElementById("PM_AM").textContent = "PM";
  } else {
    document.getElementById("PM_AM").textContent = "AM";
  }
};

const CalibrarReloj = () => {
  const time = new Date();
  segundoUpdate(addZero(time.getSeconds()));
  minutosUpdate(addZero(time.getMinutes()));
  HorasUpdate(addZero(time.getHours()));
};

const addZero = (date) => {
  if (date < 10) return ("0" + date);
  return date;
};

const F_Reloj = () => {
  setInterval(() => {
    const time = new Date();
    segundoUpdate(addZero(time.getSeconds()));

    if (time.getSeconds() == 0) {
      minutosUpdate(addZero(time.getMinutes()));
    }

    if (time.getMinutes() == 0) {
      if (time.getHours() >= 13) {
        HorasUpdate(addZero(time.getHours() - 12));
        PM_AM_Update(true);
      } else {
        HorasUpdate(addZero(time.getHours()));
        PM_AM_Update(false);
      }
    }
  }, 1000);
};

/////////////////////////////////// Reloj
