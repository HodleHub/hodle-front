import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

export interface Article extends ArticleMeta {
  content: any;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const filePath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    const { content, data } = matter(fileContents);
    
    const mdxSource = await compileMDX({
      source: content,
      options: { 
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm]
        }
      }
    });
    
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      imageUrl: data.imageUrl,
      content: mdxSource.content
    };
  } catch (error) {
    console.error(`Error getting article for slug ${slug}:`, error);
    return null;
  }
}

export function getAllArticles(): ArticleMeta[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  
  const allArticles = fileNames
    .filter(fileName => path.extname(fileName) === '.mdx')
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        imageUrl: data.imageUrl,
      };
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
    
  return allArticles;
} 