// Placeholder to host a component

export default function Hours() {
    const today = new Date().getDay();

    const horarios = [
        { dia: "Domingo", inicio: "9:00 AM", fin: "8:00 PM" },
        { dia: "Lunes", inicio: "10:00 AM", fin: "4:00 PM" },
        { dia: "Martes", inicio: "10:00 AM", fin: "4:00 PM" },
        { dia: "Miércoles", inicio: "10:00 AM", fin: "4:00 PM" },
        { dia: "Jueves", inicio: "10:00 AM", fin: "4:00 PM" },
        { dia: "Viernes", inicio: "10:00 AM", fin: "4:00 PM" },
        { dia: "Sábado", inicio: "9:00 AM", fin: "8:00 PM" },
    ];
    const horarioHoy = horarios[today];

    return (
        <div>
            <h2>Horario de hoy</h2>
            <ul>
                <li>
                    <strong>{horarioHoy.dia}</strong>: {horarioHoy.inicio} - {horarioHoy.fin}
                </li>
            </ul>
        </div>
    );
}