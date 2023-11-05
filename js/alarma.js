const tabContent = () => { const div = document.createElement("div");
  div.className = ("tab-conteiner grid-setAlarma");
  div.innerHTML = `
        <div class="reloj">
          <h2 datetime="17:47:00" id="reloj">17:47:00</h2>
        </div>

        <div class="setAlarma">
          <button class="btn btn-add">
            <i class="bi bi-plus-circle-fill"></i>
          </button>

          <!--modal setAlarma  -->
          <div class="modal-backgroup modal-enable">
            <div class="modal modal-setAlarma">
              <button class="btn btn-cancel">
                <i class="bi bi-x"></i>
              </button>
              <h2>Establesca la Alarma</h2>

              <label for="NombreAlarma" class="label-1">Nombre</label>
              <input type="name" value="Alarma 1" id="NombreAlarma" />
              <label class="label-2">Alarma</label>

              <div class="contentSelect">
                <select class="select select-1">
                </select>
                <p>:</p>
                <select class="select select-2">
                </select>
              </div>

              <button class="btn btn-save">
                <i class="bi bi-check-circle"></i>
                Estableser
              </button>
            </div>
          </div>
        </div>

        <table class="TableAlarma">
          <tbody id="tbody">
            <tr>
              <th><p>Alarma 1</p></th>
              <th>
                <time datetime="">15:08</time>
              </th>
              <th>
                <button class="btn btn-accion btn-edit">
                  <i class="bi bi-trash-fill"></i>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
  `;

  return div;
};

// objecto export with function of reder
export const renderAlarm = () =>{
  return(tabContent());
}

