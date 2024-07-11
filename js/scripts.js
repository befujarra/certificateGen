$(document).ready(function() {
  const loadPeople = () => {
      return JSON.parse(localStorage.getItem('people') || '[]');
  };

  const savePeople = (people) => {
      localStorage.setItem('people', JSON.stringify(people));
  };

  $('#generateCertificate').on('click', function() {
      const people = loadPeople();
      const { jsPDF } = window.jspdf;

      people.forEach(function(person) {
          const doc = new jsPDF({
              orientation: 'landscape',
              unit: 'px',
              format: [2000, 1414]
          });

          // Carregar a imagem do modelo do certificado
          const img = new Image();
          img.src = 'images/certificado.png';
          img.onload = function() {
              // Adicionar a imagem como fundo
              doc.addImage(img, 'PNG', 0, 0, 2000, 1414);

              // Adicionar o texto personalizado
              doc.setFontSize(48);
              doc.setTextColor(0, 0, 0);
              doc.text(person.name, 1000, 700, { align: 'center' }); // Nome
              doc.setFontSize(36);
              doc.text(`Concluiu com êxito o curso de ${person.course}`, 1000, 800, { align: 'center' }); // Curso
              doc.text(`No mês de ${person.month} na data de ${person.completion_date}.`, 1000, 850, { align: 'center' }); // Data

              // Salvar o PDF
              doc.save(`Certificado_${person.name}.pdf`);
          };
      });
  });

  $('#registerForm').on('submit', function(event) {
      event.preventDefault();
      const name = $('#name').val();
      const month = $('#month').val();
      const completionDate = $('#completionDate').val();
      const course = $('#course').val();

      const people = loadPeople();
      people.push({ name, month, completion_date: completionDate, course });
      savePeople(people);

      alert('Pessoa cadastrada com sucesso!');
      $('#name').val('');
      $('#month').val('');
      $('#completionDate').val('');
      $('#course').val('');
  });

  $('#clearList').on('click', function() {
      localStorage.removeItem('people');
      alert('Lista de pessoas limpa com sucesso!');
  });

  $('#uploadList').on('click', function() {
      const file = $('#uploadFile')[0].files[0];
      const reader = new FileReader();

      reader.onload = function(e) {
          const people = JSON.parse(e.target.result);
          savePeople(people);
          alert('Lista de pessoas carregada com sucesso!');
          $('#uploadFile').val('');
      };

      reader.readAsText(file);
  });

  $('#showPeople').on('click', function() {
      const people = loadPeople();
      $('#peopleList').empty();
      people.forEach(function(person) {
          let listItem = `<li class="list-group-item">${person.name} - ${person.course} - ${person.month} - ${person.completion_date}</li>`;
          $('#peopleList').append(listItem);
      });
      $('#peopleModal').modal('show');
  });
});
