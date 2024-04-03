export async function animateBrick(wrapperInstance: HTMLElement, delay: number) {
  const bricks = wrapperInstance.children as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < bricks.length; i++) {
    const brick: HTMLElement = bricks[i];
    brick.style.opacity = "0";
  }
  for (let i = 0; i < bricks.length; i++) {
    const brick: HTMLElement = bricks[i];
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        brick.style.opacity = "1";
        resolve();
      }, delay);
    });
  }
}