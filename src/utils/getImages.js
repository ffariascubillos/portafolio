// utils/getImages.js
const allImages = import.meta.glob('/src/assets/trabajos/*/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

export function getImagesFrom(folderName) {
  const images = Object.entries(allImages)
    .filter(([path]) => path.includes(`/trabajos/${folderName}/`))
    .map(([, module]) => module.default);

  return images;
}
