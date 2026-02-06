const XLSX = require('xlsx');

// 1. Define Data for Match (Rows 1-10)
// Keys must exactly match what main.js expects in Column A
const matchInfo = [
    ["Match Date", "2024-02-01"],
    ["Location", "Pavilhão Central"],
    ["Competition", "Liga"],
    ["Stage", "Fase Regular"],
    ["Kick Off Time", "16:00"],
    ["Home Team", "Minha Equipa"],
    ["Away Team", "Adversário"],
    ["Home Display", "CASA"],
    ["Away Display", "FORA"],
    ["Team Analyzed", "Minha Equipa"]
];

// 2. Define Data for Players (Rows 14+)
// Note: App reads starting from Row 14 (Index 13).
// Headers at Row 13 (Index 12).
const players = [
    [1, 1, "João", "Silva", "GK"],
    [2, 2, "Antonio", "Costa", "FIXO"],
    [3, 3, "Manuel", "Pereira", "ALA"],
    [4, 4, "Jose", "Santos", "ALA"],
    [5, 5, "Luis", "Ferreira", "PIVOT"],
    [6, 6, "Carlos", "Oliveira", "PIVOT"],
    [7, 7, "Paulo", "Rodrigues", "ALA"],
    [8, 8, "Pedro", "Martins", "ALA"],
    [9, 12, "Miguel", "Gomes", "GK"],
    [10, 10, "Rui", "Fernandes", "ALA"],
    [11, 11, "Tiago", "Goncalves", "ALA"],
    [12, 13, "David", "Almeida", "FIXO"],
    [13, 14, "Ricardo", "Ribeiro", "PIVOT"],
    [14, 15, "Jorge", "Pinto", "ALA"],
    [15, 16, "Daniel", "Carvalho", "ALA"],
    [16, 17, "Andre", "Lopes", "FIXO"]
];

// 3. Construct Worksheet Data Array
const ws_data = [];

// Add Match Info
matchInfo.forEach(row => ws_data.push(row));

// Fill gap until Row 13 (Index 12)
while (ws_data.length < 12) {
    ws_data.push([]); // Empty rows
}

// Add Headers at Row 13
ws_data.push(["Player ID", "Number", "First Name", "Last Name", "Position"]);

// Add Players
players.forEach(p => ws_data.push(p));

// 4. Create Workbook
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.aoa_to_sheet(ws_data);

// Append Sheet
XLSX.utils.book_append_sheet(wb, ws, "Setup");

// 5. Write File
const filename = "Template_Jogo_Futsal.xlsx";
XLSX.writeFile(wb, filename);

console.log(`${filename} created successfully.`);
