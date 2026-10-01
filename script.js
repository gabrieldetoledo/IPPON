// ===== CONFIGURAÇÃO (edite aqui) =====
const WHATSAPP = "5511900000000"; // DDI + DDD + número, só dígitos
const PRECOS = [0, 60, 75, 95];   // bolsa, plano 1, plano 2, plano 3
// =====================================

const brl = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const num = id => Math.max(0, parseFloat(document.getElementById(id).value) || 0);
const set = (id, txt) => (document.getElementById(id).textContent = txt);

function simular() {
  const alunos = [0, 1, 2, 3].map(i => num("n" + i));
  const receita = alunos.reduce((s, n, i) => s + n * PRECOS[i], 0);
  const custo = [1, 2, 3, 4, 5].reduce((s, i) => s + num("c" + i), 0);
  const resultado = receita - custo;
  const total = alunos.reduce((a, b) => a + b, 0);
  const pagantes = total - alunos[0];

  set("r-rec", brl(receita));
  set("r-cus", brl(custo));
  set("r-res", brl(resultado));
  set("r-mar", receita ? ((resultado / receita) * 100).toFixed(1) + "%" : "—");
  set("r-med", pagantes ? brl(receita / pagantes) : "—");
  set("r-cpa", total ? brl(custo / total) : "—");
  set("r-bol", alunos[0] + " de " + total + " alunos");

  const msg = document.getElementById("r-msg");
  if (resultado >= 0) {
    msg.textContent = "As mensalidades cobrem os custos e sobram " + brl(resultado) + " por mês.";
    msg.className = "ok";
  } else {
    msg.textContent = "Faltam " + brl(-resultado) + " por mês para cobrir os custos.";
    msg.className = "ruim";
  }
}

document.querySelectorAll("#simulador input").forEach(el => el.addEventListener("input", simular));
simular();

document.getElementById("link-whats").href = "https://wa.me/" + WHATSAPP;

document.getElementById("form-matricula").addEventListener("submit", e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  const texto =
    "Olá! Quero fazer a pré-matrícula no CT Ippon.\n" +
    "Aluno: " + d.nome + " (" + d.idade + " anos)\n" +
    (d.responsavel ? "Responsável: " + d.responsavel + "\n" : "") +
    "WhatsApp: " + d.whats + "\n" +
    "Modalidade: " + d.modalidade + "\n" +
    "Plano: " + d.plano;
  window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto), "_blank");
});
