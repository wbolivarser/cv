document.addEventListener("DOMContentLoaded", () => {
    const $boton = document.querySelector("#btnCrearPdf");
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = document.body;
        html2pdf()
            .set({
                margin: 0,
                filename: 'CV_Wuilmer_Bolivar.pdf',
                image: {
                    type: 'jpeg',
                    quality: 1,
                },
                html2canvas: {
                    scale: 1,
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "mm",
                    format: "tabloid",
                    orientation: 'p',
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
    });
});