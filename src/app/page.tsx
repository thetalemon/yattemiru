import styles from '@/app/page.module.scss'
import { remark } from 'remark'
import html from 'remark-html'
import Image from 'next/image'
import { client } from '@/lib/client'
import { ElementType } from 'react'

type ContentBlock = {
  title: string
  indent: number
  contents: string
}

type Contents = {
  title: string
  contents: ContentBlock[]
}

const getContent = async (): Promise<ContentBlock[]> => {
  const data = await client.get({ endpoint: 'contents' })

  const contentsData = data as Contents

  const mappedData = await Promise.all(
    contentsData.contents.map(async (item) => {
      return {
        ...item,
        contents: await changeMd2Html(item.contents),
      }
    })
  )

  return mappedData as ContentBlock[]
}

const changeMd2Html = async (content: string) => {
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()
  return contentHtml
}

const Home = async () => {
  const contents = await getContent()
  return (
    <main className={styles.main}>
      <Image
        src='/yattemiru.png'
        width={800}
        height={411}
        alt='Picture of the author'
      />
      <div className={styles.content}>
        {contents.map((item, index) => {
          const HeadingTag = `h${item.indent}` as ElementType
          return (
            <section key={index}>
              <HeadingTag>{item.title}</HeadingTag>

              <div
                dangerouslySetInnerHTML={{
                  __html: item.contents,
                }}
              />
            </section>
          )
        })}
      </div>
    </main>
  )
}

export default Home
