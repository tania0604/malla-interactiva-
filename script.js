function mostrar(curso) {
    let texto = "";

    switch(curso) {
       
        case "N5_1":
            texto = "<strong>Teoría de las Relaciones Internacionales 1</strong><br>Curso base de la especialidad.";
            break;
        case "N5_2":
            texto = "<strong>Historia de las Relaciones Internacionales</strong><br>Curso obligatorio del nivel 5.";
            break;
        case "N5_3":
            texto = "<strong>Derecho Internacional Público</strong><br>Curso obligatorio.";
            break;
        case "N6_1":
            texto = "<strong>Métodos de Investigación en RI</strong>";
            break;
        case "N6_2":
            texto = "<strong>Estadística para Análisis Político 2</strong>";
            break;
        case "N6_3":
            texto = "<strong>Globalización y Sociedad</strong>";
            break;
        case "N7_1":
            texto = "<strong>Seguridad Internacional</strong>";
            break;
        case "N7_2":
            texto = "<strong>Política Exterior Peruana</strong>";
            break;
        case "N7_3":
            texto = "<strong>Geografía Económica y Política</strong>";
            break;
        case "N8_1":
            texto = "<strong>Regímenes Internacionales</strong>";
            break;
        case "N8_2":
            texto = "<strong>Cooperación Internacional</strong>";
            break;
        case "N9_1":
            texto = "<strong>Electivo de especialidad</strong><br>Elige según tu interés.";
            break;
        case "N9_2":
            texto = "<strong>Negociación Internacional</strong><br>Electivo de la carrera.";
            break;
        case "N10_1":
            texto = "<strong>Trabajo de Investigación</strong><br>Proyecto final para egresar.";
            break;
        default:
            texto = "Selecciona un curso para ver información.";
    }

    document.getElementById("contenido").innerHTML = texto;
}
