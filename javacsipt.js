document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const checkInStatus = document.getElementById('checkInStatus');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const checkIn = document.getElementById('checkIn').checked;

        // Atualiza o status do check-in
        checkInStatus.textContent = checkIn ? 'Check-in realizado com sucesso!' : 'Check-in não realizado.';

        // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou fazer qualquer outra ação necessária
        console.log(`Nome: ${name}, Email: ${email}, Telefone: ${phone}, Check-in: ${checkIn ? 'Sim' : 'Não'}`);
    });
});
