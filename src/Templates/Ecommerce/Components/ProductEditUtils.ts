import { ProjectState } from "../../../Redux/ProjectSlice";

export const resizeImage = (file: File) => {
    return new Promise<File>((resolve) => {
      const MAX_SIZE = 300;
      const img = document.createElement('img');
      img.onload = () => {
        let width = img.width;
        let height = img.height;
  
        if (width > MAX_SIZE || height > MAX_SIZE) {
          if (width > height) {
            height *= MAX_SIZE / width;
            width = MAX_SIZE;
          } else {
            width *= MAX_SIZE / height;
            height = MAX_SIZE;
          }
        }
  
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
  
        const ctx = canvas.getContext('2d');
  
        if (ctx) { // Add null check
          ctx.drawImage(img, 0, 0, width, height);
  
          canvas.toBlob((blob) => {
            if (blob) { // Add null check
              const resizedFile = new File([blob], file.name, {
                type: file.type,
                lastModified: Date.now(),
              });
              resolve(resizedFile);
            } else {
              // Handle the case when blob is null
              console.log('Error: Could not create blob');
            }
          }, file.type);
        }
      };
  
      const reader = new FileReader();
      reader.onloadend = () => {
        img.src = reader.result as string;
      };
  
      reader.readAsDataURL(file);
    });
  };
  
  /**Extract products categories */
export const extractCategories = (project: ProjectState) => {
  const categoriesArray: string[] = [];
  project.products.map(product => {
    if (product.category !== '' && !categoriesArray.includes(product.category)){
      categoriesArray.push(product.category);
    }
  });
  return categoriesArray;
}