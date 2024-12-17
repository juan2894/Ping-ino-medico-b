document.getElementById("generarHistoria").addEventListener("click", () => {
    const motivoConsulta = document.getElementById("motivoConsulta").value;
    const sintomas = document.getElementById("sintomas").value;
    const fiebre = document.getElementById("fiebre").value;
    const duracion = document.getElementById("duracion").value;

    const historia = `
Motivo de Consulta:
${motivoConsulta}

Síntomas Principales:
${sintomas}

¿Fiebre?: ${fiebre}
Duración de los síntomas: ${duracion} días
    `;

    document.getElementById("output").textContent = historia;

    // Guardar en LocalStorage (opcional)
    localStorage.setItem("historiaClinica", historia);
});
