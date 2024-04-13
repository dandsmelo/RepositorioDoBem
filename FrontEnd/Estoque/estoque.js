//Configurações do menu
var btn = document.querySelector('#menu-btn')
var menu = document.querySelector('#menu-list')

btn.addEventListener('click', function(){
    menu.classList.toggle('expandir')
})

//Configurações do modal
// Seleciona o botão e o modal
var btnModal = document.getElementById("btn-add");
var modal = document.getElementById("modal");

// Seleciona o elemento que fecha o modal
var closeBtn = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, o modal é exibido
btnModal.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no elemento de fechar, o modal é ocultado
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, ele é ocultado
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Configurações da tabela

// Botão de adicionar do modal
var addBtn = document.getElementById("btn-adc");

//Seleciona a tabela e o corpo dela
var table = document.getElementById("table");
var tbody = table.getElementsByTagName("tbody")[0];

// Botão para excluir dados selecionados
var deleteBtn = document.getElementById("btn-delete");

// Botão para gerar o relatório
var relatorioBtn = document.getElementById("btn-relatorio");


// Função para adicionar dados na tabela
addBtn.onclick = function() {
    var input01 = document.getElementById("input01").value.trim();
    var input02 = document.getElementById("input02").value.trim();
    var input03 = document.getElementById("input03").value.trim();
    var input04 = document.getElementById("input04").value.trim();
  
    if (input01 === "" || input02 === "" || input03 === "" || input04 === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    var newRow = tbody.insertRow();

    // Adiciona um checkbox na primeira célula da nova linha
    var cellCheckbox = newRow.insertCell();
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    cellCheckbox.appendChild(checkbox);

    var cell01 = newRow.insertCell();
    var cell02 = newRow.insertCell();
    var cell03 = newRow.insertCell();
    var cell04 = newRow.insertCell();
  
    cell01.textContent = input01;
    cell02.textContent = input02;
    cell03.textContent = input03;
    cell04.textContent = input04;
  
    modal.style.display = "none";

    alert("Alimento adicionado");
  }

  // Função para excluir dados selecionados
deleteBtn.onclick = function() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
  checkboxes.forEach(function(checkbox) {
    var row = checkbox.closest('tr'); // encontra a linha pai do checkbox
    row.parentNode.removeChild(row); // remove a linha da tabela
  });
}

// Gera o relatório
relatorioBtn.onclick = function() {
  var relatorio = "Relatório:\n\n";

  // Itera sobre as linhas da tabela
  var rows = tbody.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    for (var j = 1; j < cells.length; j++) { // Começa de 1 para ignorar a primeira célula do checkbox
      relatorio += cells[j].textContent + "\t"; // Adiciona o conteúdo da célula ao relatório
    }
    relatorio += "\n";
  }

  // Exibe o relatório com alert
  alert(relatorio);
}

// Função para mudar a cor da linha selecionada
tbody.addEventListener("click", function(event) {
  var targetRow = event.target.closest("tr"); // Obtém a linha clicada
  
  // Remove a classe de seleção de todas as linhas
  var rows = tbody.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    rows[i].classList.remove("selected");
  }
  
  // Adiciona a classe de seleção à linha clicada
  targetRow.classList.add("selected");
});