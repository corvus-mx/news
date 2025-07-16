import { glob } from 'astro/loaders';

// Configuración de categorías
export const CATEGORIES = {
  'soberania': {
    name: 'Soberanía',
    color: '#00cc66',
    icon: '🇲🇽'
  },
  'corrupcion-justicia': {
    name: 'Corrupción y Justicia',
    color: '#ff9500',
    icon: '⚖️'
  },
  'internacional-geopolitica': {
    name: 'Internacional y Geopolítica',
    color: '#007acc',
    icon: '🌍'
  },
  'crimen-organizado': {
    name: 'Crimen Organizado',
    color: '#cc0000',
    icon: '🚨'
  }
};

// Función para obtener todas las noticias de una categoría
export async function getNewsByCategory(category) {
  try {
    // Buscar todas las carpetas de noticias en la categoría
    const newsPattern = `src/content/feeds/${category}/*/index.md`;
    const newsFiles = await glob(newsPattern);
    
    const news = [];
    
    for (const file of newsFiles) {
      try {
        const { default: content, frontmatter } = await import(file);
        
        // Extraer el ID de la carpeta (ej: 2025-001)
        const pathParts = file.split('/');
        const newsId = pathParts[pathParts.length - 2];
        
        news.push({
          id: newsId,
          slug: newsId,
          category,
          categoryInfo: CATEGORIES[category],
          image: `/feeds/${category}/${newsId}/img1.png`,
          ...frontmatter,
          content,
          url: `/feeds/${category}/${newsId}/`
        });
      } catch (error) {
        console.warn(`Error loading news file ${file}:`, error);
      }
    }
    
    // Ordenar por fecha (más reciente primero)
    return news.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.warn(`Error loading news for category ${category}:`, error);
    return [];
  }
}

// Función para obtener la noticia más reciente de una categoría
export async function getLatestNewsByCategory(category) {
  const news = await getNewsByCategory(category);
  return news.length > 0 ? news[0] : null;
}

// Función para obtener todas las noticias de todas las categorías
export async function getAllNews() {
  const allNews = [];
  
  for (const category of Object.keys(CATEGORIES)) {
    const categoryNews = await getNewsByCategory(category);
    allNews.push(...categoryNews);
  }
  
  // Ordenar por fecha (más reciente primero)
  return allNews.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Función para obtener la noticia más reciente de todas las categorías
export async function getLatestNews() {
  const allNews = await getAllNews();
  return allNews.length > 0 ? allNews[0] : null;
}

// Función para formatear fechas
export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    timeZone: 'America/Mexico_City'
  };
  return date.toLocaleDateString('es-MX', options);
}

// Función para formatear fecha y hora
export function formatDateTime(dateString) {
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Mexico_City'
  };
  return date.toLocaleDateString('es-MX', options);
}