(function () {

  var dragSrcEl = null;

  function iniDragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function iniDragEnd(e) {
    this.style.opacity = '1';
    [].forEach.call(cajas, function (caja) {
      caja.classList.remove('over');
    });
  }

  function iniDragEnter(e) {
    this.classList.add('over');
  }

  function iniDragLeave(e) {
    this.classList.remove('over');
  }

  function iniDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  function iniDrop(e) {
    e.stopPropagation();
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    document.getElementById('verOrden').disabled = false;
    return false;
  }

  var cajas = document.querySelectorAll('.cajas');
  [].forEach.call(cajas, function (caja) {
    caja.addEventListener('dragstart', iniDragStart, false);
    caja.addEventListener('dragend', iniDragEnd, false);
    caja.addEventListener('dragenter', iniDragEnter, false);
    caja.addEventListener('dragleave', iniDragLeave, false);
    caja.addEventListener('dragover', iniDragOver, false);
    caja.addEventListener('drop', iniDrop, false);
  });


  function verificarOrden() {
    console.log('###############################');
    var tokens = document.querySelectorAll('.token');
    [].forEach.call(tokens, function (token) {
      console.log(token.textContent + ' => ' + token.parentElement.dataset.pos);
    });
  }

  document.getElementById('verOrden').addEventListener('click', verificarOrden, false);

})();
