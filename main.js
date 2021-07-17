function darResultado(auto) {

    console.log(auto)

    if (auto === 1) {
        const res = document.getElementById("resultado");    
        return res.innerHTML = `
            <form for="InputCuadrado" class="Form" >
                <h2>Calculá el área y perímetro de un cuadrado</h2>
                <label>Escribe las medidas de cada lado del cuadrado</label>
                <input class="Select" type="number" id="InputCuadrado" placeholder="Lado..." />
                <button class="Button" type="button" onclick="calcularPerimetroCuadrado()" >
                    Calcular perímetro
                </button>
                <button class="Button" type="button" onclick="calcularAreaCuadrado()" >
                    Calcular área
                </button>
                <p id="resCuadrado" class="Form__result" ></p>
            </form>
        `;
    } else if (auto === 2) {
        const res = document.getElementById("resultado");    
        return res.innerHTML = `
            <form for="InputTriangulo" class="Form" >
                <h2>Calculá el área y perímetro de un triangulo</h2>
                <label>Ingresa las medidas de cada lado del triangulo</label>
                <input class="Select" type="number" id="InputTrianguloLado1" placeholder="Lado 1..." />
                <input class="Select" type="number" id="InputTrianguloLado2" placeholder="Lado 2..." />
                <input class="Select" type="number" id="InputTrianguloBase" placeholder="Base..." />
                <input class="Select" type="number" id="InputTrianguloAltura" placeholder="Altura..." />
                <button class="Button" type="button" onclick="calcularPerimetroTriangulo()" >
                    Calcular perímetro
                </button>
                <button class="Button" type="button" onclick="calcularAreaTriangulo()" >
                    Calcular área
                </button>
                <p id="resTriangulo" class="Form__result" ></p>
            </form>
        `;
    } else {
        const res = document.getElementById("resultado");
        return res.innerHTML = `
            <form for="InputCirculo" class="Form" >
                <h2>Calculá el área y perímetro de un circulo</h2>
                <label>Intruduce el radio del circulo</label> 
                <input class="Select" type="number" id="InputCirculo" placeholder="Radio..." />
                <button class="Button" type="button" onclick="calcularPerimetroCirculo()" >
                    Calcular perímetro
                </button>
                <button class="Button" type="button" onclick="calcularAreaCirculo()" >
                    Calcular área
                </button>
                <p id="resCirculo" class="Form__result" ></p>
            </form>
        `;  
    } 
}
function darOpcion() {
    const input1 = document.getElementById("valorcito").value;

    darResultado( parseInt(input1) );
}