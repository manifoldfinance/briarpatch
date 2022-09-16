// Simple perlin noise
let gradient: [number, number][][]

function regenPerlin()
{
    gradient = [];
    for(let x=0; x < 10;x++) {
        gradient[x] = [];
        for(let y=0; y < 10;y++) {
            let angle = Math.random();
            let s = Math.sin(angle);
            let c = Math.cos(angle);
            gradient[x][y] = [s, c];
        }
    }
}


// Function to linearly interpolate between a0 and a1
// Weight w should be in the range [0.0, 1.0]
function lerp(a0: number, a1: number, w: number) {
    return (1.0 - w)*a0 + w*a1;
}

// Computes the dot product of the distance and gradient vectors.
function dotGridGradient(ix: number, iy: number, x: number, y: number): number
{
    let dx = x - ix;
    let dy = y - iy;
    return (dx*gradient[iy][ix][0] + dy*gradient[iy][ix][1]);
}

// Compute Perlin noise at coordinates x, y
function perlin(x: number, y: number) {

    // Determine grid cell coordinates
    let x0 = Math.floor(x);
    let x1 = x0 + 1;
    let y0 = Math.floor(y);
    let y1 = y0 + 1;

    // Determine interpolation weights
    // Could also use higher order polynomial/s-curve here
    let  sx = x - x0;
    let sy = y - y0;

    // Interpolate between grid point gradients
    let n0 = dotGridGradient(x0, y0, x, y);
    let n1 = dotGridGradient(x1, y0, x, y);
    let ix0 = lerp(n0, n1, sx);
    n0 = dotGridGradient(x0, y1, x, y);
    n1 = dotGridGradient(x1, y1, x, y);
    let ix1 = lerp(n0, n1, sx);
    let value = lerp(ix0, ix1, sy);

    return value;
}
