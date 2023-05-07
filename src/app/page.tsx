import styles from './page.module.scss'
import { remark } from 'remark'
import html from 'remark-html'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'

export async function getMdData(): Promise<{
  fullPath: string
  contentHtml: string
}> {
  const fullPath = path.join('./src/app/', 'content.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    fullPath,
    contentHtml,
    ...matterResult.data,
  }
}

const Home = async () => {
  const contentData = await getMdData()
  return (
    <main className={styles.main}>
      <Image
        src='/yattemiru.png'
        width={800}
        height={411}
        alt='Picture of the author'
      />
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: contentData.contentHtml }} />
      </div>
    </main>
  )
}

export default Home
