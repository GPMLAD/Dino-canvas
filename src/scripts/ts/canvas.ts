export const canvas = document.getElementById('canvas') as HTMLCanvasElement;
export const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

export const updateCanvasProps = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight / 2;
};

window.addEventListener('resize', updateCanvasProps);

export const clearMap = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
