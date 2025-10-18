console.log("Site da ONG carregado com sucesso!");

// js/main.js

// Máscaras simples (telefone e CPF)
document.addEventListener("DOMContentLoaded", () => {
  const telInputs = document.querySelectorAll('[data-mask="tel"]');
  telInputs.forEach(input => {
    input.addEventListener("input", () => {
      let v = input.value.replace(/\D/g, "");
      if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
      } else if (v.length > 5) {
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
      } else {
        v = v.replace(/^(\d*)/, "($1");
      }
      input.value = v;
    });
  });

  // Validação simples para formulário de contato
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      }
    });
  });
});
