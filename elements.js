/*
 * Archivo de DATOS con los 118 elementos químicos.
 * La clave 'category' se usa en diseño.css para asignar el color.
 * Las categorías deben coincidir con las clases CSS:
 * gas-noble, halogeno, no-metal, metaloide, otro-metal,
 * metal-transicion, alcalinoterreo, alcalino, lantanido, actinido, hydrogen
*/
const elementsData = [
    // Periodo 1
    {
        number: 1, symbol: "H", name: "Hidrógeno", mass: 1.008, row: 1, column: 1,
        category: "hydrogen", type: "No metal", state: "Gas",
        image: "https://th.bing.com/th/id/OIP.Pm_QKsFFwflUYRgkruMzxwHaEC?w=328&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 2, symbol: "He", name: "Helio", mass: 4.0026, row: 1, column: 18,
        category: "gas-noble", type: "Gas Noble", state: "Gas",
        image: "https://th.bing.com/th/id/OIP.cl80b1CPG1vQqsIITn73xAHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    // Periodo 2
    {
        number: 3, symbol: "Li", name: "Litio", mass: 6.94, row: 2, column: 1,
        category: "alcalino", type: "Metal Alcalino", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.nqnOHDGKkgU2GOznfIiO0wHaFK?w=223&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 4, symbol: "Be", name: "Berilio", mass: 9.0122, row: 2, column: 2,
        category: "alcalinoterreo", type: "Metal Alcalinotérreo", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.vyAc6QNPGbjfEgxJMmZ4kQAAAA?w=185&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 5, symbol: "B", name: "Boro", mass: 10.81, row: 2, column: 13,
        category: "metaloide", type: "Metaloide", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.ncrPo1Ajt_KQd383mWq3kwHaHa?w=190&h=190&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 6, symbol: "C", name: "Carbono", mass: 12.011, row: 2, column: 14,
        category: "no-metal", type: "No metal", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.lb-MRnBBPI55n9t1t_UpxQAAAA?w=211&h=195&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 7, symbol: "N", name: "Nitrógeno", mass: 14.007, row: 2, column: 15,
        category: "no-metal", type: "No metal", state: "Gas",
        image: "https://th.bing.com/th/id/OIP.SM2lQZS6xJN64SDmSATx-AHaHa?w=204&h=204&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 8, symbol: "O", name: "Oxígeno", mass: 15.999, row: 2, column: 16,
        category: "no-metal", type: "No metal", state: "Gas",
        image: "https://th.bing.com/th/id/OIP.EmjF4hHPS0edrkf3B2M-ogHaEK?w=265&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 9, symbol: "F", name: "Flúor", mass: 18.998, row: 2, column: 17,
        category: "halogeno", type: "Halógeno", state: "Gas",
        image: "https://th.bing.com/th/id/OIP.4fxhvBKG7MOSMILsC37_cAHaFj?w=247&h=185&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 10, symbol: "Ne", name: "Neón", mass: 20.180, row: 2, column: 18,
        category: "gas-noble", type: "Gas Noble", state: "Gas",
        image: "https://th.bing.com/th/id/OIP.txY3Qdmlk7JyJUBUWtP6vwHaHa?w=169&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    // Periodo 3
    {
        number: 11, symbol: "Na", name: "Sodio", mass: 22.990, row: 3, column: 1,
        category: "alcalino", type: "Metal Alcalino", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.5d_b2D2ddidBW6z4Fq3YhAHaEK?w=323&h=182&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 12, symbol: "Mg", name: "Magnesio", mass: 24.305, row: 3, column: 2,
        category: "alcalinoterreo", type: "Metal Alcalinotérreo", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.fb15NXqDG41mblv-2V7IcwAAAA?w=208&h=181&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 13, symbol: "Al", name: "Aluminio", mass: 26.982, row: 3, column: 13,
        category: "metal-post-transicion", type: "Otro metal", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.u2JvODsA8w-eTIT5E1ndhgHaEc?w=269&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 14, symbol: "Si", name: "Silicio", mass: 28.085, row: 3, column: 14,
        category: "metaloide", type: "Metaloide", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.3iKDwq7B7ljEQ70C5DhjfgHaIx?w=148&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 15, symbol: "P", name: "Fósforo", mass: 30.974, row: 3, column: 15,
        category: "no-metal", type: "No metal", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.6iKWcdj_2SP1rx350fvZ3QAAAA?w=212&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 16, symbol: "S", name: "Azufre", mass: 32.06, row: 3, column: 16,
        category: "no-metal", type: "No metal", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.T7eEim5zWCOuE9wY2xiv4wHaEK?w=293&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 17, symbol: "Cl", name: "Cloro", mass: 35.45, row: 3, column: 17,
        category: "halogeno", type: "Halógeno", state: "Gas",
        image: "https://th.bing.com/th/id/OIP.dyA2aNxFYgRCJkAeVpM49wHaE8?w=285&h=190&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 18, symbol: "Ar", name: "Argón", mass: 39.948, row: 3, column: 18,
        category: "gas-noble", type: "Gas Noble", state: "Gas",
        image: "https://th.bing.com/th/id/OIP.KkRBahdzLwdOMSzxBeb3aQHaE8?w=282&h=188&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    // Periodo 4
    {
        number: 19, symbol: "K", name: "Potasio", mass: 39.098, row: 4, column: 1,
        category: "alcalino", type: "Metal Alcalino", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.5tlvjI7nNXMqHIMX0mkH8QHaFL?w=219&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 20, symbol: "Ca", name: "Calcio", mass: 40.078, row: 4, column: 2,
        category: "alcalinoterreo", type: "Metal Alcalinotérreo", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.2Sua7QPro-WTPw_UeHcFVwHaFW?w=270&h=195&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 21, symbol: "Sc", name: "Escandio", mass: 44.956, row: 4, column: 3,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.BOACcg6wLElClC13LyoG0QHaEw?w=260&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 22, symbol: "Ti", name: "Titanio", mass: 47.867, row: 4, column: 4,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.dNwFITav5aWTaaHSWtLrwAHaEA?w=294&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 23, symbol: "V", name: "Vanadio", mass: 50.942, row: 4, column: 5,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.RUAXMruOXUBISy8MVeNqEgHaEK?w=324&h=182&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 24, symbol: "Cr", name: "Cromo", mass: 51.996, row: 4, column: 6,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.s2yOV3FbrDv8vjX3geVBHwHaEK?w=279&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 25, symbol: "Mn", name: "Manganeso", mass: 54.938, row: 4, column: 7,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.PiPSb_yaiJL22c4AzFLmewHaED?w=337&h=184&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 26, symbol: "Fe", name: "Hierro", mass: 55.845, row: 4, column: 8,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.LcwtucMB9qkdI7ZY2HdL1QHaFP?w=257&h=181&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 27, symbol: "Co", name: "Cobalto", mass: 58.933, row: 4, column: 9,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.o0bXJ87ZsUuiXwHIUpsoGgHaHa?w=163&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 28, symbol: "Ni", name: "Níquel", mass: 58.693, row: 4, column: 10,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.TeVNpd5ZWLYIPYkfpATpmAHaEw?w=277&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 29, symbol: "Cu", name: "Cobre", mass: 63.546, row: 4, column: 11,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.Yb6a25qUQM89ZMM-A_lCSgHaHa?w=191&h=191&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 30, symbol: "Zn", name: "Zinc", mass: 65.38, row: 4, column: 12,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.5cdvdI05IQVnPgPFsB9DigHaEQ?w=247&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 31, symbol: "Ga", name: "Galio", mass: 69.723, row: 4, column: 13,
        category: "metal-post-transicion", type: "Otro metal", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.e0eHsHz6gatqcGgR5-UpVAHaE8?w=284&h=189&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 32, symbol: "Ge", name: "Germanio", mass: 72.63, row: 4, column: 14,
        category: "metaloide", type: "Metaloide", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.kRcQ07a0Ng1IdZka300qTwHaE9?w=269&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 33, symbol: "As", name: "Arsénico", mass: 74.922, row: 4, column: 15,
        category: "metaloide", type: "Metaloide", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.r8Al8VEypqF0Z_veloeiQwHaFN?w=252&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 34, symbol: "Se", name: "Selenio", mass: 78.971, row: 4, column: 16,
        category: "no-metal", type: "No metal", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.hT5vNzDNZiDpQR62UQTgjAHaEt?w=249&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 35, symbol: "Br", name: "Bromo", mass: 79.904, row: 4, column: 17,
        category: "halogeno", type: "Halógeno", state: "Líquido",
        image: "https://th.bing.com/th/id/OIP.INnuVDGg_RCfxNhvtXMzRAHaEn?w=289&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 36, symbol: "Kr", name: "Kriptón", mass: 83.798, row: 4, column: 18,
        category: "gas-noble", type: "Gas Noble", state: "Gas",
        image: "https://tse1.mm.bing.net/th/id/OIP.NOt6FqeextVUaZdBMm6VCwHaE8?pid=ImgDet&w=195&h=130&c=7&dpr=1.4&o=7&rm=3"
    },
    // Periodo 5
    {
        number: 37, symbol: "Rb", name: "Rubidio", mass: 85.468, row: 5, column: 1,
        category: "alcalino", type: "Metal Alcalino", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.2O82e9wGcB76oyOIuzMirQHaHa?w=177&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 38, symbol: "Sr", name: "Estroncio", mass: 87.62, row: 5, column: 2,
        category: "alcalinoterreo", type: "Metal Alcalinotérreo", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.PTHoB7No58i_odis63cmHwHaD_?w=328&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 39, symbol: "Y", name: "Itrio", mass: 88.906, row: 5, column: 3,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.0NSANEi4r8PTf65QxWimFQHaEY?w=290&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 40, symbol: "Zr", name: "Zirconio", mass: 91.224, row: 5, column: 4,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.5fKtywnv-igAS88byzGlMAHaFc?w=217&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 41, symbol: "Nb", name: "Niobio", mass: 92.906, row: 5, column: 5,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.FtEquiIfGSxUAe05Fd8FqQHaE8?w=270&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 42, symbol: "Mo", name: "Molibdeno", mass: 95.95, row: 5, column: 6,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.q_PmhFI8Am2BMG3pFEpT-wAAAA?w=205&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 43, symbol: "Tc", name: "Tecnecio", mass: 98, row: 5, column: 7,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.ckb8NQypcaM2hCZWlWD3UQHaF3?w=234&h=185&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 44, symbol: "Ru", name: "Rutenio", mass: 101.07, row: 5, column: 8,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.-cBKmsGIXx2--c50JP54mgAAAA?w=191&h=133&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 45, symbol: "Rh", name: "Rodio", mass: 102.91, row: 5, column: 9,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.yWhc4uRSsGL1CTpEAMtRewHaDs?w=349&h=174&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 46, symbol: "Pd", name: "Paladio", mass: 106.42, row: 5, column: 10,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.3wgAUVtJp2cjjH60L-il8gHaHa?w=164&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 47, symbol: "Ag", name: "Plata", mass: 107.87, row: 5, column: 11,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.pV-_aPcwPcIPgEnST8dVmwHaEK?w=275&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 48, symbol: "Cd", name: "Cadmio", mass: 112.41, row: 5, column: 12,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://consejoaldia.com/wp-content/uploads/2019/01/cadmio-piedra.jpg"
    },
    {
        number: 49, symbol: "In", name: "Indio", mass: 114.82, row: 5, column: 13,
        category: "metal-post-transicion", type: "Otro metal", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.TTZrxj5oi-2wo7M9pTgZggHaEO?w=297&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 50, symbol: "Sn", name: "Estaño", mass: 118.71, row: 5, column: 14,
        category: "metal-post-transicion", type: "Otro metal", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.ZGny_azJapArYjfiUyGVxAHaE8?w=265&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 51, symbol: "Sb", name: "Antimonio", mass: 121.76, row: 5, column: 15,
        category: "metaloide", type: "Metaloide", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.ALk79sboChDaV_7H2-t6qAHaE8?w=215&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 52, symbol: "Te", name: "Telurio", mass: 127.60, row: 5, column: 16,
        category: "metaloide", type: "Metaloide", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.aGzA27Fsz60GnJ4M7UfTWQHaEH?w=283&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 53, symbol: "I", name: "Yodo", mass: 126.90, row: 5, column: 17,
        category: "halogeno", type: "Halógeno", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.uhz4S4QHWn73lV2h-nnOLQAAAA?w=192&h=151&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 54, symbol: "Xe", name: "Xenón", mass: 131.29, row: 5, column: 18,
        category: "gas-noble", type: "Gas Noble", state: "Gas",
        image: "https://th.bing.com/th/id/OIP.5NFn6Q-TAtPTFjmkbvSL7QHaE7?w=239&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    // Periodo 6
    {
        number: 55, symbol: "Cs", name: "Cesio", mass: 132.91, row: 6, column: 1,
        category: "alcalino", type: "Metal Alcalino", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.ozmuT5thZvUtLyW-iF1gFgHaDz?w=275&h=179&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 56, symbol: "Ba", name: "Bario", mass: 137.33, row: 6, column: 2,
        category: "alcalinoterreo", type: "Metal Alcalinotérreo", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.C4LPtClUNKoyjII4NL5_rgHaES?w=283&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
    number: "57-71", // Texto para mostrar
    symbol: "*",     // Opcional, puedes quitarlo si no lo quieres
    name: "Lantánidos",
    mass: "",        // Sin masa
    row: 6,          // Fila en la tabla principal
    column: 3,       // Columna en la tabla principal
    category: "lantanido", // Usa el mismo color que la serie
    type: "Serie Química",
    state: "-",
    image: ""        // Sin imagen
},
    // Lantánidos (Fila 1 Inferior - se muestran en la fila 9 visualmente)
    {
        number: 57, symbol: "La", name: "Lantano", mass: 138.91, row: 9, column: 3,
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.aKl92eGSvYPHIbEtqSxP4QHaEK?w=300&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 58, symbol: "Ce", name: "Cerio", mass: 140.12, row: 9, column: 4,
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.lEF_2Rtagn8PF4kCtWgllgHaEK?w=282&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 59, symbol: "Pr", name: "Praseodimio", mass: 140.91, row: 9, column: 5,
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.WKGfiW1KR9soq8O1bSGBGQHaET?w=317&h=183&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 60, symbol: "Nd", name: "Neodimio", mass: 144.24, row: 9, column: 6,
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.SQGVBTuSf2EZ60NhG-CxjgHaFI?w=191&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 61, symbol: "Pm", name: "Prometio", mass: 145, row: 9, column: 7,
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.PP9JvFtBZpkoeQ1iHiU9MQHaE9?w=251&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 62, symbol: "Sm", name: "Samario", mass: 150.36, row: 9, column: 8,
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://th.bing.com/th/id/R.c631e1d9f5d51deff5c9665bb2f29468?rik=a%2bloF6mhx179gA&riu=http%3a%2f%2fperiodictable.com%2fSamples%2f062.6%2fs13.JPG&ehk=HzA8T67Mc1TjL%2bHbNjT%2ffXU2yQttZZgeCU2D9k9%2fS5g%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        number: 63, symbol: "Eu", name: "Europio", mass: 151.96, row: 9, column: 9,
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.XlUfIJphh9bUchnguq7jLAHaEK?w=298&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 64, symbol: "Gd", name: "Gadolinio", mass: 157.25, row: 9, column: 10,
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.3lwpsKwv3D0D6cyiHSWTRQHaEK?w=328&h=184&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 65, symbol: "Tb", name: "Terbio", mass: 158.93, row: 9, column: 11,
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.-gyrCJrRa3HczWkIdqemIgAAAA?w=199&h=123&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 66, symbol: "Dy", name: "Disprosio", mass: 162.50, row: 9, column: 12,
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.FqPqpxbSpPBEdgb_27dAbgHaHa?w=168&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 67, symbol: "Ho", name: "Holmio", mass: 164.93, row: 9, column: 13,
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://www.lifeder.com/wp-content/uploads/2020/01/Ultrapure_holmium_17_grams._Original_size_in_cm_-_1.5_x_2.5.jpg"
    },
    {
        number: 68, symbol: "Er", name: "Erbio", mass: 167.26, row: 9, column: 14,
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.kTh4S1i1x0qrJ3iNXhmFYgHaE7?w=249&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 69, symbol: "Tm", name: "Tulio", mass: 168.93, row: 9, column: 15,
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://tierrasraras.org/elementos/tulio/mineral-tulio.jpg"
    },
    {
        number: 70, symbol: "Yb", name: "Iterbio", mass: 173.05, row: 9, column: 16,
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.S9VYUVwSwm9tudsNRyvTxwHaEK?w=304&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 71, symbol: "Lu", name: "Lutecio", mass: 174.97, row: 9, column: 17, // Column visual 17, químico 3
        category: "lantanido", type: "Lantánido", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.M4GuJuWFsBqKN0ym7Ky5tgHaED?w=335&h=183&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    // Continuación Periodo 6
    {
        number: 72, symbol: "Hf", name: "Hafnio", mass: 178.49, row: 6, column: 4,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.EIxkuapiQBExGWsUdgoASgHaF8?w=211&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 73, symbol: "Ta", name: "Tantalio", mass: 180.95, row: 6, column: 5,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.AepkwF_75GQG_2XQU4MjIgHaE9?w=215&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 74, symbol: "W", name: "Wolframio", mass: 183.84, row: 6, column: 6,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.gEnsdbk8g_I2mO4nnQtlBwHaFi?w=248&h=185&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 75, symbol: "Re", name: "Renio", mass: 186.21, row: 6, column: 7,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.Cn_t4oWcOujvHurFUWv_cgHaEB?w=304&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 76, symbol: "Os", name: "Osmio", mass: 190.23, row: 6, column: 8,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.PUr5ZAy7MbwKse6jYMcGogHaEw?w=262&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 77, symbol: "Ir", name: "Iridio", mass: 192.22, row: 6, column: 9,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.yV8l_i2ZBZLRgvuu6XSLNwHaE7?w=252&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 78, symbol: "Pt", name: "Platino", mass: 195.08, row: 6, column: 10,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.Hlc2G_-poSmlvgC8Fzg3qQHaE7?w=251&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 79, symbol: "Au", name: "Oro", mass: 196.97, row: 6, column: 11,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.vWMpXczE6iY-78PAN2cMxwHaDt?w=274&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 80, symbol: "Hg", name: "Mercurio", mass: 200.59, row: 6, column: 12,
        category: "metal-transicion", type: "Metal de Transición", state: "Líquido",
        image: "https://th.bing.com/th/id/OIP.3jT_9oVkBDoDgLghTmvCmgHaEK?w=281&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 81, symbol: "Tl", name: "Talio", mass: 204.38, row: 6, column: 13,
        category: "metal-post-transicion", type: "Otro metal", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.yv48epNQxsWNWoCwvS4scgHaDt?w=255&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 82, symbol: "Pb", name: "Plomo", mass: 207.2, row: 6, column: 14,
        category: "metal-post-transicion", type: "Otro metal", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.bu8WTva6JyIWCKPKKBkp1AHaEK?w=331&h=186&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 83, symbol: "Bi", name: "Bismuto", mass: 208.98, row: 6, column: 15,
        category: "metal-post-transicion", type: "Otro metal", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.r4xTgE0bh0fvvdwUpwpsfwHaE8?w=265&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 84, symbol: "Po", name: "Polonio", mass: 209, row: 6, column: 16,
        category: "metaloide", type: "Metaloide", state: "Sólido",
        image: "https://th.bing.com/th/id/OIP.nw-SYNywE1XeCXb2CaP-EAHaFj?w=233&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 85, symbol: "At", name: "Astato", mass: 210, row: 6, column: 17,
        category: "halogeno", type: "Halógeno", state: "Sólido", // Estado deducido
        image: "https://th.bing.com/th/id/OIP.8M2hX5i3qbPA37-MEtaQqQHaE7?w=270&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 86, symbol: "Rn", name: "Radón", mass: 222, row: 6, column: 18,
        category: "gas-noble", type: "Gas Noble", state: "Gas",
        image: "https://tse4.mm.bing.net/th/id/OIP.j4eu7YV60v6In6i1iIvAJwHaD5?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    // Periodo 7
    {
        number: 87, symbol: "Fr", name: "Francio", mass: 223, row: 7, column: 1,
        category: "alcalino", type: "Metal Alcalino", state: "Sólido",
        image: "https://th.bing.com/th/id/R.80a5e537018d922ba0c6386704716047?rik=h0efI5yR603B3Q&riu=http%3a%2f%2fwww.chemistrylearner.com%2fwp-content%2fuploads%2f2018%2f02%2fPictures-for-Francium.png&ehk=QDSU6znyyQTuiuf%2bt8TAfIJCHmvyH%2fcFq8EJGOTB1%2f0%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        number: 88, symbol: "Ra", name: "Radio", mass: 226, row: 7, column: 2,
        category: "alcalinoterreo", type: "Metal Alcalinotérreo", state: "Sólido",
        image: "https://tse4.mm.bing.net/th/id/OIP.T8MUWGuqHsxtvIlMf92zRAHaE8?pid=ImgDet&w=195&h=130&c=7&dpr=1.4&o=7&rm=3"
    },
    {
    number: "89-103", // Texto para mostrar
    symbol: "**",    // Opcional
    name: "Actínidos",
    mass: "",        // Sin masa
    row: 7,          // Fila en la tabla principal
    column: 3,       // Columna en la tabla principal
    category: "actinido", // Usa el mismo color que la serie
    type: "Serie Química",
    state: "-",
    image: ""        // Sin imagen
},
    // Actínidos (Fila 2 Inferior - se muestran en la fila 10 visualmente)
    {
        number: 89, symbol: "Ac", name: "Actinio", mass: 227, row: 10, column: 3,
        category: "actinido", type: "Actínido", state: "Sólido",
        image: "https://geologiaweb.com/wp-content/uploads/2020/08/actinio.jpg"
    },
    {
        number: 90, symbol: "Th", name: "Torio", mass: 232.04, row: 10, column: 4,
        category: "actinido", type: "Actínido", state: "Sólido",
        image: "https://tse1.mm.bing.net/th/id/OIP.w7mDSowO-aHjI0H4mYb23QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        number: 91, symbol: "Pa", name: "Protactinio", mass: 231.04, row: 10, column: 5,
        category: "actinido", type: "Actínido", state: "Sólido",
        image: "https://tse3.mm.bing.net/th/id/OIP.AII8toKhiWpGK4llyEPcwQHaE8?w=1200&h=800&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        number: 92, symbol: "U", name: "Uranio", mass: 238.03, row: 10, column: 6,
        category: "actinido", type: "Actínido", state: "Sólido",
        image: "https://enciclopedia.net/wp-content/uploads/2015/05/Uranio.jpg"
    },
    {
        number: 93, symbol: "Np", name: "Neptunio", mass: 237, row: 10, column: 7,
        category: "actinido", type: "Actínido", state: "Sólido",
        image: "https://th.bing.com/th/id/R.c52b8e3e535825d91a3665902d87583f?rik=SIUWUUxy%2b3BwGg&riu=http%3a%2f%2fwww.chemistrylearner.com%2fwp-content%2fuploads%2f2018%2f02%2fNeptunium-Element.jpg&ehk=AfufLyJfeaG3koSM5Uwy9vTrFzapP8wSisNwmK8IfB4%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        number: 94, symbol: "Pu", name: "Plutonio", mass: 244, row: 10, column: 8,
        category: "actinido", type: "Actínido", state: "Sólido",
        image: "https://tse1.mm.bing.net/th/id/OIP.jF8HgWt7ZlfzErgtxdWuvAHaFS?w=768&h=548&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        number: 95, symbol: "Am", name: "Americio", mass: 243, row: 10, column: 9,
        category: "actinido", type: "Actínido", state: "Sólido",
        image: "https://periodic-table.io/images/elements/Am.jpg"
    },
    {
        number: 96, symbol: "Cm", name: "Curio", mass: 247, row: 10, column: 10,
        category: "actinido", type: "Actínido", state: "Sólido",
        image: "https://www.tablaperiodica.org/wp-content/uploads/2022/04/curio.png"
    },
    {
        number: 97, symbol: "Bk", name: "Berkelio", mass: 247, row: 10, column: 11,
        category: "actinido", type: "Actínido", state: "Sólido",
        image: "https://th.bing.com/th/id/R.cde52aff33f76b220e55d61c3a9f23fa?rik=Lp6W9SjxaH3iNA&riu=http%3a%2f%2fwww.ecured.cu%2fimages%2fthumb%2f4%2f47%2fBerkelio.jpg%2f250px-Berkelio.jpg&ehk=9NggjuTtd%2b3Hsvo08ig9XJd0LhWhs5FcXm1VLMiEC3w%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        number: 98, symbol: "Cf", name: "Californio", mass: 251, row: 10, column: 12,
        category: "actinido", type: "Actínido", state: "Sólido",
        image: "https://conceptodefinicion.de/wp-content/uploads/2015/12/californio-2.jpg"
    },
    {
        number: 99, symbol: "Es", name: "Einstenio", mass: 252, row: 10, column: 13,
        category: "actinido", type: "Actínido", state: "Sólido",
        image: "https://th.bing.com/th/id/R.02c89b143b30182e3c98c2b1ffa2fb4e?rik=KbByrkqPIz6bZA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-bsWAP2BICkk%2fVaFAu1N4G_I%2fAAAAAAAASUg%2fH1Rwt8qkh4Y%2fs400%2fEinst%2525C3%2525AAnio%252B-%252B%252528Es%252529.jpg&ehk=bmiVsj9NyVivCz6ZPvTD%2f7zZdHzPBkUMMWFfdbZ5qAA%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        number: 100, symbol: "Fm", name: "Fermio", mass: 257, row: 10, column: 14,
        category: "actinido", type: "Actínido", state: "Sólido", // Previsto
        image: "https://tse1.mm.bing.net/th/id/OIP.TnSeQy3Cc9dQJaq1T_DRkgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        number: 101, symbol: "Md", name: "Mendelevio", mass: 258, row: 10, column: 15,
        category: "actinido", type: "Actínido", state: "Sólido", // Previsto
        image: "https://conceptodefinicion.de/wp-content/uploads/2015/12/mendelevio.jpg"
    },
    {
        number: 102, symbol: "No", name: "Nobelio", mass: 259, row: 10, column: 16,
        category: "actinido", type: "Actínido", state: "Sólido", // Previsto
        image: "https://tse3.mm.bing.net/th/id/OIP.LecQYPvSOZ_xWMKIP4h7EgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        number: 103, symbol: "Lr", name: "Lawrencio", mass: 262, row: 10, column: 17, // Col visual 17, químico 3
        category: "actinido", type: "Actínido", state: "Sólido", // Previsto
        image: "https://www.chemistrylearner.com/wp-content/uploads/2018/03/Lawrencium.jpg"
    },
    // Continuación Periodo 7
    {
        number: 104, symbol: "Rf", name: "Rutherfordio", mass: 267, row: 7, column: 4,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido", // Previsto
        image: "https://th.bing.com/th/id/OIP.u0mClcRFW0PTaqKj460vowAAAA?w=170&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 105, symbol: "Db", name: "Dubnio", mass: 268, row: 7, column: 5,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido", // Previsto
        image: "https://tse3.mm.bing.net/th/id/OIP.kzJhpDwUrVSF4rGtjjb8zwHaEn?pid=ImgDet&w=195&h=122&c=7&dpr=1.4&o=7&rm=3"
    },
    {
        number: 106, symbol: "Sg", name: "Seaborgio", mass: 269, row: 7, column: 6,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido", // Previsto
        image: "https://th.bing.com/th/id/OIP.giOHl8xYxxCFoLtTFWLy7gHaFS?w=260&h=186&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 107, symbol: "Bh", name: "Bohrio", mass: 270, row: 7, column: 7,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido", // Previsto
        image: "https://www.tablaperiodica.org/wp-content/uploads/2020/06/Bohrio.jpg"
    },
    {
        number: 108, symbol: "Hs", name: "Hasio", mass: 277, row: 7, column: 8,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido", // Previsto
        image: "https://th.bing.com/th/id/OIP.4EOADPPT7vwuJXG6du2POwHaEK?w=305&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 109, symbol: "Mt", name: "Meitnerio", mass: 278, row: 7, column: 9,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido", // Previsto
        image: "https://th.bing.com/th/id/OIP.ykv7aTAS7-BqgfApvAFI6QAAAA?w=152&h=158&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 110, symbol: "Ds", name: "Darmstadtio", mass: 281, row: 7, column: 10,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido", // Previsto
        image: "https://th.bing.com/th/id/OIP.9J8FP08ItTIUOr8EIUp0JgAAAA?w=175&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 111, symbol: "Rg", name: "Roentgenio", mass: 282, row: 7, column: 11,
        category: "metal-transicion", type: "Metal de Transición", state: "Sólido", // Previsto
        image: "https://th.bing.com/th/id/OIP.-6BsWaWNFSzVi_ji9Ov4jgAAAA?w=175&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 112, symbol: "Cn", name: "Copernicio", mass: 285, row: 7, column: 12,
        category: "metal-transicion", type: "Metal de Transición", state: "Gas", // Previsto
        image: "https://tse3.mm.bing.net/th/id/OIP.MMGkMvLwNl-P2qX2pDSa9AHaEl?pid=ImgDet&w=195&h=120&c=7&dpr=1.4&o=7&rm=3"
    },
    {
        number: 113, symbol: "Nh", name: "Nihonio", mass: 286, row: 7, column: 13,
        category: "metal-post-transicion", type: "Otro metal", state: "Sólido", // Previsto
        image: "https://th.bing.com/th/id/OIP.LUyrdeaYqHNAhgvKZFhrVgHaDw?w=323&h=177&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
    },
    {
        number: 114, symbol: "Fl", name: "Flerovio", mass: 289, row: 7, column: 14,
        category: "metal-post-transicion", type: "Otro metal", state: "Sólido", // Previsto
        image: "https://th.bing.com/th/id/OIP.w0s1uMKM8XIG9dH1_rKO7wHaE8?w=282&h=188&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
        number: 115, symbol: "Mc", name: "Moscovio", mass: 290, row: 7, column: 15,
        category: "metal-post-transicion", type: "Otro metal", state: "Sólido", // Previsto
        image: "https://tse1.mm.bing.net/th/id/OIP.9Fs4bO5Fq4lmaFDbC5zkuwHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        number: 116, symbol: "Lv", name: "Livermorio", mass: 293, row: 7, column: 16,
        category: "metal-post-transicion", type: "Otro metal", state: "Sólido", // Previsto
        image: "https://img.freepik.com/premium-vector/atomic-structure-livermorium-with-atomic-number-atomic-mass-energy-levels_842931-1068.jpg"
    },
    {
        number: 117, symbol: "Ts", name: "Teneso", mass: 294, row: 7, column: 17,
        category: "halogeno", type: "Halógeno", state: "Sólido", // Previsto
        image: "https://electronconfiguration.net/wp-content/uploads/1650491286_994_electron-configuration-of-Teneso.jpg"
    },
    {
        number: 118, symbol: "Og", name: "Oganesón", mass: 294, row: 7, column: 18,
        category: "gas-noble", type: "Gas Noble", state: "Gas", // Previsto
        image: "https://www.shutterstock.com/image-vector/oganesson-atom-shell-260nw-1259753158.jpg"
    }
];

// Ajuste visual para Lantanoides y Actinoides - Opcional
// Esto asegura que Lu y Lr aparezcan visualmente en la fila 6 y 7,
// aunque sus datos los ubiquen en las filas inferiores para el cálculo
document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('periodic-table');
  if (table) {
    const lu = table.querySelector('.element.lantanido[style*="grid-column: 17"]');
    if (lu) lu.style.gridRow = 6; lu.style.gridColumn = 3; // Mover a la posición de *

    const lr = table.querySelector('.element.actinido[style*="grid-column: 17"]');
    if (lr) lr.style.gridRow = 7; lr.style.gridColumn = 3; // Mover a la posición de **

    // Opcionalmente, crear los placeholders * y ** si no los creaste en JS
    if (!table.querySelector('.element[style*="grid-row: 6"][style*="grid-column: 3"]')) {
       const placeholderLa = document.createElement('div');
       placeholderLa.classList.add('element', 'lantanide-placeholder'); // Podrías darle un estilo diferente
       placeholderLa.style.gridRow = 6;
       placeholderLa.style.gridColumn = 3;
       placeholderLa.innerHTML = `<div class="atomic-number">57-71</div><div class="symbol">*</div><div class="name">Lantánidos</div>`;
       table.appendChild(placeholderLa);
    }
     if (!table.querySelector('.element[style*="grid-row: 7"][style*="grid-column: 3"]')) {
       const placeholderAc = document.createElement('div');
       placeholderAc.classList.add('element', 'actinide-placeholder'); // Podrías darle un estilo diferente
       placeholderAc.style.gridRow = 7;
       placeholderAc.style.gridColumn = 3;
       placeholderAc.innerHTML = `<div class="atomic-number">89-103</div><div class="symbol">**</div><div class="name">Actínidos</div>`;
       table.appendChild(placeholderAc);
    }
  }
});