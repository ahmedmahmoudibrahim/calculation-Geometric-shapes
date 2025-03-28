function showAreaInputs() {
    const shape = document.getElementById("shape").value;
    const areaInputs = document.getElementById("areaInputs");
    areaInputs.innerHTML = ""; // Clear previous inputs

    if (shape === "square") {
        areaInputs.innerHTML = `
            <label for="side">Side Length:</label>
            <input type="number" id="side" required>
        `;
    } else if (shape === "rectangle") {
        areaInputs.innerHTML = `
            <label for="length">Length:</label>
            <input type="number" id="length" required>
            <label for="width">Width:</label>
            <input type="number" id="width" required>
        `;
    } else if (shape === "triangle") {
        areaInputs.innerHTML = `
            <label for="base">Base:</label>
            <input type="number" id="base" required>
            <label for="height">Height:</label>
            <input type="number" id="height" required>
        `;
    } else if (shape === "circle") {
        areaInputs.innerHTML = `
            <label for="radius">Radius:</label>
            <input type="number" id="radius" required>
        `;
    }
}

function calculateArea() {
    const shape = document.getElementById("shape").value;
    let area;

    if (shape === "square") {
        const side = parseFloat(document.getElementById("side").value);
        area = side * side;
    } else if (shape === "rectangle") {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);
        area = length * width;
    } else if (shape === "triangle") {
        const base = parseFloat(document.getElementById("base").value);
        const height = parseFloat(document.getElementById("height").value);
        area = 0.5 * base * height;
    } else if (shape === "circle") {
        const radius = parseFloat(document.getElementById("radius").value);
        area = Math.PI * radius * radius;
    }

    document.getElementById("areaResult").innerText = `Area: ${area.toFixed(2)}`;
}

function showPerimeterInputs() {
    const shape = document.getElementById("perimeterShape").value;
    const perimeterInputs = document.getElementById("perimeterInputs");
    perimeterInputs.innerHTML = ""; // Clear previous inputs

    if (shape === "square") {
        perimeterInputs.innerHTML = `
            <label for="sidePerimeter">Side Length:</label>
            <input type="number" id="sidePerimeter" required>
        `;
    } else if (shape === "rectangle") {
        perimeterInputs.innerHTML = `
            <label for="lengthPerimeter">Length:</label>
            <input type="number" id="lengthPerimeter" required>
            <label for="widthPerimeter">Width:</label>
            <input type="number" id="widthPerimeter" required>
        `;
    } else if (shape === "triangle") {
        perimeterInputs.innerHTML = `
            <label for="side1">Side 1:</label>
            <input type="number" id="side1" required>
            <label for="side2">Side 2:</label>
            <input type="number" id="side2" required>
            <label for="side3">Side 3:</label>
            <input type="number" id="side3" required>
        `;
    }
}

function calculatePerimeter() {
    const shape = document.getElementById("perimeterShape").value;
    let perimeter;

    if (shape === "square") {
        const side = parseFloat(document.getElementById("sidePerimeter").value);
        perimeter = 4 * side;
    } else if (shape === "rectangle") {
        const length = parseFloat(document.getElementById("lengthPerimeter").value);
        const width = parseFloat(document.getElementById("widthPerimeter").value);
        perimeter = 2 * (length + width);
    } else if (shape === "triangle") {
        const side1 = parseFloat(document.getElementById("side1").value);
        const side2 = parseFloat(document.getElementById("side2").value);
        const side3 = parseFloat(document.getElementById("side3").value);
        perimeter = side1 + side2 + side3;
    }

    document.getElementById("perimeterResult").innerText = `Perimeter: ${perimeter.toFixed(2)}`;
}

function showVolumeInputs() {
    const shape = document.getElementById("volumeShape").value;
    const volumeInputs = document.getElementById("volumeInputs");
    volumeInputs.innerHTML = ""; // Clear previous inputs

    if (shape === "cube") {
        volumeInputs.innerHTML = `
            <label for="sideVolume">Side Length:</label>
            <input type="number" id="sideVolume" required>
        `;
    }
}

function calculateVolume() {
    const shape = document.getElementById("volumeShape").value;
    let volume;

    if (shape === "cube") {
        const side = parseFloat(document.getElementById("sideVolume").value);
        volume = Math.pow(side, 3);
    }

    document.getElementById("volumeResult").innerText = `Volume: ${volume.toFixed(2)}`;
}

function resetForm(formId, inputsId, resultId) {
    document.getElementById(formId).reset();
    document.getElementById(inputsId).innerHTML = "";
    document.getElementById(resultId).innerText = "";
}

